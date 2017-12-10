$(document).ready(function () {
   $('#content_post').on('submit',function (event) {
      event.preventDefault();
      let myForm = $(this).serialize();
      $.ajax({
         url: "/save_post",
         type: "POST",
         data: myForm,
         success: successHandler,
         error: errorHandler
      });
      function errorHandler(error){
         $("#message-from-ajax").text(error);
         console.log('error' + error)
      }
      function successHandler(data) {
         let response = "";
         if(data.titleErr){
            response += data.titleErr
         }else if(data.editorErr) {
            response += data.editorErr
         }else{
            location.href = "/posts"
         }
         console.log(data);
         $("#message-from-ajax").text(response);
      }
   });

   let count = 0;
   let team = [];
   // team member upload
   $('#addMore').on('click', function () {
      count++;
      html = `
         <div class="col-md-4">
           <input class="form-control teamDep" type="text" name="member[department]">
         </div>
         <div class="col-md-4">
           <input class="form-control teamMemb" type="text" name="member[name]">
         </div>
         <div class="col-md-4">
           <input class="form-control teamRole" type="text" name="member[role]">
         </div>
      `
      $('#memberRow').append(html)
   });

   //ajax request with form
$('#subm').on('click', function () {

   let obj = [];
   $('.teamDep').each(function () {
   });

   // obj.push({
   //    name: $(this).val(),
   //    department: $(this).val(),
   //    role: $(this).val()
   // })
   console.log(obj);

   // $('.teamMemb').each(function () {
   //    console.log($(this).val())
   // })
   //
   // $('.teamRole').each(function () {
   //    console.log($(this).val())
   // })


      let formData = $('form').serialize();
      $.ajax({
         url: '/addTeamMember',
         type: 'POST',
         dataType: 'json',
         data: formData,
         success: function (data) {
            console.log(data)
         }
      })
})

});


