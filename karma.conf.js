module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/app.js',
      'app/features/**/*.js',
      'app/features/**/*.html'
    ],

    exclude: [
         'app/features/**/*.e2e.spec.js',
    ],

    preprocessors: {    
      'app/features/**/*.html': ['ng-html2js'],
      'app/features/directive/**/*.html': ['ng-html2js'] 
    },

    ngHtml2JsPreprocessor: {   
      stripPrefix: 'app/',     
      moduleName: 'app'
    },

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};