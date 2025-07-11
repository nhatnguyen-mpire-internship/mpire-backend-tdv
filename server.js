require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const { APP_PORT } = require("./src/config");
const logger = require("./src/utils/logger");
const routes = require("./src/routes");
const connectMongoDB = require("./src/database/mongo.database");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
});

app.use(routes);

app.use((req, res, next) => {
    next(createError.NotFound("Endpoint does not exist"));
});

app.use((err, req, res, next) => {
    const status = err?.status || 500;
    const message = err?.message || "Server occurs error";

    res.status(status).json({
        status,
        message
    });
});

app.listen(APP_PORT, () => {
    connectMongoDB();
    logger.info(`App is listening at port ${APP_PORT}`);
});
