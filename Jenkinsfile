pipeline {
    agent any
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
        disableConcurrentBuilds()
    }
    stages {
        stage('Build transfering') {
            steps {
                sshagent(credentials: ['site-v.3-release-key']) {
                sh 'ssh -o StrictHostKeyChecking=no dev@185.204.118.13 -p 2222 -vvv uname -a'
            }
            }
        }
    }
}
