"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7766],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(r),p=o,h=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29145:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(25773),o=r(30808),i=(r(27378),r(35318)),l=["components"],a={id:"lifecycle-hooks",title:"Lifecycle Hooks"},c=void 0,s={unversionedId:"getting-started/lifecycle-hooks",id:"getting-started/lifecycle-hooks",isDocsHomePage:!1,title:"Lifecycle Hooks",description:"The codegen allow you to specify scripts it can run for you in certain events.",source:"@site/docs/getting-started/lifecycle-hooks.md",sourceDirName:"getting-started",slug:"/getting-started/lifecycle-hooks",permalink:"/docs/getting-started/lifecycle-hooks",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/lifecycle-hooks.md",tags:[],version:"current",frontMatter:{id:"lifecycle-hooks",title:"Lifecycle Hooks"},sidebar:"sidebar",previous:{title:"Naming Convention",permalink:"/docs/getting-started/naming-convention"},next:{title:"Development Workflow",permalink:"/docs/getting-started/development-workflow"}},u=[{value:"How to use?",id:"how-to-use",children:[],level:2},{value:"Root Level",id:"root-level",children:[{value:"<code>afterStart</code>",id:"afterstart",children:[],level:3},{value:"<code>onWatchTriggered</code>",id:"onwatchtriggered",children:[],level:3},{value:"<code>onError</code>",id:"onerror",children:[],level:3},{value:"<code>beforeAllFileWrite</code>",id:"beforeallfilewrite",children:[],level:3},{value:"<code>beforeOneFileWrite</code>",id:"beforeonefilewrite",children:[],level:3},{value:"<code>afterOneFileWrite</code>",id:"afteronefilewrite",children:[],level:3},{value:"<code>afterAllFileWrite</code>",id:"afterallfilewrite",children:[],level:3},{value:"<code>beforeDone</code>",id:"beforedone",children:[],level:3}],level:2},{value:"Output Level",id:"output-level",children:[],level:2}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The codegen allow you to specify scripts it can run for you in certain events. "),(0,i.kt)("p",null,"You can specify hooks on the root level, or specify hooks on the output level (only some of them)."),(0,i.kt)("p",null,"Each hook has it's own arguments, and it passes it to your scripts using ",(0,i.kt)("inlineCode",{parentName:"p"},"argv"),". "),(0,i.kt)("h2",{id:"how-to-use"},"How to use?"),(0,i.kt)("p",null,"Add your scripts to your ",(0,i.kt)("inlineCode",{parentName:"p"},"codegen.yml")," file, and specify the scripts you wish to run, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"hooks:\n  afterOneFileWrite:\n    - prettier --write\n")),(0,i.kt)("p",null,"Or, for specifc output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  ./src/types.ts:\n    hooks:\n      afterOneFileWrite:\n        - prettier --write\n    plugins:\n      - typescript\n")),(0,i.kt)("h2",{id:"root-level"},"Root Level"),(0,i.kt)("p",null,"The following lifecycle hooks are supported on root level:"),(0,i.kt)("h3",{id:"afterstart"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterStart")),(0,i.kt)("p",null,"Triggered with no arguments, when the codegen starts (after the ",(0,i.kt)("inlineCode",{parentName:"p"},"codegen.yml")," has beed parsed)."),(0,i.kt)("h3",{id:"onwatchtriggered"},(0,i.kt)("inlineCode",{parentName:"h3"},"onWatchTriggered")),(0,i.kt)("p",null,"Triggered every time a file changes when using watch mode.\nTriggered with two arguments: the type of the event (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"changed"),") and the path of the file."),(0,i.kt)("h3",{id:"onerror"},(0,i.kt)("inlineCode",{parentName:"h3"},"onError")),(0,i.kt)("p",null,"Triggered in case of a general error in the codegen. The argument is a string containing the error."),(0,i.kt)("h3",{id:"beforeallfilewrite"},(0,i.kt)("inlineCode",{parentName:"h3"},"beforeAllFileWrite")),(0,i.kt)("p",null,"Executed after the codegen has done creating the output and before writing the files to the file-system.\nTriggered with multiple arguments - paths for all relevant files."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Not all the files will be actually written to the file-system, because this is triggered before checking if the file has changed since last execution.")),(0,i.kt)("h3",{id:"beforeonefilewrite"},(0,i.kt)("inlineCode",{parentName:"h3"},"beforeOneFileWrite")),(0,i.kt)("p",null,"Triggered before a file is written to the file-system. Executed with the path for the file."),(0,i.kt)("p",null,"If the content of the file hasn't changed since last execution - this hooks won't be triggered."),(0,i.kt)("h3",{id:"afteronefilewrite"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterOneFileWrite")),(0,i.kt)("p",null,"Triggered after a file is written to the file-system. Executed with the path for the file.\nIf the content of the file hasn't changed since last execution - this hooks won't be triggered."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is a very useful hook, you can use it for integration with Prettier or other linters.")),(0,i.kt)("h3",{id:"afterallfilewrite"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterAllFileWrite")),(0,i.kt)("p",null,"Executed after writing all the files to the file-system.\nTriggered with multiple arguments - paths for all files."),(0,i.kt)("h3",{id:"beforedone"},(0,i.kt)("inlineCode",{parentName:"h3"},"beforeDone")),(0,i.kt)("p",null,"Triggered with no arguments, right before the codegen closes, or when watch mode is stopped."),(0,i.kt)("h2",{id:"output-level"},"Output Level"),(0,i.kt)("p",null,"The following hooks are available for a single output file: ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeOneFileWrite")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"afterOneFileWrite"),"."),(0,i.kt)("p",null,"Output level hooks are triggered before root level hooks."))}f.isMDXComponent=!0}}]);