"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[1440],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),a=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=a(r),y=o,m=p["".concat(f,".").concat(y)]||p[y]||u[y]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var a=2;a<c;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7073:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],l={},f="set_velocity",a={unversionedId:"effects/all-effects/set_velocity",id:"effects/all-effects/set_velocity",title:"set_velocity",description:"Triggered Effect",source:"@site/docs/effects/all-effects/set_velocity.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/set_velocity",permalink:"/effects/all-effects/set_velocity",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/set_velocity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"set_points",permalink:"/effects/all-effects/set_points"},next:{title:"set_victim_velocity",permalink:"/effects/all-effects/set_victim_velocity"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:u};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"set_velocity"},(0,c.kt)("inlineCode",{parentName:"h1"},"set_velocity")),(0,c.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,c.kt)("p",null,"Sets your velocity"),(0,c.kt)("h1",{id:"example-config"},"Example Config"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: set_velocity\n  args:\n    x: 0.2\n    y: 0.33\n    z: -0.2\n  ...other config (eg triggers, filters, mutators, etc)\n")))}y.isMDXComponent=!0}}]);