/*eslint-disable */
module.exports = function (config) {
  var configuration = {
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
    ],
    customLaunchers: {
      Chrome_travis: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      { pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true },

      { pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true },

      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true },
      { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true },

      { pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', included: true, watched: true },
      { pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true },
      { pattern: 'node_modules/zone.js/dist/fake-async-test.js', included: true, watched: true },

      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },

      { pattern: 'karma-test-shim.js', included: true, watched: true },

      // paths loaded via module imports
      { pattern: 'dist/**/*.js', included: false, watched: true },
      { pattern: 'test-built/**/*.js', included: false, watched: true },

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: 'dist/**/*.html', included: false, watched: true },
      { pattern: 'dist/**/*.css', included: false, watched: true },

      // paths to support debugging with source maps in dev tools
      { pattern: 'dist/**/*.ts', included: false, watched: false },
      { pattern: 'dist/**/*.js.map', included: false, watched: false }
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/dist/': '/base/dist/',
      '/base/src/': '/base/dist/',
      '/base/test-built/src': '/base/dist'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis'];
  }
  config.set(configuration);
};

/*eslint-enable */
