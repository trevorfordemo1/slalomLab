//Test if local
var buildLifecycle = process.env.BUILD_ENV;

var baseUrl = "http://localhost:3001";
var sauceUser = '';
var sauceKey = '';

var multiCapabilities = [{
  'browserName': 'chrome'
}];


switch (buildLifecycle) {
  case 'ci':
    var browsers = process.env.SAUCE_ONDEMAND_BROWSERS;

    multiCapabilities = setCapabilities(JSON.parse(browsers));
    baseUrl = 'http://slalomdevopsworkflow.cfapps.io/';
    sauceUser = process.env.SAUCE_USERNAME;
    sauceKey = process.env.SAUCE_ACCESS_KEY;
  break;
  default:
    //Nothing special, just use defaults
  break;
}

exports.config = {
  sauceUser: sauceUser,
  sauceKey: sauceKey,

  multiCapabilities: multiCapabilities,
  baseUrl: baseUrl,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['spec.js'],

  onPrepare: function() {      
      require('jasmine-reporters');
      jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('./report/e2e/protractor', true, true)
    );
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};


function setCapabilities(SAUCE_ONDEMAND_BROWSERS) {

  for (var i = 0; i < SAUCE_ONDEMAND_BROWSERS.length; i++) {
    SAUCE_ONDEMAND_BROWSERS[i].browserName = SAUCE_ONDEMAND_BROWSERS[i].browser;
  }

  return SAUCE_ONDEMAND_BROWSERS;
}

