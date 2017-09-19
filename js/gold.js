Zepto(function($){
	$('.count-1').css({
		'-webkit-transform':'scale(1.4)  translateZ(0)',
		'transform':'scale(1.4)  translateZ(0)',
		'transformOrign':'center'
	})
	var t = $(window).height();
	var t1 =  $('body>header').height();
	var f1 =  $('body>footer').height();
	var con_1 = t-t1-f1; 
	var scaleSmall
	$('section').height(con_1);
	var m = $('section').width();
	if(m/con_1<688/949){
		$('.table').css({
			width:'100%',
		})
		var w =$('.dice-bg').width(); 
		var scaleSmall = w/688;
		var h = 949*scaleSmall;
		 $('.table').css({
			top:-(h-con_1)/2,
		})
		 var short = 43*(1-scaleSmall)
		 $('.sa').css({
		 	'-webkit-transform':'scale('+scaleSmall+')  translateZ(0)',
		 	'transform':'scale('+scaleSmall+')  translateZ(0)',
		 })
		 $('.dice-pos').css({
		 	width:"100%",
		 	height:h,
		 	top:-(h-con_1)/2,
		 })
		 $('.trend,.contect').css({
		 	top:-short
		 })
		 $('.help,.set').css({
		 	bottom:-short
		 })
		 $('.head-start').css({
		  	left:-57+w/2,
		 	'margin-bottom':34*scaleSmall,
		 })
		 $('.winner').css({
		  	left:180*scaleSmall,
		  	top:90*scaleSmall,
		  	'font-size':24*scaleSmall,
		  })
		 $('.trending-head').css({
		  	left:110*scaleSmall,
		  	top:142*scaleSmall,
		  })
		    $('.trending-sign').css({
		  	width:120*scaleSmall,
		  	height:20*scaleSmall,
		  	'margin-top':8*scaleSmall
		  })
		    $('.tr-pic').css({
		  	width:36*scaleSmall,
		  	height:36*scaleSmall,
		  	'margin-left':6*scaleSmall
		  })
		     $('.win-01>img').css({
		  	width:40*scaleSmall,
		  	height:40*scaleSmall,
		  	top:35*scaleSmall,
		  	left:39*scaleSmall,
		  })
		     $('.long').css({
		  	width:226*scaleSmall,
		  	height:198*scaleSmall,
		  })
		     $('.win-02').css({
		  	top:184*scaleSmall,
		  	left:228*scaleSmall,
		  })
		     $('.win-02>img').eq(0).css({
		     width:55*scaleSmall,
		  	height:19*scaleSmall,
		  	top:20*scaleSmall,
		  	left:89*scaleSmall,
		  })
		     $('.win-02>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:52*scaleSmall,
		  	left:57*scaleSmall,
		  })
		      $('.win-02>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:119*scaleSmall,
		  	left:172*scaleSmall,
		  })
		      $('.win-02>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:166*scaleSmall,
		  	left:78*scaleSmall,
		  })
		       $('.win-05').css({
		  	top:384*scaleSmall,
		  	left:228*scaleSmall,
		  })
		        $('.win-05>img').eq(0).css({
		     width:13*scaleSmall,
		  	height:18*scaleSmall,
		  	top:23*scaleSmall,
		  	left:102*scaleSmall,
		  })
		         $('.win-05>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:57*scaleSmall,
		  })
		          $('.win-05>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:19*scaleSmall,
		  	top:117*scaleSmall,
		  	left:170*scaleSmall,
		  })
		      $('.win-08').css({
		  	top:584*scaleSmall,
		  	left:228*scaleSmall,
		  })
		    $('.win-08>img').eq(0).css({
		     width:44*scaleSmall,
		  	height:19*scaleSmall,
		  	top:16*scaleSmall,
		  	left:96*scaleSmall,
		  })
		         $('.win-08>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:54*scaleSmall,
		  })
          $('.win-08>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:109*scaleSmall,
		  	left:171*scaleSmall,
		  })  
      	  $('.win-08>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:160*scaleSmall,
		  	left:78*scaleSmall,
		  })  
		      $('.st').css({
		  	width:120*scaleSmall,
		  	height:198*scaleSmall,
		  	top:184*scaleSmall,
		  	left:109*scaleSmall,
		  })
		       $('.win-03').css({
		  	top:184*scaleSmall,
		  	left:457*scaleSmall,
		  })
		        $('.win-04').css({
		  	top:384*scaleSmall,
		  	left:109*scaleSmall,
		  })
		      $('.win-06').css({
		  	top:384*scaleSmall,
		  	left:457*scaleSmall,
		  })
		       $('.win-07').css({
		  	top:584*scaleSmall,
		  	left:109*scaleSmall,
		  })
		        $('.win-09').css({
		  	top:584*scaleSmall,
		  	left:457*scaleSmall,
		  })
		    $('.st>img').css({
		  	width:40*scaleSmall,
		  	height:40*scaleSmall,
		  	top:35*scaleSmall,
		  	left:39*scaleSmall,
		  })
		   
		   $('.win-first-01').css({
		  	top:35*scaleSmall,
		  })
		    $('.win-first-02').css({
		  	top:85*scaleSmall,
		  })
		    $('.win-first-03').css({
		    width:42*scaleSmall,
		  	height:19*scaleSmall,
		  	top:140*scaleSmall,
		  })
	}else {
		var t = (m-$('.dice-bg').width())*.6
		$('.table').css({
			height:con_1-t,
			top:t/2
		})
		scaleSmall = (con_1-t)/949
		var w = 688*scaleSmall;
		var u =$('.dice-bg').width();
		var s = (u-w)/2
		$('.table').css({
			left:s,
		})
		var short = 43*(1-scaleSmall)
		 $('.sa').css({
		 	'-webkit-transform':'scale('+scaleSmall+')  translateZ(0)',
		 })
		 $('.dice-pos').css({
		 	width:w,
		 	height:con_1-t,
		 	top:t/2,
		 	left:s,
		 })
		 $('.trend,.contect').css({
		 	top:-short
		 })
		 $('.help,.set').css({
		 	bottom:-short
		 })
		  $('.head-start').css({
		  	left:-57+w/2,
		 	'margin-bottom':34*scaleSmall,
		 })
		  $('.winner').css({
		  	left:180*scaleSmall,
		  	top:90*scaleSmall,
		  	'font-size':24*scaleSmall,
		  })
		   $('.trending-head').css({
		  	left:110*scaleSmall,
		  	top:142*scaleSmall,
		  })
		    $('.trending-sign').css({
		  	width:120*scaleSmall,
		  	height:20*scaleSmall,
		  	'margin-top':8*scaleSmall
		  })
		    $('.tr-pic').css({
		  	width:36*scaleSmall,
		  	height:36*scaleSmall,
		  	'margin-left':6*scaleSmall
		  })
		    
		   $('.long').css({
		  	width:226*scaleSmall,
		  	height:198*scaleSmall,
		  })
		     $('.win-02').css({
		  	top:184*scaleSmall,
		  	left:228*scaleSmall,
		  })
		     $('.win-02>img').eq(0).css({
		     width:55*scaleSmall,
		  	height:19*scaleSmall,
		  	top:20*scaleSmall,
		  	left:89*scaleSmall,
		  })
		     $('.win-02>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:52*scaleSmall,
		  	left:57*scaleSmall,
		  })
		      $('.win-02>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:119*scaleSmall,
		  	left:172*scaleSmall,
		   })
		     $('.win-02>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:166*scaleSmall,
		  	left:78*scaleSmall,
		  })
		       $('.win-05').css({
		  	top:384*scaleSmall,
		  	left:228*scaleSmall,
		  })
		        $('.win-05>img').eq(0).css({
		     width:13*scaleSmall,
		  	height:18*scaleSmall,
		  	top:23*scaleSmall,
		  	left:102*scaleSmall,
		  })
		         $('.win-05>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:57*scaleSmall,
		  })
		          $('.win-05>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:19*scaleSmall,
		  	top:117*scaleSmall,
		  	left:170*scaleSmall,
		  })
		      $('.win-08').css({
		  	top:584*scaleSmall,
		  	left:228*scaleSmall,
		  })
		    $('.win-08>img').eq(0).css({
		     width:44*scaleSmall,
		  	height:19*scaleSmall,
		  	top:16*scaleSmall,
		  	left:96*scaleSmall,
		  })
		         $('.win-08>img').eq(1).css({
		     width:113*scaleSmall,
		  	height:85*scaleSmall,
		  	top:57*scaleSmall,
		  	left:54*scaleSmall,
		  })
          $('.win-08>img').eq(2).css({
		     width:28*scaleSmall,
		  	height:18*scaleSmall,
		  	top:109*scaleSmall,
		  	left:171*scaleSmall,
		  })  
      	  $('.win-08>img').eq(3).css({
		     width:78*scaleSmall,
		  	height:20*scaleSmall,
		  	top:160*scaleSmall,
		  	left:78*scaleSmall,
		  })  
		      $('.st').css({
		  	width:120*scaleSmall,
		  	height:198*scaleSmall,
		  	top:184*scaleSmall,
		  	left:109*scaleSmall,
		  })
		       $('.win-03').css({
		  	top:184*scaleSmall,
		  	left:457*scaleSmall,
		  })
		        $('.win-04').css({
		  	top:384*scaleSmall,
		  	left:109*scaleSmall,
		  })
		      $('.win-06').css({
		  	top:384*scaleSmall,
		  	left:457*scaleSmall,
		  })
		       $('.win-07').css({
		  	top:584*scaleSmall,
		  	left:109*scaleSmall,
		  })
		        $('.win-09').css({
		  	top:584*scaleSmall,
		  	left:457*scaleSmall,
		  })
		    $('.st>img').css({
		  	width:40*scaleSmall,
		  	height:40*scaleSmall,
		  	top:35*scaleSmall,
		  	left:39*scaleSmall,
		  })
		   
		      $('.win-first-01').css({
		  	top:35*scaleSmall,
		  })
		    $('.win-first-02').css({
		  	top:85*scaleSmall,
		  })
		    $('.win-first-03').css({
		    width:42*scaleSmall,
		  	height:19*scaleSmall,
		  	top:140*scaleSmall,
		  })
		 
	}//生成页面

	function plug(index,index2){
		$('.plug').css({
		transform:'scale(1)',
		'-webkit-transform':'scale(1)',
		transition:'.5s'
		})
	}
	
	function plugPic(){
		$('.plug').css({
		transform:'scale(0)',
		'-webkit-transform':'scale(0)',
		transition:'0s'
	})
	}
	var chooseBtn = $('.choose');
 	chooseBtn.on('tap',function(e){
 		if(control){
     		clearBtn();
    		$(e.target).css({
	            '-webkit-transform':'scale(1.4) translateZ(0)',
	             transform:'scale(1.4) translateZ(0)',
	            transition:".4s",
        	}).addClass('active')
    	}
   	 })//底部的按钮切换
   
   function clearBtn(){
   		 chooseBtn.each(function(index,item){
      		$(item).css({
            '-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
             opacity:'1',
            transition:".3s",
            }).removeClass('active')
        })
   }
   // clearBtn()//安妮清除缩放
   // var controls = document.getElementById('controls');
  	// setTimeout(function(){
  	// 	controls.play();	
  	// },300)
