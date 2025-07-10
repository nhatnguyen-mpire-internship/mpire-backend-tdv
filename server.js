require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const { APP_PORT } = require("./src/config");
const logger = require("./src/utils/logger");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.path}`);
    next();
});

app.use("/api", require("./src/routers"));

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
    logger.info(`App is listening at port ${APP_PORT}`);
});
