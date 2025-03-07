module.exports = async ({ config }) => {
  config.resolve.extensions.push('.vue', '.css', '.less', '.scss', '.sass', '.html')
  config.module.rules.push({ test: /\.less$/, loaders: [ 'style-loader', 'css-loader', 'less-loader' ] });
  config.module.rules.push({ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' });
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  });

  return config;
};