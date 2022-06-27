pipeline {
    agent any
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '5', daysToKeepStr: '', numToKeepStr: '5')
        disableConcurrentBuilds()
    }
    stages {
        stage('Build transfering') {
            steps {
                script {
                    def remote = [:]
                    withCredentials([sshUserPrivateKey(credentialsId: 'site-v.3-release-key', keyFileVariable: 'identity')]) {
                        remote.name = 'dev'
                        remote.host = '185.204.118.13'
                        remote.port = 2222
                        remote.user = 'dev'
                        remote.identityFile = identity
                        remote.allowAnyHosts = true

                        sshCommand remote:remote, command: "ls -l"
                    }
                }
            }
        }
    }
}
