Zepto(function($){
	$('.count-1').css({
		'-webkit-transform':'scale(1.4)  translateZ(0)',
		'transform':'scale(1.4)  translateZ(0)',
		'transformOrign':'center'
	})
	  var socket = new WebSocket("ws://192.168.2.129:8080");
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

	// $('.plug').css({
	// 	transform:'scale(1)',
	// 	'-webkit-transform':'scale(1)',
	// 	transition:'.5s'
	// })
	function plugPic(){
		$('.plug').css({
		transform:'scale(0)',
		'-webkit-transform':'scale(0)',
		transition:'0s'
	})
	}
	var chooseBtn = $('.choose');
 	chooseBtn.on('tap',function(e){
     	clearBtn();
    		$(e.target).css({
            '-webkit-transform':'scale(1.4) translateZ(0)',
             transform:'scale(1.4) translateZ(0)',
            transition:".4s",
        }).addClass('active')
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
          $('.start').show();
          into();
        })

   $('.cancel').on('tap',function(){
   		$('.choose').css({
   			'-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".3s",
   		}).eq(0).css({
   			'-webkit-transform':'scale(1.4) translateZ(0)',
             transform:'scale(1.4) translateZ(0)',
            transition:".3s",
   		})
   })
    $('#myCanve').get(0).width=$(window).width()  
     $('#myCanve').get(0).height=$(window).height() 

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
        socket.onopen = function(){
   		
	   }
	   socket.onmessage = function(e){
	   		// int(e);
	   }
        
     function selfDis(m){
       	this.choose = bs.group[m]
       	this.chooseW = choose.offset().width;
       	this.chooseL = choose.offset().left;
         this.chooseT = choose.offset().top;
         this.chooseH = choose.offset().height;
            return {
            left:parseInt(this.chooseL+Math.random()*this.chooseW*0.4+10),
            top:parseInt(this.chooseT+Math.random()*this.chooseH*0.6+20),
            }
        }
       var moveFilmer = {
       		moveGold:function(){
       			var move = {};
       			move.fillArray = [];
       			move.target = [];
       			move.speed = [];
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
       			move.userCount = function(m){ //奖金币初始位置，目标位置，速度加入到数组中
       				for (var i = 0; i < m.length; i++) {
       						var s = selfDis(m[i])
	       					move.target.unshift(s)
	       					move.fillArray.unshift(move.loc())
	       				}
   					for (var i = m.length-1; i > -1; i--) {
   						move.target[i].num = 0;
						var xL = (move.target[i].left-move.fillArray[i].x)/50;
						var yT = (move.target[i].top-move.fillArray[i].y)/50;
						move.speed.unshift({x:xL,y:yT});
   					}
       			}
       			move.aggregation = function(m,t,i){
       				for (var i =0;i < move.fillArray.length;i++) {
       					if(m){
       						var num=Math.floor(move.target.length/3)
       						if(i<=num){
       							var s=selfDis(4);
	       						move.target[i].left = s.left;
								move.target[i].top = s.top;
       						}
       						if(i>num){
       							var s=selfDis(2);
	       						move.target[i].left = s.left;
								move.target[i].top = s.top;
       						}
       					} else {
       						var s=selfDis(2);
       						move.target[i].left = s.left;
							move.target[i].top = s.top;
       					}
							move.speed[i].x = (move.target[i].left - move.fillArray[i].x)/50;
							move.speed[i].y = (move.target[i].top - move.fillArray[i].y)/50;
						}
							
       			}
       			move.star = function(m,t){//中奖，且中奖位置是否存在俩个
       				var n = 0;
       				var time=setInterval(function(){
       				bs.group[m].css({
       					background:'red',
       					opacity:1,
       					transition:'0s'
       				})
       					n++;
	       				setTimeout(function(){
	       					bs.group[m].css({
	       					background:'red',
	       					opacity:0,
	       					transition:'0s'
	       					})
       					if(n==4){
       						clearInterval(time)
       						bs.group[m].css({
		       					opacity:1,
		       					background:'',
		       					transition:'0s'
		       					})
	       					}
	       				},300)
       				},600)
       				if(t){
       					var timer2=setInterval(function(){
	       				bs.group[t].css({
	       					background:'red',
	       					opacity:1,
	       					transition:'0s'
	       				})
	       					n++;
		       				setTimeout(function(){
		       					bs.group[t].css({
		       					background:'red',
		       					opacity:0,
		       					transition:'0s'
		       					})
	       					if(n==4){
	       						clearInterval(timer2)
	       						bs.group[t].css({
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
       				var t=move.center()
       				for (var i =0;i < move.fillArray.length;i++) {
						move.target[i].left = t.x;
						move.target[i].top = t.y;
						// console.log(move.speed[i])
						move.speed[i].x = (move.target[i].left - move.fillArray[i].x)/50;
						move.speed[i].y = (move.target[i].top - move.fillArray[i].y)/50;					
					}
					// move.target[i].num = 1;
					//调用收集金币动画
       			} 
       			move.orWin = function(m,i){
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
							move.back = 3;
       				}
       				}
       			move.draw = function(){//每次调用的绘图函数
       				for (var i =0;i < move.fillArray.length; i++) {
       						if(move.back === 0){
	       						 if( move.target[i].top <= move.fillArray[i].y){
	       							// move.fillArray[i].x = move.target[i].left;
	       							// move.fillArray[i].y = move.target[i].top;
	       							ctx.drawImage(move.img, move.target[i].left, move.target[i].top ,10 ,10);
	       							// if(move.target[i].num == 0){
	       								// setTimeout(function(){
	       									// move.backMoney();
	       									// move.back = 1;
	       								// },1000)
	       							// }
	       							//金币开始往获奖位置走
	       						} else {
		       						ctx.drawImage(move.img, move.fillArray[i].x, move.fillArray[i].y ,10 ,10);
		       						move.fillArray[i].x += move.speed[i].x;
		       						move.fillArray[i].y += move.speed[i].y;
		       						}
       						}//单纯的进场撒金币动画
       						if(move.back === 1){
	       						if( move.target[i].top <= move.fillArray[i].y){
	       							ctx.drawImage(move.img, move.target[i].left, move.target[i].top ,10 ,10);
	       							// setTimeout(function(){
	       									move.aggregation(m=1,t,i);
	       									move.star(2,t=4);
	       									move.back =2;
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
	       								move.orWin(m=1,i);//从获奖区域到（可能没中头像），和顶部初始点
	       						} else {
	       							ctx.drawImage(move.img, move.fillArray[i].x, move.fillArray[i].y ,10 ,10);
		       						move.fillArray[i].x += move.speed[i].x;
		       						move.fillArray[i].y += move.speed[i].y;
	       						}
       						}
       						if(move.back === 3){//从获奖区域到（可能没中头像），和顶部初始点
	       						if((i<=move.win && move.target[i].top <=  move.fillArray[i].y)||(i>move.win && move.target[i].top >=  move.fillArray[i].y)||(move.win == -1 && move.target[i].top >=  move.fillArray[i].y)){
	       								ctx.drawImage(move.img, move.target[i].left, move.target[i].top ,10 ,10);
	       								computer ={};
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
       				user.add = function(select,loc,m){
       					// if(!onoff){
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
							user.target[i].left = parseInt($('.contect').offset().left+10);
							user.target[i].top = parseInt($('.contect').offset().top+10);
							user.speed[i].x = (user.target[i].left - user.arrayFill[i].x)/50;
							user.speed[i].y = (user.target[i].top -  user.arrayFill[i].y)/50;
							
       				}
       				user.draw=function(){
       					for(var i = 0; i<user.arrayFill.length; i++){
       						if(user.state===0 ){
	       						if(user.arrayFill[i].y<=user.target[i].top){
	       							
	       							ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
	       							if(user.target[i].onoff){
	       									user.userBack(i);
	       									user.target[i].onoff = false;
	       								setTimeout(function(){
	       									user.state===1;
	       								},2000)
	       							}
	       						} else {
		       						ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
		       						user.arrayFill[i].x += user.speed[i].x;
		       						user.arrayFill[i].y += user.speed[i].y;
	       					// 	console.log(i+'===='+user.speed[i].x+'===='+user.arrayFill[i].x)
	       						}
       						}
       						if(user.state===1 ){
       							if(user.arrayFill[i].y<=user.target[i].top){
	       							ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
	       						} else {
		       						ctx.drawImage(user.img, user.arrayFill[i].x,user.arrayFill[i].y,10,10);
		       						user.arrayFill[i].x += user.speed[i].x;
		       						user.arrayFill[i].y += user.speed[i].y;
		       						console.log(i+'==='+user.arrayFill[i].x+"==="+user.speed[i].x)
		       					}
       						}
       					}
       				}
       				return user;
       			}	
       	     }
       function restart(){
       		ctx.clearRect(0,0,$(window).width(), $(window).height());
       		// if(playOnoff){
       			play.draw();
       		// }
       		// if(computerOnoff){
       			// computer.draw();
       		// }
       		requestAnimFrame(restart);
       }
       var play = userGold.createGold(),playOnoff = true;
       var computer = moveFilmer.moveGold(),computerOnoff=true;
       var setOf = true;
       var n = 0;
       var userArr = [1,3,6,4,0,6,5,7,3,1,3,6,4,0,6,5,7,3]
       $('.rect').on('singleTap',function(e){
       		if(playOnoff){
       		if($(e.target).closest('.rect')){
                var m=$(e.target).index();
                var selectObj=$('.m-my').find('.active');
                var select=$('.m-my').find('.active').index();
                var u  = Math.floor($('.m-my').find('.active').offset().left)+Math.floor($('.m-my').find('.active').width()/2)-20
                var g = Math.floor($('.m-my').find('.active').offset().top -20 +parseInt($('.m-my').find('.active').height()/2))
               play.add(select,6,m);
               // computer.userCount(userArr);
               if(setOf){
	               	restart();
	               	setOf = false;
	               }
               }
           		if(n==4){
       				computer.backMoney();
       				computer.back = 1;
	       		}	
	       		n++;
            }
       })
   
})