"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8844],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=f(r),m=l,y=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7655:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return f},toc:function(){return p}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={},c="multiply_stat",f={unversionedId:"effects/all-effects/multiply_stat",id:"effects/all-effects/multiply_stat",title:"multiply_stat",description:"Permanent Effect",source:"@site/docs/effects/all-effects/multiply_stat.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/multiply_stat",permalink:"/effects/all-effects/multiply_stat",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/multiply_stat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"multiply_points",permalink:"/effects/all-effects/multiply_points"},next:{title:"multiply_stat_temporarily",permalink:"/effects/all-effects/multiply_stat_temporarily"}},u={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multiply_stat"},(0,a.kt)("inlineCode",{parentName:"h1"},"multiply_stat")),(0,a.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,a.kt)("p",null,"Multiplies a stat by a specific value"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requires EcoSkills")),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: multiply_stat\n  args:\n    stat: speed # The name of the stat\n    multiplier: 0.75 # The amount to multiply the stat by\n")))}m.isMDXComponent=!0}}]);