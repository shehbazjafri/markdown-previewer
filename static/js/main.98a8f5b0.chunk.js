(window["webpackJsonpmarkdown-previewer"]=window["webpackJsonpmarkdown-previewer"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/defaultMarkdown.88a1db3d.md"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(10),n(4)),l=n(3),d=n.n(l);n(12);var s=function(){var e=n(13),t=Object(a.useState)(""),o=Object(c.a)(t,2),i=o[0],l=o[1];return Object(a.useEffect)(function(){fetch(e).then(function(e){return e.text()}).then(function(e){l(e)})},[e]),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Markdown Previewer")),r.a.createElement("div",{className:"editor-container"},r.a.createElement("div",{className:"title"},"Editor"),r.a.createElement("textarea",{id:"editor",value:i,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"preview-container"},r.a.createElement("div",{className:"title"},"Preview"),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:d()(i,{gfm:!0,breaks:!0})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.98a8f5b0.chunk.js.map