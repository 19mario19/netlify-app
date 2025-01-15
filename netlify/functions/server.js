const express = require("express")
const serverless = require("serverless-http")
const path = require("path")

const app = express()

// Serve static files from public directory
app.use(express.static("public"))

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/home/home.html"))
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/about/about.html"))
})

exports.handler = serverless(app)
