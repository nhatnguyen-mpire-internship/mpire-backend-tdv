const mongoose = require("mongoose");
const [DOC, COL] = ["post", "posts"];

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 200
        },
        content: {
            type: String,
            required: true
        },
        tags: [
            {
                type: String
            }
        ],
        isPublished: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        collection: COL
    }
);

const Post = mongoose.model(DOC, postSchema);

module.exports = Post;
