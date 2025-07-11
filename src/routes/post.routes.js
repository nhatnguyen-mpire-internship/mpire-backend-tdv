const router = require("express").Router();
const postController = require("../controllers/post.controller");
const validateResource = require("../middleware/resource.middleware");
const { PostCreationSchema, PostUpdateSchema } = require("../validations/post.validation");

router.post("/posts", validateResource(PostCreationSchema), postController.createPostHandler);
router.get("/posts", postController.getPostsHandler);
router.get("/posts/:id", postController.getPostHandler);
router.patch("/posts/:id", validateResource(PostUpdateSchema), postController.updatePostHandler);
router.delete("/posts/:id", postController.deletePostHandler);

module.exports = router;
