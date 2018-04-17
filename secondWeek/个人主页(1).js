            function addEvent(o,evt,func){
     	if(o.attachEvent)o.attachEvent('on'+evt,func);
     	else if(o.addEventListener)o.addEventListener(evt,func,false);
     }
            addEvent(window,'load',first)
            function first(){
			var container=document.getElementById('container');
			var list=document.getElementById('list');
			var prev=document.getElementById('prev');
			var next=document.getElementById('next');
			var buttons=document.getElementById('buttons').getElementsByTagName('span');
			var index=1;
			var timer;//存放定时器；
//按钮亮起来
            function showButton(){
            	for(var i=0;i<buttons.length;i++){
            		if (buttons[i].className=='on') {
            			buttons[i].className='';
            			break;
            		}
            	}
            	buttons[index-1].className='on';
            }
//改变图片的left值实现图片切换
			function change(offest){
				newleft=parseInt(list.style.left)+offest;
				list.style.left =newleft+'px';
				//实现无限轮播
				if(newleft>-600){
					list.style.left=-3000+'px';
				}
				if(newleft<-3000){
					list.style.left=-600+'px';
				}
			}
//自动播放使用计时器每两秒调用一次函数
            function play(){
                timer=setInterval(function(){ next.onclick();}, 3000);
            }
            function stop(){
            	clearInterval(timer);
            }
//点击左右箭头触发函数
			prev.onclick=function(){
                change(600);
                if(index==1){
                	index=5;
                }else {
                	index-=1;
                }
                showButton();
			}
			next.onclick=function(){
				change(-600);
				if(index==5){
					index=1;
				}else {
					index+=1;
				}
				showButton();
			}
//点击按钮切换图片计算点击的点距离起始点的left在调用函数
			for(var i=0;i<buttons.length;i++){
				buttons[i].onclick=function(){
					if(this.className=='on'){
						return;
					}
					var myindex=parseInt(this.getAttribute('index'));
					var offest=-600*(myindex-index);
					index=myindex;
					showButton();
					change(offest);
				}
			}
//鼠标一进一出时停止和自动播放
			container.onmouseover=stop;
			container.onmouseout=play;
			play();
		}
		