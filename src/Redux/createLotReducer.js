const mongoDB = require('mongodb');
const mongoClient = mongoDB.MongoClient;
const insertFile = (file) => {
    mongoClient.connect('mongodb://localhost:27017',
        {useNewUrlParser: true},
        (err, client) => {
            if (err)
                console.log(err);
            else {
                let db = client.db('auction');
                let collection = db.collection('files')
                try {
                    collection.insertOne(file);
                    console.log('Inserted');
                } catch (err) {
                    console.log(err);
                }
                client.close();
            }
        })
}

let initialState = {};

const createLotReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE-LOT': {

        }
        case 'SAVE-PHOTO': {
            insertFile(action.photo)
        }
        default:
            return state;
    }
}


export default createLotReducer;

export const createLot = lotInfo => {
    return {type: 'CREATE-LOT', lotInfo}
}
export const savePhoto = photo => {
    return {type: 'SAVE-PHOTO', photo}
}