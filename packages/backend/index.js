const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()
const port = 4000

const docPath = path.resolve(process.cwd(), '..', 'doc')
console.log('docPath', docPath)

const fileName = '职场新人必读书5本推荐.docx'

app.get('/getDoc', (req, res) => {

  const docxUrl = `${docPath}/${fileName}`

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Expose-Headers', '*')

  res.writeHead(200, {
    'Content-Disposition': 'attachment; filename=' + encodeURI(fileName),
    'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  })

  const readStream = fs.createReadStream(docxUrl)

  readStream.pipe(res)

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
