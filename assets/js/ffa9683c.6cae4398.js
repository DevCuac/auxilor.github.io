"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[531],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},c="has_talisman",s={unversionedId:"effects/all-conditions/has_talisman",id:"effects/all-conditions/has_talisman",title:"has_talisman",description:"Requires a player to have a certain talisman active",source:"@site/docs/effects/all-conditions/has_talisman.md",sourceDirName:"effects/all-conditions",slug:"/effects/all-conditions/has_talisman",permalink:"/effects/all-conditions/has_talisman",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-conditions/has_talisman.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"has_skill_level",permalink:"/effects/all-conditions/has_skill_level"},next:{title:"in_air",permalink:"/effects/all-conditions/in_air"}},u={},f=[],p={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"has_talisman"},(0,i.kt)("inlineCode",{parentName:"h1"},"has_talisman")),(0,i.kt)("p",null,"Requires a player to have a certain talisman active"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Requires Talismans")),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: has_talisman\n  args:\n    talisman: attack_speed_2 # The talisman ID\n")))}m.isMDXComponent=!0}}]);