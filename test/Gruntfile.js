module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [['babelify', { 'stage': 0 }]]
        },
        files: {
          'build/bundle-one.js': ['src/one.js']
          //"build/bundle-two.js": ['src/two.js']
        }
      }
    },

    //uglify: {
      //options: {
        //mangle: true
      //},
      //dist: {
        //files: {
          //'output/bundle-one.min.js': ['build/bundle-one.js'],
          //'output/bundle-two.min.js': ['build/bundle-two.js']
        //}
      //}
    //},

    //htmlmin: {
      //dist: {
        //options: {
          //removeComments: true,
          //collapseWhitespace: true
        //},
        //files: [{
          //"expand": true,
          //"cwd": "src/",
          //"src": ["**/*.html"],
          //"dest": "build/",
          //"ext": ".html"
        //}]
      //}
    //},

    //watch: {
      //scripts: {
        //files: "src/*.js",
        //tasks: ["browserify"]
      //},
      //html: {
        //files: "src/*.html",
        //tasks: ["htmlmin"]
      //}
    //}
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks('grunt-newer');

  //grunt.registerTask('watch', []);
  grunt.registerTask("default", ['browserify']);
};
