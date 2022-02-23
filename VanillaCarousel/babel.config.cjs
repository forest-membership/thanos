module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['module-resolver', 'transform-class-properties', '@babel/plugin-transform-arrow-functions', '@babel/plugin-syntax-dynamic-import'],
};
