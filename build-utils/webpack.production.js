const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  output: {
    // filename: '[chunkhash].js',
    filename: 'bundle.js',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
