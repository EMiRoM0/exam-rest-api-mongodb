import express from 'express';
import ArticleModel from '../models/article.js';

const router = express.Router();

router.post('/articles', async (req, res) => {
    try {
        const article = await ArticleModel.create(req.body);
        res.status(201).send(article);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/articles', async (req, res) => {
    try {
        const articles = await ArticleModel.find();
        res.status(200).send(articles);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/articles/:title', async (req, res) => {
    try {
        const article = await ArticleModel.findOne({ title: req.params.title });
        if (!article) res.status(404).send("The item does not exist, maybe...");
        res.status(200).send(article);
    } catch (error) {
        res.status(500).send("Error getting item");
    }
});

router.delete('/articles/:title', async (req, res) => {
    try {
        const article = await ArticleModel.findOneAndDelete({ title: req.params.title });
        if (!article) res.status(404).send("Item not found");
        res.status(200).send("Deleted successfully");
    } catch (error) {
        res.status(500).send("There was an error deleting the item");
    }
});

router.put('/articles/:title', async (req, res) => {
    try {
        const article = await ArticleModel.findOneAndUpdate({ title: req.params.title }, req.body, { new: true });
        if (!article) res.status(404).send("Item not found");
        res.status(200).send("Updated successfully");
    } catch (error) {
        res.status(500).send("Error updating the item");
    }
});

router.patch('/articles/:title', async (req, res) => {
    try {
        const article = await ArticleModel.findOneAndUpdate({ title: req.params.title }, req.body, { new: true });
        if (!article) res.status(404).send("Not found");
        res.status(200).send("Updated successfully");
    } catch (error) {
        res.status(500).send("Error updating the item");
    }
});

export default router;
