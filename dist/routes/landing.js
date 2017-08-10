'use strict';

var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
   destination: function destination(req, file, cb) {
      cb(null, 'public/uploads/basic_uploads/');
   },
   filename: function filename(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
   }
});
var upload = multer({ storage: storage });

router.get('/', function (req, res) {
   res.render('landing', { photo: "" });
});

router.post('/basic_upload', upload.single('basicFile'), function (req, res) {
   res.render('landing', { photo: req.file, active_page: 'file_upload' });
});

router.post('/ajax_upload', upload.single('ajaxFile'), function (req, res) {
   var data = req.file;
   res.status(200).json(data);
});

module.exports = router;
//# sourceMappingURL=landing.js.map