module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
    // Metadata.
		pkg: grunt.file.readJSON('package.json'),
		// Task configuration
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			js: {
				files: 'js/src/*.js',
				tasks: ['uglify']
			},
			scss: {
				files: 'scss/*',
				tasks: ['compass']
			}
		},
		uglify: {
			build: {
				src: 'js/src/*.js',
				dest: 'js/<%= pkg.name %>.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};
