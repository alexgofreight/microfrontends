module.exports = {
  output: {
    uniqueName: "angularModuleFederation"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "angularModuleFederation",
        filename: "remoteEntry.js",
        exposes: {
            './Component': './src/app/app.component.ts',
        },
        remote: {
          reactApp: 'reactApp@http://localhost:3001/remoteEntry.js'
        },
        shared: {
            "@angular/core": { singleton: true, strictVersion: true },
            "@angular/common": { singleton: true, strictVersion: true },
            "@angular/router": { singleton: true, strictVersion: true },
            ...sharedMappings.getDescriptors()
        }
    }),
    mf.sharedMappings.getPlugin(),
  ],
};