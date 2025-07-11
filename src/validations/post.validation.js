const joi = require("joi");

const PostCreationSchema = joi.object({
    body: joi.object({
        title: joi.string().min(1).max(200).required().messages({
            "any.required": "The title is required",
            "string.min": "The mimium title characters must be greater then 1",
            "string.max": "The maximum title characters must be less than 200"
        }),
        content: joi.string().required().messages({
            "any.required": "The content is required",
            "string.base": "Content must be string"
        }),
        tags: joi.array().items(
            joi.string().min(1).max(200).messages({
                "string.base": "Each tag item must be string",
                "string.empty": "Each tag cannot be empty",
                "string.min": "The mimium tag characters must be greater then 1",
                "string.max": "The maximum tag characters must be less than 200"
            })
        ),
        isPublished: joi.boolean()
    })
});

const PostUpdateSchema = joi.object({
    params: joi.object({
        id: joi.string()
    }),
    body: joi.object({
        title: joi.string().min(1).max(200).optional().messages({
            "string.min": "The mimium title characters must be greater then 1",
            "string.max": "The maximum title characters must be less than 200"
        }),
        content: joi.string().optional().messages({
            "string.base": "Content must be string"
        }),
        tags: joi.array().items(
            joi.string().min(1).max(200).messages({
                "string.base": "Each tag item must be string",
                "string.empty": "Each tag cannot be empty",
                "string.min": "The mimium tag characters must be greater then 1",
                "string.max": "The maximum tag characters must be less than 200"
            })
        ),
        isPublished: joi.boolean()
    })
});

module.exports = {
    PostCreationSchema,
    PostUpdateSchema
};
