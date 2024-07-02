pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image('cypress/included:8.6.0').inside {
                        sh 'npx cypress run'
                    }
                }
            }
        }
    }
}
