module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': '**/index.html'     // 'destination': 'source'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        },
        zip: {
            'AFT_uebung_abgabe.zip': ['assets/**', 'css/**.css', 'js/**.js']
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/main.css': 'css/main.scss'       // 'destination': 'source'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('package', ['sass','htmlmin','zip']);

    // grunt.registerTask('default', ['sass','htmlmin']);

    grunt.registerTask('jshint', ['jshint']);


};