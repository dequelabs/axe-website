'use strict'

const fs = require('fs-extra')
const path = require('path')

const root = path.join(__dirname, '../')
const axeDocs = path.join(root, './node_modules/axe-core/doc/')

console.log(path.join(axeDocs, './API.md'))

fs.copySync( // Copy the API docs to docs/index
  path.join(axeDocs, './API.md'),
  path.join(root, './docs/index.md')
)

function frontLoad (file, data) {

}
