import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;

let UserSchema = new Schema({
    _id: ObjectId,
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
    }
});

Mongoose.model('Users', UserSchema);
