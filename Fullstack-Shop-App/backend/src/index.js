const express = require('express');

const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { error } = require('console');
// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('연결');
    })
    .catch((err) => {
        console.error(err);
    });

// App
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/', (req, res) => {
    res.json(req.body);
});

app.get('*', function (req, res, next) {
    setImeediate(() => {
        next(new Error('it is an error'));
    });
});

app.use(express.static(path.join(__dirname, '../uploads')));
// app.listen(PORT, HOST);

app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.send(error.message || '서버에서 에러가 났습니다.');
});
// console.log(`Running on http://${HOST}:${PORT}`);
app.listen(PORT, () => {
    console.log(`${PORT}번에서 실행이 되었습니다.`);
});
