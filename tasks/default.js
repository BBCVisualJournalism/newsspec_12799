module.exports = function (grunt) {
    grunt.registerTask('default', ['vj-wrapper:beforeGrunt', 'css', 'js', 'jsonlint', 'handlebars', 'create_vocab_modules', 'assets', 'vj-wrapper:afterGrunt']);
};
