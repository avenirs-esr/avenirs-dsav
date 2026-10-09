import{A as W}from"./AvIcon-DIONtdP-.js";import{A as nn}from"./AvTooltip-BcE9a6PC.js";import{B as an,u as J,ai as on,ag as e,$ as l,n as k,k as m,r as X,ab as _,L as $e,l as b,m as N,a6 as x,aq as B,P as tn,a8 as sn,j as A,F as dn,a5 as ln,aj as rn,ae as pn,K as ae,a1 as un,O as cn,a4 as mn}from"./iframe-BAltxv45.js";import{_ as Oe}from"./AvMessage-DLCwAn9B.js";import{M as w}from"./icons-2YM_gKQ7.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as fn}from"./AvButton-1Ni9UELl.js";import{A as gn,g as yn}from"./AvFilePill-CDj0PCgH.js";import{i as oe,g as bn}from"./utils-BIlgUrNJ.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-BAuxvmIF.js";import"./use-text-truncation-Cf3Ng62E.js";import"./string-BZgCOP9D.js";function vn({file:o,acceptTypes:n}){return n?n.split(",").map(t=>t.trim().toLowerCase()).some(t=>t.startsWith(".")?o.name.toLowerCase().endsWith(t):t.includes("/")?o.type===t||o.type.startsWith(`${t.split("/")[0]}/`):!1):!0}function hn({file:o,maxFileSizeMb:n}){const a=typeof n=="function"?n(o):n;return a===void 0||a<=0?!0:o.size<=a*1024*1024}function kn({enableMultiple:o,maxFiles:n,currentFilesCount:a}){return o?n===void 0||n<=0?1/0:Math.max(n-a,0):1}function Vn({files:o,acceptTypes:n,maxFileSizeMb:a,enableMultiple:t,maxFiles:i,currentFilesCount:g}){const p=[],c=o.filter(h=>vn({file:h,acceptTypes:n}));c.length<o.length&&p.push("acceptTypeError");const d=c.filter(h=>hn({file:h,maxFileSizeMb:a}));d.length<c.length&&p.push("fileSizeError");const r=d.slice(0,kn({enableMultiple:t,maxFiles:i,currentFilesCount:g}));return r.length<d.length&&p.push("maxFilesError"),{toAdd:r,errors:p}}const We=Symbol("AvFileUploadContext");function Z(){const o=an(We);if(!o)throw new Error("useFileUploadContext must be used within AvFileUpload component");return o}const Nn={class:"av-compact-upload"},Mn={class:"b2-regular"},Fn=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],An={class:"caption-light"},j=J({__name:"AvFileUploadCompact",setup(o){on(p=>({v4071cdae:e(n).maxWidth}));const{props:n,realId:a,acceptTypes:t,uploadLabelAttrs:i,onChange:g}=Z();return(p,c)=>{const d=Oe;return l(),k("div",Nn,[m("label",$e(e(i),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[X(W,{size:1.5,name:e(w).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),m("span",Mn,_(e(n).title),1),m("input",{id:e(a),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(a)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(t),multiple:e(n).enableMultiple,onChange:c[0]||(c[0]=r=>e(g)(r))},null,40,Fn)],16),e(n).validMessage?(l(),b(d,{key:0,type:"success",message:e(n).validMessage},null,8,["message"])):N("",!0),e(n).error?(l(),b(d,{key:1,type:"error",message:e(n).error},null,8,["message"])):N("",!0),m("span",An,[x(p.$slots,"hint",{},void 0,!0)])])}}}),Un=Q(j,[["__scopeId","data-v-70602992"]]);j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:"default",displayName:"AvFileUploadCompact",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"});const xn={class:"av-default-upload"},Hn={class:"av-row av-align-center av-gap-xs"},_n={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},Bn={class:"content-container av-col"},wn={key:0},Rn={class:"b2-bold"},En={key:1,class:"av-col av-gap-xxs"},qn={class:"b2-regular"},Dn={class:"caption-light"},In={key:0,class:"b2-bold"},Tn={key:0,class:"av-px-xs"},Pn=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Ln={class:"caption-light"},K=J({__name:"AvFileUploadDefault",setup(o){const{props:n,modelValue:a,realId:t,acceptTypes:i,uploadLabelAttrs:g,onChange:p,onClear:c}=Z(),d=A(()=>!!n.fileName||a.value&&a.value.length>0||n.enableMultiple&&a.value&&a.value.length>=(n.maxFiles??1/0)),r=A(()=>n.countLabel?`${(a.value??[]).length} ${n.countLabel}`:""),h=A(()=>n.enableMultiple?n.countLabel?r.value:(a.value??[]).map(V=>V.name).join(", "):n.fileName??(a.value??[]).map(V=>V.name).join(", "));return(V,M)=>{const H=Oe;return l(),k("div",xn,[(l(),b(sn(e(d)?"div":"label"),$e(e(d)?{}:e(g),{class:e(d)?"file-preview-container av-radius-lg av-p-xs":""}),{default:B(()=>[m("div",{class:tn(e(d)?"":"file-upload-container av-radius-lg av-p-xs")},[m("div",Hn,[m("div",_n,[x(V.$slots,"left",{},()=>[X(W,{size:2.5,name:e(w).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),m("div",Bn,[e(d)?(l(),k("div",wn,[m("span",Rn,_(e(h)),1)])):(l(),k("div",En,[m("span",qn,_(e(n).title),1),m("span",Dn,_(e(n).description),1),e(r)?(l(),k("span",In,_(e(r)),1)):N("",!0)])),e(n).validMessage?(l(),b(H,{key:2,type:"success",message:e(n).validMessage},null,8,["message"])):N("",!0),e(n).error?(l(),b(H,{key:3,type:"error",message:e(n).error},null,8,["message"])):N("",!0)]),e(n).disabled?N("",!0):(l(),k("div",Tn,[e(d)?(l(),b(fn,{key:0,icon:e(n).enableMultiple?e(w).DELETE_SWEEP_OUTLINE:e(w).TRASH_CAN_OUTLINE,label:e(n).deleteButtonLabel??"Remove","icon-only":"",size:"LG","icon-scale":e(n).enableMultiple?1.9:void 0,onClick:M[0]||(M[0]=()=>e(c)())},null,8,["icon","label","icon-scale"])):(l(),b(W,{key:1,size:1.5,name:e(w).TRAY_UPLOAD,color:"var(--color-primary-text)"},null,8,["name"]))])),e(d)?N("",!0):(l(),k("input",{key:1,id:e(t),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(t)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(i),multiple:e(n).enableMultiple,onChange:M[1]||(M[1]=U=>e(p)(U))},null,40,Pn))])],2)]),_:3},16,["class"])),m("span",Ln,[x(V.$slots,"hint",{},void 0,!0)])])}}}),Cn=Q(K,[["__scopeId","data-v-d5b04286"]]);K.__docgenInfo=Object.assign({displayName:K.name??K.__name},{exportName:"default",displayName:"AvFileUploadDefault",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"left",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"});const Sn={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},Y=J({__name:"AvFileUploadFilePills",setup(o){const{props:n,modelValue:a,onClear:t}=Z(),i=A(()=>{var g;return(g=a.value)!=null&&g.length?a.value.map(p=>({name:p.name,size:p.size,type:yn(p.name)})):n.fileName?[{name:n.fileName,size:void 0,type:void 0}]:[]});return(g,p)=>{const c=gn;return e(i).length>0&&e(n).enableMultiple?(l(),k("div",Sn,[(l(!0),k(dn,null,ln(e(i),(d,r)=>(l(),b(c,{key:`${d.name}-${r}`,name:d.name,size:d.size,type:d.type,deletable:!e(n).disabled,"download-prefix-label":e(n).filePillDownloadPrefixLabel,"delete-prefix-label":e(n).filePillDeletePrefixLabel,onDelete:()=>{var h;return e(t)((h=e(a))!=null&&h.length?e(a)[r]:r)}},null,8,["name","size","type","deletable","download-prefix-label","delete-prefix-label","onDelete"]))),128))])):N("",!0)}}}),zn=Q(Y,[["__scopeId","data-v-5cdc01a3"]]);Y.__docgenInfo=Object.assign({displayName:Y.name??Y.__name},{exportName:"default",displayName:"AvFileUploadFilePills",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadFilePills.vue"});const G=J({inheritAttrs:!1,__name:"AvFileUpload",props:ae({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{type:[Number,Function],default:void 0},maxFiles:{default:void 0},error:{default:""},validMessage:{default:""},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},countLabel:{},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1},filePillDownloadPrefixLabel:{default:"Download"},filePillDeletePrefixLabel:{default:"Delete"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{},modelModifiers:{}}),emits:ae(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError","maxFilesError"],["update:modelValue"]),setup(o,{emit:n}){const a=o,t=n,i=rn(o,"modelValue"),{id:g,accept:p,maxFileSizeMb:c,ariaLabel:d,disabled:r,validMessage:h,error:V}=pn(a),M=A(()=>g.value??`file-upload-${crypto.randomUUID()}`),H=A(()=>Array.isArray(p.value)?p.value.join(","):p.value),U=mn(!1);function ne(s){var F;const{toAdd:u,errors:y}=Vn({files:s,acceptTypes:H.value,maxFileSizeMb:c.value,enableMultiple:a.enableMultiple,maxFiles:a.maxFiles,currentFilesCount:((F=i.value)==null?void 0:F.length)??0});u.length&&(a.enableMultiple?i.value=[...i.value??[],...u]:i.value=[u[0]],t("change",u)),y.includes("acceptTypeError")&&t("acceptTypeError"),y.includes("fileSizeError")&&t("fileSizeError"),y.includes("maxFilesError")&&t("maxFilesError")}async function je(s){var y,F;if(s.preventDefault(),U.value=!1,r.value||!((F=(y=s.dataTransfer)==null?void 0:y.files)!=null&&F.length))return;const u=Array.from(s.dataTransfer.files);await cn(),ne(u)}function Ke(s){s.preventDefault(),r.value||(U.value=!0)}function Ye(){U.value=!1}function Ge(s){const u=s.target.files;!u||!u.length||ne(Array.from(u))}const Je=A(()=>({for:M.value,class:["av-upload-group",{"av-upload-group--error":V.value,"av-upload-group--valid":h.value,"av-upload-group--disabled":r.value,"drag-over":U.value}],"aria-label":d.value,onDragover:Ke,onDragleave:Ye,onDrop:je}));function Qe(s){const u=(i.value??[]).filter(y=>y!==s);i.value=u.length>0?u:null}function Xe(s){const u=(i.value??[]).filter((y,F)=>F!==s);i.value=u.length>0?u:null}function Ze(s){s!==void 0?typeof s=="number"?Xe(s):Qe(s):i.value=null,t("deleteFile",s),t("update:validMessage",null),t("update:error",null),t("change",[])}const en={props:a,modelValue:i,realId:M.value,acceptTypes:H,uploadLabelAttrs:Je,onChange:Ge,onClear:Ze};return un(We,en),(s,u)=>{const y=nn;return l(),b(y,{content:e(bn)({disabled:e(r),disabledTooltip:o.disabledTooltip}),disabled:!e(oe)({disabled:e(r),disabledTooltip:o.disabledTooltip}),"force-focusable":e(oe)({disabled:e(r),disabledTooltip:o.disabledTooltip})},{default:B(()=>[X(zn),o.compact?(l(),b(Un,{key:0},{hint:B(()=>[x(s.$slots,"hint",{},void 0,!0)]),_:3})):(l(),b(Cn,{key:1},{left:B(()=>[x(s.$slots,"left",{},void 0,!0)]),hint:B(()=>[x(s.$slots,"hint",{},void 0,!0)]),_:3}))]),_:3},8,["content","disabled","force-focusable"])}}}),ee=Q(G,[["__scopeId","data-v-9133a903"]]);G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:"default",displayName:"AvFileUpload",type:1,props:[{name:"id",global:!1,default:"undefined",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:[{name:"default",text:"`file-upload-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"ariaLabel",global:!1,default:'""',description:"ARIA label for file upload button.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"accept",global:!1,default:"undefined",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | string[] | undefined",schema:{kind:"enum",type:"string | string[] | undefined",schema:["undefined","string",{kind:"array",type:"string[]"}]},declarations:[]},{name:"maxFileSizeMb",global:!1,default:"undefined",description:"Maximum allowed file size in megabytes, or a function returning the limit for a given file.",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | ((file: File) => number | undefined) | undefined",schema:{kind:"enum",type:"number | ((file: File) => number | undefined) | undefined",schema:["undefined","number",{kind:"event",type:"(file: File): number | undefined"}]},declarations:[]},{name:"maxFiles",global:!1,default:"undefined",description:"Maximum number of files allowed (only applies when `enableMultiple` is true).",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"error",global:!1,default:'""',description:"Error message to be displayed in case of upload problem.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"validMessage",global:!1,default:'""',description:"Message indicating that the uploaded file is valid.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,description:"Array of selected files.",tags:[{name:"default",text:"null"}],required:!1,type:"File[] | null | undefined",schema:{kind:"enum",type:"File[] | null | undefined",schema:["undefined","null",{kind:"array",type:"File[]"}]},declarations:[]},{name:"maxWidth",global:!1,default:'"none"',description:"Max width of the component.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"title",global:!1,description:"Title of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"description",global:!1,description:"Description of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"deleteButtonLabel",global:!1,default:'"Remove"',description:"Delete button label.",tags:[{name:"default",text:"'Remove'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"fileName",global:!1,default:"undefined",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"countLabel",global:!1,description:`Label for the file count display. Displayed when multiple files are enabled.
You do not need to include the file count in this label; it will
be automatically prefixed with the number of selected files.`,tags:[{name:"example",text:"'files selected'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:"Display in compact mode with file pills.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"enableMultiple",global:!1,default:"false",description:"Enable multiple file uploads.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"filePillDownloadPrefixLabel",global:!1,default:'"Download"',description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',tags:[{name:"default",text:"'Download'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"filePillDeletePrefixLabel",global:!1,default:'"Delete"',description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',tags:[{name:"default",text:"'Delete'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"change",description:"Event emitted when the selected file(s) change.",tags:[],type:"[payload: File[] | FileList]",signature:'(event: "change", payload: File[] | FileList): void',schema:[{kind:"enum",type:"File[] | FileList",schema:[{kind:"array",type:"File[]"},{kind:"object",type:"FileList"}]}],declarations:[]},{name:"update:modelValue",description:"Event emitted when the model value is updated.",tags:[],type:"[payload: File[] | null]",signature:'(event: "update:modelValue", payload: File[] | null): void',schema:[{kind:"enum",type:"File[] | null",schema:["null",{kind:"array",type:"File[]"}]}],declarations:[]},{name:"update:validMessage",description:"Event emitted when the validMessage is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:validMessage", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"update:error",description:"Event emitted when the error is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:error", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"deleteFile",description:"Event emitted when a file is deleted.",tags:[],type:"[payload?: number | File | undefined]",signature:'(event: "deleteFile", payload?: number | File | undefined): void',schema:[{kind:"enum",type:"number | File | undefined",schema:["undefined","number",{kind:"object",type:"File"}]}],declarations:[]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected.",tags:[],type:"[]",signature:'(event: "acceptTypeError"): void',schema:[],declarations:[]},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit.",tags:[],type:"[]",signature:'(event: "fileSizeError"): void',schema:[],declarations:[]},{name:"maxFilesError",description:"Event emitted when the number of files exceeds the configured limit.",tags:[],type:"[]",signature:'(event: "maxFilesError"): void',schema:[],declarations:[]}],slots:[{name:"hint",type:"any[]",description:"Slot for the hint description.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"left",type:"any[]",description:"Slot for the left content.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"default",type:"any[]",description:"Default slot for global content between the left and right icons.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"});const $n="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",sa={title:"Components/Interaction/Files/AvFileUpload",component:ee,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},maxFiles:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,maxFiles:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

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
</p>`}}}},v=[new File([],"Document.pdf"),new File([],"text.txt"),new File([],"Image.png"),new File([],"Audio.mp3"),new File([],"Video.mp4"),new File([],"Application.zip"),new File([],"Video.mov"),new File([],"Spreadsheet.xlsx"),new File([],"Presentation.pptx"),new File([],"Archive.rar"),new File([],"Script.js"),new File([],"Database.db"),new File([],"Vector.svg"),new File([],"Font.ttf"),new File([],"Archive.7z"),new File([],"Compressed.tar.gz"),new File([],"Executable.exe"),new File([],"Script.py")],f=o=>({components:{AvFileUpload:ee,AvIcon:W},setup(){return{args:o}},template:`
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
  `}),R=f.bind({});R.args={};const E=f.bind({});E.args={modelValue:v.slice(0,1)};const q=f.bind({});q.args={enableMultiple:!0,modelValue:v,deleteButtonLabel:"Delete all"};const D=f.bind({});D.args={enableMultiple:!0,countLabel:"files selected",modelValue:v,deleteButtonLabel:"Delete all"};const I=f.bind({});I.args={enableMultiple:!0,maxFiles:v.length,modelValue:v,deleteButtonLabel:"Delete all"};const T=f.bind({});T.args={enableMultiple:!0,maxFiles:v.length,countLabel:`/ ${v.length} files selected`,modelValue:v,deleteButtonLabel:"Delete all"};const P=f.bind({});P.args={error:"This is an error message"};const L=f.bind({});L.args={modelValue:v.slice(0,1),validMessage:"File uploaded successfully"};const C=f.bind({});C.args={modelValue:v.slice(0,1),validMessage:"File uploaded successfully",error:"The file does not meet the expected format. The file size exceeds the allowed limit. The number of files exceeds the allowed limit."};const On=o=>({components:{AvFileUpload:ee,AvIcon:W},setup(){return{args:o}},template:`
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
  `}),S=On.bind({});S.args={leftImageSrc:$n};const z=f.bind({});z.args={compact:!0,title:"Attach documents",description:""};const $=f.bind({});$.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const O=f.bind({});O.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf",modelValue:v};const da=["Default","WithFiles","Multiple","MultipleWithCountLabel","MultipleWithMaxFiles","MultipleWithMaxFilesAndCountLabel","Error","Success","SuccessAndError","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];var te,se,de;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(de=(se=R.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var le,ie,re;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(re=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var pe,ue,ce;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(ce=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,fe,ge;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ge=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,be,ve;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
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
})`,...(ve=(be=I.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var he,ke,Ve;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
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
})`,...(Ve=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var Ne,Me,Fe;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
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
})`,...(Fe=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ae,Ue,xe;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(xe=(Ue=L.parameters)==null?void 0:Ue.docs)==null?void 0:xe.source}}};var He,_e,Be;C.parameters={...C.parameters,docs:{...(He=C.parameters)==null?void 0:He.docs,source:{originalSource:`args => ({
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
})`,...(Be=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var we,Re,Ee;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
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
})`,...(Ee=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var qe,De,Ie;z.parameters={...z.parameters,docs:{...(qe=z.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(De=z.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Te,Pe,Le;$.parameters={...$.parameters,docs:{...(Te=$.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(Le=(Pe=$.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Ce,Se,ze;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(ze=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:ze.source}}};export{z as Compact,$ as CompactWithFiles,R as Default,P as Error,S as LeftSlot,q as Multiple,O as MultipleFiles,D as MultipleWithCountLabel,I as MultipleWithMaxFiles,T as MultipleWithMaxFilesAndCountLabel,L as Success,C as SuccessAndError,E as WithFiles,da as __namedExportsOrder,sa as default};
