let gulp = require('gulp'),
  inlineCss = require('gulp-inline-css')

gulp.task('inline-css', function() {
  return gulp.src('./src/**/*.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('build/'))
})

gulp.task('watch', function () {
    gulp.watch('./src/**/*.html', ['inline-css'])
})

gulp.task('default', ['watch'])
