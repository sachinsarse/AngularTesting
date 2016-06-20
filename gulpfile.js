var gulp = require('gulp');
var connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
  root: ['app'],
  port: 8888,
  livereload: true,
  open: {
    browser: 'chrome'
  }
}));

gulp.task('html', function () {
  gulp.src('app/**/*.html')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src('app/features/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.html'], ['html']);
  gulp.watch(['app/features/**/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);