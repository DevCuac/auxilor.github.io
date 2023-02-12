"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2260],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Advanced Configuration",sidebar_position:7},c=void 0,s={unversionedId:"ecoenchants/advanced-configuration",id:"ecoenchants/advanced-configuration",title:"Advanced Configuration",description:"Cost Exponent",source:"@site/docs/ecoenchants/advanced-configuration.md",sourceDirName:"ecoenchants",slug:"/ecoenchants/advanced-configuration",permalink:"/ecoenchants/advanced-configuration",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoenchants/advanced-configuration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced Configuration",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Enchantment Configuration",permalink:"/ecoenchants/enchantment-configuration"},next:{title:"How to make an enchant",permalink:"/ecoenchants/how-to-make-a-custom-enchant"}},u={},p=[{value:"Cost Exponent",id:"cost-exponent",level:2},{value:"Enchantment Type Bias",id:"enchantment-type-bias",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cost-exponent"},"Cost Exponent"),(0,o.kt)("p",null,"Cost exponent is a feature of anvils, which can increase or decrease cost based on the original cost."),(0,o.kt)("p",null,"The formula works as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cost = original_cost * exponent^original_cost\n")),(0,o.kt)("p",null,"So, working with an exponent of 1.02 and an original cost of 25:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cost = 25 * 1.02^25\n")),(0,o.kt)("p",null,"This is then rounded up to the nearest whole number, so the cost in this example would then become 42."),(0,o.kt)("h2",{id:"enchantment-type-bias"},"Enchantment Type Bias"),(0,o.kt)("p",null,"You might design some enchantment types (e.g. special enchantments) to be extremely rare, and require a lot of work to balance out their power."),(0,o.kt)("p",null,"To do this, you can bias enchantment levels according to a curve."),(0,o.kt)("p",null,"Let's use an enchantment called Razor for this example."),(0,o.kt)("p",null,"By default, Razor has 5 Levels. So, to calculate the level to apply, a random number between 0 and 1 is generated. This number is then biased according to a curve, which means that more inputs give a lower output, so for example 0.7 may become 0.1, and only extremely high inputs, such as 0.99 may become 0.6 or higher."),(0,o.kt)("p",null,'The "band" for each level is calculated by dividing 1 by the amount of levels. This looks like this for an enchantment with 5 levels:'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Level"),(0,o.kt)("th",{parentName:"tr",align:null},"Range"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"0 - 0.2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"0.21 - 0.4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"0.41 - 0.6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"0.61 - 0.8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"0.81 - 1")))),(0,o.kt)("p",null,"Increasing the bias towards 1 will lead to an increased likeliness of low-level enchantments, and lowering the bias towards -1 will lead to an increased likeliness of high-level enchantments."))}m.isMDXComponent=!0}}]);