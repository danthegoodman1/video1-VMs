const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("I'm Alive!!!")
})

app.listen(80, () => {
    console.log("Listening on port 80!")
})
