const fs = require('fs');
const Promise = require('bluebird');

module.exports = function (grunt) {

    const config = grunt.config.get('config');
    const pathToVocabs = './source/vocabs';

    grunt.registerTask('insert-into-head', function () {
        const done = this.async();
        const content = `\n
            <script src="//static.bbci.co.uk/frameworks/jquery/0.4.1/sharedmodules/jquery-1.9.1.js?v=0.1.89"></script>
            <script src="//emp.bbci.co.uk/emp/bump-3/bump-3.js?v=0.1.89"></script>
        `;

        getAllDestinations().then((destinations) => {
            return Promise.map(destinations, (destination) => insertIntoHead(destination, content));
        }).then((results) => {
            grunt.log.ok(`Content inserted into ${results.length} files`);
            done();
        }).catch((err) => {
            grunt.log.error(err);
            done();
        });
    });

    /*
    grunt.event.on('watch', function (action, filepath) {
        if (!filepath.endsWith('.inc') && !filepath.endsWith('.hbs')) {
            return;
        }
        onChange();
    });
    */


    function getAllDestinations() {
        const wrappers = getAvailableWrappers();
        const destinations = [];

        return getAvailableVocabs().then((vocabs) => {
            vocabs.forEach((vocab) => {
                const pathToVocabDestination = `${config.outputPath}/${vocab}/main`;
                wrappers.forEach((wrapper) => {
                    const destination = `${pathToVocabDestination}/test--${wrapper}.html`;
                    destinations.push(destination);
                });
            });
            return destinations;
        });
    }

    function insertIntoHead(destination, content) {
        return new Promise((resolve, reject) => {

            fs.readFile(destination, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }

                const endOfHeadTag = data.indexOf('</head>');
                const updatedData = data.substring(0, endOfHeadTag) +
                    content + data.substring(endOfHeadTag);

                fs.writeFile(destination, updatedData, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve();
                });

            });

        });
    }

    function getAvailableVocabs() {
        return new Promise((resolve, reject) => {

            fs.readdir(pathToVocabs, (err, items) => {
                if (err) {
                    return reject(err);
                }

                const vocabs = [];
                for (let i = 0; i < items.length; i++) {
                    vocabs.push(items[i].replace('.json', ''));
                }
                return resolve(vocabs);
            })

        });
    }

    function getAvailableWrappers() {
        const wrappers = [].concat(config.wrappers);
        if (!config.debug) {
            const index = wrappers.indexOf('full-width');
            if (index > -1) {
                wrappers.splice(index, 1);
            }
        }
        return wrappers;
    }

};