module.exports = function (grunt) {


    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            options: {
                configFile: "Conf/conf.js",
                keepAlive: true // If false, the grunt process stops when the test fails.
            },

            singleTestRun: {
                options: {
                    args: {
                        // setting up base URL here
                        specs: [
                            'Specs/*.js'
                        ],
                        capabilities: {
                            'browserName': 'chrome',
                            shardTestFiles: false
                        },
                    }
                }
            },
        },
    })

    grunt.registerTask('run-test', ['protractor:singleTestRun']);

};