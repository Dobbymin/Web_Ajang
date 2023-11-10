const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('연결 완료');
    })
    .catch((err) => {
        console.log('서버 에러');
        console.error(err);
    });

app.get('/', (req, res, next) => {
    setImmediate(() => {
        next(new Error('it is an error'));
    });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send(error.message || '서버에서 에러가 났습니다.');
});

app.use(express.static(path.join(__dirname, '../uploads')));

app.listen(port, () => console.log(`Listening on port ${port}`));
