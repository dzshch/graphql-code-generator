"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[530],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,g=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,p(p({ref:t},s),{},{components:a})):n.createElement(g,p({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38662:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),p=["components"],i={id:"index",title:"All Plugins"},o=void 0,d={unversionedId:"plugins/index",id:"plugins/index",isDocsHomePage:!1,title:"All Plugins",description:"The general purpose of GraphQL Code Generator is to parse GraphQL syntax, transform it into an AST and then output it into desired formats which can vary. Since there can potentially be an infinite number of formats, we can't predict them all. However, some formats are more likely to be used, thus, we've prepared pre-defined code generation plugins which are built for these formats.",source:"@site/docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/index",permalink:"/docs/plugins/index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"All Plugins"},sidebar:"sidebar",previous:{title:"Further Reading",permalink:"/docs/getting-started/further-reading"},next:{title:"TypeScript",permalink:"/docs/plugins/typescript"}},s=[{value:"Available Plugins",id:"available-plugins",children:[],level:2},{value:"How to use Plugins",id:"how-to-use-plugins",children:[],level:2},{value:"Configure Plugins",id:"configure-plugins",children:[],level:2}],m={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The general purpose of GraphQL Code Generator is to parse GraphQL syntax, transform it into an AST and then output it into desired formats which can vary. Since there can potentially be an infinite number of formats, we can't predict them all. However, some formats are more likely to be used, thus, we've prepared pre-defined code generation plugins which are built for these formats."),(0,l.kt)("h2",{id:"available-plugins"},"Available Plugins"),(0,l.kt)("p",null,"Below is a table that lists all available plugins which can be installed via NPM, along with a short description. If you're looking for anything specific, we might already have the solution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Package Name & Docs"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate types for TypeScript - those are usually relevant for both client side and server side code"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-operations")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate client specific TypeScript types (query, mutation, subscription, fragment)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-operations"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-operations")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-resolvers")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript signature for server-side resolvers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-resolvers"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-resolvers")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typed-document-node")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate typed ",(0,l.kt)("inlineCode",{parentName:"td"},"DocumentNode")," to by used with supporting libraries"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typed-document-node"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typed-document-node")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-apollo-client-helpers")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates helpers for better integration of Apollo-Client v3 and TypeScript"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-apollo-client-helpers"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-apollo-client-helpers")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-react-query")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates ready-to-use React Hooks for ",(0,l.kt)("inlineCode",{parentName:"td"},"react-query")," library"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"./typescript-react-query"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-react-query")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-apollo-angular")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Apollo-Angular Services"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-apollo-angular"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-apollo-angular")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-react-apollo")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and React-Apollo Components"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-react-apollo"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-react-apollo")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-vue-apollo")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Vue Apollo composition functions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-vue-apollo"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-vue-apollo")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-svelte-apollo")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Apollo reactive queries"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-svelte-apollo"},(0,l.kt)("inlineCode",{parentName:"a"},"graphql-codegen-svelte-apollo")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-vue-apollo-smart-ops")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Vue Apollo Smart Query options and mutation functions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-vue-apollo-smart-ops"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-vue-apollo-smart-ops")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-urql")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Urql React Components"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-urql"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-urql")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-vue-urql")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Urql Vue composition functions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-vue-urql"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-vue-urql")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-graphql-request")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates fully-typed ready-to-use SDK for graphql-request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-graphql-request"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-graphql-request")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-generic-sdk")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates fully-typed generic SDK you can hook into any client."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-generic-sdk"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-generic-sdk")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-stencil-apollo")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types, and Stencil Apollo Components"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-stencil-apollo"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-stencil-apollo")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-mongodb")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate server-side TypeScript types, with MongoDB models"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-mongodb"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-mongodb")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-graphql-files-modules")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate ",(0,l.kt)("inlineCode",{parentName:"td"},"declare module")," for ",(0,l.kt)("inlineCode",{parentName:"td"},".graphql")," files"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-graphql-files-modules"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-graphql-files-modules")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-document-nodes")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript source files files that use ",(0,l.kt)("inlineCode",{parentName:"td"},"graphql-tag")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-document-nodes"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-document-nodes")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-type-graphql")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate TypeScript types compatible with TypeGraphQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-type-graphql"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-type-graphql")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"typescript-oclif")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate commands for oclif command line interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/typescript-oclif"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/typescript-oclif")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"add")),(0,l.kt)("td",{parentName:"tr",align:null},"Add any string that you wish to the output file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/add"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/add")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schema-ast")),(0,l.kt)("td",{parentName:"tr",align:null},"Prints the merged schemas as AST"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/schema-ast"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/schema-ast")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fragment-matcher")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates an introspection result with only Unions and Interfaces"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/fragment-matcher"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/fragment-matcher")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"named-operations-object")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates a type-safe list of all your available GraphQL operations and fragments"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/named-operations-object"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/named-operations-object")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"introspection")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates an introspection result"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/introspection"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/introspection")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"time")),(0,l.kt)("td",{parentName:"tr",align:null},"Add the generation time to the output file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/time"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/time")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flow")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate types for Flow type based on your GraphQL schema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/flow"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/flow")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flow-resolvers")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate resolvers signature for Flow"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/flow-resolvers"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/flow-resolvers")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flow-operations")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate types for Flow type based on your GraphQL operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/flow-operations"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/flow-operations")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reason-client")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate ReasonML types based on your GraphQL schema for use in a client application"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/reason-client"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/reason-client")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kotlin")),(0,l.kt)("td",{parentName:"tr",align:null},"generates Kotlin backend ",(0,l.kt)("inlineCode",{parentName:"td"},"classes")," for Enums and Input types"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/kotlin"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/kotlin")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"java")),(0,l.kt)("td",{parentName:"tr",align:null},"generates Java backend ",(0,l.kt)("inlineCode",{parentName:"td"},"classes")," for Enums and Input types"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/java"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/java")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"java-resolvers")),(0,l.kt)("td",{parentName:"tr",align:null},"generates Java backend resolvers signature"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/java-resolvers"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/java-resolvers")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"java-apollo-android")),(0,l.kt)("td",{parentName:"tr",align:null},"generates Apollo Android parsers and mappers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/plugins/java-apollo-android"},(0,l.kt)("inlineCode",{parentName:"a"},"@graphql-codegen/java-apollo-android")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scala Plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"generates types for schema and operations, maintained by ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/aappddeevv"},(0,l.kt)("inlineCode",{parentName:"a"},"aappddeevv"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/aappddeevv/graphql-codegen-scala"},(0,l.kt)("inlineCode",{parentName:"a"},"@aappddeevvv/graphql-code-scala-operations"),",",(0,l.kt)("inlineCode",{parentName:"a"},"@aappddeevvv/graphql-code-scala-schema")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apollo-typed-documents")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates ",(0,l.kt)("inlineCode",{parentName:"td"},"declare module")," for ",(0,l.kt)("inlineCode",{parentName:"td"},".graphql")," files with generic ",(0,l.kt)("inlineCode",{parentName:"td"},"TypedDocumentNode<TVariables, TData>"),". Also generates helper function to create mocks for Apollo Client ",(0,l.kt)("inlineCode",{parentName:"td"},"MockedProvider"),". Maintained by ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rubengrill/apollo-typed-documents"},(0,l.kt)("inlineCode",{parentName:"a"},"rubengrill"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rubengrill/apollo-typed-documents"},(0,l.kt)("inlineCode",{parentName:"a"},"apollo-typed-documents/lib/codegenTypedDocuments"),",",(0,l.kt)("inlineCode",{parentName:"a"},"apollo-typed-documents/lib/codegenApolloMock")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@homebound/graphql-typescript-factories")),(0,l.kt)("td",{parentName:"tr",align:null},"Generates factory methods for use in client-side GraphQL tests that are stubbing/mocking out GraphQL responses."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/homebound-team/graphql-typescript-factories"},(0,l.kt)("inlineCode",{parentName:"a"},"homebound-team/graphql-typescript-factories")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@homebound/graphql-typescript-simple-resolvers")),(0,l.kt)("td",{parentName:"tr",align:null},"generates types for implementing an Apollo-/graphql-style implementation in TypeScript."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/homebound-team/graphql-typescript-simple-resolvers"},(0,l.kt)("inlineCode",{parentName:"a"},"homebound-team/graphql-typescript-simple-resolvers")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@homebound/graphql-typescript-resolver-scaffolding")),(0,l.kt)("td",{parentName:"tr",align:null},"The generated scaffolds are extremely simple, and really just placeholders for your business logic and tests."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/homebound-team/graphql-typescript-resolver-scaffolding"},(0,l.kt)("inlineCode",{parentName:"a"},"homebound-team/graphql-typescript-resolver-scaffolding")))))),(0,l.kt)("p",null,"In addition, you can build your own code generating plugins based on your specific needs. For more information, check ",(0,l.kt)("a",{parentName:"p",href:"/docs/custom-codegen/index"},"this doc page"),"."),(0,l.kt)("h2",{id:"how-to-use-plugins"},"How to use Plugins"),(0,l.kt)("p",null,"To use a plugin, install its package from ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),", then add it to your YML config file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"schema: my-schema.graphql\ngenerates:\n  output.ts:\n    - plugin-name-here\n")),(0,l.kt)("h2",{id:"configure-plugins"},"Configure Plugins"),(0,l.kt)("p",null,"To pass configuration to a plugin, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"schema: my-schema.graphql\ngenerates:\n  output.ts:\n    - plugin-name-here:\n        configKey: configValue\n")),(0,l.kt)("p",null,"You can also pass the same configuration value to multiple plugins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"schema: my-schema.graphql\ngenerates:\n  output.ts:\n    config:\n      configKey: configValue\n    plugins:\n      - plugin1-name-here\n      - plugin2-name-here\n")),(0,l.kt)("p",null,"You can find the supported configuration for each plugin in its page / ",(0,l.kt)("inlineCode",{parentName:"p"},"README")," file."))}u.isMDXComponent=!0}}]);