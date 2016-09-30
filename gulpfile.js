var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell') ;

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');

var path = {
    pages: ['./*.html'],
};

var browserSync = require('browser-sync').create();
var del = require('del');


gulp.task('clean', function(){
    return del.sync('dist/') ;  

})

gulp.task('copy-html',function(){
    return gulp.src(path.pages)
    .pipe(gulp.dest('dist')); 

})

gulp.task('browserify', ['clean', 'copy-html'], function(){
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache:{} 
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));

})


gulp.task('browserSync',['browserify'], function () {
    browserSync.init({
        server: {
            baseDir: 'dist/'
            //baseDir: '.'   //call index.html at current folder.
        }
    })
})


gulp.task('watches', ['browserSync'], function () {
    
    gulp.watch('*.html', ['browserify', browserSync.reload]);
    gulp.watch('src/**/*.ts', ['browserify', browserSync.reload ]);

});



//DEFAULT
gulp.task('default', ['watches']);



//----No more neeed for web project , it's needed for node project'

gulp.task('tscript', function () {

    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('dist'));
})


//simple node execution
gulp.task('exec', ['tscript'], shell.task("node dist/main.js")) ;



