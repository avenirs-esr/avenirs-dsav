import{_ as gn}from"./AvMessage-D7j-3NKg.js";import{A as ln}from"./AvButton-Bqhq_RNz.js";import{d as tn,y as sn,w as vn,b as on,j as k,V as hn,l,t as q,R as Z,A as U,m as H,J as dn,s as bn,z as ue,r as I,q as g,W as L,X as me,k as re,c as v,U as rn,n as yn,v as pe,p as kn}from"./iframe-DVuxXmDK.js";import{A as Vn}from"./AvList-p1SSZWtM.js";import{_ as Sn}from"./AvCheckboxListItem-BHUcglwl.js";import{A as Nn}from"./AvCheckbox-D9NDd4zN.js";import{A as An}from"./AvInput-BBH1mEKL.js";import{M as i,I as Mn}from"./icons-0TexbTrg.js";import{_ as un}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-BXOkPXeg.js";import"./AvIcon-Ci9E1SAI.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-DEFJ6mCU.js";import"./use-text-truncation-B0qpwd0t.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";import"./utils-BIlgUrNJ.js";import"./AvFieldsetElement-vXa5DjOh.js";import"./format-Dv6JKX9m.js";function _(e){return"children"in e&&Array.isArray(e.children)}function fe(e,p){const t=e.find(c=>_(c)&&c.children.some(S=>String(S.value)===String(p)));return t&&_(t)?{parentId:String(t.id)}:{}}function Cn(e,p){return e.flatMap(c=>_(c)?c.children:[c]).find(c=>String(c.value)===String(p))}function On(e,p){for(const t of e)if(_(t)){const c=t.children.find(S=>String(S.value)===String(p));if(c)return{...c,parentId:String(t.id)}}else if(String(t.value)===String(p))return t}const xn=["id"],Hn=["id"],qn={key:0,class:"av-btns-group"},Rn={key:1},En={class:"av-row av-justify-between av-align-center av-px-xs av-pt-xs av-pb-xxs"},In=["data-group-id"],Un={key:2},ae=tn({__name:"SelectCollapse",props:ue({isVisible:{type:Boolean},selected:{},options:{},hint:{default:"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"},id:{},selectAll:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchPlaceholder:{default:"Rechercher..."},selectAllLabel:{default:()=>["Tout sélectionner","Tout désélectionner"]},noResultLabel:{default:"Pas de résultat"},maxHeight:{},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},{modelValue:{required:!0},modelModifiers:{}}),emits:ue(["close"],["update:modelValue"]),setup(e,{emit:p}){rn(n=>({c14feeac:n.maxHeight}));const t=e,c=p;function S(n,a){return`${a}-${n.value}`}function N(n){return"children"in n&&Array.isArray(n.children)}const V=v(()=>Array.isArray(t.selected)?t.selected:t.selected?[t.selected]:[]),T=I(null),R=I(null);let w=!1;const y=sn(e,"modelValue"),A=I(0),C=I("");function ee(n){var s;if(w){w=!1;return}const a=n.target,m=T.value&&T.value.$el?T.value.$el:null;m!=null&&m.contains(a)||(s=R.value)!=null&&s.contains(a)||c("close")}function O(){document.removeEventListener("click",ee)}vn(()=>t.isVisible,n=>{n?yn(()=>{w=!0,document.addEventListener("click",ee)}):O()});function ne(n,a){if(!a.disabled){if(t.multiple){y.value=n;return}t.required&&n.length===0||(y.value=n.includes(a.value)?[a.value]:[],n.includes(a.value)&&c("close"))}}const E=v(()=>{const n=C.value.toLowerCase(),a=[],m=s=>s.label.toLowerCase().includes(n);for(const s of t.options){if(N(s)){const d=s.children.filter(m);d.length>0&&a.push({...s,children:d});continue}m(s)&&a.push(s)}return a}),x=v(()=>E.value.flatMap(n=>N(n)?n.children.filter(a=>!a.disabled):n.disabled?[]:[n]));function oe(n){const a=n.children.filter(s=>!s.disabled),m=new Set(V.value.map(s=>s.value));return a.length>0&&a.every(s=>m.has(s.value))}function r(n){const a=n.children.filter(d=>!d.disabled),m=new Set(V.value.map(d=>d.value)),s=a.filter(d=>m.has(d.value));return s.length>0&&s.length<a.length}function f(n){return n.children.every(a=>a.disabled)}function M(n,a){if(!t.multiple)return;const m=new Set(y.value),s=n.children.filter(d=>!d.disabled).map(d=>d.value);a.includes(!0)?s.forEach(d=>m.add(d)):s.forEach(d=>m.delete(d)),y.value=Array.from(m)}const u=v(()=>{const n=new Set(V.value.map(a=>a.value));return x.value.length>0&&x.value.every(a=>n.has(a.value))});function de(){if(!t.multiple)return;const n=new Set(y.value);u.value?x.value.forEach(a=>{n.delete(a.value)}):x.value.forEach(a=>{n.add(a.value)}),y.value=Array.from(n)}return on(O),(n,a)=>{const m=ln,s=An,d=Nn,ce=Sn,pn=Vn;return e.isVisible?(g(),k("div",{key:0,id:`${e.id}-collapse`,ref_key:"collapse",ref:R,style:hn({"--width-host":`${l(A)}px`}),class:"av-select__collapse","data-testid":"av-select-collapse"},[q("p",{id:`${e.id}-text-hint`,class:"av-sr-only"},Z(e.hint),9,Hn),e.multiple&&e.selectAll?(g(),k("ul",qn,[q("li",null,[U(m,{name:"select-all",disabled:l(x).length===0,label:e.selectAllLabel[l(u)?1:0],icon:l(u)?l(i).CLOSE_CIRCLE_OUTLINE:l(i).CHECK_CIRCLE_OUTLINE,"data-testid":l(u)?"deselect-all-button":"select-all-button",onClick:de},null,8,["disabled","label","icon","data-testid"])])])):H("",!0),e.search?(g(),k("div",Rn,[U(s,{modelValue:l(C),"onUpdate:modelValue":a[0]||(a[0]=o=>dn(C)?C.value=o:null),"aria-describedby":`${e.id}-text-hint`,"aria-controls":`${e.id}-checkboxes`,"prefix-icon":l(i).MAGNIFY,"aria-live":"polite",placeholder:e.searchPlaceholder,type:"search","data-testid":"av-select-search-input"},null,8,["modelValue","aria-describedby","aria-controls","prefix-icon","placeholder"])])):H("",!0),U(pn,{"background-color":"var(--dialog)",bordered:"","border-color":"var(--stroke)","border-radius":"var(--radius-lg)",size:"xsmall",class:"select-collapse-options-list","data-testid":"av-select-options-list"},{default:bn(()=>[(g(!0),k(L,null,me(l(E),(o,ie)=>(g(),k(L,{key:`${e.id}-option-${ie}`},[N(o)?(g(),k(L,{key:0},[q("div",En,[q("span",{class:"av-text-title b2-bold","data-testid":"av-select-group-label","data-group-id":o.id},Z(o.label),9,In),e.multiple?(g(),re(d,{key:0,id:`${e.id}-group-${ie}`,"model-value":oe(o)?[!0]:[],name:`${e.id}-group-${ie}`,value:!0,small:"",disabled:f(o),"aria-checked":r(o)?"mixed":void 0,"aria-label":`Sélectionner tout le groupe ${o.label}`,"data-testid":"av-select-group-option","data-group-id":o.id,"onUpdate:modelValue":b=>M(o,b)},null,8,["id","model-value","name","disabled","aria-checked","aria-label","data-group-id","onUpdate:modelValue"])):H("",!0)]),(g(!0),k(L,null,me(o.children,b=>(g(),re(ce,{id:b.value.toString(),key:S(b,e.id),"model-value":y.value,"list-id":"select-collapse-options-list","aria-label":b.label,label:b.label,icon:b.icon,disabled:b.disabled,"disabled-tooltip":b.disabledTooltip,"data-testid":"av-select-child-option","data-group-id":o.id,"data-child-id":String(b.value),"onUpdate:modelValue":fn=>ne(fn,b)},null,8,["id","model-value","aria-label","label","icon","disabled","disabled-tooltip","data-group-id","data-child-id","onUpdate:modelValue"]))),128))],64)):(g(),re(ce,{id:o.value.toString(),key:S(o,e.id),class:"ungroup-option","model-value":y.value,"list-id":"select-collapse-options-list","aria-label":o.label,label:o.label,icon:o.icon,disabled:o.disabled,"disabled-tooltip":o.disabledTooltip,"data-testid":"av-select-option","data-option-id":String(o.value),"onUpdate:modelValue":b=>ne(b,o)},null,8,["id","model-value","aria-label","label","icon","disabled","disabled-tooltip","data-option-id","onUpdate:modelValue"]))],64))),128))]),_:1}),l(E).length===0?(g(),k("div",Un,Z(e.noResultLabel),1)):H("",!0)],12,xn)):H("",!0)}}}),Tn=un(ae,[["__scopeId","data-v-e1cb5b1d"]]);ae.__docgenInfo=Object.assign({displayName:ae.name??ae.__name},{exportName:"default",displayName:"SelectCollapse",type:1,props:[{name:"isVisible",global:!1,description:"",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"selected",global:!1,description:"",tags:[],required:!0,type:"AvSelectSelectedOption | AvSelectSelectedOption[] | null",schema:{kind:"enum",type:"AvSelectSelectedOption | AvSelectSelectedOption[] | null",schema:["null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]},declarations:[]},{name:"options",global:!1,description:"",tags:[],required:!0,type:"AvSelectItem[]",schema:{kind:"array",type:"AvSelectItem[]"},declarations:[]},{name:"hint",global:!1,default:'"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"selectAll",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"search",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"searchPlaceholder",global:!1,default:'"Rechercher..."',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"selectAllLabel",global:!1,default:'["Tout sélectionner", "Tout désélectionner"]',description:"",tags:[],required:!1,type:"[string, string] | undefined",schema:{kind:"enum",type:"[string, string] | undefined",schema:["undefined",{kind:"array",type:"[string, string]"}]},declarations:[]},{name:"noResultLabel",global:!1,default:'"Pas de résultat"',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"maxHeight",global:!1,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"multiple",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"required",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"modelValue",global:!1,description:"Internal model is always an array, including single-select mode.",tags:[],required:!0,type:"(string | number)[]",schema:{kind:"array",type:"(string | number)[]"},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"close",description:"",tags:[],type:"[]",signature:'(event: "close"): void',schema:[],declarations:[]},{name:"update:modelValue",description:"",tags:[],type:"[value: (string | number)[]]",signature:'(event: "update:modelValue", value: (string | number)[]): void',schema:[{kind:"array",type:"(string | number)[]"}],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/components/SelectCollapse.vue"});const wn=["for"],Ln={class:"b2-light"},$n={key:0,class:"required"},Gn={key:1,class:"av-hint-text"},le=tn({__name:"AvSelect",props:ue({id:{},hint:{default:""},collapseHint:{default:"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"},label:{},labelVisible:{type:Boolean,default:!0},labelClass:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean},selectedText:{},selectAll:{type:Boolean,default:!1},selectAllLabel:{default:()=>["Tout sélectionner","Tout désélectionner"]},search:{type:Boolean,default:!1},searchPlaceholder:{default:"Rechercher..."},width:{},height:{},collapseMaxHeight:{},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1},prefixIcon:{},disabled:{type:Boolean},disabledTooltip:{}},{modelValue:{default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(e){rn(r=>({v93b48d5a:r.width,v167b118c:r.height}));const p=sn(e,"modelValue"),t=v(()=>e.id??`select-${crypto.randomUUID()}`),c=I(null),S=v(()=>e.errorMessage||e.successMessage),N=v(()=>e.errorMessage?"error":"success"),V=v(()=>(Array.isArray(p.value)?p.value:p.value?[p.value]:[]).map(f=>({...f,...fe(e.options,f.value)}))),T=v(()=>V.value.flatMap(({value:r})=>{const f=Cn(e.options,r);return f?[{...f,...fe(e.options,f.value)}]:[]})),R=v({get:()=>V.value.map(r=>r.value),set:r=>{const f=r.flatMap(M=>{const u=On(e.options,M);return u?[u]:[]});if(e.multiple){p.value=f;return}p.value=f[0]??null,O()}}),w=v(()=>{var M;if(V.value.length===0)return e.placeholder;if(e.multiple)return e.selectedText??V.value.map(u=>u.label).join(", ");const r=V.value[0];return((M=e.options.flatMap(u=>_(u)?u.children:[u]).find(u=>String(u.value)===String(r.value)))==null?void 0:M.label)??e.placeholder}),y=v(()=>V.value.length>0),A=I(!1);function C(r){r.key==="Escape"&&O()}function ee(){e.disabled||(A.value=!0,document.addEventListener("keydown",C))}function O(){A.value=!1,E()}function ne(){A.value?O():ee()}function E(){document.removeEventListener("keydown",C)}on(E);const x=v(()=>["av-label",{invisible:!e.labelVisible},e.labelClass]),oe=v(()=>({"--icon-path":`url(${Mn.MDI_KEYBOARD_ARROW_DOWN})`}));return(r,f)=>{const M=ln,u=gn;return g(),k(L,null,[q("div",{class:pe(["av-select-group",{[`av-select-group--${l(N)}`]:l(S)}])},[q("label",{class:pe(l(x)),for:l(t)},[q("span",Ln,Z(e.label),1),e.required?(g(),k("span",$n)):H("",!0),e.hint?(g(),k("span",Gn,Z(e.hint),1)):H("",!0)],10,wn),U(M,kn({id:l(t),ref_key:"host",ref:c,type:"button",variant:"OUTLINED","data-testid":"av-select"},r.$attrs,{label:l(w),icon:e.prefixIcon,class:["av-select av-justify-between",{"av-select--is-open":l(A),"av-select--dense":e.dense,"av-select--unselected":!l(y),"av-select--selected":l(y)}],disabled:e.disabled,"disabled-tooltip":e.disabledTooltip,"aria-expanded":l(A),"aria-controls":`${l(t)}-collapse`,"no-sentence-case":"",size:e.dense?"MD":"LG",style:l(oe),onClick:ne}),null,16,["id","label","icon","disabled","disabled-tooltip","aria-expanded","aria-controls","class","size","style"]),U(Tn,{id:l(t),modelValue:l(R),"onUpdate:modelValue":f[0]||(f[0]=de=>dn(R)?R.value=de:null),hint:e.collapseHint,"is-visible":l(A),"select-all":e.multiple&&e.selectAll,"select-all-label":e.selectAllLabel,search:e.search,"search-placeholder":e.searchPlaceholder,options:e.options,selected:l(T),"max-height":e.collapseMaxHeight,multiple:e.multiple,required:e.required,onClose:O},null,8,["id","modelValue","hint","is-visible","select-all","select-all-label","search","search-placeholder","options","selected","max-height","multiple","required"])],2),U(u,{"message-id":`select-${l(N)}-desc-${l(N)}`,type:l(N),message:l(S)},null,8,["message-id","type","message"])],64)}}}),cn=un(le,[["__scopeId","data-v-fc43dfcb"]]);le.__docgenInfo=Object.assign({displayName:le.name??le.__name},{exportName:"default",displayName:"AvSelect",type:1,props:[{name:"id",global:!1,description:"Unique id for the select. Used for accessibility.",tags:[{name:"default",text:"select-${crypto.randomUUID()}"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"hint",global:!1,default:'""',description:"Hint for guidance.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseHint",global:!1,default:'"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"',description:"Screen reader only hint for collapse.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"label",global:!1,description:"Select text label.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"labelVisible",global:!1,default:"true",description:"Whether the label is visible or not.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"labelClass",global:!1,default:'""',description:"CSS class for the label.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"options",global:!1,default:"[]",description:"Selectable options.",tags:[{name:"default",text:"[]"}],required:!1,type:"AvSelectItem[] | undefined",schema:{kind:"enum",type:"AvSelectItem[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectItem[]"}]},declarations:[]},{name:"successMessage",global:!1,default:'""',description:"If set, display a success message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"errorMessage",global:!1,default:'""',description:"If set, display an error message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"placeholder",global:!1,description:"Placeholder text.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"dense",global:!1,description:"Dense mode.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectedText",global:!1,description:`Displayed text when options are selected in multiple mode.
Fallback to labels from model value joined by a comma.`,tags:[{name:"default",text:"'undefined'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"selectAll",global:!1,default:"false",description:"Displays the select all items button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectAllLabel",global:!1,default:'["Tout sélectionner", "Tout désélectionner"]',description:"Labels for the select all items button.",tags:[],required:!1,type:"[string, string] | undefined",schema:{kind:"enum",type:"[string, string] | undefined",schema:["undefined",{kind:"array",type:"[string, string]"}]},declarations:[]},{name:"search",global:!1,default:"false",description:"Displays the search bar.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"searchPlaceholder",global:!1,default:'"Rechercher..."',description:"Placeholder for the search input.",tags:[{name:"default",text:"'Rechercher...'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"width",global:!1,description:"Fixes the width of the multiselect.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"height",global:!1,description:"Fixes the height of the multiselect.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseMaxHeight",global:!1,description:"Max height of the collapse list of options.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"multiple",global:!1,default:"false",description:"Whether multiple options can be selected.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"required",global:!1,default:"false",description:"Whether the select is required.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"prefixIcon",global:!1,description:"Prefix icon for the select.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,default:"null",description:"",tags:[],required:!1,type:"AvSelectModelValue | undefined",schema:{kind:"enum",type:"AvSelectModelValue | undefined",schema:["undefined","null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: AvSelectModelValue]",signature:'(event: "update:modelValue", value: AvSelectModelValue): void',schema:[{kind:"enum",type:"AvSelectModelValue",schema:["null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]}],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"});const sa={title:"Components/Interaction/Selects/AvSelect",component:cn,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},dense:{control:"boolean"},multiple:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{type:{name:"AvSelectOption[] | AvSelectOption | null",required:!1},control:!1},label:{control:"text"},options:{type:{name:"AvSelectItem[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},selectAll:{control:"boolean"},search:{control:"boolean"},searchPlaceholder:{control:"text"},width:{control:"text"},height:{control:"text"},selectedText:{control:"text"}},args:{options:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2 with a long text"},{value:"3",label:"Choice 3"},{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,multiple:!1,name:"av-select",hint:"",modelValue:null,label:"",successMessage:"",errorMessage:"",dense:!1,selectAll:!1,search:!1,searchPlaceholder:"Rechercher..."},parameters:{docs:{story:{height:"20rem"}}}},h=e=>({components:{AvSelect:cn},setup(){return{args:e}},template:`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  `}),mn=[{value:"1",label:"Choice 1",icon:i.ATTACH_FILE},{value:"2",label:"Choice 2",icon:i.CHAT_ALERT},{value:"3",label:"Choice 3",icon:i.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:i.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:i.IMAGE_OUTLINE}],te=[{id:"group-1",label:"Group 1",children:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"}]},{value:"3",label:"Ungrouped choice"},{id:"group-2",label:"Group 2",children:[{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5",disabled:!0,disabledTooltip:"This option is disabled"}]}],se=[{value:"1",label:"Choice 1",icon:i.ATTACH_FILE},{value:"2",label:"Choice 2",icon:i.CHAT_ALERT},{value:"3",label:"Choice 3",icon:i.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:i.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:i.IMAGE_OUTLINE},{value:"6",label:"Choice 6",icon:i.ATTACH_FILE},{value:"7",label:"Choice 7",icon:i.CHAT_ALERT},{value:"8",label:"Choice 8",icon:i.CONTENT_SAVE_OUTLINE},{value:"9",label:"Choice 9",icon:i.ELECTRON_FRAMEWORK},{value:"10",label:"Choice 10",icon:i.IMAGE_OUTLINE}],$=h.bind({});$.args={label:"Select",multiple:!1,modelValue:null};const G=h.bind({});G.args={label:"Multiple select",multiple:!0,modelValue:[]};const P=h.bind({});P.args={dense:!0,label:"Dense Select",multiple:!1,modelValue:null};const B=h.bind({});B.args={dense:!0,label:"Dense Multiple Select",multiple:!0,modelValue:[]};const D=h.bind({});D.args={options:mn,label:"Options with icon",multiple:!1,modelValue:null};const W=h.bind({});W.args={options:mn,label:"Options with icon - multiple",multiple:!0,modelValue:[]};const J=h.bind({});J.args={options:te,label:"Grouped options",multiple:!1,modelValue:null};const F=h.bind({});F.args={options:te,label:"Grouped options - multiple",multiple:!0,modelValue:[]};const j=h.bind({});j.args={options:te,modelValue:{value:"1",label:"Choice 1"},label:"Grouped options with selected value",multiple:!1};const z=h.bind({});z.args={options:te,modelValue:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"}],label:"Grouped options with selected values - multiple",multiple:!0};const K=h.bind({});K.args={options:se,label:"Collapse max height",collapseMaxHeight:"150px",multiple:!1,modelValue:null};const Y=h.bind({});Y.args={options:se,label:"Collapse max height - multiple",collapseMaxHeight:"150px",multiple:!0,modelValue:[]};const X=h.bind({});X.args={options:se,label:"Constrained width",width:"200px",multiple:!1,modelValue:null};const Q=h.bind({});Q.args={options:se,label:"Constrained width - multiple",width:"200px",multiple:!0,modelValue:[]};const oa=["Default","Multiple","Dense","DenseMultiple","OptionsWithIcon","OptionsWithIconMultiple","GroupedOptions","GroupedOptionsMultiple","GroupedOptionsWithSelectedValues","GroupedOptionsWithSelectedValuesMultiple","CollapseMaxHeight","CollapseMaxHeightMultiple","ConstrainedWidth","ConstrainedWidthMultiple"];var ge,ve,he;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(he=(ve=$.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var be,ye,ke;G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(ke=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Ve,Se,Ne;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Ne=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ae,Me,Ce;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Ce=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var Oe,xe,He;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(He=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:He.source}}};var qe,Re,Ee;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Ee=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Ie,Ue,Te;J.parameters={...J.parameters,docs:{...(Ie=J.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Te=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:Te.source}}};var we,Le,$e;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...($e=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Ge,Pe,Be;j.parameters={...j.parameters,docs:{...(Ge=j.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Be=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var De,We,Je;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Je=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Fe,je,ze;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(ze=(je=K.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var Ke,Ye,Xe;Y.parameters={...Y.parameters,docs:{...(Ke=Y.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(Xe=(Ye=Y.parameters)==null?void 0:Ye.docs)==null?void 0:Xe.source}}};var Qe,Ze,_e;X.parameters={...X.parameters,docs:{...(Qe=X.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(_e=(Ze=X.parameters)==null?void 0:Ze.docs)==null?void 0:_e.source}}};var en,nn,an;Q.parameters={...Q.parameters,docs:{...(en=Q.parameters)==null?void 0:en.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(an=(nn=Q.parameters)==null?void 0:nn.docs)==null?void 0:an.source}}};export{K as CollapseMaxHeight,Y as CollapseMaxHeightMultiple,X as ConstrainedWidth,Q as ConstrainedWidthMultiple,$ as Default,P as Dense,B as DenseMultiple,J as GroupedOptions,F as GroupedOptionsMultiple,j as GroupedOptionsWithSelectedValues,z as GroupedOptionsWithSelectedValuesMultiple,G as Multiple,D as OptionsWithIcon,W as OptionsWithIconMultiple,oa as __namedExportsOrder,sa as default};
