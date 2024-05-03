pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ganapathi-selva/Jenkins_playwright.git'
            }
        }
        
        stage('Install Node.js') {
            steps {
                script {
                    // Check if Node.js is already installed
                    def nodeInstalled = sh(script: 'node --version', returnStatus: true)
                    if (nodeInstalled != 0) {
                        // Install Node.js if not already installed
                        sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                        sh 'sudo apt-get install -y nodejs'
                    }
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            echo "always"
        }
        success {
            echo "success"
        }
        failure {
            echo "failure"
        }
    }
}
