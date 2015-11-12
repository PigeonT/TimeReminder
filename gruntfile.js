module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                files: {
                    'css/style.css': 'css/style.less'
                }
            }
        },

        jade: {
            complie: {
                files: {
                    'index.html': 'index.jade'
                }

            }
        },

        watch: {
            
            less: {
                files: 'css/*.less',
                tasks: 'less'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less']);
    //grunt.registerTask('server', ['express', 'watch']);
}
