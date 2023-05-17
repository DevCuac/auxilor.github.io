"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[9164],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27965:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},l="play_sound",u={unversionedId:"effects/all-effects/play_sound",id:"effects/all-effects/play_sound",title:"play_sound",description:"Triggered Effect",source:"@site/docs/effects/all-effects/play_sound.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/play_sound",permalink:"/effects/all-effects/play_sound",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/play_sound.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"piercing",permalink:"/effects/all-effects/piercing"},next:{title:"potion_duration_multiplier",permalink:"/effects/all-effects/potion_duration_multiplier"}},f={},s=[{value:"Triggered Effect",id:"triggered-effect",level:4}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"play_sound"},(0,a.kt)("inlineCode",{parentName:"h1"},"play_sound")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Plays a sound to the player"),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: play_sound\n  args:\n    sound: entity_wolf_growl # The sound to play (https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)\n    pitch: 0.7 # The pitch of the sound (0.5 - 2)\n    volume: 10 # The volume of the sound\n  ...other config (eg triggers, filters, mutators, etc)\n")))}d.isMDXComponent=!0}}]);