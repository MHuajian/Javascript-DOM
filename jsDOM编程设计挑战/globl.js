function globl() {
	var P_ele=document.getElementsByTagName('p')[0];
	var	new_div=document.createElement('div');
	new_div.id='foot';
	var new_img=document.createElement('img');
	new_img.src="../images/slideshow.gif";
	new_img.alt="";
	new_img.id="preview";
	new_div.appendChild(new_img);
    var new_image=document.createElement('img');
    new_image.src="../images/frame.gif";
    new_image.alt="";
    new_image.id="frame";
    new_div.appendChild(new_image);
	insertAfter(new_div,P_ele);
	var get_navbar=document.getElementById('navigator');
	var get_a=get_navbar.getElementsByTagName('a');
	for (var i = 0; i < get_a.length; i++) {
		get_a[0].onmouseover=function(){
		moveElement('preview',0,0,10);
		}
		get_a[1].onmouseover=function(){
		moveElement('preview',-150,0,10);
		}
		get_a[2].onmouseover=function(){
		moveElement('preview',-300,0,10);
		}
		get_a[3].onmouseover=function(){
		moveElement('preview',-450,0,10);
		}
		get_a[4].onmouseover=function(){
		moveElement('preview',-600,0,10);
		}
	}
}
function moveElement(element,finalX,finalY,interval) {
	var get_ele=document.getElementById(element);
    xpos=parseInt (get_ele.style.left);
    ypos=parseInt (get_ele.style.top);
    //  判断get_ele的属性  来清除滞后
    if(get_ele.move){
		clearTimeout(get_ele.move);
	}
    if(!xpos){
    	xpos=0;
    }
    if(!ypos){
    	ypos=0;
    }
    //如果等于目标值 则为真 退出循环
    if(xpos==finalX&&ypos==finalY){
    	return true;
    }
    if(xpos>finalX){
    	var speed=Math.ceil(xpos-finalX)/10;
    	xpos-=speed;
    }	
    if(xpos<finalX){
    	var speed=Math.ceil(finalX-xpos)/10;
    	xpos+=speed;
    }
    if(ypos>finalY){
    var speed=Math.ceil(ypos-finalY)/10;
    ypos-=speed;
    }	
    if(ypos<finalY){
    var speed=Math.ceil(finalY-ypos)/10;
    ypos+=speed;
    }
    get_ele.style.left=xpos+'px';
    get_ele.style.top=ypos+'px';
    //字符串拼接
    var repeat="moveElement('"+element+"',"+finalX+","+finalY+","+interval+")";
    //创建自定义属性 get_ele的move属性
    get_ele.move=setTimeout(repeat,interval);
}
	addLoadEvent(globl);
