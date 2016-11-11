module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  bump: {
    options: {
      files: ['package.json'],
      updateConfigs: [],
      commit: false,
      commitMessage: 'Release v%VERSION%',
      commitFiles: ['package.json'],
      createTag: false,
      tagName: 'v%VERSION%',
      tagMessage: 'Version %VERSION%',
      push: false,
      pushTo: 'upstream',
      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
      globalReplace: false,
      prereleaseName: false,
      metadata: '',
      regExp: false
    }
  },

  replace : {
    dist : {
      options : {
        patterns : [
          {
            match: 'packageJsonVersion',

            // the following line throws errors
            //replacement: function() {
              //var new_pkg = grunt.file.readJSON("package.json");
              //return new_pkg.version;
            //}
            replacement: '<%= pkg.version %>',
          }
        ]
      },

      files : [
        {
          expand : true,
          flatten : true,
          src : [ 'index.html' ],
          dest : './'
        },

        {
          expand : true,
          flatten : true,
          src : [ 'index.html' ],
          dest : './'
        },
      ]
    }
  },
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-bump');
grunt.loadNpmTasks('grunt-replace');

// Default task(s).
grunt.registerTask('default', ['uglify']);

};
