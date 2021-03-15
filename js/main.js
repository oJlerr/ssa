$(function(){
	$("body").on('click', '[href*="#about"]', function(e){
		var fixed_offset ='';
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});
});