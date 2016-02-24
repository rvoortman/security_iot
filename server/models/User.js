import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;

let UserSchema = new Schema({
    userName: {
        type: String,
        index: true
    },
    passWord: {
        type: String,
        index: true
    },
    token: {
        type: Number,
        index: true
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        required: true
    }
});

let User = Mongoose.model('users', UserSchema);
module.exports = User;
