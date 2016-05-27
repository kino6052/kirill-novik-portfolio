var gulp = require('gulp');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('clean', function() { // remove 'dist' folder
    return gulp.src(['./dist', './assets'], {read: false})
		.pipe(clean());
});

gulp.task('dist-index', ['clean'], function(){ // move index.html to the 'dist' folder
  return gulp.src(['./src/index.html'])
                .pipe(gulp.dest('./dist/'));
});


gulp.task('dist-assets', ['dist-index'], function () { // Move assets to the 'dist' folder
  return gulp.src(['./src/**/**/*.js', './src/**/**/*.css', './src/**/**/*.html', './src/**/**/*.png', './src/**/**/*.jpg'].concat(mainBowerFiles()))
                .pipe(gulp.dest('./assets'));
});

gulp.task('dist-assets-2', ['dist-assets'], function () { // Move assets to the 'dist' folder
  return gulp.src(['./assets/**/**/*.js', './assets/**/**/*.css', './assets/**/**/*.html', './assets/**/**/*.png', './assets/**/**/*.jpg'].concat(mainBowerFiles()))
                .pipe(gulp.dest('./dist'));
});

gulp.task('concat', ['dist-assets'], function() { // Concat the .js files in the assets folder 
  return gulp.src(['./assets/**/jquery.js', './assets/**/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', ['concat'], function() { // Move .css files to /dist
  return gulp.src('./assets/**/**/*.css')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', ['styles'], function(){
  return gulp.src('./dist/all.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist'));
});

gulp.task('inject', ['dist-assets-2'], function () {
  var target = gulp.src('./dist/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./dist/**/**/jquery.js', './dist/**/**/angular.js', './dist/**/*.js', './dist/**/*.css'] , {read: false});
  return target.pipe(inject(sources, {ignorePath: '/dist'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('about-html', function(){ // move index.html to the 'dist' folder
  return gulp.src(['./src/about.html'])
                .pipe(gulp.dest('./dist/'));
});

gulp.task('about-inject', ['about-html'], function () {
  var target = gulp.src('./dist/about.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./dist/**/**/jquery.js', './dist/**/**/bootstrap.js', './dist/**/bootstrap.min.css'] , {read: false});
  return target.pipe(inject(sources, {ignorePath: '/dist'}))
    .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['clean', 'dist-index', 'dist-assets', 'dist-assets-2', 'inject']);
gulp.task('about', ['about-html', 'about-inject']);