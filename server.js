//import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');


mongoose.connect('mongodb://localhost:27017/youtube',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
})

//http request logger
app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(PORT , console.log(`Server is starting at ${PORT}`));