pipeline {
    agent any

    environment {
        // Define your Docker Hub username and image name
        DOCKER_IMAGE = "pandeyOnWork/my-react-app"
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clones your repository using the configured credentials
                git credentialsId: 'github-ssh-key', url: 'git@github.com:pandeyOnGit/Ecommerce-Store.git'
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Use the Docker Hub credentials to log in
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    }

                    // Build the Docker image from your Dockerfile
                    def customImage = docker.build(DOCKER_IMAGE)

                    // Push the 'latest' tag to Docker Hub
                    customImage.push('latest')

                    // Optional: Push a versioned tag using the build number
                    customImage.push("${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Deploy to Production Server') {
            steps {
                // Use the SSH Agent plugin with your server's SSH key
                sshagent(['prod-server-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@3.110.103.137 "
                            echo 'Deploying new Docker container...'
                            
                            # 1. Pull the latest image from Docker Hub
                            docker pull ${DOCKER_IMAGE}:latest
                            
                            # 2. Stop and remove the old container (if it exists)
                            docker stop my-react-container || true
                            docker rm my-react-container || true
                            
                            # 3. Run the new container from the updated image
                            # Maps port 80 on the host to port 80 in the container.
                            # Adjust if your Dockerfile EXPOSEs a different port (e.g., -p 80:3000)
                            docker run -d --name my-react-container -p 80:80 ${DOCKER_IMAGE}:latest
                            
                            echo 'Deployment complete!'
                        "
                    '''
                }
            }
        }
    }
    
    post {
        always {
            // Clean up by logging out of Docker Hub
            sh "docker logout"
        }
        success {
            echo 'Pipeline finished successfully! ✅'
        }
        failure {
            echo 'Pipeline failed. ❌'
        }
    }
}