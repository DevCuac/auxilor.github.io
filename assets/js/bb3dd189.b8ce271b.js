"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6902],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,d=p["".concat(f,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43111:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={},f="strip_ai",l={unversionedId:"effects/all-effects/strip_ai",id:"effects/all-effects/strip_ai",title:"strip_ai",description:"Triggered Effect",source:"@site/docs/effects/all-effects/strip_ai.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/strip_ai",permalink:"/effects/all-effects/strip_ai",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/strip_ai.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"strike_lightning",permalink:"/effects/all-effects/strike_lightning"},next:{title:"take_money",permalink:"/effects/all-effects/take_money"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"strip_ai"},(0,o.kt)("inlineCode",{parentName:"h1"},"strip_ai")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Strips a mob's AI temporarily"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: strip_ai\n  args:\n    duration: 60 # The amount of ticks to strip AI for\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);