import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
title: String,
message: String,
creator: String,
tags: [String],
selectedFile: String,
likedCount: {
    type: String,
    default: 0
},
createdAt: {
    type: Date,
    createdAt: new Date(),
}
});

const PostMessage = mongoose.model( 'PostMessage', postSchema);

export default PostMessage;