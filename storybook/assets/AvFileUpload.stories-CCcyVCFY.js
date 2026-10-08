import{A as D}from"./AvIcon-BCBwmoVs.js";import{A as Be}from"./AvTooltip-CvY0R1mt.js";import{B as we,u as $,ai as Ee,ag as e,$ as r,n as b,F as qe,a5 as De,l as N,m as L,k as g,r as S,ab as T,L as ve,a6 as V,j as q,aq as U,P as Te,a8 as Ie,aj as Pe,ae as Ce,K as G,a1 as Se,O as Le,a4 as ze}from"./iframe-7czoOdiA.js";import{_ as he}from"./AvMessage-BxbPtyY0.js";import{A as $e,g as Oe}from"./AvFilePill-qYVWtzf-.js";import{M as z}from"./icons-Dyb4xUo3.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as je}from"./AvButton-C8tq03vY.js";import{i as J,g as We}from"./utils-BIlgUrNJ.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-0Lzv4ZjO.js";import"./use-text-truncation-QYz865Fw.js";import"./string-BZgCOP9D.js";const ke=Symbol("AvFileUploadContext");function Ne(){const s=we(ke);if(!s)throw new Error("useFileUploadContext must be used within AvFileUpload component");return s}const Ke={class:"av-compact-upload"},Ye={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},Ge={class:"b2-regular"},Je=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Qe={class:"caption-light"},I=$({__name:"AvFileUploadCompact",setup(s){Ee(i=>({b10782dc:e(n).maxWidth}));const{props:n,modelValue:p,realId:o,acceptTypes:d,uploadLabelAttrs:A,onChange:v,onClear:h}=Ne(),c=q(()=>{var i;return(i=p.value)!=null&&i.length?p.value.map(u=>({name:u.name,size:u.size,type:Oe(u.name)})):n.fileName?[{name:n.fileName,size:void 0,type:void 0}]:[]});return(i,u)=>{const F=he;return r(),b("div",Ke,[e(c).length>0?(r(),b("div",Ye,[(r(!0),b(qe,null,De(e(c),(m,y)=>(r(),N($e,{key:`${m.name}-${y}`,name:m.name,size:m.size,type:m.type,deletable:!e(n).disabled,"download-prefix-label":e(n).filePillDownloadPrefixLabel,"delete-prefix-label":e(n).filePillDeletePrefixLabel,onDelete:()=>{var k;return e(h)((k=e(p))!=null&&k.length?e(p)[y]:y)}},null,8,["name","size","type","deletable","download-prefix-label","delete-prefix-label","onDelete"]))),128))])):L("",!0),g("label",ve(e(A),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[S(D,{size:1.5,name:e(z).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),g("span",Ge,T(e(n).title),1),g("input",{id:e(o),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(o)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(d),multiple:e(n).enableMultiple,onChange:u[0]||(u[0]=m=>e(v)(m))},null,40,Je)],16),S(F,{type:e(n).error?"error":"success",message:e(n).error?e(n).error:e(n).validMessage},null,8,["type","message"]),g("span",Qe,[V(i.$slots,"hint",{},void 0,!0)])])}}}),Xe=O(I,[["__scopeId","data-v-b4c7d725"]]);I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:"default",displayName:"AvFileUploadCompact",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"});const Ze={class:"av-default-upload"},en={class:"av-row av-align-center av-gap-xs"},nn={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},an={class:"content-container av-col"},tn={key:0},on={class:"b2-bold"},dn={key:1,class:"av-col av-gap-xxs"},sn={class:"b2-regular"},ln={class:"caption-light"},rn={key:0,class:"av-px-xs"},pn=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],un={class:"caption-light"},P=$({__name:"AvFileUploadDefault",setup(s){const{props:n,modelValue:p,realId:o,acceptTypes:d,uploadLabelAttrs:A,onChange:v,onClear:h}=Ne(),c=q(()=>!!n.fileName||p.value&&p.value.length>0);return(i,u)=>{const F=he;return r(),b("div",Ze,[(r(),N(Ie(e(c)?"div":"label"),ve(e(c)?{}:e(A),{class:e(c)?"file-preview-container av-radius-lg av-p-xs":""}),{default:U(()=>{var m;return[g("div",{class:Te(e(c)?"":"file-upload-container av-radius-lg av-p-xs")},[g("div",en,[g("div",nn,[V(i.$slots,"left",{},()=>[S(D,{size:2.5,name:e(z).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),g("div",an,[e(c)?(r(),b("div",tn,[g("span",on,T(e(n).fileName||((m=e(p))==null?void 0:m.map(y=>y.name).join(", "))),1)])):(r(),b("div",dn,[g("span",sn,T(e(n).title),1),g("span",ln,T(e(n).description),1)])),S(F,{type:e(n).error?"error":"success",message:e(n).error?e(n).error:e(n).validMessage},null,8,["type","message"])]),e(n).disabled?L("",!0):(r(),b("div",rn,[e(c)?(r(),N(je,{key:0,label:e(n).deleteButtonLabel??"Remove",theme:"SECONDARY",size:"LG",onClick:u[0]||(u[0]=()=>e(h)())},null,8,["label"])):(r(),N(D,{key:1,size:1.5,name:e(z).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),e(c)?L("",!0):(r(),b("input",{key:1,id:e(o),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(o)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(d),multiple:e(n).enableMultiple,onChange:u[1]||(u[1]=y=>e(v)(y))},null,40,pn))])],2)]}),_:3},16,["class"])),g("span",un,[V(i.$slots,"hint",{},void 0,!0)])])}}}),cn=O(P,[["__scopeId","data-v-128b9aea"]]);P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:"default",displayName:"AvFileUploadDefault",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"left",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"});const C=$({inheritAttrs:!1,__name:"AvFileUpload",props:G({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{default:void 0},error:{default:""},validMessage:{default:""},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1},filePillDownloadPrefixLabel:{default:"Download"},filePillDeletePrefixLabel:{default:"Delete"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{},modelModifiers:{}}),emits:G(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError"],["update:modelValue"]),setup(s,{emit:n}){const p=s,o=n,d=Pe(s,"modelValue"),{id:A,accept:v,maxFileSizeMb:h,ariaLabel:c,disabled:i,validMessage:u,error:F}=Ce(p),m=q(()=>A.value??`file-upload-${crypto.randomUUID()}`),y=q(()=>Array.isArray(v.value)?v.value.join(","):v.value),k=ze(!1);function W(a){const t=y.value;return t?t.split(",").map(f=>f.trim().toLowerCase()).some(f=>f.startsWith(".")?a.name.toLowerCase().endsWith(f):f.includes("/")?a.type===f||a.type.startsWith(`${f.split("/")[0]}/`):!1):!0}function K(a){return h.value===void 0||h.value<=0?!0:a.size<=h.value*1024*1024}async function Ve(a){var f,Y;if(a.preventDefault(),k.value=!1,i.value||!((Y=(f=a.dataTransfer)==null?void 0:f.files)!=null&&Y.length))return;const t=Array.from(a.dataTransfer.files).filter(W),l=t.filter(K);await Le(),l.length?(p.enableMultiple?d.value=[...d.value??[],...l]:d.value=[l[0]],o("change",l)):t.length?o("fileSizeError"):o("acceptTypeError")}function Me(a){a.preventDefault(),i.value||(k.value=!0)}function Ae(){k.value=!1}function Fe(a){const t=a.target.files,l=t==null?void 0:t[0];if(l&&!W(l)){o("acceptTypeError");return}if(l&&!K(l)){o("fileSizeError");return}!t||!t.length||(p.enableMultiple?d.value=[...d.value??[],...Array.from(t)]:d.value=[t[0]],o("change",t))}const Ue=q(()=>({for:m.value,class:["av-upload-group",{"av-upload-group--error":F.value,"av-upload-group--valid":u.value,"av-upload-group--disabled":i.value,"drag-over":k.value}],"aria-label":c.value,onDragover:Me,onDragleave:Ae,onDrop:Ve}));function He(a){const t=(d.value??[]).filter(l=>l!==a);d.value=t.length>0?t:null}function _e(a){const t=(d.value??[]).filter((l,f)=>f!==a);d.value=t.length>0?t:null}function xe(a){a!==void 0?typeof a=="number"?_e(a):He(a):d.value=null,o("deleteFile",a),o("update:validMessage",null),o("update:error",null),o("change",[])}const Re={props:p,modelValue:d,realId:m.value,acceptTypes:y,uploadLabelAttrs:Ue,onChange:Fe,onClear:xe};return Se(ke,Re),(a,t)=>{const l=Be;return r(),N(l,{content:e(We)({disabled:e(i),disabledTooltip:s.disabledTooltip}),disabled:!e(J)({disabled:e(i),disabledTooltip:s.disabledTooltip}),"force-focusable":e(J)({disabled:e(i),disabledTooltip:s.disabledTooltip})},{default:U(()=>[s.compact?(r(),N(Xe,{key:0},{hint:U(()=>[V(a.$slots,"hint",{},void 0,!0)]),_:3})):(r(),N(cn,{key:1},{left:U(()=>[V(a.$slots,"left",{},void 0,!0)]),hint:U(()=>[V(a.$slots,"hint",{},void 0,!0)]),_:3}))]),_:3},8,["content","disabled","force-focusable"])}}}),j=O(C,[["__scopeId","data-v-eb1509a2"]]);C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"AvFileUpload",type:1,props:[{name:"id",global:!1,default:"undefined",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:[{name:"default",text:"`file-upload-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"ariaLabel",global:!1,default:'""',description:"ARIA label for file upload button.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"accept",global:!1,default:"undefined",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | string[] | undefined",schema:{kind:"enum",type:"string | string[] | undefined",schema:["undefined","string",{kind:"array",type:"string[]"}]},declarations:[]},{name:"maxFileSizeMb",global:!1,default:"undefined",description:"Maximum allowed file size in megabytes.",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"error",global:!1,default:'""',description:"Error message to be displayed in case of upload problem.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"validMessage",global:!1,default:'""',description:"Message indicating that the uploaded file is valid.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,description:"Array of selected files.",tags:[{name:"default",text:"null"}],required:!1,type:"File[] | null | undefined",schema:{kind:"enum",type:"File[] | null | undefined",schema:["undefined","null",{kind:"array",type:"File[]"}]},declarations:[]},{name:"maxWidth",global:!1,default:'"none"',description:"Max width of the component.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"title",global:!1,description:"Title of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"description",global:!1,description:"Description of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"deleteButtonLabel",global:!1,default:'"Remove"',description:"Delete button label.",tags:[{name:"default",text:"'Remove'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"fileName",global:!1,default:"undefined",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:"Display in compact mode with file pills.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"enableMultiple",global:!1,default:"false",description:"Enable multiple file uploads.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"filePillDownloadPrefixLabel",global:!1,default:'"Download"',description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',tags:[{name:"default",text:"'Download'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"filePillDeletePrefixLabel",global:!1,default:'"Delete"',description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',tags:[{name:"default",text:"'Delete'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"change",description:"Event emitted when the selected file(s) change.",tags:[],type:"[payload: File[] | FileList]",signature:'(event: "change", payload: File[] | FileList): void',schema:[{kind:"enum",type:"File[] | FileList",schema:[{kind:"array",type:"File[]"},{kind:"object",type:"FileList"}]}],declarations:[]},{name:"update:modelValue",description:"Event emitted when the model value is updated.",tags:[],type:"[payload: File[] | null]",signature:'(event: "update:modelValue", payload: File[] | null): void',schema:[{kind:"enum",type:"File[] | null",schema:["null",{kind:"array",type:"File[]"}]}],declarations:[]},{name:"update:validMessage",description:"Event emitted when the validMessage is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:validMessage", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"update:error",description:"Event emitted when the error is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:error", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"deleteFile",description:"Event emitted when a file is deleted.",tags:[],type:"[payload?: number | File | undefined]",signature:'(event: "deleteFile", payload?: number | File | undefined): void',schema:[{kind:"enum",type:"number | File | undefined",schema:["undefined","number",{kind:"object",type:"File"}]}],declarations:[]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected.",tags:[],type:"[]",signature:'(event: "acceptTypeError"): void',schema:[],declarations:[]},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit.",tags:[],type:"[]",signature:'(event: "fileSizeError"): void',schema:[],declarations:[]}],slots:[{name:"hint",type:"any[]",description:"Slot for the hint description.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"left",type:"any[]",description:"Slot for the left content.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"default",type:"any[]",description:"Default slot for global content between the left and right icons.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"});const mn="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",xn={title:"Components/Interaction/Files/AvFileUpload",component:j,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area. Supports both single and multiple file uploads with two display variants.
  </span>
</p>`}}}},M=s=>({components:{AvFileUpload:j,AvIcon:D},setup(){return{args:s}},template:`
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
  `}),H=M.bind({});H.args={};const _=M.bind({});_.args={error:"This is an error message"};const x=M.bind({});x.args={validMessage:"File uploaded successfully"};const fn=s=>({components:{AvFileUpload:j,AvIcon:D},setup(){return{args:s}},template:`
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
  `}),R=fn.bind({});R.args={leftImageSrc:mn};const B=M.bind({});B.args={compact:!0,title:"Attach documents",description:""};const w=M.bind({});w.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const E=M.bind({});E.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf"};const Rn=["Default","Error","Success","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];var Q,X,Z;H.parameters={...H.parameters,docs:{...(Q=H.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,oe,de;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(de=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,ie,le;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(le=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,pe,ue;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(ue=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ce,me,fe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(fe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,ye,be;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(be=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};export{B as Compact,w as CompactWithFiles,H as Default,_ as Error,R as LeftSlot,E as MultipleFiles,x as Success,Rn as __namedExportsOrder,xn as default};
