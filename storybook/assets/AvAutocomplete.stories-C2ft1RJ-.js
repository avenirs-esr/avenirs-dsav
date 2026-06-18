import{A as nt,a as Pe}from"./AvList-DqLM72zA.js";import{s as at,m as X,_ as Z,L as C,b as N,a2 as lt,G as ae,W as o,g as S,A as rt,y as st,k,f as K,d as He,N as R,R as ie,e as G,a4 as D,w as Ue,H as h,F as oe,M as Ge,i as Q,P as Je,Z as ce,D as it,v as de,I as ct}from"./iframe-DSlEl8eq.js";import{A as le}from"./AvButton-dWGyqTfk.js";import{a as dt}from"./index-C_C69Leg.js";import{A as ut}from"./AvIcon-D64V8ePC.js";import{M as V}from"./icons-BJ4bGiUf.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as pt}from"./AvInput-Dv6GhR3P.js";import"./AvTooltip-RrE9taMo.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";import"./icon-path-u9rVYwcY.js";import"./AvMessage-BfsI3L7v.js";import"./AvIconText-DfYpS-N0.js";var M=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(M||{});const Ke=Symbol("AvAutocompleteContext");function re(){const e=at(Ke);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var mt=typeof global=="object"&&global&&global.Object===Object&&global,ft=typeof self=="object"&&self&&self.Object===Object&&self,Qe=mt||ft||Function("return this")(),Y=Qe.Symbol,Ye=Object.prototype,vt=Ye.hasOwnProperty,gt=Ye.toString,E=Y?Y.toStringTag:void 0;function ht(e){var n=vt.call(e,E),r=e[E];try{e[E]=void 0;var g=!0}catch{}var p=gt.call(e);return g&&(n?e[E]=r:delete e[E]),p}var bt=Object.prototype,yt=bt.toString;function St(e){return yt.call(e)}var At="[object Null]",It="[object Undefined]",ue=Y?Y.toStringTag:void 0;function Ot(e){return e==null?e===void 0?It:At:ue&&ue in Object(e)?ht(e):St(e)}function wt(e){return e!=null&&typeof e=="object"}var _t="[object Symbol]";function Ct(e){return typeof e=="symbol"||wt(e)&&Ot(e)==_t}var xt=/\s/;function Lt(e){for(var n=e.length;n--&&xt.test(e.charAt(n)););return n}var Tt=/^\s+/;function Dt(e){return e&&e.slice(0,Lt(e)+1).replace(Tt,"")}function ne(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var pe=NaN,kt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Nt=parseInt;function me(e){if(typeof e=="number")return e;if(Ct(e))return pe;if(ne(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ne(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Dt(e);var r=Vt.test(e);return r||Mt.test(e)?Nt(e.slice(2),r?2:8):kt.test(e)?pe:+e}var te=function(){return Qe.Date.now()},Rt="Expected a function",qt=Math.max,Et=Math.min;function Xe(e,n,r){var g,p,f,m,s,t,c=0,b=!1,y=!1,O=!0;if(typeof e!="function")throw new TypeError(Rt);n=me(n)||0,ne(r)&&(b=!!r.leading,y="maxWait"in r,f=y?qt(me(r.maxWait)||0,n):f,O="trailing"in r?!!r.trailing:O);function w(l){var d=g,I=p;return g=p=void 0,c=l,m=e.apply(I,d),m}function L(l){return c=l,s=setTimeout(A,n),b?w(l):m}function _(l){var d=l-t,I=l-c,q=n-d;return y?Et(q,f-I):q}function T(l){var d=l-t,I=l-c;return t===void 0||d>=n||d<0||y&&I>=f}function A(){var l=te();if(T(l))return v(l);s=setTimeout(A,_(l))}function v(l){return s=void 0,O&&g?w(l):(g=p=void 0,m)}function i(){s!==void 0&&clearTimeout(s),c=0,g=t=p=s=void 0}function a(){return s===void 0?m:v(te())}function u(){var l=te(),d=T(l);if(g=arguments,p=this,t=l,d){if(s===void 0)return L(t);if(y)return clearTimeout(s),s=setTimeout(A,n),w(t)}return s===void 0&&(s=setTimeout(A,n)),m}return u.cancel=i,u.flush=a,u}const jt={key:0,class:"av-p-xs"},Bt={key:1,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},Wt={key:2,class:"av-autocomplete-dropdown__empty av-p-md"},$t={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Ft={key:0,class:"caption-light"},Ze=X({__name:"AvAutocompleteDropdown",emits:["loadMore","clearSelection"],setup(e,{expose:n,emit:r}){const g=r,p=Z(),{selectedItems:f,searchQuery:m,isOpen:s,props:t,getOptionId:c,getDisplayLabel:b}=re(),y=C(),O=C(),w=N(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const a=m.value.toLowerCase().trim();if(!a){const l=t.options;return t.maxResults?l.slice(0,t.maxResults):l}let u;return t.filterOptions?u=t.filterOptions(t.options,a):u=t.options.filter(l=>b(l).toLowerCase().includes(a)),t.maxResults?u.slice(0,t.maxResults):u}),L=N(()=>t.loading?M.LOADING:s.value&&t.options&&t.options.length>0&&w.value.length>0?M.HAS_OPTIONS:M.NO_OPTIONS);function _(a){return f.value.some(u=>c(u)===c(a))}function T(a){if(a.disabled)return;if(!t.multiSelect){f.value=[a],s.value=!1,m.value="";return}const u=f.value,l=c(a);u.some(I=>c(I)===l)?f.value=u.filter(I=>c(I)!==l):f.value=[...u,a]}function A(){f.value=[],g("clearSelection")}const{arrivedState:v}=dt(O,{throttle:100}),i=Xe(()=>{g("loadMore")},t.loadMoreThrottleDelay);return lt(()=>v.bottom,a=>{t.enableLoadMore&&a&&s.value&&i()}),ae(()=>{i.cancel()}),n({dropdownRef:y}),(a,u)=>{const l=le;return o(s)?(h(),S("div",{key:0,ref_key:"dropdownRef",ref:y,class:st(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",o(t).dropdownClass]),style:rt({width:o(t).dropdownWidth,maxHeight:o(t).maxDropdownHeight})},[o(t).showClearSelectionButton?(h(),S("div",jt,[k(l,{label:o(t).clearSelectionLabel??"Clear selection",icon:o(V).CLOSE_CIRCLE_OUTLINE,variant:"DEFAULT",theme:"SECONDARY",small:"",disabled:o(f).length===0,onClick:A},null,8,["label","icon","disabled"])])):K("",!0),o(L)===o(M).LOADING?(h(),S("div",Bt,[k(ut,{name:o(V).LOADING,size:1.5,animation:"spin"},null,8,["name"]),u[0]||(u[0]=He("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):o(L)===o(M).NO_OPTIONS?(h(),S("div",Wt,[p.empty?R(a.$slots,"empty",{key:0},void 0,!0):(h(),S("div",$t,ie(o(t).noResultsLabel??"No results found"),1))])):(h(),G(nt,Ue({key:3,ref_key:"listRef",ref:O},o(t).listOptions,{class:["av-autocomplete-dropdown__options",o(t).scrollbarClass]}),{default:D(()=>[(h(!0),S(oe,null,Ge(o(w),d=>(h(),S(oe,{key:o(c)(d)},[p.item?R(a.$slots,"item",{key:0,option:d,isSelected:_(d),toggle:()=>T(d)},void 0,!0):(h(),G(Pe,{key:1,title:o(b)(d),icon:_(d)?o(V).CHECK:void 0,selected:_(d),disabled:d.disabled,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>T(d)},{default:D(()=>[d.description?(h(),S("span",Ft,ie(d.description),1)):K("",!0)]),_:2},1032,["title","icon","selected","disabled","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):K("",!0)}}}),zt=ee(Ze,[["__scopeId","data-v-caf1d2a8"]]);Ze.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"},{name:"clearSelection"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Pt={class:"av-autocomplete-input"},et=X({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:n,emit:r}){const g=r,p=Z(),{selectedItems:f,searchQuery:m,isOpen:s,props:t,inputId:c,handleBlur:b,getDisplayLabel:y}=re(),O=C(),w=N(()=>{if(!t.multiSelect&&f.value.length>0)return y(f.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return m.value;if(f.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:f.value.map(y).join(", ")}return m.value}),L=N(()=>{var i;return((i=t.inputOptions)==null?void 0:i.placeholder)||"Search..."}),_=Xe(i=>{m.value=i},t.debounceDelay);function T(i){_(String(i||""))}function A(){s.value=!0}function v(){m.value="",g("clear")}return ae(()=>{_.cancel()}),n({inputRef:O,searchQuery:N(()=>m.value)}),(i,a)=>(h(),S("div",Pt,[k(pt,Ue({id:o(c),ref_key:"inputRef",ref:O,"model-value":o(w),placeholder:o(L)},o(t).inputOptions,{"onUpdate:modelValue":T,onFocus:A,onBlur:o(b),onClick:A}),Q({_:2},[p.requiredTip?{name:"requiredTip",fn:D(()=>[(h(),G(Je(p.requiredTip)))]),key:"0"}:void 0,o(m)&&o(m).length>0?{name:"suffix",fn:D(()=>[k(le,{label:o(t).clearLabel??"Clear search",icon:o(V).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",small:"",onClick:v},null,8,["label","icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),Ht=ee(et,[["__scopeId","data-v-98cb2e32"]]);et.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Ut={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},tt=X({__name:"AvAutocompleteSelectedTags",setup(e){const n=Z(),{selectedItems:r,props:g,getOptionId:p,getDisplayLabel:f}=re();function m(s){const t=r.value,c=p(s);r.value=t.filter(b=>p(b)!==c)}return(s,t)=>o(g).multiSelect&&o(r).length>0&&o(g).showSelectedSection?(h(),S("div",Ut,[(h(!0),S(oe,null,Ge(o(r),c=>(h(),S("div",{key:o(p)(c),class:"av-autocomplete-selected-tags__item"},[n.selectedItem?R(s.$slots,"selectedItem",{key:0,option:c,remove:()=>m(c)},void 0,!0):(h(),G(le,{key:1,label:o(f)(c),icon:o(V).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>m(c)},null,8,["label","icon","onClick"]))]))),128))])):K("",!0)}}),Gt=ee(tt,[["__scopeId","data-v-19df692b"]]);tt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Jt={class:"av-autocomplete av-col av-gap-xxs"},ot=X({__name:"AvAutocomplete",props:de({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"},clearLabel:{default:"Clear search"},showClearSelectionButton:{type:Boolean,default:!1},clearSelectionLabel:{default:"Clear selection"},noResultsLabel:{}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:de(["loadMore","clear","clearSelection"],["update:modelValue","update:search"]),setup(e,{emit:n}){const r=e,g=n,p=Z(),f=ce(e,"modelValue"),m=ce(e,"search"),s=C(!1),t=C(),c=C(),b=C(),y=N(()=>r.id||`av-autocomplete-${crypto.randomUUID()}`);function O(v){m.value=v}function w(v){var i,a;(a=(i=b.value)==null?void 0:i.dropdownRef)!=null&&a.contains(v.relatedTarget)||setTimeout(()=>{s.value=!1},r.blurCloseDelay)}function L(v){return r.getOptionKey?r.getOptionKey(v):v.value}function _(v){return r.getOptionLabel?r.getOptionLabel(v):v.label}ct(Ke,{selectedItems:f,searchQuery:m,isOpen:s,props:r,inputId:y,handleBlur:w,getOptionId:L,getDisplayLabel:_});function A(v){var u,l,d,I,q;const i=v.target,a=(u=c.value)==null?void 0:u.inputRef;!((l=a==null?void 0:a.contains)!=null&&l.call(a,i))&&!((d=t.value)!=null&&d.contains(i))&&!((q=(I=b.value)==null?void 0:I.dropdownRef)!=null&&q.contains(i))&&(s.value=!1)}return it(()=>{document.addEventListener("click",A)}),ae(()=>{document.removeEventListener("click",A)}),(v,i)=>(h(),S("div",Jt,[He("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[k(Ht,{ref_key:"inputRef",ref:c,onSearch:O,onClear:i[0]||(i[0]=a=>g("clear"))},Q({_:2},[p.requiredTip?{name:"requiredTip",fn:D(()=>[(h(),G(Je(p.requiredTip)))]),key:"0"}:void 0]),1536),k(zt,{ref_key:"dropdownRef",ref:b,"show-clear-selection-button":e.showClearSelectionButton,onClearSelection:i[1]||(i[1]=a=>g("clearSelection")),onLoadMore:i[2]||(i[2]=a=>g("loadMore"))},Q({_:2},[p.item?{name:"item",fn:D(({option:a,isSelected:u,toggle:l})=>[R(v.$slots,"item",{option:a,isSelected:u,toggle:l},void 0,!0)]),key:"0"}:void 0,p.empty?{name:"empty",fn:D(()=>[R(v.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1032,["show-clear-selection-button"])],512),k(Gt,null,Q({_:2},[p.selectedItem?{name:"selectedItem",fn:D(({option:a,remove:u})=>[R(v.$slots,"selectedItem",{option:a,remove:u},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),se=ee(ot,[["__scopeId","data-v-d8eda11b"]]);ot.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"displaySelectionInInput",defaultValue:{func:!1,value:"true"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}},{name:"selectedItemsCountLabel",defaultValue:{func:!1,value:"'element(s) selected'"}},{name:"clearLabel",defaultValue:{func:!1,value:"'Clear search'"}},{name:"showClearSelectionButton",defaultValue:{func:!1,value:"false"}},{name:"clearSelectionLabel",defaultValue:{func:!1,value:"'Clear selection'"}}],events:[{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the search query is cleared."},{name:"clearSelection",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const co={title:"Components/Interaction/Selects/AvAutocomplete",component:se,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}},clearLabel:{control:"text",description:"Label for the clear selection button"},showClearSelectionButton:{control:"boolean",description:"Whether to show a button to clear the selection"},clearSelectionLabel:{control:"text",description:"Label for the clear selection button when no items are selected"}},args:{clearLabel:"Clear search",clearSelectionLabel:"Clear selection",showClearSelectionButton:!1,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},x=e=>({components:{AvAutocomplete:se},setup(){const n=C([]);return{args:e,modelValue:n,MDI_ICONS:V}},template:`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  `}),j=x.bind({});j.args={};const B=x.bind({});B.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const W=x.bind({});W.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const $=x.bind({});$.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const F=x.bind({});F.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const z=x.bind({});z.args={multiSelect:!0,showSelectedSection:!0,showClearSelectionButton:!0,inputOptions:{label:"Multi-select with clear button",placeholder:"Search and select multiple options..."}};const P=x.bind({});P.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,n)=>({label:`Option ${n+1}`,value:`${n+1}`}))};const H=x.bind({});H.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const U=x.bind({});U.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const J={render(){return{components:{AvAutocomplete:se,AvListItem:Pe},setup(){return{modelValue:C([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:V}},template:`
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
})`,...(_e=(we=$.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};var Ce,xe,Le;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(Le=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:Le.source}}};var Te,De,ke;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
}`,...(ze=(Fe=J.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};const uo=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithClearSelectionButton","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{H as CustomDropdownSize,j as Default,F as Loading,B as MultiSelect,W as MultiSelectWithoutSelectionInInput,z as WithClearSelectionButton,$ as WithCustomInput,J as WithCustomItemSlotExample,U as WithDescriptionAndDisabled,P as WithLoadMore,uo as __namedExportsOrder,co as default};
