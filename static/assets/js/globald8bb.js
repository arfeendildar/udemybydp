/* Minor scripts
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Website : fueko.net
   Author  : fueko
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Dropdown */
!function(){function e(e){e.matches&&(t.checked=!1)}const t=document.getElementById("toggle"),o=document.querySelector(".header-dropdown"),n=document.querySelectorAll(".header-toggle:checked");if(o&&(o.addEventListener("click",function(){o.classList.toggle("is-active")}),document.addEventListener("click",function(e){e.target.closest(".header-dropdown")||o.classList.remove("is-active")})),n){const l=window.matchMedia("(min-width: 1024px)");l.addListener(e),e(l)}}();

/* Hide footer when is empty and add counter to parent div */
!function(){const e=document.querySelector(".footer-columns li ul li"),o=document.querySelector(".footer-columns");o.classList.add("items-"+o.children.length),e||o.remove()}();

/* FlexMasonry [with custom changes]
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : [based on] 0.2.3
   Website : flexmasonry.vercel.app
   Repo    : github.com/gilbitron/flexmasonry
   Author  : Gilbert Pellegrom
   License : MIT
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
var FlexMasonry=function(f){function g(b){if(a[b])return a[b].exports;var c=a[b]={i:b,l:!1,exports:{}};return f[b].call(c.exports,c,c.exports,g),c.l=!0,c.exports}var a={};return g.m=f,g.c=a,g.d=function(b,a,c){g.o(b,a)||Object.defineProperty(b,a,{enumerable:!0,get:c})},g.r=function(b){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},g.t=function(e,b){if(1&b&&(e=g(e)),8&b)return e;if(4&b&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(g.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&b&&"string"!=typeof e)for(var d in e)g.d(c,d,function(a){return e[a]}.bind(null,d));return c},g.n=function(b){var a=b&&b.__esModule?function(){return b.default}:function(){return b};return g.d(a,"a",a),a},g.o=function(c,a){return Object.prototype.hasOwnProperty.call(c,a)},g.p="",g(g.s=0)}([function(d,a,b){b(1),d.exports=b(2)},function(){},function(i,b,e){"use strict";function g(){r.forEach(function(b){o(b)})}function h(){d&&window.cancelAnimationFrame(d),d=window.requestAnimationFrame(function(){a()})}function o(d){if(2>f())return void d.style.removeProperty("height");let g=[];Array.from(d.children).forEach(function(b){if(!b.classList.contains("footer-break")){const a=window.getComputedStyle(b),c=a.getPropertyValue("order"),d=a.getPropertyValue("height");g[c-1]||(g[c-1]=0),g[c-1]+=Math.ceil(parseFloat(d))}});const a=Math.max(...g);d.style.height=a+"px"}function j(c){const a=c.getElementsByTagName("span");if(Array.from(a).length!==f()-1)for(let a=1;a<f();a++){const a=document.createElement("span");a.classList.add("footer-break"),a.setAttribute("aria-hidden",true),c.appendChild(a)}}function c(b){b.classList.contains("cols-"+f())||(b.className=b.className.replace(/(cols-\d+)/,""),b.classList.add("cols-"+f()))}function f(){const c=Object.keys(m.breakpointCols);for(const a of c)if(window.matchMedia("("+a+")").matches)return m.breakpointCols[a];return 1}function k(d,a={}){return m=Object.assign(l,a),c(d),function(c){const a=c.getElementsByTagName("span");Array.from(a).length!==f()-1&&Array.from(a).forEach(function(b){b.parentNode.removeChild(b)})}(d),j(d),o(d),this}function a(c={}){return r.forEach(function(a){k(a,c)}),this}e.r(b);const l={breakpointCols:{"min-width:1280px":5,"min-width:700px":4,"min-width:480px":3,"min-width:0px":2}};let d=null,m={},r=[];b.default={init:function(a,b={}){return r="string"==typeof a?document.querySelectorAll(a):a,m=Object.assign(l,b),r.forEach(function(b){!function(b){c(b),j(b)}(b),o(b)}),window.addEventListener("load",g),window.addEventListener("resize",h),this},refresh:k,refreshAll:a,destroyAll:function(){window.removeEventListener("load",g),window.removeEventListener("resize",h)}}}]).default;

/* Custom settings for 'FlexMasonry' */
FlexMasonry.init('.footer-columns');