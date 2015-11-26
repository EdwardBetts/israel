$(document).ready(function(){
	$('#elem').wScratchPad({
	  size        : 150,          // The size of the brush/scratch.
	  bg          : 'img/bg.jpg',  // Background (image path or hex color).
	  fg          : 'img/ScratchImage.jpg',  // Foreground (image path or hex color).
	  realtime    : true,       // Calculates percentage in realitime.
	  scratchDown: function(e, percent){ },
  	scratchMove: function(e, percent){ },
  	scratchUp: function(e, percent){  },
	  cursor      : null // Set cursor.
	});  
});
