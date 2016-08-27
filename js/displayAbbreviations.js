function displayAbbreviations() {
	//浏览器嗅探
	if(!document.getElementsByTagName||!document.createTextNode
		||!document.createElement) return false;
	//找出abbr元素
	var abbrs=document.getElementsByTagName('abbr');
	//如果找不出abbr元素 函数立刻停止执行 并返回一个布尔值 false；
	if(abbrs.length<1) return false;
	 //创建一个数组用来储存数据
	 var defs=new Array();
	//遍历abbr元素
    for (var i = 0; i < abbrs.length; i++) {
    //如果当前元素没有子节点，立刻开始下一次循环（给IE预留一条退路）
    	if(abbrs[i].childNodes.length<1)  continue;
    //得到title值和文本值
    	var titles=abbrs[i].getAttribute("title");
    	var key=abbrs[i].lastChild.nodeValue;
          //保存俩个变量的值 一个作下标 另一个作值
             defs[key]=titles;
        }
     var dl=document.createElement("dl");
      //每次循环，都需要创建一个dt和dd，还需要创建文本节点；
      //把defs数组元素的下标值赋值给ke变量
       for(ke in defs){
      //利用ke变量把相应的数组元素值检索出来 即保存titles的数组值
       	var title=defs[ke];
    //创建自定表
     var dt=document.createElement("dt");
    var dd=document.createElement("dd");
    var dt_Text=document.createTextNode(ke);
    var dd_Text=document.createTextNode(title);
    //注意别顺序
    dt.appendChild(dt_Text);
    dd.appendChild(dd_Text); 
    dl.appendChild(dt);
    dl.appendChild(dd);
      }
      //如果dl元素没有任何子节点 则函数立即停止执行（IE不兼容的问题）
     if(dl.childNodes.length<1)  return false;
      //创建一个h2元素
     var header=document.createElement("h2");
     var header_text=document.createTextNode("Abbreviations");
     header.appendChild(header_text);
     document.body.appendChild(header);
     document.body.appendChild(dl);
	}
	
   //调用addLoadEvent函数
      addLoadEvent(displayAbbreviations);