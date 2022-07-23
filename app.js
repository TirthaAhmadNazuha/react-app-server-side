const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server started in port: ${PORT}`, 'http://localhost:8080/'))