module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
		dist: {
			src: ['src/js/*.js'],
			dest: 'build/js/production.js'
		}	
	},
	sass: {
		dist: {
			options:{
				style: 'compressed'
			},
		    files: {
			    'build/css/main.css': 'src/sass/style.scss'
		    }
		}
	},
	uglify: {
		build: {
			src: 'build/js/production.js',
			dest: 'build/js/production.min.js'
		}
	},
	watch: {
	    scripts: {
			files: 'src/js/*.js',
			tasks: ['default']
	    },
		css: {
			files: 'src/sass/*.scss',
			tasks: ['sass']
		}
	}

	});	
	
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify', 'watch', 'sass']);
};