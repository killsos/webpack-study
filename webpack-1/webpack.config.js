module.exports = {
  entry:"./entry3.js",
  output: {
      path: __dirname,
      filename: "bundle3.js"
  },
  module:{
    loaders:[
      { test : /\.css$/, loader: "style!css" }
    ]
  }
};
