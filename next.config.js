const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withPlugins(
  [
    [withFonts, {}],
    [withImages, { fileExtensions: ['jpg', 'jpeg', 'png', 'gif'] }],
  ],
  {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });
      return config;
    },
  },
);
