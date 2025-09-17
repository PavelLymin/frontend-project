export default {
  plugins: {
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: {
            '--sm-viewport': '(min-width: 576px)',
            '--md-viewport': '(min-width: 768px)',
            '--lg-viewport': '(min-width: 1024px)',
            '--xl-viewport': '(min-width: 1280px)',
          },
        },
      ],
    },
  },
};
