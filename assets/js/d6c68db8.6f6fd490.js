"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[5943],{35318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||p;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=n(25773),r=n(30808),p=(n(27378),n(35318)),i=["components"],o={id:"near-operation-file",title:"near-operation-file"},s=void 0,l={unversionedId:"presets/near-operation-file",id:"presets/near-operation-file",isDocsHomePage:!1,title:"near-operation-file",description:"This preset generates a file per each operation file.",source:"@site/docs/presets/near-operation-file.md",sourceDirName:"presets",slug:"/presets/near-operation-file",permalink:"/docs/presets/near-operation-file",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/near-operation-file.md",tags:[],version:"current",frontMatter:{id:"near-operation-file",title:"near-operation-file"},sidebar:"sidebar",previous:{title:"gql-tag-operations",permalink:"/docs/presets/gql-tag-operations"},next:{title:"import-types",permalink:"/docs/presets/import-types"}},m=[{value:"Example",id:"example",children:[],level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This preset generates a file per each operation file."),(0,p.kt)("p",null,(0,p.kt)("h2",{parentName:"p"},"Installation"),(0,p.kt)("img",{alt:"near-operation-file-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/near-operation-file-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,p.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,p.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,p.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/near-operation-file-preset\n")))),(0,p.kt)("h2",{parentName:"p"},"API Reference"),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"baseTypesPath")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"p"},"Required, should point to the base schema types file.\nThe key of the output is used a the base path for this file."),(0,p.kt)("p",{parentName:"p"},"If you wish to use an NPM package or a local workspace package, make sure to prefix the package name with ",(0,p.kt)("inlineCode",{parentName:"p"},"~"),"."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n plugins:\n   - typescript-operations\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"importAllFragmentsFrom")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string,object")),(0,p.kt)("p",{parentName:"p"},"Overrides all external fragments import types by using a specific file path or a package name."),(0,p.kt)("p",{parentName:"p"},"If you wish to use an NPM package or a local workspace package, make sure to prefix the package name with ",(0,p.kt)("inlineCode",{parentName:"p"},"~"),"."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   importAllFragmentsFrom: '~types'\n plugins:\n   - typescript-operations\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"extension")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},".generated.ts")),(0,p.kt)("p",{parentName:"p"},"Optional, sets the extension for the generated files. Use this to override the extension if you are using plugins that requires a different type of extensions (such as ",(0,p.kt)("inlineCode",{parentName:"p"},"typescript-react-apollo"),")"),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   extension: .generated.tsx\n plugins:\n   - typescript-operations\n   - typescript-react-apollo\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"cwd")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"process.cwd()")),(0,p.kt)("p",{parentName:"p"},"Optional, override the ",(0,p.kt)("inlineCode",{parentName:"p"},"cwd")," of the execution. We are using ",(0,p.kt)("inlineCode",{parentName:"p"},"cwd")," to figure out the imports between files. Use this if your execution path is not your project root directory."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   cwd: /some/path\n plugins:\n   - typescript-operations\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"folder")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"''")),(0,p.kt)("p",{parentName:"p"},"Optional, defines a folder, (Relative to the source files) where the generated files will be created."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   folder: __generated__\n plugins:\n   - typescript-operations\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"importTypesNamespace")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"Types")),(0,p.kt)("p",{parentName:"p"},"Optional, override the name of the import namespace used to import from the ",(0,p.kt)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\nsrc/:\n preset: near-operation-file\n presetConfig:\n   baseTypesPath: types.ts\n   importTypesNamespace: SchemaTypes\n plugins:\n   - typescript-operations\n"))),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("p",null,"In order to use this preset, you need to add 2 outputs to your ",(0,p.kt)("inlineCode",{parentName:"p"},"codegen.yml")," file:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"The first, is the base types, generated by ",(0,p.kt)("inlineCode",{parentName:"li"},"typescript")," plugin."),(0,p.kt)("li",{parentName:"ul"},"The second, is the one that in charge of generating types per operation.")),(0,p.kt)("p",null,"This following example generates operation typings and ",(0,p.kt)("inlineCode",{parentName:"p"},"react-apollo")," component per each operation file, near the original file of the operation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"schema: src/schema.json\ndocuments: 'src/**/*.graphql'\ngenerates:\n  src/types.ts:\n    - typescript\n  src/:\n    preset: near-operation-file\n    presetConfig:\n      extension: .generated.tsx\n      baseTypesPath: types.ts\n    plugins:\n      - typescript-operations\n      - typescript-react-apollo\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"How does it work?")),(0,p.kt)("p",null,"The first output is simple, and it only generates the base schema types to ",(0,p.kt)("inlineCode",{parentName:"p"},"src/types.ts"),"."),(0,p.kt)("p",null,"The second output refers to the base directory of the project (",(0,p.kt)("inlineCode",{parentName:"p"},"./src/"),") and it uses the ",(0,p.kt)("inlineCode",{parentName:"p"},"near-operation-file")," preset to generate a file per each operation found under ",(0,p.kt)("inlineCode",{parentName:"p"},"./src/**/*.graphql"),"."),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"presetConfig")," section contains a key for setting the output files extension (in our case, ",(0,p.kt)("inlineCode",{parentName:"p"},".generated.tsx")," because of ",(0,p.kt)("inlineCode",{parentName:"p"},"react-apollo"),"), and the location of the base schema types file we created in the first section of this file (it will look for it in the base directory)."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Note: If you're loading your ",(0,p.kt)("inlineCode",{parentName:"p"},"documents")," from files with the same extension as the generated files, make sure the glob you use excludes the generated files. For example, if your original glob was ",(0,p.kt)("inlineCode",{parentName:"p"},"src/**/*.{ts,tsx}"),", use ",(0,p.kt)("inlineCode",{parentName:"p"},"src/**/!(*.generated).{ts,tsx}")," instead.")))}d.isMDXComponent=!0}}]);