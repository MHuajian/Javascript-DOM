function live() {
	var get_cont=document.getElementById('content'),
	    get_tr=get_cont.getElementsByTagName('tr'),
	    boolen=false;
	    for (var i = 0; i < get_tr.length; i++) {
	    	if(boolen){
	    		addClass(get_tr[i],"odd");
	    		boolen=false;
	    	}else{
	    		boolen=true;
	    	}
 	    }
}
function highlight() {
	var get_cont=document.getElementById('content'),
	    get_tr=get_cont.getElementsByTagName('tr');
	    for (var i= 0; i<get_tr.length; i++){
	 //创建自定义属性  把当前的className值 赋值给oldClassName属性
	    	get_tr[i].oldClassName=get_tr[i].className;
	    	get_tr[i].onmouseover=function(){
                 addClass(this,"highlight");
 	    	}
 	   //当前对象的className 等于原来的className 也就是oldClassName;
 	    	get_tr[i].onmouseout=function () {
 	    		this.className=this.oldClassName;
 	      }
	    }
}
function addClass(ele,value) {
	if(ele.className=""){
		ele.className=value;
	}else{
	    nw=ele.className;
		nw+=" ";
		nw+=value;
		ele.className=nw;
	}
}
function displayAbbreviations() {
	var new_dl=document.createElement('dl'),
        get_abbr=document.getElementsByTagName('abbr'),
        defs=new Array();
        for (var i = 0; i < get_abbr.length; i++) {
        	var dt_text=get_abbr[i].title,
        	    dd_text=get_abbr[i].lastChild.nodeValue;
            defs[dd_text]=dt_text;
          }
          //用变量key去储存数组下标值  
       for(key in defs) {
       	// 把每个数组值赋值给value；
       	var value=defs[key],
            new_dt=document.createElement('dt'),
            new_dd=document.createElement('dd'),
       	    dt_value=document.createTextNode(key),
       	    dd_value=document.createTextNode(value);
       	    new_dt.appendChild(dt_value);
       	    new_dd.appendChild(dd_value);
       	    new_dl.appendChild(new_dt);
       	    new_dl.appendChild(new_dd);
       }
       var get_cont=document.getElementById('content'),
           get_p=document.createElement('p'),
           p_text=document.createTextNode("Abbreviations");
       get_p.appendChild(p_text);
       get_cont.appendChild(get_p);
       get_cont.appendChild(new_dl);
}
addLoadEvent(live);
addLoadEvent(highlight);
addLoadEvent(displayAbbreviations);