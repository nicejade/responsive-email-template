<h1 align="center">responsive-email-template</h1>

>Make better response mail templates Through [mjml](https://github.com/mjmlio/mjml).
[mjml](https://mjml.io/): The only framework that makes responsive email easy

![responsive-email-template](https://raw.githubusercontent.com/nicejade/responsive-email-template/master/src/assets/awesomeScreenshot.gif)

## **Story & Background**

When all you need is a really simple responsive HTML email template, you can do like this: [responsive-html-email-template](https://github.com/leemunroe/responsive-html-email-template). It looks really simple, But it is not simple and unfriendly to do it. Of course you can use some tools，such as `gulp` & `gulp-inline-css`. The code is as follows：

```js
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

```bash
git clone https://github.com/nicejade/responsive-email-template
npm i (yarn)
./node_modules/.bin/mjml --watch src/index.mjml -o dist/index.html
gulp // If you need custom style to support dynamic content.
```

**note:** In order to operate easily, you can also use the following methods to run [mjml](https://mjml.io/):

**Or with the shortcut using `npm bin`**

```
$(npm bin)/mjml --watch src/index.mjml -o dist/index.html
```

**Or by using [npx](https://github.com/zkat/npx)**

note: [npx](https://github.com/zkat/npx) is included with `npm > v5.2` or can be installed separately.

```
npx mjml --watch src/index.mjml -o dist/index.html
```

For more information on how to execute binary files in NPM packages, see :[执行 npm 包的二进制文件](https://jeffjade.com/2017/12/30/135-npm-vs-yarn-detial-memo/#%E6%89%A7%E8%A1%8C-npm-%E5%8C%85%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6) please.

## **Advantage**

- **Easy and quick**: Write less code, save time and code more efficiently with MJML’s semantic syntax.
- **Responsive**: MJML is responsive by design on most-popular email clients, even Outlook.
- **Component based**: Write high-level code thanks to reusable and extensible components.
- **Support for customization**: Replace the mjmi default style by gulp.
- **Dynamic support**: Introduce custom styles to support dynamic content by gulp.

## **More Links**

- [Try it live](https://mjml.io/try-it-live)
- [Responsive Email Templates](https://mjml.io/templates)
- [Mjml Resources](https://mjml.io/resources)
- [How to Code HTML Email Newsletters](https://www.sitepoint.com/how-to-code-html-email-newsletters/)

## **About Me**

- [**倾城之链**](https://nicelinks.site?from=github)
- [About Me](https://about.me/nicejade)
- [个人博客](https://jeffjade.com/nicelinks)
- [辅助博客](https://blog.lovejade.cn/)
- [新浪微博](http://weibo.com/jeffjade)
- [知乎主页](https://www.zhihu.com/people/yang-qiong-pu/)
- [简书主页](http://www.jianshu.com/u/9aae3d8f4c3d)
- [SegmentFault](https://segmentfault.com/u/jeffjade)
- [Twitter](https://twitter.com/jeffjade2)
- [Facebook](https://www.facebook.com/yang.gang.jade)

## **License**

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, [nicejade](https://github.com/nicejade)
