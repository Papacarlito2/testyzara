pipeline {
    agent {
        docker {
            image 'cypress-with-xvfb'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
