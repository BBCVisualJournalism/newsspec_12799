module.exports = function (grunt) {
    grunt.registerTask('make_vocabs', [
        'check_spreadsheet_ids',
        'cloudfile_to_vocab',
    ]);

    grunt.registerTask('make_schema', [
        'check_spreadsheet_ids',
        'cloudfile_to_schema',
        'markdown_to_html',
        'fix_ampersands',
        'fix_quotes',
    ]);
};
