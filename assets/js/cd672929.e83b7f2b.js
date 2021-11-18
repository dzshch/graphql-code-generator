"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[2424],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],p={id:"typed-document-node",title:"TypedDocumentNode"},s=void 0,c={unversionedId:"plugins/typed-document-node",id:"plugins/typed-document-node",isDocsHomePage:!1,title:"TypedDocumentNode",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typed-document-node.md",sourceDirName:"plugins",slug:"/plugins/typed-document-node",permalink:"/docs/plugins/typed-document-node",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typed-document-node.md",tags:[],version:"current",frontMatter:{id:"typed-document-node",title:"TypedDocumentNode"},sidebar:"sidebar",previous:{title:"TypeScript Resolvers",permalink:"/docs/plugins/typescript-resolvers"},next:{title:"Apollo-Client Helpers",permalink:"/docs/plugins/typescript-apollo-client-helpers"}},l=[{value:"Usage example",id:"usage-example",children:[],level:3}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("div",{parentName:"p",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage Requirements")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",(0,o.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"mutation")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"subscription")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fragment"),") set as ",(0,o.kt)("inlineCode",{parentName:"p"},"documents: ...")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen.yml"),"."),(0,o.kt)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),(0,o.kt)("p",null,"This plugins generates a ready-to-use ",(0,o.kt)("inlineCode",{parentName:"p"},"TypedDocumentNode")," (a combination of pre-compiled ",(0,o.kt)("inlineCode",{parentName:"p"},"DocumentNode")," and the TypeScript signature it represents)."),(0,o.kt)("p",null,"For information about the setup and usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"TypedDocumentNode"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-typed-document-node"},"please refer to the library's documentation"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This plugins requires ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript-operations")," as siblings.")),(0,o.kt)("h3",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'schema: SCHEMA_FILE_OR_ENDPOINT_HERE\ndocuments: "./src/**/*.graphql"\ngenerates:\n  ./src/graphql-operations.ts:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typed-document-node\n')),(0,o.kt)("p",null,"The example about will generate ",(0,o.kt)("inlineCode",{parentName:"p"},"TypedDocumentNode")," with the needed types built-in, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Represents the variables type of the operation - generated by `typescript` + `typescript-operations` plugins\nexport type RatesQueryVariables = Exact<{\n  currency: Scalars[\'String\'];\n}>;\n\n// Represents the result type of the operation - generated by `typescript` + `typescript-operations` plugins\nexport type RatesQuery = (\n  { __typename?: \'Query\' }\n  & { rates?: Maybe<Array<Maybe<(\n    { __typename?: \'ExchangeRate\' }\n    & Pick<ExchangeRate, \'currency\' | \'rate\'>\n  )>>> }\n);\n\n// Generated by this plugin - creates a pre-compiled `DocumentNode` and passes result type and variables type as generics\nexport const ratesQuery: TypedDocumentNode<RatesQuery, RatesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{ ... ]};\n')))}d.isMDXComponent=!0}}]);