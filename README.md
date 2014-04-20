# grunt-autoupdate

> Auto updates the node_modules folder if the package.json version changed.
If your node_modules are not under version control, then you would probably have to notify the team that the package.json changed and everyone would have to run "npm update". While this workflow could work, this is not very reliable!
This task will help you remediate this issue by providing a way to automatically run 'npm update' when the version in the package.json file changed.


## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-autoupdate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-autoupdate');
```

## The "autoupdate" task

### Overview
In your project's Gruntfile, add a section named `autoupdate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  autoupdate: {
    options: {
      // Task-specific options go here.
    }
  },
})
```

### Options

#### options.pkgFile
Type: `String`
Default value: `'.pkg'`

The path to the cached file, which holds the previous version of the package.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  autoupdate: {
    options: {}
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2014-04-19   v0.0.1-beta1   First Beta. Not production ready/tested.

## License
Copyright (c) 2014 Erwan Jegouzo. Licensed under the MIT license.
