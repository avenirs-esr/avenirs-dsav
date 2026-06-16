import{A as ot,a as ze}from"./AvList-Ct0Idd9J.js";import{s as nt,m as X,_ as Z,L as C,b as N,a2 as at,G as ae,W as l,g as S,A as lt,y as rt,k,f as K,d as Pe,N as q,e as G,a4 as D,w as He,H as h,F as oe,M as Ue,R as st,i as Q,P as Ge,Z as ie,D as it,v as ce,I as ct}from"./iframe-Be-ns_Rk.js";import{A as le}from"./AvButton-CtXiFPTb.js";import{a as dt}from"./index-Dc-RuP6_.js";import{A as ut}from"./AvIcon-CfFlsLcF.js";import{M as V}from"./icons-BJ4bGiUf.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as pt}from"./AvInput-DcIN1JY_.js";import"./AvTooltip-9y0ULdVz.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";import"./icon-path-u9rVYwcY.js";import"./AvMessage-BHaDG9xx.js";import"./AvIconText-DKdCnHHP.js";var M=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(M||{});const Je=Symbol("AvAutocompleteContext");function re(){const e=nt(Je);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var mt=typeof global=="object"&&global&&global.Object===Object&&global,ft=typeof self=="object"&&self&&self.Object===Object&&self,Ke=mt||ft||Function("return this")(),Y=Ke.Symbol,Qe=Object.prototype,vt=Qe.hasOwnProperty,gt=Qe.toString,E=Y?Y.toStringTag:void 0;function ht(e){var o=vt.call(e,E),r=e[E];try{e[E]=void 0;var g=!0}catch{}var p=gt.call(e);return g&&(o?e[E]=r:delete e[E]),p}var bt=Object.prototype,yt=bt.toString;function St(e){return yt.call(e)}var At="[object Null]",It="[object Undefined]",de=Y?Y.toStringTag:void 0;function Ot(e){return e==null?e===void 0?It:At:de&&de in Object(e)?ht(e):St(e)}function wt(e){return e!=null&&typeof e=="object"}var _t="[object Symbol]";function Ct(e){return typeof e=="symbol"||wt(e)&&Ot(e)==_t}var xt=/\s/;function Lt(e){for(var o=e.length;o--&&xt.test(e.charAt(o)););return o}var Tt=/^\s+/;function Dt(e){return e&&e.slice(0,Lt(e)+1).replace(Tt,"")}function ne(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}var ue=NaN,kt=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Nt=parseInt;function pe(e){if(typeof e=="number")return e;if(Ct(e))return ue;if(ne(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=ne(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=Dt(e);var r=Vt.test(e);return r||Mt.test(e)?Nt(e.slice(2),r?2:8):kt.test(e)?ue:+e}var te=function(){return Ke.Date.now()},qt="Expected a function",Rt=Math.max,Et=Math.min;function Ye(e,o,r){var g,p,m,f,s,t,c=0,b=!1,y=!1,O=!0;if(typeof e!="function")throw new TypeError(qt);o=pe(o)||0,ne(r)&&(b=!!r.leading,y="maxWait"in r,m=y?Rt(pe(r.maxWait)||0,o):m,O="trailing"in r?!!r.trailing:O);function _(a){var d=g,I=p;return g=p=void 0,c=a,f=e.apply(I,d),f}function L(a){return c=a,s=setTimeout(A,o),b?_(a):f}function w(a){var d=a-t,I=a-c,R=o-d;return y?Et(R,m-I):R}function T(a){var d=a-t,I=a-c;return t===void 0||d>=o||d<0||y&&I>=m}function A(){var a=te();if(T(a))return v(a);s=setTimeout(A,w(a))}function v(a){return s=void 0,O&&g?_(a):(g=p=void 0,f)}function i(){s!==void 0&&clearTimeout(s),c=0,g=t=p=s=void 0}function n(){return s===void 0?f:v(te())}function u(){var a=te(),d=T(a);if(g=arguments,p=this,t=a,d){if(s===void 0)return L(t);if(y)return clearTimeout(s),s=setTimeout(A,o),_(t)}return s===void 0&&(s=setTimeout(A,o)),f}return u.cancel=i,u.flush=n,u}const jt={key:0,class:"av-p-xs"},Bt={key:1,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},Wt={key:2,class:"av-autocomplete-dropdown__empty av-p-md"},$t={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Ft={key:0,class:"caption-light"},Xe=X({__name:"AvAutocompleteDropdown",emits:["loadMore","clearSelection"],setup(e,{expose:o,emit:r}){const g=r,p=Z(),{selectedItems:m,searchQuery:f,isOpen:s,props:t,getOptionId:c,getDisplayLabel:b}=re(),y=C(),O=C(),_=N(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const n=f.value.toLowerCase().trim();if(!n){const a=t.options;return t.maxResults?a.slice(0,t.maxResults):a}let u;return t.filterOptions?u=t.filterOptions(t.options,n):u=t.options.filter(a=>b(a).toLowerCase().includes(n)),t.maxResults?u.slice(0,t.maxResults):u}),L=N(()=>t.loading?M.LOADING:s.value&&t.options&&t.options.length>0&&_.value.length>0?M.HAS_OPTIONS:M.NO_OPTIONS);function w(n){return m.value.some(u=>c(u)===c(n))}function T(n){if(n.disabled)return;if(!t.multiSelect){m.value=[n],s.value=!1,f.value="";return}const u=m.value,a=c(n);u.some(I=>c(I)===a)?m.value=u.filter(I=>c(I)!==a):m.value=[...u,n]}function A(){m.value=[],g("clearSelection")}const{arrivedState:v}=dt(O,{throttle:100}),i=Ye(()=>{g("loadMore")},t.loadMoreThrottleDelay);return at(()=>v.bottom,n=>{t.enableLoadMore&&n&&s.value&&i()}),ae(()=>{i.cancel()}),o({dropdownRef:y}),(n,u)=>{const a=le;return l(s)?(h(),S("div",{key:0,ref_key:"dropdownRef",ref:y,class:rt(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",l(t).dropdownClass]),style:lt({width:l(t).dropdownWidth,maxHeight:l(t).maxDropdownHeight})},[l(t).showClearSelectionButton?(h(),S("div",jt,[k(a,{label:l(t).clearSelectionLabel??"Clear selection",icon:l(V).CLOSE_CIRCLE_OUTLINE,variant:"DEFAULT",theme:"SECONDARY",small:"",disabled:l(m).length===0,onClick:A},null,8,["label","icon","disabled"])])):K("",!0),l(L)===l(M).LOADING?(h(),S("div",Bt,[k(ut,{name:l(V).LOADING,size:1.5,animation:"spin"},null,8,["name"]),u[0]||(u[0]=Pe("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):l(L)===l(M).NO_OPTIONS?(h(),S("div",Wt,[p.empty?q(n.$slots,"empty",{key:0},void 0,!0):(h(),S("div",$t," No results found "))])):(h(),G(ot,He({key:3,ref_key:"listRef",ref:O},l(t).listOptions,{class:["av-autocomplete-dropdown__options",l(t).scrollbarClass]}),{default:D(()=>[(h(!0),S(oe,null,Ue(l(_),d=>(h(),S(oe,{key:l(c)(d)},[p.item?q(n.$slots,"item",{key:0,option:d,isSelected:w(d),toggle:()=>T(d)},void 0,!0):(h(),G(ze,{key:1,title:l(b)(d),icon:w(d)?l(V).CHECK:void 0,selected:w(d),disabled:d.disabled,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>T(d)},{default:D(()=>[d.description?(h(),S("span",Ft,st(d.description),1)):K("",!0)]),_:2},1032,["title","icon","selected","disabled","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):K("",!0)}}}),zt=ee(Xe,[["__scopeId","data-v-a17f1e99"]]);Xe.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"},{name:"clearSelection"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Pt={class:"av-autocomplete-input"},Ze=X({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:o,emit:r}){const g=r,p=Z(),{selectedItems:m,searchQuery:f,isOpen:s,props:t,inputId:c,handleBlur:b,getDisplayLabel:y}=re(),O=C(),_=N(()=>{if(!t.multiSelect&&m.value.length>0)return y(m.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return f.value;if(m.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:m.value.map(y).join(", ")}return f.value}),L=N(()=>{var i;return((i=t.inputOptions)==null?void 0:i.placeholder)||"Search..."}),w=Ye(i=>{f.value=i},t.debounceDelay);function T(i){w(String(i||""))}function A(){s.value=!0}function v(){f.value="",w(f.value),g("clear")}return ae(()=>{w.cancel()}),o({inputRef:O,searchQuery:N(()=>f.value)}),(i,n)=>(h(),S("div",Pt,[k(pt,He({id:l(c),ref_key:"inputRef",ref:O,"model-value":l(_),placeholder:l(L)},l(t).inputOptions,{"onUpdate:modelValue":T,onFocus:A,onBlur:l(b),onClick:A}),Q({_:2},[p.requiredTip?{name:"requiredTip",fn:D(()=>[(h(),G(Ge(p.requiredTip)))]),key:"0"}:void 0,l(m).length>0?{name:"suffix",fn:D(()=>[k(le,{label:l(t).clearLabel??"Clear search",icon:l(V).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",small:"",onClick:v},null,8,["label","icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),Ht=ee(Ze,[["__scopeId","data-v-8aaa33ba"]]);Ze.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Ut={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},et=X({__name:"AvAutocompleteSelectedTags",setup(e){const o=Z(),{selectedItems:r,props:g,getOptionId:p,getDisplayLabel:m}=re();function f(s){const t=r.value,c=p(s);r.value=t.filter(b=>p(b)!==c)}return(s,t)=>l(g).multiSelect&&l(r).length>0&&l(g).showSelectedSection?(h(),S("div",Ut,[(h(!0),S(oe,null,Ue(l(r),c=>(h(),S("div",{key:l(p)(c),class:"av-autocomplete-selected-tags__item"},[o.selectedItem?q(s.$slots,"selectedItem",{key:0,option:c,remove:()=>f(c)},void 0,!0):(h(),G(le,{key:1,label:l(m)(c),icon:l(V).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>f(c)},null,8,["label","icon","onClick"]))]))),128))])):K("",!0)}}),Gt=ee(et,[["__scopeId","data-v-19df692b"]]);et.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Jt={class:"av-autocomplete av-col av-gap-xxs"},tt=X({__name:"AvAutocomplete",props:ce({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"},clearLabel:{default:"Clear search"},showClearSelectionButton:{type:Boolean,default:!1},clearSelectionLabel:{default:"Clear selection"}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:ce(["loadMore","clear","clearSelection"],["update:modelValue","update:search"]),setup(e,{emit:o}){const r=e,g=o,p=Z(),m=ie(e,"modelValue"),f=ie(e,"search"),s=C(!1),t=C(),c=C(),b=C(),y=N(()=>r.id||`av-autocomplete-${crypto.randomUUID()}`);function O(v){f.value=v}function _(v){var i,n;(n=(i=b.value)==null?void 0:i.dropdownRef)!=null&&n.contains(v.relatedTarget)||setTimeout(()=>{s.value=!1},r.blurCloseDelay)}function L(v){return r.getOptionKey?r.getOptionKey(v):v.value}function w(v){return r.getOptionLabel?r.getOptionLabel(v):v.label}ct(Je,{selectedItems:m,searchQuery:f,isOpen:s,props:r,inputId:y,handleBlur:_,getOptionId:L,getDisplayLabel:w});function A(v){var u,a,d,I,R;const i=v.target,n=(u=c.value)==null?void 0:u.inputRef;!((a=n==null?void 0:n.contains)!=null&&a.call(n,i))&&!((d=t.value)!=null&&d.contains(i))&&!((R=(I=b.value)==null?void 0:I.dropdownRef)!=null&&R.contains(i))&&(s.value=!1)}return it(()=>{document.addEventListener("click",A)}),ae(()=>{document.removeEventListener("click",A)}),(v,i)=>(h(),S("div",Jt,[Pe("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[k(Ht,{ref_key:"inputRef",ref:c,onSearch:O,onClear:i[0]||(i[0]=n=>g("clear"))},Q({_:2},[p.requiredTip?{name:"requiredTip",fn:D(()=>[(h(),G(Ge(p.requiredTip)))]),key:"0"}:void 0]),1536),k(zt,{ref_key:"dropdownRef",ref:b,"show-clear-selection-button":e.showClearSelectionButton,onClearSelection:i[1]||(i[1]=n=>g("clearSelection")),onLoadMore:i[2]||(i[2]=n=>g("loadMore"))},Q({_:2},[p.item?{name:"item",fn:D(({option:n,isSelected:u,toggle:a})=>[q(v.$slots,"item",{option:n,isSelected:u,toggle:a},void 0,!0)]),key:"0"}:void 0,p.empty?{name:"empty",fn:D(()=>[q(v.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1032,["show-clear-selection-button"])],512),k(Gt,null,Q({_:2},[p.selectedItem?{name:"selectedItem",fn:D(({option:n,remove:u})=>[q(v.$slots,"selectedItem",{option:n,remove:u},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),se=ee(tt,[["__scopeId","data-v-d8eda11b"]]);tt.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},x=e=>({components:{AvAutocomplete:se},setup(){const o=C([]);return{args:e,modelValue:o,MDI_ICONS:V}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),j=x.bind({});j.args={};const B=x.bind({});B.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const W=x.bind({});W.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const $=x.bind({});$.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const F=x.bind({});F.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const z=x.bind({});z.args={multiSelect:!0,showSelectedSection:!0,showClearSelectionButton:!0,inputOptions:{label:"Multi-select with clear button",placeholder:"Search and select multiple options..."}};const P=x.bind({});P.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,o)=>({label:`Option ${o+1}`,value:`${o+1}`}))};const H=x.bind({});H.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const U=x.bind({});U.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const J={render(){return{components:{AvAutocomplete:se,AvListItem:ze},setup(){return{modelValue:C([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:V}},template:`
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
      `}}};var me,fe,ve;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(ve=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ge,he,be;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(be=(he=B.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,Se,Ae;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(Ae=(Se=W.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Ie,Oe,we;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(we=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:we.source}}};var _e,Ce,xe;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(xe=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Le,Te,De;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(De=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var ke,Ve,Me;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(Me=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var Ne,qe,Re;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(Re=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:Re.source}}};var Ee,je,Be;U.parameters={...U.parameters,docs:{...(Ee=U.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
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
  template: \`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />\`
})`,...(Be=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var We,$e,Fe;J.parameters={...J.parameters,docs:{...(We=J.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Fe=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Fe.source}}};const uo=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithClearSelectionButton","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{H as CustomDropdownSize,j as Default,F as Loading,B as MultiSelect,W as MultiSelectWithoutSelectionInInput,z as WithClearSelectionButton,$ as WithCustomInput,J as WithCustomItemSlotExample,U as WithDescriptionAndDisabled,P as WithLoadMore,uo as __namedExportsOrder,co as default};
