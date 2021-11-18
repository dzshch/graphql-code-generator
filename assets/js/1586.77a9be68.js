(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[1586,3340],{48860:function(){},43340:function(e,n,t){"use strict";t.r(n),t.d(n,{plugin:function(){return r}});const i=["prepend","content","append"],r=async(e,n,t)=>{const r=t.placement||"prepend",s=t.content;if(!i.includes(r))throw Error(`Configuration provided for 'add' plugin is invalid: value of 'placement' field is not valid (valid values are: ${i.join(", ")})`);if(!s)throw Error("Configuration provided for 'add' plugin is invalid: \"content\" is missing!");return{content:null,[r]:Array.isArray(s)?s:[s]}},s={plugin:r};n.default=s},1586:function(e,n,t){"use strict";t.r(n),t.d(n,{preset:function(){return s}});var i=t(50408),r=t(43340);const s={buildGeneratesSection:e=>{if(!e.presetConfig.typesPath)throw new Error('Preset "import-types" requires you to specify "typesPath" configuration and point it to your base types file (generated by "typescript" plugin)!');const n=e.presetConfig.importTypesNamespace||"Types",t={...e.pluginMap,add:r.default},s=[...e.plugins],o={...e.config,namespacedImportName:n,importOperationTypesFrom:n,externalFragments:[]};return e.documents.map((t=>{if((0,i.L5)(t.document,o.externalFragments.map((e=>e.name)),e.schemaAst)){const t=e.config.useTypeImports?"import type":"import";s.unshift({add:{content:`${t} * as ${n} from '${e.presetConfig.typesPath}';\n`}})}})),[{filename:e.baseOutputDir,plugins:s,pluginMap:t,config:o,schema:e.schema,schemaAst:e.schemaAst,documents:e.documents}]}};n.default=s},50408:function(e,n,t){"use strict";var i;t.d(n,{u3:function(){return N},tF:function(){return I},E1:function(){return E},f4:function(){return F},Wp:function(){return m},LY:function(){return k},Ed:function(){return h},L5:function(){return y},fX:function(){return O},NT:function(){return T},o9:function(){return v},IF:function(){return p}});var r=t(48860),s=t(27061),o=t(44880),a=t(1346),l=t(43165),u=t(57554),c=t(65449),d=t(15409),f=t(37358);function p(e){if("function"==typeof e)return e;let n,[a,l]=e.split("#");if("change-case"===a&&(a="change-case-all"),"change-case-all"===a)n=i||(i=t.t(o,2));else{if(n=(0,r.createRequire)((0,s.cwd)()+"/index.js")(a),!(l in n)&&"function"!=typeof n)throw new Error(`${l} couldn't be found in module ${a}!`)}return n[l]||n}function h(e){return"object"==typeof e&&e.hasOwnProperty("content")}function m(e){return n=e,(0,a.HG)(n)||(0,a.zM)(n)?m(e.ofType):e;var n}function v(e){return(0,a.zM)(e)?e.ofType:e}function g(e){return!(0,a.zM)(e)||!(!(0,a.HG)(e)&&!(0,a.zM)(e))&&g(e.ofType)}function y(e,n,t){let i=0;const r=[];return(0,l.Vn)(e,{SelectionSet:{enter(e,i,s,o){if(o.find((e=>e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value))))return;const a=e.selections||[];if(t&&a.length>0){const e=(()=>{if(s.kind===u.h.FRAGMENT_DEFINITION)return s.typeCondition.name.value;if(s.kind===u.h.FIELD){const e=r[r.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");const n=e.getFields()[s.name.value];if(!n)throw new Error(`Unable to find field "${s.name.value}" on type "${e}"!`);return m(n.type).name}if(s.kind===u.h.OPERATION_DEFINITION){if("query"===s.operation)return t.getQueryType().name;if("mutation"===s.operation)return t.getMutationType().name;if("subscription"===s.operation)return t.getSubscriptionType().name}else if(s.kind===u.h.INLINE_FRAGMENT)return s.typeCondition?s.typeCondition.name.value:r[r.length-1].name;return null})();r.push(t.getType(e))}},leave(e){const n=e.selections||[];t&&n.length>0&&r.pop()}},Field:{enter:(e,s,o,l,c)=>{if(e.name.value.startsWith("__"))return;if(c.find((e=>e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value))))return;const d=e.selectionSet&&e.selectionSet.selections||[],f=d.filter((e=>e.kind===u.h.FRAGMENT_SPREAD&&!n.includes(e.name.value)));if((0===d.length||f.length>0)&&i++,t){const n=r[r.length-1];if(n&&(0,a.lp)(n)){const t=n.getFields()[e.name.value];if(!t)throw new Error(`Unable to find field "${e.name.value}" on type "${n}"!`);g(t.type)&&i++}}}},VariableDefinition:{enter:(e,t,r,s,o)=>{o.find((e=>e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)))||i++}},InputValueDefinition:{enter:(e,t,r,s,o)=>{o.find((e=>e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)))||i++}}}),i>0}const F=(0,c.Qc)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function E(e){return(0,f.gf)(e,{[f.h0.OBJECT_TYPE]:n=>{if(S(n,e)){const e=n.toConfig();return e.fields={[_]:{type:n},...e.fields},new a.h6(e)}return n}})}function T(e){return(0,f.gf)(e,{[f.h0.QUERY]:e=>{const n=e.toConfig();return delete n.fields._entities,delete n.fields._service,new a.h6(n)},[f.h0.UNION_TYPE]:e=>{const n=e.name;return"_Entity"===n||"_Any"===n?null:e},[f.h0.OBJECT_TYPE]:e=>"_Service"===e.name?null:e})}const _="__resolveReference";class N{constructor({enabled:e,schema:n}){this.enabled=!1,this.enabled=e,this.schema=n,this.providesMap=this.createMapOfProvides()}filterTypeNames(e){return this.enabled?e.filter((e=>"_FieldSet"!==e)):e}filterFieldNames(e){return this.enabled?e.filter((e=>e!==_)):e}skipDirective(e){return this.enabled&&["external","requires","provides","key"].includes(e)}skipScalar(e){return this.enabled&&"_FieldSet"===e}skipField({fieldNode:e,parentType:n}){return!!(this.enabled&&(0,a.lp)(n)&&S(n,this.schema))&&this.isExternalAndNotProvided(e,n)}isResolveReferenceField(e){const n="string"==typeof e.name?e.name:e.name.value;return this.enabled&&n===_}transformParentType({fieldNode:e,parentType:n,parentTypeSignature:t}){if(this.enabled&&(0,a.lp)(n)&&S(n,this.schema)&&(function(e,n){var t;const i=(0,a.lp)(e)?e.astNode||(0,f.IW)(e,n):e;return null===(t=i.fields)||void 0===t?void 0:t.some((e=>b("external",e).length))}(n,this.schema)||e.name.value===_)){const i=b("key",n);if(i.length){const r=[`{ __typename: '${n.name}' } &`],s=b("requires",e).map(this.extractKeyOrRequiresFieldSet),o=this.translateFieldSet(d({},...s),t),a=i.map((e=>{const n=this.extractKeyOrRequiresFieldSet(e);return this.translateFieldSet(n,t)})),[l,u]=a.length>1?["(",")"]:["",""];return r.push([l,a.join(" | "),u].join("")),s.length&&r.push(`& ${o}`),r.join(" ")}}return t}isExternalAndNotProvided(e,n){return this.isExternal(e)&&!this.hasProvides(n,e)}isExternal(e){return b("external",e).length>0}hasProvides(e,n){const t=this.providesMap[(0,a.lp)(e)?e.name:e.name.value];return!(!t||!t.length)&&t.includes(n.name.value)}translateFieldSet(e,n){return`GraphQLRecursivePick<${n}, ${JSON.stringify(e)}>`}extractKeyOrRequiresFieldSet(e){const n=e.arguments.find((e=>"fields"===e.name.value)).value.value;return O((0,c.Qc)(`{${n}}`),{leave:{SelectionSet:e=>e.selections.reduce(((e,n)=>(e[n.name]=n.selection,e)),{}),Field:e=>({name:e.name.value,selection:!e.selectionSet||e.selectionSet}),Document:e=>e.definitions.find((e=>"OperationDefinition"===e.kind&&"query"===e.operation)).selectionSet}})}extractProvidesFieldSet(e){const n=e.arguments.find((e=>"fields"===e.name.value)).value.value;if(/[{}]/gi.test(n))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return n.split(/\s+/g)}createMapOfProvides(){const e={};return Object.keys(this.schema.getTypeMap()).forEach((n=>{const t=this.schema.getType(n);(0,a.lp)(t)&&Object.values(t.getFields()).forEach((n=>{const t=b("provides",n.astNode).map(this.extractProvidesFieldSet).reduce(((e,n)=>[...e,...n]),[]),i=m(n.type);e[i.name]||(e[i.name]=[]),e[i.name].push(...t)}))})),e}}function S(e,n){const{name:{value:t},directives:i}=(0,a.lp)(e)?(0,f.IW)(e,n):e,r=!(0,f.K)(n).has(t),s=!t.startsWith("__"),o=i.some((e=>"key"===e.name.value));return r&&s&&o}function b(e,n){var t;let i;return i=(0,a.lp)(n)?n.astNode:n,(null===(t=null==i?void 0:i.directives)||void 0===t?void 0:t.filter((n=>n.name.value===e)))||[]}class I extends Error{constructor(e,n,t){super(e),this.message=e,this.details=n,this.source=t,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace(this,I)}}const k=(0,f.mQ)(f.HA);function O(e,{enter:n,leave:t,...i}){if("object"==typeof n)for(const r in n)i[r]=i[r]||{},i[r].enter=n[r];if("object"==typeof t)for(const r in t)i[r]=i[r]||{},i[r].leave=t[r];return(0,l.Vn)(e,i)}}}]);