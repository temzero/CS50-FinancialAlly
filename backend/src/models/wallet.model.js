const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    balance: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type: String,
        required: true
    }
});

const Wallet = mongoose.model('Wallet', WalletSchema);

module.exports = Wallet;
