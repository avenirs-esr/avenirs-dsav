import{A as at,a as Ue}from"./AvList-DuqkZUyi.js";import{u as lt,n as X,a3 as Z,P as L,d as V,a7 as rt,K as ae,$ as o,h as A,E as st,B as it,l as M,g as J,e as He,R,X as ce,f as K,a9 as k,z as Ke,L as b,F as oe,Q as Ge,j as Q,U as Je,a2 as ue,I as ct,y as de,M as ut}from"./iframe-T1PdNDhM.js";import{A as le}from"./AvButton-B38MxCq9.js";import{a as dt}from"./index-DKreFUEA.js";import{A as mt}from"./AvIcon-sXUIOxgk.js";import{M as N}from"./icons-CS5vb1aa.js";import{T as re}from"./theme.types-DKH7g3eH.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as pt}from"./AvInput-B6HVdTHs.js";import"./AvTooltip-DVbJ7XaX.js";import"./use-text-truncation-uq3r4JEt.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";import"./icon-path-u9rVYwcY.js";import"./AvMessage-CtvovYfq.js";import"./AvIconText-D_qGDtJ8.js";import"./format-AL68iITa.js";import"./parseISO-Bq0sW2Ur.js";var q=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(q||{});const Qe=Symbol("AvAutocompleteContext");function se(){const e=lt(Qe);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var ft=typeof global=="object"&&global&&global.Object===Object&&global,vt=typeof self=="object"&&self&&self.Object===Object&&self,Ye=ft||vt||Function("return this")(),Y=Ye.Symbol,Xe=Object.prototype,gt=Xe.hasOwnProperty,ht=Xe.toString,E=Y?Y.toStringTag:void 0;function bt(e){var a=gt.call(e,E),l=e[E];try{e[E]=void 0;var h=!0}catch{}var u=ht.call(e);return h&&(a?e[E]=l:delete e[E]),u}var yt=Object.prototype,St=yt.toString;function At(e){return St.call(e)}var It="[object Null]",Ot="[object Undefined]",me=Y?Y.toStringTag:void 0;function wt(e){return e==null?e===void 0?Ot:It:me&&me in Object(e)?bt(e):At(e)}function _t(e){return e!=null&&typeof e=="object"}var xt="[object Symbol]";function Ct(e){return typeof e=="symbol"||_t(e)&&wt(e)==xt}var Lt=/\s/;function Tt(e){for(var a=e.length;a--&&Lt.test(e.charAt(a)););return a}var Dt=/^\s+/;function kt(e){return e&&e.slice(0,Tt(e)+1).replace(Dt,"")}function ne(e){var a=typeof e;return e!=null&&(a=="object"||a=="function")}var pe=NaN,Vt=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Nt=/^0o[0-7]+$/i,qt=parseInt;function fe(e){if(typeof e=="number")return e;if(Ct(e))return pe;if(ne(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ne(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=kt(e);var l=Mt.test(e);return l||Nt.test(e)?qt(e.slice(2),l?2:8):Vt.test(e)?pe:+e}var te=function(){return Ye.Date.now()},Rt="Expected a function",Et=Math.max,jt=Math.min;function Ze(e,a,l){var h,u,m,d,r,t,i=0,I=!1,y=!1,O=!0;if(typeof e!="function")throw new TypeError(Rt);a=fe(a)||0,ne(l)&&(I=!!l.leading,y="maxWait"in l,m=y?Et(fe(l.maxWait)||0,a):m,O="trailing"in l?!!l.trailing:O);function w(n){var g=h,f=u;return h=u=void 0,i=n,d=e.apply(f,g),d}function D(n){return i=n,r=setTimeout(S,a),I?w(n):d}function _(n){var g=n-t,f=n-i,C=a-g;return y?jt(C,m-f):C}function x(n){var g=n-t,f=n-i;return t===void 0||g>=a||g<0||y&&f>=m}function S(){var n=te();if(x(n))return p(n);r=setTimeout(S,_(n))}function p(n){return r=void 0,O&&h?w(n):(h=u=void 0,d)}function c(){r!==void 0&&clearTimeout(r),i=0,h=t=u=r=void 0}function v(){return r===void 0?d:p(te())}function s(){var n=te(),g=x(n);if(h=arguments,u=this,t=n,g){if(r===void 0)return D(t);if(y)return clearTimeout(r),r=setTimeout(S,a),w(t)}return r===void 0&&(r=setTimeout(S,a)),d}return s.cancel=c,s.flush=v,s}const Bt={key:0,class:"av-p-xs"},Wt={key:1,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},$t={key:2,class:"av-autocomplete-dropdown__empty av-p-md"},Ft={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},zt={key:0,class:"caption-light"},et=X({__name:"AvAutocompleteDropdown",emits:["loadMore","clearSelection"],setup(e,{expose:a,emit:l}){const h=l,u=Z(),{selectedItems:m,searchQuery:d,isOpen:r,props:t,getOptionId:i,getDisplayLabel:I}=se(),y=L(),O=L(),w=V(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const s=d.value.toLowerCase().trim();if(!s){const g=t.options;return t.maxResults?g.slice(0,t.maxResults):g}let n;return t.filterOptions?n=t.filterOptions(t.options,s):n=t.options.filter(g=>I(g).toLowerCase().includes(s)),t.maxResults?n.slice(0,t.maxResults):n}),D=V(()=>t.itemsTitleMaxLines),_=V(()=>t.loading?q.LOADING:r.value&&t.options&&t.options.length>0&&w.value.length>0?q.HAS_OPTIONS:q.NO_OPTIONS);function x(s){return m.value.some(n=>i(n)===i(s))}function S(s){if(s.disabled)return;if(!t.multiSelect){m.value=[s],r.value=!1,d.value="";return}const n=m.value,g=i(s);n.some(C=>i(C)===g)?m.value=n.filter(C=>i(C)!==g):m.value=[...n,s]}function p(){m.value=[],h("clearSelection")}const{arrivedState:c}=dt(O,{throttle:100}),v=Ze(()=>{h("loadMore")},t.loadMoreThrottleDelay);return rt(()=>c.bottom,s=>{t.enableLoadMore&&s&&r.value&&v()}),ae(()=>{v.cancel()}),a({dropdownRef:y}),(s,n)=>{const g=le;return o(r)?(b(),A("div",{key:0,ref_key:"dropdownRef",ref:y,class:it(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",o(t).dropdownClass]),style:st({width:o(t).dropdownWidth,maxHeight:o(t).maxDropdownHeight})},[o(t).showClearSelectionButton?(b(),A("div",Bt,[M(g,{label:o(t).clearSelectionLabel??"Clear selection",icon:o(N).CLOSE_CIRCLE_OUTLINE,variant:"DEFAULT",theme:o(re).SECONDARY,small:"",disabled:o(m).length===0,onClick:p},null,8,["label","icon","theme","disabled"])])):J("",!0),o(_)===o(q).LOADING?(b(),A("div",Wt,[M(mt,{name:o(N).LOADING,size:1.5,animation:"spin"},null,8,["name"]),n[0]||(n[0]=He("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):o(_)===o(q).NO_OPTIONS?(b(),A("div",$t,[u.empty?R(s.$slots,"empty",{key:0},void 0,!0):(b(),A("div",Ft,ce(o(t).noResultsLabel??"No results found"),1))])):(b(),K(at,Ke({key:3,ref_key:"listRef",ref:O},o(t).listOptions,{class:["av-autocomplete-dropdown__options",o(t).scrollbarClass]}),{default:k(()=>[(b(!0),A(oe,null,Ge(o(w),f=>(b(),A(oe,{key:o(i)(f)},[u.item?R(s.$slots,"item",{key:0,option:f,isSelected:x(f),toggle:()=>S(f)},void 0,!0):(b(),K(Ue,{key:1,title:o(I)(f),"title-max-lines":o(D),"enable-tooltip":!!o(D),icon:x(f)?o(N).CHECK:void 0,selected:x(f),disabled:f.disabled,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>S(f)},{default:k(()=>[f.description?(b(),A("span",zt,ce(f.description),1)):J("",!0)]),_:2},1032,["title","title-max-lines","enable-tooltip","icon","selected","disabled","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):J("",!0)}}}),Pt=ee(et,[["__scopeId","data-v-75f56e3f"]]);et.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"},{name:"clearSelection"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Ut={class:"av-autocomplete-input"},tt=X({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:a,emit:l}){const h=l,u=Z(),{selectedItems:m,searchQuery:d,isOpen:r,props:t,inputId:i,handleBlur:I,getDisplayLabel:y}=se(),O=L(),w=V(()=>{if(!t.multiSelect&&m.value.length>0)return y(m.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return d.value;if(m.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:m.value.map(y).join(", ")}return d.value}),D=V(()=>{var c;return((c=t.inputOptions)==null?void 0:c.placeholder)||"Search..."}),_=Ze(c=>{d.value=c},t.debounceDelay);function x(c){_(String(c||""))}function S(){r.value=!0}function p(){d.value="",h("clear")}return ae(()=>{_.cancel()}),a({inputRef:O,searchQuery:V(()=>d.value)}),(c,v)=>(b(),A("div",Ut,[M(pt,Ke({id:o(i),ref_key:"inputRef",ref:O,"model-value":o(w),placeholder:o(D)},o(t).inputOptions,{"onUpdate:modelValue":x,onFocus:S,onBlur:o(I),onClick:S}),Q({_:2},[u.requiredTip?{name:"requiredTip",fn:k(()=>[(b(),K(Je(u.requiredTip)))]),key:"0"}:void 0,o(d)&&o(d).length>0?{name:"suffix",fn:k(()=>[M(le,{label:o(t).clearLabel??"Clear search",icon:o(N).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:o(re).SECONDARY,small:"",onClick:p},null,8,["label","icon","theme"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),Ht=ee(tt,[["__scopeId","data-v-e546e3ae"]]);tt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Kt={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},ot=X({__name:"AvAutocompleteSelectedTags",setup(e){const a=Z(),{selectedItems:l,props:h,getOptionId:u,getDisplayLabel:m}=se();function d(r){const t=l.value,i=u(r);l.value=t.filter(I=>u(I)!==i)}return(r,t)=>o(h).multiSelect&&o(l).length>0&&o(h).showSelectedSection?(b(),A("div",Kt,[(b(!0),A(oe,null,Ge(o(l),i=>(b(),A("div",{key:o(u)(i),class:"av-autocomplete-selected-tags__item"},[a.selectedItem?R(r.$slots,"selectedItem",{key:0,option:i,remove:()=>d(i)},void 0,!0):(b(),K(le,{key:1,label:o(m)(i),icon:o(N).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:o(re).SECONDARY,onClick:()=>d(i)},null,8,["label","icon","theme","onClick"]))]))),128))])):J("",!0)}}),Gt=ee(ot,[["__scopeId","data-v-88af4a64"]]);ot.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Jt={class:"av-autocomplete av-col av-gap-xxs"},nt=X({__name:"AvAutocomplete",props:de({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"},clearLabel:{default:"Clear search"},showClearSelectionButton:{type:Boolean,default:!1},clearSelectionLabel:{default:"Clear selection"},noResultsLabel:{},itemsTitleMaxLines:{default:void 0}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:de(["loadMore","clear","clearSelection"],["update:modelValue","update:search"]),setup(e,{emit:a}){const l=e,h=a,u=Z(),m=ue(e,"modelValue"),d=ue(e,"search"),r=L(!1),t=L(),i=L(),I=L(),y=V(()=>l.id||`av-autocomplete-${crypto.randomUUID()}`);function O(p){d.value=p}function w(p){var v;const c=p.relatedTarget;c&&((v=t.value)!=null&&v.contains(c))||setTimeout(()=>{r.value=!1},l.blurCloseDelay)}function D(p){return l.getOptionKey?l.getOptionKey(p):p.value}function _(p){return l.getOptionLabel?l.getOptionLabel(p):p.label}ut(Qe,{selectedItems:m,searchQuery:d,isOpen:r,props:l,inputId:y,handleBlur:w,getOptionId:D,getDisplayLabel:_});function S(p){var s,n,g,f,C;const c=p.target,v=(s=i.value)==null?void 0:s.inputRef;!((n=v==null?void 0:v.contains)!=null&&n.call(v,c))&&!((g=t.value)!=null&&g.contains(c))&&!((C=(f=I.value)==null?void 0:f.dropdownRef)!=null&&C.contains(c))&&(r.value=!1)}return ct(()=>{document.addEventListener("click",S)}),ae(()=>{document.removeEventListener("click",S)}),(p,c)=>(b(),A("div",Jt,[He("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[M(Ht,{ref_key:"inputRef",ref:i,onSearch:O,onClear:c[0]||(c[0]=v=>h("clear"))},Q({_:2},[u.requiredTip?{name:"requiredTip",fn:k(()=>[(b(),K(Je(u.requiredTip)))]),key:"0"}:void 0]),1536),M(Pt,{ref_key:"dropdownRef",ref:I,"show-clear-selection-button":e.showClearSelectionButton,onClearSelection:c[1]||(c[1]=v=>h("clearSelection")),onLoadMore:c[2]||(c[2]=v=>h("loadMore"))},Q({_:2},[u.item?{name:"item",fn:k(({option:v,isSelected:s,toggle:n})=>[R(p.$slots,"item",{option:v,isSelected:s,toggle:n},void 0,!0)]),key:"0"}:void 0,u.empty?{name:"empty",fn:k(()=>[R(p.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1032,["show-clear-selection-button"])],512),M(Gt,null,Q({_:2},[u.selectedItem?{name:"selectedItem",fn:k(({option:v,remove:s})=>[R(p.$slots,"selectedItem",{option:v,remove:s},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),ie=ee(nt,[["__scopeId","data-v-473cb38e"]]);nt.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"displaySelectionInInput",defaultValue:{func:!1,value:"true"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}},{name:"selectedItemsCountLabel",defaultValue:{func:!1,value:"'element(s) selected'"}},{name:"clearLabel",defaultValue:{func:!1,value:"'Clear search'"}},{name:"showClearSelectionButton",defaultValue:{func:!1,value:"false"}},{name:"clearSelectionLabel",defaultValue:{func:!1,value:"'Clear selection'"}},{name:"itemsTitleMaxLines",defaultValue:{func:!1,value:"undefined"}}],events:[{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the search query is cleared."},{name:"clearSelection",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const vo={title:"Components/Interaction/Selects/AvAutocomplete",component:ie,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}},clearLabel:{control:"text",description:"Label for the clear selection button"},showClearSelectionButton:{control:"boolean",description:"Whether to show a button to clear the selection"},clearSelectionLabel:{control:"text",description:"Label for the clear selection button when no items are selected"}},args:{clearLabel:"Clear search",clearSelectionLabel:"Clear selection",showClearSelectionButton:!1,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},T=e=>({components:{AvAutocomplete:ie},setup(){const a=L([]);return{args:e,modelValue:a,MDI_ICONS:N}},template:`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  `}),j=T.bind({});j.args={};const B=T.bind({});B.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const W=T.bind({});W.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const $=T.bind({});$.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const F=T.bind({});F.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const z=T.bind({});z.args={multiSelect:!0,showSelectedSection:!0,showClearSelectionButton:!0,inputOptions:{label:"Multi-select with clear button",placeholder:"Search and select multiple options..."}};const P=T.bind({});P.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,a)=>({label:`Option ${a+1}`,value:`${a+1}`}))};const U=T.bind({});U.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const H=T.bind({});H.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const G={render(){return{components:{AvAutocomplete:ie,AvListItem:Ue},setup(){return{modelValue:L([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:N}},template:`
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
      `}}};var ve,ge,he;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(he=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,ye,Se;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(Se=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Ae,Ie,Oe;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(Oe=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var we,_e,xe;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
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
})`,...(xe=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:xe.source}}};var Ce,Le,Te;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(Te=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var De,ke,Ve;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`args => ({
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
})`,...(Ve=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Ve.source}}};var Me,Ne,qe;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`args => ({
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
})`,...(qe=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Re,Ee,je;U.parameters={...U.parameters,docs:{...(Re=U.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(je=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Be,We,$e;H.parameters={...H.parameters,docs:{...(Be=H.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
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
})`,...($e=(We=H.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Fe,ze,Pe;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Pe.source}}};const go=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithClearSelectionButton","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{U as CustomDropdownSize,j as Default,F as Loading,B as MultiSelect,W as MultiSelectWithoutSelectionInInput,z as WithClearSelectionButton,$ as WithCustomInput,G as WithCustomItemSlotExample,H as WithDescriptionAndDisabled,P as WithLoadMore,go as __namedExportsOrder,vo as default};
