"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[9975],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||l[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:o,a[1]=m;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41127:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],m={title:"Commands and Permissions",sidebar_position:1},s=void 0,c={unversionedId:"ecoitems/commands-and-permissions",id:"ecoitems/commands-and-permissions",title:"Commands and Permissions",description:"/ecoitems give (Give players items)",source:"@site/docs/ecoitems/commands-and-permissions.md",sourceDirName:"ecoitems",slug:"/ecoitems/commands-and-permissions",permalink:"/ecoitems/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoitems/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Commands and Permissions",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EcoItems",permalink:"/ecoitems/"},next:{title:"How to make a custom item",permalink:"/ecoitems/how-to-make-a-custom-item"}},p={},l=[{value:"<code>/ecoitems give</code> (Give players items)",id:"ecoitems-give-give-players-items",level:2},{value:"<code>/ecoitems import</code> (Import an item from lrcdb)",id:"ecoitems-import-import-an-item-from-lrcdb",level:2},{value:"<code>/ecoitems export</code> (Export an item to lrcdb)",id:"ecoitems-export-export-an-item-to-lrcdb",level:2}],u={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ecoitems-give-give-players-items"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecoitems give")," (Give players items)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecoitems.commands.give")),(0,i.kt)("p",null,"General Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecoitemsgive <player> <item> [amount]")),(0,i.kt)("p",null,"For example, if you wanted to give a player a reaper scythe, you would do: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecoitems give <player> reaper_scythe")),(0,i.kt)("h2",{id:"ecoitems-import-import-an-item-from-lrcdb"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecoitems import")," (Import an item from ",(0,i.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecoitems.command.import")),(0,i.kt)("p",null,"General Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecoitems import <id>")),(0,i.kt)("p",null,"Find items on ",(0,i.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb")),(0,i.kt)("h2",{id:"ecoitems-export-export-an-item-to-lrcdb"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecoitems export")," (Export an item to ",(0,i.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecoitems.command.export")),(0,i.kt)("p",null,"General Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecoitems export <id>")))}d.isMDXComponent=!0}}]);