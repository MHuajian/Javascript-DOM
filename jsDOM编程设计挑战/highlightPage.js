function highlightPage() {
	var get_nav=document.getElementById('navigator');
	var get_a=get_nav.getElementsByTagName('a');
	for (var i = 0; i < get_a.length; i++) {
		var a_href=get_a[i].getAttribute('href');
		//标识页面Url 用indexof 查询位置 如果不等于-1 则 增加class"here"
		var win_href=window.location.href;
		if(win_href.indexOf(a_href)!=-1){
			get_a[i].className="here";
		}
	}
}

addLoadEvent(highlightPage);