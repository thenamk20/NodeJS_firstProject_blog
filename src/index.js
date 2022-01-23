
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require ('express-handlebars');

const app = express()
const port = 4000

const route = require('./routes')

// Middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
  // app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})