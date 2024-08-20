pipeline {
    agent any
    stages {
        stage('Cloner le dépôt') {
            steps {
                git 'https://github.com/Djerade/devops_project.git'
            }
        }
        stage('checkout') {
            steps {
                checkout scm
            }
        }
        stage('Installer les dépendances') {
            steps {
                bat 'npm i nstall'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}