const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#501BD2',
              '@text-color': '#250D53',
              '@page-header-heading-title': '@heading-3-size',
              '@border-radius-base': '10px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};