"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[9709],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),f=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(r),g=i,m=u["".concat(a,".").concat(g)]||u[g]||p[g]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var f=2;f<l;f++)o[f]=r[f];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97113:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return p}});var n=r(87462),i=r(63366),l=(r(67294),r(3905)),o=["components"],c={},a="give_skill_xp",f={unversionedId:"effects/all-effects/give_skill_xp",id:"effects/all-effects/give_skill_xp",title:"give_skill_xp",description:"Triggered Effect",source:"@site/docs/effects/all-effects/give_skill_xp.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/give_skill_xp",permalink:"/effects/all-effects/give_skill_xp",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/give_skill_xp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"give_price",permalink:"/effects/all-effects/give_price"},next:{title:"give_skill_xp_naturally",permalink:"/effects/all-effects/give_skill_xp_naturally"}},s={},p=[{value:"Triggered Effect",id:"triggered-effect",level:4}],u={toc:p};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"give_skill_xp"},(0,l.kt)("inlineCode",{parentName:"h1"},"give_skill_xp")),(0,l.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,l.kt)("p",null,"Gives experience points for a certain skill"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires EcoSkills")),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: give_skill_xp\n  args:\n    amount: 100 # The amount of xp to give\n    skill: exploration # The skill to give the xp for\n  ...other config (eg triggers, filters, mutators, etc)\n")))}g.isMDXComponent=!0}}]);