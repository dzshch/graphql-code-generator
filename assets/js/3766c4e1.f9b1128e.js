"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[3464],{35318:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var a=n(27378);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),N=p,k=u["".concat(l,".").concat(N)]||u[N]||d[N]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function N(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(25773),p=n(30808),r=(n(27378),n(35318)),o=["components"],i={id:"flow-resolvers",title:"Flow Resolvers"},l=void 0,s={unversionedId:"plugins/flow-resolvers",id:"plugins/flow-resolvers",isDocsHomePage:!1,title:"Flow Resolvers",description:"{@import ../generated-config/flow-resolvers.md}",source:"@site/docs/plugins/flow-resolvers.md",sourceDirName:"plugins",slug:"/plugins/flow-resolvers",permalink:"/docs/plugins/flow-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/flow-resolvers.md",tags:[],version:"current",frontMatter:{id:"flow-resolvers",title:"Flow Resolvers"},sidebar:"sidebar",previous:{title:"Flow Types",permalink:"/docs/plugins/flow"},next:{title:"Flow Operations",permalink:"/docs/plugins/flow-operations"}},m=[{value:"Usage Example",id:"usage-example",children:[],level:2},{value:"Enum Resolvers",id:"enum-resolvers",children:[{value:"Usage Example",id:"usage-example-1",children:[],level:4}],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,p.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},"This plugin generates resolvers signature based on your ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQLSchema"),"."),(0,r.kt)("p",{parentName:"p"},"It generates types for your entire schema: types, input types, enum, interface, scalar and union."),(0,r.kt)("p",{parentName:"p"},"This plugin requires you to use ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/flow")," as well, because it depends on it's types."),(0,r.kt)("h2",{parentName:"p"},"Installation"),(0,r.kt)("img",{alt:"flow-resolvers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/flow-resolvers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,r.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,r.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/flow-resolvers\n")))),(0,r.kt)("h2",{parentName:"p"},"API Reference"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"addUnderscoreToArgsType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",{parentName:"p"},"Adds ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," to generated ",(0,r.kt)("inlineCode",{parentName:"p"},"Args")," types in order to avoid duplicate identifiers."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    addUnderscoreToArgsType: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"contextType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Use this configuration to set a custom type for your ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),", and it will\neffect all the resolvers, without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statement, or you can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"module#type")," syntax."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Custom Context Type"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    contextType: MyContext\n")),(0,r.kt)("h5",{parentName:"p"},"Custom Context Type"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    contextType: ./my-types#MyContext\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"fieldContextTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Array_1")),(0,r.kt)("p",{parentName:"p"},"Use this to set a custom type for a specific field ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),".\nIt will only affect the targeted resolvers.\nYou can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"Field.Path#ContextTypeName")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Field.Path#ExternalFileName#ContextTypeName")),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Custom Field Context Types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"plugins\n  config:\n    fieldContextTypes:\n      - MyType.foo#CustomContextType\n      - MyType.bar#./my-file#ContextTypeOne\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"rootValueType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Use this configuration to set a custom type for the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootValue"),", and it will\neffect resolvers of all root types (Query, Mutation and Subscription), without the need to override it using generics each time.\nIf you wish to use an external type and import it from another file, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," plugin\nand add the required ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statement, or you can use both ",(0,r.kt)("inlineCode",{parentName:"p"},"module#type")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Custom RootValue Type"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    rootValueType: MyRootValue\n")),(0,r.kt)("h5",{parentName:"p"},"Custom RootValue Type"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    rootValueType: ./my-types#MyRootValue\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"mapperTypeSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Adds a suffix to the imported names to prevent name clashes."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    mapperTypeSuffix: Model\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"mappers")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",{parentName:"p"},"Replaces a GraphQL type usage with a custom type, allowing you to return custom object from\nyour resolvers.\nYou can use both ",(0,r.kt)("inlineCode",{parentName:"p"},"module#type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," syntax."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Custom Context Type"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    mappers:\n      User: ./my-models#UserDbObject\n      Book: ./my-models#Collections#Book\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultMapper")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Allow you to set the default mapper when it's not being override by ",(0,r.kt)("inlineCode",{parentName:"p"},"mappers")," or generics.\nYou can specify a type name, or specify a string in ",(0,r.kt)("inlineCode",{parentName:"p"},"module#type")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"module#namespace#type")," format.\nThe default value of mappers it the TypeScript type generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," package."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Replace with any"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    defaultMapper: any\n")),(0,r.kt)("h5",{parentName:"p"},"Custom Base Object"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    defaultMapper: ./my-file#BaseObject\n")),(0,r.kt)("h5",{parentName:"p"},"Wrap default types with Partial"),(0,r.kt)("p",{parentName:"p"},'You can also specify a custom wrapper for the original type, without overriding the original generated types, use "{T}" to specify the identifier. (for flow, use ',(0,r.kt)("inlineCode",{parentName:"p"},"$Shape<{T}>"),")"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"plugins\n  config:\n    defaultMapper: Partial<{T}>\n")),(0,r.kt)("h5",{parentName:"p"},"Allow deep partial with ",(0,r.kt)("inlineCode",{parentName:"h5"},"utility-types")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'plugins\n plugins:\n   - "typescript"\n   - "typescript-resolvers"\n   - add:\n       content: "import { DeepPartial } from \'utility-types\';"\n config:\n   defaultMapper: DeepPartial<{T}>\n')),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"avoidOptionals")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidOptionalsConfig | boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"This will cause the generator to avoid using optionals (",(0,r.kt)("inlineCode",{parentName:"p"},"?"),"),\nso all field resolvers must be implemented in order to avoid compilation errors."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Override all definition types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   avoidOptionals: true\n")),(0,r.kt)("h5",{parentName:"p"},"Override only specific definition types"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n config:\n   avoidOptionals:\n     field: true\n     inputValue: true\n     object: true\n     defaultValue: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"showUnusedMappers")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"Warns about unused mappers."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\npath/to/file.ts:\n plugins:\n   - typescript\n   - typescript-resolvers\n config:\n   showUnusedMappers: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"enumValues")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"EnumValuesMap")),(0,r.kt)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema, supported\nin this plugin because of the need for integration with ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," package.\nSee documentation under ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," plugin for more information and examples."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"resolverTypeWrapperSignature")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<T> | T")),(0,r.kt)("p",{parentName:"p"},"Allow you to override ",(0,r.kt)("inlineCode",{parentName:"p"},"resolverTypeWrapper")," definition."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"federation")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Supports Apollo Federation"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"enumPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",{parentName:"p"},"Allow you to disable prefixing for generated enums, works in combination with ",(0,r.kt)("inlineCode",{parentName:"p"},"typesPrefix"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("h5",{parentName:"p"},"Disable enum prefixes"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  config:\n    typesPrefix: I\n    enumPrefix: false\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"optionalResolveType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"__resolveType")," field as optional field."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"immutableTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Generates immutable types by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly")," to properties and uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadonlyArray"),"."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"namespacedImportName")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"''")),(0,r.kt)("p",{parentName:"p"},"Prefixes all GraphQL related generated types with that value, as namespaces import.\nYou can use this featuere to allow seperation of plugins to different files."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"resolverTypeSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,r.kt)("p",{parentName:"p"},"Suffix we add to each generated type resolver."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"allResolversTypeName")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,r.kt)("p",{parentName:"p"},"The type name to use when exporting all resolvers signature as unified type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"internalResolversPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"'__'")),(0,r.kt)("p",{parentName:"p"},"Defines the prefix value used for ",(0,r.kt)("inlineCode",{parentName:"p"},"__resolveType")," and and ",(0,r.kt)("inlineCode",{parentName:"p"},"__isTypeOf")," resolvers.\nIf you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"mercurius-js"),", please set this field to empty string for better compatiblity."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"onlyResolveTypeForInterfaces")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Turning this flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," will generate resolver siganture that has only ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveType")," for interfaces, forcing developers to write inherited type resolvers in the type itself."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Makes scalars strict."),(0,r.kt)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,r.kt)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,r.kt)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,r.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,r.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,r.kt)("p",{parentName:"p"},"Available case functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Prefixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Suffixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Automatically adds ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Will use ",(0,r.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Removes fragment duplicates for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - all of them are imported to the Operation node."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"inlineFragmentTypes")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"InlineFragmentTypeOptions"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")),(0,r.kt)("p",{parentName:"p"},'Whether fragment types should be inlined into other operations.\n"inline" is the default behavior and will perform deep inlining fragment types within operation type definitions.\n"combine" is the previous behavior that uses fragment type references without inlining the types (and might cauuse issues with deeply nested fragment that uses list types).')),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Quick Start with ",(0,r.kt)("inlineCode",{parentName:"h5"},"flow-resolvers"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find ",(0,r.kt)("a",{parentName:"p",href:"https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen"},"a blog post we wrote about using and customizing this plugin here")," , it refers to ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript-resolvers")," but everything there is relevant to ",(0,r.kt)("inlineCode",{parentName:"p"},"flow-resolvers")," as well."))),(0,r.kt)("h2",{id:"enum-resolvers"},"Enum Resolvers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/"},"Apollo-Server")," and schemas built with ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-tools.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-tools"))," supports creating resolvers for GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),"s. "),(0,r.kt)("p",null,"This is helpful because you can have internal values that are different from the public enum values, and you can use the internal values in your resolvers. "),(0,r.kt)("p",null,"Codegen allows you to specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"mappers")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues")," to map enums in your resolvers, and if you are using it for enums, you'll get a resolver signature for the enum resolvers as well."),(0,r.kt)("h4",{id:"usage-example-1"},"Usage Example"),(0,r.kt)("p",null,"With the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  favoriteColor: Color!\n}\n\ntype Color {\n  RED,\n  BLUE\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"schema: schema.graphql\ngenerates:\n  ./resolvers-types.js:\n    config:\n      enumValues:\n        Colors: ./enums#ColorsCode\n    plugins:\n      - flow\n      - flow-resolvers\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// in your enums.js\nexport enum ColorsCode {\n  MY_RED = '#FF0000',\n  MY_BLUE = '#0000FF',\n}\n\n// in your resolvers.js\nimport type { Resolvers } from './resolvers-types';\nimport { ColorsCode } from './enums';\n\nconst resolvers: Resolvers = {\n  Colors: {\n    RED: ColorsCode.MY_RED,\n    BLUE: ColorsCode.MY_BLUE,\n  },\n  Query: {\n    favoriteColor: () => ColorsCode.MY_RED, // Now you cn return this, and it will be mapped to your actual GraphQL enum\n  }\n}\n")),(0,r.kt)("p",null,"You can also define the same with explicit enum values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"schema: schema.graphql\ngenerates:\n  ./resolvers-types.js:\n    config:\n      enumValues:\n        Colors: \n          RED: '#FF0000'\n          BLUE: '#0000FF'\n    plugins:\n      - flow\n      - flow-resolvers\n")),(0,r.kt)("p",null,"Or, with ",(0,r.kt)("inlineCode",{parentName:"p"},"mappers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"schema: schema.graphql\ngenerates:\n  ./resolvers-types.js:\n    config:\n      mappers:\n        Colors: ./enums#ColorsCode\n    plugins:\n      - flow\n      - flow-resolvers\n")))}u.isMDXComponent=!0}}]);