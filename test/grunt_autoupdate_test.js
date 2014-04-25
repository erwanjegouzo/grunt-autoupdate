'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.grunt_autoupdate = {
  setUp: function (done) {
    done();
  },

  first_run: function(test){
    test.expect(4);
    
    grunt.util.spawn({
      grunt: true,
      args: ['autoupdate', '--no-color'],
    }, function(err, result) {
      test.ok(result.stdout.indexOf("New package.json version detected") !== -1, 'A new package.json version should have been detected');
      test.ok(result.stdout.indexOf('npm update') !== -1, 'npm update should be running');
      test.ok(result.stdout.indexOf('done!') !== -1, 'npm update should have been successfully executed');

      var actual = grunt.file.readJSON('package.json').version,
          expected = grunt.file.read('.pkg');
      test.equal(actual, expected, 'The package.json version stored matches the current package.json version');

      test.done();
    });
  },
  second_run: function(test){
    test.expect(1);
    
    grunt.util.spawn({
      grunt: true,
      args: ['autoupdate', '--no-color --verbose'],
    }, function(err, result) {
      test.ok(result.stdout.indexOf('New package.json version detected') === -1, 'If an existing .pkg file exists and the version was not bumped, npm update should not be executed');
      test.done();
    });
  }
};
