const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    }
})


userSchema.pre('save', async function (next) {
    let user = this;

    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }

    next();
});

userSchema.methods.comparePassword = async function (plainPassword) {
    let user = this;
    const match = await bcrypt.compare(plainPassword, user.password);
    return match;
}

const User = mongoose.model("User", userSchema);

module.exports = User;