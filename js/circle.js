var turnplate={
		restaraunts:[],				//大转盘奖品名称
		colors:[],					//大转盘奖品区块对应背景颜色
		outsideRadius:192,			//大转盘外圆的半径
		textRadius:100,				//大转盘奖品位置距离圆心的距离
		insideRadius:68,			//大转盘内圆的半径
		startAngle:0,				//开始角度
		
		bRotate:false				//false:停止;ture:旋转
};

// $(document).ready(function(){
	//动态添加大转盘的奖品与奖品区域背景颜色
	turnplate.restaraunts = ["京东卡","京东卡","京东卡","京东卡","京东卡","京东卡","京东卡","京东卡" ];
	turnplate.colors = ["#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF"];

Zepto(function($){
	var h = $(window).height()-$('header').height();
	var height = $('section').height(h);
	if($(window).width()>750||$(window).height()<500){
		$('.rotate-img').hide()
		$('.white-text').hide();
		$('.info-text').hide();
		$('.circle-rotate').css({
			bottom:'26%'
		})
	}
	var colors = ['#000','#000','#000','#000','#000','#000','#000','#000']
	var ctx01 = $('#mycanvas').get(0).getContext('2d');
	var arc = Math.PI/(8/2);
	ctx01.fillStyle = '#faf';
	ctx01.save();
	ctx01.translate($('#mycanvas').width()/2,$('#mycanvas').height()/2);
	 var  img1 = new Image();
		img1.src="../images/jing10.png";
		img1.onload = function(){
			ctx01.drawImage(img1,70,-40,60,22);
		}
		// ctx01.drawImage(img1,80,-40,44,20);
		// ctx01.save();
		// var  img2 = new Image();
		// img2.src="../images/2000gold.png";
		// img2.onload = function(){
		// 	ctx01.drawImage(img2,170,-20,40,20);
		// }
		// ctx01.drawImage(img2,170,-20,40,20);
		// var  img3 = new Image();
		// img3.src="../images/1200gold.png";
		// img3.onload = function(){
		// 	ctx01.drawImage(img3,200,16,40,20);
		// }
		// ctx01.drawImage(img3,200,16,40,20);
		// var  img4 = new Image();
		// img4.src="../images/1200gold.png";
		// img4.onload = function(){
		// 	ctx01.drawImage(img4,200,16,40,20);
		// }
		// ctx01.drawImage(img4,200,16,40,20);
		// var  img5 = new Image();
		// img5.src="../images/jing5.png";
		// img5.onload = function(){
		// 	ctx01.drawImage(img5,158,52,60,30);
		// }
		// ctx01.drawImage(img5,158,52,60,30);
		// var  img6 = new Image();
		// img6.src="../images/500gold.png";
		// img6.onload = function(){
		// 	ctx01.drawImage(img6,84,76,40,20);
		// }
		// ctx01.drawImage(img6,84,76,40,20);
		// var  img7 = new Image();
		// img7.src="../images/800gold.png";
		// img7.onload = function(){
		// 	ctx01.drawImage(img7,6,60,40,20);
		// }
		// var  img8 = new Image();
		// img8.src="../images/jing3.png";
		// img8.onload = function(){
		// 	ctx01.drawImage(img8,-30,12,40,30);
		// }
		// ctx01.drawImage(img8,-30,12,40,30);
		// var  img9 = new Image();
		// img9.src="../images/1500gold.png";
		// img9.onload = function(){
		// 	ctx01.drawImage(img9,-4,-24,40,20);
		// }
		// ctx01.drawImage(img9,-4,-24,40,20);
	ctx01.restore();
	$('.click').css({
			zIndex:1000
		})
	var textArr = ['京东卡','2000','1200','京东卡','500','800','京东卡','1500']
	function drawImages(){
		ctx = $('#my-01').get(0).getContext('2d');
		
		ctx.save();
		var  img01 = new Image();
		img01.src="../images/pink.png";
		img01.onload = function(){
			ctx.drawImage(img01,92,-2,116,80);
		}
		ctx.drawImage(img01,92,-2,116,80);
		ctx.save();
		var  img02 = new Image();
		img02.src="../images/pink2.png";
		img02.onload = function(){
			ctx.drawImage(img02,92,72,116,80);
		}
		ctx.drawImage(img02,92,72,116,80);
		ctx.restore()
		 var t = '';
		for (var i = 0; i < textArr.length; i++) {
			t += '<i>'+textArr[i]+'</i>';
		}
		$('.text').html(t);
		console.log($('.rotate-area').width())
		for (var i = 0; i < $('.text>i').length-3; i++) {
			 $('.text>i').eq(i).css({
				top:-Math.cos(45*i) *1.6+'rem',
				left:Math.sin(45*i) *1.6+'rem',
				zIndex:3000,
				transform:'rotate('+45*i+'deg)',
				 transformOrigin:'center ',
			})
		}
		// var arc = Math.PI/(turnplate.restaraunts.length/2);
		// // var ctx = canvasBanner.getContext('2d');
		// ctx.clearRect(0,0,422,422);
		// ctx.strokeStyle = '#FFBE04';
		// ctx.font = '16px Microsoft YaHei';
		// ctx.save();
		// for(var t=0;t<turnplate.restaraunts.length;t++){
		// 	var angle = turnplate.startAngle + t*arc;
		// 	ctx.save();
		//   var text = turnplate.restaraunts[t];
		//   var line_height = 17;
		//   //translate方法重新映射画布上的 (0,0) 位置
		//   ctx.translate(100 + Math.cos(angle + arc / 2) * 80, 100 + Math.sin(angle + arc / 2) * 80);


		//   // //rotate方法旋转当前的绘图
		//   ctx.rotate(angle + arc / 2 + Math.PI / 2);
		  
		//   /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
		// 	  //在画布上绘制填色的文本。文本的默认颜色是黑色
		// 	  //measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
		// 	  ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
		// 	  ctx.restore()
		// }
	
		$('.text>i').eq(0).css({
				top:1.24+'rem',
				left:2.6+'rem',
				zIndex:3000,
				transform:'rotate(0)',
				 transformOrigin:'center ',
		})

		$('.text>i').eq(1).css({
				top:2.3+'rem',
				left:3.6+'rem',
				zIndex:3000,
				transform:'rotate(48deg)',
				 transformOrigin:'right ',
		})
		$('.text>i').eq(2).css({
				top:3+'rem',
				left:4+'rem',
				zIndex:3000,
				webkitTransform:'rotate(90deg)',
				 webkitTransformOrigin:'right ',
		})
		$('.text>i').eq(3).css({
				top:4.4+'rem',
				left:2.6+'rem',
				zIndex:3000,
				transform:'rotate(135deg)',
				 transformOrigin:'right ',
		})
		$('.text>i').eq(4).css({
				top:4.4+'rem',
				left:1.2+'rem',
				zIndex:3000,
				transform:'rotate(180deg)',
				 transformOrigin:'right ',
		})
		$('.text>i').eq(5).css({
				top:3.5+'rem',
				left:.36+'rem',
				zIndex:3000,
				transform:'rotate(225deg)',
				 transformOrigin:'right ',
		})
		$('.text>i').eq(6).css({
				top:2.4+'rem',
				left:.4+'rem',
				zIndex:3000,
				transform:'rotate(270deg)',
				 transformOrigin:'right ',
		})
		$('.text>i').eq(7).css({
				top:1.3+'rem',
				left:1.3+'rem',
				zIndex:3000,
				transform:'rotate(315deg)',
				webkitTransform:'rotate(315deg)',
				 transformOrigin:'right ',
				 webkitTransformOrigin:'right ',
		})
	

	}
		// drawImages();
	$('#bot-tex').on('tap',function(e){
		if(e.target.tagName == 'EM'){
		var w = $('.bottom-text>.select').width()
		var m=$(e.target).index();
			$('.bottom-text>.select').css({
				left:m*w+'px',
				transition:'.3s'
			})
			console.log(m)
			if(m==0){
				$('.circle-rotate>.point').attr({
					src:'../images/pointer2.png'
				})
				$('.orig-pointer').attr({
					src:'../images/head-1.png'
				})
				$('.bg-border').attr({
					src:'../images/head-ori.png'
				})
			}
			if(m==1){
				$('.circle-rotate>.point').attr({
					src:'../images/pointer3.png'
				})
				$('.orig-pointer').attr({
					src:'../images/head-2.png'
				})
				$('.bg-border').attr({
					src:'../images/head-pray.png'
				})
			}
			if(m==2){
				$('.circle-rotate>.point').attr({
					src:'../images/pointer4.png'
				})
				$('.orig-pointer').attr({
					src:'../images/head-3.png'
				})
				$('.bg-border').attr({
					src:'../images/head-gold.png'
				})
			}
		}
	})	


	$('.about').on('tap',function(e){
		if($(e.target).closest('.ranking')){
			var m =$(e.target).parent().index();
			if(m==0){
				$('.ranking-head').show();
				$('.ranking-head>.close').on('tap',function(){
					$('.ranking-head').hide();	
				});
			}
		}	
	})
})

$(document).ready(function(){
	var totateTimeOut = function(){
		$(".rotate-area").rotate({
			angle:0,
			animateTo:2160,
			duration:8000,
			callback:function(){
				alert('网络超时')
			}
		})
	}
	var m =0
	var rotateFn = function(item,txt){
		var angles = item*(360/turnplate.restaraunts.length)-(360/(turnplate.restaraunts.length*2));
		if(angles < 270){
			angles = 270 - angles;
		}else {
			angles = 360 -angles;
		}
		var n=0;
		$('.rotate-area').stopRotate();
		
		$('.rotate-area').rotate({
			angle:0,
			animateTo:angles+1440-45/2,
			step:function(){
			},
			duration:8000,
			callback:function(){
				turnplate.bRotate = !turnplate.bRotate
			}
		});			
		
	}
	function rnd(min,max){
		return Math.floor(Math.random(0,1)*(max-min+1)+min)
	}
	$('.click').click(function(){
		if(turnplate.bRotate) return 
			turnplate.bRotate = !turnplate.bRotate
		var item = rnd (0,turnplate.restaraunts.length)
		rotateFn(item,turnplate.restaraunts[item-1]);
	})
	
})

 		