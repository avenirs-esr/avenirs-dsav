import{A as nt,a as Pe}from"./AvList-CiGmINkM.js";import{s as lt,m as X,_ as Z,L,b as V,a2 as at,G as le,W as n,g as I,A as rt,y as st,k as M,f as K,d as He,N as q,R as ie,e as G,a4 as k,w as Ue,H as b,F as oe,M as Ge,i as Q,P as Je,Z as ce,D as it,v as ue,I as ct}from"./iframe-BwozX2SB.js";import{A as ae}from"./AvButton-Bm0byRJO.js";import{a as ut}from"./index-DwclT-LO.js";import{A as dt}from"./AvIcon-DyekagiX.js";import{M as N}from"./icons-0dWeWY1j.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as pt}from"./AvInput-BxB1enPt.js";import"./AvTooltip-CIcbfJ9j.js";import"./use-text-truncation-DNykW5t2.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";import"./icon-path-u9rVYwcY.js";import"./AvMessage-Fdgj03ee.js";import"./AvIconText-XSBEt-2K.js";var R=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(R||{});const Ke=Symbol("AvAutocompleteContext");function re(){const e=lt(Ke);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var mt=typeof global=="object"&&global&&global.Object===Object&&global,ft=typeof self=="object"&&self&&self.Object===Object&&self,Qe=mt||ft||Function("return this")(),Y=Qe.Symbol,Ye=Object.prototype,vt=Ye.hasOwnProperty,gt=Ye.toString,E=Y?Y.toStringTag:void 0;function ht(e){var l=vt.call(e,E),a=e[E];try{e[E]=void 0;var h=!0}catch{}var u=gt.call(e);return h&&(l?e[E]=a:delete e[E]),u}var bt=Object.prototype,yt=bt.toString;function St(e){return yt.call(e)}var At="[object Null]",It="[object Undefined]",de=Y?Y.toStringTag:void 0;function Ot(e){return e==null?e===void 0?It:At:de&&de in Object(e)?ht(e):St(e)}function wt(e){return e!=null&&typeof e=="object"}var _t="[object Symbol]";function xt(e){return typeof e=="symbol"||wt(e)&&Ot(e)==_t}var Ct=/\s/;function Lt(e){for(var l=e.length;l--&&Ct.test(e.charAt(l)););return l}var Tt=/^\s+/;function Dt(e){return e&&e.slice(0,Lt(e)+1).replace(Tt,"")}function ne(e){var l=typeof e;return e!=null&&(l=="object"||l=="function")}var pe=NaN,kt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Nt=parseInt;function me(e){if(typeof e=="number")return e;if(xt(e))return pe;if(ne(e)){var l=typeof e.valueOf=="function"?e.valueOf():e;e=ne(l)?l+"":l}if(typeof e!="string")return e===0?e:+e;e=Dt(e);var a=Vt.test(e);return a||Mt.test(e)?Nt(e.slice(2),a?2:8):kt.test(e)?pe:+e}var te=function(){return Qe.Date.now()},Rt="Expected a function",qt=Math.max,Et=Math.min;function Xe(e,l,a){var h,u,p,d,r,t,i=0,y=!1,S=!1,O=!0;if(typeof e!="function")throw new TypeError(Rt);l=me(l)||0,ne(a)&&(y=!!a.leading,S="maxWait"in a,p=S?qt(me(a.maxWait)||0,l):p,O="trailing"in a?!!a.trailing:O);function w(o){var g=h,f=u;return h=u=void 0,i=o,d=e.apply(f,g),d}function D(o){return i=o,r=setTimeout(A,l),y?w(o):d}function _(o){var g=o-t,f=o-i,C=l-g;return S?Et(C,p-f):C}function x(o){var g=o-t,f=o-i;return t===void 0||g>=l||g<0||S&&f>=p}function A(){var o=te();if(x(o))return m(o);r=setTimeout(A,_(o))}function m(o){return r=void 0,O&&h?w(o):(h=u=void 0,d)}function c(){r!==void 0&&clearTimeout(r),i=0,h=t=u=r=void 0}function v(){return r===void 0?d:m(te())}function s(){var o=te(),g=x(o);if(h=arguments,u=this,t=o,g){if(r===void 0)return D(t);if(S)return clearTimeout(r),r=setTimeout(A,l),w(t)}return r===void 0&&(r=setTimeout(A,l)),d}return s.cancel=c,s.flush=v,s}const jt={key:0,class:"av-p-xs"},Bt={key:1,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},Wt={key:2,class:"av-autocomplete-dropdown__empty av-p-md"},$t={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Ft={key:0,class:"caption-light"},Ze=X({__name:"AvAutocompleteDropdown",emits:["loadMore","clearSelection"],setup(e,{expose:l,emit:a}){const h=a,u=Z(),{selectedItems:p,searchQuery:d,isOpen:r,props:t,getOptionId:i,getDisplayLabel:y}=re(),S=L(),O=L(),w=V(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const s=d.value.toLowerCase().trim();if(!s){const g=t.options;return t.maxResults?g.slice(0,t.maxResults):g}let o;return t.filterOptions?o=t.filterOptions(t.options,s):o=t.options.filter(g=>y(g).toLowerCase().includes(s)),t.maxResults?o.slice(0,t.maxResults):o}),D=V(()=>t.itemsTitleMaxLines),_=V(()=>t.loading?R.LOADING:r.value&&t.options&&t.options.length>0&&w.value.length>0?R.HAS_OPTIONS:R.NO_OPTIONS);function x(s){return p.value.some(o=>i(o)===i(s))}function A(s){if(s.disabled)return;if(!t.multiSelect){p.value=[s],r.value=!1,d.value="";return}const o=p.value,g=i(s);o.some(C=>i(C)===g)?p.value=o.filter(C=>i(C)!==g):p.value=[...o,s]}function m(){p.value=[],h("clearSelection")}const{arrivedState:c}=ut(O,{throttle:100}),v=Xe(()=>{h("loadMore")},t.loadMoreThrottleDelay);return at(()=>c.bottom,s=>{t.enableLoadMore&&s&&r.value&&v()}),le(()=>{v.cancel()}),l({dropdownRef:S}),(s,o)=>{const g=ae;return n(r)?(b(),I("div",{key:0,ref_key:"dropdownRef",ref:S,class:st(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",n(t).dropdownClass]),style:rt({width:n(t).dropdownWidth,maxHeight:n(t).maxDropdownHeight})},[n(t).showClearSelectionButton?(b(),I("div",jt,[M(g,{label:n(t).clearSelectionLabel??"Clear selection",icon:n(N).CLOSE_CIRCLE_OUTLINE,variant:"DEFAULT",theme:"SECONDARY",small:"",disabled:n(p).length===0,onClick:m},null,8,["label","icon","disabled"])])):K("",!0),n(_)===n(R).LOADING?(b(),I("div",Bt,[M(dt,{name:n(N).LOADING,size:1.5,animation:"spin"},null,8,["name"]),o[0]||(o[0]=He("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):n(_)===n(R).NO_OPTIONS?(b(),I("div",Wt,[u.empty?q(s.$slots,"empty",{key:0},void 0,!0):(b(),I("div",$t,ie(n(t).noResultsLabel??"No results found"),1))])):(b(),G(nt,Ue({key:3,ref_key:"listRef",ref:O},n(t).listOptions,{class:["av-autocomplete-dropdown__options",n(t).scrollbarClass]}),{default:k(()=>[(b(!0),I(oe,null,Ge(n(w),f=>(b(),I(oe,{key:n(i)(f)},[u.item?q(s.$slots,"item",{key:0,option:f,isSelected:x(f),toggle:()=>A(f)},void 0,!0):(b(),G(Pe,{key:1,title:n(y)(f),"title-max-lines":n(D),"enable-tooltip":!!n(D),icon:x(f)?n(N).CHECK:void 0,selected:x(f),disabled:f.disabled,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>A(f)},{default:k(()=>[f.description?(b(),I("span",Ft,ie(f.description),1)):K("",!0)]),_:2},1032,["title","title-max-lines","enable-tooltip","icon","selected","disabled","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):K("",!0)}}}),zt=ee(Ze,[["__scopeId","data-v-e00fc9e0"]]);Ze.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"},{name:"clearSelection"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Pt={class:"av-autocomplete-input"},et=X({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:l,emit:a}){const h=a,u=Z(),{selectedItems:p,searchQuery:d,isOpen:r,props:t,inputId:i,handleBlur:y,getDisplayLabel:S}=re(),O=L(),w=V(()=>{if(!t.multiSelect&&p.value.length>0)return S(p.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return d.value;if(p.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:p.value.map(S).join(", ")}return d.value}),D=V(()=>{var c;return((c=t.inputOptions)==null?void 0:c.placeholder)||"Search..."}),_=Xe(c=>{d.value=c},t.debounceDelay);function x(c){_(String(c||""))}function A(){r.value=!0}function m(){d.value="",h("clear")}return le(()=>{_.cancel()}),l({inputRef:O,searchQuery:V(()=>d.value)}),(c,v)=>(b(),I("div",Pt,[M(pt,Ue({id:n(i),ref_key:"inputRef",ref:O,"model-value":n(w),placeholder:n(D)},n(t).inputOptions,{"onUpdate:modelValue":x,onFocus:A,onBlur:n(y),onClick:A}),Q({_:2},[u.requiredTip?{name:"requiredTip",fn:k(()=>[(b(),G(Je(u.requiredTip)))]),key:"0"}:void 0,n(d)&&n(d).length>0?{name:"suffix",fn:k(()=>[M(ae,{label:n(t).clearLabel??"Clear search",icon:n(N).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",small:"",onClick:m},null,8,["label","icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),Ht=ee(et,[["__scopeId","data-v-98cb2e32"]]);et.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Ut={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},tt=X({__name:"AvAutocompleteSelectedTags",setup(e){const l=Z(),{selectedItems:a,props:h,getOptionId:u,getDisplayLabel:p}=re();function d(r){const t=a.value,i=u(r);a.value=t.filter(y=>u(y)!==i)}return(r,t)=>n(h).multiSelect&&n(a).length>0&&n(h).showSelectedSection?(b(),I("div",Ut,[(b(!0),I(oe,null,Ge(n(a),i=>(b(),I("div",{key:n(u)(i),class:"av-autocomplete-selected-tags__item"},[l.selectedItem?q(r.$slots,"selectedItem",{key:0,option:i,remove:()=>d(i)},void 0,!0):(b(),G(ae,{key:1,label:n(p)(i),icon:n(N).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>d(i)},null,8,["label","icon","onClick"]))]))),128))])):K("",!0)}}),Gt=ee(tt,[["__scopeId","data-v-19df692b"]]);tt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Jt={class:"av-autocomplete av-col av-gap-xxs"},ot=X({__name:"AvAutocomplete",props:ue({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"},clearLabel:{default:"Clear search"},showClearSelectionButton:{type:Boolean,default:!1},clearSelectionLabel:{default:"Clear selection"},noResultsLabel:{},itemsTitleMaxLines:{default:void 0}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:ue(["loadMore","clear","clearSelection"],["update:modelValue","update:search"]),setup(e,{emit:l}){const a=e,h=l,u=Z(),p=ce(e,"modelValue"),d=ce(e,"search"),r=L(!1),t=L(),i=L(),y=L(),S=V(()=>a.id||`av-autocomplete-${crypto.randomUUID()}`);function O(m){d.value=m}function w(m){var c,v;(v=(c=y.value)==null?void 0:c.dropdownRef)!=null&&v.contains(m.relatedTarget)||setTimeout(()=>{r.value=!1},a.blurCloseDelay)}function D(m){return a.getOptionKey?a.getOptionKey(m):m.value}function _(m){return a.getOptionLabel?a.getOptionLabel(m):m.label}ct(Ke,{selectedItems:p,searchQuery:d,isOpen:r,props:a,inputId:S,handleBlur:w,getOptionId:D,getDisplayLabel:_});function A(m){var s,o,g,f,C;const c=m.target,v=(s=i.value)==null?void 0:s.inputRef;!((o=v==null?void 0:v.contains)!=null&&o.call(v,c))&&!((g=t.value)!=null&&g.contains(c))&&!((C=(f=y.value)==null?void 0:f.dropdownRef)!=null&&C.contains(c))&&(r.value=!1)}return it(()=>{document.addEventListener("click",A)}),le(()=>{document.removeEventListener("click",A)}),(m,c)=>(b(),I("div",Jt,[He("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[M(Ht,{ref_key:"inputRef",ref:i,onSearch:O,onClear:c[0]||(c[0]=v=>h("clear"))},Q({_:2},[u.requiredTip?{name:"requiredTip",fn:k(()=>[(b(),G(Je(u.requiredTip)))]),key:"0"}:void 0]),1536),M(zt,{ref_key:"dropdownRef",ref:y,"show-clear-selection-button":e.showClearSelectionButton,onClearSelection:c[1]||(c[1]=v=>h("clearSelection")),onLoadMore:c[2]||(c[2]=v=>h("loadMore"))},Q({_:2},[u.item?{name:"item",fn:k(({option:v,isSelected:s,toggle:o})=>[q(m.$slots,"item",{option:v,isSelected:s,toggle:o},void 0,!0)]),key:"0"}:void 0,u.empty?{name:"empty",fn:k(()=>[q(m.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1032,["show-clear-selection-button"])],512),M(Gt,null,Q({_:2},[u.selectedItem?{name:"selectedItem",fn:k(({option:v,remove:s})=>[q(m.$slots,"selectedItem",{option:v,remove:s},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),se=ee(ot,[["__scopeId","data-v-427946bc"]]);ot.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"displaySelectionInInput",defaultValue:{func:!1,value:"true"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}},{name:"selectedItemsCountLabel",defaultValue:{func:!1,value:"'element(s) selected'"}},{name:"clearLabel",defaultValue:{func:!1,value:"'Clear search'"}},{name:"showClearSelectionButton",defaultValue:{func:!1,value:"false"}},{name:"clearSelectionLabel",defaultValue:{func:!1,value:"'Clear selection'"}},{name:"itemsTitleMaxLines",defaultValue:{func:!1,value:"undefined"}}],events:[{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the search query is cleared."},{name:"clearSelection",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const uo={title:"Components/Interaction/Selects/AvAutocomplete",component:se,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}},clearLabel:{control:"text",description:"Label for the clear selection button"},showClearSelectionButton:{control:"boolean",description:"Whether to show a button to clear the selection"},clearSelectionLabel:{control:"text",description:"Label for the clear selection button when no items are selected"}},args:{clearLabel:"Clear search",clearSelectionLabel:"Clear selection",showClearSelectionButton:!1,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},T=e=>({components:{AvAutocomplete:se},setup(){const l=L([]);return{args:e,modelValue:l,MDI_ICONS:N}},template:`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  `}),j=T.bind({});j.args={};const B=T.bind({});B.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const W=T.bind({});W.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const $=T.bind({});$.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const F=T.bind({});F.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const z=T.bind({});z.args={multiSelect:!0,showSelectedSection:!0,showClearSelectionButton:!0,inputOptions:{label:"Multi-select with clear button",placeholder:"Search and select multiple options..."}};const P=T.bind({});P.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,l)=>({label:`Option ${l+1}`,value:`${l+1}`}))};const H=T.bind({});H.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const U=T.bind({});U.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const J={render(){return{components:{AvAutocomplete:se,AvListItem:Pe},setup(){return{modelValue:L([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:N}},template:`
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
      `}}};var fe,ve,ge;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,be,ye;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
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
})`,...(ye=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,Ae,Ie;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Oe,we,_e;$.parameters={...$.parameters,docs:{...(Oe=$.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(_e=(we=$.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};var xe,Ce,Le;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
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
})`,...(Le=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Te,De,ke;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(ke=(De=z.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Ve,Me,Ne;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
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
})`,...(Ne=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var Re,qe,Ee;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(Ee=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var je,Be,We;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
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
})`,...(We=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var $e,Fe,ze;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(ze=(Fe=J.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};const po=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithClearSelectionButton","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{H as CustomDropdownSize,j as Default,F as Loading,B as MultiSelect,W as MultiSelectWithoutSelectionInInput,z as WithClearSelectionButton,$ as WithCustomInput,J as WithCustomItemSlotExample,U as WithDescriptionAndDisabled,P as WithLoadMore,po as __namedExportsOrder,uo as default};
