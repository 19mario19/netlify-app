const express = require("express")
const serverless = require("serverless-http")

const app = express()

// Basic routes that redirect to static files
app.get("/", (req, res) => {
  res.redirect("/home/index.html")
})

app.get("/about", (req, res) => {
  res.redirect("/about/index.html")
})

exports.handler = serverless(app)
