'use strict'

const fs = require('fs')

function writeNewHtml (fileNames, htmlStrings) {
  console.log('💀htmlStrings', htmlStrings);
  htmlStrings.forEach((htmlString, index) => {
    fs.writeFileSync(fileNames[index], htmlString, 'utf8')
  })
}

module.exports = writeNewHtml
