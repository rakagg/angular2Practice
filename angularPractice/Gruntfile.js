var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };



  // Project configuration.
  grunt.initConfig({

    yeoman: appConfig,

    pkg: grunt.file.readJSON('package.json'),

    ts: {
      base: {
        src: ['app/scripts/**/*.ts'],
        //dest: 'build/js',
        options: {
          module: 'commonjs', 
          moduleResolution: 'node',
          target: 'es6',
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          noImplicitAny: false
        }
      }
    },

    copy: {
      build: {
        cwd: 'app',
        src: ['**'],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    cssmin: {
      build: {
        files: {
          'build/application.css': ['build/**/*.css']
        }
      }
    },

    jsmin: {
      build: {
        files: {
          'build/application.js': ['build/**/*.js']
        }
      }
    },

    uglify: {
      build: {
        options: {
          mangle: false
        },
        files: {
          'build/application.js': ['build/**/*.js']
        }
      }
    },

    watch: {
        files: 'app/scripts/**/*.ts',
        tasks: ['ts']
    },

    

    connect: {
      options: {
          port: 9000,
          hostname: 'localhost',
          livereload: 35729
        },
      livereload: {
          options: {
            open: true,
            middleware: function (connect) {
              return [
                connect.static('.tmp'),
                connect().use(
                  '/bower_components',
                  connect.static('./bower_components')
                ),
                connect().use(
                  '/node_modules',
                  connect.static('./node_modules')
                ),
                connect().use(
                  '/app/styles',
                  connect.static('./app/styles')
                ),
                connect.static('.'),
                proxySnippet
              ];
            }
          }
        }
    }

    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-ts');

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    ['clean:build', 'ts', 'copy', 'stylesheets']
  );

  grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets.',
    ['cssmin', 'clean:stylesheets']
  );

  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files.',
    ['uglify', 'clean:scripts']
  );

  grunt.registerTask(
    'serve',
    'Watches the project for changes, automatically builds them and runs a server.',
    function(target)
    {
      grunt.task.run([
      'clean:server',
      //'wiredep',
      'connect:livereload', 
      'watch'
    ]);
    }
  );

};