'use strict';

module.exports = (grunt) => {

    require('load-grunt-tasks')(grunt, {
        'pattern': [
            'grunt-*'
        ]
    });

    grunt.config.init({
        'ts': {
            'arrays': {
                'src': ['demo_src/content/examples/arrays/**/*.ts']
            },
            'classes': {
                'src': ['demo_src/content/examples/classes/**/*.ts']
            },
            'interfaces': {
                'src': ['demo_src/content/examples/interfaces/**/*.ts']
            },
            'modules': {
                'src': ['demo_src/content/examples/modules/**/*.ts'],
                'out': 'demo_src/content/examples/modules/compiled.js'
            },
            'simple': {
                'src': ['demo_src/content/examples/simple/**/*.ts']
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
