### Jenkins Code
pipeline {
    agent any
    environment {
        GIT_REPO = 'https://github.com/AminaYH/DeployRubyReact.git'
        GIT_BRANCH = 'main'  // or specify the branch you want to use
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
                        # Use bash explicitly
                        /bin/bash -c "source /home/amina/.rvm/scripts/rvm && rvm install 3.1.0"
                    '''
                }
            }
        }
         stage('Install Node.js 18 using nvm') {
            steps {
                script {
                    sh '''
                       
                     /bin/bash -c "source /home/amina/.nvm/nvm.sh && nvm install 18 && nvm use 18"

                    '''
                }
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                script {
                    // Build the backend Docker image
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
                withCredentials([usernamePassword(credentialsId: '3ce0f240-a0f5-47a7-af79-a7e41ad633fb', 
                                                  usernameVariable: 'DOCKER_USER', 
                                                  passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "${DOCKER_USER}"
                        docker login --username amina.yahia@eniso.u-sousse.tn --password Blacky2001?
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
                    echo "Deployment completed!"
                }
            }
        }
    }
}
