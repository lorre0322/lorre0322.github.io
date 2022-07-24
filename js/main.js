function $(fun){
	var doc=document
	if(doc.addEventListener){
		doc.addEventListener("DOMContentLoaded",fun,false);
	}else{
		doc.onreadystatechange=function(){
			if(doc.readyState=='loader'||doc.readyState=='complete'||doc.readyState=='interactive'){
				fun();
			}
		}
	}
}
function open_Nav(){
	function openNav(){
		var app = LsFun.$('#Leslie')
		if(LsFun.hasClass(app,'open-nav')){
			app.classList.remove('open-nav')	
		}else{
			app.classList.add('open-nav')
		}
	}
	LsFun.$('#open-nav').onclick=function(){
		openNav();
	}
	LsFun.$('#shade').onclick=function(){
		openNav();
	}
}
function full_Screen(){
	let screen = true
	function fullScreen(){
		var element = document.documentElement
		var requestMethod = element.requestFullScreen || //W3C
		element.webkitRequestFullScreen || //Chrome等
		element.mozRequestFullScreen || //FireFox
		element.msRequestFullScreen; //IE11
		if (requestMethod) {
			requestMethod.call(element);
		}else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
	    	var wscript = new ActiveXObject("WScript.Shell");
	    	if (wscript !== null) {
	   			wscript.SendKeys("{F11}");
			}
	   	}
	}
	function exitFull() {
		var exitMethod = document.exitFullscreen || //W3C
		document.mozCancelFullScreen || //Chrome等
		document.webkitExitFullscreen || //FireFox
		document.webkitExitFullscreen; //IE11
		if (exitMethod) {
			exitMethod.call(document);
		}
		else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
	LsFun.$('#full-screen').onclick=function(){
		if(screen){
			screen = false
			fullScreen()
		}else{
			screen = true
			exitFull()
		}
	}
}
$(function(){
	open_Nav()
	full_Screen()
});