const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    assert: require.resolve('assert/'),
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve('buffer/'),
    url: require.resolve('url/'),
    querystring: require.resolve('querystring-es3'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    path: require.resolve('path-browserify'),
    os: require.resolve('os-browserify/browser'),
    zlib: require.resolve('browserify-zlib'),
    fs: false, // fs module cannot be polyfilled in the browser
    net: false, // net module cannot be polyfilled in the browser
    tls: false, // tls module cannot be polyfilled in the browser
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};