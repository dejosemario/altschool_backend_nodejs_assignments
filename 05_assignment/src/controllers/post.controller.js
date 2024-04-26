import * as postService from '../services/post.service';

export async function getAllPosts(req, res) {
    try {
        const posts = await postService.getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}   

