"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4647],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=l,y=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(y,a(a({ref:t},f),{},{components:r})):n.createElement(y,a({ref:t},f))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1969:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(7462),l=r(3366),i=(r(7294),r(3905)),a=["components"],o={},c="multiply_stat_temporarily",u={unversionedId:"effects/all-effects/multiply_stat_temporarily",id:"effects/all-effects/multiply_stat_temporarily",title:"multiply_stat_temporarily",description:"Triggered Effect",source:"@site/docs/effects/all-effects/multiply_stat_temporarily.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/multiply_stat_temporarily",permalink:"/effects/all-effects/multiply_stat_temporarily",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/multiply_stat_temporarily.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"multiply_stat",permalink:"/effects/all-effects/multiply_stat"},next:{title:"multiply_velocity",permalink:"/effects/all-effects/multiply_velocity"}},f={},p=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiply_stat_temporarily"},(0,i.kt)("inlineCode",{parentName:"h1"},"multiply_stat_temporarily")),(0,i.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,i.kt)("p",null,"Multiplies a stat by a specific value"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires EcoSkills")),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: multiply_stat_temporarily\n  args:\n    stat: strength # The name of the stat\n    multiplier: 1.1 # The amount to multiply the stat by\n    duration: 20 # The duration (in ticks)\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);