const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

//application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://gmin0701:<password>@boilerplate.wzbssfh.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World 즐추 즐추~ 연휴 좋아요!'));

app.post('/register', (req, res) => {
    //회원 가입 할 떄 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        });
    });
});
app.post('/api/users/login', (req, res) => {
    // console.log('ping')
    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        // console.log('user', user)
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: '제공된 이메일에 해당하는 유저가 없습니다.',
            });
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
