$(document).ready(function(){
  $('#elem').wScratchPad({
    size        : 50,          // The size of the brush/scratch.
    bg          : 'css/img/bg.jpg',  // Background (image path or hex color).
    fg          : 'css/img/ScratchImage.jpg',  // Foreground (image path or hex color).
    realtime    : true,       // Calculates percentage in realtime.
    scratchDown : function(e, percent){ },
    scratchMove : function(e, percent){
      if(percent>75){
        $('#elem').css('display', 'none');
        $('#send-form').fadeIn();
      }
      },
    scratchUp   : function(e, percent){  },
    cursor      : null // Set cursor.
  });
  $('#send').on('click', function(e){
    e.preventDefault();
    $('#thanx-msg').fadeIn();
    $('#send-form').css('display', 'none');
    $.ajax({
      type: "POST",
      url: url,
      data: {
        email:$('#email').val(),
        name:$('#name').val(),
        phone:$('#phone').val(),
        checkbox:$('#checkbox').is(":checked")
      },
      dataType: 'json'
    });
  });
  $('#email').jqBootstrapValidation()
});
