const _$=e=>document.getElementById(e),HC=(e,t)=>e.className.indexOf(t)>-1;function toggleSearch(){const e=_$("search"),t=()=>{HC(document.body,"search")?document.body.classList.remove("search"):(document.body.classList.add("search"),setTimeout((()=>{_$("s-txt").focus()}),300))};e.onclick=()=>{t()},window.addEventListener("keydown",(e=>{!e.ctrlKey||"Slash"!==e.code&&191!==e.keyCode||t()}))}const root=document.documentElement,light=()=>{root.classList.add("light"),localStorage.setItem("theme","light")},dark=()=>{root.classList.remove("light"),localStorage.removeItem("theme"),_$("sw-th").innerText="开灯"};function toggleTheme(){_$("sw-th").onclick=()=>{localStorage.getItem("theme")?(root.classList.remove("light"),localStorage.removeItem("theme"),_$("sw-th").innerText="开灯"):(light(),_$("sw-th").innerText="关灯")}}const toggleMusic=()=>{const e=_$("sw-au"),t=_$("ch-au"),o=_$("bg-au");o.src=play_list[0];var l=0;e.onclick=()=>{HC(o,"play")?(o.classList.remove("play"),e.innerText="播放",o.pause()):(o.classList.add("play"),e.innerText="暂停",o.play())},o.addEventListener("ended",(()=>{o.loop||(l===play_list.length-1?l=0:l++,o.src=play_list[l],o.play())})),t.onclick=()=>{o.loop=!o.loop},t.ontouchstart=e=>{if(HC(_$("bg-au"),"play")){const n=e.targetTouches[0].clientX;t.ontouchend=e=>{const t=e.changedTouches[0].clientX-n;t>0&&l<=play_list.length&&(++l===play_list.length&&(l=0),o.src=play_list[l]),t<0&&l>=0&&(0===l&&(l=play_list.length),l--,o.src=play_list[l]),o.play()}}}},toTop=()=>{_$("load").onclick=()=>{window.scrollTo(0,0)}},changeActive=()=>{document.querySelectorAll("nav>a").forEach((e=>{e.href.split("/").pop()===window.location.pathname.split("/")[1]?e.classList.add("active"):e.classList.remove("active")}))},copyCode=()=>{const e=document.querySelector(".cont");e&&e.addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("cp-code")){const e=t.parentElement.parentElement.nextElementSibling;if("TABLE"===e.tagName){const o=e.querySelector(".code"),l=window.getSelection();l.selectAllChildren(o),document.execCommand("copy"),l.removeAllRanges(),t.innerText="COPIED",setTimeout((function(){t.innerText="COPY"}),2e3)}}}))};(()=>{const e=localStorage.getItem("theme");"loading"===document.readyState&&e&&light(),document.addEventListener("DOMContentLoaded",(function(){e&&(_$("sw-th").innerText="关灯"),toggleTheme(),toggleSearch(),toggleMusic(),_$("load").onclick=()=>{window.scrollTo(0,0)}}))})();