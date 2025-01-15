// netlify/functions/server.js
const express = require("express")
const serverless = require("serverless-http")
const path = require("path")

const app = express()

// Serve static files for each page
app.use("/", express.static(path.join(__dirname, "pages/home")))
app.use("/about", express.static(path.join(__dirname, "pages/about")))

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/home/home.html"))
})

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/about/about.html"))
})

exports.handler = serverless(app)
