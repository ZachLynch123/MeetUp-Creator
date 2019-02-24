import mongoose, { MongooseDocument } from 'mongoose';
import mongoUri from './keys';

export default () => {
    mongoose.Promise = global.Promise;
    
    mongoose.connect( mongoUri.mongoUri, { useNewUrlParser: true});
    mongoose.connection
        .once('open', () => {console.log('db running')})
        .on('error', err => console.log(err));
}