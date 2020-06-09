module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          features: './src/features',
          src: './src',
          common: './src/common',
          components: './src/components',
          navigation: './src/navigation',
          services: './src/services',
          store: './src/store',
          assets: './src/assets',
          __mocks__: './__mocks__',
        },
      },
    ],
  ],
};
// const plugins = [
//   [
//     require.resolve('babel-plugin-module-resolver'),
//     {
//       cwd: 'babelrc',
//       root: ['./src'],
//       extensions: ['.js', '.ios.js', '.android.js'],
//       alias: {
//         common: '.src/common',
//         components: '.src/components',
//         features: '.src/features',
//         assets: '.src/assets',
//       },
//     },
//   ],
// ];
