const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/index.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Add Story',
      filename: 'add.html',
      template: path.resolve(__dirname, 'src/views/add.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Edit Story',
      filename: 'edit.html',
      template: path.resolve(__dirname, 'src/views/edit.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'Delete Story',
      filename: 'delete.html',
      template: path.resolve(__dirname, 'src/views/delete.html'),
    }),
    new HtmlWebpackPlugin({
      title: 'About Us',
      filename: 'about.html',
      template: path.resolve(__dirname, 'src/views/about.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};
