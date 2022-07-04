pipeline {
    agent any
    tools {
        nodejs 'node12.3-sitev3'
    }
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
        disableConcurrentBuilds()
    }
    stages {
        stage('Installing dependencies') {
            steps {
                sh 'yarn install --production=true --frozen-lockfile'
            }
        }
        stage('Building') {
            steps {
                sh 'npx next build'
            }
        }
        stage('Build transfering') {
            steps {
                sshagent(credentials: ['site-v.3-release-key']) {
                sh 'ssh -o StrictHostKeyChecking=no dev@185.204.118.13 -p 2222 -vvv uname -a'
            }
            }
        }
    }
}
