//封装一个insertAfter函数
function insertAfter(newEle,tarEle) {
	var parent_Node=tarEle.parentNode;
	if(parent_Node.lastChild.nodeName==tarEle){
		parent_Node.appendChild(newEle);
	}else{
		parent_Node.insertBefore(newEle,tarEle.nextSibling);
	}
}
//显示“文献来源链接” <blockquote>标签
function displayCitation() {
	if(!document.getElementsByTagName||!document.createElement
		||!document.createTextNode) return false;
	var block=document.getElementsByTagName('blockquote')[0];
	var url=block.getAttribute('cite');
	var superscript=document.createElement('sup');
	var newEle=document.createElement('a');
    var newEle_text=document.createTextNode('source');
    newEle.appendChild(newEle_text);
    superscript.appendChild(newEle);
    newEle.setAttribute('href',url);
    newEle.target='_blank'
    newEle.style.color='red';
    var childern=block.childNodes;
    //遍历block元素的子节点 
    for(var i=0;i<childern.length;i++){
    //如果有字节点是元素节点插入在其最后一个子节点的后面
    if(childern[i].nodeType==1)
    insertAfter(superscript,childern[i].lastChild);
  }
}
addLoadEvent(displayCitation);