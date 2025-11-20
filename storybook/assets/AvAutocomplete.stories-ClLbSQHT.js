import{A as We,a as Ce}from"./AvListItem-BXfY74hi.js";import{i as He,j as J,O as K,r as w,c as D,w as Pe,q as ee,l as A,K as te,u as l,z as Ue,A as Ge,E as H,x as V,v as Le,k as N,G as L,H as De,m as g,F as X,B as Ve,a3 as U,J as Ne,R as ae,S as Je,o as Ke,p as Qe}from"./iframe-CBl62ORi.js";import{a as Ye}from"./index-D_EeYuF3.js";import{A as Xe}from"./AvIcon-Dti4b3Ab.js";import{M}from"./icons-DGI95zqn.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Me}from"./AvButton-5Dy39sUi.js";import{A as Ze}from"./AvInput-CvTz0rDW.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";import"./AvMessage-DMGpj8v7.js";import"./AvIconText-7j7hEMTz.js";var C=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(C||{});const je=Symbol("AvAutocompleteContext");function oe(){const e=He(je);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var et=typeof global=="object"&&global&&global.Object===Object&&global,tt=typeof self=="object"&&self&&self.Object===Object&&self,Re=et||tt||Function("return this")(),G=Re.Symbol,qe=Object.prototype,ot=qe.hasOwnProperty,nt=qe.toString,q=G?G.toStringTag:void 0;function at(e){var n=ot.call(e,q),r=e[q];try{e[q]=void 0;var v=!0}catch{}var m=nt.call(e);return v&&(n?e[q]=r:delete e[q]),m}var lt=Object.prototype,rt=lt.toString;function st(e){return rt.call(e)}var it="[object Null]",ct="[object Undefined]",le=G?G.toStringTag:void 0;function dt(e){return e==null?e===void 0?ct:it:le&&le in Object(e)?at(e):st(e)}function ut(e){return e!=null&&typeof e=="object"}var mt="[object Symbol]";function pt(e){return typeof e=="symbol"||ut(e)&&dt(e)==mt}var ft=/\s/;function vt(e){for(var n=e.length;n--&&ft.test(e.charAt(n)););return n}var gt=/^\s+/;function ht(e){return e&&e.slice(0,vt(e)+1).replace(gt,"")}function Z(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var re=NaN,bt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,St=/^0o[0-7]+$/i,At=parseInt;function se(e){if(typeof e=="number")return e;if(pt(e))return re;if(Z(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Z(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=ht(e);var r=yt.test(e);return r||St.test(e)?At(e.slice(2),r?2:8):bt.test(e)?re:+e}var Y=function(){return Re.Date.now()},_t="Expected a function",Ot=Math.max,It=Math.min;function Ee(e,n,r){var v,m,p,f,i,t,d=0,b=!1,y=!1,_=!0;if(typeof e!="function")throw new TypeError(_t);n=se(n)||0,Z(r)&&(b=!!r.leading,y="maxWait"in r,p=y?Ot(se(r.maxWait)||0,n):p,_="trailing"in r?!!r.trailing:_);function O(c){var h=v,k=m;return v=m=void 0,d=c,f=e.apply(k,h),f}function x(c){return d=c,i=setTimeout(S,n),b?O(c):f}function I(c){var h=c-t,k=c-d,R=n-h;return y?It(R,p-k):R}function T(c){var h=c-t,k=c-d;return t===void 0||h>=n||h<0||y&&k>=p}function S(){var c=Y();if(T(c))return u(c);i=setTimeout(S,I(c))}function u(c){return i=void 0,_&&v?O(c):(v=m=void 0,f)}function o(){i!==void 0&&clearTimeout(i),d=0,v=t=m=i=void 0}function a(){return i===void 0?f:u(Y())}function s(){var c=Y(),h=T(c);if(v=arguments,m=this,t=c,h){if(i===void 0)return x(t);if(y)return clearTimeout(i),i=setTimeout(S,n),O(t)}return i===void 0&&(i=setTimeout(S,n)),f}return s.cancel=o,s.flush=a,s}const wt={key:0,class:"av-autocomplete-dropdown__loading"},xt={key:1,class:"av-autocomplete-dropdown__empty"},Tt={key:1,class:"av-autocomplete-dropdown__empty-text"},$e=J({__name:"AvAutocompleteDropdown",emits:["loadMore"],setup(e,{expose:n,emit:r}){const v=r,m=K(),{selectedItems:p,searchQuery:f,isOpen:i,props:t,getOptionId:d,getDisplayLabel:b}=oe(),y=w(),_=w(),O=D(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const o=f.value.toLowerCase().trim();if(!o){const s=t.options;return t.maxResults?s.slice(0,t.maxResults):s}let a;return t.filterOptions?a=t.filterOptions(t.options,o):a=t.options.filter(s=>b(s).toLowerCase().includes(o)),t.maxResults?a.slice(0,t.maxResults):a}),x=D(()=>t.loading?C.LOADING:i.value&&t.options&&t.options.length>0&&O.value.length>0?C.HAS_OPTIONS:C.NO_OPTIONS);function I(o){return p.value.some(a=>d(a)===d(o))}function T(o){if(!t.multiSelect){p.value=[o],i.value=!1,f.value="";return}const a=p.value,s=d(o);a.some(h=>d(h)===s)?p.value=a.filter(h=>d(h)!==s):p.value=[...a,o]}const{arrivedState:S}=Ye(_,{throttle:100}),u=Ee(()=>{v("loadMore")},t.loadMoreThrottleDelay);return Pe(()=>S.bottom,o=>{t.enableLoadMore&&o&&i.value&&u()}),ee(()=>{u.cancel()}),n({dropdownRef:y}),(o,a)=>l(i)?(g(),A("div",{key:0,ref_key:"dropdownRef",ref:y,class:Ge(["av-autocomplete-dropdown",l(t).dropdownClass]),style:Ue({width:l(t).dropdownWidth,maxHeight:l(t).maxDropdownHeight})},[l(x)===l(C).LOADING?(g(),A("div",wt,[V(Xe,{name:l(M).LOADING,size:1.5,class:"av-autocomplete-dropdown__spinner"},null,8,["name"]),a[0]||(a[0]=Le("span",{class:"av-autocomplete-dropdown__loading-text"},"Loading...",-1))])):l(x)===l(C).NO_OPTIONS?(g(),A("div",xt,[m.empty?N(o.$slots,"empty",{key:0},void 0,!0):(g(),A("div",Tt," No results found "))])):(g(),H(We,De({key:2,ref_key:"listRef",ref:_},l(t).listOptions,{class:["av-autocomplete-dropdown__options",l(t).scrollbarClass]}),{default:L(()=>[(g(!0),A(X,null,Ve(l(O),s=>(g(),A(X,{key:l(d)(s)},[m.item?N(o.$slots,"item",{key:0,option:s,isSelected:I(s),toggle:()=>T(s)},void 0,!0):(g(),H(Ce,{key:1,title:l(b)(s),icon:I(s)?l(M).CHECK:void 0,selected:I(s),clickable:"","on-click":()=>T(s),"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)"},null,8,["title","icon","selected","on-click"]))],64))),128))]),_:3},16,["class"]))],6)):te("",!0)}}),kt=Q($e,[["__scopeId","data-v-32439dba"]]);$e.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Ct={class:"av-autocomplete-input"},Lt={key:0,class:"av-autocomplete-input__suffix"},Be=J({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:n,emit:r}){const v=r,m=K(),{selectedItems:p,searchQuery:f,isOpen:i,props:t,inputId:d,handleBlur:b,getDisplayLabel:y}=oe(),_=w(),O=D(()=>!t.multiSelect&&p.value.length>0?y(p.value[0]):t.multiSelect&&p.value.length>0?t.showSelectedSection?`${p.value.length} element(s) selected`:p.value.map(y).join(", "):f.value),x=D(()=>{var o;return((o=t.inputOptions)==null?void 0:o.placeholder)||"Search..."}),I=Ee(o=>{f.value=o,v("search",o)},t.debounceDelay);function T(o){f.value=String(o||""),I(f.value)}function S(){i.value=!0}function u(){p.value=[],f.value="",v("clear")}return ee(()=>{I.cancel()}),n({inputRef:_,searchQuery:D(()=>f.value)}),(o,a)=>(g(),A("div",Ct,[V(Ze,De({id:l(d),ref_key:"inputRef",ref:_,"model-value":l(O),placeholder:l(x)},l(t).inputOptions,{"onUpdate:modelValue":T,onFocus:S,onBlur:l(b),onClick:S}),U({_:2},[m.requiredTip?{name:"requiredTip",fn:L(()=>[(g(),H(Ne(m.requiredTip)))]),key:"0"}:void 0]),1040,["id","model-value","placeholder","onBlur"]),l(p).length>0?(g(),A("div",Lt,[V(Me,{label:"Clear selected items",icon:l(M).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",onClick:u},null,8,["icon"])])):te("",!0)]))}}),Dt=Q(Be,[["__scopeId","data-v-318a09bc"]]);Be.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Vt={key:0,class:"av-autocomplete-selected-tags"},ze=J({__name:"AvAutocompleteSelectedTags",setup(e){const n=K(),{selectedItems:r,props:v,getOptionId:m,getDisplayLabel:p}=oe();function f(i){const t=r.value,d=m(i);r.value=t.filter(b=>m(b)!==d)}return(i,t)=>l(v).multiSelect&&l(r).length>0&&l(v).showSelectedSection?(g(),A("div",Vt,[(g(!0),A(X,null,Ve(l(r),d=>(g(),A("div",{key:l(m)(d),class:"av-autocomplete-selected-tags__item"},[n.selectedItem?N(i.$slots,"selectedItem",{key:0,option:d,remove:()=>f(d)},void 0,!0):(g(),H(Me,{key:1,label:l(p)(d),icon:l(M).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>f(d)},null,8,["label","icon","onClick"]))]))),128))])):te("",!0)}}),Nt=Q(ze,[["__scopeId","data-v-c42c1ff5"]]);ze.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Mt={class:"av-autocomplete"},Fe=J({__name:"AvAutocomplete",props:ae({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{default:"av-autocomplete__scrollbar--default"},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:ae(["search","loadMore","clear"],["update:modelValue"]),setup(e,{emit:n}){const r=e,v=n,m=K(),p=Je(e,"modelValue"),f=w(!1),i=w(""),t=w(),d=w(),b=w(),y=D(()=>r.id||`av-autocomplete-${crypto.randomUUID()}`);function _(u){i.value=u,v("search",u)}function O(u){var o,a;(a=(o=b.value)==null?void 0:o.dropdownRef)!=null&&a.contains(u.relatedTarget)||setTimeout(()=>{f.value=!1},r.blurCloseDelay)}function x(u){return r.getOptionKey?r.getOptionKey(u):u.value}function I(u){return r.getOptionLabel?r.getOptionLabel(u):u.label}Qe(je,{selectedItems:p,searchQuery:i,isOpen:f,props:r,inputId:y,handleBlur:O,getOptionId:x,getDisplayLabel:I});function S(u){var s,c,h,k,R;const o=u.target,a=(s=d.value)==null?void 0:s.inputRef;!((c=a==null?void 0:a.contains)!=null&&c.call(a,o))&&!((h=t.value)!=null&&h.contains(o))&&!((R=(k=b.value)==null?void 0:k.dropdownRef)!=null&&R.contains(o))&&(f.value=!1)}return Ke(()=>{document.addEventListener("click",S)}),ee(()=>{document.removeEventListener("click",S)}),(u,o)=>(g(),A("div",Mt,[Le("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[V(Dt,{ref_key:"inputRef",ref:d,onSearch:_,onClear:o[0]||(o[0]=a=>v("clear"))},U({_:2},[m.requiredTip?{name:"requiredTip",fn:L(()=>[(g(),H(Ne(m.requiredTip)))]),key:"0"}:void 0]),1536),V(kt,{ref_key:"dropdownRef",ref:b,onLoadMore:o[1]||(o[1]=a=>v("loadMore"))},U({_:2},[m.item?{name:"item",fn:L(({option:a,isSelected:s,toggle:c})=>[N(u.$slots,"item",{option:a,isSelected:s,toggle:c},void 0,!0)]),key:"0"}:void 0,m.empty?{name:"empty",fn:L(()=>[N(u.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1536)],512),V(Nt,null,U({_:2},[m.selectedItem?{name:"selectedItem",fn:L(({option:a,remove:s})=>[N(u.$slots,"selectedItem",{option:a,remove:s},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),ne=Q(Fe,[["__scopeId","data-v-a8c4de33"]]);Fe.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"scrollbarClass",defaultValue:{func:!1,value:"'av-autocomplete__scrollbar--default'"}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}}],events:[{name:"search",type:{names:["string"]},description:"Emitted when user searches for options.",properties:[{type:{names:["mixed"]},description:"e emitted event name: search"},{type:{names:["mixed"]},name:"query",description:"Search query string entered by the user."}],tags:[{title:"param",type:{name:"mixed"},description:"e emitted event name: search"},{title:"param",type:{name:"mixed"},name:"query",description:"Search query string entered by the user."}]},{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const Gt={title:"Components/Interaction/Selects/AvAutocomplete",component:ne,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},j=e=>({components:{AvAutocomplete:ne},setup(){const n=w([]);return{args:e,modelValue:n,MDI_ICONS:M}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),E=j.bind({});E.args={};const $=j.bind({});$.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const B=j.bind({});B.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const z=j.bind({});z.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const F=j.bind({});F.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,n)=>({label:`Option ${n+1}`,value:`${n+1}`}))};const W=j.bind({});W.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const P={render(){return{components:{AvAutocomplete:ne,AvListItem:Ce},setup(){return{modelValue:w([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:M}},template:`
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
              @click="toggle"
              clickable
              hover-background-color="var(--light-background-neutral)"
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
      `}}};var ie,ce,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(pe=(me=$.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,ve,ge;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,be,ye;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
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
})`,...(ye=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,Ae,_e;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:_e.source}}};var Oe,Ie,we;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(we=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var xe,Te,ke;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
              @click="toggle"
              clickable
              hover-background-color="var(--light-background-neutral)"
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
}`,...(ke=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};const Jt=["Default","MultiSelect","WithCustomInput","Loading","WithLoadMore","CustomDropdownSize","WithCustomItemSlotExample"];export{W as CustomDropdownSize,E as Default,z as Loading,$ as MultiSelect,B as WithCustomInput,P as WithCustomItemSlotExample,F as WithLoadMore,Jt as __namedExportsOrder,Gt as default};
