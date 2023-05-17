"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[160],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,l(l({ref:e},u),{},{components:n})):r.createElement(d,l({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15539:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={},c="minecraft:random_stroll",s={unversionedId:"all-plugins/custom-entity-ai/all-entity-goals/random_stroll",id:"all-plugins/custom-entity-ai/all-entity-goals/random_stroll",title:"minecraft:random_stroll",description:"Allows an entity to choose a random direction to walk towards",source:"@site/docs/all-plugins/custom-entity-ai/all-entity-goals/random_stroll.md",sourceDirName:"all-plugins/custom-entity-ai/all-entity-goals",slug:"/all-plugins/custom-entity-ai/all-entity-goals/random_stroll",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/random_stroll",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-entity-ai/all-entity-goals/random_stroll.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:random_look_around",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/random_look_around"},next:{title:"minecraft:random_swimming",permalink:"/all-plugins/custom-entity-ai/all-entity-goals/random_swimming"}},u={},m=[],p={toc:m};function f(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minecraftrandom_stroll"},(0,a.kt)("inlineCode",{parentName:"h1"},"minecraft:random_stroll")),(0,a.kt)("p",null,"Allows an entity to choose a random direction to walk towards"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:random_stroll\n  priority: 0\n  args:\n    speed: 0.4 # The speed at which to move around\n    interval: 80 # The amount of ticks (on average) to wait between strolling around\n    canDespawn: false # If the entity can despawn\n")))}f.isMDXComponent=!0}}]);