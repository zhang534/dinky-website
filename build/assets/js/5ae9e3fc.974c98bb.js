"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4456],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7179:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={sidebar_position:1,id:"flinkversion",title:"\u6269\u5c55 Flink \u7248\u672c"},l=void 0,u={unversionedId:"extend/function_expansion/flinkversion",id:"extend/function_expansion/flinkversion",title:"\u6269\u5c55 Flink \u7248\u672c",description:"\u6269\u5c55\u5176\u4ed6\u7248\u672c\u7684 Flink",source:"@site/docs/extend/function_expansion/flinkversion.md",sourceDirName:"extend/function_expansion",slug:"/extend/function_expansion/flinkversion",permalink:"/docs/next/extend/function_expansion/flinkversion",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/docs/extend/function_expansion/flinkversion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"flinkversion",title:"\u6269\u5c55 Flink \u7248\u672c"},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u6210",permalink:"/docs/next/extend/integrate"},next:{title:"\u6269\u5c55\u8fde\u63a5\u5668",permalink:"/docs/next/extend/function_expansion/connector"}},s={},p=[{value:"\u6269\u5c55\u5176\u4ed6\u7248\u672c\u7684 Flink",id:"\u6269\u5c55\u5176\u4ed6\u7248\u672c\u7684-flink",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6269\u5c55\u5176\u4ed6\u7248\u672c\u7684-flink"},"\u6269\u5c55\u5176\u4ed6\u7248\u672c\u7684 Flink"),(0,o.kt)("p",null,"Flink \u7684\u7248\u672c\u53d6\u51b3\u4e8e lib \u4e0b\u7684 dlink-client-1.13.jar\u3002\u5f53\u524d\u7248\u672c\u9ed8\u8ba4\u4e3a Flink 1.13.3 API\u3002\u5411\u5176\u4ed6\u7248\u672c\u7684\u96c6\u7fa4\u63d0\u4ea4\u4efb\u52a1\u53ef\u80fd\u5b58\u5728\u95ee\u9898\uff0c\u5df2\u5b9e\u73b0 1.11\u30011.12\u30011.13, 1.14\uff0c\u5207\u6362\u7248\u672c\u65f6\u53ea\u9700\u8981\u5c06\u5bf9\u5e94\u4f9d\u8d56\u5728lib\u4e0b\u8fdb\u884c\u66ff\u6362\uff0c\u7136\u540e\u91cd\u542f\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u5207\u6362\u7248\u672c\u65f6\u9700\u8981\u540c\u65f6\u66f4\u65b0 plugins \u4e0b\u7684 Flink \u4f9d\u8d56\u3002"))}d.isMDXComponent=!0}}]);