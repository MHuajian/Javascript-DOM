//设置表格的样式  (有条纹的表格)-->stripeTable
function stripeTables() {
	var bl=false;
	var get_trs=document.getElementsByTagName('tr');
	for (var i = 0; i < get_trs.length; i++) {
			if(bl){
                get_trs[i].style.backgroundColor='yellow';
                bl=false;
			}else{
				bl=true;
			}
		
	}
}
addLoadEvent(stripeTables);