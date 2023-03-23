const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoDbURL = 'mongodb://127.0.0.1:27017/shop';

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Database is already initialised!');

        return callback(null, _db);
    }

    MongoClient.connect(mongoDbURL)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
}

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialised!');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
};