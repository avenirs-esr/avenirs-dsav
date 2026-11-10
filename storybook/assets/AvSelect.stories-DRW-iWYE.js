import{_ as bn}from"./AvMessage-Dad77qqa.js";import{A as sn}from"./AvButton-DjveNbvj.js";import{d as on,y as dn,w as yn,b as rn,k as se,j as y,V as kn,l as t,t as E,T as ee,A as w,m as q,G as un,s as Vn,a4 as Sn,z as ce,r as C,q as f,W as B,X as pe,c as h,U as cn,n as Nn,v as fe,p as An}from"./iframe-OGPQkLJO.js";import{A as Mn}from"./AvList-CEptl0Ra.js";import{_ as Cn}from"./AvCheckboxListItem-utDNZDuD.js";import{A as xn}from"./AvCheckbox-Kza3GI-l.js";import{A as On}from"./AvInput-DH7uRDoz.js";import{b as ge}from"./index-CcZ-hha0.js";import{M as r,I as Hn}from"./icons-D5SKHg5c.js";import{_ as mn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-gHuY50yx.js";import"./AvIcon-v66iwAU4.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-BZiw3iBt.js";import"./use-text-truncation-XJmk1SAT.js";import"./string--WCOsvs9.js";import"./preload-helper-ILsKNznc.js";import"./utils-BIlgUrNJ.js";import"./AvFieldsetElement-6UxywbVG.js";import"./format-Dv6JKX9m.js";function ne(e){return"children"in e&&Array.isArray(e.children)}function he(e,m){const l=e.find(c=>ne(c)&&c.children.some(S=>String(S.value)===String(m)));return l&&ne(l)?{parentId:String(l.id)}:{}}function qn(e,m){return e.flatMap(c=>ne(c)?c.children:[c]).find(c=>String(c.value)===String(m))}function En(e,m){for(const l of e)if(ne(l)){const c=l.children.find(S=>String(S.value)===String(m));if(c)return{...c,parentId:String(l.id)}}else if(String(l.value)===String(m))return l}const Rn=["id"],In=["id"],Tn={key:0,class:"av-btns-group"},Un={key:1},wn={class:"av-row av-justify-between av-align-center av-px-xs av-pt-xs av-pb-xxs"},Ln=["data-group-id"],$n={key:2},oe=on({__name:"SelectCollapse",props:ce({isVisible:{type:Boolean},selected:{},options:{},hint:{default:"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"},id:{},selectAll:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchPlaceholder:{default:"Rechercher..."},selectAllLabel:{default:()=>["Tout sélectionner","Tout désélectionner"]},noResultLabel:{default:"Pas de résultat"},maxHeight:{},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1},teleport:{type:Boolean,default:!1},anchor:{default:null}},{modelValue:{required:!0},modelModifiers:{}}),emits:ce(["close"],["update:modelValue"]),setup(e,{emit:m}){cn(n=>({v9b2dbadc:n.maxHeight}));const l=e,c=m;function S(n,a){return`${a}-${n.value}`}function R(n){return"children"in n&&Array.isArray(n.children)}const A=h(()=>Array.isArray(l.selected)?l.selected:l.selected?[l.selected]:[]),k=C(null),ae=C(null);let x=!1;const V=dn(e,"modelValue"),te=C(0),N=C({});function I(){if(!l.teleport||!l.anchor)return;const{bottom:n,left:a,width:d}=l.anchor.getBoundingClientRect();N.value={position:"fixed",zIndex:"9999",top:`${n}px`,left:`${a}px`,width:`${d}px`}}ge(window,"scroll",I,{capture:!0,passive:!0}),ge(window,"resize",I,{passive:!0});const T=C("");function O(n){var s;if(x){x=!1;return}const a=n.target,d=k.value&&k.value.$el?k.value.$el:null;d!=null&&d.contains(a)||(s=ae.value)!=null&&s.contains(a)||c("close")}function le(){document.removeEventListener("click",O)}yn(()=>l.isVisible,n=>{n?(I(),Nn(()=>{x=!0,document.addEventListener("click",O)})):le()});function L(n,a){if(!a.disabled){if(l.multiple){V.value=n;return}l.required&&n.length===0||(V.value=n.includes(a.value)?[a.value]:[],n.includes(a.value)&&c("close"))}}const $=h(()=>{const n=T.value.toLowerCase(),a=[],d=s=>s.label.toLowerCase().includes(n);for(const s of l.options){if(R(s)){const i=s.children.filter(d);i.length>0&&a.push({...s,children:i});continue}d(s)&&a.push(s)}return a}),H=h(()=>$.value.flatMap(n=>R(n)?n.children.filter(a=>!a.disabled):n.disabled?[]:[n]));function u(n){const a=n.children.filter(s=>!s.disabled),d=new Set(A.value.map(s=>s.value));return a.length>0&&a.every(s=>d.has(s.value))}function p(n){const a=n.children.filter(i=>!i.disabled),d=new Set(A.value.map(i=>i.value)),s=a.filter(i=>d.has(i.value));return s.length>0&&s.length<a.length}function M(n){return n.children.every(a=>a.disabled)}function g(n,a){if(!l.multiple)return;const d=new Set(V.value),s=n.children.filter(i=>!i.disabled).map(i=>i.value);a.includes(!0)?s.forEach(i=>d.add(i)):s.forEach(i=>d.delete(i)),V.value=Array.from(d)}const U=h(()=>{const n=new Set(A.value.map(a=>a.value));return H.value.length>0&&H.value.every(a=>n.has(a.value))});function gn(){if(!l.multiple)return;const n=new Set(V.value);U.value?H.value.forEach(a=>{n.delete(a.value)}):H.value.forEach(a=>{n.add(a.value)}),V.value=Array.from(n)}return rn(le),(n,a)=>{const d=sn,s=On,i=xn,me=Cn,hn=Mn;return f(),se(Sn,{to:"body",disabled:!e.teleport},[e.isVisible?(f(),y("div",{key:0,id:`${e.id}-collapse`,ref_key:"collapse",ref:ae,style:kn([{"--width-host":`${t(te)}px`},t(N)]),class:"av-select__collapse","data-testid":"av-select-collapse"},[E("p",{id:`${e.id}-text-hint`,class:"av-sr-only"},ee(e.hint),9,In),e.multiple&&e.selectAll?(f(),y("ul",Tn,[E("li",null,[w(d,{name:"select-all",disabled:t(H).length===0,label:e.selectAllLabel[t(U)?1:0],icon:t(U)?t(r).CLOSE_CIRCLE_OUTLINE:t(r).CHECK_CIRCLE_OUTLINE,"data-testid":t(U)?"deselect-all-button":"select-all-button",onClick:gn},null,8,["disabled","label","icon","data-testid"])])])):q("",!0),e.search?(f(),y("div",Un,[w(s,{modelValue:t(T),"onUpdate:modelValue":a[0]||(a[0]=o=>un(T)?T.value=o:null),"aria-describedby":`${e.id}-text-hint`,"aria-controls":`${e.id}-checkboxes`,"prefix-icon":t(r).MAGNIFY,"aria-live":"polite",placeholder:e.searchPlaceholder,type:"search","data-testid":"av-select-search-input"},null,8,["modelValue","aria-describedby","aria-controls","prefix-icon","placeholder"])])):q("",!0),w(hn,{"background-color":"var(--dialog)",bordered:"","border-color":"var(--stroke)","border-radius":"var(--radius-lg)",size:"xsmall",class:"select-collapse-options-list","data-testid":"av-select-options-list"},{default:Vn(()=>[(f(!0),y(B,null,pe(t($),(o,ue)=>(f(),y(B,{key:`${e.id}-option-${ue}`},[R(o)?(f(),y(B,{key:0},[E("div",wn,[E("span",{class:"av-text-title b2-bold","data-testid":"av-select-group-label","data-group-id":o.id},ee(o.label),9,Ln),e.multiple?(f(),se(i,{key:0,id:`${e.id}-group-${ue}`,"model-value":u(o)?[!0]:[],name:`${e.id}-group-${ue}`,value:!0,small:"",disabled:M(o),"aria-checked":p(o)?"mixed":void 0,"aria-label":`Sélectionner tout le groupe ${o.label}`,"data-testid":"av-select-group-option","data-group-id":o.id,"onUpdate:modelValue":b=>g(o,b)},null,8,["id","model-value","name","disabled","aria-checked","aria-label","data-group-id","onUpdate:modelValue"])):q("",!0)]),(f(!0),y(B,null,pe(o.children,b=>(f(),se(me,{id:b.value.toString(),key:S(b,e.id),"model-value":V.value,"list-id":"select-collapse-options-list","aria-label":b.label,label:b.label,icon:b.icon,disabled:b.disabled,"disabled-tooltip":b.disabledTooltip,"data-testid":"av-select-child-option","data-group-id":o.id,"data-child-id":String(b.value),"onUpdate:modelValue":vn=>L(vn,b)},null,8,["id","model-value","aria-label","label","icon","disabled","disabled-tooltip","data-group-id","data-child-id","onUpdate:modelValue"]))),128))],64)):(f(),se(me,{id:o.value.toString(),key:S(o,e.id),class:"ungroup-option","model-value":V.value,"list-id":"select-collapse-options-list","aria-label":o.label,label:o.label,icon:o.icon,disabled:o.disabled,"disabled-tooltip":o.disabledTooltip,"data-testid":"av-select-option","data-option-id":String(o.value),"onUpdate:modelValue":b=>L(b,o)},null,8,["id","model-value","aria-label","label","icon","disabled","disabled-tooltip","data-option-id","onUpdate:modelValue"]))],64))),128))]),_:1}),t($).length===0?(f(),y("div",$n,ee(e.noResultLabel),1)):q("",!0)],12,Rn)):q("",!0)],8,["disabled"])}}}),Bn=mn(oe,[["__scopeId","data-v-fc80433b"]]);oe.__docgenInfo=Object.assign({displayName:oe.name??oe.__name},{exportName:"default",displayName:"SelectCollapse",type:1,props:[{name:"isVisible",global:!1,description:"",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"selected",global:!1,description:"",tags:[],required:!0,type:"AvSelectSelectedOption | AvSelectSelectedOption[] | null",schema:{kind:"enum",type:"AvSelectSelectedOption | AvSelectSelectedOption[] | null",schema:["null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]},declarations:[]},{name:"options",global:!1,description:"",tags:[],required:!0,type:"AvSelectItem[]",schema:{kind:"array",type:"AvSelectItem[]"},declarations:[]},{name:"hint",global:!1,default:'"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"id",global:!1,description:"",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"selectAll",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"search",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"searchPlaceholder",global:!1,default:'"Rechercher..."',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"selectAllLabel",global:!1,default:'["Tout sélectionner", "Tout désélectionner"]',description:"",tags:[],required:!1,type:"[string, string] | undefined",schema:{kind:"enum",type:"[string, string] | undefined",schema:["undefined",{kind:"array",type:"[string, string]"}]},declarations:[]},{name:"noResultLabel",global:!1,default:'"Pas de résultat"',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"maxHeight",global:!1,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"multiple",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"required",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"teleport",global:!1,default:"false",description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"anchor",global:!1,default:"null",description:"",tags:[],required:!1,type:"HTMLElement | null | undefined",schema:{kind:"enum",type:"HTMLElement | null | undefined",schema:["undefined","null",{kind:"object",type:"HTMLElement"}]},declarations:[]},{name:"modelValue",global:!1,description:"Internal model is always an array, including single-select mode.",tags:[],required:!0,type:"(string | number)[]",schema:{kind:"array",type:"(string | number)[]"},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: (string | number)[]]",signature:'(event: "update:modelValue", value: (string | number)[]): void',schema:[{kind:"array",type:"(string | number)[]"}],declarations:[]},{name:"close",description:"",tags:[],type:"[]",signature:'(event: "close"): void',schema:[],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/components/SelectCollapse.vue"});const Gn=["for"],Pn={class:"b2-light"},Dn={key:0,class:"required"},Wn={key:1,class:"av-hint-text"},de=on({__name:"AvSelect",props:ce({id:{},hint:{default:""},collapseHint:{default:"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"},label:{},labelVisible:{type:Boolean,default:!0},labelClass:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean},selectedText:{},selectAll:{type:Boolean,default:!1},selectAllLabel:{default:()=>["Tout sélectionner","Tout désélectionner"]},search:{type:Boolean,default:!1},searchPlaceholder:{default:"Rechercher..."},width:{},height:{},collapseMaxHeight:{},teleport:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},required:{type:Boolean,default:!1},prefixIcon:{},disabled:{type:Boolean},disabledTooltip:{}},{modelValue:{default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(e){cn(u=>({c8a6607a:u.width,v7fc3a26c:u.height}));const m=dn(e,"modelValue"),l=h(()=>e.id??`select-${crypto.randomUUID()}`),c=C(null),S=C(null),R=h(()=>e.errorMessage||e.successMessage),A=h(()=>e.errorMessage?"error":"success"),k=h(()=>(Array.isArray(m.value)?m.value:m.value?[m.value]:[]).map(p=>({...p,...he(e.options,p.value)}))),ae=h(()=>k.value.flatMap(({value:u})=>{const p=qn(e.options,u);return p?[{...p,...he(e.options,p.value)}]:[]})),x=h({get:()=>k.value.map(u=>u.value),set:u=>{const p=u.flatMap(M=>{const g=En(e.options,M);return g?[g]:[]});if(e.multiple){m.value=p;return}m.value=p[0]??null,O()}}),V=h(()=>{var M;if(k.value.length===0)return e.placeholder;if(e.multiple)return e.selectedText??k.value.map(g=>g.label).join(", ");const u=k.value[0];return((M=e.options.flatMap(g=>ne(g)?g.children:[g]).find(g=>String(g.value)===String(u.value)))==null?void 0:M.label)??e.placeholder}),te=h(()=>k.value.length>0),N=C(!1);function I(u){u.key==="Escape"&&O()}function T(){e.disabled||(N.value=!0,document.addEventListener("keydown",I))}function O(){N.value=!1,L()}function le(){N.value?O():T()}function L(){document.removeEventListener("keydown",I)}rn(L);const $=h(()=>["av-label",{invisible:!e.labelVisible},e.labelClass]),H=h(()=>({"--icon-path":`url(${Hn.MDI_KEYBOARD_ARROW_DOWN})`}));return(u,p)=>{const M=sn,g=bn;return f(),y(B,null,[E("div",{ref_key:"group",ref:S,class:fe(["av-select-group",{[`av-select-group--${t(A)}`]:t(R)}])},[E("label",{class:fe(t($)),for:t(l)},[E("span",Pn,ee(e.label),1),e.required?(f(),y("span",Dn)):q("",!0),e.hint?(f(),y("span",Wn,ee(e.hint),1)):q("",!0)],10,Gn),w(M,An({id:t(l),ref_key:"host",ref:c,type:"button",variant:"OUTLINED","data-testid":"av-select"},u.$attrs,{label:t(V),icon:e.prefixIcon,class:["av-select av-justify-between",{"av-select--is-open":t(N),"av-select--dense":e.dense,"av-select--unselected":!t(te),"av-select--selected":t(te)}],disabled:e.disabled,"disabled-tooltip":e.disabledTooltip,"aria-expanded":t(N),"aria-controls":`${t(l)}-collapse`,"no-sentence-case":"",size:e.dense?"MD":"LG",style:t(H),onClick:le}),null,16,["id","label","icon","disabled","disabled-tooltip","aria-expanded","aria-controls","class","size","style"]),w(Bn,{id:t(l),modelValue:t(x),"onUpdate:modelValue":p[0]||(p[0]=U=>un(x)?x.value=U:null),hint:e.collapseHint,"is-visible":t(N),"select-all":e.multiple&&e.selectAll,"select-all-label":e.selectAllLabel,search:e.search,"search-placeholder":e.searchPlaceholder,options:e.options,selected:t(ae),"max-height":e.collapseMaxHeight,teleport:e.teleport,anchor:t(S),multiple:e.multiple,required:e.required,onClose:O},null,8,["id","modelValue","hint","is-visible","select-all","select-all-label","search","search-placeholder","options","selected","max-height","teleport","anchor","multiple","required"])],2),w(g,{"message-id":`select-${t(A)}-desc-${t(A)}`,type:t(A),message:t(R)},null,8,["message-id","type","message"])],64)}}}),pn=mn(de,[["__scopeId","data-v-fdf315db"]]);de.__docgenInfo=Object.assign({displayName:de.name??de.__name},{exportName:"default",displayName:"AvSelect",type:1,props:[{name:"id",global:!1,description:"Unique id for the select. Used for accessibility.",tags:[{name:"default",text:"select-${crypto.randomUUID()}"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"hint",global:!1,default:'""',description:"Hint for guidance.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseHint",global:!1,default:'"Utilisez la tabulation (ou les touches flèches) pour naviguer dans la liste des suggestions"',description:"Screen reader only hint for collapse.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"label",global:!1,description:"Select text label.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"labelVisible",global:!1,default:"true",description:"Whether the label is visible or not.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"labelClass",global:!1,default:'""',description:"CSS class for the label.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"options",global:!1,default:"[]",description:"Selectable options.",tags:[{name:"default",text:"[]"}],required:!1,type:"AvSelectItem[] | undefined",schema:{kind:"enum",type:"AvSelectItem[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectItem[]"}]},declarations:[]},{name:"successMessage",global:!1,default:'""',description:"If set, display a success message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"errorMessage",global:!1,default:'""',description:"If set, display an error message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"placeholder",global:!1,description:"Placeholder text.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"dense",global:!1,description:"Dense mode.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectedText",global:!1,description:`Displayed text when options are selected in multiple mode.
Fallback to labels from model value joined by a comma.`,tags:[{name:"default",text:"'undefined'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"selectAll",global:!1,default:"false",description:"Displays the select all items button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectAllLabel",global:!1,default:'["Tout sélectionner", "Tout désélectionner"]',description:"Labels for the select all items button.",tags:[],required:!1,type:"[string, string] | undefined",schema:{kind:"enum",type:"[string, string] | undefined",schema:["undefined",{kind:"array",type:"[string, string]"}]},declarations:[]},{name:"search",global:!1,default:"false",description:"Displays the search bar.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"searchPlaceholder",global:!1,default:'"Rechercher..."',description:"Placeholder for the search input.",tags:[{name:"default",text:"'Rechercher...'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"width",global:!1,description:"Fixes the width of the multiselect.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"height",global:!1,description:"Fixes the height of the multiselect.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseMaxHeight",global:!1,description:"Max height of the collapse list of options.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"teleport",global:!1,default:"false",description:`Renders the options list in the document body so it is never clipped by a
scrollable or overflow-hidden ancestor.`,tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"multiple",global:!1,default:"false",description:"Whether multiple options can be selected.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"required",global:!1,default:"false",description:"Whether the select is required.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"prefixIcon",global:!1,description:"Prefix icon for the select.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"modelValue",global:!1,default:"null",description:"",tags:[],required:!1,type:"AvSelectModelValue | undefined",schema:{kind:"enum",type:"AvSelectModelValue | undefined",schema:["undefined","null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: AvSelectModelValue]",signature:'(event: "update:modelValue", value: AvSelectModelValue): void',schema:[{kind:"enum",type:"AvSelectModelValue",schema:["null",{kind:"object",type:"AvSelectSelectedOption"},{kind:"array",type:"AvSelectSelectedOption[]"}]}],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"});const ua={title:"Components/Interaction/Selects/AvSelect",component:pn,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},dense:{control:"boolean"},multiple:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{type:{name:"AvSelectOption[] | AvSelectOption | null",required:!1},control:!1},label:{control:"text"},options:{type:{name:"AvSelectItem[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},selectAll:{control:"boolean"},search:{control:"boolean"},searchPlaceholder:{control:"text"},width:{control:"text"},height:{control:"text"},selectedText:{control:"text"}},args:{options:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2 with a long text"},{value:"3",label:"Choice 3"},{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,multiple:!1,name:"av-select",hint:"",modelValue:null,label:"",successMessage:"",errorMessage:"",dense:!1,selectAll:!1,search:!1,searchPlaceholder:"Rechercher..."},parameters:{docs:{story:{height:"20rem"}}}},v=e=>({components:{AvSelect:pn},setup(){return{args:e}},template:`
    <div class="av-col av-gap-sm">
      <AvSelect v-bind="args" v-model="args.modelValue" />
      <pre>modelValue: {{ JSON.stringify(args.modelValue, null, 2) }}</pre>
    </div>
  `}),fn=[{value:"1",label:"Choice 1",icon:r.ATTACH_FILE},{value:"2",label:"Choice 2",icon:r.CHAT_ALERT},{value:"3",label:"Choice 3",icon:r.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:r.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:r.IMAGE_OUTLINE}],ie=[{id:"group-1",label:"Group 1",children:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"}]},{value:"3",label:"Ungrouped choice"},{id:"group-2",label:"Group 2",children:[{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5",disabled:!0,disabledTooltip:"This option is disabled"}]}],re=[{value:"1",label:"Choice 1",icon:r.ATTACH_FILE},{value:"2",label:"Choice 2",icon:r.CHAT_ALERT},{value:"3",label:"Choice 3",icon:r.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:r.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:r.IMAGE_OUTLINE},{value:"6",label:"Choice 6",icon:r.ATTACH_FILE},{value:"7",label:"Choice 7",icon:r.CHAT_ALERT},{value:"8",label:"Choice 8",icon:r.CONTENT_SAVE_OUTLINE},{value:"9",label:"Choice 9",icon:r.ELECTRON_FRAMEWORK},{value:"10",label:"Choice 10",icon:r.IMAGE_OUTLINE}],G=v.bind({});G.args={label:"Select",multiple:!1,modelValue:null};const P=v.bind({});P.args={label:"Multiple select",multiple:!0,modelValue:[]};const D=v.bind({});D.args={dense:!0,label:"Dense Select",multiple:!1,modelValue:null};const W=v.bind({});W.args={dense:!0,label:"Dense Multiple Select",multiple:!0,modelValue:[]};const F=v.bind({});F.args={options:fn,label:"Options with icon",multiple:!1,modelValue:null};const J=v.bind({});J.args={options:fn,label:"Options with icon - multiple",multiple:!0,modelValue:[]};const z=v.bind({});z.args={options:ie,label:"Grouped options",multiple:!1,modelValue:null};const j=v.bind({});j.args={options:ie,label:"Grouped options - multiple",multiple:!0,modelValue:[]};const K=v.bind({});K.args={options:ie,modelValue:{value:"1",label:"Choice 1"},label:"Grouped options with selected value",multiple:!1};const Y=v.bind({});Y.args={options:ie,modelValue:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"}],label:"Grouped options with selected values - multiple",multiple:!0};const X=v.bind({});X.args={options:re,label:"Collapse max height",collapseMaxHeight:"150px",multiple:!1,modelValue:null};const Q=v.bind({});Q.args={options:re,label:"Collapse max height - multiple",collapseMaxHeight:"150px",multiple:!0,modelValue:[]};const Z=v.bind({});Z.args={options:re,label:"Constrained width",width:"200px",multiple:!1,modelValue:null};const _=v.bind({});_.args={options:re,label:"Constrained width - multiple",width:"200px",multiple:!0,modelValue:[]};const ca=["Default","Multiple","Dense","DenseMultiple","OptionsWithIcon","OptionsWithIconMultiple","GroupedOptions","GroupedOptionsMultiple","GroupedOptionsWithSelectedValues","GroupedOptionsWithSelectedValuesMultiple","CollapseMaxHeight","CollapseMaxHeightMultiple","ConstrainedWidth","ConstrainedWidthMultiple"];var ve,be,ye;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(ye=(be=G.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ke,Ve,Se;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Se=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var Ne,Ae,Me;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
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
})`,...(Me=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var Ce,xe,Oe;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(Oe=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source}}};var He,qe,Ee;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`args => ({
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
})`,...(Ee=(qe=F.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var Re,Ie,Te;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(Te=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};var Ue,we,Le;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
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
})`,...(Le=(we=z.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var $e,Be,Ge;j.parameters={...j.parameters,docs:{...($e=j.parameters)==null?void 0:$e.docs,source:{originalSource:`args => ({
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
})`,...(Ge=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var Pe,De,We;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => ({
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
})`,...(We=(De=K.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var Fe,Je,ze;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => ({
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
})`,...(ze=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:ze.source}}};var je,Ke,Ye;X.parameters={...X.parameters,docs:{...(je=X.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
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
})`,...(Ye=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Xe,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => ({
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
})`,...(Ze=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var _e,en,nn;Z.parameters={...Z.parameters,docs:{...(_e=Z.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
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
})`,...(nn=(en=Z.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var an,tn,ln;_.parameters={..._.parameters,docs:{...(an=_.parameters)==null?void 0:an.docs,source:{originalSource:`args => ({
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
})`,...(ln=(tn=_.parameters)==null?void 0:tn.docs)==null?void 0:ln.source}}};export{X as CollapseMaxHeight,Q as CollapseMaxHeightMultiple,Z as ConstrainedWidth,_ as ConstrainedWidthMultiple,G as Default,D as Dense,W as DenseMultiple,z as GroupedOptions,j as GroupedOptionsMultiple,K as GroupedOptionsWithSelectedValues,Y as GroupedOptionsWithSelectedValuesMultiple,P as Multiple,F as OptionsWithIcon,J as OptionsWithIconMultiple,ca as __namedExportsOrder,ua as default};
