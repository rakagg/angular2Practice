module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      base: {
        src: ['app/scripts/**/*.ts'],
        dest: 'build/js',
        options: {
          module: 'system', 
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
      options: {
        force: true
      },
      build: {
        src: ['build']
      },
      stylesheets: {
        src: ['build/**/*.css', '!build/application.css']
      },
      scripts: {
        src: ['build/**/*.js', '!build/application.js']
      },
    },

    cssmin: {
      build: {
        files: {
          'build/application.css': ['build/**/*.css']
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
      stylesheets: {
        files: 'source/**/*.styl',
        tasks: ['stylesheets']
      },

      copy: {
        files: ['source/**', '!source/**/*.styl'],
        tasks: ['copy']
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          open: true,
          port: 8000,
          hostname: 'localhost',
          debug: true
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
    ['clean:build', 'copy', 'stylesheets', 'ts']
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
    'default',
    'Watches the project for changes, automatically builds them and runs a server.',
    ['build', 'connect', 'watch']
  );

};