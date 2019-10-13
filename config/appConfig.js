let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    // uri is the sams as URL for the mongo DB
    uri: 'mongodb://127.0.0.1:27017/blogAppDB',
}
appConfig.apiVersion = '/api/v1';

//to include the config to our application, it can be done by the module object
module.exports = {
    
    port:appConfig.port,
    allowedCorsOrigin:appConfig.allowedCorsOrigin,
    environment:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion

}// end module exports