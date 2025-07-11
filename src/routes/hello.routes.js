const router = require("express").Router();
const helloController = require("../controllers/hello.controller");

router.get("/hello", helloController.sayHelloHandler);
router.post("/data", helloController.getDataHandle);

module.exports = router;
