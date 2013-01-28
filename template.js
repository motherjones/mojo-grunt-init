/*
 * grunt-init
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
// Basic template description.
exports.description = 'Create a MoJo news app';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'The best MoJo news app ever.'),
    init.prompt('version'),
    init.prompt('repository', 'git://github.com/motherjones/' + path.basename(process.cwd()) + '.git' ),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name', 'Mother Jones Data Desk'),
    init.prompt('author_email'),
    init.prompt('author_url', 'motherjones.com'),
    init.prompt('node_version', grunt.package.engines.node),
    init.prompt('npm_test', 'grunt qunit')
  ], function(err, props) {

      props.devDependencies = {
        'grunt-contrib-jshint': '~0.1.1rc5',
        'grunt-contrib-clean': '~0.4.0rc5',
        'grunt-contrib-nodeunit': '~0.1.2rc5',
        'grunt-contrib-qunit': '~0.1.1rc5',
        'grunt-contrib-concat': '~0.1.2rc5',
        'grunt-contrib-uglify': '0.1.1rc5',
// ugh not actually helpful       'grunt-contrib-handlebars': '~0.4.0rc5',
        'grunt-contrib-less': '~0.4.0rc5',
        'grunt-contrib-watch': '~0.2.0rc5',
        'grunt-contrib-connect': '0.1.0',
        //'grunt-contrib-connect': '~0.1.1rc5',
        'less-middleware': '~0.1.9',
        //"dustjs-linkedin": "~1.1.1", nope going with handlebars
        "handlebars": "~1.0.8",
        "hbs": "~2.0.1",
        "grunt-templater": "0.0.3-1",
        "grunt-html-smoosher": "0.1.0"
      };

    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
