  'use strict';
$(document).ready(function(){
  $('#modal1').modal({
     dismissible: false,
      inDuration: 500,
      outDuration: 300,
   }
   );
  $('#modal2').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      inDuration: 500, // Transition in duration
      outDuration: 200, // Transition out duration
     });
  $('#modal3').modal({
     dismissible: false, // Modal can be dismissed by clicking outside of the modal
     inDuration: 500, // Transition in duration
     outDuration: 200, // Transition out duration
   });
  $('#modal4').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      inDuration: 500, // Transition in duration
      outDuration: 200, // Transition out duration
    });
  $('#modal5').modal({
       dismissible: false, // Modal can be dismissed by clicking outside of the modal
       inDuration: 500, // Transition in duration
       outDuration: 200, // Transition out duration
     });
  $('#modal6').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        inDuration: 500, // Transition in duration
        outDuration: 200, // Transition out duration
      });

  $('.parallax').parallax();
  $(".menu-collapsed").click(function() {
     $(this).toggleClass("menu-expanded");
     $('.redes').toggleClass("hide");
   });

 });
