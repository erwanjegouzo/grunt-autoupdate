# grunt-autoupdate

> Auto updates the node_modules folder if the package.json version changed.

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
_(Nothing yet)_

## License
Copyright (c) 2014 Erwan Jegouzo. Licensed under the MIT license.
