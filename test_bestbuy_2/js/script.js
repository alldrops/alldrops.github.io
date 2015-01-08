$(function(){
	$('.activities-list a').on('click', function(e){
		e.preventDefault();
		$('.icon').removeClass('active');
		$(this).find('.icon').addClass('active');
	});
});