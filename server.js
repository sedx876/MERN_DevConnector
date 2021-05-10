const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('HELLO'))

const port = process.env.PORT || 5000

app.listen(port, () => console.table(`Server running on port: ${port}`))