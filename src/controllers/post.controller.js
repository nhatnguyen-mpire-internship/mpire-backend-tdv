const Post = require("../models/post.model");
const createError = require("http-errors");

module.exports = {
    createPostHandler: async (req, res, next) => {
        try {
            const data = req.body;
            const createdPost = await Post.create(data);

            res.status(201).json({
                status: 201,
                msg: "Create post successful",
                data: createdPost
            });
        } catch (error) {
            next(error);
        }
    },

    getPostHandler: async (req, res, next) => {
        try {
            const id = req.params?.id;

            const post = await Post.findById(id);
            if (!post) throw createError.NotFound("Post does not exist");

            res.status(200).json({
                status: 200,
                msg: "Get post successful",
                data: post
            });
        } catch (error) {
            next(error);
        }
    },

    getPostsHandler: async (req, res, next) => {
        try {
            const posts = await Post.find();
            res.status(200).json({
                status: 200,
                msg: "Get all post successful",
                data: posts
            });
        } catch (error) {
            next(error);
        }
    },

    updatePostHandler: async (req, res, next) => {
        try {
            const postId = req.params.id;
            const data = req.body;

            const updatedPost = await Post.findByIdAndUpdate(postId, data, {
                new: true
            });

            if (!updatedPost) throw createError.NotFound("The post does not exist");

            res.status(200).json({
                status: 200,
                msg: "Update post successful",
                data: updatedPost
            });
        } catch (error) {
            next(error);
        }
    },

    deletePostHandler: async (req, res, next) => {
        try {
            const postId = req.params.id;

            const post = await Post.findByIdAndDelete(postId);
            if (!post) throw createError.NotFound("The post does not exist");

            res.status(200).json({
                status: 200,
                msg: "Delete post successful"
            });
        } catch (error) {
            next(error);
        }
    }
};
