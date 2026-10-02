import{A as C}from"./AvIcon-DOXb00PA.js";import{A as Se}from"./AvTooltip-ijtr9Bv3.js";import{u as Te,n as R,a1 as Pe,$ as e,d as L,L as d,h as y,F as Le,Q as Ce,f as F,g as E,e as g,l as q,X as V,z as ge,R as k,a9 as w,B as Ve,U as qe,a2 as Ee,Z as Ne,P as Re,y as K,A as ze,M as $e}from"./iframe-Dv3rp4Gm.js";import{_ as be}from"./AvMessage-DTmPCdRj.js";import{g as je,A as Oe}from"./AvFilePill-CAjNhE7h.js";import{M as N}from"./icons-B6bk2eYx.js";import"./date-picker-CHcDvcnS.js";import"./string-lrx0uGBc.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as We}from"./AvButton-HR1UDaS8.js";import{i as H,g as Ke}from"./utils-AN5LjLGN.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-BuN6UmfW.js";import"./use-text-truncation-DCt2HvCc.js";const ye=Symbol("AvFileUploadContext");function he(){const i=Te(ye);if(!i)throw new Error("useFileUploadContext must be used within AvFileUpload component");return i}const He={class:"av-compact-upload"},Ye={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},Ge={class:"b2-regular"},Qe=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Xe={class:"caption-light"},ve=R({__name:"AvFileUploadCompact",setup(i){Pe(o=>({b10782dc:e(a).maxWidth}));const{props:a,modelValue:p,realId:s,acceptTypes:l,uploadLabelAttrs:M,onChange:h,onClear:v}=he(),u=L(()=>{var o;return(o=p.value)!=null&&o.length?p.value.map(c=>({name:c.name,size:c.size,type:je(c.name)})):a.fileName?[{name:a.fileName,size:void 0,type:void 0}]:[]});return(o,c)=>{const x=be;return d(),y("div",He,[e(u).length>0?(d(),y("div",Ye,[(d(!0),y(Le,null,Ce(e(u),(m,b)=>(d(),F(Oe,{key:`${m.name}-${b}`,name:m.name,size:m.size,type:m.type,deletable:!e(a).disabled,"download-prefix-label":e(a).filePillDownloadPrefixLabel,"delete-prefix-label":e(a).filePillDeletePrefixLabel,onDelete:()=>{var A;return e(v)((A=e(p))!=null&&A.length?e(p)[b]:b)}},null,8,["name","size","type","deletable","download-prefix-label","delete-prefix-label","onDelete"]))),128))])):E("",!0),g("label",ge(e(M),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[q(C,{size:1.5,name:e(N).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),g("span",Ge,V(e(a).title),1),g("input",{id:e(s),class:"av-upload",type:"file","aria-describedby":e(a).error||e(a).validMessage?`${e(s)}-desc`:"",disabled:e(a).disabled,"aria-disabled":e(a).disabled,accept:e(l),multiple:e(a).enableMultiple,onChange:c[0]||(c[0]=m=>e(h)(m))},null,40,Qe)],16),q(x,{type:e(a).error?"error":"success",message:e(a).error?e(a).error:e(a).validMessage},null,8,["type","message"]),g("span",Xe,[k(o.$slots,"hint",{},void 0,!0)])])}}}),Ze=z(ve,[["__scopeId","data-v-b4c7d725"]]);ve.__docgenInfo={exportName:"default",displayName:"AvFileUploadCompact",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"hint",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"};const Je={class:"av-default-upload"},ea={class:"av-row av-align-center av-gap-xs"},aa={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},na={class:"content-container av-col"},ta={key:0},sa={class:"b2-bold"},la={key:1,class:"av-col av-gap-xxs"},ia={class:"b2-regular"},oa={class:"caption-light"},ra={key:0,class:"av-px-xs"},da=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],pa={class:"caption-light"},Ae=R({__name:"AvFileUploadDefault",setup(i){const{props:a,modelValue:p,realId:s,acceptTypes:l,uploadLabelAttrs:M,onChange:h,onClear:v}=he(),u=L(()=>!!a.fileName||p.value&&p.value.length>0);return(o,c)=>{const x=be;return d(),y("div",Je,[(d(),F(qe(e(u)?"div":"label"),ge(e(u)?{}:e(M),{class:e(u)?"file-preview-container av-radius-lg av-p-xs":""}),{default:w(()=>{var m;return[g("div",{class:Ve(e(u)?"":"file-upload-container av-radius-lg av-p-xs")},[g("div",ea,[g("div",aa,[k(o.$slots,"left",{},()=>[q(C,{size:2.5,name:e(N).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),g("div",na,[e(u)?(d(),y("div",ta,[g("span",sa,V(e(a).fileName||((m=e(p))==null?void 0:m.map(b=>b.name).join(", "))),1)])):(d(),y("div",la,[g("span",ia,V(e(a).title),1),g("span",oa,V(e(a).description),1)])),q(x,{type:e(a).error?"error":"success",message:e(a).error?e(a).error:e(a).validMessage},null,8,["type","message"])]),e(a).disabled?E("",!0):(d(),y("div",ra,[e(u)?(d(),F(We,{key:0,label:e(a).deleteButtonLabel??"Remove",theme:"SECONDARY",size:"LG",onClick:c[0]||(c[0]=()=>e(v)())},null,8,["label"])):(d(),F(C,{key:1,size:1.5,name:e(N).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),e(u)?E("",!0):(d(),y("input",{key:1,id:e(s),class:"av-upload",type:"file","aria-describedby":e(a).error||e(a).validMessage?`${e(s)}-desc`:"",disabled:e(a).disabled,"aria-disabled":e(a).disabled,accept:e(l),multiple:e(a).enableMultiple,onChange:c[1]||(c[1]=b=>e(h)(b))},null,40,da))])],2)]}),_:3},16,["class"])),g("span",pa,[k(o.$slots,"hint",{},void 0,!0)])])}}}),ca=z(Ae,[["__scopeId","data-v-128b9aea"]]);Ae.__docgenInfo={exportName:"default",displayName:"AvFileUploadDefault",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"left",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}},{name:"hint",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"};const Fe=R({inheritAttrs:!1,__name:"AvFileUpload",props:K({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{default:void 0},error:{default:""},validMessage:{default:""},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1},filePillDownloadPrefixLabel:{default:"Download"},filePillDeletePrefixLabel:{default:"Delete"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{},modelModifiers:{}}),emits:K(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError"],["update:modelValue"]),setup(i,{emit:a}){const p=i,s=a,l=Ee(i,"modelValue"),{id:M,accept:h,maxFileSizeMb:v,ariaLabel:u,disabled:o,validMessage:c,error:x}=Ne(p),m=L(()=>M.value??`file-upload-${crypto.randomUUID()}`),b=L(()=>Array.isArray(h.value)?h.value.join(","):h.value),A=Re(!1);function j(n){const t=b.value;return t?t.split(",").map(f=>f.trim().toLowerCase()).some(f=>f.startsWith(".")?n.name.toLowerCase().endsWith(f):f.includes("/")?n.type===f||n.type.startsWith(`${f.split("/")[0]}/`):!1):!0}function O(n){return v.value===void 0||v.value<=0?!0:n.size<=v.value*1024*1024}async function ke(n){var f,W;if(n.preventDefault(),A.value=!1,o.value||!((W=(f=n.dataTransfer)==null?void 0:f.files)!=null&&W.length))return;const t=Array.from(n.dataTransfer.files).filter(j),r=t.filter(O);await ze(),r.length?(p.enableMultiple?l.value=[...l.value??[],...r]:l.value=[r[0]],s("change",r)):t.length?s("fileSizeError"):s("acceptTypeError")}function _e(n){n.preventDefault(),o.value||(A.value=!0)}function Me(){A.value=!1}function xe(n){const t=n.target.files,r=t==null?void 0:t[0];if(r&&!j(r)){s("acceptTypeError");return}if(r&&!O(r)){s("fileSizeError");return}!t||!t.length||(p.enableMultiple?l.value=[...l.value??[],...Array.from(t)]:l.value=[t[0]],s("change",t))}const we=L(()=>({for:m.value,class:["av-upload-group",{"av-upload-group--error":x.value,"av-upload-group--valid":c.value,"av-upload-group--disabled":o.value,"drag-over":A.value}],"aria-label":u.value,onDragover:_e,onDragleave:Me,onDrop:ke}));function Ue(n){const t=(l.value??[]).filter(r=>r!==n);l.value=t.length>0?t:null}function Be(n){const t=(l.value??[]).filter((r,f)=>f!==n);l.value=t.length>0?t:null}function De(n){n!==void 0?typeof n=="number"?Be(n):Ue(n):l.value=null,s("deleteFile",n),s("update:validMessage",null),s("update:error",null),s("change",[])}const Ie={props:p,modelValue:l,realId:m.value,acceptTypes:b,uploadLabelAttrs:we,onChange:xe,onClear:De};return $e(ye,Ie),(n,t)=>{const r=Se;return d(),F(r,{content:e(Ke)({disabled:e(o),disabledTooltip:i.disabledTooltip}),disabled:!e(H)({disabled:e(o),disabledTooltip:i.disabledTooltip}),"force-focusable":e(H)({disabled:e(o),disabledTooltip:i.disabledTooltip})},{default:w(()=>[i.compact?(d(),F(Ze,{key:0},{hint:w(()=>[k(n.$slots,"hint",{},void 0,!0)]),_:3})):(d(),F(ca,{key:1},{left:w(()=>[k(n.$slots,"left",{},void 0,!0)]),hint:w(()=>[k(n.$slots,"hint",{},void 0,!0)]),_:3}))]),_:3},8,["content","disabled","force-focusable"])}}}),$=z(Fe,[["__scopeId","data-v-eb1509a2"]]);Fe.__docgenInfo={exportName:"default",displayName:"AvFileUpload",type:1,props:[{name:"id",global:!1,description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:[{name:"default",text:"`file-upload-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:"undefined"},{name:"ariaLabel",global:!1,description:"ARIA label for file upload button.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"accept",global:!1,description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | string[] | undefined",declarations:[],schema:{kind:"enum",type:"string | string[] | undefined",schema:["undefined","string",{kind:"array",type:"string[]"}]},default:"undefined"},{name:"maxFileSizeMb",global:!1,description:"Maximum allowed file size in megabytes.",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},default:"undefined"},{name:"error",global:!1,description:"Error message to be displayed in case of upload problem.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"validMessage",global:!1,description:"Message indicating that the uploaded file is valid.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"modelValue",global:!1,description:"Array of selected files.",tags:[{name:"default",text:"null"}],required:!1,type:"File[] | null | undefined",declarations:[],schema:{kind:"enum",type:"File[] | null | undefined",schema:["undefined","null",{kind:"array",type:"File[]"}]}},{name:"maxWidth",global:!1,description:"Max width of the component.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"none"'},{name:"title",global:!1,description:"Title of the file upload section.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"description",global:!1,description:"Description of the file upload section.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"deleteButtonLabel",global:!1,description:"Delete button label.",tags:[{name:"default",text:"'Remove'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Remove"'},{name:"fileName",global:!1,description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:"undefined"},{name:"compact",global:!1,description:"Display in compact mode with file pills.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"enableMultiple",global:!1,description:"Enable multiple file uploads.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"filePillDownloadPrefixLabel",global:!1,description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',tags:[{name:"default",text:"'Download'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Download"'},{name:"filePillDeletePrefixLabel",global:!1,description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',tags:[{name:"default",text:"'Delete'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Delete"'},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"change",description:"Event emitted when the selected file(s) change.",tags:[],type:"[payload: File[] | FileList]",signature:'(event: "change", payload: File[] | FileList): void',declarations:[],schema:[{kind:"enum",type:"File[] | FileList",schema:[{kind:"array",type:"File[]"},{kind:"object",type:"FileList"}]}]},{name:"update:modelValue",description:"Event emitted when the model value is updated.",tags:[],type:"[payload: File[] | null]",signature:'(event: "update:modelValue", payload: File[] | null): void',declarations:[],schema:[{kind:"enum",type:"File[] | null",schema:["null",{kind:"array",type:"File[]"}]}]},{name:"update:validMessage",description:"Event emitted when the validMessage is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:validMessage", payload: string | null): void',declarations:[],schema:[{kind:"enum",type:"string | null",schema:["null","string"]}]},{name:"update:error",description:"Event emitted when the error is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:error", payload: string | null): void',declarations:[],schema:[{kind:"enum",type:"string | null",schema:["null","string"]}]},{name:"deleteFile",description:"Event emitted when a file is deleted.",tags:[],type:"[payload?: number | File | undefined]",signature:'(event: "deleteFile", payload?: number | File | undefined): void',declarations:[],schema:[{kind:"enum",type:"number | File | undefined",schema:["undefined","number",{kind:"object",type:"File"}]}]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected.",tags:[],type:"[]",signature:'(event: "acceptTypeError"): void',declarations:[],schema:[]},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit.",tags:[],type:"[]",signature:'(event: "fileSizeError"): void',declarations:[],schema:[]}],slots:[{name:"hint",type:"any[]",description:"Slot for the hint description.",declarations:[],schema:{kind:"array",type:"any[]"}},{name:"left",type:"any[]",description:"Slot for the left content.",declarations:[],schema:{kind:"array",type:"any[]"}},{name:"default",type:"any[]",description:"Default slot for global content between the left and right icons.",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"error",type:"string",description:"Error message to be displayed in case of upload problem.",declarations:[],schema:"string"},{name:"id",type:"string",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,declarations:[],schema:"string"},{name:"validMessage",type:"string",description:"Message indicating that the uploaded file is valid.",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"Indicates if the element is disabled.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"compact",type:"boolean",description:"Display in compact mode with file pills.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ariaLabel",type:"string",description:"ARIA label for file upload button.",declarations:[],schema:"string"},{name:"accept",type:"string | string[]",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",declarations:[],schema:{kind:"enum",type:"string | string[]",schema:["string",{kind:"array",type:"string[]"}]}},{name:"maxFileSizeMb",type:"number",description:"Maximum allowed file size in megabytes.",declarations:[],schema:"number"},{name:"maxWidth",type:"string",description:"Max width of the component.",declarations:[],schema:"string"},{name:"deleteButtonLabel",type:"string",description:"Delete button label.",declarations:[],schema:"string"},{name:"fileName",type:"string",description:"Name of the file to display as default (e.g., for server-persisted uploads).",declarations:[],schema:"string"},{name:"enableMultiple",type:"boolean",description:"Enable multiple file uploads.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"filePillDownloadPrefixLabel",type:"string",description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',declarations:[],schema:"string"},{name:"filePillDeletePrefixLabel",type:"string",description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',declarations:[],schema:"string"},{name:"disabledTooltip",type:"string | undefined",description:"Tooltip text to display when the element is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"File[] | null | undefined",description:"Array of selected files.",declarations:[],schema:{kind:"enum",type:"File[] | null | undefined",schema:["undefined","null",{kind:"array",type:"File[]"}]}},{name:"title",type:"string",description:"Title of the file upload section.",declarations:[],schema:"string"},{name:"description",type:"string",description:"Description of the file upload section.",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"};const ua="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",Da={title:"Components/Interaction/Files/AvFileUpload",component:$,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area. Supports both single and multiple file uploads with two display variants.
  </span>
</p>`}}}},_=i=>({components:{AvFileUpload:$,AvIcon:C},setup(){return{args:i}},template:`
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
  `}),U=_.bind({});U.args={};const B=_.bind({});B.args={error:"This is an error message"};const D=_.bind({});D.args={validMessage:"File uploaded successfully"};const ma=i=>({components:{AvFileUpload:$,AvIcon:C},setup(){return{args:i}},template:`
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
  `}),I=ma.bind({});I.args={leftImageSrc:ua};const S=_.bind({});S.args={compact:!0,title:"Attach documents",description:""};const T=_.bind({});T.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const P=_.bind({});P.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf"};var Y,G,Q;U.parameters={...U.parameters,docs:{...(Y=U.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(Q=(G=U.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,J;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(J=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var ee,ae,ne;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(ne=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,le;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(le=(se=I.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,oe,re;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var de,pe,ce;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(ce=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,me,fe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(fe=(me=P.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const Ia=["Default","Error","Success","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];export{S as Compact,T as CompactWithFiles,U as Default,B as Error,I as LeftSlot,P as MultipleFiles,D as Success,Ia as __namedExportsOrder,Da as default};
