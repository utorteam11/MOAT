const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// pending handlebars and sessions initialization

// initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder for front end
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is now listening on ${PORT}`));
});