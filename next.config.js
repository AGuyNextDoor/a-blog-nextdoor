module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },

  images: {
    domains: [],
    path: "/_next/image",
    loader: "default",
  },
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
