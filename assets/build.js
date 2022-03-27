const esbuild = require('esbuild')
const pluginVue = require('esbuild-plugin-vue-next')
const copyStaticFiles = require('esbuild-copy-static-files')

const bundle = true
const logLevel = process.env.ESBUILD_LOG_LEVEL || 'silent'
const watch = !!process.env.ESBUILD_WATCH

const plugins = [
  pluginVue(),
  copyStaticFiles({
    src: 'js/vue/src/assets',
    dest: '../priv/static/images',
    dereference: true,
    errorOnExist: false,
    preserveTimestamps: true,
    recursive: true,
  })
]

const promise = esbuild.build({
  entryPoints: ['js/app.js', 'js/vue/src/main.js'],
  bundle,
  target: 'es2016',
  plugins,
  outdir: '../priv/static/assets',
  logLevel,
  watch,
  external: [
    '/images/*'
  ]
})

if (watch) {
  promise.then(_result => {
    process.stdin.on('close', () => {
      process.exit(0)
    })

    process.stdin.resume()
  })
}