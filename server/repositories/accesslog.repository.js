/**
 * Created by robbin on 24-02-16.
 */

import Mongoose from 'mongoose';
import Base from './base.repository.js';

const collectionName = 'accesslog';

let myRepo = {};

export default { ...Base(collectionName), ...myRepo };