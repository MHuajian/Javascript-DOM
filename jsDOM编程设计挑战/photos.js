function photos() {
	var get_cont=document.getElementById('content'),
	    get_ul=document.getElementById('imagegallery'),
	    get_a=get_ul.getElementsByTagName('a'),
	    new_img=document.createElement('img'),
	    new_p=document.createElement('p'),
        p_text=document.createTextNode('choose an image');
        new_p.appendChild(p_text);
	    new_img.src='../images/concert.jpg';
	    new_img.alt='the band in concert';
	    new_img.id='choose'
	    new_p.id='describ'
	    insertAfter(new_img,get_ul);
        insertAfter(new_p,get_ul);
	    for (var i = 0; i < get_a.length; i++) {
	    	get_a[i].onclick=function (event) {
	    //阻止事件默认行为
	    	var	event=event||window.event
	    		if(event.preventDefault){
                    event.preventDefault();
               }else{
               	    event.returnValue=false;
               }
               //调用show函数
	    		 show(this);    
	    		
	    	}
	    }
}
function show(ele) {
	var get_title=ele.getAttribute('title'),
	    get_href=ele.getAttribute('href'),
	    // 动态创建的id值  可以用js函数得到
	    choose=document.getElementById('choose'),
	    describ=document.getElementById('describ');
        choose.setAttribute('src',get_href);
        describ.lastChild.nodeValue=get_title;
        return false;
}
addLoadEvent(photos);
