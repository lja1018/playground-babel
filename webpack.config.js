module.exports = {
  mode: 'production',
  entry: './src/test.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: 'ie 10' }]],
        },
      },
    ],
  },
};
