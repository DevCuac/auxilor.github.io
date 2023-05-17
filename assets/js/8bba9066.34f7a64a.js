"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[3246],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var f=n.createContext({}),p=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,f=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(r),y=c,m=s["".concat(f,".").concat(y)]||s[y]||u[y]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function y(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,a=new Array(i);a[0]=s;var o={};for(var f in t)hasOwnProperty.call(t,f)&&(o[f]=t[f]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},49573:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=r(87462),c=r(63366),i=(r(67294),r(3905)),a=["components"],o={},f="pay_price",p={unversionedId:"effects/all-effects/pay_price",id:"effects/all-effects/pay_price",title:"pay_price",description:"Triggered Effect",source:"@site/docs/effects/all-effects/pay_price.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/pay_price",permalink:"/effects/all-effects/pay_price",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/pay_price.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"particle_line",permalink:"/effects/all-effects/particle_line"},next:{title:"permanent_potion_effect",permalink:"/effects/all-effects/permanent_potion_effect"}},l={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:u};function y(e){var t=e.components,r=(0,c.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pay_price"},(0,i.kt)("inlineCode",{parentName:"h1"},"pay_price")),(0,i.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,i.kt)("p",null,"Pay a ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"price")),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: pay_price\n  args:\n    value: 1000 # The value of the price\n    type: coins # The price type\n  ...other config (eg triggers, filters, mutators, etc)\n")))}y.isMDXComponent=!0}}]);