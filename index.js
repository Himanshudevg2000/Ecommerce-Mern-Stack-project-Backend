const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const env = require('./config');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect(env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("connection successful"))
.catch((err)=> console.log(err))

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({ limit: '300mb', extended: true }));
app.use(bodyParser.urlencoded({
    limit: '100mb', extended: true, parameterLimit: 1000000,
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use('/api/v1/', routes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

console.log(env.PORT)
app.listen(PORT)