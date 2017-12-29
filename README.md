[![Built with `generator-vj-include` v8.3.0](https://img.shields.io/badge/vj_include-8.3.0-blue.svg)](https://github.com/bbc/news-vj-developer-scaffold)

# newsspec-12799

Description TBC

## Setup

`npm i` if you haven't already.

## Development

Make any tweaks you need to the output. Consider making a Pull Request back to the include generator if the default was not good enough for your requirements.

Compile the project:

`compile.js`

## Gotchas
The `insert-into-head` grunt task injects `bump-3` and its dependency `jQuery-1.9.1` 
into the generated `pym-iframe.html` file by default.
<br/>

It also injects it into the generated `test--full-width.html` file when `debug` is set to true in `config.js`,
so remember to set it to false before building for deployment. 

## Deployment

Deploy your project (uses Sling under the hood):

`deploy.js --env=aws-test`

## License
Copyright (c) 2017 BBC
