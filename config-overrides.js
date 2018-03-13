const rewirePreact = require('react-app-rewire-preact');
const { injectBabelPlugin, getLoader } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme = require('./themes')();
const autoprefixer = require('autoprefixer')();
// const browserslist = require('./package.json').browserslist;
const urlLoaderMatcher = function(rule) {
  return rule.loader && rule.loader.indexOf(`url-loader`) != -1;
}

module.exports = function override(config, env) {
  config = rewirePreact(config, env);
  config = rewireLess.withLoaderOptions({modifyVars: theme})(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);

  // svg can be base64 encoded in css
  const urlLoader = getLoader(config.module.rules, urlLoaderMatcher);
  urlLoader.test.push(/\.svg$/);

  return config;
}
