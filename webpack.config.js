var path = require('path');

module.exports = {
   entry: "frontend/src/index.js",
   
   output: {
     path: path.resolve(__dirname, "frontend/dist"),
     filename: "bundle.js"
   },

   resolve: {
     modules: [ "node_modules" ],
     extensions: [".js", ".json", ".jsx", ".css"],
     alias: {frontend:  path.resolve(__dirname, "frontend")}
   },

   module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: [ "node_modules" ],
         loader: "babel-loader"
       },
     ]
   },

   devtool: "source-map",
}
