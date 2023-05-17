"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6503],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=f(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||s[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var f=2;f<o;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c="aoe",f={unversionedId:"effects/all-effects/aoe",id:"effects/all-effects/aoe",title:"aoe",description:"Triggered Effect",source:"@site/docs/effects/all-effects/aoe.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/aoe",permalink:"/effects/all-effects/aoe",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/aoe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add_stat_temporarily",permalink:"/effects/all-effects/add_stat_temporarily"},next:{title:"armor",permalink:"/effects/all-effects/armor"}},u={},s=[{value:"Triggered Effect",id:"triggered-effect",level:4},{value:"List of Shapes",id:"list-of-shapes",level:2}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aoe"},(0,o.kt)("inlineCode",{parentName:"h1"},"aoe")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Runs effects for all entities within an area of effect (aoe)"),(0,o.kt)("h2",{id:"list-of-shapes"},"List of Shapes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"ID"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Args"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cone")),(0,o.kt)("td",{parentName:"tr",align:null},"A cone in front of the player (think sweeping edge)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"radius")," The radius of the cone (distance in front) ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"angle")," The angle of the cone")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"circle")),(0,o.kt)("td",{parentName:"tr",align:null},"A circle around the player"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"radius")," The radius of the circle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"offset_circle")),(0,o.kt)("td",{parentName:"tr",align:null},"A circle around a point in front of the player"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"radius")," The radius of the circle ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"offset")," The amount of blocks in front")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scan_in_front")),(0,o.kt)("td",{parentName:"tr",align:null},"Scan for entities in the direction you're looking at and affect the first ones found"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"radius")," The radius of the scan ",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"td"},"max_distance")," The maximum distance to scan")))),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: aoe\n  args:\n    effects: # The effects to run for each entity\n      - id: damage_victim\n        args:\n          damage: 2\n          true-damage: true\n    shape: cone # The shape of the AOE area (see above)\n    radius: 3 # The radius of the cone (see above)\n    angle: 120 # The angle of the cone (see above)\n  ...other config (eg triggers, filters, mutators, etc)\n")))}p.isMDXComponent=!0}}]);