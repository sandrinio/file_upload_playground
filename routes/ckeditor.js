/**
 * Created by Sandro on 8/8/17.
 */
const express = require('express');
const router = express.Router();
const multer  = require('multer');
const Posts = require('../models/posts')
const path = require('path');


const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'public/uploads/basic_uploads/')
   },
   filename: function (req, file, cb) {
      let tempName = Date.now() + "-" + file.originalname;
      cb(null, tempName);
      imageName.imgName = tempName;
   }
});
const upload = multer({ storage: storage });

let imageName = {};

router.get('/ckeditor', (req, res) => {
   res.render('ckeditor')
});

router.post('/ck_upload', upload.any('editor1'), (req, res) => {

   // console.log(imageName.imgName)

   // res.send('/upload/basic_uploads/' + imageName.imgName)

         html = "";
         html += "<script type='text/javascript'>";
         html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
         html += "    var url     = \"/uploads/basic_uploads/" + imageName.imgName + "\";";
         html += "    var message = \"Uploaded file successfully\";";
         html += "";
         html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
         html += "</script>";

         res.send(html);
});

//             SEED DATA
// router.post('/save_post', (req, res, next) => {
//    let data = req.body.content;
//    let responseTxt = {};
//    if(!data.title){
//      return responseTxt.titleErr = "შეიყვანეთ სათაური"
//    }
//    if(!data.editor){
//      return responseTxt.editorErr = "შეიყვანეთ კონტენტი"
//    }
//    if(data.title && data.editor){
//       let numb = 1;
//       for(let i = 0; i < 50; i++){
//          numb += 1;
//          let postContent = {};
//          postContent.title = data.title;
//          postContent.content = data.editor;
//          postContent.author = {
//             firstname: 'Sandro' + " " + numb,
//             lastname: 'Suladze',
//             pic: '/uploads/basic_uploads/1502279242741-10205955424663795.jpg'
//          };
//
//          Posts.create(postContent, function (err, postData){
//          });
//       }
//       let pContent = {};
//       pContent.title = data.title;
//       pContent.content = data.editor;
//       pContent.author = {
//          firstname: 'Sandro',
//          lastname: 'Suladze',
//          pic: '/uploads/basic_uploads/1502279242741-10205955424663795.jpg'
//       };
//       Posts.create(pContent, function (err, postData) {
//          if(err){
//            return console.log(err)
//          }
//          res.json(responseTxt)
//       });
//    }
// });
router.post('/save_post', (req, res, next) => {
   let data = req.body.content;
   let responseTxt = {};
   if(!data.title){
     return responseTxt.titleErr = "შეიყვანეთ სათაური"
   }
   if(!data.editor){
     return responseTxt.editorErr = "შეიყვანეთ კონტენტი"
   }
   if(data.title && data.editor){
      let pContent = {};
      pContent.title = data.title;
      pContent.content = data.editor;
      pContent.author = {
         firstname: 'Sandro',
         lastname: 'Suladze',
         pic: '/uploads/basic_uploads/1502279242741-10205955424663795.jpg'
      };
      Posts.create(pContent, function (err, postData) {
         if(err){
           return console.log(err)
         }
         res.json(responseTxt)
      });
   }
});



module.exports = router;