//添加className属性

function addClass(element,value) {
//如果元素没有className属性的值 则把新的class值赋值给className属性
	if(!element.className){
        element.className=value;
//如果不是，把一个空格和新的class设置值追加到ClassName属性上
	}else{
		newelement=element.className;
		newelement+=" ";
        newelement+=value;
        element.className=newelement;
	}
}