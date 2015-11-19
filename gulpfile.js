var gulp = require('gulp');
//if the gulp tasks are taking a long time you can uncomment this module to get atiming report
//var time = require("time-require");
var gulpWatch = require('gulp-watch');
var Server = require('karma').Server;
var protractor = require("gulp-protractor").protractor;

var env = 'dev'


var bases = {
 	app: 'app/',
 	dist: 'public/',
};

// variables for differnt file type paths
var getPaths = function(src) {
	return {
	  scripts: [bases[src] + '**/*.js', '!' + bases[src] + 'bower_components/**'],
	  css: [bases[src] + '**/*.css', '!' + bases[src]+ 'bower_components/**'],
	  html: [bases[src] + '**/*.html', '!' + bases[src] + 'bower_components/**'],
	  allExceptBower: [bases[src] + '/**', '!' + bases[src] + 'bower_components/**'],
	};
};

gulp.task('default', function() {
	console.log('Gulp Running');
});

/**
 * Gulp tasks to run on the CI server
 */
gulp.task('ci', function() {
	env = 'ci';
	gulp.run('test');
});

/**
 * Gulp tasks to run on the CI server
 */
gulp.task('test-unit', function() {
	gulp.run('test');
});

/**
 * Gulp watcher to run during local dev
 */
gulp.task('dev', function() {
	return gulpWatch(getPaths('app').allExceptBower, function(){
		console.log('File Changed');
		gulp.run('test');
	});
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function(arg) {
  		if (arg === 1) {
  			console.log('Environment is ' + env);
			if (env === 'ci') {
				done(new Error('Unit test failed'));
			} else {
				done();
			}
  		} else {
  			done();
  		}
	}).start();
});

gulp.task('e2e', function() {

	gulp.src(["e2e/**/*.js"])
    .pipe(protractor({
        configFile: "e2e/conf.js",
        args: []
    }))
    .on('error', function(e) { 
    	throw e;
    });
});


