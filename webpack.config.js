const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // main js
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    static: path.join(__dirname, "public"), // Serve files from this directory
    port: 3001, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"], // Include .scss for SCSS files
    alias: {
      "@": path.join(__dirname, "./"), // Alias for the src folder
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
    }),
  ],
  module: {
    rules: [
      // Loader for handling js and jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
          }, 
        },
      },
      // Loader for handling SVG and font files
      {
        test: /\.(jpg|jpeg|svg|woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      // Loader for handling CSS and SCSS files
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
