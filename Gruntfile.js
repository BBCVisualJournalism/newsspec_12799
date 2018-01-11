/* jshint es3: false */
module.exports = function (grunt) {
    const path = require('path');
    const os = require('os');
    const rootConfig = grunt.file.readJSON('config.json');
    const config = {
        pkg: grunt.file.readJSON('package.json'),
        config: rootConfig,
        translations: grunt.file.readJSON('node_modules/@bbc/news-vj-ws-config/config.json'),
        env: getEnvData(rootConfig),
    };

    function getEnvData(config) {
        let env = {
            local: {
                domain: 'http://www.local.bbc.co.uk:1031',
                domainStatic: 'http://static.local.bbc.co.uk:1031',
            },
        };
        const environmentFilePath = path.join(os.homedir(), config.envJsonRelativeToHomeDirectory);
        if (grunt.file.exists(environmentFilePath)) {
            env = grunt.file.readJSON(environmentFilePath);
        }
        else {
            grunt.log.warn(`env.json was NOT found at the following location: ${environmentFilePath}`);
            grunt.log.ok('Using hardcoded JSON in Gruntfile.js instead!');
        }
        return env;
    }

    require('time-grunt')(grunt);
    grunt.initConfig(config);
    const taskDirs = grunt.file.expand('node_modules/@bbc/news-vj-build-tasks/tasks/**');
    taskDirs.forEach((taskDir) => {
        grunt.loadTasks(taskDir);
    });
    grunt.loadTasks('tasks');
    for (let i = 0; i < config.config.wrappers.length; i++) {
        grunt.loadNpmTasks(`@bbc/developer-scaffold-${config.config.wrappers[i]}-wrapper`);
    }
};
