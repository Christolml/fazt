!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const{Weather:o}=n(1),{UI:r}=n(2),{Store:i}=n(3),c=new i,{city:a,countryCode:u}=c.getLocationData(),s=new r,d=new o(a,u);async function l(){const t=await d.getWeather();console.log(t),s.render(t)}n(4),document.getElementById("w-change-btn").addEventListener("click",t=>{const e=document.getElementById("city").value,n=document.getElementById("countryCode").value;d.changeLocation(e,n),c.setLocationData(e,n),l(),t.preventDefault()}),document.addEventListener("DOMContentLoaded",l)},function(t,e,n){"use strict";n.r(e),n.d(e,"Weather",(function(){return o}));class o{constructor(t,e){this.apikey="fc94195bff2ca73072e4cfe047f0845a",this.city=t,this.countryCode=e}async getWeather(){const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`,e=await fetch(t);return await e.json()}changeLocation(t,e){this.city=t,this.countryCode=e}}},function(t,e,n){"use strict";n.r(e),n.d(e,"UI",(function(){return o}));class o{constructor(){this.location=document.getElementById("weather-location"),this.desc=document.getElementById("weather-description"),this.icon=document.getElementById("icon"),this.string=document.getElementById("weather-string"),this.humidity=document.getElementById("weather-humidity"),this.wind=document.getElementById("weather-wind")}render(t){this.location.textContent=t.name+" / "+t.sys.country,this.desc.textContent=t.weather[0].description,this.icon.setAttribute("src",`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`),this.string.textContent=t.main.temp+" °C",this.humidity.textContent="Humidity: "+t.main.humidity+"%",this.wind.textContent="Wind: "+t.wind.speed+" m/s"}}},function(t,e,n){"use strict";n.r(e),n.d(e,"Store",(function(){return o}));class o{constructor(){this.city,this.countryCode,this.defaultCity="London",this.defaultCountry="uk"}getLocationData(){return null===localStorage.getItem("city")?this.city=this.defaultCity:this.city=localStorage.getItem("city"),null===localStorage.getItem("countryCode")?this.countryCode=this.defaultCountry:this.countryCode=localStorage.getItem("countryCode"),{city:this.city,countryCode:this.countryCode}}setLocationData(t,e){localStorage.setItem("city",t),localStorage.setItem("countryCode",e)}}},function(t,e,n){var o=n(5),r=n(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(r,i),r.locals?r.locals:{});t.exports=c},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function a(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function u(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],u=e.base?i[0]+e.base:i[0],s=n[u]||0,d="".concat(u," ").concat(s);n[u]=s+1;var l=a(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(f)):c.push({identifier:d,updater:m(f,e),references:1}),o.push(d)}return o}function s(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function h(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var y=null,p=0;function m(t,e){var n,o,r;if(e.singleton){var i=p++;n=y||(y=s(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=s(e),o=h.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=u(t,e),s=0;s<n.length;s++){var d=a(n[s]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=i}}}},function(t,e,n){(e=n(7)(!1)).push([t.i,"body {\n    background: #2c3e50;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #3498db, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #3498db, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n                       \n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),e.push(u))}},e}}]);