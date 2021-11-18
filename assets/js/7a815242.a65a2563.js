"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7137],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26139:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={},p=void 0,s={unversionedId:"generated-config/typescript-graphql-files-modules",id:"generated-config/typescript-graphql-files-modules",isDocsHomePage:!1,title:"typescript-graphql-files-modules",description:"This plugin generates TypeScript typings for .graphql files containing GraphQL documents, which later on can be consumed using graphql-tag/loader or use string types if you will use the operations as raw strings, and get type-check and type-safety for your imports. This means that any time you import objects from .graphql files, your IDE will provide auto-complete.",source:"@site/docs/generated-config/typescript-graphql-files-modules.md",sourceDirName:"generated-config",slug:"/generated-config/typescript-graphql-files-modules",permalink:"/docs/generated-config/typescript-graphql-files-modules",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-graphql-files-modules.md",tags:[],version:"current",frontMatter:{}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"<code>modulePathPrefix</code>",id:"modulepathprefix",children:[{value:"Usage Examples",id:"usage-examples",children:[],level:4}],level:3},{value:"<code>relativeToCwd</code>",id:"relativetocwd",children:[],level:3},{value:"<code>prefix</code>",id:"prefix",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin generates TypeScript typings for ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," files containing GraphQL documents, which later on can be consumed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-tag/loader"))," or use ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," types if you will use the operations as raw strings, and get type-check and type-safety for your imports. This means that any time you import objects from ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," files, your IDE will provide auto-complete."),(0,i.kt)("p",null,"This plugin also handles ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," files containing multiple GraphQL documents, and name the imports according to the operation name."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0 Fragments are not generated with named imports, only as default imports, due to ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-tag/loader")," behavior.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("img",{alt:"typescript-graphql-files-modules plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-graphql-files-modules?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,i.kt)("div",{className:"admonition admonition-shell"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,i.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,i.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-graphql-files-modules\n")))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"modulepathprefix"},(0,i.kt)("inlineCode",{parentName:"h3"},"modulePathPrefix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,i.kt)("p",null,"Allows specifying a module definition path prefix to provide distinction\nbetween generated types."),(0,i.kt)("h4",{id:"usage-examples"},"Usage Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'generates: src/api/user-service/queries.d.ts\n documents: src/api/user-service/queries.graphql\n plugins:\n   - typescript-graphql-files-modules\n config:\n   # resulting module definition path glob: "*\\/api/user-service/queries.graphql"\n   modulePathPrefix: "/api/user-service/"\n')),(0,i.kt)("h3",{id:"relativetocwd"},(0,i.kt)("inlineCode",{parentName:"h3"},"relativeToCwd")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"By default, only the filename is being used to generate TS module declarations. Setting this to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will generate it with a full path based on the CWD."),(0,i.kt)("h3",{id:"prefix"},(0,i.kt)("inlineCode",{parentName:"h3"},"prefix")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"*\\/")),(0,i.kt)("p",null,"By default, a wildcard is being added as prefix, you can change that to a custom prefix"),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string (values: DocumentNode, string)"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentNode")),(0,i.kt)("p",null,"By default, the named exports will have a type ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentNode"),'. Change this to "string" if you only use raw strings.'))}u.isMDXComponent=!0}}]);