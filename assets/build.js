const esbuild = require('esbuild')
// const vuePlugin = require("esbuild-plugin-vue3")
const pluginVue = require('esbuild-plugin-vue-next')

const bundle = true
const logLevel = process.env.ESBUILD_LOG_LEVEL || 'silent'
const watch = !!process.env.ESBUILD_WATCH

const plugins = [
  // Add and configure plugins here
  // vuePlugin({
  //   generateHTML: false,
  //   // generateHTML: 'js/vue/index.html'
  // })
  pluginVue()
]

const promise = esbuild.build({
  entryPoints: ['js/app.js', 'js/vue/src/main.js'],
  bundle,
  target: 'es2016',
  plugins,
  outdir: '../priv/static/assets',
  logLevel,
  watch
})

if (watch) {
  promise.then(_result => {
    process.stdin.on('close', () => {
      process.exit(0)
    })

    process.stdin.resume()
  })
}