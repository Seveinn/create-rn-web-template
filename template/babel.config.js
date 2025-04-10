module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    development: {
      plugins: [
        'react-native-web',
        [
          'module-resolver',
          {
            root: ['./src'],
            extensions: [
              '.ios.ts',
              '.android.ts',
              '.ts',
              '.ios.tsx',
              '.android.tsx',
              '.tsx',
              '.jsx',
              '.js',
              '.json',
            ],
            alias: {
              '@': './src',
            },
          },
        ],
      ],
    },
    production: {
      plugins: [
        'react-native-web',
        [
          'module-resolver',
          {
            root: ['./src'],
            extensions: [
              '.ios.ts',
              '.android.ts',
              '.ts',
              '.ios.tsx',
              '.android.tsx',
              '.tsx',
              '.jsx',
              '.js',
              '.json',
            ],
            alias: {
              '@': './src',
            },
          },
        ],
      ],
    },
  },
}; 