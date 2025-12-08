pipeline {
    agent any
    
    stages {
        stage('Vérifier les fichiers') {
            steps {
                script {
                    sh '''
                        echo "Workspace: $WORKSPACE"
                        ls -la
                        if [ -f package.json ]; then
                            echo "package.json trouvé ✓"
                        else
                            echo "ERREUR: package.json non trouvé!"
                            exit 1
                        fi
                    '''
                }
            }
        }
        
        stage('Installer les dépendances') {
            steps {
                script {
                    // Utiliser Docker pour npm avec le chemin absolu
                    sh '''
                        WORKSPACE_PATH=$(pwd)
                        echo "Workspace path: $WORKSPACE_PATH"
                        echo "Contenu du workspace:"
                        ls -la
                        echo "Vérification de package.json:"
                        if [ -f package.json ]; then
                            cat package.json | head -10
                        else
                            echo "ERREUR: package.json non trouvé dans le workspace!"
                            exit 1
                        fi
                        echo "Installation des dépendances avec Docker..."
                        docker run --rm \
                            -v "$WORKSPACE_PATH:/workspace" \
                            -w /workspace \
                            --user root \
                            node:20-alpine \
                            sh -c "echo 'Dans le conteneur:' && pwd && ls -la /workspace && test -f /workspace/package.json && echo 'package.json trouvé!' && npm install"
                    '''
                }
            }
        }
        
        stage('Build Docker') {
            steps {
                script {
                    echo 'Building Docker image...'
                    sh "docker build -t devops-app:${BUILD_NUMBER} ."
                    sh "docker tag devops-app:${BUILD_NUMBER} devops-app:latest"
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