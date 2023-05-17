"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2540],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(d,l(l({ref:t},f),{},{components:r})):n.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3376:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],a={},c="potion_duration_multiplier",u={unversionedId:"effects/all-effects/potion_duration_multiplier",id:"effects/all-effects/potion_duration_multiplier",title:"potion_duration_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/potion_duration_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/potion_duration_multiplier",permalink:"/effects/all-effects/potion_duration_multiplier",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/potion_duration_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"play_sound",permalink:"/effects/all-effects/play_sound"},next:{title:"potion_effect",permalink:"/effects/all-effects/potion_effect"}},f={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"potion_duration_multiplier"},(0,i.kt)("inlineCode",{parentName:"h1"},"potion_duration_multiplier")),(0,i.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,i.kt)("p",null,"Multiplies the duration of brewed potions"),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: potion_duration_multiplier\n  args:\n    multiplier: 1.2 # The multiplier\n")))}m.isMDXComponent=!0}}]);