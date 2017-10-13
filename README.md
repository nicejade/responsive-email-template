<h1 align="center">responsive-email-template</h1>

>Make better response mail templates Through [mjml](https://github.com/mjmlio/mjml).
[mjml](https://mjml.io/): The only framework that makes responsive email easy

When all you need is a really simple responsive HTML email template, you can do like this: [responsive-html-email-template](https://github.com/leemunroe/responsive-html-email-template). It looks really simple, But it is not simple and unfriendly to do it. Of course you can use some tools，such as `gulp` & `gulp-inline-css`. The code is as follows：

```
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
```

It can help you make mail templates like write a web page. but you have to support responsive by yourself. oh, opps. You may be very helpless until you meet her before. [mjml](https://mjml.io/), She may be your savior, for how to make a simple set of mail templates. A fly in the ointment ，she also has some problems. So, I provided this tool so that you can use her more easily.

![responsive-email-template](https://raw.githubusercontent.com/nicejade/responsive-email-template/master/src/assets/awesomeScreenshot.gif)

```
git clone https://github.com/nicejade/responsive-email-template
npm i (yarn)
./node_modules/.bin/mjml --watch src/index.mjml -o src/index.html

gulp (If you need extra style)
```

>- [Try it live](https://mjml.io/try-it-live)
>- [Responsive Email Templates](https://mjml.io/templates)
- [Mjml Resources](https://mjml.io/resources)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, [nicejade](https://github.com/nicejade)