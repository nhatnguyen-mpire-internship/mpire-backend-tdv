const router = require("express").Router();

router.get("/hello", (req, res) => {
    res.status(200).json({
        status: 200,
        data: "hello world"
    });
});

router.post("/data", (req, res) => {
    res.status(201).json({
        status: 201,
        data: req.body
    });
});

module.exports = router;
