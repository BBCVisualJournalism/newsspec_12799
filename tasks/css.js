module.exports = function (grunt) {

    var cssTasks = ['clean:sasscache', 'stylelint', 'augmentSassConfig', 'sass', 'combineScaffoldAndApplicationCss']

    var config = grunt.config.get('config');

    if(config.debug === false){
      cssTasks.push('postcss');
      cssTasks.push('clean:tmp');
    }

    grunt.registerTask('css', cssTasks);
};
