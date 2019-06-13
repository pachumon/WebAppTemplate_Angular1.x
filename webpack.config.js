const path = require('path');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      'angular',
      'angular-animate',
      'angular-route',
      'angular-sanitize',
      'angular-messages',
      'angular-mocks',
      'angular-ui-bootstrap',
      'angular-toastr',
      'lodash'
    ],
    app: [
      './js/app/app.mainmodule.js',
      './js/app/shared/backendmock/backendmock.js',
      './js/app/shared/toastr-service/toastr-service.js',
      './js/app/shared/app-data-service/app-data-service.js',
      './js/app/shared/directives/selectoption.js',
      './js/app/home/modals/rewardsmodal.component.js',
      './js/app/home/modals/redeemmodal.component.js',
      './js/app/home/home.component.js',
      './js/app/home/rewardssummary.component.js',
      './js/app/home/comments.component.js',
      './js/app/home/rewardinfo.component.js'
    ]
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  //this is needed for a good debugging exprience in devtools
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        // query: {
        //     presets: ["@babel/preset-env","@babel/preset-react"]
        // this is needed only if there is no .babelrc
        // }
      }
    ]
  },
  plugins: [    
    // this plugin cleans webpack console before each build
    new CleanTerminalPlugin()
  ]
};
