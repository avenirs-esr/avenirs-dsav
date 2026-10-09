import{A as T}from"./AvIcon-itid32EZ.js";import{A as Be}from"./AvTooltip-t-xca0NX.js";import{B as qe,u as $,ai as De,ag as e,$ as i,n as v,F as Te,a5 as Ie,l as g,m as V,k as f,r as ve,ab as I,L as he,a6 as M,j as D,aq as x,P as Pe,a8 as Ce,aj as Le,ae as Se,K as G,a1 as ze,O as $e,a4 as Oe}from"./iframe-Bv_rUoCq.js";import{_ as ke}from"./AvMessage-D6H3m4DC.js";import{A as je,g as We}from"./AvFilePill-BdG1n2Uo.js";import{M as z}from"./icons-Dyb4xUo3.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Ke}from"./AvButton-tRwtxnl8.js";import{i as J,g as Ye}from"./utils-BIlgUrNJ.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-BMpBFcGV.js";import"./use-text-truncation-BQ6hQAek.js";import"./string-BZgCOP9D.js";function Ge(t,n){return n?n.split(",").map(o=>o.trim().toLowerCase()).some(o=>o.startsWith(".")?t.name.toLowerCase().endsWith(o):o.includes("/")?t.type===o||t.type.startsWith(`${o.split("/")[0]}/`):!1):!0}function Je(t,n){const s=typeof n=="function"?n(t):n;return s===void 0||s<=0?!0:t.size<=s*1024*1024}function Qe(t,n,s){return t?n===void 0||n<=0?1/0:Math.max(n-s,0):1}const Ne=Symbol("AvFileUploadContext");function Ve(){const t=qe(Ne);if(!t)throw new Error("useFileUploadContext must be used within AvFileUpload component");return t}const Xe={class:"av-compact-upload"},Ze={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},en={class:"b2-regular"},nn=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],an={class:"caption-light"},P=$({__name:"AvFileUploadCompact",setup(t){De(l=>({v7035300c:e(n).maxWidth}));const{props:n,modelValue:s,realId:o,acceptTypes:p,uploadLabelAttrs:A,onChange:h,onClear:U}=Ve(),c=D(()=>{var l;return(l=s.value)!=null&&l.length?s.value.map(u=>({name:u.name,size:u.size,type:We(u.name)})):n.fileName?[{name:n.fileName,size:void 0,type:void 0}]:[]});return(l,u)=>{const k=ke;return i(),v("div",Xe,[e(c).length>0?(i(),v("div",Ze,[(i(!0),v(Te,null,Ie(e(c),(m,y)=>(i(),g(je,{key:`${m.name}-${y}`,name:m.name,size:m.size,type:m.type,deletable:!e(n).disabled,"download-prefix-label":e(n).filePillDownloadPrefixLabel,"delete-prefix-label":e(n).filePillDeletePrefixLabel,onDelete:()=>{var N;return e(U)((N=e(s))!=null&&N.length?e(s)[y]:y)}},null,8,["name","size","type","deletable","download-prefix-label","delete-prefix-label","onDelete"]))),128))])):V("",!0),f("label",he(e(A),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[ve(T,{size:1.5,name:e(z).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),f("span",en,I(e(n).title),1),f("input",{id:e(o),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(o)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(p),multiple:e(n).enableMultiple,onChange:u[0]||(u[0]=m=>e(h)(m))},null,40,nn)],16),e(n).validMessage?(i(),g(k,{key:1,type:"success",message:e(n).validMessage},null,8,["message"])):V("",!0),e(n).error?(i(),g(k,{key:2,type:"error",message:e(n).error},null,8,["message"])):V("",!0),f("span",an,[M(l.$slots,"hint",{},void 0,!0)])])}}}),tn=O(P,[["__scopeId","data-v-44cfd5f6"]]);P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:"default",displayName:"AvFileUploadCompact",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"});const on={class:"av-default-upload"},dn={class:"av-row av-align-center av-gap-xs"},sn={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},ln={class:"content-container av-col"},rn={key:0},pn={class:"b2-bold"},un={key:1,class:"av-col av-gap-xxs"},cn={class:"b2-regular"},mn={class:"caption-light"},fn={key:0,class:"av-px-xs"},gn=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],yn={class:"caption-light"},C=$({__name:"AvFileUploadDefault",setup(t){const{props:n,modelValue:s,realId:o,acceptTypes:p,uploadLabelAttrs:A,onChange:h,onClear:U}=Ve(),c=D(()=>!!n.fileName||s.value&&s.value.length>0);return(l,u)=>{const k=ke;return i(),v("div",on,[(i(),g(Ce(e(c)?"div":"label"),he(e(c)?{}:e(A),{class:e(c)?"file-preview-container av-radius-lg av-p-xs":""}),{default:x(()=>{var m;return[f("div",{class:Pe(e(c)?"":"file-upload-container av-radius-lg av-p-xs")},[f("div",dn,[f("div",sn,[M(l.$slots,"left",{},()=>[ve(T,{size:2.5,name:e(z).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),f("div",ln,[e(c)?(i(),v("div",rn,[f("span",pn,I(e(n).fileName||((m=e(s))==null?void 0:m.map(y=>y.name).join(", "))),1)])):(i(),v("div",un,[f("span",cn,I(e(n).title),1),f("span",mn,I(e(n).description),1)])),e(n).validMessage?(i(),g(k,{key:2,type:"success",message:e(n).validMessage},null,8,["message"])):V("",!0),e(n).error?(i(),g(k,{key:3,type:"error",message:e(n).error},null,8,["message"])):V("",!0)]),e(n).disabled?V("",!0):(i(),v("div",fn,[e(c)?(i(),g(Ke,{key:0,label:e(n).deleteButtonLabel??"Remove",theme:"SECONDARY",size:"LG",onClick:u[0]||(u[0]=()=>e(U)())},null,8,["label"])):(i(),g(T,{key:1,size:1.5,name:e(z).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),e(c)?V("",!0):(i(),v("input",{key:1,id:e(o),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(o)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(p),multiple:e(n).enableMultiple,onChange:u[1]||(u[1]=y=>e(h)(y))},null,40,gn))])],2)]}),_:3},16,["class"])),f("span",yn,[M(l.$slots,"hint",{},void 0,!0)])])}}}),bn=O(C,[["__scopeId","data-v-30bd32d0"]]);C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"AvFileUploadDefault",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"left",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"});const L=$({inheritAttrs:!1,__name:"AvFileUpload",props:G({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{type:[Number,Function],default:void 0},maxFiles:{default:void 0},error:{default:""},validMessage:{default:""},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1},filePillDownloadPrefixLabel:{default:"Download"},filePillDeletePrefixLabel:{default:"Delete"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{},modelModifiers:{}}),emits:G(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError","maxFilesError"],["update:modelValue"]),setup(t,{emit:n}){const s=t,o=n,p=Le(t,"modelValue"),{id:A,accept:h,maxFileSizeMb:U,ariaLabel:c,disabled:l,validMessage:u,error:k}=Se(s),m=D(()=>A.value??`file-upload-${crypto.randomUUID()}`),y=D(()=>Array.isArray(h.value)?h.value.join(","):h.value),N=Oe(!1);function Me(a){var Y;const d=[],r=a.filter(S=>Ge(S,y.value));r.length<a.length&&d.push("acceptTypeError");const b=r.filter(S=>Je(S,U.value));b.length<r.length&&d.push("fileSizeError");const K=b.slice(0,Qe(s.enableMultiple,s.maxFiles,((Y=p.value)==null?void 0:Y.length)??0));return K.length<b.length&&d.push("maxFilesError"),{toAdd:K,errors:d}}function W(a){const{toAdd:d,errors:r}=Me(a);d.length&&(s.enableMultiple?p.value=[...p.value??[],...d]:p.value=[d[0]],o("change",d)),r.includes("acceptTypeError")&&o("acceptTypeError"),r.includes("fileSizeError")&&o("fileSizeError"),r.includes("maxFilesError")&&o("maxFilesError")}async function Fe(a){var r,b;if(a.preventDefault(),N.value=!1,l.value||!((b=(r=a.dataTransfer)==null?void 0:r.files)!=null&&b.length))return;const d=Array.from(a.dataTransfer.files);await $e(),W(d)}function Ae(a){a.preventDefault(),l.value||(N.value=!0)}function Ue(){N.value=!1}function xe(a){const d=a.target.files;!d||!d.length||W(Array.from(d))}const He=D(()=>({for:m.value,class:["av-upload-group",{"av-upload-group--error":k.value,"av-upload-group--valid":u.value,"av-upload-group--disabled":l.value,"drag-over":N.value}],"aria-label":c.value,onDragover:Ae,onDragleave:Ue,onDrop:Fe}));function _e(a){const d=(p.value??[]).filter(r=>r!==a);p.value=d.length>0?d:null}function Re(a){const d=(p.value??[]).filter((r,b)=>b!==a);p.value=d.length>0?d:null}function Ee(a){a!==void 0?typeof a=="number"?Re(a):_e(a):p.value=null,o("deleteFile",a),o("update:validMessage",null),o("update:error",null),o("change",[])}const we={props:s,modelValue:p,realId:m.value,acceptTypes:y,uploadLabelAttrs:He,onChange:xe,onClear:Ee};return ze(Ne,we),(a,d)=>{const r=Be;return i(),g(r,{content:e(Ye)({disabled:e(l),disabledTooltip:t.disabledTooltip}),disabled:!e(J)({disabled:e(l),disabledTooltip:t.disabledTooltip}),"force-focusable":e(J)({disabled:e(l),disabledTooltip:t.disabledTooltip})},{default:x(()=>[t.compact?(i(),g(tn,{key:0},{hint:x(()=>[M(a.$slots,"hint",{},void 0,!0)]),_:3})):(i(),g(bn,{key:1},{left:x(()=>[M(a.$slots,"left",{},void 0,!0)]),hint:x(()=>[M(a.$slots,"hint",{},void 0,!0)]),_:3}))]),_:3},8,["content","disabled","force-focusable"])}}}),j=O(L,[["__scopeId","data-v-3ceda8fb"]]);L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{exportName:"default",displayName:"AvFileUpload",type:1,props:[{name:"id",global:!1,default:"undefined",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:[{name:"default",text:"`file-upload-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"ariaLabel",global:!1,default:'""',description:"ARIA label for file upload button.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"accept",global:!1,default:"undefined",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | string[] | undefined",schema:{kind:"enum",type:"string | string[] | undefined",schema:["undefined","string",{kind:"array",type:"string[]"}]},declarations:[]},{name:"maxFileSizeMb",global:!1,default:"undefined",description:"Maximum allowed file size in megabytes, or a function returning the limit for a given file.",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | ((file: File) => number | undefined) | undefined",schema:{kind:"enum",type:"number | ((file: File) => number | undefined) | undefined",schema:["undefined","number",{kind:"event",type:"(file: File): number | undefined"}]},declarations:[]},{name:"maxFiles",global:!1,default:"undefined",description:"Maximum number of files allowed (only applies when `enableMultiple` is true).",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"error",global:!1,default:'""',description:"Error message to be displayed in case of upload problem.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"validMessage",global:!1,default:'""',description:"Message indicating that the uploaded file is valid.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,description:"Array of selected files.",tags:[{name:"default",text:"null"}],required:!1,type:"File[] | null | undefined",schema:{kind:"enum",type:"File[] | null | undefined",schema:["undefined","null",{kind:"array",type:"File[]"}]},declarations:[]},{name:"maxWidth",global:!1,default:'"none"',description:"Max width of the component.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"title",global:!1,description:"Title of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"description",global:!1,description:"Description of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"deleteButtonLabel",global:!1,default:'"Remove"',description:"Delete button label.",tags:[{name:"default",text:"'Remove'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"fileName",global:!1,default:"undefined",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:"Display in compact mode with file pills.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"enableMultiple",global:!1,default:"false",description:"Enable multiple file uploads.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"filePillDownloadPrefixLabel",global:!1,default:'"Download"',description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',tags:[{name:"default",text:"'Download'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"filePillDeletePrefixLabel",global:!1,default:'"Delete"',description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',tags:[{name:"default",text:"'Delete'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"change",description:"Event emitted when the selected file(s) change.",tags:[],type:"[payload: File[] | FileList]",signature:'(event: "change", payload: File[] | FileList): void',schema:[{kind:"enum",type:"File[] | FileList",schema:[{kind:"array",type:"File[]"},{kind:"object",type:"FileList"}]}],declarations:[]},{name:"update:modelValue",description:"Event emitted when the model value is updated.",tags:[],type:"[payload: File[] | null]",signature:'(event: "update:modelValue", payload: File[] | null): void',schema:[{kind:"enum",type:"File[] | null",schema:["null",{kind:"array",type:"File[]"}]}],declarations:[]},{name:"update:validMessage",description:"Event emitted when the validMessage is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:validMessage", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"update:error",description:"Event emitted when the error is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:error", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"deleteFile",description:"Event emitted when a file is deleted.",tags:[],type:"[payload?: number | File | undefined]",signature:'(event: "deleteFile", payload?: number | File | undefined): void',schema:[{kind:"enum",type:"number | File | undefined",schema:["undefined","number",{kind:"object",type:"File"}]}],declarations:[]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected.",tags:[],type:"[]",signature:'(event: "acceptTypeError"): void',schema:[],declarations:[]},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit.",tags:[],type:"[]",signature:'(event: "fileSizeError"): void',schema:[],declarations:[]},{name:"maxFilesError",description:"Event emitted when the number of files exceeds the configured limit.",tags:[],type:"[]",signature:'(event: "maxFilesError"): void',schema:[],declarations:[]}],slots:[{name:"hint",type:"any[]",description:"Slot for the hint description.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"left",type:"any[]",description:"Slot for the left content.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"default",type:"any[]",description:"Default slot for global content between the left and right icons.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"});const vn="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",qn={title:"Components/Interaction/Files/AvFileUpload",component:j,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},maxFiles:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,maxFiles:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows users to upload files by clicking on the file upload area
    or by dragging and dropping files. It supports both single and multiple file uploads, with two display
    variants: default and compact.
  </span>
</p>

<p>
  <span class="b2-regular">
    The component handles file validation, including accepted file types, maximum file size, and maximum
    number of files. Invalid files are discarded, and appropriate error events are emitted.
  </span>
</p>`}}}},F=t=>({components:{AvFileUpload:j,AvIcon:T},setup(){return{args:t}},template:`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `}),H=F.bind({});H.args={};const _=F.bind({});_.args={error:"This is an error message"};const R=F.bind({});R.args={validMessage:"File uploaded successfully"};const hn=t=>({components:{AvFileUpload:j,AvIcon:T},setup(){return{args:t}},template:`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `}),E=hn.bind({});E.args={leftImageSrc:vn};const w=F.bind({});w.args={compact:!0,title:"Attach documents",description:""};const B=F.bind({});B.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const q=F.bind({});q.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf"};const Dn=["Default","Error","Success","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];var Q,X,Z;H.parameters={...H.parameters,docs:{...(Q=H.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(Z=(X=H.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ae;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(ae=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,de;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(de=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,ie,le;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,pe,ue;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ce,me,fe;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(fe=(me=B.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,ye,be;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(be=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};export{w as Compact,B as CompactWithFiles,H as Default,_ as Error,E as LeftSlot,q as MultipleFiles,R as Success,Dn as __namedExportsOrder,qn as default};
