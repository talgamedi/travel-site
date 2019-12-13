const path = require('path');

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-simple-vars'), // name of the plugin that installed
  require('postcss-nested'), // name of the plugin that installed
  require('autoprefixer') // name of the plugin that installed
];

module.exports = {
  entry: './app/assets/scripts/App.js',

  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },

  mode: 'development',
  watch: true,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?url=false',
          {
            loader: 'postcss-loader',
            options: { plugins: postCSSPlugins }
          }
        ]
      }
    ]
  }
};
