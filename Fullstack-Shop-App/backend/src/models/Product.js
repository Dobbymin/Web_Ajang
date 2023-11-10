const { default: mongoose, Schema } = require('mongoose');

const ProductSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    title: {
        type: String,
        maxLength: 30,
    },
    description: String,

    price: {
        type: Number,
        default: 0,
    },

    image: {
        type: Array,
        default: [],
    },

    sold: {
        type: Number,
        default: 0,
    },

    continents: {
        type: Number,
        default: 1,
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
