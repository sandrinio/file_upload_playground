const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
   projectTeam: [{
      name: String,
      role: String,
      department: String
   }]
});

module.exports = mongoose.model("Team", postsSchema);