"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7001],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,u=c["".concat(s,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,id:"job_hosting",title:"\u4f5c\u4e1a\u6982\u8ff0"},s=void 0,p={unversionedId:"administrator_guide/studio/job_hosting",id:"administrator_guide/studio/job_hosting",title:"\u4f5c\u4e1a\u6982\u8ff0",description:"Dinky \u505a\u4e3a\u4e00\u7ad9\u5f0f\u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\uff0c\u53ef\u4ee5\u6258\u7ba1 Flink \u548c\u6570\u636e\u5e93\u7684\u4f5c\u4e1a\u3002",source:"@site/docs/administrator_guide/studio/job_hosting.md",sourceDirName:"administrator_guide/studio",slug:"/administrator_guide/studio/job_hosting",permalink:"/docs/next/administrator_guide/studio/job_hosting",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/docs/administrator_guide/studio/job_hosting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"job_hosting",title:"\u4f5c\u4e1a\u6982\u8ff0"},sidebar:"tutorialSidebar",previous:{title:"\u65b9\u8a00\u4ecb\u7ecd",permalink:"/docs/next/administrator_guide/studio/development_control/component_introduce"},next:{title:"\u73af\u5883\u914d\u7f6e",permalink:"/docs/next/administrator_guide/studio/env_config"}},d={},m=[{value:"FlinkSQL",id:"flinksql",level:2},{value:"Local",id:"local",level:3},{value:"Standalone",id:"standalone",level:3},{value:"Yarn Session",id:"yarn-session",level:3},{value:"Yarn Per-Job",id:"yarn-per-job",level:3},{value:"Yarn Application",id:"yarn-application",level:3},{value:"Kubernetes Session",id:"kubernetes-session",level:3},{value:"Kubernetes Application",id:"kubernetes-application",level:3},{value:"DB SQL",id:"db-sql",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dinky \u505a\u4e3a\u4e00\u7ad9\u5f0f\u7684\u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\uff0c\u53ef\u4ee5\u6258\u7ba1 Flink \u548c\u6570\u636e\u5e93\u7684\u4f5c\u4e1a\u3002"),(0,r.kt)("h2",{id:"flinksql"},"FlinkSQL"),(0,r.kt)("h3",{id:"local"},"Local"),(0,r.kt)("p",null,"Dinky \u5185\u7f6e\u7684 Flink MiniCluster\uff0c\u5982\u679c\u63d0\u4ea4\u4efb\u52a1\u81f3 Local \u6a21\u5f0f\u5219\u5c06\u5728 Dinky \u5185\u90e8\u8fd0\u884c\u8be5\u4f5c\u4e1a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4e0d\u9700\u8981\u5916\u90e8 Flink \u96c6\u7fa4\uff0c\u8d44\u6e90\u53d7\u9650\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u8bed\u6cd5\u6821\u9a8c\u3001\u67e5\u770b JobPlan\u3001\u67e5\u770b\u5b57\u6bb5\u7ea7\u8840\u7f18\u3001\u6267\u884c\u8d44\u6e90\u5360\u7528\u975e\u5e38\u5c0f\u7684\u6279\u4f5c\u4e1a\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"   \u8bf7\u4e0d\u8981\u63d0\u4ea4\u6d41\u4efb\u52a1\u81f3 Local\uff0c\u5982\u679c\u63d0\u4ea4\u4e86\uff0c\u4f60\u5c06\u65e0\u6cd5\u5173\u95ed\u5b83\uff0c\u53ea\u80fd\u91cd\u542f Dinky\u3002"))),(0,r.kt)("h3",{id:"standalone"},"Standalone"),(0,r.kt)("p",null,"Dinky \u5c06\u901a\u8fc7 JobManager \u7684 Rest \u7aef\u53e3\u63d0\u4ea4 FlinkSQL \u4f5c\u4e1a\u81f3\u5916\u90e8\u7684 Flink Standalone \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u5171\u4eab\uff0c\u542f\u52a8\u5feb\uff0c\u4e0d\u4f9d\u8d56 Yarn \u6216 K8S\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u6279\u4f5c\u4e1a\u3001Flink OLAP \u67e5\u8be2\u3001\u8d44\u6e90\u5360\u7528\u5c0f\u7684\u6d41\u4f5c\u4e1a\u3002"),(0,r.kt)("h3",{id:"yarn-session"},"Yarn Session"),(0,r.kt)("p",null,"Dinky \u5c06\u901a\u8fc7 JobManager \u7684 Rest \u7aef\u53e3\u63d0\u4ea4 FlinkSQL \u4f5c\u4e1a\u81f3\u5916\u90e8\u7684 Flink Yarn Session \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u5171\u4eab\uff0c\u542f\u52a8\u5feb\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u5171\u4eab\uff0c\u542f\u52a8\u5feb\uff0c\u6279\u4f5c\u4e1a\u3001Flink OLAP \u67e5\u8be2\u3001\u8d44\u6e90\u5360\u7528\u5c0f\u7684\u6d41\u4f5c\u4e1a\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u9700\u8981\u624b\u52a8\u542f\u52a8 Yarn Session \u96c6\u7fa4\u5e76\u6ce8\u518c\u5230 Dinky \u7684\u96c6\u7fa4\u5b9e\u4f8b\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../register_center/cluster_manage"},"\u96c6\u7fa4\u7ba1\u7406"),"\u3002"))),(0,r.kt)("h3",{id:"yarn-per-job"},"Yarn Per-Job"),(0,r.kt)("p",null,"Dinky \u5c06\u901a\u8fc7 Yarn \u6765\u521b\u5efa Flink Yarn Per-Job \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u9694\u79bb\uff0c\u542f\u52a8\u6162\uff0c\u6bcf\u4e2a JobGraph \u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u8d44\u6e90\u5360\u7528\u8f83\u591a\u7684\u6279\u4f5c\u4e1a\u548c\u6d41\u4f5c\u4e1a\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"   \u9700\u8981\u5728 Dinky \u7684\u96c6\u7fa4\u914d\u7f6e\u4e2d\u6ce8\u518c\u76f8\u5173\u7684 Hadoop \u548c Flink \u914d\u7f6e\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../register_center/cluster_manage"},"\u96c6\u7fa4\u7ba1\u7406"),"\u3002"))),(0,r.kt)("h3",{id:"yarn-application"},"Yarn Application"),(0,r.kt)("p",null,"Dinky \u5c06\u901a\u8fc7 Yarn \u6765\u521b\u5efa Flink Yarn Application \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u9694\u79bb\uff0c\u542f\u52a8\u6162\uff0c\u8282\u7ea6\u7f51\u7edc\u8d44\u6e90\uff0c\u6240\u6709 JobGraph \u53ea\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u8d44\u6e90\u5360\u7528\u8f83\u591a\u7684\u6279\u4f5c\u4e1a\u548c\u6d41\u4f5c\u4e1a\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"   \u9700\u8981\u5728 Dinky \u7684\u96c6\u7fa4\u914d\u7f6e\u4e2d\u6ce8\u518c\u76f8\u5173\u7684 Hadoop \u548c Flink \u914d\u7f6e\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../register_center/cluster_manage"},"\u96c6\u7fa4\u7ba1\u7406"),"\u3002"))),(0,r.kt)("h3",{id:"kubernetes-session"},"Kubernetes Session"),(0,r.kt)("p",null,"Dinky \u5c06\u901a\u8fc7\u66b4\u9732\u7684 NodePort \u7aef\u53e3\u63d0\u4ea4 FlinkSQL \u4f5c\u4e1a\u81f3\u5916\u90e8\u7684 Flink Kubernetes Session \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u9694\u79bb\uff0c\u542f\u52a8\u5feb\uff0c\u52a8\u6001\u6269\u5bb9\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u9694\u79bb\uff0c\u542f\u52a8\u5feb\uff0c\u52a8\u6001\u6269\u5bb9\uff0c\u6279\u4f5c\u4e1a\u3001Flink OLAP \u67e5\u8be2\u3001\u8d44\u6e90\u5360\u7528\u5c0f\u7684\u6d41\u4f5c\u4e1a\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u9700\u8981\u5728 Dinky \u7684\u96c6\u7fa4\u914d\u7f6e\u4e2d\u6ce8\u518c\u76f8\u5173\u7684 Kubernetes \u548c Flink \u914d\u7f6e\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../register_center/cluster_manage"},"\u96c6\u7fa4\u7ba1\u7406"),"\u3002"))),(0,r.kt)("h3",{id:"kubernetes-application"},"Kubernetes Application"),(0,r.kt)("p",null,"Dinky \u5c06\u901a\u8fc7 dlink-app \u955c\u50cf\u521b\u5efa\u7684 Flink Kubernetes Application \u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u9694\u79bb\uff0c\u542f\u52a8\u6162\uff0c\u52a8\u6001\u6269\u5bb9\uff0c\u8282\u7ea6\u7f51\u7edc\u8d44\u6e90\uff0c\u6240\u6709 JobGraph \u53ea\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u4f5c\u4e1a\u8d44\u6e90\u9694\u79bb\uff0c\u542f\u52a8\u6162\uff0c\u52a8\u6001\u6269\u5bb9\uff0c\u8282\u7ea6\u7f51\u7edc\u8d44\u6e90\uff0c\u8d44\u6e90\u5360\u7528\u8f83\u591a\u7684\u6279\u4f5c\u4e1a\u548c\u6d41\u4f5c\u4e1a\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"   \u9700\u8981\u5728 Dinky \u7684\u96c6\u7fa4\u914d\u7f6e\u4e2d\u6ce8\u518c\u76f8\u5173\u7684 Kubernetes \u548c Flink \u914d\u7f6e\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../register_center/cluster_manage"},"\u96c6\u7fa4\u7ba1\u7406"),"\u3002"))),(0,r.kt)("h2",{id:"db-sql"},"DB SQL"),(0,r.kt)("p",null,"Dinky \u5c06\u628a sql \u63d0\u4ea4\u5230\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u6267\u884c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9002\u7528\u4e8e\uff1a")," \u539f\u751f SQL \u67e5\u8be2\u3001\u6267\u884c\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  \u9700\u8981\u5728\u6570\u636e\u6e90\u4e2d\u5fc3\u6ce8\u518c\u6570\u636e\u5e93\uff0c\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../register_center/datasource_manage"},"\u6570\u636e\u6e90\u7ba1\u7406")))))}k.isMDXComponent=!0}}]);