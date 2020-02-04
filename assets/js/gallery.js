$(function() {
                  
  $('.lazy').lazy({
    // your configuration goes here
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true,
   
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
  });
      
  });

  $(function() {

$(".allFilter").show();
$(".straightFilter").hide();
$(".circularFilter").hide();
$(".otherFilter").hide();
$(".deckFilter").hide();
$("#galleryTitle").html("Our Work")

$("#filterSelect").change(function(){
if( $(this).val() == "All" ) { 
$(".allFilter").show();
$(".straightFilter").hide();
$(".circularFilter").hide();
$(".otherFilter").hide();
$(".deckFilter").hide()
$("#galleryTitle").html("Our Work")
}

else if ( $(this).val() == "Straight Stairs" ) { 
$(".allFilter").hide();
$(".straightFilter").show();
$(".circularFilter").hide();
$(".otherFilter").hide();
$(".deckFilter").hide()
$("#galleryTitle").html("Straight Stairs")
}
else if( $(this).val() == "Circular Stairs" ) { 
$(".allFilter").hide();
$(".straightFilter").hide();
$(".circularFilter").show();
$(".otherFilter").hide();
$(".deckFilter").hide()
$("#galleryTitle").html("Circular Stairs")
}
else if( $(this).val() == "Outdoor Stairs" ) { 
$(".allFilter").hide();
$(".straightFilter").hide();
$(".circularFilter").hide();
$(".otherFilter").hide();
$(".deckFilter").show()
$("#galleryTitle").html("Outdoor Stairs")
}
else if( $(this).val() == "Spindles, Posts & Rails" ) { 
$(".allFilter").hide();
$(".straightFilter").hide();
$(".circularFilter").hide();
$(".otherFilter").show();
$(".deckFilter").hide()
$("#galleryTitle").html("Spindles, Posts & Rails")
}

}); 

});
  
