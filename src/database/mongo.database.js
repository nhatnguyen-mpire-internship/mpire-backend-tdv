const mongoose = require("mongoose");
const logger = require("../utils/logger");
const { MONGO_URI, MONGO_USER, MONGO_PWD, MONGO_DB } = require("../config");

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", function () {
            logger.info(`MongoDB connected`);
        });

        mongoose.connection.on("disconnected", function () {
            logger.info(`MongoDB disconnected`);
        });

        await mongoose.connect(MONGO_URI, {
            user: MONGO_USER,
            pass: MONGO_PWD,
            dbName: MONGO_DB
        });
    } catch (err) {
        logger.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
