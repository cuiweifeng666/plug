Zepto(function($){
  var json = {time:new Date().getTime()}
  window.history.pushState(json,'','../html/shopStore.html')
	var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        scrollbarHide:true,
        scrollbarDraggable:true,
        watchSlidesProgress : true,
       // autoHeight:true
    });
  $('.head-back').on('tap',function(){
      window.history.go(-1) 
  })
    var sH = $('.swiper-slide').height()
  $('.img-border02').on('tap',function(){
  	$('.img-border02>b').css({
  		color:'#4E2B0D'
  	})
     $('.prop-1').hide();
     $('.prop-2').show();
     $('.img-border01>b').css({
  		color:'#826AC3'
  	})
     $('.shop-exchange-01').hide();
  	$('.shop-exchange-02').show()
     $('.shop-bg').attr({
     	src:'../images/count2.png'
     })	
      $('.shop-bg').attr({
     	src:'../images/count2.png'
     })	
  })
  $('.img-border01').on('tap',function(){
  	$('.img-border01>b').css({
  		color:'#4E2B0D'
  	})
  	$('.shop-exchange-02').hide();
  	$('.shop-exchange-01').show();
     $('.prop-2').hide();
     $('.prop-1').show();
     $('.img-border02>b').css({
  		color:'#826AC3'
  	})
     $('.shop-bg').attr({
     	src:'../images/count.png'
     })
  })
   $('.gold-star').on('tap',function(e){
       var s=$(this).find('b').html()
       s =s.split('元宝')[0]||s.split('元宝')[0]
       if(s.indexOf(',')!==-1){
         s=s.split(',').join('').slice(0,-2)
       }
       setCookie('gold',s,'/',20);
       window.open('../html/buy.html','_self',false)

   })

})