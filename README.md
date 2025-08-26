E-Commerce Store - A Fully Automated CI/CD Project
This repository contains the source code for a modern e-commerce web application. The project serves as a demonstration of a complete CI/CD pipeline, automating the entire process from code commit to a live, containerized deployment on the cloud.

Live Demo: http://13.204.64.123

🚀 Project Overview
This is a feature-rich e-commerce platform built with React. The primary focus of this repository is not just the application itself, but the underlying DevOps infrastructure that powers its deployment. The entire lifecycle of the application is automated, ensuring rapid, reliable, and consistent releases.

🛠️ Tech Stack & Tools
This project utilizes a modern stack for both application development and infrastructure automation.

Frontend: React.js

Cloud Provider: Amazon Web Services (AWS)

CI/CD Automation: Jenkins

Containerization: Docker

Container Registry: Docker Hub

Container Orchestration: Kubernetes (EKS/Kops/Minikube)

🔄 CI/CD Pipeline Architecture
The infrastructure is designed for full automation. When a developer pushes a new commit to the main branch on GitHub, the following CI/CD pipeline is triggered automatically:

GitHub Webhook: A git push sends a webhook notification to the Jenkins server.

Jenkins Job Trigger: Jenkins receives the webhook and starts the pre-configured pipeline job.

Build Stage: Jenkins checks out the latest source code and builds the React application inside a Docker container, creating a production-ready static build.

Push Stage: The newly built Docker image is tagged and pushed to our Docker Hub repository.

Deploy Stage: Jenkins securely connects to our Kubernetes cluster on AWS and applies the updated deployment configuration. Kubernetes then initiates a rolling update, gracefully terminating old application pods and launching new ones with the updated Docker image, ensuring zero downtime.

🐳 Docker Configuration
The application is containerized using a multi-stage Dockerfile for optimization.

Build Stage: Uses a Node.js image to install dependencies and build the React application.

Serve Stage: The static files from the build stage are copied into a lightweight Nginx image, resulting in a small and secure final image.

The final image is hosted on Docker Hub and can be found here:
Docker Hub Repository: https://hub.docker.com/r/pandeyonwork/ecommerce-store

☸️ Kubernetes Deployment
The application's deployment is managed by Kubernetes for scalability, resilience, and efficient resource management.

Deployment: Manages the application's pods. It ensures that a specified number of replicas are always running and handles the rolling update strategy when a new image is deployed.

Service: A LoadBalancer service is used to expose the application to the internet. It creates an AWS Elastic Load Balancer that routes external traffic to the application pods on port 80.

The Kubernetes manifest files (deployment.yaml, service.yaml) defining this infrastructure are located in the k8s/ directory of this repository.

Note: You will need to add your Kubernetes YAML files to a k8s/ directory for this section to be accurate.

💻 How to Run Locally
To run this project on your local machine, you will need Docker installed.

Clone the repository:

git clone https://github.com/pandeyOnGit/Ecommerce-Store.git
cd Ecommerce-Store

Build the Docker image:

docker build -t ecommerce-store .

Run the container:

docker run -d -p 3000:80 ecommerce-store

The application will be available at http://localhost:3000.
