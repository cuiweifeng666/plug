window.onload = function(){
	var mscroll = new IScroll('#wrapper',{
		// scrollbarClass:'myScrollbar',
		scrollbars:'custom',
		srollY:true,
		interactiveScrollbars:true,
	})	
  var bodyHei=$('body').height();
      var tanHei
    // var mscroll02 = new IScroll('#wrapper01',{
    //     // scrollbarClass:'myScrollbar',
    //     scrollbars:'custom',
    //     srollY:true,
    //     interactiveScrollbars:true,
    // })  
	  var swiper = new Swiper('.swiper-container1', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 2000,
            loop: true,
            observer:true,
            observeParents:true,
            autoplayDisableOnInteraction : false,
            autoplay:1500
        });
       var swiper02 = new Swiper('.swiper-container2', {
           scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            // resistanceRatio : 0,
            // autoplay:true,
            autoHeight:true
        });
      

}
Zepto(function($){
       $('.addInfo').on('tap',function(e){
            console.log($(e.target).closest('.addInfo'))
            if($(e.target).closest('.addInfo')){
                var m=$('<div class="per add-text"/>',{
                    html:'<label for="user-area" class="user-address fl">收获地址<i>1</i></label><i class="fl border-left"></i><textarea  name="" id="user-area" class="fl user-area text" maxlength="60" autofocus="autofocus"></textarea>',
                }) 
                $('.addInfo').before(m)
            }
       })
        $('html').css({
                overflow:'visible'
               })
        console.log( $('body').height())
        console.log(window.innerHeight)
       // $('input,textarea').on('click',function(e){
       //      this.focus()

       //      if(this.blur()){
       //        console.log(5)
       //      }
       //      // alert(this)
       //      console.log(this)

       // })
       $('input,textarea').on('click',function(e){
            this.focus()
       })
       // $('#user-tel').get(0).onclick = function(){
       //    this.focus()
       // }
       $('.address-detail .ch').eq(0).show()

      $('.address-link').on('tap',function(e){
               if($(e.target).closest('a')){
                var t=$(e.target).closest('a').index();
                $('.address-link>a').removeClass('active').eq(t).addClass('active')
                $('.address-detail .ch').hide().eq(t).show()
               }
      })
      $('.address>.close').on('tap',function(){
               $('.address,.bg-color').hide();
               showOff=!showOff;
               var newHei =  $('.head-list').position().top
               $('body').height('100%')
               $('html').css({
                overflow:'hidden'
               })
                mscroll = new IScroll('#wrapper',{
                // scrollbarClass:'myScrollbar',
                scrollbars:'custom',
                srollY:true,
                interactiveScrollbars:true,
          })  
      })
       console.log(window.screenTop)
       var allH=document.body.scrollHeight
      $('.header-border').on('tap',function(){
            showOff=!showOff;
            $('body').height(allH)
             $('.address,.bg-color').show();
            // $('.bg-color').height(allH)
      })
      var showOff=false;
      $('.head-right>a').on('tap',function(e){
            if($(e.target).closest('.righ')){
                var m=$(e.target).closest('.righ').index();
                if(m===2){
                   $('.ranking,.bg-color').show();
                    showOff=!showOff; 
                    $('.ranking>.close').on('tap',function(){
                         $('.ranking,.bg-color').hide()
                    })
                    $('body').height(allH)
                }
                if(m===0){
                     $('.diag-sign,.bg-color').show();
                     showOff=!showOff;
                    $('.day-close').on('tap',function(){
                       $('.diag-sign,.bg-color').hide()                           
                    })
                    $('body').height(allH)
                }
                if(m===1){
                   $('.exchange-diag,.bg-color').show()
                    $('.change-btn>a').eq(1).on('tap',function(){
                       $('.exchange-diag,.bg-color').hide()   
                    })
                    $('body').height(allH)
                }
            }
      })
      $('.head-list').on('tap',function(e){
              if($(e.target).closest('.list')){
                  var t=$(e.target).closest('.list').index($('.head-list a'))
                  console.log(t)
              }
      })

        //   function editEnd(editBox) {             //当编辑框对象编辑时失去焦点后调用的函数
        //  var rootNode = this.rootNode;
        //  var u = navigator.userAgent;
        //     if(u.indexOf('iPhone') > -1 ) return;
        //     else{
        //            rootNode.schedule(function () {
        //                       if (windowInnerHeight == window.innerHeight) {
        //                       rootNode.setPositionY(0);   //软键盘隐藏后，把纵坐标重置回来
        //                       }
        //           }.bind(rootNode), 0.01)   
        //   //延时必须要设置，因为键盘弹出来有个动画 ，但是因为延时是500毫秒的关系视觉效果很差
        //      }                                            
        // }
    // window.addEventListener('resize',function(){
    //     if(document.activeElement.tagName == 'INPUT')   
    // })
      
})
