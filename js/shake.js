Zepto(function($){
	var canvas =  document.getElementById('shake');
	var canvas2 =  document.getElementById('circle');
	var canvas3 = document.getElementById('winCircle');

	var ctx = document.getElementById('shake').getContext('2d');	
	// $('#shake').width(74/75+'rem').height(80/75+'rem');
	var ctx1 = document.getElementById('circle').getContext('2d');
	var ctx2 = document.getElementById('winCircle').getContext('2d');
	var w = $(document).width()
	var wh = $(document).height()
	var fh = wh-$("footer").height()
	console.log(w,wh,fh)
	var s = w/750;
	var h =  $('#shake').height()
	canvas.width = 474;
	canvas.height = 800;
	canvas2.width = 474;
	canvas2.height = 800;
	canvas3.width =474;
	canvas3.height = 800;
	
	var imgBg = new Image();
	imgBg.src="../images/mashine.png";
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
	function methods(){
		
	}
	
	var imgs = ["../images/mashine.png","../images/mashine.png"]
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
			store.pics = ['../img/s01.png','../img/s02.png','../img/s03.png','../img/s04.png','../img/s05.png','../img/s06.png','../img/s07.png','../img/s08.png','../img/s09.png','../img/s10.png','../img/s11.png','../img/s12.png','../img/s13.png','../img/s14.png','../img/s15.png','../img/s16.png','../img/s17.png','../img/s18.png','../img/s19.png','../img/s20.png','../img/s21.png','../img/s22.png','../img/s23.png','../img/s24.png','../img/s25.png','../img/s26.png','../img/s27.png','../img/s28.png','../img/s29.png','../img/s30.png','../img/s31.png']
			// store.img.src = "../images/Group-49.png";
			store.winImg = new Image();
			store.win ={
				x:290,
				y:620,
				vx:.14,
				vy:.08,
				op:1
			};
			store.winImg.src = "../images/Group3.png";

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
			store.num =31;
			store.vertical = 140;
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
			store.origin = [];
			// store.img = new Image();
			store.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
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
				}}
			return store;
		}
	}
	var jkl= rank.drawColor();
	console.log(jkl)
	var run = square.drawColor();
	// run.draw()
	function restart(){
		ctx1.clearRect(0,0,474,800);
		run.draw();
		requestAnimFrame(restart);
	}
	window.onload = function(){
		restart();
	}
	// var arr3 = [];
	var q = {
		arr3 : [],//红球
		arr4 : [],//篮球
		onOff: true,//是否可以点击
		num : -1,//抽到的数字
		time : '',//抽到时的时间
		Zindex : -1//哪种游戏
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
		if (q.arr3.indexOf(m) !== -1){
			return(oneNum(maxNum));
		}
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
 			m += '<img src="../img/s'+q.arr3[index]+'.png" id="" class="" />';
 		})
 		q.arr4.forEach(function(item,index){
 			m += '<img src="../img/ss'+q.arr4[index]+'.png" id="" class="" />';
 		})
 		m += '</div><b class="fr">复制号码</b><p class="fr">自动摇奖<i>'+q.time+'</i></p>';
 		return m;
 	}
 	function listEach1(){
 		var m = '<div class="win fl">';
 		q.arr3.forEach(function(item,index){
 			m += '<img src="../img/d'+q.arr3[index]+'.png" id="" class="" />';
 		})
 
 		m += '</div><b class="fr">复制号码</b><p class="fr">自动摇奖<i>'+q.time+'</i></p>';
 		return m;
 	}
	function replace(arr3){
		var newli = $("<li class='list clearfix'></li>",{
			html:listEach(),
		});
		$("footer>ul>li:last-child").remove();
		$("footer>ul>li:first-child").before(newli);
	};
	function replace2(arr3){
		var newli = $("<li class='list clearfix'></li>",{
			html:listEach1(),
		});
		$("footer>ul>li:last-child").remove();
		$("footer>ul>li:first-child").before(newli);
	};
	// replace();
	console.log(new Date().getHours(),new Date().getMinutes())
	// var winNUm = [],q.onOff = true;
	$(".shake_btn").on('tap',function(){
		var arr2 = $('#navBar>a');
		
		arr2.forEach(function(item,index){
			if($(item).hasClass('active')){
				q.Zindex = index;
			}
		})
		
		// start = false;
		//重新生成函数
		//清除下面的一抽到的奖球
		if(q.Zindex === 0&&q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearWindow();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 31;
				run.pics = ['../img/s01.png','../img/s02.png','../img/s03.png','../img/s04.png','../img/s05.png','../img/s06.png','../img/s07.png','../img/s08.png','../img/s09.png','../img/s10.png','../img/s11.png','../img/s12.png','../img/s13.png','../img/s14.png','../img/s15.png','../img/s16.png','../img/s17.png','../img/s18.png','../img/s19.png','../img/s20.png','../img/s21.png','../img/s22.png','../img/s23.png','../img/s24.png','../img/s25.png','../img/s26.png','../img/s27.png','../img/s28.png','../img/s29.png','../img/s30.png','../img/s31.png'];
			}
			setTimeout(function(){
				run.state = 1;
			},40);
			
			var s =	setInterval(function(){
				$('#winNumber'+i).attr('src','../img/s'+count(31)+'.png');
				console.log(q.arr3)
				console.log(i)
					$('#winNumber'+i).css({
						display:'block',
						animation:'movegold'+i+' 1s forwards',
						'-moz-animation':'movegold'+i+' 1s forwards',
						'-ms-animation':'movegold'+i+' 1s forwards',
						'-webkit-animation':'movegold'+i+' 1s forwards',
						})
					++i;
					if(i===6){//红球执行完毕开始弄篮球
						clearInterval(s);
						setTimeout(function(){
							run = square.drawColor();//重新生成函数
							run.pics = ['../img/ss01.png','../img/ss02.png','../img/ss03.png','../img/ss04.png','../img/ss05.png','../img/ss06.png','../img/ss07.png','../img/ss08.png','../img/ss09.png','../img/ss10.png','../img/ss11.png','../img/ss12.png','../img/ss13.png','../img/ss14.png','../img/ss15.png','../img/ss16.png'];
							run.num = 16;
								setTimeout(function(){//重新拍好位置后进行动画
								run.state = 1;
								var lint = littleCount(12);//生成一个篮球
								$('#winNumber'+i).attr('src','../img/ss'+lint+'.png')
								setTimeout(function(){
									$('#winNumber'+6).attr('src','../img/ss'+lint+'.png')
									$('#winNumber'+6).css({
										display:'block',
										animation:'movegold'+6+' 1s forwards',
										'-moz-animation':'movegold'+6+' 1s forwards',
										'-ms-animation':'movegold'+6+' 1s forwards',
										'-webkit-animation':'movegold'+6+' 1s forwards',
										})
									q.onOff = true;//可以再次点击
									q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
									q.time = Time();//时间
									replace(q);//对下面列表中第一行列表进行替换；
									// console.log(Time())
									// console.log(q.num);
									i = 0;
								},1000)
							},100)


						},1000)
					}
				},1000)
			}
		if(q.Zindex === 1&&q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearWindow();
			// $()
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 35;
				run.pics = ['../img/s01.png','../img/s02.png','../img/s03.png','../img/s04.png','../img/s05.png','../img/s06.png','../img/s07.png','../img/s08.png','../img/s09.png','../img/s10.png','../img/s11.png','../img/s12.png','../img/s13.png','../img/s14.png','../img/s15.png','../img/s16.png','../img/s17.png','../img/s18.png','../img/s19.png','../img/s20.png','../img/s21.png','../img/s22.png','../img/s23.png','../img/s24.png','../img/s25.png','../img/s26.png','../img/s27.png','../img/s28.png','../img/s29.png','../img/s30.png','../img/s31.png','../img/s32.png','../img/s33.png','../img/s34.png','../img/s35.png'];
			}
			setTimeout(function(){
				run.state = 1;
			},40);
			
			var s =	setInterval(function(){
				$('#winNumber'+i).attr('src','../img/s'+count(35)+'.png');
				// console.log(q.arr3)
				// console.log(i)
					$('#winNumber'+i).css({
						display:'block',
						animation:'movegold'+i+' 1s forwards',
						'-moz-animation':'movegold'+i+' 1s forwards',
						'-ms-animation':'movegold'+i+' 1s forwards',
						'-webkit-animation':'movegold'+i+' 1s forwards',
						})
					++i;
					if(i===5){//红球执行完毕开始弄篮球
						clearInterval(s);
						setTimeout(function(){
							run = square.drawColor();//重新生成函数
							run.pics = ['../img/ss01.png','../img/ss02.png','../img/ss03.png','../img/ss04.png','../img/ss05.png','../img/ss06.png','../img/ss07.png','../img/ss08.png','../img/ss09.png','../img/ss10.png','../img/ss11.png','../img/ss12.png'];
							run.num = 12;
							var litNum = 4;
							setTimeout(function(){
								run.state = 1;
							},100)
							var newlit = setInterval(function(){
									++litNum;
								var lint = littleCount(16);//生成一个篮球
									$('#winNumber'+litNum).attr('src','../img/ss'+lint+'.png')
									$('#winNumber'+litNum).css({
										display:'block',
										animation:'movegold'+litNum+' 1s forwards',
										'-moz-animation':'movegold'+litNum+' 1s forwards',
										'-ms-animation':'movegold'+litNum+' 1s forwards',
										'-webkit-animation':'movegold'+litNum+' 1s forwards',
										})
									if(litNum===6){
										q.onOff = true;//可以再次点击
										q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
										q.time = Time();//时间
										replace(q);//对下面列表中第一行列表进行替换；
										// console.log(Time())
										// console.log(q.num);
										i = 0;
										clearInterval(newlit)
										// litNum = 5;
									}
								},1000)
						},1000)
					}
				},1000)
			}
			if(q.Zindex === 2 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearWindow();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
				$('#winNumber'+i).attr('src','../img/d'+oneNum(10)+'.png');
					$('#winNumber'+i).css({
						display:'block',
						animation:'movegold'+i+' 1s forwards',
						'-moz-animation':'movegold'+i+' 1s forwards',
						'-ms-animation':'movegold'+i+' 1s forwards',
						'-webkit-animation':'movegold'+i+' 1s forwards',
						})
					++i;
					setTimeout(function(){
						run =square.drawColor();
						run.state = 0;
						run.num = 10;
						run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
						setTimeout(function(){
							run.state = 1;
						},100)
					},200)
					if(i===3){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						replace2(q);//对下面列表中第一行列表进行替换；
						// console.log(Time())
						// console.log(q.num);
						i = 0;
						clearInterval(s);
					}
				},2500)
			}
			if(q.Zindex === 3 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearWindow();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
				$('#winNumber'+i).attr('src','../img/d'+oneNum(10)+'.png');
					$('#winNumber'+i).css({
						display:'block',
						animation:'movegold'+i+' 1s forwards',
						'-moz-animation':'movegold'+i+' 1s forwards',
						'-ms-animation':'movegold'+i+' 1s forwards',
						'-webkit-animation':'movegold'+i+' 1s forwards',
						})
					++i;
					setTimeout(function(){
						run =square.drawColor();
						run.state = 0;
						run.num = 10;
						run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
						setTimeout(function(){
							run.state = 1;
						},100)
					},200)
					if(i===3){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						replace2(q);//对下面列表中第一行列表进行替换；
						// console.log(Time())
						// console.log(q.num);
						i = 0;
						clearInterval(s);
					}
				},2500)
			}
			if(q.Zindex === 4 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearWindow();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics =  ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png','../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png',];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
				$('#winNumber'+i).attr('src','../img/s'+count(30)+'.png');
					$('#winNumber'+i).css({
						display:'block',
						animation:'movegold'+i+' 1s forwards',
						'-moz-animation':'movegold'+i+' 1s forwards',
						'-ms-animation':'movegold'+i+' 1s forwards',
						'-webkit-animation':'movegold'+i+' 1s forwards',
						})
					++i;
					if(i===7){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						replace(q);//对下面列表中第一行列表进行替换；
						// console.log(Time())
						// console.log(q.num);
						i = 0;
						clearInterval(s);
					}
				},1000)
			}
			if(q.Zindex === 5 && q.onOff){//左边列表对应按钮的active
			var i = 0;
			q.arr3 = [];
			q.arr4 = [];
			q.onOff = false;			
			clearWindow();
			if(run.state == 1){//每次重复点击的时候且已经执行完毕重新生成
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
			}
			setTimeout(function(){
				run.state = 1
			},40)
			
			var s =	setInterval(function(){
				$('#winNumber'+i).attr('src','../img/d'+oneNum(10)+'.png');
					$('#winNumber'+i).css({
						display:'block',
						animation:'movegold'+i+' 1s forwards',
						'-moz-animation':'movegold'+i+' 1s forwards',
						'-ms-animation':'movegold'+i+' 1s forwards',
						'-webkit-animation':'movegold'+i+' 1s forwards',
						})
					++i;
					setTimeout(function(){
						run =square.drawColor();
						run.state = 0;
						run.num = 10;
						run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
						setTimeout(function(){
							run.state = 1;
						},100)
					},200)
					if(i===7){//红球执行完毕开始弄篮球
						q.onOff = true;//可以再次点击
						q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
						q.time = Time();//时间
						replace2(q);//对下面列表中第一行列表进行替换；
						// console.log(Time())
						// console.log(q.num);
						i = 0;
						clearInterval(s);
					}
				},2500)
			}

	})
	// $('.navBar>.fl').on('tab',function(e){
	// 	// $(this).addClass()
	// })
	$('#navBar>a').on('tap',function(){
		if(q.onOff){
			$('#navBar>a').removeClass('active');
			$(this).addClass('active');	
			clearWindow();
			if ($('#navBar>a').eq(0).hasClass("active")){
				run =square.drawColor();
				run.num = 31;
				run.pics = ['../img/s01.png','../img/s02.png','../img/s03.png','../img/s04.png','../img/s05.png','../img/s06.png','../img/s07.png','../img/s08.png','../img/s09.png','../img/s10.png','../img/s11.png','../img/s12.png','../img/s13.png','../img/s14.png','../img/s15.png','../img/s16.png','../img/s17.png','../img/s18.png','../img/s19.png','../img/s20.png','../img/s21.png','../img/s22.png','../img/s23.png','../img/s24.png','../img/s25.png','../img/s26.png','../img/s27.png','../img/s28.png','../img/s29.png','../img/s30.png','../img/s31.png'];
			} else if( $('#navBar>a').eq(1).hasClass("active")	){
				run =square.drawColor();
				run.state = 0;
				run.num = 35;
				run.pics = ['../img/s01.png','../img/s02.png','../img/s03.png','../img/s04.png','../img/s05.png','../img/s06.png','../img/s07.png','../img/s08.png','../img/s09.png','../img/s10.png','../img/s11.png','../img/s12.png','../img/s13.png','../img/s14.png','../img/s15.png','../img/s16.png','../img/s17.png','../img/s18.png','../img/s19.png','../img/s20.png','../img/s21.png','../img/s22.png','../img/s23.png','../img/s24.png','../img/s25.png','../img/s26.png','../img/s27.png','../img/s28.png','../img/s29.png','../img/s30.png','../img/s31.png','../img/s32.png','../img/s33.png','../img/s34.png','../img/s35.png'];
			} else if ( $('#navBar>a').eq(2).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
			} else if ( $('#navBar>a').eq(3).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
			} else if ( $('#navBar>a').eq(4).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 30;
				run.pics = ['../img/s01.png','../img/s02.png','../img/s03.png','../img/s04.png','../img/s05.png','../img/s06.png','../img/s07.png','../img/s08.png','../img/s09.png','../img/s10.png','../img/s11.png','../img/s12.png','../img/s13.png','../img/s14.png','../img/s15.png','../img/s16.png','../img/s17.png','../img/s18.png','../img/s19.png','../img/s20.png','../img/s21.png','../img/s22.png','../img/s23.png','../img/s24.png','../img/s25.png','../img/s26.png','../img/s27.png','../img/s28.png','../img/s29.png','../img/s30.png'];
			} else if ( $('#navBar>a').eq(5).hasClass("active")){
				run =square.drawColor();
				run.state = 0;
				run.num = 10;
				run.pics = ['../img/d0.png','../img/d1.png','../img/d2.png','../img/d3.png','../img/d4.png','../img/d5.png','../img/d6.png','../img/d7.png','../img/d8.png','../img/d9.png'];
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
	
	var methods = [function(){
			for(var t = 0;t<6;t++){
				count(31);
			}
			littleCount(16);
			q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
			q.time = Time();//时间
			replace(q);
			 q.arr3 = []
			  q.arr4 = []
		},function(){
			for(var t = 0;t<5;t++){
				count(35);
			}
			littleCount(12);
			littleCount(12);
			q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
			q.time = Time();//时间
			replace(q);
			q.arr3 = []
			  q.arr4 = []
		}, function(){
			for(var t = 0;t<3;t++){
				oneNum(10);
			}
			q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
			q.time = Time();//时间
			replace2(q);
			q.arr3 = []
			 q.arr4 = []
		}, function(){
			for(var t = 0;t<3;t++){
				oneNum(10);
			}
			q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
			q.time = Time();//时间
			replace2(q);
			q.arr3 = []
			  q.arr4 = []
		},function(){
			for(var t = 0;t<7;t++){
				count(30);
			}
			q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
			q.time = Time();//时间
			replace(q);
			q.arr3 = []
			  q.arr4 = []
		}, function(){
			for(var t = 0;t<7;t++){
				oneNum(10);
			}
			q.num = q.arr3.join('') + q.arr4.join('');//记录字符串
			q.time = Time();//时间
			replace2(q);
			q.arr3 = []
			  q.arr4 = []
		}]
	for (var i = 0; i < 5; i++) {
		var t = Math.floor(Math.random()*6);
		methods[t]();
	}
	$('.swiper-slide').height($("body").height()-$("header").height())//让先按界面排版
	var topB = Math.floor($("footer").offset().top)
	var picB = Math.floor($(".btn_group").offset().top +$("btn_group").height()-$("header").height()/4); 
	if(topB<picB){//如果界面放不下重新生成
		$('.swiper-slide').height(picB + $("footer").height()+$("header").height());
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