pipeline {
    agent any

    stages {
        stage('Test Docker') {
            steps {
                script {
                    docker.image('hello-world').inside {
                        sh 'echo "Docker is working!"'
                    }
                }
            }
        }
    }
}
