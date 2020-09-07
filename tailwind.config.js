module.exports = {
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.jsx', './src/**/*.js'],
  },
  theme: {},
};
