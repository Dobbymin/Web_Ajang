const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true, //space를 없애주는 역할
        unique: 1, //중복을 없애주는 역할
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    password: {
        type: String,
        minlength: 5,
    },
    role: {
        //1:관리자,0:일반유저 등등
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        //유효성 관리
        type: String,
    },
    tokenExp: {
        //토큰 유효기간
        type: Number,
    },
});

userSchema.pre('save', function (next) {
    //비밀번호를 암호화 시킨다.
    if (!this.isModified('password')) return next();

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            // Store hash in your password DB.
            if (err) return next(err);
            this.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
    //plainPassword 1234567 암호화된 비밀번호 $2b$10$0
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
        //cb는 콜백함수
    });
};

userSchema.methods.generateToken = function (cb) {
    let user = this;

    //jsonwebtoken을 이용해서 token을 생성하기
    let token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token;

    user.save()
        .then(() => {
            return cb(null, user);
        })
        .catch((err) => {
            return cb(err);
        });
};

userSchema.statics.findByToken = function (token, cb) {
    let user = this;

    //user._id + '' = token
    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function (err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({ _id: decoded, token: token })
            .then((user) => {
                return cb(null, user);
            })
            .catch((err) => {
                return cb(err);
            });
    });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
