// Karma configuration
// Generated on Tue Aug 12 2014 22:27:33 GMT-0400 (Eastern Daylight Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: 'app',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        plugins:[
             'karma-jasmine',
             'karma-coverage',
             'karma-html-reporter',
             'karma-phantomjs-launcher',
             'karma-ng-html2js-preprocessor',
             'karma-ng-json2js-preprocessor',
             'karma-junit-reporter',
        ],
        browserNoActivityTimeout: 100000,

        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-mocks/angular-mocks.js',
            //app
            '**/*.html',
            '!(bower_components)/**/*.module.js', //need the module to load first
            '!(bower_components)/**/*.js',
            '*.js',
            '**/*spec.js'
        ],

        // list of files to exclude
        exclude: [
            '**/coverage/**/*.js',
            '**/report/**/*.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '!(bower_components)/**/*.js': ['coverage'],
            '**/*.html': ['ng-html2js'],
            '**/mock/**/*.json': ['ng-json2js']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [
            'progress',
            'text-summary',
            'coverage',
            'html',
            'junit'
        ],

        junitReporter : {
          outputDir: '../report/junit',
          outputFile: 'test-results.xml',
          useBrowserName: false
        },

        coverageReporter: {
          dir : '../report/coverage/',
          reporters: [
            {
              type: 'html',
              subdir: 'html'
            },
            {
              type: 'cobertura', 
              subdir: 'cobertura', 
              file: 'cobertura.xml' 
            }
          ],
          check: {
            global: {
              statements: 100,
              lines: 100,
              functions: 100,
              branches: 100
            }
          }
        },
        htmlReporter: {
          outputDir: 'report/karma/', // where to put the reports  
          templatePath: null, // set if you moved jasmine_template.html 
          focusOnFailures: true, // reports show failures on start 
          namedFiles: false, // name files instead of creating sub-directories 
          pageTitle: null, // page title for reports; browser info by default 
          urlFriendlyName: true, // simply replaces spaces with _ for files/dirs 
          reportName: 'karmaresults',
          // experimental 
          preserveDescribeNesting: false, // folded suites stay folded  
          foldAll: false, // reports start folded (only with preserveDescribeNesting) 
        },

        ngHtml2JsPreprocessor: {
          // strip this from the file path
          prependPrefix: 'app/'
          //stripSufix: '.ext',
          // prepend this to the
          //prependPrefix: 'served/',

          // setting this option will create only a single module that contains templates
          // from all the files, so you can load them all with module('foo')
          //moduleName: 'templates'
        },

        ngJson2JsPreprocessor: {
          // strip this from the file path
          //stripPrefix: 'dist'
          // prepend this to the
          //prependPrefix: 'served/',

          /* or define a custom transform function
          cacheIdFromPath: function(filepath) {
            return cacheId;
          }
          */
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],
    });
};
