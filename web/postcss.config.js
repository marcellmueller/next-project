module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 1,
        features: {
          'custom-properties': true,
        },
        importFrom: [
          () => {
            const customMedia = {
              '--small': '(max-width: 600px)',
              '--medium-up': '(min-width: 600px)',
              '--large-up': '(min-width: 880px)',
              '--extra-large-up': '(min-width: 1200px)',
            };

            return { customMedia };
          },
        ],
      },
    ],
  ],
};
