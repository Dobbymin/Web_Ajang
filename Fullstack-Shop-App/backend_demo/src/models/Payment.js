const { default: mongoose } = require('mongoose');

const PaymentSchema = mongoose.Schema(
    {
        user: {
            type: Object,
        },
        data: {
            type: Array,
            default: [],
        },
        product: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

const Payment = mongoose.model('Product', PaymentSchema);

module.exports = Payment;
