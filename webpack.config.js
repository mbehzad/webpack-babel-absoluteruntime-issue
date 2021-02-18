const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.mjs",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                require.resolve("@babel/preset-env"),
                {
                  targets: {
                    ie: 11
                  }
                }
              ]
            ],
            plugins: [
              [
                require.resolve("@babel/plugin-transform-runtime"),
                {
                  corejs: false,
                  regenerator: true,
                  useESModules: false,
                  helpers: false,
                  absoluteRuntime: path.dirname(
                    require.resolve("@babel/runtime/package.json")
                  )
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
