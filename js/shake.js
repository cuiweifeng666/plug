Zepto(function($){
	var canvas =  document.getElementById('shake');
	var canvas2 =  document.getElementById('circle');
	var canvas3 = document.getElementById('winCircle');
	var borad0 = document.getElementById('img0');
	var borad1 = document.getElementById('img1');
	var borad2 = document.getElementById('img2');
	var borad3 = document.getElementById('img3');
	var borad4 = document.getElementById('img4');
	var borad5 = document.getElementById('img5');
	var borad6 = document.getElementById('img6');

	var ctx = document.getElementById('shake').getContext('2d');	
	// $('#shake').width(74/75+'rem').height(80/75+'rem');
	var ctx1 = document.getElementById('circle').getContext('2d');
	var cbx0 = document.getElementById('img0').getContext('2d')
	var cbx1 = document.getElementById('img1').getContext('2d')
	var cbx2 = document.getElementById('img2').getContext('2d')
	var cbx3 = document.getElementById('img3').getContext('2d')
	var cbx4 = document.getElementById('img4').getContext('2d')
	var cbx5 = document.getElementById('img5').getContext('2d')
	var cbx6 = document.getElementById('img6').getContext('2d')
	// var ctx2 = document.getElementById('winCircle').getContext('2d');
	var w = $(document).width()
	var wh = $(document).height()
	var fh = wh-$("footer").height()
	// console.log(w,wh,fh)
	var s = w/750;
	var h =  $('#shake').height()
	canvas.width = 474;
	canvas.height = 800;
	canvas2.width = 474;
	canvas2.height = 800;
	// canvas3.width =474;
	// canvas3.height = 800;
	
	var imgBg = new Image();
	imgBg.src="../imgs/mashine.png";
	imgBg.onload = function(){
		ctx.drawImage(imgBg,0,0,474,800)
	}
	ctx.drawImage(imgBg,0,0,474,800)
	
	$('#shake,#circle,#winCircle').css({
	top:20/75+'rem',
	left:50/75+'rem',
	zIndex:3,
	transform:'scale('+s+')',
	'-webkit-transform':'scale('+s+')',
	'transform-origin-x':'left',
	'transform-origin-y':'top',
	'-webkit-transform-origin-x':'left',
	'-webkit-transform-origin-y':'top',
	'-webkit-transform-origin-z':'center'
	})
	
	$('.beautiful').css({
		wdith:210/75+'rem',
		height:800/75+'rem',
		right:30/75+'rem',
		top:50/75+'rem'
	})
	$('.head-back').on('tap',function(){
		window.history.back();	
	})
	// alert($('.beautiful').css())
	// var imgs = ["../images/mashine.png","../images/mashine.png"]
	window.requestAnimFrame=(function(){
		 	 return window.requestAnimationFrame||window.webkitRequestAnimationFrame||
		 	 window.mozRequestAnimationFrame||window.oRequestAnimationFrame||
		 	 window.msRequestAnimationFrame||
		 	 function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
		      return window.setTimeout(callback, 1000 / 50);
		    };
		})(); 
	window.cancelRequestAnimFrame = ( function() {
	    return window.cancelAnimationFrame          ||
	        window.webkitCancelRequestAnimationFrame    ||
	        window.mozCancelRequestAnimationFrame       ||
	        window.oCancelRequestAnimationFrame     ||
	        window.msCancelRequestAnimationFrame        ||
	        clearTimeout
	} )();
	Array.prototype.remove = function(index) {
			// var index = this.indexOf(val);
			// if (index > -1) {
			Array.prototype.sel = this.splice(index, 1);
			// }
		};
	var square = {
		drawColor:function(){
			var store = {};
			store.level = 90;
			store.num =31;
			store.vertical = 100;
			store.levelAdd = function(t){
				if(t%10 == 0) {
					return store.level = 90;
				}else {
					t= t%10
					return store.level = 90 + t*31.5;
				}
			}
	
			store.state = 0;
			// store.speed = [];
			store.onoff = false;
			store.verticalAdd = function(t){//对球球进行排列
				if(t%10 == 0&&t!==0) {
					return store.vertical = store.vertical-1*25;
				}else {
					return store.vertical;
				}
			}
			store.drop = function(t){//把每列的球球给掉下的速度和调入的位置
				if(t %10 == 5||t %10 == 4||t %10 == 3){
					store.origin[t].y +=6;
				}
				if(t %10 == 2){
					store.origin[t].y +=4;
					if(store.origin[t].y >= 166 && store.origin[t].y<= 180){
						store.origin[t].x +=5;
						store.origin[t].y -= 2;
					}
				}
				if(t % 10== 1 ){
					store.origin[t].y +=5;
					if(store.origin[t].y >= 160 && store.origin[t].y <= 180 ){
						store.origin[t].x += 4;
						store.origin[t].y -= 3;
					} 
				}
				if(t % 10== 0 ){
					store.origin[t].y +=5;
					if(store.origin[t].y >= 150 && store.origin[t].y <= 180){
						store.origin[t].x += 5;
						store.origin[t].y -= 3;
					} 
				}
				if(t % 10== 6 ){
					store.origin[t].y +=5;
					if(store.origin[t].y >= 166&& store.origin[t].y<= 180){
						store.origin[t].x -=5;
						store.origin[t].y -= 2;
					}
				}
				if(t % 10== 7 ){
					store.origin[t].y +=5;
					if(store.origin[t].y >= 160  && store.origin[t].y <= 180){
						store.origin[t].x -= 6.2;
						store.origin[t].y -= 1;
					} 
				}
				if(t % 10== 8 ){
					store.origin[t].y +=5;
					if(store.origin[t].y >= 156 && store.origin[t].y <= 180){
						store.origin[t].x -= 5;
						store.origin[t].y -= 3;
					}
				}
				if(t % 10== 9 ){
					store.origin[t].y +=5;
					if(store.origin[t].y >= 150 && store.origin[t].y <= 180){
						store.origin[t].x -= 4.5;
						store.origin[t].y -= 4;
					} 
				}
			}
			store.every = function(t){
				store.origin[t].tempAngle = Math.floor(Math.random()*90+225);
				store.origin[t].tempRadius = store.origin[t].tempAngle *Math.PI/180;
				store.origin[t].tempSpeed = 7;
				store.origin[t].velocityx = Math.cos(store.origin[t].tempAngle) * store.origin[t].tempSpeed;
				store.origin[t].velocityy = Math.sin(store.origin[t].tempAngle) * store.origin[t].tempSpeed;
			}
			store.collision = function(t){
				var circle = Math.sqrt(Math.pow(Math.abs(230-store.origin[t].x),2) + Math.pow(Math.abs(330-store.origin[t].y),2))
					
				if(Math.floor(circle)>130){
					// console.log(Math.floor(circle))
					return true;
				}
			}
			store.restart = function(t){
				var t1 = Math.floor(Math.atan2((340-store.origin[t].y),(235-store.origin[t].x)));
				// console.log(t1)
				// var t2 = Math.floor(Math.atan2((store.origin[t].velocityy),(store.origin[t].velocityx))*90)
				// store.origin[t].tempAngle = Math.floor(Math.random()*360)
				store.origin[t].tempAngle = t1
				store.origin[t].tempRadius = store.origin[t].tempAngle *Math.PI/180;
				store.origin[t].tempSpeed = 4+ Math.floor(Math.random()*5);
				store.origin[t].velocityx = Math.cos(store.origin[t].tempAngle) * store.origin[t].tempSpeed;
				store.origin[t].velocityy = Math.sin(store.origin[t].tempAngle) * store.origin[t].tempSpeed;
				store.origin[t].x +=store.origin[t].velocityx;
				store.origin[t].y +=store.origin[t].velocityy;
			}
			store.origin = [];
			// store.img = new Image();
			store.pics = ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png','../imgs/s31.png']
			// store.img.src = "../images/Group-49.png";
			store.winImg = new Image();
			store.win ={
				x:290,
				y:620,
				vx:.14,
				vy:.08,
				op:1
			};
			// store.winImg.src = "../images/Group3.png";

			store.draw = function(){
				for(var i = 0; i< store.num;i++) {
					if(store.state == 0) {//将开奖球布置到页面上
						var sx =  store.levelAdd(i);
						var sy = store.verticalAdd(i);
						store.origin.push({x:sx,y:sy,src:store.pics[i]})
						// store.origin.src = store.pics[i];
						store.img = new Image();
						store.img.src = store.origin[i].src;
						// console.log(store.img.src)
						ctx1.drawImage(store.img,store.origin[i].x,store.origin[i].y,20,20);
						if(i==store.num-1){
							// store.state = 1;
						}
					}
					if(store.state == 1){//下落到瓶口
						if(store.origin[i].y <= 195) {
							store.img = new Image();
							store.img.src = store.origin[i].src;
							ctx1.drawImage(store.img,store.origin[i].x,store.origin[i].y,20,20);
							store.drop(i);
							store.every(i);
						} else {
							if(store.collision(i)){
								store.restart(i)//开始自由运动
							}
							store.origin[i].x +=store.origin[i].velocityx;
							store.origin[i].y +=store.origin[i].velocityy;
							store.img = new Image();
							store.img.src = store.origin[i].src;
							ctx1.drawImage(store.img,store.origin[i].x,store.origin[i].y,20,20);
						}
					}
					// if(store.state == 2) {
						// store.win.x += store.win.vx;
						// store.win.y += store.win.vy;
						if(store.win.x>320){
							// ctx2.beginPath();
							// ctx2.globalAlpha = 0.2
							// ctx2.restore()	
						}
						// ctx2.globalAlpha = .2
						// ctx2.clearRect(0,0,20,20)
						// ctx2.translate(290,720);
						// ctx2.rotate(30)
						// ctx2.translate(-270,-630);
						// ctx2.drawImage(store.img,90,90,20,20);
					}
			}
			return store;
		}
	}
	var rank = {
		drawColor:function(){
			var store = {};
			store.level = 90;
			store.num =30;
			store.vertical = 75;
			store.levelAdd = function(t){
				if(t%10 == 0) {
					return store.level = 90;
				}else {
					t= t%10
					return store.level = 90 + t*31.5;
				}
			}
	
			store.state = 0;
			store.onoff = false;
			store.verticalAdd = function(t){//对球球进行排列
				if(t%10 == 0&&t!==0) {
					return store.vertical = store.vertical-1*25;
				}else {
					return store.vertical;
				}
			}
			store.origin = [];
			// store.img = new Image();
			store.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png','../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png','../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
			// store.img.src = "../images/Group-49.png";
			store.draw = function(){
				for(var i = 0; i< store.num;i++) {
					if(store.state == 0) {//将开奖球布置到页面上
						var sx =  store.levelAdd(i);
						var sy = store.verticalAdd(i);
						store.origin.push({x:sx,y:sy,src:store.pics[i]})
						// store.origin.src = store.pics[i];
						store.img = new Image();
						store.img.src = store.origin[i].src;
						// console.log(store.img.src)
						ctx2.drawImage(store.img,store.origin[i].x,store.origin[i].y,20,20);
						if(i==store.num-1){
							// store.state = 1;
						}
					}
					if(store.state == 1){//下落到瓶口
						// if(store.onoff){
							// store.pics.slice(10);}
							// console.log(store.pics.length)
						if(store.origin[0].y >= 100){
							store.img = new Image();
							store.img.src = store.origin[i].src;
							ctx2.drawImage(store.img,store.origin[i].x,store.origin[i].y,20,20);
						} else {
							store.origin[i].y++;
							store.img = new Image();
							store.img.src = store.origin[i].src;
							ctx1.drawImage(store.img,store.origin[i].x,store.origin[i].y,20,20);
						}
					}
				}}
			return store;
		}
	}
	var virtual = rank.drawColor(),sul,n;
	var run = square.drawColor();
	function restart(){
		ctx1.clearRect(0,0,474,800);
		run.draw();
		n=requestAnimFrame(restart);
	}
	function restart2(){
		ctx2.clearRect(0,0,474,800);
		virtual.draw();
		sul=requestAnimFrame(restart2);
	}
	function dropCircle(){
		virtual.pics=virtual.pics.slice(10);
		 virtual.num = virtual.pics.length;
		virtual.state = 1;
		virtual.origin = virtual.origin.slice(10);
	}
	window.onload = function(){
		restart();
	}
	
	var q = {
		arr3 : [],//红球
		arr4 : [],//篮球
		onOff: true,//是否可以点击
		num : -1,//抽到的数字
		time : '',//抽到时的时间
		Zindex : -1,//哪种游戏
		name:['双色球','大乐透','福彩3d','排列3','7乐彩','七星彩'],
		getName:'',
		
	}
	var main = {
		body:$('body').height(),
		top:$('.btn_group').offset().top,
		shake:[]
	}
	function count(maxNum){
		var m =  Math.floor(Math.random()*maxNum)+1;
		m = m<=9?'0'+m:m
		if (q.arr3.indexOf(m+'') !== -1){
			return(count(maxNum));
		}
		
		q.arr3.push(m+'');
		return m;
	}
	function littleCount(maxNum){
		var m =  Math.floor(Math.random()*maxNum)+1;
		m = m<=9?'0'+m:m;
		if (q.arr4.indexOf(m+'') !== -1){
			return(littleCount(maxNum));
		}
		q.arr4.push(m+'');
		return m;
	}
	function oneNum(maxNum){
		var m =  Math.floor(Math.random()*maxNum);
		// if (q.arr3.indexOf(m) !== -1){
		// 	return(oneNum(maxNum));
		// }
		q.arr3.push(m);
		return m;
	}
	function clearWindow(){
		 $('.moveGroup>img').css({
		 	display:'none'
		 })
	}
	
 	function listEach(){
 		var m = '<div class="win fl">';
 		q.arr3.forEach(function(item,index){
 			m += '<img src="../imgs/s'+q.arr3[index]+'.png" id="" class="" />';
 		})
 		q.arr4.forEach(function(item,index){
 			m += '<img src="../imgs/ss'+q.arr4[index]+'.png" id="" class="" />';
 		})
 		m += '</div><b class="fr" ">复制号码</b><p class="fr">'+q.name[q.Zindex]+'<i>'+q.time+'</i></p>';
 		return m;
 	}
 	function listEach1(){
 		var m = '<div class="win fl">';
 		q.arr3.forEach(function(item,index){
 			m += '<img src="../imgs/d'+q.arr3[index]+'.png" id="" class="" />';
 		})
 		// console.log(q.Zindex)
 		m += '</div><b class="fr" >复制号码</b><p class="fr">'+q.name[q.Zindex]+'<i>'+q.time+'</i></p>';
 		return m;
 	}
	 	$("footer").css({
	 		display:'none'
	 	})
	function replace(arr3){
		var newli = $("<li class='list clearfix'></li>",{
			html:listEach(),
		});
		if($("footer>ul>li").length>0){
			$("footer>ul>li:first-child").before(newli);
		} else {
			$("footer>ul").append(newli);
			$("footer").css({
			display:'block'
			})
		}		
		if($("footer>ul li").length<6){//将列表设置高度
			$('.footer-bg').css({
				height:$('.list').length*56.2/75+'rem'
			})
			$('footer>ul').css({
				height:$('.list').length*56.2/75+'rem'
			})
			main.shake.unshift(q.num)
			$("footer").css({//列表位置定义
				top: main.top + $('.btn_group').height() -$('header').height() ,
				height:$('.footer-bg').height()+14,
				position:'absolute'
			});
			var t = $('footer>ul').height()
			if(Math.floor(main.top+ $("footer").height()) + $('.btn_group').height()>main.body){
				$('.swiper-slide').height(main.top + $('.btn_group').height()+$('header').height()+t);
				
			}

		swiper02 = new Swiper('.swiper-container2', {
           	scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
	        mousewheelControl: true,
	        freeMode: true,
	        observer: true,
	        scrollbarHide:true,
	        scrollbarDraggable:true,
	        watchSlidesProgress : true,
        });
			return;
		}
		main.shake.remove(4);
			main.shake.unshift(q.num);
			console.log(main.shake);
		$("footer>ul>li:last-child").remove();
	};
	// console.log($('.btn_group').position().top)
	function replace2(arr3){
		var newli = $("<li class='list clearfix'></li>",{
			html:listEach1(),
		});
		// $("footer>ul").append(newli);
		// console.log($("footer>ul>li").length>0)
		if($("footer>ul>li").length>0){
			$("footer>ul>li:first-child").before(newli);
		} else {
			$("footer>ul").append(newli);
			$("footer").css({
			display:'block'
			})
		}
		
		
		if($("footer>ul li").length<6){
			$('.footer-bg').css({
				height:$('.list').length*56.2/75+'rem'
			})
			$('footer>ul').css({
				height:$('.list').length*56.2/75+'rem'
			})
			
			$("footer").css({
				top: main.top + $('.btn_group').height() -$('header').height() ,
				height:$('.footer-bg').height()+14,
				position:'absolute'
			});
			main.shake.unshift(q.num)
			// console.log(main.top+ $("footer").height()+ $('.btn_group').height(),)
			var t = $('footer>ul').height()
			if(Math.floor(main.top+ $("footer").height()) + $('.btn_group').height()>main.body){
				$('.swiper-slide').height(main.top + $('.btn_group').height()+$('header').height()+t);
			}
			// console.log(main.shake);
			// $('.swiper-slide').height($('body').height()+$('.list').height());
			 swiper02 = new Swiper('.swiper-container2', {
           scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
	        mousewheelControl: true,
	        freeMode: true,
	        observer: true,
	        scrollbarHide:true,
	        scrollbarDraggable:true,
	        watchSlidesProgress : true,
        });
			return;
		}
		main.shake.remove(4);
			main.shake.unshift(q.num);
			
		$("footer>ul>li:last-child").remove();
		
	};
	// // replace();
	// console.log(new Date().getHours(),new Date().getMinutes())
	// // var winNUm = [],q.onOff = true;
	$(".shake_btn").on('tap',function(){
		var arr2 = $('#navBar>a');
		
		arr2.forEach(function(item,index){
			if($(item).hasClass('active')){
				q.Zindex = index;
			}
		})
		
		function searchI(){
			$("#img"+i).css({
					display:'block',
			 		position:'absolute',
			 		top:470/75 + 'rem',
			 		left:280 /75 + 'rem'
			 	})
			var pic1 = new Image()
				pic1.src='../imgs/s'+count(31)+'.png';
				// pic1.onload = function(){
				// 	time.printCan.drawImage(pic1,0,0,10,10)	
				// }
				time.pic1 = pic1
				time.printCan =eval('cbx'+i),
				time.printCan.drawImage(pic1,0,0,10,10)
				time.file =  setInterval(topCircle,50)
				time.borad = eval('borad'+i),
		 		time.ele=$("#img"+i);
		}
		// start = false;
		//重新生成函数
		//清除下面的一抽到的奖球
		if(q.Zindex === 0&&q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearCircle();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 31;
				run.pics = ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png','../imgs/s31.png'];
			}
			setTimeout(function(){
				run.state = 1;
			},40);
			
			var s =	setInterval(function(){
				// $('#winNumber'+i).attr('src','../imgs/s'+count(31)+'.png');
				// // console.log(q.arr3)
				// 	$('#winNumber'+i).css({
				// 		display:'block',
				// 		animation:'movegold'+i+' 1s forwards',
				// 		'-moz-animation':'movegold'+i+' 1s forwards',
				// 		'-ms-animation':'movegold'+i+' 1s forwards',
				// 		'-webkit-animation':'movegold'+i+' 1s forwards',
				// 		})
				
			 	searchI();
		 		// scrollCircle.selet = scrollCircle.target[i]
		 		// scrollCircle.choose = scrollCircle.pause[i]
		 		// console.log(scrollCircle.selet)
					++i;
					if(i===6){//红球执行完毕开始弄篮球
						clearInterval(s);
						setTimeout(function(){
							run = square.drawColor();//重新生成函数
							run.pics = ['../imgs/ss01.png','../imgs/ss02.png','../imgs/ss03.png','../imgs/ss04.png','../imgs/ss05.png','../imgs/ss06.png','../imgs/ss07.png','../imgs/ss08.png','../imgs/ss09.png','../imgs/ss10.png','../imgs/ss11.png','../imgs/ss12.png','../imgs/ss13.png','../imgs/ss14.png','../imgs/ss15.png','../imgs/ss16.png'];
							run.num = 16;
							setTimeout(function(){//重新拍好位置后进行动画
							run.state = 1;
							},100)
							var lint = littleCount(12);//生成一个篮球
							setTimeout(function(){
							$("#img"+6).css({
								display:'block',
						 		position:'absolute',
						 		top:470/75 + 'rem',
						 		left:280 /75 + 'rem'
						 	})
							 	var pic1 = new Image()
								pic1.src='../imgs/ss'+lint+'.png';
								time.pic1 = pic1
								time.printCan =eval('cbx'+6),
								time.printCan.drawImage(pic1,0,0,10,10)
								time.file =  setInterval(topCircle,50)
								time.borad = eval('borad'+6),
						 		time.ele=$("#img"+6);
						 // searchI();
						 		setTimeout(function(){
						 			q.onOff = true;//可以再次点击
									q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
									q.time = Time();//时间
									replace(q);//对下面列表中第一行列表进行替换；
									// console.log(Time())
									// console.log(q.num);
									i = 0;
						 		},1000)
								
							},1000)


						},2000)
					}
				},3000)
			}
		if(q.Zindex === 1&&q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearCircle();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 35;
				run.pics = ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png','../imgs/s31.png','../imgs/s32.png','../imgs/s33.png','../imgs/s34.png','../imgs/s35.png'];
			}
			setTimeout(function(){
				run.state = 1;
			},40);
			var s =	setInterval(function(){
				// $('#winNumber'+i).attr('src','../imgs/s'+count(35)+'.png');
				// console.log(i);
					// $('#winNumber'+i).css({
					// 	display:'block',
					// 	animation:'movegold'+i+' 1s forwards',
					// 	'-moz-animation':'movegold'+i+' 1s forwards',
					// 	'-ms-animation':'movegold'+i+' 1s forwards',
					// 	'-webkit-animation':'movegold'+i+' 1s forwards',
					// 	})
					$("#img"+i).css({
						display:'block',
				 		position:'absolute',
				 		top:470/75 + 'rem',
				 		left:280 /75 + 'rem'
				 	})
				var pic1 = new Image()
					pic1.src='../imgs/s'+count(35)+'.png';
					// pic1.onload = function(){
					// 	time.printCan.drawImage(pic1,0,0,10,10)	
					// }
					time.pic1 = pic1
					time.printCan =eval('cbx'+i),
					time.printCan.drawImage(pic1,0,0,10,10)
					time.file =  setInterval(topCircle,50)
					time.borad = eval('borad'+i),
			 		time.ele=$("#img"+i);
					
					++i;
					if(i===5){//红球执行完毕开始弄篮球
						clearInterval(s);
						setTimeout(function(){
							run = square.drawColor();//重新生成函数
							run.pics = ['../imgs/ss01.png','../imgs/ss02.png','../imgs/ss03.png','../imgs/ss04.png','../imgs/ss05.png','../imgs/ss06.png','../imgs/ss07.png','../imgs/ss08.png','../imgs/ss09.png','../imgs/ss10.png','../imgs/ss11.png','../imgs/ss12.png'];
							run.num = 12;
							var litNum = 4;
							setTimeout(function(){
								run.state = 1;
							},100);
							var newlit = setInterval(function(){
									++litNum;
								var lint = littleCount(16);//生成一个篮球
									$("#img"+litNum).css({
										display:'block',
								 		position:'absolute',
								 		top:470/75 + 'rem',
								 		left:280 /75 + 'rem'
								 	})
								var pic1 = new Image()
									pic1.src='../imgs/ss'+lint+'.png';
									// pic1.onload = function(){
									// 	time.printCan.drawImage(pic1,0,0,10,10)	
									// }
									time.pic1 = pic1
									time.printCan =eval('cbx'+litNum),
									time.printCan.drawImage(pic1,0,0,10,10)
									time.file =  setInterval(topCircle,50)
									time.borad = eval('borad'+litNum),
							 		time.ele=$("#img"+litNum);
									if(litNum===6){
										q.onOff = true;//可以再次点击
										q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
										q.time = Time();//时间
										setTimeout(function(){
										replace(q);//对下面列表中第一行列表进行替换；
										},1000)
										// console.log(Time())
										// console.log(q.num);
										i = 0;
										clearInterval(newlit)
										// litNum = 5;
									}
								},2000)
						},1000)
					}
				},2000)
			}
			if(q.Zindex === 2 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearCircle();
			virtual.state = 1;
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
					$("#img"+i).css({
						display:'block',
				 		position:'absolute',
				 		top:470/75 + 'rem',
				 		left:280 /75 + 'rem'
				 	})
				var pic1 = new Image()
					pic1.src='../imgs/d'+oneNum(10)+'.png';
					// pic1.onload = function(){
					// 	time.printCan.drawImage(pic1,0,0,10,10)	
					// }
					time.pic1 = pic1
					time.printCan =eval('cbx'+i),
					time.printCan.drawImage(pic1,0,0,10,10)
					time.file =  setInterval(topCircle,50)
					time.borad = eval('borad'+i),
			 		time.ele=$("#img"+i);
					++i;
					setTimeout(function(){
						run =square.drawColor();
						run.state = 0;
						run.num = 10;
						run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
						setTimeout(function(){
							run.state = 1;
							dropCircle()
						},100)
					},200)
					if(i===3){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						//对下面列表中第一行列表进行替换；
						setTimeout(function(){
							replace2(q);	
							},1000)					
						clearInterval(s);
						// cancelRequestAnimFrame(virtual);
					}
				},2500)
			}
			if(q.Zindex === 3 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearCircle();
			virtual.state = 1;
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			var s =	setInterval(function(){
					$("#img"+i).css({
						display:'block',
				 		position:'absolute',
				 		top:470/75 + 'rem',
				 		left:280 /75 + 'rem',
				 	})
				var pic1 = new Image()
					pic1.src='../imgs/d'+oneNum(10)+'.png';
					// pic1.onload = function(){
					// 	time.printCan.drawImage(pic1,0,0,10,10)	
					// }
					time.pic1 = pic1
					time.printCan =eval('cbx'+i),
					time.printCan.drawImage(pic1,0,0,10,10)
					time.file =  setInterval(topCircle,50)
					time.borad = eval('borad'+i),
			 		time.ele=$("#img"+i);
					++i;
					setTimeout(function(){
						run =square.drawColor();
						run.state = 0;
						run.num = 10;
						run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
						setTimeout(function(){
							run.state = 1;
							dropCircle()
						},100)
					},200)
					if(i===3){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						//对下面列表中第一行列表进行替换；
						setTimeout(function(){
							replace2(q);	
							},1000)					
						clearInterval(s);
						// cancelRequestAnimFrame(virtual);
					}
				},2500)
			}
			if(q.Zindex === 4 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearCircle();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 30;
				run.pics =  ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
				$("#img"+i).css({
						display:'block',
				 		position:'absolute',
				 		top:470/75 + 'rem',
				 		left:280 /75 + 'rem'
				 	})
				var pic1 = new Image()
					pic1.src='../imgs/s'+count(30)+'.png';
					// pic1.onload = function(){
					// 	time.printCan.drawImage(pic1,0,0,10,10)	
					// }
					time.pic1 = pic1
					time.printCan =eval('cbx'+i),
					time.printCan.drawImage(pic1,0,0,10,10)
					time.file =  setInterval(topCircle,50)
					time.borad = eval('borad'+i),
			 		time.ele=$("#img"+i);
					++i;
					if(i===7){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						setTimeout(function(){
						replace(q);//对下面列表中第一行列表进行替换；
						},1000)
						// console.log(Time())
						i = 0;
						clearInterval(s);
					}
				},2500)
			}
			if(q.Zindex === 5 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearCircle();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
					$("#img"+i).css({
						display:'block',
				 		position:'absolute',
				 		top:470/75 + 'rem',
				 		left:280 /75 + 'rem'
				 	})
				var pic1 = new Image()
					pic1.src='../imgs/d'+oneNum(10)+'.png';
					// pic1.onload = function(){
					// 	time.printCan.drawImage(pic1,0,0,10,10)	
					// }
					time.pic1 = pic1
					time.printCan =eval('cbx'+i),
					time.printCan.drawImage(pic1,0,0,10,10)
					time.file =  setInterval(topCircle,50)
					time.borad = eval('borad'+i),
			 		time.ele=$("#img"+i);
					++i;
					setTimeout(function(){
						run =square.drawColor();
						run.state = 0;
						run.num = 10;
						run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
						setTimeout(function(){
							run.state = 1;
						},100)
					},200)
					if(i===7){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						setTimeout(function(){
							replace2(q);//对下面列表中第一行列表进行替换；
						},1000)
						
						// console.log(Time())
						// console.log(q.num);
						i = 0;
						clearInterval(s);
						// cancelRequestAnimFrame(virtual);
					}
				},2500)
			}
	})

	function clearCircle(){
		for(var i=0; i<6; i++){
			eval('cbx'+i).clearRect(0,0,20,20);
			eval('cbx'+i).width = 10;
			eval('cbx'+i).height = 10;
			eval('borad'+i).width = 10;
			eval('borad'+i).height = 10; 
		}
		$('.te').css({
			display:'none',
		})

	}	
	$('#navBar>a').on('tap',function(){
		if(q.onOff){
			$('#navBar>a').removeClass('active');
			$(this).addClass('active');	
			clearCircle();
			if ($('#navBar>a').eq(0).hasClass("active")){
				run =square.drawColor();
				run.num = 31;
				restart2 = false;
				run.pics = ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png','../imgs/s31.png'];
			} else if( $('#navBar>a').eq(1).hasClass("active")	){
				run =square.drawColor();
				run.state = 0;
				run.num = 35;
				run.pics = ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png','../imgs/s31.png','../imgs/s32.png','../imgs/s33.png','../imgs/s34.png','../imgs/s35.png'];
			} else if ( $('#navBar>a').eq(2).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
			} else if ( $('#navBar>a').eq(3).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
				 // virtual= rank.drawColor();
				// restart2()
			} else if ( $('#navBar>a').eq(4).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 30;
				// virtual = false
				// cancelRequestAnimFrame(virtual)
				run.pics = ['../imgs/s01.png','../imgs/s02.png','../imgs/s03.png','../imgs/s04.png','../imgs/s05.png','../imgs/s06.png','../imgs/s07.png','../imgs/s08.png','../imgs/s09.png','../imgs/s10.png','../imgs/s11.png','../imgs/s12.png','../imgs/s13.png','../imgs/s14.png','../imgs/s15.png','../imgs/s16.png','../imgs/s17.png','../imgs/s18.png','../imgs/s19.png','../imgs/s20.png','../imgs/s21.png','../imgs/s22.png','../imgs/s23.png','../imgs/s24.png','../imgs/s25.png','../imgs/s26.png','../imgs/s27.png','../imgs/s28.png','../imgs/s29.png','../imgs/s30.png'];
			} else if ( $('#navBar>a').eq(5).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../imgs/d0.png','../imgs/d1.png','../imgs/d2.png','../imgs/d3.png','../imgs/d4.png','../imgs/d5.png','../imgs/d6.png','../imgs/d7.png','../imgs/d8.png','../imgs/d9.png'];
				 virtual= rank.drawColor();
				// restart2()
			}



		} else {
			$('#navBar').find('.active').css({
				transform: 'scale(1.5)',
				'-webkit-transform': 'scale(1.5)',
				'-moz-transform': 'scale(1.5)',
				opacity:'.5',
				transition: '500ms'
			})
			setTimeout(function(){
				$('#navBar').find('.active').css({
				transform: 'scale(1)',
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				opacity:'1',
				transition: '500ms'
			})
			},200)
		}
	})
	 	
	 	var time = {
		 	n:0,
		 	file:null,
		 	top:470,
	 		left:280,
	 		w:10,
	 		h:10 ,
	 		x1:0,
	 		y1:0,
	 		vx:1,
	 		vy:2.5,
	 		add:2.5,
	 		ro:0,
	 		sc:1,
	 		rot:360,
	 		borad:null,
	 		printCan:null,
	 		ele:$("#img0"),
	 		pic1:null
		 }

		function topCircle(){
			time.sc += .03;
			time.borad.width = time.w * time.sc
			time.borad.height = time.w * time.sc
			// time.printCan.scale(time.sc,time.sc)
			time.printCan.width = time.w * time.sc
			time.printCan.height = time.w * time.sc	
			var t = time.top += 6;
			if(t >= 530) {
				clearInterval(time.file);
				time.file = null;
				time.rot = 360;
				time.sc = 1;
				time.top = 470;
				time.left = 280;
				time.printCan.globalAlpha = 1;
				time.printCan.width = time.borad.height = time.printCan.width = time.printCan.height =  10;
				scrollCircle.m = setInterval(bottomFun,50)
			}
			time.ele.css({
		 		position:'absolute',
		 		top:(time.top += 2)/75 + 'rem',
		 		left:(time.left += 10)/75 + 'rem'
		 	})
		 	// console.log(time.printCan)
		 	time.printCan.globalAlpha = .5
			time.printCan.translate(time.borad.width/2,time.borad.width/2);
	 		time.rot -= 2
			time.printCan.rotate(time.rot)	
			time.printCan.translate(-time.borad.width/2,-time.borad.width/2)
			time.printCan.drawImage(time.pic1,0,0,time.borad.width,time.borad.width)			 
		}

		var scrollCircle = {
			target : [110,148,190,235,280,320,350],
			pause:[20,18,35,27,25,23,21],
			m:null,
			w:20,
			left:500,
		}
		
			function bottomFun(){
				time.borad.width = scrollCircle.w;
				time.borad.height = scrollCircle.w
				// time.printCan.scale(time.sc,time.sc)
				time.printCan.width = scrollCircle.w
				time.printCan.height = scrollCircle.w
				time.ele.css({
			 		position:'absolute',
			 		top:(563)/75 + 'rem',
			 		left:(scrollCircle.left -= 20)/75 + 'rem'
			 	})
			 	var m = time.ele.index()
			 	if(scrollCircle.left < scrollCircle.target[m]){
			 		time.printCan.translate(scrollCircle.w/2,scrollCircle.w/2);
			 		time.rot %= 360;
			 		scrollCircle.choose = scrollCircle.pause[m];
			 		time.printCan.rotate(scrollCircle.choose);
			 		time.printCan.translate(-scrollCircle.w/2,-scrollCircle.w/2)
			 		time.printCan.drawImage(time.pic1,0,0,scrollCircle.w,scrollCircle.w)
			 		scrollCircle.left = 500;
			 		clearInterval(scrollCircle.m)
			 		scrollCircle.m = null;
			 	}
				time.printCan.translate(scrollCircle.w/2,scrollCircle.w/2);
		 			time.rot -= 1
				time.printCan.rotate(time.rot)	
				time.printCan.translate(-scrollCircle.w/2,-scrollCircle.w/2)
				 time.printCan.drawImage(time.pic1,0,0,scrollCircle.w,scrollCircle.w)
			}

	$('body').delegate('.list>b','tap',function(e){
		// $('#btn_submit').on('tap',function(){
		var t = $('.list>b').indexOf(this);
		$ele = $('.list>b').eq(t).get(0);	
		var text = document.getElementById("copy");
		text.value = main.shake[t];
		text.select();
		document.execCommand("Copy");
		if(event.clipboardData){
		return event.clipboardData.setData("text/plain", value);
		}else if(window.clipboardData){
		return window.clipboardData.setData("text", value);
		}
		// window.clipboardData.setData("Text",clipBoardContent);
	})

	$('.btn_group>.clone_btn').on('tap',function(){
		if(q.onOff){
			var text = document.getElementById("copy");
			text.value = main.shake[0]
			text.select();
			document.execCommand("Copy");
		}
	})
	$('.swiper-slide').height($("body").height()-$("header").height())//让先按界面排版
	var topB = Math.floor($("footer").offset().top)
	var picB = Math.floor($(".btn_group").offset().top +$("btn_group").height()-$("header").height()/4); 
	if(topB<picB){//如果界面放不下重新生成
		$('.swiper-slide').height(picB + $("footer").height()+$("header").height());
		$("footer").css({
			top: picB,
			position:'relative'
		});
	} else {
		$("footer").css({
			top: picB,
			position:'relative'
		});
	};
	var swiper02 = new Swiper('.swiper-container2', {
           scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
	        mousewheelControl: true,
	        freeMode: true,
	        observer: true,
	        scrollbarHide:true,
	        scrollbarDraggable:true,
	        watchSlidesProgress : true,
        });
	
	

});