let gulp = require('gulp'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    replaceTask = require('gulp-replace-task'),
    gulpTap = require('gulp-tap'),
    cleanCss = require('gulp-clean-css'),
    minifyHtml = require('gulp-minify-html')

let assetsMemory = ''
/*
  Desc: Add additional rules that need to be replaced （@17-10-12）.
  Example: mjml default max-width=600px, And did not provide modification
*/
let needReplaceRules = [
  {
    match: 'width:600px',
    replacement: 'width:900px'
  }
]

gulp.task('get-css', () => {
  return gulp.src(['./src/assets/*.css'], {read: true})
  .pipe(cleanCss({compatibility: 'ie8'}))
  .pipe(concat('mixing.css'))
  .pipe(gulpTap(file => {
    assetsMemory += file.contents.toString()
  }))
})

gulp.task('inject-css', ['get-css'], () => {
  let stableCssCode = `#outlook a { padding: 0; }`
  let needInjectCss = `${stableCssCode}\n${assetsMemory}`

  return gulp.src('./src/*.html')
    .pipe(replaceTask({
      patterns: needReplaceRules,
      usePrefix: false
    }))
    .pipe(replace(stableCssCode, needInjectCss))
    .pipe(minifyHtml({empty: true}))
    .pipe(gulp.dest('./build/'))
})

gulp.task('default', ['inject-css'])