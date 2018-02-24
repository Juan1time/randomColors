gulp = require 'gulp'
sass = require 'gulp-sass'
changed = require 'gulp-changed'
browserify = require 'gulp-browserify'
rename = require 'gulp-rename'
gutil = require 'gulp-util'
uglify = require 'gulp-uglify'
cssnano = require 'gulp-cssnano'
sourcemaps = require 'gulp-sourcemaps'
browserSync = require 'browser-sync'

sources =
  scss: './_/scss/**/*.scss'
  js: './_/js/dev/**/*.js'

dest =
  css: './_/css/'
  js: './_/js/prod'

sassOptions = {
      errLogToConsole: true,
      outputStyle: 'nested'
    };

supported = [
        'last 2 versions',
        'safari >= 8',
        'ie >= 10',
        'ff >= 20',
        'ios 6',
        'android 4'
    ];
gulp.task 'browser-sync', ->
  files = [
    dest.css
    dest.js
    '*.html'
  ]
  browserSync.init files,
    server:
      baseDir: "./"
      watchOptions:
        debounceDelay: 1000

gulp.task 'scss', ->
  gulp.src sources.scss
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'nested', errLogToConsole: true}))
  .pipe(cssnano({
      autoprefixer: {browsers: supported, add: true}
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest(dest.css))

gulp.task 'scss-watch', ->
  gulp.start 'scss'
  gulp.watch sources.scss, ['scss']

gulp.task 'js', ->
  gulp.src sources.js, read: false
  .pipe changed 'js'
  .pipe browserify(extensions: ['.js']).on('error', gutil.log)
  .pipe gulp.dest(dest.js)
  .pipe uglify mangle: false
  .pipe rename extname: ".min.js"
  .pipe gulp.dest(dest.js)

gulp.task 'js-watch', ->
  gulp.start 'js'
  gulp.watch sources.js, ['js']

#gulp.task 'default', ['scss-watch', 'js-watch']
gulp.task 'default', ['scss-watch','browser-sync']
