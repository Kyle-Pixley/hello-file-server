const express = require("express")
const app = express()

const PORT = 4000

app.get("/public",(req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/public/bread",(req,res) => {
    res.sendFile(__dirname + "/public/bread.html")
})

app.get("/public/butter",(req,res) => {
    res.sendFile(__dirname + "/public/butter.html")
})


app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`[server]: listening on ${PORT}`)
})

