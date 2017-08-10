const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');
const SeedData = require('../seed');

router.get('/posts', (req, res) =>{

   Posts.find({$text: { $search: req.query.search }},
                      { score: {$meta: "textScore"}})
                       .sort("-date")
                       .exec(function (err, data) {
      if(err){
        return console.log(err)
      }
      res.render('posts', { data: data })
   })

});


router.get('/posts_v2', (req, res) =>{
   function sd() {
      SeedData.seedData();
   }
Posts.find({}).sort('-date').lean().exec(function (err, data) {
   if(err){
     return console.log(err)
   }
   let totalBlogPostsCount = data.length,
       pageSize = 10,
       pageCount = totalBlogPostsCount / pageSize + 1,
       currentPage = 1,
       blogPostsArray = [],
       blogPostsList = {};

   while (data.length > 0) {
      blogPostsArray.push(data.splice(0, pageSize));
   }
   if (typeof req.query.page !== 'undefined') {
      currentPage = + req.query.page;
   }
   blogPostsList.posts = blogPostsArray[ + currentPage - 1];
   res.render('posts_v2', {
      data: blogPostsList,
      pageSize: pageSize,
      totalBlogPostsCount: totalBlogPostsCount,
      pageCount: pageCount,
      currentPage: currentPage
   });
})

});


module.exports = router