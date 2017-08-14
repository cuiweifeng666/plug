
function toRotate(obj,ideg){
	var a = Math.round(Math.cos(ideg))
}

Zepto(function($){
	var w=$(window).width();
	var h =$(window).height()-$('header').height()-$('footer').height();
	var l =750/978;
    if(w/h>l){
    	var sm = h/978;
    	$('section').width(750*sm)
    	var half = w-750*sm
    	$('section').css({
    		left:half/2,
    		height:h,
    	})
    }else {
    	var t=h-$('section').height();
    	$('section').css({
    		top:t/2,
    	})
    }
    $('.con-head').css({
    	width:100+"%",
    	height:6.95+"%",
    	fontSize:0.31+"rem",
    	lineHeight:0.81+"rem",
    	color:'#fff',
    	'text-align':'center'
    })
    $('.poker-area01').css({
    	width:26.7+"%",
    	height:23.72+"%",
    	marginLeft:2.7+"%",
    })
    $('.red-pic').css({
    	width:40+"%",
    	height:61+"%",
    	display:'block',
    	marginLeft:29+"%",
    	marginTop:'20%'
    })
    $('.poker-area02').css({
    	width:38.4+"%",
    	height:17.3+"%",
    	marginLeft:1.5+"%",
    })
    $('.win7').css({
    	width:31+"%",
    	height:59+"%",
    	display:'block',
    	marginLeft:35+"%",
    	marginTop:'12%'
    })
    $('.poker-area03').css({
    	width:26.7+"%",
    	height:23.72+"%",
    	marginLeft:1.5+"%",
    })
    $('.black').css({
    	width:40+"%",
    	height:61+"%",
    	display:'block',
    	marginLeft:29+"%",
    	marginTop:'20%'
    })
    $('.middle').css({
    	width:100+"%",
    	height:50+"%",
    	position:'relative'
    })
     $('.left').css({
    	width:26.7+"%",
    	height:100+"%",
    	// position:'relative',
    	marginLeft:2.7+"%",
    })
     $('.right').css({
    	width:26.7+"%",
    	height:100+"%",
    	marginLeft:41.33+"%",
    })
    $('.poker-area04,.poker-area05').css({
    	width:100+"%",
    	height:48+"%",
    	marginTop:'4%'
    })
   $('.big-win,.sm-win,.single-win,.double-win').css({
    	width:40+"%",
    	height:61+"%",
    	display:'block',
    	marginLeft:29+"%",
    	marginTop:'20%'
    })
    $('.poker-area06,.poker-area07').css({
    	width:100+"%",
    	height:48+"%",
    	marginTop:'4%'
    })
    $('.bottom').css({
    	width:100+"%",
    	height:17.38+"%",
    	marginTop:'1%'
    })
    $('.poker-area08').css({
    	marginLeft:'2.7%',
    })	
     $('.poker-area08,.ce').css({
    	width:22.6666+"%",
    	height:100+"%",
    })
     $('.ce').css({
     	marginLeft:'1.3%'
     })
     $('.win-pic').css({
     	width:43+"%",
    	height:69+"%",
    	marginTop:'16%',
     	marginLeft:'29%',
     })
     $('.middle-center').css({
     	width:37.6+"%",
    	height:112+"%",
    	bottom:'0%',
     	left:'31.2%',
     	position:'absolute',
     })
     $('.middle-text').css({
     	width:100+"%",
    	height:8+"%",
    	fontSize:'.31rem',
    	lineHeight:'.5rem',
     	'text-align':'center',
     	color:'#9676A7'
     })
     $('.middle-con').css({
     	width:100+"%",
    	height:70+"%",
    	position:'relative'
     })
     // $('#svg01').css({
     //  		positon:'relative',
     //  })
     $('.middle-con>.porker ').css({
     	// display:'block',
     	position:'absolute',
     	top:'3.1%',
     	left:'3.65%',
     	width:93+"%",
    	height:94.5+"%",
    	'transform-origin':'center'
     })
     $('.porker>img ').css({
     	position:'absolute',
     	width:100+"%",
    	height:100+"%",
    	'transform-origin':'center',
    	// zIndex:2
     })
     // $('.imgs>img ').eq(1).css({
     // 	position:'absolute',
     // 	width:100+"%",
    	// height:100+"%",
    	// 'transform-origin':'center',
    	// transform:'rotateY(-180deg)',
    	// zIndex:2
     // })
     $('.middle-pokers').css({
     	width:100+"%",
    	height:9+"%",
    	marginTop:'1%',
     })
     $('.porker-1').css({
     	width:15+"%",
    	height:100+"%",
    	marginRight:'2%'
	   })
      $('.porker-2').css({
     	width:15+"%",
    	height:100+"%",
	   })
       var wl=$('#svg_11').width()
      var tl=$('#svg01').width()
      $('#svg_11').css({
      	positon:'absolute',
      	// left:'-20%',
      	transform:'scaleX('+(tl/wl-.022)+') scaleY('+(tl/wl-.004)+')',
      	WebkitTransform:'scaleX('+(tl/wl-.022)+') scaleY('+(tl/wl-.004)+')',

      })
      $('.bottom-txt').css({
      	display:'block',
      	width:100+"%",
    	height:11+"%",
    	background:'#331145',
    	'text-align':'center',
    	fontSize:'.3rem',
    	lineHeight:'.65rem',
    	color:'#9676A7',
    	marginTop:'1.3%'
      })
      $('.time-clear').css({
      	left:(w-$('.time-clear').width())/2,
      })
   // 在前面显示的元素，隐藏在后面的元素
		var eleBack = null, eleFront = null,
		//     // 纸牌元素们 
		    eleList = $(".porker>img");
		    $(".porker>img").eq(0).css({
		    	display:'none'
		    })
		// // 确定前面与后面元素
		var funBackOrFront = function() {
		    eleList.each(function() {
		        if ($(this).hasClass("out")) {
		            eleBack = $(this);
		        } else {
		            eleFront = $(this);
		        }
		    });
		};
		funBackOrFront();

  		var t = 10,timeAdd=null;
  		timeAdd = setInterval(function(){
  			t--;
  			if(t==0){
  				$('.time-clear').html(10)
  				$(".porker>img").eq(0).css({
		    	display:'block'
		    })
  				clearInterval(timeAdd);
	  			 eleFront.addClass("out").removeClass("in");
			    setTimeout(function() {
			        eleBack.addClass("in").removeClass("out");
			//         // 重新确定正反元素
			        funBackOrFront();
			    }, 225);
			    return false;
  				
  				t=0
  			}
  				$('.time-clear').html(t)
  		},1000)
  		var ch=$('.bottom-btn>img').height()
  		var bch = ch*1.4
  		console.log(ch)
  		$('.bot-cont').on('tap',function(e){
  				if($(e.target).closest('.bottom-btn')){
  						$('.bottom-btn>img').css({
  							transform:'scale(1) translateY(0)',
							'-webkit-transform':'scale(1) translateY(0)' ,
							'-webkit-transform-origin':'center',
							transition: '500ms'
  						})
  						var t=$(e.target).closest('.bottom-btn').index();
  						$('.bottom-btn').eq(t).find('img').css({
  							transform:'scale(1.4) translateY('+-(bch-ch)/4+'px) translateZ(0)',
							'-webkit-transform':'scale(1.4) translateY('+-(bch-ch)/4+'px) translateZ(0)' ,
							'-webkit-transform-origin':'center',
							transition: '500ms',
							"-webkit-transition":'500ms'
  						})
  				}
  		})

        $('header>.right-con').on('tap',function(e){
            if($(e.target).closest('.ranking')) {
                var m=$(e.target).parent().index();
                if(m==0){
                    
                }
                if(m==1){
                    $('.ranking-head').show();
                    $('.ranking-head>.close').on('tap',function(){
                           $('.ranking-head').hide();
                    })
                }
                if(m==2){
                    console.log(1)
                }
            }
        })

        function ranking(){
            
        }
})