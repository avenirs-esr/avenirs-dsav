import{A as ot,a as ze}from"./AvList-OkF1iBAe.js";import{u as nt,n as X,a3 as Z,P as x,d as q,a7 as at,K as ae,$ as n,h as A,E as rt,B as lt,l as M,g as J,e as Ke,R,X as ie,f as H,a9 as D,z as Ue,L as h,F as oe,Q as He,j as Q,U as Ge,a2 as ce,I as st,y as de,M as it}from"./iframe-BqHUVdUC.js";import{A as re}from"./AvButton-B7P0JBEa.js";import{a as ct}from"./index-C-FGla8Z.js";import{A as dt}from"./AvIcon-J25-d7fT.js";import{M as N}from"./icons-B6bk2eYx.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as ut}from"./AvInput-CSiWJvuR.js";import"./AvTooltip-9ny3JpKj.js";import"./utils-pnJYGbuQ.js";import"./use-text-truncation-Bc85tJQ3.js";import"./preload-helper-ILsKNznc.js";import"./date-picker--oZ-mZS2.js";import"./string-Cy5T4FjC.js";import"./icon-path-u9rVYwcY.js";import"./AvMessage-CDkMvSfF.js";import"./AvIconText-CaTXVpNs.js";import"./format-AL68iITa.js";var V=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(V||{});const Je=Symbol("AvAutocompleteContext");function le(){const e=nt(Je);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var pt=typeof global=="object"&&global&&global.Object===Object&&global,mt=typeof self=="object"&&self&&self.Object===Object&&self,Qe=pt||mt||Function("return this")(),Y=Qe.Symbol,Ye=Object.prototype,ft=Ye.hasOwnProperty,gt=Ye.toString,E=Y?Y.toStringTag:void 0;function vt(e){var a=ft.call(e,E),r=e[E];try{e[E]=void 0;var y=!0}catch{}var d=gt.call(e);return y&&(a?e[E]=r:delete e[E]),d}var yt=Object.prototype,ht=yt.toString;function bt(e){return ht.call(e)}var St="[object Null]",At="[object Undefined]",ue=Y?Y.toStringTag:void 0;function It(e){return e==null?e===void 0?At:St:ue&&ue in Object(e)?vt(e):bt(e)}function Ot(e){return e!=null&&typeof e=="object"}var _t="[object Symbol]";function kt(e){return typeof e=="symbol"||Ot(e)&&It(e)==_t}var wt=/\s/;function Ct(e){for(var a=e.length;a--&&wt.test(e.charAt(a)););return a}var xt=/^\s+/;function Lt(e){return e&&e.slice(0,Ct(e)+1).replace(xt,"")}function ne(e){var a=typeof e;return e!=null&&(a=="object"||a=="function")}var pe=NaN,Tt=/^[-+]0x[0-9a-f]+$/i,Dt=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,Mt=parseInt;function me(e){if(typeof e=="number")return e;if(kt(e))return pe;if(ne(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ne(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=Lt(e);var r=Dt.test(e);return r||qt.test(e)?Mt(e.slice(2),r?2:8):Tt.test(e)?pe:+e}var te=function(){return Qe.Date.now()},Nt="Expected a function",Vt=Math.max,Rt=Math.min;function Xe(e,a,r){var y,d,m,u,l,t,i=0,I=!1,b=!1,O=!0;if(typeof e!="function")throw new TypeError(Nt);a=me(a)||0,ne(r)&&(I=!!r.leading,b="maxWait"in r,m=b?Vt(me(r.maxWait)||0,a):m,O="trailing"in r?!!r.trailing:O);function _(o){var v=y,p=d;return y=d=void 0,i=o,u=e.apply(p,v),u}function T(o){return i=o,l=setTimeout(S,a),I?_(o):u}function k(o){var v=o-t,p=o-i,C=a-v;return b?Rt(C,m-p):C}function w(o){var v=o-t,p=o-i;return t===void 0||v>=a||v<0||b&&p>=m}function S(){var o=te();if(w(o))return f(o);l=setTimeout(S,k(o))}function f(o){return l=void 0,O&&y?_(o):(y=d=void 0,u)}function c(){l!==void 0&&clearTimeout(l),i=0,y=t=d=l=void 0}function g(){return l===void 0?u:f(te())}function s(){var o=te(),v=w(o);if(y=arguments,d=this,t=o,v){if(l===void 0)return T(t);if(b)return clearTimeout(l),l=setTimeout(S,a),_(t)}return l===void 0&&(l=setTimeout(S,a)),u}return s.cancel=c,s.flush=g,s}const Et={key:0,class:"av-p-xs"},Bt={key:1,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},jt={key:2,class:"av-autocomplete-dropdown__empty av-p-md"},Pt={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},$t={key:0,class:"caption-light"},Ze=X({__name:"AvAutocompleteDropdown",emits:["loadMore","clearSelection"],setup(e,{expose:a,emit:r}){const y=r,d=Z(),{selectedItems:m,searchQuery:u,isOpen:l,props:t,getOptionId:i,getDisplayLabel:I}=le(),b=x(),O=x(),_=q(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const s=u.value.toLowerCase().trim();if(!s){const v=t.options;return t.maxResults?v.slice(0,t.maxResults):v}let o;return t.filterOptions?o=t.filterOptions(t.options,s):o=t.options.filter(v=>I(v).toLowerCase().includes(s)),t.maxResults?o.slice(0,t.maxResults):o}),T=q(()=>t.itemsTitleMaxLines),k=q(()=>t.loading?V.LOADING:l.value&&t.options&&t.options.length>0&&_.value.length>0?V.HAS_OPTIONS:V.NO_OPTIONS);function w(s){return m.value.some(o=>i(o)===i(s))}function S(s){if(s.disabled)return;if(!t.multiSelect){m.value=[s],l.value=!1,u.value="";return}const o=m.value,v=i(s);o.some(C=>i(C)===v)?m.value=o.filter(C=>i(C)!==v):m.value=[...o,s]}function f(){m.value=[],y("clearSelection")}const{arrivedState:c}=ct(O,{throttle:100}),g=Xe(()=>{y("loadMore")},t.loadMoreThrottleDelay);return at(()=>c.bottom,s=>{t.enableLoadMore&&s&&l.value&&g()}),ae(()=>{g.cancel()}),a({dropdownRef:b}),(s,o)=>{const v=re;return n(l)?(h(),A("div",{key:0,ref_key:"dropdownRef",ref:b,class:lt(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",n(t).dropdownClass]),style:rt({width:n(t).dropdownWidth,maxHeight:n(t).maxDropdownHeight})},[n(t).showClearSelectionButton?(h(),A("div",Et,[M(v,{label:n(t).clearSelectionLabel??"Clear selection",icon:n(N).CLOSE_CIRCLE_OUTLINE,variant:"DEFAULT",theme:"SECONDARY",disabled:n(m).length===0,onClick:f},null,8,["label","icon","disabled"])])):J("",!0),n(k)===n(V).LOADING?(h(),A("div",Bt,[M(dt,{name:n(N).LOADING,size:1.5,animation:"spin"},null,8,["name"]),o[0]||(o[0]=Ke("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):n(k)===n(V).NO_OPTIONS?(h(),A("div",jt,[d.empty?R(s.$slots,"empty",{key:0},void 0,!0):(h(),A("div",Pt,ie(n(t).noResultsLabel??"No results found"),1))])):(h(),H(ot,Ue({key:3,ref_key:"listRef",ref:O},n(t).listOptions,{class:["av-autocomplete-dropdown__options",n(t).scrollbarClass]}),{default:D(()=>[(h(!0),A(oe,null,He(n(_),p=>(h(),A(oe,{key:n(i)(p)},[d.item?R(s.$slots,"item",{key:0,option:p,isSelected:w(p),toggle:()=>S(p)},void 0,!0):(h(),H(ze,{key:1,title:n(I)(p),"title-max-lines":n(T),"enable-tooltip":!!n(T),icon:w(p)?n(N).CHECK:void 0,selected:w(p),disabled:p.disabled,"disabled-tooltip":p.disabledTooltip,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>S(p)},{default:D(()=>[p.description?(h(),A("span",$t,ie(p.description),1)):J("",!0)]),_:2},1032,["title","title-max-lines","enable-tooltip","icon","selected","disabled","disabled-tooltip","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):J("",!0)}}}),Wt=ee(Ze,[["__scopeId","data-v-2aa4e722"]]);Ze.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"loadMore",description:"",tags:[],type:"[]",signature:'(evt: "loadMore"): void',declarations:[],schema:[]},{name:"clearSelection",description:"",tags:[],type:"[]",signature:'(evt: "clearSelection"): void',declarations:[],schema:[]}],slots:[{name:"item",type:"[{ option: AvAutocompleteOption; isSelected: boolean; toggle: () => void; }]",description:"",declarations:[],schema:{kind:"array",type:"[{ option: AvAutocompleteOption; isSelected: boolean; toggle: () => void; }]"}},{name:"empty",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"};const Ft={class:"av-autocomplete-input"},et=X({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:a,emit:r}){const y=r,d=Z(),{selectedItems:m,searchQuery:u,isOpen:l,props:t,inputId:i,handleBlur:I,getDisplayLabel:b}=le(),O=x(),_=q(()=>{if(!t.multiSelect&&m.value.length>0)return b(m.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return u.value;if(m.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:m.value.map(b).join(", ")}return u.value}),T=q(()=>{var c;return((c=t.inputOptions)==null?void 0:c.placeholder)||"Search..."}),k=Xe(c=>{u.value=c},t.debounceDelay);function w(c){k(String(c||""))}function S(){l.value=!0}function f(){u.value="",y("clear")}return ae(()=>{k.cancel()}),a({inputRef:O,searchQuery:q(()=>u.value)}),(c,g)=>(h(),A("div",Ft,[M(ut,Ue({id:n(i),ref_key:"inputRef",ref:O,"model-value":n(_),placeholder:n(T)},n(t).inputOptions,{"onUpdate:modelValue":w,onFocus:S,onBlur:n(I),onClick:S}),Q({_:2},[d.requiredTip?{name:"requiredTip",fn:D(()=>[(h(),H(Ge(d.requiredTip)))]),key:"0"}:void 0,n(u)&&n(u).length>0?{name:"suffix",fn:D(()=>[M(re,{label:n(t).clearLabel??"Clear search",icon:n(N).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",onClick:f},null,8,["label","icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),zt=ee(et,[["__scopeId","data-v-cd920193"]]);et.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"search",description:"",tags:[],type:"[query: string]",signature:'(evt: "search", query: string): void',declarations:[],schema:["string"]},{name:"clear",description:"",tags:[],type:"[]",signature:'(evt: "clear"): void',declarations:[],schema:[]}],slots:[{name:"requiredTip",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"};const Kt={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},tt=X({__name:"AvAutocompleteSelectedTags",setup(e){const a=Z(),{selectedItems:r,props:y,getOptionId:d,getDisplayLabel:m}=le();function u(l){const t=r.value,i=d(l);r.value=t.filter(I=>d(I)!==i)}return(l,t)=>n(y).multiSelect&&n(r).length>0&&n(y).showSelectedSection?(h(),A("div",Kt,[(h(!0),A(oe,null,He(n(r),i=>(h(),A("div",{key:n(d)(i),class:"av-autocomplete-selected-tags__item"},[a.selectedItem?R(l.$slots,"selectedItem",{key:0,option:i,remove:()=>u(i)},void 0,!0):(h(),H(re,{key:1,label:n(m)(i),icon:n(N).CLOSE_CIRCLE_OUTLINE,"icon-right":"",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>u(i)},null,8,["label","icon","onClick"]))]))),128))])):J("",!0)}}),Ut=ee(tt,[["__scopeId","data-v-35b19294"]]);tt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"selectedItem",type:"[{ option: AvAutocompleteOption; remove: () => void; }]",description:"",declarations:[],schema:{kind:"array",type:"[{ option: AvAutocompleteOption; remove: () => void; }]"}}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"};const Ht={class:"av-autocomplete av-col av-gap-xxs"},Gt=X({__name:"AvAutocomplete",props:de({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"},clearLabel:{default:"Clear search"},showClearSelectionButton:{type:Boolean,default:!1},clearSelectionLabel:{default:"Clear selection"},noResultsLabel:{},itemsTitleMaxLines:{default:void 0}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:de(["loadMore","clear","clearSelection"],["update:modelValue","update:search"]),setup(e,{emit:a}){const r=e,y=a,d=Z(),m=ce(e,"modelValue"),u=ce(e,"search"),l=x(!1),t=x(),i=x(),I=x(),b=q(()=>r.id||`av-autocomplete-${crypto.randomUUID()}`);function O(f){u.value=f}function _(f){var g;const c=f.relatedTarget;c&&((g=t.value)!=null&&g.contains(c))||setTimeout(()=>{l.value=!1},r.blurCloseDelay)}function T(f){return r.getOptionKey?r.getOptionKey(f):f.value}function k(f){return r.getOptionLabel?r.getOptionLabel(f):f.label}it(Je,{selectedItems:m,searchQuery:u,isOpen:l,props:r,inputId:b,handleBlur:_,getOptionId:T,getDisplayLabel:k});function S(f){var s,o,v,p,C;const c=f.target,g=(s=i.value)==null?void 0:s.inputRef;!((o=g==null?void 0:g.contains)!=null&&o.call(g,c))&&!((v=t.value)!=null&&v.contains(c))&&!((C=(p=I.value)==null?void 0:p.dropdownRef)!=null&&C.contains(c))&&(l.value=!1)}return st(()=>{document.addEventListener("click",S)}),ae(()=>{document.removeEventListener("click",S)}),(f,c)=>(h(),A("div",Ht,[Ke("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[M(zt,{ref_key:"inputRef",ref:i,onSearch:O,onClear:c[0]||(c[0]=g=>y("clear"))},Q({_:2},[d.requiredTip?{name:"requiredTip",fn:D(()=>[(h(),H(Ge(d.requiredTip)))]),key:"0"}:void 0]),1536),M(Wt,{ref_key:"dropdownRef",ref:I,"show-clear-selection-button":e.showClearSelectionButton,onClearSelection:c[1]||(c[1]=g=>y("clearSelection")),onLoadMore:c[2]||(c[2]=g=>y("loadMore"))},Q({_:2},[d.item?{name:"item",fn:D(({option:g,isSelected:s,toggle:o})=>[R(f.$slots,"item",{option:g,isSelected:s,toggle:o},void 0,!0)]),key:"0"}:void 0,d.empty?{name:"empty",fn:D(()=>[R(f.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1032,["show-clear-selection-button"])],512),M(Ut,null,Q({_:2},[d.selectedItem?{name:"selectedItem",fn:D(({option:g,remove:s})=>[R(f.$slots,"selectedItem",{option:g,remove:s},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),se=ee(Gt,[["__scopeId","data-v-473cb38e"]]),fo={title:"Components/Interaction/Selects/AvAutocomplete",component:se,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}},clearLabel:{control:"text",description:"Label for the clear selection button"},showClearSelectionButton:{control:"boolean",description:"Whether to show a button to clear the selection"},clearSelectionLabel:{control:"text",description:"Label for the clear selection button when no items are selected"}},args:{clearLabel:"Clear search",clearSelectionLabel:"Clear selection",showClearSelectionButton:!1,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvAutocomplete</code> component is a comprehensive autocomplete/select component that provides search-as-you-type functionality with support for both single and multi-selection modes.
  </span>
</p>

<p>
  <span class="b2-regular">
    It combines an input field with a dropdown containing filterable options, offering a seamless user experience for selecting from large datasets. The component supports customizable option rendering, debounced search, infinite scrolling, and flexible styling options.
  </span>
</p>

<p>
  <span class="b2-regular">
    This component is designed with accessibility in mind, featuring keyboard navigation, focus management, and proper ARIA attributes.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},L=e=>({components:{AvAutocomplete:se},setup(){const a=x([]);return{args:e,modelValue:a,MDI_ICONS:N}},template:`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  `}),B=L.bind({});B.args={};const j=L.bind({});j.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const P=L.bind({});P.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const $=L.bind({});$.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const W=L.bind({});W.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const F=L.bind({});F.args={multiSelect:!0,showSelectedSection:!0,showClearSelectionButton:!0,inputOptions:{label:"Multi-select with clear button",placeholder:"Search and select multiple options..."}};const z=L.bind({});z.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,a)=>({label:`Option ${a+1}`,value:`${a+1}`}))};const K=L.bind({});K.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const U=L.bind({});U.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const G={render(){return{components:{AvAutocomplete:se,AvListItem:ze},setup(){return{modelValue:x([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:N}},template:`
        <AvAutocomplete 
          v-model="modelValue"
          :options="customOptions"
          :input-options="{
            label: 'Select team member',
            placeholder: 'Search for team members...'
          }"
          :min-chars="1"
          @search="(query) => console.log('Search:', query)"
        >
          <template #item="{ option, isSelected, toggle }">
            <AvListItem 
              :selected="isSelected"
              hover-background-color="var(--light-background-neutral)"
              @click="toggle"
            >
              <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: 600; color: var(--title);">{{ option.label }}</span>
                  <span style="font-size: 0.875rem; color: var(--light-foreground-info); background: var(--light-background-info); padding: 0.125rem 0.5rem; border-radius: var(--radius-xs);">{{ option.role }}</span>
                </div>
                <div style="font-size: 0.875rem; color: var(--text2);">{{ option.department }}</div>
              </div>
            </AvListItem>
          </template>
        </AvAutocomplete>
      `}}};var fe,ge,ve;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(ve=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var ye,he,be;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(be=(he=j.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Se,Ae,Ie;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(Ie=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Oe,_e,ke;$.parameters={...$.parameters,docs:{...(Oe=$.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(ke=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:ke.source}}};var we,Ce,xe;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(xe=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Le,Te,De;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(De=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var qe,Me,Ne;z.parameters={...z.parameters,docs:{...(qe=z.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(Ne=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Ve,Re,Ee;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(Ee=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Be,je,Pe;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
  components: {
    AvAutocomplete
  },
  setup() {
    const modelValue = ref([]);
    return {
      args,
      modelValue,
      MDI_ICONS
    };
  },
  template: \`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  \`
})`,...(Pe=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var $e,We,Fe;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render() {
    return {
      components: {
        AvAutocomplete,
        AvListItem
      },
      setup() {
        const modelValue = ref([]);
        const customOptions: ExtendedOption[] = [{
          label: 'John Doe',
          value: 'john',
          role: 'Developer',
          department: 'Engineering'
        }, {
          label: 'Jane Smith',
          value: 'jane',
          role: 'Designer',
          department: 'Design'
        }, {
          label: 'Bob Johnson',
          value: 'bob',
          role: 'Manager',
          department: 'Product'
        }, {
          label: 'Alice Brown',
          value: 'alice',
          role: 'Analyst',
          department: 'Marketing'
        }];
        return {
          modelValue,
          customOptions,
          MDI_ICONS
        };
      },
      template: \`
        <AvAutocomplete 
          v-model="modelValue"
          :options="customOptions"
          :input-options="{
            label: 'Select team member',
            placeholder: 'Search for team members...'
          }"
          :min-chars="1"
          @search="(query) => console.log('Search:', query)"
        >
          <template #item="{ option, isSelected, toggle }">
            <AvListItem 
              :selected="isSelected"
              hover-background-color="var(--light-background-neutral)"
              @click="toggle"
            >
              <div style="display: flex; flex-direction: column; gap: 0.25rem; width: 100%;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: 600; color: var(--title);">{{ option.label }}</span>
                  <span style="font-size: 0.875rem; color: var(--light-foreground-info); background: var(--light-background-info); padding: 0.125rem 0.5rem; border-radius: var(--radius-xs);">{{ option.role }}</span>
                </div>
                <div style="font-size: 0.875rem; color: var(--text2);">{{ option.department }}</div>
              </div>
            </AvListItem>
          </template>
        </AvAutocomplete>
      \`
    };
  }
}`,...(Fe=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};const go=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithClearSelectionButton","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{K as CustomDropdownSize,B as Default,W as Loading,j as MultiSelect,P as MultiSelectWithoutSelectionInInput,F as WithClearSelectionButton,$ as WithCustomInput,G as WithCustomItemSlotExample,U as WithDescriptionAndDisabled,z as WithLoadMore,go as __namedExportsOrder,fo as default};
