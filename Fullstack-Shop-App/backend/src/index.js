const express = require('express');

const path = require('path');
const cors = require('cors');
// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.static(path.join(__dirname, '../uploads')));
// app.listen(PORT, HOST);

// console.log(`Running on http://${HOST}:${PORT}`);
app.listen(PORT, () => {
    console.log(`${PORT}번에서 실행이 되었습니다.`);
});
