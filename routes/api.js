const express = require('express');
const BlogPost = require('../models/blogPost');

const router = express.Router();

//Routes
router.get('/', (req, res) => {
   BlogPost.find({ })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', data.error);
    });
});
//post
router.post('/save', (req, res) => {
    // console.log('Body', req.body);
    const data = req.body;    

    const newBlogPost = new BlogPost(data);

    // .save

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors'});
        } else {
            //Blog Post
            res.json({
                msg: 'Your data has been saved!'
            });
        }
    });
    
});

router.get('/name', (req, res) => {
    const data = {
        username: 'Koos',
        age: 50
    };
    res.json(data);
});

module.exports = router;