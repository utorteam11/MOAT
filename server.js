const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// pending handlebars and sessions initialization
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// initialize express
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess)); 

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder for front end
app.use(express.static(path.join(__dirname, 'public')));

// set handlebars as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is now listening on ${PORT}`));
});