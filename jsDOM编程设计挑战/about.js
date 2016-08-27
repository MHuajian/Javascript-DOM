function about() {
	var get_ul=document.getElementById('internalnav'),
	    get_a=get_ul.getElementsByTagName('a'),
	    get_cont=document.getElementById('content'),
	    get_div=get_cont.getElementsByTagName('div');
    for (var i = 0; i < get_div.length; i++) {
	    get_div[i].style.display='none';
	    }
	  for (var i = 0; i < get_a.length; i++) {
	    //定制属性 解决变量域的问题
	    get_a[i].index=i;
		get_a[i].onclick=function(){
	     for (var j = 0; j < get_div.length; j++) {
              get_div[j].style.display='none';
	    }			
	    //使当前下标值 等于当前点击的a标签的下标值
	    get_div[this.index].style.display="block";
	    return false;
   }
 }
}

addLoadEvent(about);