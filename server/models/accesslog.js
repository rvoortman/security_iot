/**
 * Created by Robbin Voortman on 22-02-16.
 */
import Mongoose from 'mongoose';
import User from './User.js';

import * as AccessConstants from '../../shared/constants/accesslog_constants.js';

const Schema = Mongoose.Schema;
const ObjectId = Schema.ObjectId;

let AccesslogSchema = new Schema({
    action: {
        type: String,
        enum: Object.values(AccessConstants)
    },
    date: {
        type: Date,
        default: Date.now(),
        index: true
    },
});

let Accesslog = Mongoose.model('accesslog', AccesslogSchema);

module.exports = Accesslog;