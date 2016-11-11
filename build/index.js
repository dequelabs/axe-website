'use strict'

const fs = require('fs-extra')
const path = require('path')

const root = path.join(__dirname, '../')
const axeDocs = path.join(root, './node_modules/axe-core/doc/')

console.log(path.join(axeDocs, './API.md'))

fs.copy( // Copy the API docs to docs/index
  path.join(axeDocs, './API.md'),
  path.join(root, './docs/index.md')
, function () {
  frontLoad(path.join(root, './docs/index.md'),
    'layout: default\n' +
    'title: Axe API Documentation'
  )
})


function frontLoad (file, prefix) {
  var content = fs.readFileSync(file, 'utf8')
  fs.writeFileSync(file,
    '---\n' +
    prefix +
    '\n---\n' +
    content.replace(/^#\s.+/, ''), 'utf8'
  )
}
