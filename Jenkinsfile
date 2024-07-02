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
                script {
                    def npmTool = tool name: 'NazwaTwojegoNodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${npmTool}/bin:${env.PATH}"
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    def npmTool = tool name: 'NazwaTwojegoNodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${npmTool}/bin:${env.PATH}"
                    docker.image('cypress/included:8.6.0').inside {
                        sh 'npx cypress run'
                    }
                }
            }
        }
    }
}
