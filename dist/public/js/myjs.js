'use strict';

$(document).ready(function () {
   $('#content_post').on('submit', function (event) {
      event.preventDefault();
      var myForm = $(this).serialize();
      $.ajax({
         url: "/save_post",
         type: "POST",
         data: myForm,
         success: successHandler,
         error: errorHandler
      });
      function errorHandler(error) {
         $("#message-from-ajax").text(error);
         console.log('error' + error);
      }
      function successHandler(data) {
         var response = "";
         if (data.titleErr) {
            response += data.titleErr;
         } else if (data.editorErr) {
            response += data.editorErr;
         } else {
            location.href = "/posts";
         }
         console.log(data);
         $("#message-from-ajax").text(response);
      }
   });
});
//# sourceMappingURL=myjs.js.map