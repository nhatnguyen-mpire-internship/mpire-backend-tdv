const dev = {
    APP_PORT: process.env.DEV_APP_PORT,
    MONGO_URI: process.env.DEV_MONGO_URI,
    MONGO_USER: process.env.DEV_MONGO_USERNAME,
    MONGO_PWD: process.env.DEV_MONGO_PASSWORD,
    MONGO_DB: process.env.DEV_MONGO_DATABASE
};

const prod = {
    APP_PORT: process.env.PROD_APP_PORT,
    MONGO_URI: process.env.PROD_MONGO_URI,
    MONGO_USER: process.env.PROD_MONGO_USERNAME,
    MONGO_PWD: process.env.PROD_MONGO_PASSWORD,
    MONGO_DB: process.env.PROD_MONGO_DATABASE
};

const config = {
    dev,
    prod
};

module.exports = config[process.env.NODE_ENV === "dev" ? "dev" : "prod"];
