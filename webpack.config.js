const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;


const {
  remotes: ApplicationLayoutRemotes
} = require('./application-layout');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        port: 8081,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "HostApp",
        remotes: {
          // RemoteApp: "RemoteApp@http://localhost:3002/remoteEntry.js",
          ...ApplicationLayoutRemotes(),
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: '^17',
          },
          'react-dom': {
            singleton: true,
            requiredVersion: '^17',
          },
          '@arquivei/atenas': {
            singleton: true,
            requiredVersion: '^7.16'
          }
        },
      }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            fileName: 'index.html',
        })
    ]
}