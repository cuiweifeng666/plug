
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
        var s = h/400;
        var t = h-s*h
        console.log(s)
         $('.ranking-head').css({
            transform:'scale('+s+') translateZ(0) translateY(-'+t+'px)',
            '-webkit-transform':'scale('+s+') translateZ(0) translateY(-'+t+'px)',
            'transform-origin':'center',
            bottom:10+'%'
          })
    }else {
    	var t=h-$('section').height();
    	$('section').css({
    		top:t/2,
    	})
        // console.log(2)
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
    $('.area b').css({
        width:100+"%",
        height:100+"%",
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
      	transform:'scaleX('+(tl/wl-.02)+') scaleY('+(tl/wl-.004)+')',
      	'-webkit-transform':'scaleX('+(tl/wl-.02)+') scaleY('+(tl/wl-.004)+')',
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
     
    // $('#svg01').css({
    //    'stroke-dasharray': 1300,
    //     'stroke-dashoffset': 1300,
    //     animation:'dash 10s linear',
    //     '-webkit-animation':'dash 10s linear',
    //     transition:'10s'
    // })
    function startFilm(){
            $('#svg01').css({
               'stroke-dasharray': 1300,
                'stroke-dashoffset': 1300,
                animation:'dash 10s linear',
                '-webkit-animation':'dash 10s linear',
             })
    }
    startFilm();
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
  		
        function changePorker(t){//反面获奖扑克
            eleFront.addClass("out").removeClass("in");
            $(".porker>img").eq(0).css({
             display:'block'
            })
            $(".porker>img").eq(0).attr({
             src:t.porker
            })
                setTimeout(function() {
                    eleBack.addClass("in").removeClass("out");
                    // 重新确定正反元素
                    funBackOrFront();
                }, 225);
            }
        function backPorker(){//返回正面扑克
            eleFront.addClass("out").removeClass("in");
            $(".porker>img").eq(0).css({
             display:'block'
            })
            setTimeout(function() {
                    eleBack.addClass("in").removeClass("out");
                    // 重新确定正反元素
                    funBackOrFront();
                }, 225);
        }
        setTimeout(function(){
                changePorker({porker:'../images/1-02.png'});
                setTimeout(function(){
                   backPorker(); 
                },1000)
        },5000);

        
        var small = ["../images/1p.png","../images/3p.png","../images/3p.png","../images/4p.png","../images/6p.png"];
        function smallLoad(){//刚进来获取到信息
            small.forEach(function(item,index){
                if(index !== 4){
                    $('.middle-pokers>img').eq(index).attr({
                        src:item
                    })
                } else if (index === 4) {
                    $('.middle-pokers>img').eq(index+1).attr({
                        src:item
                    })
                }
            })
        }
        // smallLoad();
        function trend(newImage){//每次的胜负走势
            $('.middle-pokers').find('img').eq(5).attr({src:newImage})
        }
        trend("../images/1-02.png")
  		var ch=$('.bottom-btn>img').height()
  		var bch = ch*1.4,tch = ch*1.2
        var clone = null;
        var arr2 = [10,100,1000,'全部'];
  		$('.bot-cont').on('tap',function(e){
  				if($(e.target).closest('.bottom-btn')){
  						 var t=$(e.target).closest('.bottom-btn').index();
                        if(t>0 && t<5){
                            $('.bottom-btn>img').css({
                            transform:'scale(1) translateY(0)',
                            '-webkit-transform':'scale(1) translateY(0)' ,
                            '-webkit-transform-origin':'center',
                            transition: '500ms'
                        })
  						$('.bottom-btn').eq(t).find('img').css({
  							transform:'scale(1.4) translateY('+-(bch-ch)/4+'px) translateZ(0)',
							'-webkit-transform':'scale(1.4) translateY('+-(bch-ch)/4+'px) translateZ(0)' ,
							'-webkit-transform-origin':'center',
							transition: '500ms',
							"-webkit-transition":'500ms'
  						})
                        $(".bottom-btn").removeClass('active');
                             var m=$(e.target).parent().addClass('active');
                             clone = $('.bottom-btn').eq(t).addClass('active').find('img').attr('src')
                             // console.log(clone.find('img').attr('src'))
                        }
                       
  				}
  		})

        $('header>.right-con').on('tap',function(e){
            if($(e.target).closest('.ranking')) {
                var m=$(e.target).parent().index();
                if(m==0){
                    
                }
                if(m==1){
                    $('.ranking-head').show();
                    $('.middle-con ').hide();
                }
                if(m==2){
                    console.log(1)
                }
            }
        })
        $('.ranking-head>.close').on('tap',function(){
            $('.ranking-head').hide();
            $('.middle-con').show();
        })

        function ranking(){
            
        }
        reset();
        function reset(){
            $('.bottom-btn').eq(1).addClass('active').find('img').css({
                            transform:'scale(1.4) translateY('+-(bch-ch)/4+'px) translateZ(0)',
                            '-webkit-transform':'scale(1.4) translateY('+-(bch-ch)/4+'px) translateZ(0)' ,
                            '-webkit-transform-origin':'center',
                            transition: '0s'
                        });
            clone = $('.bottom-btn').eq(1).addClass('active').find('img').attr('src')
            console.log($('.bottom-btn').eq(1).addClass('active').find('img'))
        }
        $('.area').on('singleTap',function(){
            if($(this).parent().closest('.area')){
                var m = $(this).closest('.area');
               $('.area').forEach(function(item,index){
                   if(item == m[0]&&index !=1){
                    itemChange(item)
                    $(item).find('.has').attr({
                        src:clone     
                    }).css({
                        position:'absolute',
                        width:$(item).width()/2,
                        height:$(item).width()/2,
                        opacity:'1',
                        left: $(item).width()/2-$(item).width()/4,
                        top:$(item).height()/2-$(item).height()/3
                    });
                    $(item).find('p').css({
                        top:$(item).height()/2+$(item).height()/9,
                        fontSize:$(item).width()/5,
                        opacity:1
                    })
                    var sel =$('.bot-cont').find('.active').index();
                    $(item).find('p').html(arr2[sel-1])
                   }
               })
            }
        })
        function itemChange(item){
            $(item).find('b').css({
                background:'#000',
                opacity:.3,
                transition:'.3s'
            })

        }
        function clearBtn(){
            $('.area').find('b').css({
                opacity:'0'
            })
            $('.area').find('.has').attr("src","").css({
                opacity:'0'
            })
            $('.area').find('p').css({
                opacity:0
            })
        }
         $('.bottom-btn').eq(5).on('tap',function(){//取消
               clearBtn()
               btnMove(this)
         })
         $('.bottom-btn').eq(0).on('tap',function(){//帮助
               btnMove(this)
         })
         function btnMove(item){//取消按钮帮助按钮的效果
             $(item).css({
                transform:'scale(1.2) translateY('+-(tch-ch)/4+'px) translateZ(0)',
                '-webkit-transform':'scale(1.2) translateY('+-(tch-ch)/4+'px) translateZ(0)' ,
                '-webkit-transform-origin':'center',
                transition: '0.3s'
             })
             setTimeout(function(){
                  $(item).css({
                transform:'scale(1) translateY(0) translateZ(0)',
                '-webkit-transform':'scale(1) translateY(0) translateZ(0)' ,
                '-webkit-transform-origin':'center',
                transition: '0.3s'
                })
             },300)
         }
         // win(3)
         function win(num){
             $('.area').find('b').eq(num).css({
                background:"#DA3231",
                opacity:'1',
                transition:'300ms',
                zIndex:-1
             })
         }
        
})