(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2206)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(l){a=!0,i=l}finally{try{t||null==c.return||c.return()}finally{if(a)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},o=r(6273),c=r(387),l=r(7190);var s={};function u(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=c.useRouter(),f=i.default.useMemo((function(){var n=t(o.resolveHref(a,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?o.resolveHref(a,e.as):i||r}}),[a,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,b=e.shallow,m=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,j=t(l.useIntersection({rootMargin:"200px"}),2),x=j[0],w=j[1],E=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=w&&r&&o.isLocalURL(d),n="undefined"!==typeof y?y:a&&a.locale,t=s[d+"%"+v+(n?"%"+n:"")];e&&!t&&u(a,d,v,{locale:n})}),[v,d,w,y,r,a]);var N={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](r,t,{shallow:i,locale:l,scroll:c}))}(e,a,d,v,h,b,m,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&u(a,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof y?y:a&&a.locale,L=a&&a.isLocaleDomain&&o.getDomainLocale(v,_,a&&a.locales,a&&a.domainLocales);N.href=L||o.addBasePath(o.addLocale(v,_,a&&a.defaultLocale))}return i.default.cloneElement(n,N)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(l){a=!0,i=l}finally{try{t||null==c.return||c.return()}finally{if(a)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!o,l=a.useRef(),s=t(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||u||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,i=t.observer,o=t.elements;return o.set(e,n),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return a.useEffect((function(){if(!o&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),i=r(9311),o="undefined"!==typeof IntersectionObserver;var c=new Map},2206:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(5893),a=(r(9221),r(9008)),i=r(1664),o=r(7294);function c(){return o.useEffect((function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var n=e.dataset.target,r=document.getElementById(n);e.classList.toggle("is-active"),r.classList.toggle("is-active")}))}))}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[(0,t.jsxs)("div",{className:"navbar-brand",children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{className:"navbar-item nounderline",children:(0,t.jsx)("span",{children:"node-groupme"})})}),(0,t.jsxs)("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navMenu",children:[(0,t.jsx)("span",{"aria-hidden":"true"}),(0,t.jsx)("span",{"aria-hidden":"true"}),(0,t.jsx)("span",{"aria-hidden":"true"})]})]}),(0,t.jsxs)("div",{className:"navbar-menu",id:"navMenu",children:[(0,t.jsxs)("div",{className:"navbar-start",children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)("a",{className:"navbar-item",children:"Home"})}),(0,t.jsx)(i.default,{href:"/about",children:(0,t.jsx)("a",{className:"navbar-item",children:"About"})}),(0,t.jsx)(i.default,{href:"/docs",children:(0,t.jsx)("a",{className:"navbar-item",children:"Documentation"})})]}),(0,t.jsx)("div",{className:"navbar-end",children:(0,t.jsx)("div",{className:"navbar-item",children:(0,t.jsxs)("a",{className:"button is-light",href:"https://github.com/groupme-js",children:[(0,t.jsx)("i",{className:"fa-navbar fa-brands fa-github"}),(0,t.jsx)("span",{className:"padleft",children:"GitHub"})]})})})]})]})})}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}var u=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{children:(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),(0,t.jsx)(c,{}),(0,t.jsx)(n,s({},r))]})}},9221:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var r=e.O();_N_E=r}]);