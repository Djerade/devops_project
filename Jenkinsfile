pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Installer les dépendances') {
            steps {
                script {
                    // Utiliser un conteneur Docker pour npm si npm n'est pas disponible dans Jenkins
                    sh '''
                        docker run --rm \
                            -v "$PWD:/workspace" \
                            -w /workspace \
                            node:20-alpine \
                            npm install
                    '''
                }
            }
        }
        
        stage('Build Docker') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh 'docker build -t devops-app:${BUILD_NUMBER} .'
                    sh 'docker tag devops-app:${BUILD_NUMBER} devops-app:latest'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    // Ajoutez vos tests ici quand ils seront disponibles
                    // sh 'npm test'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    // Ajoutez votre logique de déploiement ici
                    // Par exemple: docker compose up -d
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline réussi!'
        }
        failure {
            echo 'Pipeline échoué!'
        }
        always {
            echo 'Nettoyage...'
            // Nettoyage optionnel
        }
    }
}