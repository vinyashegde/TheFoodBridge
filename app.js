const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'ejs')
app.listen(4000)

// middleware and static files

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))


app.get('/', (req, res) => {
    res.render('index', { title : 'HOME'})
})

app.get('/about', (req, res) => {
    res.render('about', {title : 'About'})
})

app.get('/donate', (req, res) => {
    res.render( 'donate', { title: 'Donate'} )
})



app.use((req, res) => {
    res.status(404).render('404')
})