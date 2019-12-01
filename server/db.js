var config={
    port:4000,
    mongo:{
        host:'localhost',
        port:'27017',
        dbname:'ak-todos'
    }
}

config.mongo.url=`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.dbname}`;

module.exports=config;