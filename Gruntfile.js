/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '<%= banner %>',
        separator: ';'
      },
      dist: {
        files: {
          'min/signup.min.js':['js/signup.js'],
          'min/us-states.min.js':['js/us-statues.js'],
          'lib/jquery.min.js':['lib/jquery.js'],
          'lib/bootstrap.min.js':['lib/bootstrap.js']
        }
      }
    },
    jshint: {
      files:['Gruntfile.js', 'signup.js', 'us-states.js']
    },
    cssmin: {
      css: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'cssmin', 'uglify']);

};
