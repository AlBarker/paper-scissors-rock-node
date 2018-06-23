const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'This is the welcome page!'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});