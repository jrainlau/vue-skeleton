
const fs = require('fs')
const { resolve } = require('path')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
const renderer = createBundleRenderer(resolve(__dirname, './dist/skeleton.json'), {
  template: fs.readFileSync(resolve(__dirname, './tpl.html'), 'utf-8')
})

renderer.renderToString({}, (err, html) => {
  fs.writeFileSync('skeleton.html', html, 'utf-8')
})