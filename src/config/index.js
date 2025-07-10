const dev = {
    APP_PORT: process.env.DEV_APP_PORT
};

const prod = {
    APP_PORT: process.env.PROD_APP_PORT
};

const config = {
    dev,
    prod
};

module.exports = config[process.env.NODE_ENV === "dev" ? "dev" : "prod"];
