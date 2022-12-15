const Post = require('../models/Post')

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts, _] = await Post.findAll()

        res.status(200).json({ posts })
    } catch (err) {
        console.log(err);
        next(err)
    }
}

exports.createNewPost = async (req, res, next) => {
    try {
        let { title, body } = req.body

        let post = new Post(title, body)

        post = await post.save()

        res.status(200).json({ message: 'Post created' })
    } catch (err) {
        console.log(err);
        next(err)
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id
        const [post, _] = await Post.findById(postId)

        res.status(200).json({ post: post[0] })
    } catch (err) {
        console.log(err);
        next(err)
    }
}