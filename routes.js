const express = require('express');
const router = express.Router();
const blog_controller = require('./Controllers/blog_controller.js');

router.get('/', blog_controller.blog_index);

router.get('/', blog_controller.blog_create_get);

router.post('/', blog_controller.blog_create_post);

router.get('/:id',blog_controller.blog_details);

router.delete('/:id', blog_controller.blog_delete);

module.exports = router;