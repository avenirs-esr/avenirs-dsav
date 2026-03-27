import{A as Ge,a as Me}from"./AvList-CNmvnGaa.js";import{D as Je,d as K,V as Q,r as w,c as V,w as Ke,a as te,e as A,j as oe,u as l,Q as Qe,n as Ye,i as H,f as M,l as Ne,p as N,k as D,m as je,g,R as Z,S as qe,a5 as G,N as Re,q as le,s as Xe,o as Ze,L as et}from"./iframe-DJoRRokI.js";import{b as tt}from"./index-Ccvp8-8_.js";import{A as ot}from"./AvIcon-ChtcmsEF.js";import{M as j}from"./icons-8RiK4kYW.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Ee}from"./AvButton-CXZAjeCU.js";import{A as nt}from"./AvInput-FxGG1EzN.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvMessage-BIWSBMyf.js";import"./AvIconText-Bf6yk654.js";var k=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(k||{});const $e=Symbol("AvAutocompleteContext");function ne(){const e=Je($e);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var at=typeof global=="object"&&global&&global.Object===Object&&global,lt=typeof self=="object"&&self&&self.Object===Object&&self,Be=at||lt||Function("return this")(),J=Be.Symbol,We=Object.prototype,rt=We.hasOwnProperty,st=We.toString,R=J?J.toStringTag:void 0;function it(e){var n=rt.call(e,R),r=e[R];try{e[R]=void 0;var v=!0}catch{}var m=st.call(e);return v&&(n?e[R]=r:delete e[R]),m}var ct=Object.prototype,dt=ct.toString;function ut(e){return dt.call(e)}var pt="[object Null]",mt="[object Undefined]",re=J?J.toStringTag:void 0;function ft(e){return e==null?e===void 0?mt:pt:re&&re in Object(e)?it(e):ut(e)}function vt(e){return e!=null&&typeof e=="object"}var gt="[object Symbol]";function ht(e){return typeof e=="symbol"||vt(e)&&ft(e)==gt}var bt=/\s/;function yt(e){for(var n=e.length;n--&&bt.test(e.charAt(n)););return n}var St=/^\s+/;function At(e){return e&&e.slice(0,yt(e)+1).replace(St,"")}function ee(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var se=NaN,It=/^[-+]0x[0-9a-f]+$/i,_t=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,wt=parseInt;function ie(e){if(typeof e=="number")return e;if(ht(e))return se;if(ee(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ee(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=At(e);var r=_t.test(e);return r||Ot.test(e)?wt(e.slice(2),r?2:8):It.test(e)?se:+e}var X=function(){return Be.Date.now()},xt="Expected a function",Ct=Math.max,Tt=Math.min;function ze(e,n,r){var v,m,f,u,i,t,d=0,b=!1,y=!1,I=!0;if(typeof e!="function")throw new TypeError(xt);n=ie(n)||0,ee(r)&&(b=!!r.leading,y="maxWait"in r,f=y?Ct(ie(r.maxWait)||0,n):f,I="trailing"in r?!!r.trailing:I);function _(c){var h=v,T=m;return v=m=void 0,d=c,u=e.apply(T,h),u}function x(c){return d=c,i=setTimeout(S,n),b?_(c):u}function O(c){var h=c-t,T=c-d,q=n-h;return y?Tt(q,f-T):q}function C(c){var h=c-t,T=c-d;return t===void 0||h>=n||h<0||y&&T>=f}function S(){var c=X();if(C(c))return p(c);i=setTimeout(S,O(c))}function p(c){return i=void 0,I&&v?_(c):(v=m=void 0,u)}function o(){i!==void 0&&clearTimeout(i),d=0,v=t=m=i=void 0}function a(){return i===void 0?u:p(X())}function s(){var c=X(),h=C(c);if(v=arguments,m=this,t=c,h){if(i===void 0)return x(t);if(y)return clearTimeout(i),i=setTimeout(S,n),_(t)}return i===void 0&&(i=setTimeout(S,n)),u}return s.cancel=o,s.flush=a,s}const Lt={key:0,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},kt={key:1,class:"av-autocomplete-dropdown__empty av-p-md"},Dt={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Fe=K({__name:"AvAutocompleteDropdown",emits:["loadMore"],setup(e,{expose:n,emit:r}){const v=r,m=Q(),{selectedItems:f,searchQuery:u,isOpen:i,props:t,getOptionId:d,getDisplayLabel:b}=ne(),y=w(),I=w(),_=V(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const o=u.value.toLowerCase().trim();if(!o){const s=t.options;return t.maxResults?s.slice(0,t.maxResults):s}let a;return t.filterOptions?a=t.filterOptions(t.options,o):a=t.options.filter(s=>b(s).toLowerCase().includes(o)),t.maxResults?a.slice(0,t.maxResults):a}),x=V(()=>t.loading?k.LOADING:i.value&&t.options&&t.options.length>0&&_.value.length>0?k.HAS_OPTIONS:k.NO_OPTIONS);function O(o){return f.value.some(a=>d(a)===d(o))}function C(o){if(!t.multiSelect){f.value=[o],i.value=!1,u.value="";return}const a=f.value,s=d(o);a.some(h=>d(h)===s)?f.value=a.filter(h=>d(h)!==s):f.value=[...a,o]}const{arrivedState:S}=tt(I,{throttle:100}),p=ze(()=>{v("loadMore")},t.loadMoreThrottleDelay);return Ke(()=>S.bottom,o=>{t.enableLoadMore&&o&&i.value&&p()}),te(()=>{p.cancel()}),n({dropdownRef:y}),(o,a)=>l(i)?(g(),A("div",{key:0,ref_key:"dropdownRef",ref:y,class:Ye(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",l(t).dropdownClass]),style:Qe({width:l(t).dropdownWidth,maxHeight:l(t).maxDropdownHeight})},[l(x)===l(k).LOADING?(g(),A("div",Lt,[M(ot,{name:l(j).LOADING,size:1.5,animation:"spin"},null,8,["name"]),a[0]||(a[0]=Ne("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):l(x)===l(k).NO_OPTIONS?(g(),A("div",kt,[m.empty?N(o.$slots,"empty",{key:0},void 0,!0):(g(),A("div",Dt," No results found "))])):(g(),H(Ge,je({key:2,ref_key:"listRef",ref:I},l(t).listOptions,{class:["av-autocomplete-dropdown__options",l(t).scrollbarClass]}),{default:D(()=>[(g(!0),A(Z,null,qe(l(_),s=>(g(),A(Z,{key:l(d)(s)},[m.item?N(o.$slots,"item",{key:0,option:s,isSelected:O(s),toggle:()=>C(s)},void 0,!0):(g(),H(Me,{key:1,title:l(b)(s),icon:O(s)?l(j).CHECK:void 0,selected:O(s),"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>C(s)},null,8,["title","icon","selected","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):oe("",!0)}}),Vt=Y(Fe,[["__scopeId","data-v-f8f9ad11"]]);Fe.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Mt={class:"av-autocomplete-input"},Nt={key:0,class:"av-autocomplete-input__suffix av-row av-align-center"},Pe=K({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:n,emit:r}){const v=r,m=Q(),{selectedItems:f,searchQuery:u,isOpen:i,props:t,inputId:d,handleBlur:b,getDisplayLabel:y}=ne(),I=w(),_=V(()=>{if(!t.multiSelect&&f.value.length>0)return y(f.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return u.value;if(f.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:f.value.map(y).join(", ")}return u.value}),x=V(()=>{var o;return((o=t.inputOptions)==null?void 0:o.placeholder)||"Search..."}),O=ze(o=>{u.value=o,v("search",o)},t.debounceDelay);function C(o){u.value=String(o||""),O(u.value)}function S(){i.value=!0}function p(){f.value=[],u.value="",v("clear")}return te(()=>{O.cancel()}),n({inputRef:I,searchQuery:V(()=>u.value)}),(o,a)=>(g(),A("div",Mt,[M(nt,je({id:l(d),ref_key:"inputRef",ref:I,"model-value":l(_),placeholder:l(x)},l(t).inputOptions,{"onUpdate:modelValue":C,onFocus:S,onBlur:l(b),onClick:S}),G({_:2},[m.requiredTip?{name:"requiredTip",fn:D(()=>[(g(),H(Re(m.requiredTip)))]),key:"0"}:void 0]),1040,["id","model-value","placeholder","onBlur"]),l(f).length>0?(g(),A("div",Nt,[M(Ee,{label:"Clear selected items",icon:l(j).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",onClick:p},null,8,["icon"])])):oe("",!0)]))}}),jt=Y(Pe,[["__scopeId","data-v-ef1de084"]]);Pe.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const qt={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},He=K({__name:"AvAutocompleteSelectedTags",setup(e){const n=Q(),{selectedItems:r,props:v,getOptionId:m,getDisplayLabel:f}=ne();function u(i){const t=r.value,d=m(i);r.value=t.filter(b=>m(b)!==d)}return(i,t)=>l(v).multiSelect&&l(r).length>0&&l(v).showSelectedSection?(g(),A("div",qt,[(g(!0),A(Z,null,qe(l(r),d=>(g(),A("div",{key:l(m)(d),class:"av-autocomplete-selected-tags__item"},[n.selectedItem?N(i.$slots,"selectedItem",{key:0,option:d,remove:()=>u(d)},void 0,!0):(g(),H(Ee,{key:1,label:l(f)(d),icon:l(j).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>u(d)},null,8,["label","icon","onClick"]))]))),128))])):oe("",!0)}}),Rt=Y(He,[["__scopeId","data-v-19df692b"]]);He.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Et={class:"av-autocomplete av-col av-gap-xxs"},Ue=K({__name:"AvAutocomplete",props:le({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{default:"av-autocomplete__scrollbar--default"},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:le(["search","loadMore","clear"],["update:modelValue"]),setup(e,{emit:n}){const r=e,v=n,m=Q(),f=Xe(e,"modelValue"),u=w(!1),i=w(""),t=w(),d=w(),b=w(),y=V(()=>r.id||`av-autocomplete-${crypto.randomUUID()}`);function I(p){i.value=p,v("search",p)}function _(p){var o,a;(a=(o=b.value)==null?void 0:o.dropdownRef)!=null&&a.contains(p.relatedTarget)||setTimeout(()=>{u.value=!1},r.blurCloseDelay)}function x(p){return r.getOptionKey?r.getOptionKey(p):p.value}function O(p){return r.getOptionLabel?r.getOptionLabel(p):p.label}et($e,{selectedItems:f,searchQuery:i,isOpen:u,props:r,inputId:y,handleBlur:_,getOptionId:x,getDisplayLabel:O});function S(p){var s,c,h,T,q;const o=p.target,a=(s=d.value)==null?void 0:s.inputRef;!((c=a==null?void 0:a.contains)!=null&&c.call(a,o))&&!((h=t.value)!=null&&h.contains(o))&&!((q=(T=b.value)==null?void 0:T.dropdownRef)!=null&&q.contains(o))&&(u.value=!1)}return Ze(()=>{document.addEventListener("click",S)}),te(()=>{document.removeEventListener("click",S)}),(p,o)=>(g(),A("div",Et,[Ne("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[M(jt,{ref_key:"inputRef",ref:d,onSearch:I,onClear:o[0]||(o[0]=a=>v("clear"))},G({_:2},[m.requiredTip?{name:"requiredTip",fn:D(()=>[(g(),H(Re(m.requiredTip)))]),key:"0"}:void 0]),1536),M(Vt,{ref_key:"dropdownRef",ref:b,onLoadMore:o[1]||(o[1]=a=>v("loadMore"))},G({_:2},[m.item?{name:"item",fn:D(({option:a,isSelected:s,toggle:c})=>[N(p.$slots,"item",{option:a,isSelected:s,toggle:c},void 0,!0)]),key:"0"}:void 0,m.empty?{name:"empty",fn:D(()=>[N(p.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1536)],512),M(Rt,null,G({_:2},[m.selectedItem?{name:"selectedItem",fn:D(({option:a,remove:s})=>[N(p.$slots,"selectedItem",{option:a,remove:s},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),ae=Y(Ue,[["__scopeId","data-v-4a146ea2"]]);Ue.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"scrollbarClass",defaultValue:{func:!1,value:"'av-autocomplete__scrollbar--default'"}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"displaySelectionInInput",defaultValue:{func:!1,value:"true"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}},{name:"selectedItemsCountLabel",defaultValue:{func:!1,value:"'element(s) selected'"}}],events:[{name:"search",type:{names:["string"]},description:"Emitted when user searches for options.",properties:[{type:{names:["mixed"]},description:"e emitted event name: search"},{type:{names:["mixed"]},name:"query",description:"Search query string entered by the user."}],tags:[{title:"param",type:{name:"mixed"},description:"e emitted event name: search"},{title:"param",type:{name:"mixed"},name:"query",description:"Search query string entered by the user."}]},{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const Xt={title:"Components/Interaction/Selects/AvAutocomplete",component:ae,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},L=e=>({components:{AvAutocomplete:ae},setup(){const n=w([]);return{args:e,modelValue:n,MDI_ICONS:j}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),E=L.bind({});E.args={};const $=L.bind({});$.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const B=L.bind({});B.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const W=L.bind({});W.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const z=L.bind({});z.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const F=L.bind({});F.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,n)=>({label:`Option ${n+1}`,value:`${n+1}`}))};const P=L.bind({});P.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const U={render(){return{components:{AvAutocomplete:ae,AvListItem:Me},setup(){return{modelValue:w([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:j}},template:`
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
      `}}};var ce,de,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,fe;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(fe=(me=$.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ve,ge,he;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,ye,Se;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(Se=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Ae,Ie,_e;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Oe,we,xe;F.parameters={...F.parameters,docs:{...(Oe=F.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(xe=(we=F.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Ce,Te,Le;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(Le=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var ke,De,Ve;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ve=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};const Zt=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithLoadMore","CustomDropdownSize","WithCustomItemSlotExample"];export{P as CustomDropdownSize,E as Default,z as Loading,$ as MultiSelect,B as MultiSelectWithoutSelectionInInput,W as WithCustomInput,U as WithCustomItemSlotExample,F as WithLoadMore,Zt as __namedExportsOrder,Xt as default};
