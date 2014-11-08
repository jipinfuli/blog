if(document.getElementById('tips')){
	document.getElementById('tips').innerHTML='<div style="padding:0 0 3px 5px;text-align:center0;"><a href="'+appurl+'" target=_self><span style="color:#00FF00;">好消息：本站推出“'+appname+'”安卓APP，手机看色片更方便，稍后提醒您安装。</a></span></div>';
}

var localurl=location.href;
if(localurl.indexOf("?ll")>0){
	var loadtime="6";function load(){if(loadtime<=0){location.href=appurl;}else{setTimeout('load()',999);}loadtime--;}load();
}
