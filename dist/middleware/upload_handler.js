'use strict';

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
//# sourceMappingURL=upload_handler.js.map