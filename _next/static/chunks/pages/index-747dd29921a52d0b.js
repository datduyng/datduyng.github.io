(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},7376:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"mx-auto max-w-3xl h-full xs:px-7 overflow-y",children:t})}},5075:function(e,t,n){"use strict";n.r(t);var r=n(4051),i=n.n(r),s=n(5893),o=n(7294),c=n(9583),l=n(4578),a=n(1163),d=n(1696),u=n(8345),h=n(4960),x=n(4827),f=n(6513),m=n(6174),g=n(4332),p=n(7376);function w(e,t,n,r,i,s,o){try{var c=e[s](o),l=c.value}catch(a){return void n(a)}c.done?t(l):Promise.resolve(l).then(r,i)}var v=function(){var e=(0,o.createRef)(),t=(0,a.useRouter)(),n=function(){var n,r=(n=i().mark((function n(r){var s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(s=e.current)||void 0===s?void 0:s.swipe)){n.next=4;break}return n.next=4,e.current.swipe(r);case 4:"left"===r?t.push("/oops"):t.push("/match");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var s=n.apply(e,t);function o(e){w(s,r,i,o,c,"next",e)}function c(e){w(s,r,i,o,c,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}(),r=(0,h.c)(0),p=(0,x.H)(r,[-150,150],[-30,30]),v=(0,x.H)(r,[-100,-50,0,50,100],[0,1,1,1,0]),j=(0,s.jsxs)("div",{className:"bg-white border-2 rounded-md",children:[(0,s.jsx)("div",{style:{overflow:"hidden",pointerEvents:"none"},children:(0,s.jsx)("img",{src:"/personal.jpg",className:"rounded-t-md",style:{height:"415px",width:"405px"}})}),(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsx)("p",{className:"text-xl",children:"Dominic Nguyen"}),(0,s.jsx)("p",{className:"text-base text-slate-400",children:"@datduyng"}),(0,s.jsx)("p",{className:"pb-3",children:"Just vib'in. \u2764\ufe0f Open source."}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:"text-sm pt-3",children:"he/him, 5'9. I like to work out \ud83c\udfcb\ufe0f\u200d\u2642\ufe0f rock climbing \ud83e\uddd7 skiing \u26f7\ufe0f running \ud83c\udfc3\u200d\u2642\ufe0f and building products \ud83d\udd79\ufe0f. I like to blog on IOTs, web tech, infra related. Tinkering with the web 3.0. Swipe right for my resume \ud83d\ude1c"})]})]}),b=(0,f._)(),y=(0,o.useState)("mid"),k=y[0],N=y[1],_=(0,s.jsx)(m.E.div,{style:{overflow:"hidden"},children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center",maxWidth:"405px",margin:"auto"},children:[(0,s.jsx)("div",{className:"text-3xl pb-5 xs:hidden sm:hidden md:flex",children:"Meet Dom!!"}),(0,s.jsx)(m.E.div,{drag:!0,style:{x:r,rotate:p,opacity:v},animate:b,custom:r,exit:10*r.get(),onDragEnd:function(e,t){Math.abs(r.get())>60?(console.log("remove info",e,t,r.get()),N(r.get()>0?"right":"left")):b.start({x:0,y:0})},children:j}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("button",{className:"bg-white m-4",style:{height:"60px",width:"60px",borderRadius:"50%"},onClick:function(){return n("left")},children:(0,s.jsx)(l.S1K,{fontSize:32,style:{margin:"auto"},color:"#CDD6DD"})}),(0,s.jsxs)("button",{className:"bg-white m-4",style:{height:"60px",width:"60px",borderRadius:"50%"},onClick:function(){n("right")},children:[(0,s.jsx)(c.$0H,{fontSize:32,style:{margin:"auto"},color:"#FFACE4"})," "]})]})]})});switch(k){case"mid":return(0,s.jsx)(g.M,{children:_});case"left":return(0,s.jsx)(u.Oops,{});case"right":return(0,s.jsx)(d.Welcome,{});default:return(0,s.jsx)(s.Fragment,{})}};t.default=function(){return(0,s.jsx)(p.Z,{children:(0,s.jsx)(v,{})})}},1696:function(e,t,n){"use strict";n.r(t),n.d(t,{Welcome:function(){return a},default:function(){return d}});var r=n(5893),i=n(1664),s=(n(7294),n(9583)),o=n(7376),c=[{name:"My Resume",color:"#00ab6c",icon:(0,r.jsx)(s.B$y,{fontSize:20,color:"#fff"}),href:"https://www.linkedin.com/in/datdnguyen/",newTab:!0},{name:"Product Gallery",color:"#1ab7ea",icon:(0,r.jsx)(s.M56,{fontSize:20,color:"#fff"}),href:"/products",newTab:!1},{name:"LinkedIn",color:"#2867B2",icon:(0,r.jsx)(s.ltd,{fontSize:20}),href:"https://www.linkedin.com/in/datdnguyen/",newTab:!0},{name:"Github",color:"#6e5494",icon:(0,r.jsx)(s.hJX,{fontSize:20}),href:"https://www.github.com/datduyng/",newTab:!0}],l=function(e){var t=e.color,n=e.name,s=e.icon,o=e.href,c=e.newTab,l=void 0!==c&&c,a=(0,r.jsx)("button",{style:{backgroundColor:t},className:"hover-scale lg:m-5 md:5 shadow-lg sm:3.5 text-white hover:opacity-75 font-semibold rounded-md w-full place-content-center h-14",children:(0,r.jsxs)("div",{className:"flex justify-center",children:[s,(0,r.jsx)("span",{className:"ml-2",children:n})]})});return(0,r.jsx)("div",{children:l?(0,r.jsx)("a",{target:"_blank",href:o,children:a}):(0,r.jsx)(i.default,{href:o||"/",children:a})})};function a(){return(0,r.jsxs)("div",{className:"flex flex-col mx-5",style:{justifyContent:"center",alignContent:"center",alignItems:"center"},children:[(0,r.jsx)("div",{className:"text-red-600 mtext text-6xl mt-10 ",children:"It's a match!"}),(0,r.jsx)("div",{className:"w-full mt-5 flex flex-col gap-6",children:c.map((function(e){return(0,r.jsx)(l,{name:e.name,icon:e.icon,color:e.color,href:e.href,newTab:e.newTab})}))})]})}function d(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)(a,{})})}},8345:function(e,t,n){"use strict";n.r(t),n.d(t,{Oops:function(){return s},default:function(){return o}});var r=n(5893),i=(n(7294),n(7376));function s(){return(0,r.jsxs)("div",{className:"flex flex-col mt-20",style:{justifyContent:"center",alignContent:"center",alignItems:"center"},children:[(0,r.jsx)("div",{className:"tastetext text-xl",children:"All good. Taste is individual "}),(0,r.jsx)("iframe",{src:"https://giphy.com/embed/3o6wrebnKWmvx4ZBio",width:"480",height:"270",frameBorder:"0",allowFullScreen:!0}),(0,r.jsx)("div",{className:"mt-7 tastetext text-xl",children:"Know someone who might interested in Dom?"}),(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsx)("a",{className:"group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500",href:"mailto:peakatmyresumeformyemail@gmail.com",children:"Send an Email"})})]})}function o(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)(s,{})})}}},function(e){e.O(0,[445,876,949,892,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);