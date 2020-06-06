const express = require('express');
const db = require('./models/db');
const path = require('path');

const app = express();

let articleRouter = require("./routes/api/articles");

app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use('/api/articles', articleRouter);

const port = process.env.PORT || 5000;

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })

app.get('/', (req, res) => {
    res.send(`We're in the debugging phase rn...`)
})


app.listen(port, () => console.log(`listening at http://localhost:${port}`))
