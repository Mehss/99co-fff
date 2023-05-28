const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff2)$/,
      use: {
        loader: 'url-loader',
      },
    });

    return config;
  },
});
