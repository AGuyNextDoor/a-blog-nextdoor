module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  // webpack: (config, { isServer }) => {
  //   // config.module.rules.push({
  //   //     test: /\.csv$/,
  //   //     loader: 'csv-loader',
  //   //     options: {
  //   //       dynamicTyping: true,
  //   //       header: true,
  //   //       skipEmptyLines: true
  //   //     }
  //   //   })
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: "empty",
  //     };
  //   }
  //   return config;
  // },

  // images: {
  //   domains: [],
  //   path: "/_next/image",
  //   loader: "default",
  // }
};

// const nextConfigs = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//       };
//     }
//     config.plugins = [...config.plugins];
//     return config;
//   },
//   target: "serverless",
// };

// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     // Note: we provide webpack above so you should not `require` it
//     // Perform customizations to webpack config
//     config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

//     // Important: return the modified config
//     return config;
//   },
// };
