const router = require("express").Router();
const helloRoutes = require("./hello.routes");
const postRoutes = require("./post.routes");

router.use("/api", helloRoutes);
router.use("/api", postRoutes);

module.exports = router;
