//web server that server that serves up static pages in the current directory
const express = require('express')
const app = express()
//where web pages are located .root
app.use(express.static('.'))
const port = process.env.PORT || 3000

app.listen(port,()=>{
console.log('Server is up on port ' + port)
})

