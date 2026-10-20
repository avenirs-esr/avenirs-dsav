import{_ as vn}from"./AvMessage-B3aqs1b8.js";import{A as tn}from"./AvButton-Dfi0GG6Q.js";import{d as sn,y as on,w as hn,b as dn,j as V,V as yn,l,t as q,R as Z,A as T,m as H,J as rn,s as bn,z as ue,r as I,q as g,W as L,X as pe,k as re,c as v,U as un,n as Vn,v as fe,p as kn}from"./iframe-BT56DLmR.js";import{A as Sn}from"./AvList-BF-V7cIx.js";import{_ as Nn}from"./AvCheckboxListItem-LhZqR03k.js";import{A as An}from"./AvCheckbox-Dz2B64xE.js";import{A as Mn}from"./AvInput-uBCwldiN.js";import{M as i,I as Cn}from"./icons-CydXfigI.js";import{_ as cn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-BaZCMtx-.js";import"./AvIcon-Bj1e_f6U.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-DIov_q_k.js";import"./use-text-truncation-mZq6P6-b.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";import"./utils-BIlgUrNJ.js";import"./AvFieldsetElement-yS58wyTV.js";import"./format-Dv6JKX9m.js";function _(e){return"children"in e&&Array.isArray(e.children)}function ge(e,m){const t=e.find(u=>_(u)&&u.children.some(k=>String(k.value)===String(m)));return t&&_(t)?{parentId:String(t.id)}:{}}function xn(e,m){return e.flatMap(u=>_(u)?u.children:[u]).find(u=>String(u.value)===String(m))}function On(e,m){for(const t of e)if(_(t)){const u=t.children.find(k=>String(k.value)===String(m));if(u)return{...u,parentId:String(t.id)}}else if(String(t.value)===String(m))return t}const Hn=["id"],qn=["id"],En={key:0,class:"av-btns-group"},Rn={key:1},In={class:"av-row av-justify-between av-align-center av-px-xs av-pt-xs av-pb-xxs"},Tn=["data-group-id"],Un={key:2},ae=sn({__name:"SelectCollapse",props:ue({isVisible:{type:Boolean},selected:{},options:{},hint:{default:"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"},id:{},selectAll:{type:Boolean,default:!1},search:{type:Boolean,default:!1},selectAllLabel:{default:()=>["Tout sélectionner","Tout désélectionner"]},noResultLabel:{default:"Pas de résultat"},maxHeight:{},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},{modelValue:{required:!0},modelModifiers:{}}),emits:ue(["close"],["update:modelValue"]),setup(e,{emit:m}){un(n=>({v765dc6aa:n.maxHeight}));const t=e,u=m;function k(n,a){return`${a}-${n.value}`}function N(n){return"children"in n&&Array.isArray(n.children)}const S=v(()=>Array.isArray(t.selected)?t.selected:t.selected?[t.selected]:[]),U=I(null),E=I(null);let w=!1;const b=on(e,"modelValue"),A=I(0),C=I("");function ee(n){var s;if(w){w=!1;return}const a=n.target,c=U.value&&U.value.$el?U.value.$el:null;c!=null&&c.contains(a)||(s=E.value)!=null&&s.contains(a)||u("close")}function x(){document.removeEventListener("click",ee)}hn(()=>t.isVisible,n=>{n?Vn(()=>{w=!0,document.addEventListener("click",ee)}):x()});function ne(n,a){if(!a.disabled){if(t.multiple){b.value=n;return}t.required&&n.length===0||(b.value=n.includes(a.value)?[a.value]:[],n.includes(a.value)&&u("close"))}}const R=v(()=>{const n=C.value.toLowerCase(),a=[],c=s=>s.label.toLowerCase().includes(n);for(const s of t.options){if(N(s)){const d=s.children.filter(c);d.length>0&&a.push({...s,children:d});continue}c(s)&&a.push(s)}return a}),O=v(()=>R.value.flatMap(n=>N(n)?n.children.filter(a=>!a.disabled):n.disabled?[]:[n]));function oe(n){const a=n.children.filter(s=>!s.disabled),c=new Set(S.value.map(s=>s.value));return a.length>0&&a.every(s=>c.has(s.value))}function r(n){const a=n.children.filter(d=>!d.disabled),c=new Set(S.value.map(d=>d.value)),s=a.filter(d=>c.has(d.value));return s.length>0&&s.length<a.length}function p(n){return n.children.every(a=>a.disabled)}function M(n,a){if(!t.multiple)return;const c=new Set(b.value),s=n.children.filter(d=>!d.disabled).map(d=>d.value);a.includes(!0)?s.forEach(d=>c.add(d)):s.forEach(d=>c.delete(d)),b.value=Array.from(c)}const f=v(()=>{const n=new Set(S.value.map(a=>a.value));return O.value.length>0&&O.value.every(a=>n.has(a.value))});function de(){if(!t.multiple)return;const n=new Set(b.value);f.value?O.value.forEach(a=>{n.delete(a.value)}):O.value.forEach(a=>{n.add(a.value)}),b.value=Array.from(n)}return dn(x),(n,a)=>{const c=tn,s=Mn,d=An,me=Nn,fn=Sn;return e.isVisible?(g(),V("div",{key:0,id:`${e.id}-collapse`,ref_key:"collapse",ref:E,style:yn({"--width-host":`${l(A)}px`}),class:"av-select__collapse","data-testid":"av-select-collapse"},[q("p",{id:`${e.id}-text-hint`,class:"av-sr-only"},Z(e.hint),9,qn),e.multiple&&e.selectAll?(g(),V("ul",En,[q("li",null,[T(c,{name:"select-all",disabled:l(O).length===0,label:e.selectAllLabel[l(f)?1:0],icon:l(f)?l(i).CLOSE_CIRCLE_OUTLINE:l(i).CHECK_CIRCLE_OUTLINE,"data-testid":l(f)?"deselect-all-button":"select-all-button",onClick:de},null,8,["disabled","label","icon","data-testid"])])])):H("",!0),e.search?(g(),V("div",Rn,[T(s,{modelValue:l(C),"onUpdate:modelValue":a[0]||(a[0]=o=>rn(C)?C.value=o:null),"aria-describedby":`${e.id}-text-hint`,"aria-controls":`${e.id}-checkboxes`,"prefix-icon":l(i).MAGNIFY,"aria-live":"polite",placeholder:"Rechercher",type:"search","data-testid":"av-select-search-input"},null,8,["modelValue","aria-describedby","aria-controls","prefix-icon"])])):H("",!0),T(fn,{"background-color":"var(--dialog)",bordered:"","border-color":"var(--stroke)","border-radius":"var(--radius-lg)",size:"xsmall",class:"select-collapse-options-list","data-testid":"av-select-options-list"},{default:bn(()=>[(g(!0),V(L,null,pe(l(R),(o,ie)=>(g(),V(L,{key:`${e.id}-option-${ie}`},[N(o)?(g(),V(L,{key:0},[q("div",In,[q("span",{class:"av-text-title b2-bold","data-testid":"av-select-group-label","data-group-id":o.id},Z(o.label),9,Tn),e.multiple?(g(),re(d,{key:0,id:`${e.id}-group-${ie}`,"model-value":oe(o)?[!0]:[],name:`${e.id}-group-${ie}`,value:!0,small:"",disabled:p(o),"aria-checked":r(o)?"mixed":void 0,"aria-label":`Sélectionner tout le groupe ${o.label}`,"data-testid":"av-select-group-option","data-group-id":o.id,"onUpdate:modelValue":h=>M(o,h)},null,8,["id","model-value","name","disabled","aria-checked","aria-label","data-group-id","onUpdate:modelValue"])):H("",!0)]),(g(!0),V(L,null,pe(o.children,h=>(g(),re(me,{id:h.value.toString(),key:k(h,e.id),"model-value":b.value,"list-id":"select-collapse-options-list","aria-label":h.label,label:h.label,icon:h.icon,disabled:h.disabled,"disabled-tooltip":h.disabledTooltip,"data-testid":"av-select-child-option","data-group-id":o.id,"data-child-id":String(h.value),"onUpdate:modelValue":gn=>ne(gn,h)},null,8,["id","model-value","aria-label","label","icon","disabled","disabled-tooltip","data-group-id","data-child-id","onUpdate:modelValue"]))),128))],64)):(g(),re(me,{id:o.value.toString(),key:k(o,e.id),class:"ungroup-option","model-value":b.value,"list-id":"select-collapse-options-list","aria-label":o.label,label:o.label,icon:o.icon,disabled:o.disabled,"disabled-tooltip":o.disabledTooltip,"data-testid":"av-select-option","data-option-id":String(o.value),"onUpdate:modelValue":h=>ne(h,o)},null,8,["id","model-value","aria-label","label","icon","disabled","disabled-tooltip","data-option-id","onUpdate:modelValue"]))],64))),128))]),_:1}),l(R).length===0?(g(),V("div",Un,Z(e.noResultLabel),1)):H("",!0)],12,Hn)):H("",!0)}}}),wn=cn(ae,[["__scopeId","data-v-e98d435a"]]);ae.__docgenInfo=Object.assign({displayName:ae.name??ae.__name},{exportName:"default",displayName:"SelectCollapse",type:1,props:[{name:"isVisible",global:!1,description:"",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"selected",global:!1,description:"",tags:[],required:!0,type:"AvSelectSelectedOption | AvSelectSelectedOption[] | null",schema:{kind:"enum",type:"AvSelectSelectedOption | AvSelectSelectedOption[] | null",schema:["null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]},declarations:[]},{name:"options",global:!1,description:"",tags:[],required:!0,type:"AvSelectItem[]",schema:{kind:"array",type:"AvSelectItem[]"},declarations:[]},{name:"hint",global:!1,default:'"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"selectAll",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"search",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectAllLabel",global:!1,default:'["Tout sélectionner", "Tout désélectionner"]',description:"",tags:[],required:!1,type:"[string, string] | undefined",schema:{kind:"enum",type:"[string, string] | undefined",schema:["undefined",{kind:"array",type:"[string, string]"}]},declarations:[]},{name:"noResultLabel",global:!1,default:'"Pas de résultat"',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"maxHeight",global:!1,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"multiple",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"required",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"modelValue",global:!1,description:"Internal model is always an array, including single-select mode.",tags:[],required:!0,type:"(string | number)[]",schema:{kind:"array",type:"(string | number)[]"},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: (string | number)[]]",signature:'(event: "update:modelValue", value: (string | number)[]): void',schema:[{kind:"array",type:"(string | number)[]"}],declarations:[]},{name:"close",description:"",tags:[],type:"[]",signature:'(event: "close"): void',schema:[],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/components/SelectCollapse.vue"});const Ln=["for"],$n={class:"b2-light"},Gn={key:0,class:"required"},Bn={key:1,class:"av-hint-text"},le=sn({__name:"AvSelect",props:ue({id:{},hint:{default:""},collapseHint:{default:"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"},label:{},labelVisible:{type:Boolean,default:!0},labelClass:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean},selectedText:{default:"fichier(s) sélectionné(s)"},selectAll:{type:Boolean,default:!1},selectAllLabel:{default:()=>["Tout sélectionner","Tout désélectionner"]},search:{type:Boolean,default:!1},width:{},height:{},collapseMaxHeight:{},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1},prefixIcon:{},disabled:{type:Boolean},disabledTooltip:{}},{modelValue:{default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(e){un(r=>({v2005acff:r.width,v723e0de4:r.height}));const m=on(e,"modelValue"),t=v(()=>e.id??`select-${crypto.randomUUID()}`),u=I(null),k=v(()=>e.errorMessage||e.successMessage),N=v(()=>e.errorMessage?"error":"success"),S=v(()=>(Array.isArray(m.value)?m.value:m.value?[m.value]:[]).map(p=>({...p,...ge(e.options,p.value)}))),U=v(()=>S.value.flatMap(({value:r})=>{const p=xn(e.options,r);return p?[{...p,...ge(e.options,p.value)}]:[]})),E=v({get:()=>S.value.map(r=>r.value),set:r=>{const p=r.flatMap(M=>{const f=On(e.options,M);return f?[f]:[]});if(e.multiple){m.value=p;return}m.value=p[0]??null,x()}}),w=v(()=>{var M;if(S.value.length===0)return e.placeholder;if(e.multiple)return e.selectedText;const r=S.value[0];return((M=e.options.flatMap(f=>_(f)?f.children:[f]).find(f=>String(f.value)===String(r.value)))==null?void 0:M.label)??e.placeholder}),b=v(()=>S.value.length>0),A=I(!1);function C(r){r.key==="Escape"&&x()}function ee(){e.disabled||(A.value=!0,document.addEventListener("keydown",C))}function x(){A.value=!1,R()}function ne(){A.value?x():ee()}function R(){document.removeEventListener("keydown",C)}dn(R);const O=v(()=>["av-label",{invisible:!e.labelVisible},e.labelClass]),oe=v(()=>({"--icon-path":`url(${Cn.MDI_KEYBOARD_ARROW_DOWN})`}));return(r,p)=>{const M=tn,f=vn;return g(),V(L,null,[q("div",{class:fe(["av-select-group",{[`av-select-group--${l(N)}`]:l(k)}])},[q("label",{class:fe(l(O)),for:l(t)},[q("span",$n,Z(e.label),1),e.required?(g(),V("span",Gn)):H("",!0),e.hint?(g(),V("span",Bn,Z(e.hint),1)):H("",!0)],10,Ln),T(M,kn({id:l(t),ref_key:"host",ref:u,type:"button",variant:"OUTLINED","data-testid":"av-select"},r.$attrs,{label:l(w),icon:e.prefixIcon,class:["av-select av-justify-between",{"av-select--is-open":l(A),"av-select--dense":e.dense,"av-select--unselected":!l(b),"av-select--selected":l(b)}],disabled:e.disabled,"disabled-tooltip":e.disabledTooltip,"aria-expanded":l(A),"aria-controls":`${l(t)}-collapse`,size:e.dense?"MD":"LG",style:l(oe),onClick:ne}),null,16,["id","label","icon","disabled","disabled-tooltip","aria-expanded","aria-controls","class","size","style"]),T(wn,{id:l(t),modelValue:l(E),"onUpdate:modelValue":p[0]||(p[0]=de=>rn(E)?E.value=de:null),hint:e.collapseHint,"is-visible":l(A),"select-all":e.multiple&&e.selectAll,"select-all-label":e.selectAllLabel,search:e.search,options:e.options,selected:l(U),"max-height":e.collapseMaxHeight,multiple:e.multiple,required:e.required,onClose:x},null,8,["id","modelValue","hint","is-visible","select-all","select-all-label","search","options","selected","max-height","multiple","required"])],2),T(f,{"message-id":`select-${l(N)}-desc-${l(N)}`,type:l(N),message:l(k)},null,8,["message-id","type","message"])],64)}}}),ce=cn(le,[["__scopeId","data-v-46122f93"]]);le.__docgenInfo=Object.assign({displayName:le.name??le.__name},{exportName:"default",displayName:"AvSelect",type:1,props:[{name:"id",global:!1,description:"Unique id for the select. Used for accessibility.",tags:[{name:"default",text:"select-${crypto.randomUUID()}"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"hint",global:!1,default:'""',description:"Hint for guidance.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseHint",global:!1,default:'"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"',description:"Screen reader only hint for collapse.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"label",global:!1,description:"Select text label.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"labelVisible",global:!1,default:"true",description:"Whether the label is visible or not.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"labelClass",global:!1,default:'""',description:"CSS class for the label.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"options",global:!1,default:"[]",description:"Selectable options.",tags:[{name:"default",text:"[]"}],required:!1,type:"AvSelectItem[] | undefined",schema:{kind:"enum",type:"AvSelectItem[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectItem[]"}]},declarations:[]},{name:"successMessage",global:!1,default:'""',description:"If set, display a success message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"errorMessage",global:!1,default:'""',description:"If set, display an error message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"placeholder",global:!1,description:"Placeholder text.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"dense",global:!1,description:"Dense mode.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectedText",global:!1,default:'"fichier(s) sélectionné(s)"',description:"Displayed text when options are selected in multiple mode.",tags:[{name:"default",text:"'fichier(s) sélectionné(s)'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"selectAll",global:!1,default:"false",description:"Displays the select all items button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectAllLabel",global:!1,default:'["Tout sélectionner", "Tout désélectionner"]',description:"Labels for the select all items button.",tags:[],required:!1,type:"[string, string] | undefined",schema:{kind:"enum",type:"[string, string] | undefined",schema:["undefined",{kind:"array",type:"[string, string]"}]},declarations:[]},{name:"search",global:!1,default:"false",description:"Displays the search bar.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"width",global:!1,description:"Fixes the width of the multiselect.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"height",global:!1,description:"Fixes the height of the multiselect.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseMaxHeight",global:!1,description:"Max height of the collapse list of options.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"multiple",global:!1,default:"false",description:"Whether multiple options can be selected.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"required",global:!1,default:"false",description:"Whether the select is required.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"prefixIcon",global:!1,description:"Prefix icon for the select.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,default:"null",description:"",tags:[],required:!1,type:"AvSelectModelValue | undefined",schema:{kind:"enum",type:"AvSelectModelValue | undefined",schema:["undefined","null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: AvSelectModelValue]",signature:'(event: "update:modelValue", value: AvSelectModelValue): void',schema:[{kind:"enum",type:"AvSelectModelValue",schema:["null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]}],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"});const oa={title:"Components/Interaction/Selects/AvSelect",component:ce,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},dense:{control:"boolean"},multiple:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{type:{name:"AvSelectOption[] | AvSelectOption | null",required:!1},control:!1},label:{control:"text"},options:{type:{name:"AvSelectItem[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},selectAll:{control:"boolean"},search:{control:"boolean"},width:{control:"text"},height:{control:"text"},selectedText:{control:"text"}},args:{options:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2 with a long text"},{value:"3",label:"Choice 3"},{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,multiple:!1,name:"av-select",hint:"",modelValue:null,label:"",successMessage:"",errorMessage:"",dense:!1,selectAll:!1,search:!1,selectedText:"Selected option(s)"},parameters:{docs:{story:{height:"20rem"}}}},y=e=>({components:{AvSelect:ce},setup(){return{args:e}},template:`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  `}),mn=e=>({components:{AvSelect:ce},setup(){return{args:e}},template:`
    <div class="av-col av-gap-sm">
      <AvSelect
        v-bind="args"
        v-model="args.modelValue"  
        :selected-text="Array.isArray(args.modelValue)
          ? args.modelValue.map(option => option.label).join(', ')
          : args.modelValue?.label ?? ''"
      />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  `}),pn=[{value:"1",label:"Choice 1",icon:i.ATTACH_FILE},{value:"2",label:"Choice 2",icon:i.CHAT_ALERT},{value:"3",label:"Choice 3",icon:i.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:i.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:i.IMAGE_OUTLINE}],te=[{id:"group-1",label:"Group 1",children:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"}]},{value:"3",label:"Ungrouped choice"},{id:"group-2",label:"Group 2",children:[{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5",disabled:!0,disabledTooltip:"This option is disabled"}]}],se=[{value:"1",label:"Choice 1",icon:i.ATTACH_FILE},{value:"2",label:"Choice 2",icon:i.CHAT_ALERT},{value:"3",label:"Choice 3",icon:i.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:i.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:i.IMAGE_OUTLINE},{value:"6",label:"Choice 6",icon:i.ATTACH_FILE},{value:"7",label:"Choice 7",icon:i.CHAT_ALERT},{value:"8",label:"Choice 8",icon:i.CONTENT_SAVE_OUTLINE},{value:"9",label:"Choice 9",icon:i.ELECTRON_FRAMEWORK},{value:"10",label:"Choice 10",icon:i.IMAGE_OUTLINE}],$=y.bind({});$.args={label:"Select",multiple:!1,modelValue:null};const G=y.bind({});G.args={label:"Multiple select",multiple:!0,modelValue:[]};const B=y.bind({});B.args={dense:!0,label:"Dense Select",multiple:!1,modelValue:null};const D=y.bind({});D.args={dense:!0,label:"Dense Multiple Select",multiple:!0,modelValue:[]};const W=y.bind({});W.args={options:pn,label:"Options with icon",multiple:!1,modelValue:null};const J=y.bind({});J.args={options:pn,label:"Options with icon - multiple",multiple:!0,modelValue:[]};const P=y.bind({});P.args={options:te,label:"Grouped options",multiple:!1,modelValue:null};const F=y.bind({});F.args={options:te,label:"Grouped options - multiple",multiple:!0,modelValue:[]};const j=y.bind({});j.args={options:te,modelValue:{value:"1",label:"Choice 1"},label:"Grouped options with selected value",multiple:!1};const z=y.bind({});z.args={options:te,modelValue:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"}],label:"Grouped options with selected values - multiple",multiple:!0};const K=y.bind({});K.args={options:se,label:"Collapse max height",collapseMaxHeight:"150px",multiple:!1,modelValue:null};const Y=y.bind({});Y.args={options:se,label:"Collapse max height - multiple",collapseMaxHeight:"150px",multiple:!0,modelValue:[]};const X=mn.bind({});X.args={options:se,label:"Constrained width",width:"200px",multiple:!1,modelValue:null};const Q=mn.bind({});Q.args={options:se,label:"Constrained width - multiple",width:"200px",multiple:!0,modelValue:[]};const da=["Default","Multiple","Dense","DenseMultiple","OptionsWithIcon","OptionsWithIconMultiple","GroupedOptions","GroupedOptionsMultiple","GroupedOptionsWithSelectedValues","GroupedOptionsWithSelectedValuesMultiple","CollapseMaxHeight","CollapseMaxHeightMultiple","ConstrainedWidth","ConstrainedWidthMultiple"];var ve,he,ye;$.parameters={...$.parameters,docs:{...(ve=$.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(ye=(he=$.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var be,Ve,ke;G.parameters={...G.parameters,docs:{...(be=G.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(ke=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Se,Ne,Ae;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(Ae=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Me,Ce,xe;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`args => ({
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
})`,...(xe=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Oe,He,qe;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(qe=(He=W.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};var Ee,Re,Ie;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(Re=J.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Te,Ue,we;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(we=(Ue=P.parameters)==null?void 0:Ue.docs)==null?void 0:we.source}}};var Le,$e,Ge;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
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
})`,...(Ge=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Be,De,We;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
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
})`,...(We=(De=j.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var Je,Pe,Fe;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`args => ({
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
})`,...(Fe=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var je,ze,Ke;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
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
})`,...(Ke=(ze=K.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Ye,Xe,Qe;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => ({
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
})`,...(Qe=(Xe=Y.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Ze,_e,en;X.parameters={...X.parameters,docs:{...(Ze=X.parameters)==null?void 0:Ze.docs,source:{originalSource:`args => ({
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
      <AvSelect
        v-bind="args"
        v-model="args.modelValue"  
        :selected-text="Array.isArray(args.modelValue)
          ? args.modelValue.map(option => option.label).join(', ')
          : args.modelValue?.label ?? ''"
      />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(en=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:en.source}}};var nn,an,ln;Q.parameters={...Q.parameters,docs:{...(nn=Q.parameters)==null?void 0:nn.docs,source:{originalSource:`args => ({
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
      <AvSelect
        v-bind="args"
        v-model="args.modelValue"  
        :selected-text="Array.isArray(args.modelValue)
          ? args.modelValue.map(option => option.label).join(', ')
          : args.modelValue?.label ?? ''"
      />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  \`
})`,...(ln=(an=Q.parameters)==null?void 0:an.docs)==null?void 0:ln.source}}};export{K as CollapseMaxHeight,Y as CollapseMaxHeightMultiple,X as ConstrainedWidth,Q as ConstrainedWidthMultiple,$ as Default,B as Dense,D as DenseMultiple,P as GroupedOptions,F as GroupedOptionsMultiple,j as GroupedOptionsWithSelectedValues,z as GroupedOptionsWithSelectedValuesMultiple,G as Multiple,W as OptionsWithIcon,J as OptionsWithIconMultiple,da as __namedExportsOrder,oa as default};
