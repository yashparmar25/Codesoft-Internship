const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();  // Load environment variables from .env

// Log MONGO_URL to check if it is being set correctly
console.log("MONGO_URL: ", process.env.MONGO_URL);

mongoose.connect('mongodb://localhost:27017/blogdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB locally!");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running at port no. 3000');
});

app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});

// Define routes
const UserRoutes = require('./routes/user.route');
app.use("/api/user", UserRoutes);

const AuthRoutes = require('./routes/auth.route');
app.use("/api/auth", AuthRoutes);

const PostRoutes = require('./routes/post.route');
app.use("/api/post", PostRoutes);

const CommentRoutes = require('./routes/comment.route');
app.use("/api/comment", CommentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
