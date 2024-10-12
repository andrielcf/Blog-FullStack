import {MongoClient} from 'mongodb';

let db;

async function connectToDb(cb){
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    db = client.db('database');
    cb();    
}
export {
    db,
    connectToDb,
}