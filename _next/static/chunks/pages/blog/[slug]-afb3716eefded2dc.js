(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3214:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(6051)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(i){u=!0,o=i}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},u=r(6273),i=r(387),c=r(7190);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),a=l.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=l.default.createElement("a",null,v));var g=(t=l.default.Children.only(v))&&"object"===typeof t&&t.ref,_=o(c.useIntersection({rootMargin:"200px"}),2),w=_[0],j=_[1],x=l.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);l.default.useEffect((function(){var e=j&&r&&u.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,j,b,r,n]);var E={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:l}))}(e,n,d,p,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof b?b:n&&n.locale,I=n&&n.isLocaleDomain&&u.getDomainLocale(p,M,n&&n.locales,n&&n.domainLocales);E.href=I||u.addBasePath(u.addLocale(p,M,n&&n.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(i){u=!0,o=i}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,n=a.useRef(),c=o(a.useState(!1),2),f=c[0],s=c[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||f||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:t}))}),[r,t,f]);return a.useEffect((function(){if(!u&&!f){var e=l.requestIdleCallback((function(){return s(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=r(7294),l=r(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},6051:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return l},default:function(){return u}});var n=r(5893),o=r(7441),a=r(1664),l=!0;function u(e){var t=e.frontmatter,r=t.title,l=t.date,u=t.cover_image,i=(e.slug,e.content);return(0,n.jsxs)("div",{className:"mx-auto max-w-3xl h-full",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{className:"btn btn-back",children:"Go Back"})}),(0,n.jsxs)("div",{className:"card card-page",children:[(0,n.jsx)("h1",{className:"post-title",children:r}),(0,n.jsxs)("div",{className:"post-date",children:["Posted on ",l]}),(0,n.jsx)("img",{src:u,alt:""}),(0,n.jsx)("div",{className:"post-body",children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,o.TU)(i)}})})]})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[441,774,888,179],(function(){return t=3214,e(e.s=t);var t}));var t=e.O();_N_E=t}]);