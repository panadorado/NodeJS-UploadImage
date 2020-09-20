// directory
const express = require('express');
const router = express.Router();

// Get 1 request image trả về homepage
router.get('/', (req, res) => {
    res.render('index', {
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-girl-then-thung-391x390.jpg',
    });
})

// Post 1 request image trả về homepage
router.post('/uploadimage', (req, res) => {
    res.render('index', {
        image: '/image/' + req.body.image,
    });
})

module.exports = router;