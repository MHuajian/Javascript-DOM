//显示“快速访问键清单”<accesskey>
function displayAccessKeys() {
	if(!document.getElementsByTagName||!document.createElement||
		!document.createTextNode) return false;
   var uls=document.getElementsByTagName('ul');
   //创建数组对象 用来保存数据
   var defs=new Array();
   //遍历ul
   for (var i = 0; i < uls.length; i++) {
   	var link=uls[i].getElementsByTagName('a');
   	  for (var i = 0; i < link.length; i++) {
   	  	var accesskeys=link[i].getAttribute('accesskey');
   //如果得不到accesskey的属性值 则跳出循环进入下一个循环
   	  	if(!accesskeys) continue;
   //得到a元素的文本
   	  	var a_text=link[i].lastChild.nodeValue;
   //把俩个变量的值用数组储存
   	  	defs[accesskeys]=a_text;
   	  }
    var new_ul=document.createElement('ul');

   }
   //创建一个ul元素
   var new_ul=document.createElement('ul');
   //循环遍历数组 用一个变量去储存数组下标值
   for(key in defs){
   	//用key变量得到文本值
   	var value=defs[key];
   	var new_lis=document.createElement('li');
   	var li_text=document.createTextNode(key+':'+value);
   	new_lis.appendChild(li_text);
   	new_ul.appendChild(new_lis);
   }
   //把h2 ul 保存在文档中
   var new_h2=document.createElement('h2');
   var new_h2_text=document.createTextNode('AccessKeys');
   new_h2.appendChild(new_h2_text);
   document.body.appendChild(new_h2);
   document.body.appendChild(new_ul);
}
//调用addLoadEvent函数
addLoadEvent(displayAccessKeys);