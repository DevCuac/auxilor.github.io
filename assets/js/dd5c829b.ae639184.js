"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[3547],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,b=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(b,l(l({ref:t},f),{},{components:r})):n.createElement(b,l({ref:t},f))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49018:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),l=["components"],a={},u="item_durability_below",c={unversionedId:"effects/all-filters/item_durability_below",id:"effects/all-filters/item_durability_below",title:"item_durability_below",description:"Requires the item durability to be less than or equal to a certain amount",source:"@site/docs/effects/all-filters/item_durability_below.md",sourceDirName:"effects/all-filters",slug:"/effects/all-filters/item_durability_below",permalink:"/effects/all-filters/item_durability_below",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-filters/item_durability_below.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"item_durability_above",permalink:"/effects/all-filters/item_durability_above"},next:{title:"items",permalink:"/effects/all-filters/items"}},f={},s=[],p={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"item_durability_below"},(0,o.kt)("inlineCode",{parentName:"h1"},"item_durability_below")),(0,o.kt)("p",null,"Requires the item durability to be less than or equal to a certain amount"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"filters:\n  item_durability_below: 30\n")))}m.isMDXComponent=!0}}]);