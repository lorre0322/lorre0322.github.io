var pjax=function(){"use strict";let e=null;function t(t,n,r,i=!0){e!==t&&(n.beforeSend&&n.beforeSend(),e=t,async function(e,t){const n=await function(e){return new Promise(((t,n)=>{const o=new XMLHttpRequest;o.open("GET",e),o.send(),o.onerror=function(){n(o)},o.ontimeout=function(){n(o)},o.onreadystatechange=function(){4===o.readyState&&(200===o.status?t(o.responseText):n(o))}}))}(e),o=(new DOMParser).parseFromString(n,"text/html"),r=o.querySelector("title")?.textContent||"";return{targetContent:t?o.querySelector(t)?.innerHTML||"":o.body.innerHTML,title:r}}(t,n.container).then((r=>{if(!r.targetContent)throw new Error("targetContent is empty");if(i&&history.pushState({url:window.location.href},"",t),n.container&&e===t){const t=document.querySelector(n.container);t&&(t.innerHTML=r.targetContent),document.title=r.title,e=null,o(n),n.complete&&n.complete(!0)}})).catch((o=>{console.error("PJAX:",o),e===t&&(e=null,n.complete&&n.complete(!1))})))}function n(e,n){e.onclick=o=>{o.preventDefault(),t(e.href,n,e.hash)}}function o(e){const t=document.querySelectorAll("a");for(const o of t)o.host===window.location.host&&o.pathname!==window.location.pathname&&"_blank"!==o.target&&n(o,e)}return{version:"0.0.1",initialed:!1,connect(e){const n={container:e?.container,beforeSend(){history.replaceState({url:window.location.href},"",window.location.href),e?.beforeSend&&e.beforeSend()},complete(t){t&&history.replaceState({url:window.location.href},"",window.location.href),e?.complete&&e.complete(t)}};o(n),this.initialed||window.addEventListener("popstate",(e=>{t(e.state.url,n,0,!1)})),this.initialed=!0}}}();