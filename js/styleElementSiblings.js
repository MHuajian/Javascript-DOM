//得到下一个元素节点
function getNextElement(node) {
	if(node.nodeType==1){
		return node;
 	}
 	if(node.nextSibling){
        return getNextElement(node.nextSibling)
 	}
	return null;
}

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

//找出一个元素给其下一个兄弟元素节点设置样式
function styleElementSiblings() {
	var eles=document.getElementsByTagName('h1')
	for(var i=0;i<eles.length;i++)
	{
		var eles_next=getNextElement(eles[i].nextSibling);
		addClass(eles_next,'intro');
	}
}
addLoadEvent(styleElementSiblings);

