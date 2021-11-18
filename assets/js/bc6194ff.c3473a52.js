"use strict";(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[5975],{35318:function(e,a,n){n.d(a,{Zo:function(){return m},kt:function(){return u}});var t=n(27378);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),s=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||p;return n?t.createElement(k,i(i({ref:a},m),{},{components:n})):t.createElement(k,i({ref:a},m))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36905:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var t=n(25773),r=n(30808),p=(n(27378),n(35318)),i=["components"],o={id:"java-resolvers",title:"Java Resolvers"},l=void 0,s={unversionedId:"plugins/java-resolvers",id:"plugins/java-resolvers",isDocsHomePage:!1,title:"Java Resolvers",description:"The java-resolvers plugin creates Java interfaces for the resolvers signature.",source:"@site/docs/plugins/java-resolvers.md",sourceDirName:"plugins",slug:"/plugins/java-resolvers",permalink:"/docs/plugins/java-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-resolvers.md",tags:[],version:"current",frontMatter:{id:"java-resolvers",title:"Java Resolvers"},sidebar:"sidebar",previous:{title:"Java",permalink:"/docs/plugins/java"},next:{title:"Java Apollo Android",permalink:"/docs/plugins/java-apollo-android"}},m=[{value:"Prepare your environment",id:"prepare-your-environment",children:[],level:2}],d={toc:m};function c(e){var a=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"java-resolvers")," plugin creates Java ",(0,p.kt)("inlineCode",{parentName:"p"},"interface"),"s for the resolvers signature."),(0,p.kt)("p",null,"It works with ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-java")," library and it uses it's ",(0,p.kt)("inlineCode",{parentName:"p"},"DataFetcher")," API."),(0,p.kt)("p",null,"You can use this plugin to generate interfaces and later implement them, this way you can always tell if one of the fields is missing a resolvers:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-java"},"import com.my.app.generated.Resolvers;\nimport com.my.app.models.User;\nimport graphql.schema.DataFetcher;\n\nexport class QueryResolvers implements Resolvers.Query {\n  public DataFetcher<String> id() {\n        return environment -> environment.<User>getSource().getId();\n    }\n}\n")),(0,p.kt)("h2",{id:"prepare-your-environment"},"Prepare your environment"),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},"To use the GraphQL Code Generator with Java, start by adding the ",(0,p.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/com.moowork.node"},"com.moowork.node")," Gradle plugin to your ",(0,p.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre"},'plugins {\n  id "com.moowork.node" version "1.3.1"\n}\n')),(0,p.kt)("p",{parentName:"p"},"Then, add the following in order to make sure you are running the code-generator on each build:"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre"},"build.dependsOn yarn\n")),(0,p.kt)("p",{parentName:"p"},"Then, create a ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," file in your project root, with the following content:"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "java-app",\n  "scripts": {\n    "postinstall": "graphql-codegen"\n  },\n  "dependencies": {\n    "graphql": "14.5.8",\n    "@graphql-codegen/cli": "1.7.0",\n    "@graphql-codegen/RELEVANT_PLUGIN": "1.7.0"\n  }\n}\n')),(0,p.kt)("blockquote",{parentName:"p"},(0,p.kt)("p",{parentName:"blockquote"},"Make sure to use the latest version of codegen and the plugins, and replace ",(0,p.kt)("inlineCode",{parentName:"p"},"RELEVANT_PLUGIN")," with your plugin name.")),(0,p.kt)("p",{parentName:"p"},"Then, create ",(0,p.kt)("inlineCode",{parentName:"p"},"codegen.yml")," file in your root directory, pointing to your schema, and add the plugins you need. For example:"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre"},"schema: src/main/resources/schema.graphqls\ngenerates:\n  src/main/java/com/my-name/my-app/generated/File.java:\n    - RELEVANT_PLUGIN\n")),(0,p.kt)("blockquote",{parentName:"p"},(0,p.kt)("p",{parentName:"blockquote"},"Replace ",(0,p.kt)("inlineCode",{parentName:"p"},"RELEVANT_PLUGIN")," with your plugin name.")),(0,p.kt)("p",{parentName:"p"},"Also, make sure you add the following to your ",(0,p.kt)("inlineCode",{parentName:"p"},".gitignore")," file:"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre"},"yarn.lock\nnode_modules\n")),(0,p.kt)("p",{parentName:"p"},"Now, run ",(0,p.kt)("inlineCode",{parentName:"p"},"gradle yarn")," to install the dependencies for the first time."),(0,p.kt)("p",{parentName:"p"},"Next time, the codegen will run automatically each time you run your Gradle build script.")),(0,p.kt)("p",null,(0,p.kt)("h2",{parentName:"p"},"Installation"),(0,p.kt)("img",{alt:"java-resolvers plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/java-resolvers?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,p.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,p.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,p.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/java-resolvers\n")))),(0,p.kt)("h2",{parentName:"p"},"API Reference"),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"package")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"p"},"Customize the Java package name. The default package name will be generated according to the output file path."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      package: custom.package.name\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"mappers")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"object")),(0,p.kt)("p",{parentName:"p"},"Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.\nThe default value is the values set by ",(0,p.kt)("inlineCode",{parentName:"p"},"defaultMapper")," configuration.\nYou can use a direct path to the package, or use ",(0,p.kt)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      mappers:\n        User: com.app.models#UserObject\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"defaultMapper")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"Object")),(0,p.kt)("p",{parentName:"p"},"Sets the default mapper value in case it's not specified by ",(0,p.kt)("inlineCode",{parentName:"p"},"mappers"),".\nYou can use a direct path to the package, or use ",(0,p.kt)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported.\nThe default mapper is Java's ",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      defaultMapper: my.app.models.BaseEntity\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"className")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,p.kt)("p",{parentName:"p"},"Allow you to customize the parent class name."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      className: MyResolvers\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"listType")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"Iterable")),(0,p.kt)("p",{parentName:"p"},"Allow you to customize the list type."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      listType: Map\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Makes scalars strict."),(0,p.kt)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",(0,p.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"any")),(0,p.kt)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,p.kt)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,p.kt)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,p.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,p.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,p.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,p.kt)("p",{parentName:"p"},"Available case functions in ",(0,p.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,p.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,p.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,p.kt)("p",{parentName:"p"},"Prefixes all the generated types."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,p.kt)("p",{parentName:"p"},"Suffixes all the generated types."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Automatically adds ",(0,p.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Will use ",(0,p.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,p.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option'),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"dedupeFragments")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Removes fragment duplicates for reducing data transfer.\nIt is done by removing sub-fragments imports from fragment definition\nInstead - all of them are imported to the Operation node."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"inlineFragmentTypes")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"InlineFragmentTypeOptions"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"inline")),(0,p.kt)("p",{parentName:"p"},'Whether fragment types should be inlined into other operations.\n"inline" is the default behavior and will perform deep inlining fragment types within operation type definitions.\n"combine" is the previous behavior that uses fragment type references without inlining the types (and might cauuse issues with deeply nested fragment that uses list types).')))}c.isMDXComponent=!0}}]);