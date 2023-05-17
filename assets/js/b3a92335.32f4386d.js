"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[8736],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43663:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Migrating/Converting from other crate plugins",sidebar_position:7},u=void 0,c={unversionedId:"ecocrates/migration",id:"ecocrates/migration",title:"Migrating/Converting from other crate plugins",description:"Want to start using EcoCrates but do not have much time to convert all your configs from the old crate plugin?",source:"@site/docs/ecocrates/migration.md",sourceDirName:"ecocrates",slug:"/ecocrates/migration",permalink:"/ecocrates/migration",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecocrates/migration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Migrating/Converting from other crate plugins",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"PlaceholderAPI",permalink:"/ecocrates/placeholderapi"},next:{title:"EcoPets",permalink:"/ecopets/"}},p={},s=[{value:"Supported plugins",id:"supported-plugins",level:2},{value:"Did not found your crates plugin in the list?",id:"did-not-found-your-crates-plugin-in-the-list",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Want to start using EcoCrates but do not have much time to convert all your configs from the old crate plugin?\nEcoCrates will kindly do that for you with a single command!"),(0,o.kt)("h2",{id:"supported-plugins"},"Supported plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CrateReloaded"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Command: ",(0,o.kt)("strong",{parentName:"p"},"/ecocrates convert CrateReloaded"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Requires CrateReloaded to be enabled as well!")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CrazyCrates"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Command: ",(0,o.kt)("strong",{parentName:"p"},"/ecocrates convert CrazyCrates"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Requires CrazyCrates to be enabled as well!")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ExcellentCrates (ex. GoldenCrates)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Command: ",(0,o.kt)("strong",{parentName:"p"},"/ecocrates convert ExcellentCrates"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Requires ExcellentCrates to be enabled as well!")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SpecializedCrates"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Command: ",(0,o.kt)("strong",{parentName:"p"},"/ecocrates convert SpecializedCrates"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Requires SpecializedCrates to be enabled as well!"))))),(0,o.kt)("h2",{id:"did-not-found-your-crates-plugin-in-the-list"},"Did not found your crates plugin in the list?"),(0,o.kt)("p",null,"Feel free to request a converter for any crate plugin on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoCrates/issues/new?assignees=&labels=enhancement&template=request-a-feature.md&title="},"GitHub issues section")))}d.isMDXComponent=!0}}]);