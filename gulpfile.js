var gulp = require('gulp');
var gutil = require('gulp-util');

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
var exec = require('child_process').exec;
var runsequence = require('run-sequence');


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
            //baseDir: '.'   //call index.html at base directory
        }
    })
})


gulp.task('watch-web', ['browserSync'], function () {
    
    gulp.watch('*.html', ['browserify', browserSync.reload]);
    gulp.watch('src/**/*.ts', ['browserify', browserSync.reload ]);

});



//For WebProject 
gulp.task('web', ['watch-web']);



//----No more neeed for web project , it's needed for node project'

gulp.task('tscript', function () {

    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('dist'));
})


//simple node execution
//gulp.task('exec', ['tscript'], shell.task("node dist/main.js")) ;
 
gulp.task('exec', function (cb) {
  exec('node dist/main.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})


gulp.task('watch-node', function () {

    //Keep in mind watch can take an array of strings to watch for, don't call it multiple times.
    gulp.watch(['src/**/*.ts', 'src/*.ts'], ['node']); //for make sure watch?????

});

//For Node Project
gulp.task('node',function(){
    runsequence('tscript','exec');
})


//-----------------------------------------------------------------
//DEFAULT TASKS
gulp.task('default',function(){
    runsequence('watch-node','node');
});
//gulp.task('default',['web']);





