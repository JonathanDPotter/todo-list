(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,':root {\n  --bright-blue: rgb(168, 214, 240);\n  --blue: rgb(144, 190, 216);\n  --orange: rgb(199, 87, 38);\n  --yellow: rgb(234, 219, 111);\n  --darkblue: rgb(41, 82, 116);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  top: 0;\n}\n\nhtml,\nbody,\n#full-page {\n  height: 100vh;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n#full-page {\n  width: 100vw;\n  background-color: var(--blue);\n  color: var(--darkblue);\n  display: grid;\n  grid:\n    "head head head" 1fr\n    "projects list ..." 4fr\n    "foot foot foot" 1fr/\n    2fr 4fr 1fr;\n  font-family: monospace;\n  font-weight: 900;\n}\n\n#title {\n  grid-area: head;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  background-color: var(--orange);\n  margin: 10px auto;\n  border-radius: 10px;\n  width: 60%;\n}\n\n#projects {\n  grid-area: projects;\n  width: 100%;\n  padding: 10px;\n  font-size: 15px;\n  margin: 0;\n}\n\n#project-list li {\n  margin-left: 20px;\n  list-style-type: circle;\n  cursor: pointer;\n}\n\n#project-list li:hover {\n  opacity: 0.7;\n}\n\n#new-project {\n  width: 60%;\n  background-color: var(--blue);\n  border: none;\n  border-bottom: 3px solid var(--darkblue);\n  padding: 2px;\n}\n\n#add-project button {\n  background-color: var(--blue);\n  border: none;\n}\n\n#add-project:hover {\n  opacity: 0.7;\n}\n\n#new-project:focus {\n  outline: none;\n  background-color: var(--bright-blue);\n  border-radius: 5px;\n}\n\n#list-target {\n  grid-area: list;\n}\n\n#active-list {\n  background-color: var(--yellow);\n  width: 100%;\n  border-radius: 10px;\n  border: 3px solid var(--darkblue);\n  margin: 0;\n  box-sizing: border-box;\n}\n\n#active-title {\n  font-size: 25px;\n  margin: 5px;\n}\n\n#date-container select,\ninput {\n  background-color: var(--yellow);\n  border: none;\n  width: 40%;\n  color: var(--darkblue);\n}\n\n#date-container select,\ninput:focus {\n  outline: none;\n}\n\n#list-container {\n  margin: 10px;\n}\n\n#list-head,\n#list {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr 1fr;\n  text-justify: start;\n}\n\n#list {\n  margin: 10px 0px;\n}\n\n#list-head {\n  text-decoration: underline;\n  text-decoration-color: var(--darkblue);\n}\n\n.flagged {\n  color: var(--orange);\n}\n\n#done {\n  background-color: var(--yellow);\n}\n\n.btn {\n  background-color: var(--yellow);\n  border: none;\n  color: var(--darkblue);\n  font-weight: 900;\n  width: 10px;\n  display: inline;\n}\n\n.btn:hover {\n  opacity: 0.7;\n}\n\n#remove {\n  width: auto;\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#remove .btn {\n  width: auto;\n  color: var(--orange);\n}\n\n#footer {\n  grid-area: foot;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: auto;\n}\n',""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],l=e.base?c[0]+e.base:c[0],d=t[l]||0,s="".concat(l," ").concat(d);t[l]=d+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:g(p,e),references:1}),r.push(s)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,s=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,v=0;function g(n,e){var t,r,o;if(e.singleton){var i=v++;t=f||(f=l(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=l(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(n,e),d=0;d<t.length;d++){var s=a(t[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=l}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(426);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o={projects:[],activeProject:""},i="project.lists";o.projects=JSON.parse(localStorage.getItem(i))||[];const a=document.getElementById("project-list"),c=document.getElementById("new-project-button"),l=document.getElementById("new-project"),d=document.getElementById("active-target");class s{constructor(n){this.name=n,this.date=new Date,this.toDos=[],this.index=o.projects.length}}function u(){const n=o.projects.map((n=>n.name));document.querySelectorAll(".list-item").forEach((n=>n.remove())),n.forEach(((n,e)=>{const t=document.createElement("li");t.className="list-item",t.textContent=n,t.addEventListener("click",(n=>{n.preventDefault(),function(n){p();const e=o.projects[n],t=document.getElementsByTagName("template")[0].content.cloneNode(!0);d.appendChild(t);const r=document.getElementById("active-title"),i=(document.getElementById("remove-done"),document.getElementById("remove-project"));r.textContent=e.name,i.addEventListener("click",(n=>{console.log(e.index),o.projects.splice(e.index,1),u(),p()})),e.list,document.querySelectorAll(".done"),document.querySelectorAll(".flag"),document.querySelectorAll(".delete"),f()}(e)})),a.appendChild(t),o.projects[e].index=e})),f()}function p(){for(;d.firstChild;)d.removeChild(d.firstChild)}function f(){localStorage.setItem(i,JSON.stringify(o.projects))}c.addEventListener("click",(n=>{n.preventDefault();const e=new s(l.value);o.projects.push(e),u(),l.value=""})),u()})()})();