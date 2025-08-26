pipeline {
    agent any

    environment {
        // --- CUSTOMIZE THIS VARIABLE ---
        DOCKER_IMAGE = "pandeyonwork/ecommerce-store" // Use your Docker Hub username/repo
        PROD_SERVER_IP = "13.204.64.123"
        PROD_SERVER_USER = "ubuntu"
        CONTAINER_NAME = "my-react-app"
    }

    stages {
        // THIS STAGE IS REMOVED
        // stage('Clone Repository') { ... }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }
                    
                    // --- REPLACED COMMANDS ---
                    sh "docker build -t ${DOCKER_IMAGE} ."
                    sh "docker push ${DOCKER_IMAGE}:latest"
                    // --- END REPLACED COMMANDS ---
                }
            }
        }

       stage('Deploy to Production Server') {
            steps {
                sshagent(['prod-server-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ${PROD_SERVER_USER}@${PROD_SERVER_IP} "
                            echo '--- Pulling latest Docker image ---'
                            sudo docker pull ${DOCKER_IMAGE}:latest

                            echo '--- Stopping and removing old container ---'
                            sudo docker stop ${CONTAINER_NAME} || true
                            sudo docker rm ${CONTAINER_NAME} || true

                            echo '--- Starting new container on port 80 ---'
                            sudo docker run -d --name ${CONTAINER_NAME} -p 80:80 ${DOCKER_IMAGE}:latest
                        "
                    '''
                }
            }
        }
    }
    
    post {
        always {
            sh "docker logout"
        }
    }
}