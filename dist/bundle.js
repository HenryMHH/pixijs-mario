(()=>{var e={884:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/background.jpg"},321:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/mario-sit-l.png"},427:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/mario-sit-r.png"},909:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/mario-standing-l.png"},604:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});const r=s.p+"assets/mario-standing-r.png"},882:(e,t,s)=>{"use strict";function r(e){let t={};t.value=e,t.isDown=!1,t.isUp=!0,t.press=void 0,t.release=void 0,t.downHandler=e=>{e.key===t.value&&(t.isUp&&t.press&&t.press(),t.isDown=!0,t.isUp=!1,e.preventDefault())},t.upHandler=e=>{e.key===t.value&&(t.isDown&&t.release&&t.release(),t.isDown=!1,t.isUp=!0,e.preventDefault())};const s=t.downHandler.bind(t),r=t.upHandler.bind(t);return window.addEventListener("keydown",s,!1),window.addEventListener("keyup",r,!1),t.unsubscribe=()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",r)},t}s.r(t);const n=new PIXI.Application({width:1e3,height:700});document.body.appendChild(n.view),n.loader.add(["assets/mario-standing-r.png","assets/mario-standing-l.png","assets/background.jpg","assets/mario-sit-l.png","assets/mario-sit-r.png"]).load(((e,t)=>{!function(e,t){const s=new PIXI.Sprite(t.texture);s.width=1e3,s.height=700,e.stage.addChild(s)}(n,t["assets/background.jpg"]),function(e,t,{left:s,right:r,jump:n,down:i}){const o=new PIXI.Sprite(t["assets/mario-standing-r.png"].texture),a=552;o.x=50,o.y=a,o.vx=0,o.vy=0,s.press=()=>{o.texture=t["assets/mario-standing-l.png"].texture,o.vx=-6},s.release=()=>{r.isDown||0!==o.vy||(o.vx=0)},r.press=()=>{o.texture=t["assets/mario-standing-r.png"].texture,o.vx=6},r.release=()=>{s.isDown||0!==o.vy||(o.vx=0)},i.press=()=>{o.texture===t["assets/mario-standing-l.png"].texture&&(o.texture=t["assets/mario-sit-l.png"].texture),o.texture===t["assets/mario-standing-r.png"].texture&&(o.texture=t["assets/mario-sit-r.png"].texture)},i.release=()=>{o.texture===t["assets/mario-sit-l.png"].texture&&(o.texture=t["assets/mario-standing-l.png"].texture),o.texture===t["assets/mario-sit-r.png"].texture&&(o.texture=t["assets/mario-standing-r.png"].texture)},n.press=()=>{o.y===a&&(o.vy=-8)},n.release=()=>{o.vy=8},Number(),e.ticker.add((e=>{o.y>a&&(o.vy=0,o.y=a,!n.isDown||r.isDown||s.isDown||(o.vx=0),n.isDown||r.isDown||s.isDown||(o.vx=0)),o.x>=950&&(o.x=950),o.x<=0&&(o.x=0),o.y<402&&(o.vy=8),d(void 0)}));let d=function(e){o.x+=o.vx,o.y+=o.vy};e.stage.addChild(o),e.stage.setChildIndex(o,1)}(n,t,{left:r("ArrowLeft"),up:r("ArrowUp"),right:r("ArrowRight"),down:r("ArrowDown"),jump:r(" ")})}))}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),s(604),s(909),s(321),s(427),s(882),s(884)})();