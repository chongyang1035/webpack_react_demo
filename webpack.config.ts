import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "pathOrUrlWhenProductionBuild",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {},
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
