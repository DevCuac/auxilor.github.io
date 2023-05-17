"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[6731],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,y=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Prices",sidebar_position:6},p=void 0,s={unversionedId:"all-plugins/prices",id:"all-plugins/prices",title:"Prices",description:"What are Prices?",source:"@site/docs/all-plugins/prices.md",sourceDirName:"all-plugins",slug:"/all-plugins/prices",permalink:"/all-plugins/prices",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/prices.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Prices",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"The Particle Lookup System",permalink:"/all-plugins/the-particle-lookup-system"},next:{title:"Custom GUI Slots",permalink:"/all-plugins/custom-gui-slots"}},u={},c=[{value:"What are Prices?",id:"what-are-prices",level:2},{value:"Types",id:"types",level:2},{value:"Config Examples",id:"config-examples",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-are-prices"},"What are Prices?"),(0,i.kt)("p",null,"Lots of servers have lots of different types of economies. Maybe you have a standard vault economy, maybe you have an\nitem-based economy, maybe you're using ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/points"},"points"),", or something else entirely."),(0,i.kt)("p",null,"To simplify this, there's a unified way to handle all of this: the price system."),(0,i.kt)("h2",{id:"types"},"Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"coins"),": Standard economy, this is what you'll use if you have an economy plugin installed"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"xp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"exp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"experience"),": Experience points (not levels)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"l"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"levels"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"xplevels"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"explevels"),": Experience levels"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/points"},"points")," work as types, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"souls")),(0,i.kt)("p",null,"You can also use custom currencies from plugins like EcoBits and UltraEconomy."),(0,i.kt)("p",null,"And for item-based economies, you can pass in\nan ",(0,i.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"item lookup string")," as the type to take items."),(0,i.kt)("h2",{id:"config-examples"},"Config Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'price:\n  value: 100 * %player_y%\n  type: crystals\n  display: "&b%value% Crystals \u2756"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'price:\n  value: 16\n  type: ecoitems:shiny_diamond\n  display: "%value% &fShiny Diamonds"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'price:\n  value: 5000\n  type: xp\n  display: "&e%value% XP"\n')))}f.isMDXComponent=!0}}]);