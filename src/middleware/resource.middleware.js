const validateResource = (schema) => (req, res, next) => {
    try {
        const data = {
            body: req.body,
            params: req.params,
            query: req.query
        };

        Object.keys(data).forEach((key) => {
            if (Object.keys(data[key]).length === 0) delete data[key];
        });

        const { error } = schema.validate(data);

        if (error) throw error;

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = validateResource;
