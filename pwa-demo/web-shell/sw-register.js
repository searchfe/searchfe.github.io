if('serviceWorker'in navigator){var handlerUpdateMessage=function handlerUpdateMessage(e){var metas=document.getElementsByTagName('meta');for(var i=0,len=metas.length;i<len;i++){var meta=metas[i];if(meta.name==='theme-color'){meta.content='#000'}}var dom=document.createElement('div');dom.innerHTML='\n            <style>\n                .app-refresh {background:#000;color:#fff;height:52px;line-height:52px;opacity:1;position:fixed;top:0;left:0;right:0;z-index:10001;padding:0 18px;animation: app-refresh-animation 1s;}\n                .app-refresh-wrap{display:flex;}\n                .app-refresh-wrap span{display:inline-block;flex:1;font-size:15px;}\n                .app-refresh-wrap button{color:#fff;outline:none;font-size:15px;}\n                @keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}\n                @-webkit-keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}\n                @-o-keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}\n                @-moz-keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}\n            </style>\n            <div class="app-refresh" id="app-refresh">\n                <div class="app-refresh-wrap">\n                    <span>\u5DF2\u66F4\u65B0\u6700\u65B0\u7248\u672C</span>\n                    <button onclick="location.reload()">\u70B9\u51FB\u5237\u65B0</button>\n                </div>\n            </div>\n        ';document.body.appendChild(dom)};navigator.serviceWorker.register("/pwa-demo/web-shell/service-worker.js?v=20170622160924");navigator.serviceWorker.addEventListener('message',function(e){if(e.data==='updateMessage'){handlerUpdateMessage(e)}})}