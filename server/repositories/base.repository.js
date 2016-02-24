import Mongoose from 'mongoose';

export default function BaseRepo(collectionName) {
    return {
        store(model){
            if (model._id && model._id.constructor && model._id.constructor.name == 'ObjectID') {
                return model.save();
            }

            let Model = Mongoose.model(collectionName);

            let myModel = new Model(model);
            return myModel.save();
        },

        findById(id){
            let Model = Mongoose.model(collectionName);

            return Model.findById(id).exec();
        },

        findAll(){
            let Model = Mongoose.model(collectionName);

            return Model.find({}).exec();
        }
    }
}