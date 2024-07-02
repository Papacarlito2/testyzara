pipeline {
    agent {
        docker {
            image 'cypress/included:8.6.0' // Tutaj podaj odpowiedni obraz Docker
            args '-v /dev/shm:/dev/shm' // Opcjonalne, jeśli potrzebujesz przekierowania pamięci RAM
        }
    }
    stages {
        stage('Build') {
            steps {
                // Twoje kroki budowania projektu
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image('cypress/included:8.6.0').inside {
                        sh 'npm install'
                        sh 'npx cypress run'
                    }
                }
            }
        }
    }
}
