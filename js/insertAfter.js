//判断目标元素是不是其父元素的最后一个子节点，若是直接插入到其父元素中
//如果不是 则插入到目标元素的兄弟元素的前面
function insertAfter(newElement,targetElement) {
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}