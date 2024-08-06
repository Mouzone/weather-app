(()=>{var t={208:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(601),o=n.n(r),s=n(314),i=n.n(s)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([t.id,'* {\n    font-family: "Roboto", sans-serif;\n    padding: 0;\n    margin: 0;\n    box-sizing: content-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n    background-color: black;\n}\n\nform {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n#content {\n    width: 500px;\n    height: 500px;\n    padding: 30px;\n    border: 2px solid whitesmoke;\n    border-radius: 15px;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ndiv {\n    color: whitesmoke;\n    font-weight: bold;\n}\n\n#location {\n    font-size: 30px;\n    margin-bottom: 5px;\n}\n\n#local-time {\n    font-size: 25px;\n}\n\n#condition,\n#uv-index,\n#humidity,\n#precip-prob,\n#precip-amt {\n    font-size: 20px;\n}\n\n#center {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: -30px;\n    margin-bottom: 20px;\n}\n\n#bottom {\n    display: flex;\n    justify-content: space-around;\n}\n\nimg {\n    height: 300px;\n    width: 300px;\n}',""]);const c=i},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(i[a]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},i=[],c=0;c<t.length;c++){var a=t[c],u=r.base?a[0]+r.base:a[0],d=s[u]||0,p="".concat(u," ").concat(d);s[u]=d+1;var l=n(p),f={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var c=n(s[i]);e[c].references--}for(var a=r(t,o),u=0;u<s.length;u++){var d=n(s[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=a}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},279:(t,e,n)=>{var r={"./clear-day.svg":957,"./clear-night.svg":209,"./cloudy.svg":729,"./fog.svg":655,"./hail.svg":831,"./partly-cloudy-day.svg":665,"./partly-cloudy-night.svg":157,"./rain-snow-showers-day.svg":770,"./rain-snow-showers-night.svg":590,"./rain-snow.svg":717,"./rain.svg":827,"./showers-day.svg":931,"./showers-night.svg":175,"./sleet.svg":158,"./snow-showers-day.svg":455,"./snow-showers-night.svg":395,"./snow.svg":675,"./thunder-rain.svg":294,"./thunder-showers-day.svg":913,"./thunder-showers-night.svg":850,"./thunder.svg":886,"./wind.svg":783};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=s,t.exports=o,o.id=279},957:(t,e,n)=>{"use strict";t.exports=n.p+"e6541ce84a82ea86deaf.svg"},209:(t,e,n)=>{"use strict";t.exports=n.p+"7228ebde1a1cbbabeed4.svg"},729:(t,e,n)=>{"use strict";t.exports=n.p+"bd65452b254265c4f761.svg"},655:(t,e,n)=>{"use strict";t.exports=n.p+"07bf93f0c95051aa29f1.svg"},831:(t,e,n)=>{"use strict";t.exports=n.p+"7716b874413ac673e7aa.svg"},665:(t,e,n)=>{"use strict";t.exports=n.p+"749d1251900ec2449417.svg"},157:(t,e,n)=>{"use strict";t.exports=n.p+"c0a8d00378e555b86fcf.svg"},770:(t,e,n)=>{"use strict";t.exports=n.p+"207b14093cc421b50195.svg"},590:(t,e,n)=>{"use strict";t.exports=n.p+"d20b1ffc3bb5091a3478.svg"},717:(t,e,n)=>{"use strict";t.exports=n.p+"30d0498eaffed5814744.svg"},827:(t,e,n)=>{"use strict";t.exports=n.p+"848651d20f3f58949d26.svg"},931:(t,e,n)=>{"use strict";t.exports=n.p+"99f737e43d74ac67225a.svg"},175:(t,e,n)=>{"use strict";t.exports=n.p+"391e6dd7e7c4056b3e07.svg"},158:(t,e,n)=>{"use strict";t.exports=n.p+"a791cdeb76b2a1c641a5.svg"},455:(t,e,n)=>{"use strict";t.exports=n.p+"9b361803bd2c718d208f.svg"},395:(t,e,n)=>{"use strict";t.exports=n.p+"a917b111f11bd1e967cf.svg"},675:(t,e,n)=>{"use strict";t.exports=n.p+"f8d40353e151c5c7cce0.svg"},294:(t,e,n)=>{"use strict";t.exports=n.p+"80f57ee23a7a1d38351e.svg"},913:(t,e,n)=>{"use strict";t.exports=n.p+"03133e2a54cdc1e8cf84.svg"},850:(t,e,n)=>{"use strict";t.exports=n.p+"430f208dd338964430c3.svg"},886:(t,e,n)=>{"use strict";t.exports=n.p+"31fc29a57119a2bd369f.svg"},783:(t,e,n)=>{"use strict";t.exports=n.p+"e87b86c9cbeabdd90ce2.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{"use strict";var t=n(72),e=n.n(t),r=n(825),o=n.n(r),s=n(659),i=n.n(s),c=n(56),a=n.n(c),u=n(540),d=n.n(u),p=n(113),l=n.n(p),f=n(208),v={};v.styleTagTransform=l(),v.setAttributes=a(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(f.A,v),f.A&&f.A.locals&&f.A.locals;const g=n(279),m=document.querySelector("form");function h(){document.getElementById("date").value=(new Date).toISOString().split("T")[0]}m.addEventListener("submit",(async t=>{t.preventDefault();const e=document.getElementById("date").value,n=`${document.getElementById("city").value} ${document.getElementById("country").value}`,r=await async function(t,e){const n=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}/${e}?unitGroup=us&key=F9FDDA2SDYSNXK4DPT8RRZYXM`;try{return(await fetch(n)).json()}catch(t){console.error(t)}}(n,e);!function(t){document.getElementById("location").textContent=t.resolvedAddress,document.getElementById("local-time").textContent=`Local Time: ${t.currentConditions.datetime}`,document.getElementById("condition").textContent=t.currentConditions.conditions,document.getElementById("icon").src=g(`./${t.currentConditions.icon}.svg`),document.getElementById("humidity").textContent="Humidity: "+(null!==t.currentConditions.humidity?t.currentConditions.humidity+"%":"N/A"),document.getElementById("uv-index").textContent=`UV Index: ${null!==t.currentConditions.uvindex?t.currentConditions.uvindex:"N/A"}`,document.getElementById("precip-prob").textContent="Precip %: "+(null!==t.currentConditions.precipprob?t.currentConditions.precipprob+"%":"N/A"),document.getElementById("precip-amt").textContent="Precip Amt: "+(null!==t.currentConditions.precip?t.currentConditions.precip+" in":"N/A")}(r),m.reset(),h()})),h()})()})();