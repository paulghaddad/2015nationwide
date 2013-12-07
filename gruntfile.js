module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    //uglify
	    uglify: {
		    my_target: {
			      files: {
			        'js/script.js': ['components/js/*.js']
			      }
			}
	    },

	    //compass
	    compass: {
	    	dev: {                    // Another target
		      options: {
		        config: "config.rb"
		      }
		    }
	    },
	    //watch
	    watch: {
		  options: {
		     livereload: true,
		     verbose: true
		    },
		  scripts: {
		    files: ['components/js/*.js'],
		    tasks: ['uglify'], 
		  }, 
		  sass: {
		  	files: ['components/sass/*.scss'],
		  	tasks: ['compass:dev']
		  },
		  html: {
		  	files: ['*.html']
		  }
		}

	  });

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'watch']);
}