const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.get('/hello-world/', (req, res)=>{
  const pathToHtml = path.resolve(__dirname, '../dist/hello-world.html')
  const contentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(contentFromHtml)
})

app.get('/kiwi/', (req, res)=>{
  const pathToHtml = path.resolve(__dirname, '../dist/kiwi.html')
  const contentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(contentFromHtml)
})

app.listen(3000, ()=>{
  console.log('Server Start')
})
