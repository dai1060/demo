$(function(){
	//左侧导航栏移入时效果
	$('.categoryBox li').mouseenter(function(){

		$(this).css({
			'background-color':'#F5F5F5',
			'color':'#EE3B3B'
		});
		$('.categoryBox li').not($(this)).css({
			'background-color':'#EE3B3B',
			'color':'#F5F5F5'
		});

		$(this).find('.right').show();
		$('.categoryBox li .right').not($(this).find('.right')).hide();
	});
	//左侧导航栏移出时效果
	$('.categoryBox li').mouseleave(function(){

		$(this).css({
			'background-color':'#EE3B3B',
			'color':'#F5F5F5'
		});
		$(this).find('.right').hide();
	});
});