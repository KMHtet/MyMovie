module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@commons': './src/app/commons',
          '@utils': './src/utils',
          '@store': './src/store',
          '@defines': './src/app/commons/defines',
          '@functions': './src/app/features',
          '@navigations': './src/app/navigations',
          '@screens': './src/app/features/FeaturesScreen.tsx',
          '@screens/': './src/app/features',
          '@components': './src/app/components',
          '@saga': './src/app/saga',
          '@services': './src/app/services',
          '@config': './src/config',
        },
      },
    ],
  ],
};
