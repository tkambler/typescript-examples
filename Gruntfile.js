'use strict';

module.exports = (grunt) => {

    require('load-grunt-tasks')(grunt, {
        'pattern': [
            'grunt-*'
        ]
    });

    grunt.config.init({
        'ts': {
            'default': {
                'src': ['demo_src/**/*.ts'],
//                 'outDir': 'compiled'
            }
        },
        'watch': {
            'scripts': {
                'files': ['demo_src/**/*'],
                'tasks': ['build'],
                'options': {
                    'spawn': false
                }
            }
        },
        'metal': {
            'options': {},
            'demo': {}
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('build', ['ts', 'metal']);
    grunt.registerTask('default', ['build', 'watch']);

};
