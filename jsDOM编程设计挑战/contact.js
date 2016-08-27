//还是有一定意义的  
function contact() {
	var get_labble=document.getElementsByTagName('labble');
	for (var i = 0; i < get_labble.length; i++) {
   //如果labble元素中不存在for元素 则跳转到下一次循环开始
	  if(!get_labble[i].for) continue;
	   get_labble[i].onclick=function () {
	   	//提取for'属性值
	   	    var id=this.for;
	   	 //检查这个form元素是否真的存在
	   	   if(!document.getElementById(id)) return false;
	   	 //让这个form元素获得焦点
	   	   var element=document.getElementById(id)
	   	   element.focus();
  		  }
	   }
	}

// 焦点设置
function resetfiled(whichform) {
  //使用HTML-DOM 表示 :From对象  elements.length 表示表单元素的总个数 (input textarea)
	for (var i = 0; i < whichform.elements.length; i++) {
 //得到所有表单元素的数组
	var element=whichform.elements;
	// var element=whichform.elements[i]; 这个表示也行 不过后面要换
 //如果该元素的type是submit 跳转循环
	if(element[i].type=="submit") continue;
	if(!element[i].defaultValue) continue;
	element[i].onfocus=function () {
		if(this.value==this.defaultValue){
			this.value="";
		}
	}
	element[i].onblur=function () {
		if(this.value==""){
			this.value=this.defaultValue;
		}
	}
	
  }
}
function prepareForms() {
	//用HTML-DOM 表示
	//for(i=o;i<document.forms.length;i++){
	// var thisform=document.forms[i]}
	var forms=document.getElementsByTagName('form');
	//遍历所有form
	for (var i = 0; i < forms.length; i++) {
		resetfiled(forms[i]);
		//添加onsubmit事件中
		forms[i].onsubmit=function(){
		return vaildateForm(this);
	 }
 	}
}

//表单的合法性检查
function isFilled(field) {
	if(field.value.length<1||field.value==field.defaultValue){
		return false;
	}else{
		return true;
	}
}
//检查email
function isEmail(field) {
	if(field.value.indexOf('@')!=-1 && field.value.indexOf('.')!=-1){
		return true;
	}else{
		return false;
	}
}
//确认表单
function vaildateForm(whichform) {
	for(var i=0;i<whichform.elements.length;i++){
		var element=whichform.elements[i];
		//用不着对每个表单元素度进行上面俩个检查  用className区别
		if(element.className.indexOf('required')!=-1){
			if(!isFilled(element)){
            	alert("please fill in the "+element.name+" field");
                return false;
			}
		}
		if(element.className.indexOf('email')!=-1){
            if(!isEmail(element)){
            	alert("The "+element.name+" field must be a valid email address");
            	return false;
            }
		}
	}
	return true;
}
addLoadEvent(contact);
addLoadEvent(prepareForms);