'use strict';

var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');
var SeedData = require('../seed');

router.get('/posts', function (req, res) {

   Posts.find({ $text: { $search: req.query.search } }, { score: { $meta: "textScore" } }).sort("-date").exec(function (err, data) {
      if (err) {
         return console.log(err);
      }
      res.render('posts', { data: data });
   });
});

router.get('/posts_v2', function (req, res) {

   Posts.find({}).sort('-date').lean().exec(function (err, data) {
      if (err) {
         return console.log(err);
      }
      var totalBlogPostsCount = data.length,
          pageSize = 10,
          pageCount = totalBlogPostsCount / pageSize + 1,
          currentPage = 1,
          blogPostsArray = [],
          blogPostsList = {};

      while (data.length > 0) {
         blogPostsArray.push(data.splice(0, pageSize));
      }
      if (typeof req.query.page !== 'undefined') {
         currentPage = +req.query.page;
      }
      blogPostsList.posts = blogPostsArray[+currentPage - 1];
      res.render('posts_v2', {
         data: blogPostsList,
         pageSize: pageSize,
         totalBlogPostsCount: totalBlogPostsCount,
         pageCount: pageCount,
         currentPage: currentPage
      });
   });
});

module.exports = router;
//# sourceMappingURL=posts_timeline.js.map