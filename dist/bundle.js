(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  top: 0;\n}\n\nhtml,\nbody,\n#full-page {\n  height: 100%;\n}\n\n#full-page {\n  width: 100vw;\n  background-color: darkkhaki;\n}\n\n#header {\n  position: sticky;\n  top: 0;\n  left: 0;\n  background-color: darkorchid;\n}\n\n#make-list {\n  width: 80px;\n}\n\n.head-foot {\n  height: 10%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 10px;\n}\n\n#create {\n  width: min-content;\n  flex-direction: column;\n  text-align: center;\n  padding: 10px;\n  background-color: darkred;\n  margin: 20px auto;\n  border: 5px solid gray;\n  border-radius: 10px;\n}\n\n.unhide {\n  display: flex;\n}\n\n.hide {\n  display: none;\n}\n\n.list-item {\n  color: gray;\n  border-radius: 5px;\n  text-align: center;\n  margin: 5px;\n  width: 200px;\n  height: 20px;\n  background-color: whitesmoke;\n}\n\n#create button {\n  background-color: cornflowerblue;\n  color: black;\n}\n\n#show {\n  width: 600px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n#footer {\n  background-color: darkorange;\n  position: fixed;\n  top: 90%;\n  left: 0;\n}\n\n.projects {\n  margin: 20px;\n  background-color: cadetblue;\n  border-radius: 10px;\n  border: 3px solid rgb(68, 103, 104);\n  \n}",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=i(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:h(p,n),references:1}),r.push(s)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var a=m++;t=f||(f=d(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=i(t[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=d}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var r={};(()=>{t.d(r,{Z:()=>d});var e=t(379),n=t.n(e),o=t(426);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const a=(e="New Project",n=new Date,t)=>({name:e,date:n,items:t,setDate(e){this.date=e},setName(e){this.name=e},addItem(e){this.items.push(e)},removeItem(){},getItems(){return this.items}}),i=function(e,n,t){const r=a(e,n,t);d.addItem(r),console.log(d),function(e){const n=document.getElementById("show"),t=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("p"),a=document.createElement("ul");e.items.forEach((e=>{let n=document.createElement("li");n.textContent=e,a.appendChild(n)})),r.textContent=e.name,o.textContent=e.date,t.appendChild(r),t.appendChild(o),t.appendChild(a),n.appendChild(t),t.className="projects"}(r)},c={projects:[],addItem(e){this.projects.push(e)},removeItem(e){this.projects.splice(e,1)}};!function(){const e=document.getElementById("make-list"),n=document.getElementById("create"),t=document.getElementById("form"),r=document.querySelectorAll("input");e.addEventListener("click",(()=>n.className="unhide")),t.addEventListener("submit",(function(e){e.preventDefault(),n.className="hide";let t=[r[2].value,r[3].value,r[4].value,r[5].value,r[6].value,r[7].value,r[8].value,r[9].value,r[10].value,r[11].value],o=[];t.forEach((e=>{e&&o.push(e)})),i(r[0].value,r[1].value,o)}))}();const d=c})()})();