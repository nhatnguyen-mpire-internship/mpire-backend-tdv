module.exports = {
    sayHelloHandler(req, res, next) {
        try {
            res.status(200).json({
                status: 200,
                data: "hello world"
            });
        } catch (error) {
            next(error);
        }
    },

    getDataHandle(req, res, next) {
        try {
            res.status(201).json({
                status: 201,
                data: req.body
            });
        } catch (error) {
            next(error);
        }
    }
};
