/// <binding BeforeBuild='reactInterfacesFix, copy-from-node-module-files, copy-to-node-module-files, sass, webpack' />
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var sass = require('gulp-sass');
var replace = require('gulp-replace');

// *********************** Build SCSS files ***********************
var DO_SASS = true;

gulp.task('sass', function () {

    if (DO_SASS) {

        gulp.src(['app/**/*.scss', 'Content/*.scss'])
            .pipe(sass())
            .pipe(gulp.dest(function (f) {
                return f.base;
            }))
    }
});


// *********************** Copy files from node_modules to final location ***********************
var DO_COPY_FROM_NODE_MODULES = true;

gulp.task('copy-from-node-module-files', function () {

    if (DO_COPY_FROM_NODE_MODULES) {

        // Fabric core CSS
        gulp.src([
            'node_modules/office-ui-fabric-core/dist/css/fabric.css'
        ])
        .pipe(gulp.dest('Content', { overwrite: true }));

        // React JS
        gulp.src(
            [
                'node_modules/react/dist/react.js',
                'node_modules/react/dist/react.min.js',
                'node_modules/react-dom/dist/react-dom.js',
                'node_modules/react-dom/dist/react-dom.min.js',
                'node_modules/redux/dist/redux.js',
                'node_modules/redux/dist/redux.min.js',
                'node_modules/react-redux/dist/react-redux.js',
                'node_modules/react-redux/dist/react-redux.min.js',
                'node_modules/redux-thunk/dist/redux-thunk.js',
                'node_modules/redux-thunk/dist/redux-thunk.min.js'
            ]
        )
        .pipe(gulp.dest('Scripts', { overwrite: true }));
    }
});




// *********************** Copy several misc typeing files to node_modules. This is needed due to the odd missing typing from packages ***********************
var DO_COPY_TO_NODE_MODULES = true;

gulp.task('copy-to-node-module-files', function () {

    if (DO_COPY_TO_NODE_MODULES) {

        // Fabric core CSS
        gulp.src([
            'app/hacky-typings/index.d.ts'
        ])
        .pipe(gulp.dest('node_modules/redux-thunk', { overwrite: true }));

    }
});






// *********************** Package the relevant files via webpack ***********************
var DO_WEBPACK = true;

gulp.task('webpack', function (callback) {

    if (DO_WEBPACK) {

        var configPath = './webpack.config.js';

        var webpackConfig = require(configPath);
        var devCompiler = webpack(webpackConfig);

        // run webpack
        devCompiler.run(function (err, stats) {
            if (err)
                throw new gutil.PluginError('webpack', err);
            callback();
        });
    }
});

// Get webpack to watch for files to re-pack.
gulp.task('watch-webpack', ['webpack'], function () {
    gulp.watch(['app/**/*', 'app/*'], ['webpack']);
});



// *********************** Fix a problem caused by \node_modules\office-ui-fabric-react\lib\utilities\selection\interfaces.d.ts ***********************
// TODO : Long term fix for this?
gulp.task('reactInterfacesFix', function () {

    var patternLineToComment = /export declare const SELECTION_CHANGE = "change";/gim;
    var replacement = '// This line originally threw an error here but has been commented out via Gulp task reactInterfacesFix to address an issue with building in Visual Studio.';

    gulp.src(['node_modules/office-ui-fabric-react/lib/utilities/selection/interfaces.d.ts'])
      .pipe(replace(patternLineToComment, replacement))
      .pipe(gulp.dest('node_modules/office-ui-fabric-react/lib/utilities/selection', { overwrite: true }));
});