/**
 * Created by robbin on 24-02-16.
 */

import Mongoose from 'mongoose';

const collectionName = 'accesslog';

export default {
    store(model){
        if(model._id && model._id.constructor && model._id.constructor.name == 'ObjectID'){
            return model.save();
        }

        let Model = mongoose.model(collectionName);

        let myModel = new Model(model);
        return myModel.save();
    },

    findById(id){
        let Model = mongoose.model(collectionName);

        return Model.findById(id).exec();
    },

    findAll(){
        let Model = mongoose.model(collectionName);

        return Model.find({}).exec();
    }
}