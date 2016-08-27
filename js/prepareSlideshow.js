//显示动画图片

function prepareSlideshow() {
	var links=document.getElementById('linklist');
	var links_a=links.getElementsByTagName('a');
	/* 静态
	var preview=document.getElementById('preview');
	preview.style.position='absolute';
	preview.style.left='0px';
	preview.style.top='0px';*/

    //动态生成 防止用户禁用javascript功能
    var div_js=document.createElement('div');
    var preview=document.createElement('img');
    preview.setAttribute('src','../images/total.png');
    preview.setAttribute('alt','');
    preview.setAttribute('id','preview');
    div_js.appendChild(preview);
    insertAfter(div_js,links);

	for (var i = 0; i < links_a.length; i++) {
	//将第一个a元素的执行向左移动120px
		links_a[0].onmouseover=function(){
           moveElement('preview',-120,0,10);
		}
				
		links_a[1].onmouseover=function(){
           moveElement('preview',-220,0,10);
		}		
		links_a[2].onmouseover=function(){
           moveElement('preview',-320,0,10);
		}
	}
}
function moveElement(elemnetID,finalX,finalY,interval) {
	var ele=document.getElementById(elemnetID);
	//消除动画滞后  用自定义的ele元素的属性
	if(ele.move){
		clearTimeout(ele.move);
	}
	//优化 判断这俩个属性是否被设置 并给他们赋默认值0px
	if(!ele.style.left){
		ele.style.left='0px';
	}
	if(!ele.style.top){
		ele.style.top='0px';
	}
	//把给定的元素left和top转换成数值
	var xpos=parseInt(ele.style.left); 
	var ypos=parseInt(ele.style.top) ;
	if(xpos==finalX&&ypos==finalY){
		return true;
	}
	//比较目标值和当前值的关系
	if(xpos<finalX){
	//设置速度为10分之一
	//当他们的差距小于10时 则用Math.ceil向“大于”方向舍入
		var dist=(finalX-xpos)/10;
		xpos+=dist;
	}
	if(xpos>finalX){
    //用大的减去小的 且xpos后面要用 - 号
		var dist=(xpos-finalX)/10;
		xpos-=dist;
	}
	if(ypos<finalY){
		var dist=(finalY-ypos)/10;
		xpos+=dist;
	}if(ypos>finalY){
		var dist=(ypos-finalY)/10;
		xpos-=dist;
	}
	//把数值变成 px
	ele.style.left=xpos+'px';
	ele.style.top=ypos+'px';
	//递归调用函数 传递参数 字符串拼接 把下面的字符串赋值给repeat变量
	var repeat="moveElement('"+elemnetID+"',"+finalX+","+finalY+","+interval+")";
    //move=setTimeout(repeat,interval); 
    //var move=setTimeout(repeat,interval);
 //使用ele属性来创建setTimeout函数  我们既不能用全局变量也不能用局部变量来
 //如果使用全局 则上文if（move）会产生错误 用局部 clearTimeout函数上下文不存在
    ele.move=setTimeout(repeat,interval);
}
addLoadEvent(prepareSlideshow);