const express = require("express");
const imageUpload = require("../utils/imageUpload");

const Post = require("../models/Post");

const createPost = async (req, res) => {
    try {
        const { image, title, description } = req.body;
        const { _id: userId } = req.body.user;

        if (!title || !description) {
            return res.status(403).json({
                success: false,
                error: true,
                message: "Insufficient Data",
                data: null,
            });
        }

        let response;
        if (image) {
            const desiredHeight = 200;
            const imageQuality = 80;
            response = await imageUpload(image, { height: desiredHeight, quality: imageQuality });
            console.log("Upload successful:", response);
        }
        const newPost = await Post.create({
            image: response?.secure_url || null,
            title,
            description,
            createdBy: userId,
        });

        return res.status(201).json({
            success: true,
            error: false,
            message: "New Post Created Successfully",
            data: newPost,
        });
    } catch (error) {
        console.error("Error in upload :", error);
        return res.status(500).json({ success: false, message: "Image upload failed" });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const user = req.body.user;
        const posts = await Post.find({}).populate('createdBy');
        console.log(posts);

        return res.status(200).json({
            success: true,
            error: false,
            message: "All posts returned successfully",
            data: posts,
        });
    } catch (error) {
        console.error("Error in get All Posts :", error);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Internal Server Error",
            data: null,
        });
    }
};

module.exports = {getAllPosts,createPost};
