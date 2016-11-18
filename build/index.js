'use strict'

const fs = require('fs-extra')
const path = require('path')

const root = path.join(__dirname, '../')
const axeDocs = path.join(root, './node_modules/axe-core/doc/')
const exampleDocs = path.join(axeDocs, './examples/')

fs.readFile( // Copy the API docs to docs/index
  path.join(axeDocs, './API.md'),
 'utf8',
  function (err, content) {
    frontLoad(
      path.join(root, './docs/index.md'),
      { layout: 'page', title: 'Axe API Documentation' },
      content
    )
    console.log('saved to file docs/index.md')
  }
)

// Take all the examples
var examples = fs.readdirSync(exampleDocs)
.map(fileName => path.join(exampleDocs, fileName))
.filter( // filter out all the files
  filePath => fs.lstatSync(filePath).isDirectory()
)

var languageMap = {
  js: 'javascript',
  json: 'javascript',
  md: 'markdown'
}

examples.forEach(example => {
  var exampleFiles = fs.walkSync(example)
  .filter(fileName => /node_modules/.test(fileName))
  .sort((a, b) => {
    if (/readme\.md/i.test(a)) {
      return -1
    } else if (/readme.md/i.test(b)) {
      return 1
    } else if (/package\.json/i.test(a)) {
      return -1
    } else if (/package\.json/i.test(b)) {
      return 1
    }
  })
  .map(fileName => ({
    name: fileName,
    body: fs.readFileSync(fileName, 'utf8')
  }))

  var exampleBody = exampleFiles.map(exampleFile => {
    var fileName = exampleFile.name.replace(example + '/','')

    if (fileName.toLowerCase() === 'readme.md') {
      return exampleFile.body

    } else {
      var language = languageMap[exampleFile.name.split('.').slice(-1)[0]] || ''
      return [
        '## ' + fileName,
        '<pre><code class="highlight language-' + language + '">',
        exampleFile.body,
        '</code></pre>'
      ].join('\n')
    }
  }).join('\n\n')

  var fileName = example.split('/').slice(-1)[0] + '.md'
  frontLoad(
    path.join(root, './integrations/', fileName),
    { layout: 'page',
      title: 'Example ' + fileName[0].toUpperCase() + fileName.match(/[^.]*/)[0].substr(1)
    },
    exampleBody + '\n\n'
  )
  console.log('saved to file integrations/' + fileName)
})

function frontLoad (file, metaData, content) {
  fs.writeFileSync(file,
    '---\n' +
    Object.keys(metaData).map(
      key => key + ': ' + metaData[key]
    ).join('\n') +
    '\n---\n' +
    content.replace(/^#\s.+/, ''), 'utf8'
  )
}
