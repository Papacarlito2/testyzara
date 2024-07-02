pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:14').inside {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image('node:14').inside {
                        sh 'npm test'
                    }
                }
            }
        }
    }
}
