import{A as G}from"./AvIcon-CRHW8UYS.js";import{A as cn}from"./AvTooltip-DcnYYCyS.js";import{I as mn,d as X,U as fn,l as e,q as r,j as N,t as g,A as Y,R,p as Qe,k as V,m as x,x as D,s as _,v as gn,Z as yn,c as U,X as en,W as se,r as de,n as bn,y as vn,a3 as hn,a9 as kn,z as re,D as J,S as Nn}from"./iframe-B_3RwuDW.js";import{_ as nn}from"./AvMessage-DGlAI_pw.js";import{M as B}from"./icons-D_DndLKB.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Vn}from"./AvButton-DwlUIsvD.js";import{A as Mn}from"./AvModal-BIr333L2.js";import{A as Fn,g as An}from"./AvFilePill-iioxIGg4.js";import{i as pe,g as Un}from"./utils-BIlgUrNJ.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-BmUvcwok.js";import"./use-text-truncation-kg_Zk0sw.js";import"./string-BZgCOP9D.js";import"./focus-trap-vue.esm-browser-B6-J7C8M.js";import"./focus-trap.esm-BO0Icfjz.js";import"./AvCancelConfirmButtons-DDlLqlrs.js";import"./AvCheckbox-BOpw3CHp.js";import"./AvFieldsetElement-qrN4MWxP.js";import"./AvCheckboxesGroup-djB94Xbv.js";import"./AvFieldset-CjWpZtHa.js";import"./AvCheckboxListItem-Dy1hPdzA.js";import"./AvList-BD3UCEzd.js";import"./AvRadioButton-BANlgNxt.js";import"./AvRadioButtonSet-BTqA5Paw.js";const an=Symbol("AvFileUploadContext");function te(){const a=mn(an);if(!a)throw new Error("useFileUploadContext must be used within AvFileUpload component");return a}const Hn={class:"av-compact-upload"},xn={class:"b2-regular"},_n=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Dn={class:"caption-light"},Q=X({__name:"AvFileUploadCompact",setup(a){fn(p=>({v4071cdae:e(n).maxWidth}));const{props:n,realId:o,acceptTypes:t,uploadLabelAttrs:l,onChange:s}=te();return(p,c)=>{const d=nn;return r(),N("div",Hn,[g("label",Qe(e(l),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[Y(G,{size:1.5,name:e(B).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),g("span",xn,R(e(n).title),1),g("input",{id:e(o),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(o)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(t),multiple:e(n).enableMultiple,onChange:c[0]||(c[0]=i=>e(s)(i))},null,40,_n)],16),e(n).validMessage?(r(),V(d,{key:0,type:"success",message:e(n).validMessage},null,8,["message"])):x("",!0),e(n).error?(r(),V(d,{key:1,type:"error",message:e(n).error},null,8,["message"])):x("",!0),g("span",Dn,[D(p.$slots,"hint",{},void 0,!0)])])}}}),wn=Z(Q,[["__scopeId","data-v-70602992"]]);Q.__docgenInfo=Object.assign({displayName:Q.name??Q.__name},{exportName:"default",displayName:"AvFileUploadCompact",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"});const Rn={class:"av-default-upload"},Bn={class:"av-row av-align-center av-gap-xs"},En={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},qn={class:"content-container av-col"},Cn={key:0},In={class:"b2-bold"},Tn={key:1,class:"av-col av-gap-xxs"},Ln={class:"b2-regular"},Pn={class:"caption-light"},Sn={key:0,class:"b2-bold"},$n={key:0,class:"av-px-xs"},zn=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],On={class:"caption-light"},ee=X({__name:"AvFileUploadDefault",setup(a){const{props:n,modelValue:o,realId:t,acceptTypes:l,uploadLabelAttrs:s,onChange:p,onClear:c}=te(),d=U(()=>!!n.fileName||o.value&&o.value.length>0||n.enableMultiple&&o.value&&o.value.length>=(n.maxFiles??1/0)),i=U(()=>n.countLabel?`${(o.value??[]).length} ${n.countLabel}`:""),u=U(()=>n.enableMultiple?n.countLabel?i.value:(o.value??[]).map(h=>h.name).join(", "):n.fileName??(o.value??[]).map(h=>h.name).join(", "));return(h,M)=>{const F=nn;return r(),N("div",Rn,[(r(),V(yn(e(d)?"div":"label"),Qe(e(d)?{}:e(s),{class:e(d)?"file-preview-container av-radius-lg av-p-xs":""}),{default:_(()=>[g("div",{class:gn(e(d)?"":"file-upload-container av-radius-lg av-p-xs")},[g("div",Bn,[g("div",En,[D(h.$slots,"left",{},()=>[Y(G,{size:2.5,name:e(B).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),g("div",qn,[e(d)?(r(),N("div",Cn,[g("span",In,R(e(u)),1)])):(r(),N("div",Tn,[g("span",Ln,R(e(n).title),1),g("span",Pn,R(e(n).description),1),(e(o)??[]).length>0&&e(n).countLabel?(r(),N("span",Sn,R(e(i)),1)):x("",!0)])),e(n).validMessage?(r(),V(F,{key:2,type:"success",message:e(n).validMessage},null,8,["message"])):x("",!0),e(n).error?(r(),V(F,{key:3,type:"error",message:e(n).error},null,8,["message"])):x("",!0)]),e(n).disabled?x("",!0):(r(),N("div",$n,[e(d)?(r(),V(Vn,{key:0,icon:e(n).enableMultiple?e(B).DELETE_SWEEP_OUTLINE:e(B).TRASH_CAN_OUTLINE,label:e(n).deleteButtonLabel??"Remove","icon-only":"",size:"LG","icon-scale":e(n).enableMultiple?1.9:void 0,onClick:M[0]||(M[0]=()=>e(c)())},null,8,["icon","label","icon-scale"])):(r(),V(G,{key:1,size:1.5,name:e(B).TRAY_UPLOAD,color:"var(--color-primary-text)"},null,8,["name"]))])),e(d)?x("",!0):(r(),N("input",{key:1,id:e(t),class:"av-upload",type:"file","aria-describedby":e(n).error||e(n).validMessage?`${e(t)}-desc`:"",disabled:e(n).disabled,"aria-disabled":e(n).disabled,accept:e(l),multiple:e(n).enableMultiple,onChange:M[1]||(M[1]=m=>e(p)(m))},null,40,zn))])],2)]),_:3},16,["class"])),g("span",On,[D(h.$slots,"hint",{},void 0,!0)])])}}}),Wn=Z(ee,[["__scopeId","data-v-be1c2aa0"]]);ee.__docgenInfo=Object.assign({displayName:ee.name??ee.__name},{exportName:"default",displayName:"AvFileUploadDefault",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"left",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"hint",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"});const jn={class:"n5"},Kn={class:"av-col b2-regular confirm-delete-modal"},ne=X({__name:"AvFileUploadDeleteModal",props:{opened:{type:Boolean},pendingDeleteFiles:{}},emits:["close","confirm"],setup(a){const{props:n}=te();return(o,t)=>{const l=Mn;return r(),V(l,{opened:a.opened,"close-button-label":e(n).confirmDeleteModalCancelLabel,"confirm-button-label":e(n).confirmDeleteModalConfirmLabel,"confirm-button-icon":e(B).TRASH_CAN_OUTLINE,onClose:t[0]||(t[0]=s=>o.$emit("close")),onConfirm:t[1]||(t[1]=s=>o.$emit("confirm"))},{header:_(()=>[g("span",jn,R(e(n).confirmDeleteModalTitle),1)]),default:_(()=>[D(o.$slots,"default",{files:a.pendingDeleteFiles},()=>[g("div",Kn,[g("ul",null,[(r(!0),N(se,null,en(a.pendingDeleteFiles,(s,p)=>(r(),N("li",{key:`${s.name}-${p}`},R(s.name),1))),128))])])],!0)]),_:3},8,["opened","close-button-label","confirm-button-label","confirm-button-icon"])}}}),Yn=Z(ne,[["__scopeId","data-v-9efa2ae4"]]);ne.__docgenInfo=Object.assign({displayName:ne.name??ne.__name},{exportName:"default",displayName:"AvFileUploadDeleteModal",type:1,props:[{name:"opened",global:!1,description:"",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"pendingDeleteFiles",global:!1,description:"",tags:[],required:!0,type:"(File | { name: string; })[]",schema:{kind:"array",type:"(File | { name: string; })[]"},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"close",description:"",tags:[],type:"[]",signature:'(event: "close"): void',schema:[],declarations:[]},{name:"confirm",description:"",tags:[],type:"[]",signature:'(event: "confirm"): void',schema:[],declarations:[]}],slots:[{name:"default",type:"[{ files: (File | { name: string; })[]; }]",description:"",tags:[],schema:{kind:"array",type:"[{ files: (File | { name: string; })[]; }]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDeleteModal.vue"});const Gn={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},ae=X({__name:"AvFileUploadFilePills",setup(a){const{props:n,modelValue:o,onClear:t}=te(),l=U(()=>{var s;return(s=o.value)!=null&&s.length?o.value.map(p=>({name:p.name,size:p.size,type:An(p.name)})):n.fileName?[{name:n.fileName,size:void 0,type:void 0}]:[]});return(s,p)=>{const c=Fn;return e(l).length>0&&e(n).enableMultiple?(r(),N("div",Gn,[(r(!0),N(se,null,en(e(l),(d,i)=>(r(),V(c,{key:`${d.name}-${i}`,name:d.name,size:d.size,type:d.type,deletable:!e(n).disabled,"download-prefix-label":e(n).filePillDownloadPrefixLabel,"delete-prefix-label":e(n).filePillDeletePrefixLabel,onDelete:()=>{var u;return e(t)((u=e(o))!=null&&u.length?e(o)[i]:i)}},null,8,["name","size","type","deletable","download-prefix-label","delete-prefix-label","onDelete"]))),128))])):x("",!0)}}}),Xn=Z(ae,[["__scopeId","data-v-5cdc01a3"]]);ae.__docgenInfo=Object.assign({displayName:ae.name??ae.__name},{exportName:"default",displayName:"AvFileUploadFilePills",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadFilePills.vue"});function Zn({modelValue:a,confirmDelete:n,fileName:o,emitDeleteFile:t,emitValidMessageUpdate:l,emitErrorUpdate:s,emitChange:p}){function c(m){if(m!==void 0){const A=typeof m=="number"?(a.value??[]).filter((y,b)=>b!==m):(a.value??[]).filter(y=>y!==m);a.value=A.length>0?A:null}else a.value=null;t(m),l(null),s(null),p([])}const d=de(!1),i=de(),u=U(()=>{const m=a.value??[];if(i.value===void 0)return m.length?m:o.value?[{name:o.value}]:[];const A=typeof i.value=="number"?m[i.value]:i.value;return A?[A]:[]});function h(m){if(n.value){i.value=m,d.value=!0;return}c(m)}function M(){d.value=!1,i.value=void 0}function F(){d.value=!1,c(i.value),i.value=void 0}return{isDeleteConfirmationOpen:d,pendingDeleteFiles:u,onClear:h,cancelDelete:M,confirmDelete:F}}function Jn({file:a,acceptTypes:n}){return n?n.split(",").map(t=>t.trim().toLowerCase()).some(t=>t.startsWith(".")?a.name.toLowerCase().endsWith(t):t.includes("/")?a.type===t||a.type.startsWith(`${t.split("/")[0]}/`):!1):!0}function Qn({file:a,maxFileSizeMb:n}){const o=typeof n=="function"?n(a):n;return o===void 0||o<=0?!0:a.size<=o*1024*1024}function ea({enableMultiple:a,maxFiles:n,currentFilesCount:o}){return a?n===void 0||n<=0?1/0:Math.max(n-o,0):1}function na({files:a,acceptTypes:n,maxFileSizeMb:o,enableMultiple:t,maxFiles:l,currentFilesCount:s}){const p=[],c=a.filter(u=>Jn({file:u,acceptTypes:n}));c.length<a.length&&p.push("acceptTypeError");const d=c.filter(u=>Qn({file:u,maxFileSizeMb:o}));d.length<c.length&&p.push("fileSizeError");const i=d.slice(0,ea({enableMultiple:t,maxFiles:l,currentFilesCount:s}));return i.length<d.length&&p.push("maxFilesError"),{toAdd:i,errors:p}}function aa({acceptTypes:a,maxFileSizeMb:n,enableMultiple:o,maxFiles:t,disabled:l,modelValue:s,emitChange:p,emitAcceptTypeError:c,emitFileSizeError:d,emitMaxFilesError:i}){const u=de(!1);function h(y){var w;const{toAdd:b,errors:H}=na({files:y,acceptTypes:a.value,maxFileSizeMb:n.value,enableMultiple:o.value,maxFiles:t.value,currentFilesCount:((w=s.value)==null?void 0:w.length)??0});b.length&&(o.value?s.value=[...s.value??[],...b]:s.value=[b[0]],p(b)),H.includes("acceptTypeError")&&c(),H.includes("fileSizeError")&&d(),H.includes("maxFilesError")&&i()}async function M(y){var H,w;if(y.preventDefault(),u.value=!1,l.value||!((w=(H=y.dataTransfer)==null?void 0:H.files)!=null&&w.length))return;const b=Array.from(y.dataTransfer.files);await bn(),h(b)}function F(y){y.preventDefault(),l.value||(u.value=!0)}function m(){u.value=!1}function A(y){const b=y.target.files;!b||!b.length||h(Array.from(b))}return{isDragging:u,onChange:A,onDragOver:F,onDragLeave:m,onDrop:M}}const oe=X({inheritAttrs:!1,__name:"AvFileUpload",props:re({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{type:[Number,Function],default:void 0},maxFiles:{default:void 0},error:{default:""},validMessage:{default:""},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},countLabel:{},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1},filePillDownloadPrefixLabel:{default:"Download"},filePillDeletePrefixLabel:{default:"Delete"},confirmDelete:{type:Boolean,default:!1},confirmDeleteModalTitle:{default:"Are you sure you want to delete this(these) file(s)?"},confirmDeleteModalConfirmLabel:{default:"Delete"},confirmDeleteModalCancelLabel:{default:"Cancel"},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{modelValue:{},modelModifiers:{}}),emits:re(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError","maxFilesError"],["update:modelValue"]),setup(a,{expose:n,emit:o}){const t=a,l=o,s=vn(a,"modelValue"),{id:p,accept:c,maxFileSizeMb:d,ariaLabel:i,disabled:u,validMessage:h,error:M}=hn(t),F=U(()=>p.value??`file-upload-${crypto.randomUUID()}`),m=U(()=>Array.isArray(c.value)?c.value.join(","):c.value),{isDragging:A,onChange:y,onDragOver:b,onDragLeave:H,onDrop:w}=aa({acceptTypes:m,maxFileSizeMb:d,enableMultiple:J(t,"enableMultiple"),maxFiles:J(t,"maxFiles"),disabled:u,modelValue:s,emitChange:f=>l("change",f),emitAcceptTypeError:()=>l("acceptTypeError"),emitFileSizeError:()=>l("fileSizeError"),emitMaxFilesError:()=>l("maxFilesError")}),on=U(()=>({for:F.value,class:["av-upload-group",{"av-upload-group--error":M.value,"av-upload-group--valid":h.value,"av-upload-group--disabled":u.value,"drag-over":A.value}],"aria-label":i.value,onDragover:b,onDragleave:H,onDrop:w})),{isDeleteConfirmationOpen:tn,pendingDeleteFiles:ie,onClear:dn,cancelDelete:sn,confirmDelete:ln}=Zn({modelValue:s,confirmDelete:J(t,"confirmDelete"),fileName:J(t,"fileName"),emitDeleteFile:f=>l("deleteFile",f),emitValidMessageUpdate:f=>l("update:validMessage",f),emitErrorUpdate:f=>l("update:error",f),emitChange:f=>l("change",f)}),rn={props:t,modelValue:s,realId:F.value,acceptTypes:m,uploadLabelAttrs:on,onChange:y,onClear:dn};return Nn(an,rn),n({pendingDeleteFilesCount:U(()=>ie.value.length)}),(f,da)=>{const pn=cn;return r(),N(se,null,[Y(pn,{content:e(Un)({disabled:e(u),disabledTooltip:a.disabledTooltip}),disabled:!e(pe)({disabled:e(u),disabledTooltip:a.disabledTooltip}),"force-focusable":e(pe)({disabled:e(u),disabledTooltip:a.disabledTooltip})},{default:_(()=>[Y(Xn),a.compact?(r(),V(wn,{key:0},{hint:_(()=>[D(f.$slots,"hint",{},void 0,!0)]),_:3})):(r(),V(Wn,{key:1},{left:_(()=>[D(f.$slots,"left",{},void 0,!0)]),hint:_(()=>[D(f.$slots,"hint",{},void 0,!0)]),_:3}))]),_:3},8,["content","disabled","force-focusable"]),Y(Yn,{opened:e(tn),"pending-delete-files":e(ie),onClose:e(sn),onConfirm:e(ln)},kn({_:2},[f.$slots.confirmDeleteModalBody?{name:"default",fn:_(({files:un})=>[D(f.$slots,"confirmDeleteModalBody",{files:un},void 0,!0)]),key:"0"}:void 0]),1032,["opened","pending-delete-files","onClose","onConfirm"])],64)}}}),le=Z(oe,[["__scopeId","data-v-9810e042"]]);oe.__docgenInfo=Object.assign({displayName:oe.name??oe.__name},{exportName:"default",displayName:"AvFileUpload",type:1,props:[{name:"id",global:!1,default:"undefined",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:[{name:"default",text:"`file-upload-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"ariaLabel",global:!1,default:'""',description:"ARIA label for file upload button.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"accept",global:!1,default:"undefined",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | string[] | undefined",schema:{kind:"enum",type:"string | string[] | undefined",schema:["undefined","string",{kind:"array",type:"string[]"}]},declarations:[]},{name:"maxFileSizeMb",global:!1,default:"undefined",description:"Maximum allowed file size in megabytes, or a function returning the limit for a given file.",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | ((file: File) => number | undefined) | undefined",schema:{kind:"enum",type:"number | ((file: File) => number | undefined) | undefined",schema:["undefined","number",{kind:"event",type:"(file: File): number | undefined"}]},declarations:[]},{name:"maxFiles",global:!1,default:"undefined",description:"Maximum number of files allowed (only applies when `enableMultiple` is true).",tags:[{name:"default",text:"undefined"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"error",global:!1,default:'""',description:"Error message to be displayed in case of upload problem.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"validMessage",global:!1,default:'""',description:"Message indicating that the uploaded file is valid.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,description:"Array of selected files.",tags:[{name:"default",text:"null"}],required:!1,type:"File[] | null | undefined",schema:{kind:"enum",type:"File[] | null | undefined",schema:["undefined","null",{kind:"array",type:"File[]"}]},declarations:[]},{name:"maxWidth",global:!1,default:'"none"',description:"Max width of the component.",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"title",global:!1,description:"Title of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"description",global:!1,description:"Description of the file upload section.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"deleteButtonLabel",global:!1,default:'"Remove"',description:"Delete button label.",tags:[{name:"default",text:"'Remove'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"fileName",global:!1,default:"undefined",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:[{name:"default",text:"undefined"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"countLabel",global:!1,description:`Label for the file count display. Displayed when multiple files are enabled.
You do not need to include the file count in this label; it will
be automatically prefixed with the number of selected files.`,tags:[{name:"example",text:"'files selected'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:"Display in compact mode with file pills.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"enableMultiple",global:!1,default:"false",description:"Enable multiple file uploads.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"filePillDownloadPrefixLabel",global:!1,default:'"Download"',description:'Prefix for the download button label in AvFilePill. If not provided, the default label will be "Download {name}".',tags:[{name:"default",text:"'Download'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"filePillDeletePrefixLabel",global:!1,default:'"Delete"',description:'Prefix for the delete button label in AvFilePill. If not provided, the default label will be "Delete {name}".',tags:[{name:"default",text:"'Delete'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"confirmDelete",global:!1,default:"false",description:"Ask for confirmation before deleting selected files.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"confirmDeleteModalTitle",global:!1,default:'"Are you sure you want to delete this(these) file(s)?"',description:"Title for the confirmation modal when deleting files.",tags:[{name:"default",text:"'Are you sure you want to delete this(these) file(s)?'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"confirmDeleteModalConfirmLabel",global:!1,default:'"Delete"',description:"Label for the confirm button in the delete confirmation modal.",tags:[{name:"default",text:"'Delete'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"confirmDeleteModalCancelLabel",global:!1,default:'"Cancel"',description:"Label for the cancel button in the delete confirmation modal.",tags:[{name:"default",text:"'Cancel'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"Event emitted when the model value is updated.",tags:[],type:"[payload: File[] | null]",signature:'(event: "update:modelValue", payload: File[] | null): void',schema:[{kind:"enum",type:"File[] | null",schema:["null",{kind:"array",type:"File[]"}]}],declarations:[]},{name:"change",description:"Event emitted when the selected file(s) change.",tags:[],type:"[payload: File[] | FileList]",signature:'(event: "change", payload: File[] | FileList): void',schema:[{kind:"enum",type:"File[] | FileList",schema:[{kind:"array",type:"File[]"},{kind:"object",type:"FileList"}]}],declarations:[]},{name:"update:validMessage",description:"Event emitted when the validMessage is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:validMessage", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"update:error",description:"Event emitted when the error is updated.",tags:[],type:"[payload: string | null]",signature:'(event: "update:error", payload: string | null): void',schema:[{kind:"enum",type:"string | null",schema:["null","string"]}],declarations:[]},{name:"deleteFile",description:"Event emitted when a file is deleted.",tags:[],type:"[payload?: number | File | undefined]",signature:'(event: "deleteFile", payload?: number | File | undefined): void',schema:[{kind:"enum",type:"number | File | undefined",schema:["undefined","number",{kind:"object",type:"File"}]}],declarations:[]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected.",tags:[],type:"[]",signature:'(event: "acceptTypeError"): void',schema:[],declarations:[]},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit.",tags:[],type:"[]",signature:'(event: "fileSizeError"): void',schema:[],declarations:[]},{name:"maxFilesError",description:"Event emitted when the number of files exceeds the configured limit.",tags:[],type:"[]",signature:'(event: "maxFilesError"): void',schema:[],declarations:[]}],slots:[{name:"hint",type:"any[]",description:"Slot for the hint description.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"left",type:"any[]",description:"Slot for the left content.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"confirmDeleteModalBody",type:"[{ files: (File | { name: string; })[]; }]",description:"Slot for the confirm delete modal body.",tags:[],schema:{kind:"array",type:"[{ files: (File | { name: string; })[]; }]"},declarations:[]},{name:"default",type:"any[]",description:"Default slot for global content between the left and right icons.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[{name:"pendingDeleteFilesCount",type:"any",description:"",tags:[],schema:"any",declarations:[]}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"});const oa="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",Ra={title:"Components/Interaction/Files/AvFileUpload",component:le,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},maxFiles:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},confirmDelete:{control:"boolean"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,maxFiles:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",confirmDelete:!1,compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

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
</p>`}}}},v=[new File([],"Document.pdf"),new File([],"text.txt"),new File([],"Image.png"),new File([],"Bitmap.bmp"),new File([],"Image.jpeg"),new File([],"Image.gif"),new File([],"Audio.mp3"),new File([],"Audio.wav"),new File([],"Video.mp4"),new File([],"Video.avi"),new File([],"Application.zip"),new File([],"Video.mov"),new File([],"Spreadsheet.xlsx"),new File([],"Presentation.pptx"),new File([],"Archive.rar"),new File([],"Script.js"),new File([],"Database.db"),new File([],"Vector.svg"),new File([],"Font.ttf"),new File([],"Archive.7z"),new File([],"Compressed.tar.gz"),new File([],"Executable.exe"),new File([],"Script.py"),new File([],"Vector.ai"),new File([],"Vector.eps"),new File([],"Vector.psd"),new File([],"Vector.indd"),new File([],"Vector.cdr"),new File([],"Vector.sketch"),new File([],"Vector.figma")],k=a=>({components:{AvFileUpload:le,AvIcon:G},setup(){return{args:a}},template:`
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
  `}),E=k.bind({});E.args={};const q=k.bind({});q.args={modelValue:v.slice(0,1)};const C=k.bind({});C.args={enableMultiple:!0,modelValue:v,deleteButtonLabel:"Delete all"};const I=k.bind({});I.args={enableMultiple:!0,countLabel:"files selected",modelValue:v,deleteButtonLabel:"Delete all"};const T=k.bind({});T.args={enableMultiple:!0,maxFiles:v.length,modelValue:v,deleteButtonLabel:"Delete all"};const L=k.bind({});L.args={enableMultiple:!0,maxFiles:v.length,countLabel:`/ ${v.length} files selected`,modelValue:v,deleteButtonLabel:"Delete all"};const P=k.bind({});P.args={enableMultiple:!0,maxFiles:v.length,countLabel:`/ ${v.length} files selected`,modelValue:v,deleteButtonLabel:"Delete all",confirmDelete:!0};const S=k.bind({});S.args={error:"This is an error message"};const $=k.bind({});$.args={modelValue:v.slice(0,1),validMessage:"File uploaded successfully"};const z=k.bind({});z.args={modelValue:v.slice(0,1),validMessage:"File uploaded successfully",error:"The file does not meet the expected format. The file size exceeds the allowed limit. The number of files exceeds the allowed limit."};const ta=a=>({components:{AvFileUpload:le,AvIcon:G},setup(){return{args:a}},template:`
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
  `}),O=ta.bind({});O.args={leftImageSrc:oa};const W=k.bind({});W.args={compact:!0,title:"Attach documents",description:""};const j=k.bind({});j.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const K=k.bind({});K.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf",modelValue:v};const Ba=["Default","WithFiles","Multiple","MultipleWithCountLabel","MultipleWithMaxFiles","MultipleWithMaxFilesAndCountLabel","MultipleWithMaxFilesAndCountLabelAndConfirmDelete","Error","Success","SuccessAndError","LeftSlot","Compact","CompactWithFile","CompactMultipleFiles"];var ue,ce,me;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(me=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var fe,ge,ye;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(ye=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var be,ve,he;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(he=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ke,Ne,Ve;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Ve=(Ne=I.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Me,Fe,Ae;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`args => ({
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
})`,...(Ae=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var Ue,He,xe;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
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
})`,...(xe=(He=L.parameters)==null?void 0:He.docs)==null?void 0:xe.source}}};var _e,De,we;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
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
})`,...(we=(De=P.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var Re,Be,Ee;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(Ee=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var qe,Ce,Ie;$.parameters={...$.parameters,docs:{...(qe=$.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};var Te,Le,Pe;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(Pe=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var Se,$e,ze;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(ze=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Oe,We,je;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(je=(We=W.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var Ke,Ye,Ge;j.parameters={...j.parameters,docs:{...(Ke=j.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => ({
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
})`,...(Ge=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.source}}};var Xe,Ze,Je;K.parameters={...K.parameters,docs:{...(Xe=K.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => ({
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
})`,...(Je=(Ze=K.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};export{W as Compact,K as CompactMultipleFiles,j as CompactWithFile,E as Default,S as Error,O as LeftSlot,C as Multiple,I as MultipleWithCountLabel,T as MultipleWithMaxFiles,L as MultipleWithMaxFilesAndCountLabel,P as MultipleWithMaxFilesAndCountLabelAndConfirmDelete,$ as Success,z as SuccessAndError,q as WithFiles,Ba as __namedExportsOrder,Ra as default};