//   	audio.currentTime = 0;
// audio.play();
   function into(){
            var fatherW =$('.start').width();
          var p1 = $('.p1');
          var p2 = $('.p2');
          var cicle = $('.cicle');
          var startText = $('.start_text');
          var p1W=$('.p1').width();
          var p2W=$('.p2').width();
          
          p1.css({
            transform:'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            "-webkit-transform":'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            'transition':'.2s',
            opacity:'1',
            display:'block'
          })//左边塞子
          p2.css({
            transform:'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            "-webkit-transform":'translateX('+-(fatherW/2-p2W/4*3)+'px)  translateZ(0)',
            'transition':'.2s',
            opacity:'1',
            display:'block'
          })//右边塞子
          setTimeout(function(){
            $('.cicle').css({
            	display:'block',
              opacity:1,
              transition:'0s'
            })
            
            circle();
          },200)
          setTimeout(function(){
            retur()
          },300)

          }

          function retur(){
          $('.p1').css({
            transform:'translateX('+0+'px) rotate(-270deg) translateZ(0)',
            "-webkit-transform":'translateX('+0+'px) rotate(-270deg) translateZ(0)',
            'webkit-transform-origin':'center',
            opacity:0,
            'transition':'2.5s',
          })//左边塞子返回
          $('.p2').css({
            transform:'translateX('+0+'px) rotate(270deg) translateZ(0)',
            "-webkit-transform":'translateX('+0+'px) rotate(270deg) translateZ(0)',
            opacity:0,
            'webkit-transform-origin':'center',
            'transition':'2.5s',
          })//右边塞子返回
          setTimeout(function(){
             startT();
          },1300)
          }
         function circle(){
            $('.cicle').css({
              transform:'scale(6) translateZ(0)',
              "-webkit-transform":'scale(6) translateZ(0)',
               opacity:0,
               'webkit-transform-origin':'center',
              'transition':'1.5s',
           })

        }//光环效果
        function startT(){
            // startText.show();
            $('.start_text').css({
               opacity:1,
               'webkit-transform-origin':'center',
              'transition':'1s',
           })
            setTimeout(function(){
                 $('.start_text').css({
                  opacity:0,
                  transition:'.6s'
                })
                 clearMove()
            },1000)

        }//文字出来

        function clearMove(){
         	$('.p1').css({
            transform:'translateX('+0+'px) rotate(0) translateZ(0)',
            "-webkit-transform":'translateX('+0+'px) rotate(0) translateZ(0)',
            'webkit-transform-origin':'center',
            opacity:0,
            transition:'0s',
          })//左边塞子初始化
          $('.p2').css({
            transform:'translateX('+0+'px) rotate(0) translateZ(0)',
            "-webkit-transform":'translateX('+0+'px) rotate(0) translateZ(0)',
            opacity:0,
             transition:'0s',
          })//右边塞子初始化
            $('.cicle').css({
              transform:'scale(0) translateZ(0)',
              "-webkit-transform":'scale(0) translateZ(0)',
               opacity:1,
                transition:'0s',
           })
         }  

        $('.cancel').on('tap',function(){
          resest();
        })

    function resest(){
    	$('.start').show();
      	into();
      	play = userGold.createGold()
  		computer = moveFilmer.moveGold()
    }
    function num(n){
    	$('.text-num').show().html(n)
    }
     var control = true;//按钮是否可点击
   $('.cancel').on('tap',function(){
   		if(control){
	   		$('.choose').css({
	   			'-webkit-transform':'scale(1) translateZ(0)',
	             transform:'scale(1) translateZ(0)',
	            transition:".3s",
	   		}).eq(0).css({
	   			'-webkit-transform':'scale(1.4) translateZ(0)',
	             transform:'scale(1.4) translateZ(0)',
	            transition:".3s",
	   		})
   		}
   })
    $('#myCanve').get(0).width=$(window).width()  
     $('#myCanve').get(0).height=$(window).height() 
      $('#myCanve1').get(0).width=$(window).width()  
     $('#myCanve1').get(0).height=$(window).height() 
     $('#myCanve2').get(0).width=$(window).width()  
     $('#myCanve2').get(0).height=$(window).height() 

    $('.rank01').on('tap',function(){
    	$('.ranking-head').show();	
    })
    $('.ranking-head>.close').on('tap',function(){
    	$('.ranking-head').hide();
    })
    function loading(){
    	$('.loading').css({
    		opacity:1,
    		zIndex:2000,
    		transition:'1s'
    	})	
    }
    function loadingHide(){
    	$('.loading').css({
    		opacity:0,
    		zIndex:2,
    		transition:'500ms'
    	})	
    }
     function controlBtn(control){
     	if(control){
     		$('.choose').css({
   			'-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".3s",
	   		}).eq(0).css({
	   			'-webkit-transform':'scale(1.4) translateZ(0)',
	             transform:'scale(1.4) translateZ(0)',
	            transition:".3s",
	   		})
     	} else {
     		$('.choose').css({
   			'-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".3s",
	   		})
     	}
     }
     function trend(m){
     	$('.tr-pic').eq(7).attr({
     		src:m
     	})
     	$('.tr-pic').eq(7).before($('.tr-pic').eq(0))
     }
     Array.prototype.remove = function(index) {
			Array.prototype.sel = this.splice(index, 1);
		};
     // trend('../images/tr2.png');
	window.requestAnimFrame=(function(){
 	 return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
      return window.setTimeout(callback, 1000 / 50);
	    };
	})();  
         var bs =
              {
     		 group:[$('.win-01').eq(1),$('.win-02').eq(1),$('.win-03').eq(1),$('.win-04').eq(1),$('.win-05').eq(1),$('.win-06').eq(1),$('.win-07').eq(1),$('.win-08').eq(1),$('.win-09').eq(1)],
              gT:$('.dice-pos').offset().top+20*scaleSmall,
              gL: $('.dice-pos').offset().left+$('.dice-pos').offset().width-60*scaleSmall,
              numStore:[],
              moneyStore:[],
              all: [],
              moneyAll:0
              }
           // var ctx = document.getElementById("myCanve").getContext('2d');
          var  ctx = document.getElementById("myCanve").getContext('2d')
          var  ctx1 = document.getElementById("myCanve1").getContext('2d')
          var  ctx2 = document.getElementById("myCanve2").getContext('2d')
        
     function selfDis(m){
       	this.choose = bs.group[m];
       	this.chooseW = choose.offset().width;
       	this.chooseL = choose.offset().left;
         this.chooseT = choose.offset().top;
         this.chooseH = choose.offset().height;
        return {
	        left:parseInt(this.chooseL+Math.random()*this.chooseW*0.4+Math.random()*this.chooseW*0.5),
	        top:parseInt(this.chooseT+Math.random()*this.chooseH*0.5+Math.random()*this.chooseW*0.4),
       	 }
        }
       var moveFilmer = {
       		moveGold:function(){
       			var move = {};
       			move.fillArray = [];
       			move.target = [];
       			move.speed = [];
       			move.remove = [];
       			move.back =0;
       			move.win = -1;
       			move.img = new Image();
       			move.img.src = "../images/gold2.png";
       			move.loc= function(){
					var left = parseInt($('.contect').offset().left+20);
				   	var top = parseInt($('.contect').offset().top+20); 
				   	return {x:left,y:top};      				
       			};
       			move.center = function(){
       				var left = parseInt($('.head-start').offset().left+20);
				   	var top = parseInt($('.head-start').offset().top+20); 
				   	return {x:left,y:top};
       			}
       			move.winArea = {main:4,area:0}
       			move.userCount = function(m){ //奖金币初始位置，目标位置，速度加入到数组中
       				for (var i = 0; i < m.length; i++) {
       						var s = selfDis(m[i])
	       					move.target.unshift(s)
	       					move.fillArray.unshift(move.loc())
	       				}
   					for (var i = m.length-1; i > -1; i--) {
   						// move.target[i].num = 0;
						var xL = (move.target[i].left-move.fillArray[i].x)/50;
						var yT = (move.target[i].top-move.fillArray[i].y)/50;
						move.speed.unshift({x:xL,y:yT});
   					}
       			}
       			move.middleSpace = function(){
       				
       			}
       			move.aggregation = function(){
       				for (var i =0;i < move.fillArray.length;i++) {
       					if(move.winArea.area){
       						var num=Math.floor(move.target.length/3)
       						if(i<=num){
       							var s=selfDis(move.winArea.area);
	       						move.target[i].left = s.left;
								move.target[i].top = s.top;
       						}
       						if(i>num){
       							var s=selfDis(move.winArea.main);
	       						move.target[i].left = s.left;
								move.target[i].top = s.top;
       						}
       					} else {
       						var s=selfDis(move.winArea.main);
       						move.target[i].left = s.left;
							move.target[i].top = s.top;
       					}
							move.speed[i].x = (move.target[i].left - move.fillArray[i].x)/50;
							move.speed[i].y = (move.target[i].top - move.fillArray[i].y)/50;
						}
							
       			}
       			move.star = function(){//中奖，且中奖位置是否存在俩个
       				var n = 0;
       				var time=setInterval(function(){
       				bs.group[move.winArea.main].css({
       					background:'red',
       					opacity:1,
       					transition:'0s'
       				})
       					n++;
	       				setTimeout(function(){
	       					bs.group[move.winArea.main].css({
	       					background:'red',
	       					opacity:0,
	       					transition:'0s'
	       					})
       					if(n==4){
       						clearInterval(time)
       						bs.group[move.winArea.main].css({
		       					opacity:1,
		       					background:'',
		       					transition:'0s'
		       					})
	       					}
	       				},300)
       				},600)
       				if(move.winArea.area){
       					var timer2=setInterval(function(){
	       				bs.group[move.winArea.area].css({
	       					background:'red',
	       					opacity:1,
	       					transition:'0s'
	       				})
	       					n++;
		       				setTimeout(function(){
		       					bs.group[move.winArea.area].css({
		       					background:'red',
		       					opacity:0,
		       					transition:'0s'
		       					})
	       					if(n==4){
	       						clearInterval(timer2)
	       						bs.group[move.winArea.area].css({
			       					opacity:1,
			       					background:'',
			       					transition:'0s'
			       					})
		       					}
		       				},300)
	       				},600)
	       			}
       			}
       			move.backMoney = function(){ //金币回流到底部中间位置
       				var t=move.center();
       				for (var i =0;i < move.fillArray.length;i++) {
						move.target[i].left = t.x;
						move.target[i].top = t.y;
						// console.log(move.speed[i]);
						move.speed[i].x = (move.target[i].left - move.fillArray[i].x)/50;
						move.speed[i].y = (move.target[i].top - move.fillArray[i].y)/50;					
					}
					//调用收集金币动画
       			} 
       			move.info = [233,434,5,4,56,6,65,7,7]//每次金币的数量动画
       			move.text = function(){
       				ctx2.clearRect(0,0,$(window).width(),$(window).height())
       				ctx2.font="20px Arial";
       				ctx2.fillStyle = "#fff";
       				for (var i = 0; i < 9; i++) {
       					var width = ctx.measureText(move.info[i])
       					var textX = bs.group[i].offset().left +(bs.group[i].offset().width - width.width)/2
       					var textY = bs.group[i].offset().top +20  
       					// if(setOf){
       					// 	 console.log(textX,textY,move.info,width)
       					// }
       					// ctx.fillText(move.info[i],(obj.chooseL+obj.chooseW-width),(obj.chooseT+obj.chooseH-20))
       					ctx2.fillText(move.info[i],textX,textY)
       				}
       			}
       			move.orWin = function(m){
       				for (var i =0;i < move.fillArray.length;i++) {
       					if(m){
       						 move.win=Math.floor(move.target.length/4)
       						if(i<=move.win){
       							var s=move.center();
	       						move.target[i].left = s.x;
								move.target[i].top = s.y;
       						}
       						if(i>move.win){
       							var s=move.loc();
	       						move.target[i].left = s.x;
								move.target[i].top = s.y;
       						}
       					} else {
       						var s=move.loc();
       						move.target[i].left = s.x;
							move.target[i].top = s.y;
       					}
       						// console.log(move.target)
							move.speed[i].x = (move.target[i].left - move.fillArray[i].x)/50;
							move.speed[i].y = (move.target[i].top - move.fillArray[i].y)/50;
							// move.back = 3;
       				}
       			}
       			move.draw = function(){//每次调用的绘图函数
       				for (var i =0;i < move.fillArray.length; i++) {
       						// move.text();
       						// console.log(new selfDis(2))
       						// console.log(move.text())
       						// ctx.fillStyle = "#fff"
       						// ctx.fillText("sdfjlk",200,330)
       						if(move.back === -1){
       							ctx.drawImage(move.img, move.target[i].x, move.target[i].y ,10 ,10);
       							move.fillArray[i].x = move.target[i].x;
       							move.fillArray[i].y = move.target[i].y;
       						}
       						if(move.back === 0){
	       						 if( move.target[i].top <= move.fillArray[i].y){
	       							// move.fillArray[i].x = move.target[i].left;
	       							// move.fillArray[i].y = move.target[i].top;
	       							move.text(move.target[i]);
	       							// move.remove.push(move.target[i]);
	       							
	       							move.target.remove(i);
	       							move.target.sel.x = 0;
	       							move.target.sel.y = 0;
	       							move.remove.push(move.target.sel);
	       							move.fillArray.remove(i);
	       								       							
	       							ctx1.drawImage(move.img, move.remove[(move.remove.length-1)].left, move.remove[(move.remove.length-1)].top ,10 ,10);
	       							// move.fillArray[i].move = false;
	       							//金币开始往获奖位置走
	       						} else {
		       						ctx.drawImage(move.img, move.fillArray[i].x, move.fillArray[i].y ,10 ,10);
		       						move.fillArray[i].x += move.speed[i].x;
		       						move.fillArray[i].y += move.speed[i].y;
		       						// console.log(move.fillArray)
		       						}
       						}//单纯的进场撒金币动画
       						if(move.back === 1){
	       						if( move.target[i].top <= move.fillArray[i].y){
	       							ctx.drawImage(move.img, move.target[i].left, move.target[i].top ,10 ,10);
	       							// setTimeout(function(){
	       							// 	move.back =2;
	       							// 		move.aggregation(m=1,t);
	       							// 		move.star(2,t=4);
	       							// },2000)
	       							// move.aggrega	tion(m=1,t);//金币到获奖区域
	       						} else {
	       							ctx.drawImage(move.img, move.fillArray[i].x, move.fillArray[i].y ,10 ,10);
		       						move.fillArray[i].x += move.speed[i].x;
		       						move.fillArray[i].y += move.speed[i].y;
	       						}
       						}
       						if(move.back === 2){//金币到获奖区域
	       						if( move.target[i].top >= move.fillArray[i].y){
	       							ctx.drawImage(move.img, move.target[i].left, move.target[i].top ,10 ,10);
	       								// move.orWin(m=1);//从获奖区域到（可能没中头像），和顶部初始点
	       						} else {
	       							ctx.drawImage(move.img, move.fillArray[i].x, move.fillArray[i].y ,10 ,10);
		       						move.fillArray[i].x += move.speed[i].x;
		       						move.fillArray[i].y += move.speed[i].y;
	       						}
       						}
       						if(move.back === 3){//从获奖区域到（可能没中头像），和顶部初始点
       							// if( move.target[i].top <= move.fillArray[i].y){
	       						if((i<=move.win && move.target[i].top <=  move.fillArray[i].y)||(i>move.win && move.target[i].top >=  move.fillArray[i].y)||(move.win == -1 && move.target[i].top >=  move.fillArray[i].y)){
	       								ctx.drawImage(move.img, move.target[i].left, move.target[i].top ,10 ,10);
	       								// computer =function(){
	       								// };
	       								computerOnoff = false;
	       							}else {
	       								ctx.drawImage(move.img, move.fillArray[i].x, move.fillArray[i].y ,10 ,10);
				       					move.fillArray[i].x += move.speed[i].x;
				       					move.fillArray[i].y += move.speed[i].y;
	       						} 
       						}
       				}
       			}
       			return move;
       		}
       }
       var userGold = {
       		createGold:function(){
       			var user = {}
       				user.arrayFill=[];
       				user.img = new Image();
       				user.img.src = "../images/gold2.png";
       				user.speed = [];
       				user.target = [];
       				user.state = 0;
       				user.num = 0;
       				user.add = function(select,m){
       					for (var i = 0; i <= select; i++) {
       						var s = selfDis(m)
	       					user.target.unshift(s)
	       					user.arrayFill.unshift({x:($('.m-my').find('.active').offset().left)+Math.floor($('.m-my').find('.active').width()/2)-20,y:$('.m-my').find('.active').offset().top -20 +parseInt($('.m-my').find('.active').height()/2)})
	       				}
       					for (var i = select; i > -1; i--) {
       						user.target[i].onoff = true;
	   						var xL = parseInt(user.target[i].left-user.arrayFill[i].x)/50;
	   						var yT = parseInt(user.target[i].top-user.arrayFill[i].y)/50;
	   						user.speed.unshift({x:xL,y:yT});
   						}
       				}
       				user.userBack=function(i){
							user.target[i].left = parseInt($('.head-start').offset().left+20);
							user.target[i].top = parseInt($('.head-start').offset().top+20);
							user.speed[i].x = (user.target[i].left - user.arrayFill[i].x)/50;
							user.speed[i].y = (user.target[i].top -  user.arrayFill[i].y)/50;
							
       				}
       				user.draw=function(){
       					for(var i = 0; i<user.arrayFill.length; i++){
       						if(user.state===0 ){
	       						if(user.arrayFill[i].y<=user.target[i].top){
	       							// user.target[i].onoff = true;
	       							ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
	       							user.userBack(i);
   									// if(i == user.arrayFill.length-1 ){
   									// user.state = 2;
   									// }
	       							// user.state = 1;
	       						} else {
		       						ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
		       						user.arrayFill[i].x += user.speed[i].x;
		       						user.arrayFill[i].y += user.speed[i].y;
	       						}
       						}
       						if(user.state===1 ){
       							if(user.arrayFill[i].y>=user.target[i].top){
       								ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
       								play = false
       							}else {
       								ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
		       						user.arrayFill[i].x += user.speed[i].x;
		       						user.arrayFill[i].y += user.speed[i].y;
       							}
       						}
       					}
       				}
       				return user;
       			}	
       	     }
       function restart(){
       		ctx.clearRect(0,0,$(window).width(), $(window).height());
       		if(play){
       			play.draw();
       		}
       		if(computer){
       			computer.draw();
       		}
       		requestAnimFrame(restart);
       }
       function mathCount(m){
       		for(var i= 0;i< m.length; i++) {
       			if(m.length >= 4){
       				
       			}
       		}
       }

       var play = userGold.createGold(),playOnoff = true;
       var computer = moveFilmer.moveGold(),computerOnoff=true;
       var setOf = true;
       var n = 0;
       var userArr = [1,3,6,4,0,6,5,7,3,1,3,6,4,0,6,5,7,3];
        restart();	
       $('.rect').on('singleTap',function(e){
       		if(control){
       		if($(e.target).closest('.rect')){
                var m=$(e.target).index();
                var selectObj=$('.m-my').find('.active');
                var select=$('.m-my').find('.active').index();
                var u  = Math.floor($('.m-my').find('.active').offset().left)+Math.floor($('.m-my').find('.active').width()/2)-20
                var g = Math.floor($('.m-my').find('.active').offset().top -20 +parseInt($('.m-my').find('.active').height()/2))
               if(play&&play.state === 0){
              		play.add(select,m);
               }
               if(computer&&(computer.back == 0||computer.back == -1)){
              	 computer.userCount(userArr);
               }
          //      setTimeout(function(){
          //      	computer.target=computer.fillArray =computer.remove;
          //      	computer.backMoney();
          //      	console.log(computer);
          //      	ctx1.clearRect(0,0,$(window).width(),$(window).height());
	       		// computer.back = 1;
	       		// play.state = 1;
          //      },3000)
     //           setTimeout(function(){
     //           		computer.winArea = {main:4,area:5}
     //           		computer.aggregation();
					// computer.star();
					// computer.back =2;
     //           },4000)
     //           setTimeout(function(){
     //           		computer.orWin(m=1);
     //           		computer.back =3;
     //           },5000)
     			}
               
            }
       })
   
})