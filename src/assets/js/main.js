$(document).ready(function(){
  $('.activateCarousel').click(function(){
    $('.carousel').carousel();
    $('.carousel').click();

  });

  $('.icon').hover(function(){
		$(this).css('border-bottom','4px solid white');
	},function(){
		$(this).css('border-bottom','4px solid black');
	});
});