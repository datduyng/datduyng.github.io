(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},5075:function(e,t,n){"use strict";n.r(t);var r=n(4051),i=n.n(r),s=n(5893),o=n(7294),a=n(1542),c=n.n(a),u=n(9583),l=n(4578),d=n(1163),f=n(1003),h=n(8345);function p(e,t,n,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}var y={up:"right",down:"left",right:"right",left:"left"};t.default=function(){var e=(0,o.createRef)(),t=(0,d.useRouter)(),n=function(){var n,r=(n=i().mark((function n(r){var s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(s=e.current)||void 0===s?void 0:s.swipe)){n.next=4;break}return n.next=4,e.current.swipe(r);case 4:"left"===r?t.push("/oops"):t.push("/welcome");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var s=n.apply(e,t);function o(e){p(s,r,i,o,a,"next",e)}function a(e){p(s,r,i,o,a,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}(),r=(0,o.useState)("current"),a=r[0],m=r[1],x=(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center",width:"405px",margin:"auto"},children:[(0,s.jsx)("div",{className:"text-3xl pb-5",children:"Meet Dom!!"}),(0,s.jsx)(c(),{ref:e,onCardLeftScreen:function(e){m(y[e])},children:(0,s.jsxs)("div",{className:"bg-white border-2 rounded-md",children:[(0,s.jsx)("div",{style:{overflow:"hidden"},children:(0,s.jsx)("img",{src:"/personal.jpg",className:"rounded-t-md",style:{height:"415px",width:"405px"}})}),(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsx)("p",{className:"text-xl",children:"Dominic Nguyen"}),(0,s.jsx)("p",{className:"text-base text-slate-400",children:"@datduyng"}),(0,s.jsx)("p",{className:"pb-3",children:"Just vib'in. \u2764\ufe0f Open source."}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"text-sm pt-3",children:"he/him, 5'9. I like to work out \ud83c\udfcb\ufe0f\u200d\u2642\ufe0f rock climbing \ud83e\uddd7 skiing \u26f7\ufe0f running \ud83c\udfc3\u200d\u2642\ufe0f and building products \ud83d\udd79\ufe0f. I like to blogs on IOTs, web tech, infra related. Tinkering with the web 3.0. Swipe right for my resume \ud83d\ude1c"})]})]})}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("button",{className:"bg-white m-4",style:{height:"60px",width:"60px",borderRadius:"50%"},onClick:function(){return n("left")},children:(0,s.jsx)(l.S1K,{fontSize:32,style:{margin:"auto"},color:"#CDD6DD"})}),(0,s.jsxs)("button",{className:"bg-white m-4",style:{height:"60px",width:"60px",borderRadius:"50%"},onClick:function(){return n("right")},children:[(0,s.jsx)(u.$0H,{fontSize:32,style:{margin:"auto"},color:"#FFACE4"})," "]})]})]})});switch(a){case"current":return x;case"left":return(0,s.jsx)(h.default,{});case"right":return(0,s.jsx)(f.default,{})}}},8345:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(){return(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center",width:"405px",margin:"auto"},children:"WIP (come back in a few days)"})}},1003:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893);n(7294);function i(){return(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center",width:"405px",margin:"auto"},children:"Welcome"})}},1163:function(e,t,n){e.exports=n(387)},1729:function(e){e.exports=function(e){return new Promise((function(t){setTimeout(t,e)}))}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),c(e.child))}}function l(e){var t=function(t){var n,i=e.attr,s=e.size,c=e.title,u=a(e,["attr","size","title"]),l=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(i)}},1542:function(e,t,n){const r=n(7294),i=n(1729),s={snapBackDuration:300,maxTilt:5,bouncePower:.2,swipeThreshold:300},o=(e,t)=>Math.sqrt(Math.pow(e,2)+Math.pow(t,2)),a=async(e,t,n=!1)=>{const r=h(e),s=(e=>{const t=window.getComputedStyle(e),n=t.getPropertyValue("width"),r=Number(n.split("px")[0]),i=t.getPropertyValue("height");return{x:r,y:Number(i.split("px")[0])}})(document.body),a=o(s.x,s.y),c=o(t.x,t.y),u=a/c,l=a/c,y=d(t.x*l+r.x,-t.y*l+r.y);let m="";e.style.transition=n?"ease "+u+"s":"ease-out "+u+"s",m=0===p(e)?f(200*(Math.random()-.5)):p(e)>0?f(200*Math.random()/2+p(e)):f(200*(Math.random()-1)/2+p(e)),e.style.transform=y+m,await i(1e3*u)},c=async e=>{e.style.transition=s.snapBackDuration+"ms";const t=h(e),n=d(t.x*-s.bouncePower,t.y*-s.bouncePower),r=f(p(e)*-s.bouncePower);e.style.transform=n+r,await i(.75*s.snapBackDuration),e.style.transform="none",await i(s.snapBackDuration),e.style.transition="10ms"},u=e=>{if(Math.abs(e.x)>Math.abs(e.y)){if(e.x>s.swipeThreshold)return"right";if(e.x<-s.swipeThreshold)return"left"}else{if(e.y>s.swipeThreshold)return"up";if(e.y<-s.swipeThreshold)return"down"}return"none"},l=(e,t)=>{const n=t.x-e.x,r=e.y-t.y,i=(t.time-e.time)/1e3;return{x:n/i,y:r/i}},d=(e,t)=>"translate("+e+"px, "+t+"px)",f=e=>"rotate("+e+"deg)",h=e=>{const t=window.getComputedStyle(e),n=new WebKitCSSMatrix(t.webkitTransform);return{x:n.m41,y:-n.m42}},p=e=>{const t=window.getComputedStyle(e),n=new WebKitCSSMatrix(t.webkitTransform);return-Math.asin(n.m21)/(2*Math.PI)*360},y=e=>{const t=e.targetTouches[0];return{x:t.clientX,y:t.clientY}},m=e=>({x:e.clientX,y:e.clientY}),x=r.forwardRef((({flickOnSwipe:e=!0,children:t,onSwipe:n,onCardLeftScreen:i,className:o,preventSwipe:p=[],swipeRequirementType:x="velocity",swipeThreshold:w=s.swipeThreshold,onSwipeRequirementFulfilled:v,onSwipeRequirementUnfulfilled:g},b)=>{s.swipeThreshold=w;const j=r.useRef(!1),k=r.useRef();r.useImperativeHandle(b,(()=>({async swipe(e="right"){n&&n(e);const t=1e3,r=100*(Math.random()-.5);"right"===e?await a(k.current,{x:t,y:r},!0):"left"===e?await a(k.current,{x:-1e3,y:r},!0):"up"===e?await a(k.current,{x:r,y:t},!0):"down"===e&&await a(k.current,{x:r,y:-1e3},!0),k.current.style.display="none",i&&i(e)},async restoreCard(){k.current.style.display="block",await c(k.current)}})));const C=r.useCallback((async(t,r)=>{if(j.current)return;j.current=!0;const s=h(t),o=u("velocity"===x?r:s);if("none"!==o&&(n&&n(o),e&&!p.includes(o))){const e="velocity"===x?r:((e,t=1)=>{const n=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2));return{x:e.x*t/n,y:e.y*t/n}})(s,600);return await a(t,e),t.style.display="none",void(i&&i(o))}c(t)}),[j,e,n,i,p,x]),N=r.useCallback((()=>{j.current=!1}),[j]);return r.useLayoutEffect((()=>{let e={x:null,y:null},t={x:0,y:0},n={x:0,y:0,time:(new Date).getTime()},r=!1,i="none";k.current.addEventListener("touchstart",(t=>{t.preventDefault(),N(),e={x:-y(t).x,y:-y(t).y}})),k.current.addEventListener("mousedown",(t=>{t.preventDefault(),r=!0,N(),e={x:-m(t).x,y:-m(t).y}}));const o=r=>{if(v||g){const e=u("velocity"===x?t:h(k.current));e!==i&&(i=e,"none"===i?g&&g():v&&v(e))}const o=((e,t,n,r)=>{const i={x:e.x+n.x,y:e.y+n.y},o={x:i.x,y:i.y,time:(new Date).getTime()},a=d(i.x,i.y),c=l(r,o).x/1e3,u=f(c*s.maxTilt);return t.style.transform=a+u,o})(r,k.current,e,n);t=l(n,o),n=o};k.current.addEventListener("touchmove",(e=>{e.preventDefault(),o(y(e))})),k.current.addEventListener("mousemove",(e=>{e.preventDefault(),r&&o(m(e))})),k.current.addEventListener("touchend",(e=>{e.preventDefault(),C(k.current,t)})),k.current.addEventListener("mouseup",(e=>{r&&(e.preventDefault(),r=!1,C(k.current,t))})),k.current.addEventListener("mouseleave",(e=>{r&&(e.preventDefault(),r=!1,C(k.current,t))}))}),[]),r.createElement("div",{ref:k,className:o},t)}));e.exports=x}},function(e){e.O(0,[876,445,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);