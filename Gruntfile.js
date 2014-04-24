/*
 * Grunt Auto Update
 * https://github.com/erwanjegouzo/grunt-auto-update
 *
 * Copyright (c) 2014 Erwan Jegouzo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    // Grunt_Auto_Update: {
    //   default_options: {
    //     options: {
    //     },
    //     files: {
    //       'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
    //     }
    //   },
    //   custom_options: {
    //     options: {
    //       separator: ': ',
    //       punctuation: ' !!!'
    //     },
    //     files: {
    //       'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
    //     }
    //   }
    // },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('shelljs');

  grunt.registerTask('test', ['clean', 'autoupdate', 'nodeunit']);
  grunt.registerTask('default', ['jshint']); //, 'test'

};
