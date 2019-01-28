$(document).ready(function(){
  $('.blur').hover(
  		function(){ $(this).removeClass('blur') }
       function(){ $(this).addClass('sharp') },
       
  });
});