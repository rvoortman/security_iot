import Mongoose from 'mongoose';
import Base from './base.repository.js';

const collectionName = 'users';

let myRepo = {};

export default { ...Base(collectionName), ...myRepo };