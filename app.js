const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})
app.post('/signup', (req, res) => {
    const users = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf8', flag: 'r' }))
    users.push(req.body)
    fs.writeFileSync('users.json', JSON.stringify(users))
    res.send(JSON.stringify(req.body))

})
app.post('/login', (req, res) => {
    const users = JSON.parse(fs.readFileSync('users.json', { encoding: 'utf8', flag: 'r' }))
    for (const user of users) {
        if (user.username == req.body.username && user.password == req.body.password) {
            const id = user.id
            const name = user.name
            const username = user.username
            const email = user.email
            res.send(JSON.stringify({ id, name, username, email }))
        }
    }
})
app.post('/imgavataruser', (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
})
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server started in port: ${PORT}`, 'http://localhost:8080/'))