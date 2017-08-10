const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'public/uploads/basic_uploads/')
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
   }
});
const upload = multer({ storage: storage });


router.get('/', (req, res) => {
   res.render('landing', { photo: "" })
});


router.post('/basic_upload', upload.single('basicFile'), (req, res) => {
   res.render('landing', { photo: req.file, active_page: 'file_upload' })
});

router.post('/ajax_upload', upload.single('ajaxFile'), (req, res) => {
   let data = req.file;
   res.status(200).json(data)
});




module.exports = router;


