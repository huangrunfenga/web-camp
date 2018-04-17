     function addEvent(o,evt,func){
     	if(o.attachEvent)o.attachEvent('on'+evt,func);
     	else if(o.addEventListener)o.addEventListener(evt,func,false);
     }
      addEvent(window,'load',second);
         function second(){
			//获取整个页面的高度 宽度
		/*	var sHeight=document.documentElement.scrollHeight;
			var sWidth=document.documentElement.scrollWidth;
			//获取可视区域的宽度
			//如果说页面是一个竖的页面，那么可视区域的宽度和页面的宽度一样
			var wHeight=document.documentElement.clientHeight;*/

			var oLogin=document.createElement("div");
            var oBtn=document.getElementById("btuLogin");
			    oBtn.onclick=function(){
//方法一将文档的遮罩层登陆框设置为display：none；在js点击按钮设置为block；
			    	 var photo=document.getElementById("photoa");
			         photo.style.display = 'block';
//方法二，将文档的遮罩层登陆框内容存在js里面。遮罩层和登陆框的高度在js设置
            //创造一个元素节点存放mask遮罩层
            var Mask=document.createElement("div");
			    Mask.id="mask";
			    var mask = document.getElementById('mask');
			    mask.style.display = 'block';
			    //遮罩层的高度和宽度
			/*    mask.style.width = 'sWidth'+"px";
			    mask.style.height = 'sHeight'+"px";
			    //把遮罩层插入到文档中去
			    document.body.appendChild(mask);
            //创造一个元素节点存放登陆框
			var oLogin=document.createElement("div");
			    oLogin.id="login";
			//把登陆框插入到文档中去
			    document.body.appendChild(oLogin);
			//获取登陆框高度，宽度，插入文档后才能获取
		/*   var dHeight=oLogin.offsetHeight;
			var dWidth=oLogin.offsetWidth;
			    oLogin.style.left=(sWidth-dWidth)/2+"px";
			    oLogin.style.top=(wheight-dheight)/2+"px";*/
			}
			var oClose=document.getElementById("close");
                oClose.onclick=function(){
                    var photo=document.getElementById("photoa");
                    photo.style.display = 'none'; 
                    mask.style.display = 'none';  
                }
                mask.onclick=function(){
                	var photo=document.getElementById("photoa");
                    photo.style.display = 'none';
                     mask.style.display = 'none';    
                }
            }
            
        
	