/*
 * Grunt Auto Update
 * https://github.com/erwanjegouzo/grunt-auto-update
 *
 * Copyright (c) 2014 Erwan Jegouzo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {


  grunt.registerTask('autoupdate', 'Auto updates the node_modules if the package.json version changed', function () {
    
    var options = this.options({
      pkgFile : '.pck'
    });

    var previousPkgVersion = 'N/A',
      pkgVersion = grunt.file.readJSON('package.json').version;

    if (grunt.file.exists(options.pkgFile)) {
      previousPkgVersion = grunt.file.read(options.pkgFile);
    }

    grunt.file.write(options.pkgFile, pkgVersion);

    if( previousPkgVersion != pkgVersion ){
      grunt.log.writeln('New package.json version detected (from '+previousPkgVersion+' to '+pkgVersion+')');

      
      grunt.log.writeln('Running npm update...');
    
      var shelljs = require('shelljs');
      shelljs.exec('npm update', { silent : true });
    
      grunt.log.writeln('... done!');
    }

  });

};
