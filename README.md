### Jenkins Pipeline for Deploying Ruby React App

This Jenkins pipeline automates the process of deploying a Ruby on Rails and React application. The pipeline includes the following steps:

1. **Cloning the repository**
2. **Installing Ruby dependencies**
3. **Installing Node.js 18 using NVM**
4. **Building the backend Docker image**
5. **Pushing Docker images to DockerHub**

```groovy
pipeline {
    agent any
    environment {
        GIT_REPO = 'https://github.com/AminaYH/RubyonKube.git'
        GIT_BRANCH = 'main'  // Or specify the branch you want to use
    }
    stages {
        stage('Clone Repository') {
            steps {
                script {
                    // Clone the repository
                    git url: GIT_REPO, branch: GIT_BRANCH
                }
            }
        }
        stage('Install Ruby Dependencies') {
            steps {
                script {
                    // Install Ruby dependencies using RVM
                    sh '''
                        # Use bash explicitly to ensure proper environment setup
                        /bin/bash -c "source /home/amina/.rvm/scripts/rvm && rvm install 3.1.0"
                    '''
                }
            }
        }
        stage('Install Node.js 18 using NVM') {
            steps {
                script {
                    // Install Node.js 18 using NVM
                    sh '''
                        /bin/bash -c "source /home/amina/.nvm/nvm.sh && nvm install 18 && nvm use 18"
                    '''
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    // Build the backend Docker image using docker-compose
                    sh '''
                        cd /var/lib/jenkins/workspace/dev
                        docker-compose build
                    '''
                }
            }
        }
        stage('Push Docker Images') {
            steps {
                script {
                    // Login to DockerHub and push the backend image
                    withCredentials([usernamePassword(credentialsId: '3c*************************', 
                                                      usernameVariable: 'DOCKER_USER', 
                                                      passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                            echo "${DOCKER_USER}"
                            docker login --username ********* --password ********
                            docker tag backend-image amina88/backend-image
                            docker push amina88/backend-image
                            docker logout
                        '''
                    }
                }
            }
        }
        stage('Post Actions') {
            steps {
                script {
                    // Post deployment actions
                    echo "Deployment completed!"
                }
            }
        }
    }
}
