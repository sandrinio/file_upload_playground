const express = require ('express');
      app = express();


const  mongoose       = require("mongoose"),
       bodyParser     = require("body-parser"),
       methodOverride = require("method-override"),
       session        = require("express-session");



app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

const landingRoutes  = require('./routes/landing'),
      ckeditorRoutes = require('./routes/ckeditor'),
      postsRoutes    = require('./routes/posts_timeline');

app.use(landingRoutes);
app.use(ckeditorRoutes);
app.use(postsRoutes);

mongoose.connect("mongodb://localhost/playground");


app.listen(3000, function () {
   console.log('listening to 3000')
});