"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5807],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=f(r),p=i,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var f=2;f<o;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15367:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={},l="mine_radius",f={unversionedId:"effects/all-effects/mine_radius",id:"effects/all-effects/mine_radius",title:"mine_radius",description:"Triggered Effect",source:"@site/docs/effects/all-effects/mine_radius.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/mine_radius",permalink:"/effects/all-effects/mine_radius",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/mine_radius.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mcmmo_xp_multiplier",permalink:"/effects/all-effects/mcmmo_xp_multiplier"},next:{title:"mine_radius_one_deep",permalink:"/effects/all-effects/mine_radius_one_deep"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mine_radius"},(0,o.kt)("inlineCode",{parentName:"h1"},"mine_radius")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Mines a square radius around a block"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: mine_radius\n  args:\n    radius: 1 # The radius around the center block: 1 = 3x3x3, 2 = 5x5x5, etc\n    blacklisted_blocks: # The blocks to not mine\n      - obsidian\n    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken\n    disable_on_sneak: true # If the effect shouldn't activate while sneaking\n    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this\n    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this\n  ...other config (eg triggers, filters, mutators, etc)\n")))}p.isMDXComponent=!0}}]);