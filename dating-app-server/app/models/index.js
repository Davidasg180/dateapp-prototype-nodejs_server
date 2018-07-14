const fs = require( "fs");
const path = require( "path");
const mongoose = require( "mongoose");

const basename = path.basename(__filename);

let models = {}
if (CONFIG.db_host != '') {
    //Fetchs all files in models and exported
    var files = fs
                .readdirSync(__dirname)
                .filter(file => {
                    return  (file.indexOf('.') !== 0) &&
                            (file !== basename) &&
                            (file.slice(-3) === '.js');
                })
                .forEach(file => {
                    let filename    =   file.split('.')[0];
                    let modelName   =   filename.charAt(0).toUpperCase() +
                                        filename.slice(1);
                    
                    models[modelName] = require('./' + filename + '.model');
                    
                });
    
    mongoose.Promise = global.Promise;
    
    mongoose.connect(`mongodb://` + CONFIG.db_host + `/` + CONFIG.db_name).catch(error => { 
        console.log('*** Can not connect to mongo server:' + error);
    });
    
    let db = mongoose.connection;
    
    module.exports = db;

    db.once('open', () => {
        console.log(`
                |==========================================|
                |--------Connected to Mongodb Yays!--------|
                |------`+ `mongodb://localhost/` + CONFIG.db_name+`-----|
                |==========================================|
        `);
    });
    
    db.on('error', error => {
        console.log("error", error);
    });
}
module.exports = models;
