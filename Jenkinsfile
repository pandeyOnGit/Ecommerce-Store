pipeline {
    agent any

    environment {
        // --- CUSTOMIZE THIS VARIABLE ---
        DOCKER_IMAGE = "adityapandey/ecommerce-store" // Use your Docker Hub username/repo
        PROD_SERVER_IP = "3.110.103.157"
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
                        sh "docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}"
                    }
                    def customImage = docker.build(DOCKER_IMAGE)
                    customImage.push('latest')
                }
            }
        }

        stage('Deploy to Production Server') {
            steps {
                sshagent(['prod-server-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ${PROD_SERVER_USER}@${PROD_SERVER_IP} "
                            docker pull ${DOCKER_IMAGE}:latest
                            docker stop ${CONTAINER_NAME} || true
                            docker rm ${CONTAINER_NAME} || true
                            docker run -d --name ${CONTAINER_NAME} -p 80:80 ${DOCKER_IMAGE}:latest
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