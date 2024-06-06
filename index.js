import express from 'express';
import { connect } from 'mongoose';
import connectDB from './db.js';
import { configDotenv } from 'dotenv';
import ArticleRoute from './routes/ArticleRoute.js';

const app = express();

app.use(express.json());
app.use('/api', ArticleRoute);

configDotenv();

const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
