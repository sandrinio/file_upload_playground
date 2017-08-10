
//This is simple file upload route ajax part
$(document).ready(function (){
      $("#uploadForm").on('submit',( function (event) {
         event.preventDefault();
      $.ajax({
         url: "/ajax_upload",
         type: "POST",
         data:  new FormData(this),
         contentType: false,
         cache: false,
         processData: false,
         success: successHandler,
         error: function(error){
            $("#targetLayer").html(`<span>` + error + `</span>`)
         }
      });

      }));

      function successHandler(data) {
         let html =
       `<img class="thumbnail" style="width: 200px; display: inline-block; margin-top: 10px" src="/uploads/basic_uploads/` + data.filename + `" >
        <a style="display: block;" href="/uploads/basic_uploads/` + data.filename + `">Download Link</a>`
         $("#targetLayer").html(html)
      }
});