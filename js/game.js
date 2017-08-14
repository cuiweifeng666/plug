var width = document.documentElement.clientWidth;
  var height =  document.documentElement.clientHeight;
  if( width > height ){
      console.log(width + " " + height);
      $print =  $('#content');
      $print.width(height);
       $print.height(width);
      $print.css('top',  (height-width)/2 );
      $print.css('left',  0-(height-width)/2 );
      $print.css('transform' , 'rotate(90deg)');
       $print.css('transform-origin' , '50% 50%');
 }

  Zepto(function($){
     var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, function() {
        console.log(evt);
        var width = document.documentElement.clientWidth;
         var height =  document.documentElement.clientHeight;
          $print =  $('#content');
         if( width < height ){
            $print.width(width);
            $print.height(height);
            $print.css('top',  0 );
            $print.css('left',  0 );
            $print.css('transform' , 'none');
            $print.css('transform-origin' , '50% 50%');
         }
         else{
            $print.width(width);
            $print.height(height);
            $print.css('top',  (height-width)/2 );
            $print.css('left',  0-(height-width)/2 );
            $print.css('transform' , 'rotate(90deg)');
            $print.css('transform-origin' , '50% 50%');
         }

    }, false);

    var wh = $(window).height();
    var ww = $(window).width();
    if($(window).height()<=480||$(window).width()<=320||$(window).width()>700){
      if($(window).height()==568) return;
      $('.sm-f-1').css({
        'padding-top':'13.99%',
      })
      $('.sm-f-1 img').css({
        'width':'80%',
        'padding-left':'10%',
      })
      $('.sm-f-2').css({
        'padding-top':'6%',
      })
       $('.sm-f-2 img').css({
        'width':'80%',
        'padding-left':'10%',
      })
       $('.sm-f-3').css({
        'padding-top':'10%',
      })
        $('.sm-f-3 img').css({
        'width':'80%',
        'padding-left':'10%',
      })
        $('.bg-t-1').css({
        'padding-top':'4%',
      })
          $('.bg-t-2').css({
        'padding-top':'4%',
      })

    }

     var img1 = ['images/10.png','images/100_33.png','images/1000.png','images/all.png']
    var actImg = ['images/10-1.png','images/100-1.png','images/1000-1.png','images/all-1.png']
    var m = $('.list img')

    var onoff = true,onoff1= true,onoff2= true
    $('#help').on('tap',function(e){
      if(onoff){
       $(e.target).css({
         opacity:.5,
         transition:".3s",
         '-webkit-transition':'.3s'
       })
       onoff =! onoff
       }else {
         $(e.target).css({
         opacity:1,
         transition:".3s",
         '-webkit-transition':'.3s'
       })
       onoff =! onoff
       }
    })
    //帮助按钮的交互效果
     $('#cancel').on('tap',function(e){
       $(e.target).css({
         opacity:.5,
         transition:".3s",
         '-webkit-transition':'.3s'
       })
         setTimeout(function(){
         $('#cancel').css({
         opacity:1,
         transition:".3s",
         '-webkit-transition':'.3s'
         })
       },400)
         for(var i =0 ;i<img1.length;i++){
         m.eq(i).attr("src",img1[i]).css({
            '-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".3s",
        })
      onoff2 =true
    }
       })
       
    //帮助按钮的交互效果

   
     m.on('touchend',function(e){
       for(var i =0 ;i<img1.length;i++){
      m.eq(i).attr("src",img1[i]).css({
            '-webkit-transform':'scale(1) translateZ(0)',
             transform:'scale(1) translateZ(0)',
            transition:".3s",
        })
      onoff2 =true
    }
        var t = $(e.target).index();
      if(onoff2){
        m.eq(t-1).attr("src",actImg[t-1]).css({
            '-webkit-transform':'scale(1.3) translateZ(0)',
             transform:'scale(1.3) translateZ(0)',
            transition:".6s",
        })
             onoff2 =! onoff2
      }
      
     })
     //按钮选择金额按钮

          

          //屏幕中间的动画效果，从上到下依次嵌套
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
          })//左边塞子
          p2.css({
            transform:'translateX('+(fatherW/2-p1W/4*3)+'px)  translateZ(0)',
            "-webkit-transform":'translateX('+-(fatherW/2-p2W/4*3)+'px)  translateZ(0)',
            'transition':'.2s',
          })//右边塞子
          setTimeout(function(){
            $('.cicle').css({
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
            },1000)
        }//文字出来
          
 window.requestAnimFrame=(function(){
  return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
      return window.setTimeout(callback, 1000 / 50);
    };
})();      
        $('#help').on('tap',function(){
          // $('.p1').css({
          //   transform:'rotate(0deg) translateZ(0)',
          //   "-webkit-transform":' rotate(0deg) translateZ(0)',
          //   'webkit-transform-origin':'center',
          //   opacity:1,
          //   transition:'0s'
          // })//左边塞子返回
          // $('.p2').css({
          //   transform:'translateX('+0+'px) rotate(0deg) translateZ(0)',
          //   "-webkit-transform":'translateX('+0+'px) rotate(0deg) translateZ(0)',
          //   opacity:1,
          //   'webkit-transform-origin':'center',
          //   transition:'0s'
          // })//右边塞子返回
          // $('.cicle').css({
          //     transform:'scale(1) translateZ(0)',
          //     "-webkit-transform":'scale(1) translateZ(0)',
          //      'webkit-transform-origin':'center',
          //      opacity:1,
          //  })
          $('.start').show();
          into();
        })
        var webSocket = new webSocket("ws://192.168.2.129:8080");
               
        var ctx;
        var everything = [];
        var updowntime = 0;
        var changeFig = [];
        var my = 2;
        var updown;
        var n = 0;
        var starLun
        var rotateangle = 0;
        var onoff4= true;
        var  _this
        var star
        var rand 
        var old
        var start =0;
        var count
        var add = 0;
        var cholse
        var backTime;
        $('#myCanve').get(0).width=$(window).width()  
         $('#myCanve').get(0).height=$(window).height()  

         var bs =
              {
              group:[$('.area1>div:nth-of-type(1)'),$('.area1>div:nth-of-type(2)'),$('.area1>div:nth-of-type(3)'),$('.area2>div:nth-of-type(1)'),$('.area2>div:nth-of-type(2)'),$('.area2>div:nth-of-type(3)'),$('.area3>div:nth-of-type(1)'),$('.area3>div:nth-of-type(2)'),$('.area3>div:nth-of-type(3)'),top = $('.circle')],
              gT:$('.gt').offset().top,
              gL: $('.gt').offset().left,
              numStore:[],
              moneyStore:[],
              all: [],
              moneyAll:0
              }
           var num = Math.floor(Math.random(0,1)*9);

        function Umbrellas(sx, sy) {
          _this = this
            this.x = sx;
            this.y = sy;
            this.draw = drawUmbrella;
            this.my = 0;
            this.moveit = moveumbrella;
            this.arrayFill=[];
            // this.num = Math.floor(Math.random(0,1)*3+6);
        }

        function drawUmbrella() {
            var img= document.getElementById("sorry-img");
                img.onload=function(){  
                  ctx.drawImage(img,this.x,this.y,20,20);      
               };  
                ctx.drawImage(img,this.x,this.y,20,20);
        }

        function moveumbrella(x,y){
          this.x += x;
          this.y += y;
        }

        function creatDis(){
            return {
              left:this.chooseL+Math.random()*this.chooseW*0.6+this.chooseW*0.2,
              top:this.chooseT+Math.random()*this.chooseH*0.6+this.chooseH*0.2
            }
        }
        var arrayFill=[]
        function chooseOne(){
          this.choose = bs.group[num]
         this.chooseW = choose.offset().width;
         this.chooseL = choose.offset().left;
         this.chooseT = choose.offset().top;
         this.chooseH = choose.offset().height;
          }
        function selcetObj(t){
          return {
              left:sharChoose.offset().left+Math.random()*sharChoose.offset().width*0.6+sharChoose.offset().width*0.2,
              top:sharChoose.offset().top+Math.random()*sharChoose.offset().height*0.6+sharChoose.offset().height*0.2
            }
        } 
        function selectBord(min,max){
          return Math.floor(Math.random()*(max-min)+min)
        }
        ctx = document.getElementById("myCanve").getContext('2d');
       function int() {
          var _this = this
          add++;
          count = selectBord(3,7);           
           arrayFill = []
          updowntime = 0;
            // ctx.translate(200, 300); 
            for(var t = 0;t<count;t++){
              num = Math.floor(Math.random(0,1)*9);
              if(arrayFill.length){//对重复的进入框内的元素进行排查
                if(arrayFill.indexOf(num)!==-1){
                --t;  
                continue;
              }else {
                  arrayFill.push(num);
                chooseOne();
                }
              }else {
                 arrayFill.push(num);
                chooseOne();
              }  
              for (var i = 0; i < selectBord(3,8); i++) {
                  changeFig.push(creatDis());
                  var um = new Umbrellas(bs.gL, bs.gT);
                  everything.push(um);
              }
            }
            var _this =this
            console.log(everything.length)
            // updown = setInterval(change,20);
         }
        //creatSpeed
        function creatSpeed(){
            for(var i=start;i<everything.length;i++)  {
              console.log(changeFig[0].left)
                everything[i].myL=(changeFig[i].left-bs.gL)/25
                everything[i].myT=(changeFig[i].top-bs.gT)/25
            }
        }
        //starFun
        function starFun(){
           n++;
           old = sharChoose
           console.log(cholse)
           if(cholse !=undefined){
                cholse.css({
                background:'green',
                opacity:1,
                transition:'0s'
                })
           }
            sharChoose.css({
                background:'red',
                opacity:1,
                transition:'0s'
        })
           
        setTimeout(function(){
               sharChoose.css({
                background:'none',
                opacity:1,
                transition:'.4s'
            })
               if(cholse !=undefined){
                 cholse.css({
                background:'none',
                opacity:1,
                transition:'.4s'
                })
              }
            },200)
        if(n==2){
          clearInterval(starLun)
          updowntime = 0;
          onoff4 = false
           backTime = setInterval(back,20);
           n==0;
          }
        }
        //changeEveryThing

        function back(){
           backSpeed();
           clear(0,0);
            updowntime++;
             for (var i = 0; i < everything.length; i++) {
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                everything[i].draw();
            }
            console.log(updowntime)
            if (updowntime == 25) {
                clearInterval(backTime);
                changeEveryThing()
              }
        }

        requestAnimFrame(change);

        //backSpeed
        function backSpeed(){
            for(var i=0;i<everything.length;i++)  {
                everything[i].myL=-(changeFig[i].left-bs.gL)/25
                everything[i].myT=-(changeFig[i].top-bs.gT)/25
            }
        }
        function head(){
            backSpeed();
           var s =0;
           var time =setInterval(function(){
            s++;
            clear(0,0);
             for (var i = 0; i < everything.length; i++) {
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                everything[i].draw();
            }
              if(s == 25) {
                clearInterval(time);
                $('#myCanve').hide();
              }
          },20)
          
        }
         function creatMax(){
            for(var i=0;i<everything.length;i++)  {
              console.log(changeFig[0].left)
                everything[i].myL=(changeFig[i].left-bs.gL)/25
                everything[i].myT=(changeFig[i].top-bs.gT)/25
            }
        }
         function changeEveryThing(){
          num =rand[star];
          sharChoose = old
          changeFig = [];
            for (var i = 0; i < everything.length; i++) {
              changeFig.push(selcetObj());

            }
            creatMax();
            var  t =0;
            var time =setInterval(function(){
              clear(-0,-0);
              t++;
              for (var i = 0; i < everything.length; i++) {
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                  everything[i].draw();
              }
             if(t == 25){
              clearInterval(time)  
              // location.reload(); 
              setTimeout(function(){
                head()
              },300)  
            }
          },20)
         }
        //chooseSide 
        function chooseSide(){
          var t=t-7>0?-1:1;
          var m = Math.floor(Math.random()*10)>6?t:undefined;
          var q = star+m
          if(m != undefined){
            return bs.group[rand[star]+m]            
          }

        }//随机出大小
        function change(){
          
            creatSpeed();
            clear(0,0);
            updowntime++;
            // console.log(updowntime)
            console.log(start)
            for (var i = 0; i < start; i++) {
                  everything[i].moveit(0, 0);
                everything[i].draw();
            }
            for (var i = start; i < everything.length;i++) {
                  everything[i].moveit(everything[i].myL, everything[i].myT);
                everything[i].draw();
            }

            // $("#ta").html("坐标y:" + everything[0].y + "______updowntime:" + updowntime);

            //放在这才有效 在执行方法里面停止
            // console.log(this)
            // if (updowntime == 25) {
            //     clearInterval(updown);
            //     ctx.save();
            //     if(add<=2){
            //     setTimeout(int,500)
            //     start = everything.length
               
            //     }else {
            //     rand = [1,4,7]
            //     star = selectBord(0,3);
            //     cholse =chooseSide();
            //     sharChoose=bs.group[rand[star]];
            //     starLun= setInterval(starFun,600);
            //  }
               
              //过渡方法

            }

        }

        //选择
        function clear(x,y) {
            ctx.clearRect(x, y, $(window).width(), $(window).height());
        }

        // window.onload = function () {
        //     int();
        // }
        // console.log($('.set'))
        $('.set').css('z-index','10000')
        $(".set").on('tap',function(){
          // int() 
        })
        // setInterval(int(),6000)

        //   function into(){
        //   var bs =
        //     {
        //       group: [$('.area1>div:nth-of-type(1)'),$('.area1>div:nth-of-type(2)'),$('.area2>div:nth-of-type(1)'),$('.area2>div:nth-of-type(2)'),$('.area3>div:nth-of-type(1)'),$('.area3>div:nth-of-type(2)'),$('.area3>div:nth-of-type(3)'),$('.area1>div:nth-of-type(3)'),$('.area2>div:nth-of-type(3)'),top = $('.circle')],
        //       gT:$('.circle').offset().top,
        //       gL: $('.circle').offset().left,
        //       numStore:[],
        //       moneyStore:[],
        //       all: [],
        //       moneyAll:0
        //       }
        //     var num = Math.floor(Math.random(0,1)*3+6);
        //     store(bs,num);
           
        // }
        // function store(obj,num){
        //    for(var t=0;t<num;t++){
        //       var find = Math.floor(Math.random(0,1)*9);
        //       // console.log('find'+_this.all.indexOf(find)+'找到'+find)
        //       if(obj.all.indexOf(find) !==  -1){
        //          t = t-1;
        //       }else {
        //       obj.all.push(find);
        //       var newB = obj.group[find];
        //       obj.numStore.push(newB)
        //       //生成的格子

        //       var u=Math.floor(Math.random()*6+2);
        //       if(!obj.moneyStore.length){
        //         obj.moneyStore.push(u)
        //       }else  {
        //         var sm = obj.moneyStore[t-1];
        //         var sum= obj.moneyStore[t-1] + u;
        //         obj.moneyStore.push(sum)
        //       }
        //       obj.moneyAll += u
        //       console.log(obj.moneyAll)
        //        setTimeout(function(){
        //         creatM(obj,num);
        //         },400)
        //       //生成元宝
        //     }}
        // }//页面生成元素个数
        // function creatM(obj,num){
        //    var t ='';
        //     for(var i=0;i<obj.moneyAll;i++){
        //       t += '<img class="circle add" src="images/gold2.png">'
        //     }
        //     $('.head-money .circle').get(0).innerHTML=t;
        //      setTimeout(function(){
        //         pos(obj,num);
        //         },400)
        // }
        //   console.log( $('.head-money .add').size())
        //  function pos(obj,num){
        //       var q=0
        //     for(var t=0;t<num;t++){
        //       var choose=obj.numStore[t];
        //        obj.chooseW=choose.width();
        //        obj.chooseH=choose.height();
        //        //放进的格子随机出来

        //        if(t-1<0){
        //         var sm = obj.moneyStore[0]
        //         var addM = $('.add').slice(0,sm);
        //        }else {
        //          var sm = obj.moneyStore[t-1]
        //          var bg = obj.moneyStore[t]
        //         var addM = $('.add').slice(sm,bg);
        //        }
               
            
        //     for(var m=0;m<addM.length;m++){
        //        if(num>5){
        //           addM.eq(m).css({
        //           transform:'translateX('+Math.floor(choose.offset().left+obj.chooseW*.2+obj.chooseW*.6*Math.random()-obj.gL)+'px) translateY('+Math.floor(choose.offset().top+obj.chooseH*.2+obj.chooseH*.6*Math.random()-obj.gT)+'px) translateZ(0)',
        //           webkitTransform:'translateX('+(choose.offset().left+obj.chooseW*.2+obj.chooseW*.6*Math.random()-obj.gL)+'px) translateY('+choose.offset().top+obj.chooseH*.2+obj.chooseH*.6*Math.random()-obj.gT+'px) translateZ(0)',
        //           transition:.2*m+4+'s '+t*.4+'s',
        //           'animation-timing-function':'ease-in-out'
        //         })
        //         }else {
        //          addM.eq(m).css({
        //           transform:'translateX('+Math.floor(choose.offset().left+obj.chooseW*.2+obj.chooseW*.6*Math.random()-obj.gL)+'px) translateY('+Math.floor(choose.offset().top+obj.chooseH*.2+obj.chooseH*.6*Math.random()-obj.gT)+'px) translateZ(0)',
        //           webkitTransform:'translateX('+(choose.offset().left+obj.chooseW*.2+obj.chooseW*.6*Math.random()-obj.gL)+'px) translateY('+choose.offset().top+obj.chooseH*.2+obj.chooseH*.6*Math.random()-obj.gT+'px) translateZ(0)',
        //           transition:.2*m+3+'s '+t*4+'s',
        //           'animation-timing-function':'ease-in-out'
        //         })

        //          // addM.eq(m).on('webitTransitionEnd',_this.start)
        //         }
        //         q=.2*m+4
               
        //      }
        //     }//分发钱币
            
        //     obj.twinkle = [$('.area1>div:nth-of-type(2)'),$('.area2>div:nth-of-type(2)'),$('.area3>div:nth-of-type(2)')]
        //     obj.getO = Math.floor(Math.random(0,1)*3)
        
        //     var n = 0;
        //       setTimeout(function(){//隔一段事件不然变量为0
        //     var time=setInterval(function(){
        //         n++;
        //           if(n==2){
        //             clearInterval(time);
        //                 setTimeout(function(){
        //                  obj.twinkle[obj.getO].css({
        //                 background:'none',
        //                 opacity:1,
        //                 transition:'1s'
        //               })
        //               },800)
        //           }
        //           obj.twinkle[obj.getO].css({
        //           background:'red',
        //           opacity:0,
        //           transition:'0s'
        //         })
        //         obj.twinkle[obj.getO].css({
        //           background:'red',
        //           opacity:0,
        //           transition:'.7s'
        //         })
        //         setTimeout(function(){
        //              obj.twinkle[obj.getO].css({
        //           background:'red',
        //           opacity:1,
        //           transition:'.7s'
        //         })
        //         },700)//闪烁变色
        //       },1400)
        //     },q*1000)
        //       obj.q = q
        //       console.log(obj.twinkle)
        //       var  chos = obj.twinkle[obj.getO]
        //       var moneyAll = obj.moneyAll 
        //     setTimeout(takeMoney,q*1000+2000)
        //     setTimeout(function(){
        //           // var obj = this
        //           console.log(chos)
        //       var gL = $('.add').offset().left
        //        var gT = $('.add').offset().top
        //       var tL=chos.offset().left
        //       var tT=chos.offset().top
        //       var tW=chos.offset().width
        //       var tH=chos.offset().height
        //       console.log(obj.moneyAll)
        //       var cholse= $('.add')
        //       for(var t=0;t<moneyAll;t++){
        //           cholse.eq(t).css({
        //           transform:'translateX('+Math.floor(tL+tW*.6*Math.random()-gL)+'px) translateY('+Math.floor(tT+tH*.2+tH*.6*Math.random()-gT)+'px) translateZ(0)',
        //           webkitTransform:'translateX('+Math.floor(tL+tW*.6*Math.random()-gL)+'px) translateY('+Math.floor(tT+tH*.2+tH*.6*Math.random()-gT)+'px) translateZ(0)',
        //           transition:4+'s',
        //           // animation:'move 5s',
        //           'animation-timing-function':'ease-out-in'
        //         })}
        //     },q*1000+5000)
        //   }
        // function takeMoney(){
        //      var goL= $('#gold').offset().left
        //      var goW= $('#gold').offset().width
        //      var gL= $('.cicle').offset().left
        //      var distance=gL -goL+goW
        //       $('.add').css({
        //         transform:'translateX('+(distance)+'px)',
        //         webkitTransform:'translateX('+(distance)+'px)',
        //         transition:'2s',
        //       })
        //   }
        //   $('.set').on('tap',into)



  })