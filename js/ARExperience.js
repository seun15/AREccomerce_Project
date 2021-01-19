function hide_Show(){
    $('#ARbtn').click(function(){
        $('.ArExperience').show();
     });

     $('.closeIconAR').click(function(){
        $('.ArExperience').hide();
     });
}
hide_Show();

function emailMsg(){
   $('.emailBtn').click(function(){
      alert('Please Check your email account in a few minutes');
   });
}
emailMsg();
