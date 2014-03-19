var gulp = require('gulp');

// ファイル監視・自動リロード系
var watch = require('gulp-watch');
var open = require('gulp-open');

gulp.task('reload', function() {
    gulp.src('./manifest.json')
        .pipe(open('', {app: 'chrome', url: 'http://reload.extensions/'}));
});

gulp.task('default', function() {
    gulp.watch([
        './**/*.json',
        './**/*.html',
        './**/*.js',
        './**/*.css'
    ], ['reload']);
});
