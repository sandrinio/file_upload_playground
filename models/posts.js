const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
   title: {type: String, required: true},
   content: {type: String, required: true},
   author: {
      firstname: String,
      lastname: String,
      pic: String
   },
   date: {type: Date, default: Date.now}
});

// postsSchema.index({
//    title: 'text',
//    content: 'text',
//    "author.firstname": 'text',
//    "author.lastname": 'text'
// });

// postsSchema.index({title: 'text'}, {content: 'text'}, {"weights": { title: 3, content:1 }}, {author: {firstname: 'index', lastname: 'index'}});
postsSchema.index({title: 'text'});
module.exports = mongoose.model("Post", postsSchema);
