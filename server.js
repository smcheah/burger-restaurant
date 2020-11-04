const express = require('express');

let PORT = process.env.PORT || 8000;
let app = express();

// app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let template = require('express-handlebars');

app.engine('handlebars', template({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(PORT, () => {
    console.log('connected on http://localhost:' + PORT)
});