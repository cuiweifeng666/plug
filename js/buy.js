Zepto(function($){
		var t=getCookie('gold');
		if(t){
			$('.pay-head .text1').find('b').html(t)
			$('.pay-head .text1').find('span').html(t)
		}
		$('.head-back').on('tap',function(){
			window.history.back();
			console.log(2)
		})
		$('.pay').on('tap',function(e){
			$('.pay-list .select').removeClass('active').attr('src','../images/will.png')
			var s=$(e.target).closest('.pay-list')
			s.find('.select').addClass('active').attr('src','../images/select.png')
		})
		$('.pay-btn').on('tap',function(){
				var ind = $('.active').closest('.pay-list').index();
				switch(ind){
					case 0:console.log(22);
					break;
					case 1:console.log(3);
					break;
					case 2:console.log(5);
					break;
				}
		})
		
})