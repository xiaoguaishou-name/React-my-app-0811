const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true, //要将style:css改为style:true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#8B81F5'
      }
    }
  }),
);