import{A as Xe,a as Ee}from"./AvList-B-6ypRPY.js";import{D as Ze,d as Q,V as Y,r as w,c as V,w as et,a as ne,e as A,j as ee,u as r,Q as tt,n as ot,i as U,f as M,l as We,p as N,k as D,m as $e,g,R as te,S as Be,O as nt,a6 as J,N as ze,q as re,s as se,o as at,L as lt}from"./iframe-DDwuU5RR.js";import{b as rt}from"./index-2pBvY-Tl.js";import{A as st}from"./AvIcon-FTn1hyAS.js";import{M as j}from"./icons-YGS6wEJ5.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Fe}from"./AvButton-D31OP-zG.js";import{A as it}from"./AvInput-7CApMGnt.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvMessage-gcWTkuPm.js";import"./AvIconText-Rplyqaa2.js";var k=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(k||{});const Pe=Symbol("AvAutocompleteContext");function ae(){const e=Ze(Pe);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var ct=typeof global=="object"&&global&&global.Object===Object&&global,dt=typeof self=="object"&&self&&self.Object===Object&&self,He=ct||dt||Function("return this")(),K=He.Symbol,Ue=Object.prototype,ut=Ue.hasOwnProperty,pt=Ue.toString,R=K?K.toStringTag:void 0;function mt(e){var n=ut.call(e,R),s=e[R];try{e[R]=void 0;var v=!0}catch{}var u=pt.call(e);return v&&(n?e[R]=s:delete e[R]),u}var ft=Object.prototype,vt=ft.toString;function gt(e){return vt.call(e)}var ht="[object Null]",bt="[object Undefined]",ie=K?K.toStringTag:void 0;function yt(e){return e==null?e===void 0?bt:ht:ie&&ie in Object(e)?mt(e):gt(e)}function St(e){return e!=null&&typeof e=="object"}var At="[object Symbol]";function It(e){return typeof e=="symbol"||St(e)&&yt(e)==At}var Ot=/\s/;function _t(e){for(var n=e.length;n--&&Ot.test(e.charAt(n)););return n}var wt=/^\s+/;function xt(e){return e&&e.slice(0,_t(e)+1).replace(wt,"")}function oe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var ce=NaN,Ct=/^[-+]0x[0-9a-f]+$/i,Tt=/^0b[01]+$/i,Dt=/^0o[0-7]+$/i,Lt=parseInt;function de(e){if(typeof e=="number")return e;if(It(e))return ce;if(oe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=oe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=xt(e);var s=Tt.test(e);return s||Dt.test(e)?Lt(e.slice(2),s?2:8):Ct.test(e)?ce:+e}var Z=function(){return He.Date.now()},kt="Expected a function",Vt=Math.max,Mt=Math.min;function Ge(e,n,s){var v,u,m,f,i,t,d=0,b=!1,y=!1,I=!0;if(typeof e!="function")throw new TypeError(kt);n=de(n)||0,oe(s)&&(b=!!s.leading,y="maxWait"in s,m=y?Vt(de(s.maxWait)||0,n):m,I="trailing"in s?!!s.trailing:I);function _(c){var h=v,T=u;return v=u=void 0,d=c,f=e.apply(T,h),f}function x(c){return d=c,i=setTimeout(S,n),b?_(c):f}function O(c){var h=c-t,T=c-d,q=n-h;return y?Mt(q,m-T):q}function C(c){var h=c-t,T=c-d;return t===void 0||h>=n||h<0||y&&T>=m}function S(){var c=Z();if(C(c))return p(c);i=setTimeout(S,O(c))}function p(c){return i=void 0,I&&v?_(c):(v=u=void 0,f)}function o(){i!==void 0&&clearTimeout(i),d=0,v=t=u=i=void 0}function a(){return i===void 0?f:p(Z())}function l(){var c=Z(),h=C(c);if(v=arguments,u=this,t=c,h){if(i===void 0)return x(t);if(y)return clearTimeout(i),i=setTimeout(S,n),_(t)}return i===void 0&&(i=setTimeout(S,n)),f}return l.cancel=o,l.flush=a,l}const Nt={key:0,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},jt={key:1,class:"av-autocomplete-dropdown__empty av-p-md"},qt={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Rt={key:0,class:"caption-light"},Je=Q({__name:"AvAutocompleteDropdown",emits:["loadMore"],setup(e,{expose:n,emit:s}){const v=s,u=Y(),{selectedItems:m,searchQuery:f,isOpen:i,props:t,getOptionId:d,getDisplayLabel:b}=ae(),y=w(),I=w(),_=V(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const o=f.value.toLowerCase().trim();if(!o){const l=t.options;return t.maxResults?l.slice(0,t.maxResults):l}let a;return t.filterOptions?a=t.filterOptions(t.options,o):a=t.options.filter(l=>b(l).toLowerCase().includes(o)),t.maxResults?a.slice(0,t.maxResults):a}),x=V(()=>t.loading?k.LOADING:i.value&&t.options&&t.options.length>0&&_.value.length>0?k.HAS_OPTIONS:k.NO_OPTIONS);function O(o){return m.value.some(a=>d(a)===d(o))}function C(o){if(o.disabled)return;if(!t.multiSelect){m.value=[o],i.value=!1,f.value="";return}const a=m.value,l=d(o);a.some(h=>d(h)===l)?m.value=a.filter(h=>d(h)!==l):m.value=[...a,o]}const{arrivedState:S}=rt(I,{throttle:100}),p=Ge(()=>{v("loadMore")},t.loadMoreThrottleDelay);return et(()=>S.bottom,o=>{t.enableLoadMore&&o&&i.value&&p()}),ne(()=>{p.cancel()}),n({dropdownRef:y}),(o,a)=>r(i)?(g(),A("div",{key:0,ref_key:"dropdownRef",ref:y,class:ot(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",r(t).dropdownClass]),style:tt({width:r(t).dropdownWidth,maxHeight:r(t).maxDropdownHeight})},[r(x)===r(k).LOADING?(g(),A("div",Nt,[M(st,{name:r(j).LOADING,size:1.5,animation:"spin"},null,8,["name"]),a[0]||(a[0]=We("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):r(x)===r(k).NO_OPTIONS?(g(),A("div",jt,[u.empty?N(o.$slots,"empty",{key:0},void 0,!0):(g(),A("div",qt," No results found "))])):(g(),U(Xe,$e({key:2,ref_key:"listRef",ref:I},r(t).listOptions,{class:["av-autocomplete-dropdown__options",r(t).scrollbarClass]}),{default:D(()=>[(g(!0),A(te,null,Be(r(_),l=>(g(),A(te,{key:r(d)(l)},[u.item?N(o.$slots,"item",{key:0,option:l,isSelected:O(l),toggle:()=>C(l)},void 0,!0):(g(),U(Ee,{key:1,title:r(b)(l),icon:O(l)?r(j).CHECK:void 0,selected:O(l),disabled:l.disabled,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>C(l)},{default:D(()=>[l.description?(g(),A("span",Rt,nt(l.description),1)):ee("",!0)]),_:2},1032,["title","icon","selected","disabled","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):ee("",!0)}}),Et=X(Je,[["__scopeId","data-v-4fbff47b"]]);Je.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Wt={class:"av-autocomplete-input"},Ke=Q({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:n,emit:s}){const v=s,u=Y(),{selectedItems:m,searchQuery:f,isOpen:i,props:t,inputId:d,handleBlur:b,getDisplayLabel:y}=ae(),I=w(),_=V(()=>{if(!t.multiSelect&&m.value.length>0)return y(m.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return f.value;if(m.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:m.value.map(y).join(", ")}return f.value}),x=V(()=>{var o;return((o=t.inputOptions)==null?void 0:o.placeholder)||"Search..."}),O=Ge(o=>{f.value=o},t.debounceDelay);function C(o){O(String(o||""))}function S(){i.value=!0}function p(){m.value=[],f.value="",O(f.value),v("clear")}return ne(()=>{O.cancel()}),n({inputRef:I,searchQuery:V(()=>f.value)}),(o,a)=>(g(),A("div",Wt,[M(it,$e({id:r(d),ref_key:"inputRef",ref:I,"model-value":r(_),placeholder:r(x)},r(t).inputOptions,{"onUpdate:modelValue":C,onFocus:S,onBlur:r(b),onClick:S}),J({_:2},[u.requiredTip?{name:"requiredTip",fn:D(()=>[(g(),U(ze(u.requiredTip)))]),key:"0"}:void 0,r(m).length>0?{name:"suffix",fn:D(()=>[M(Fe,{label:"Clear selected items",icon:r(j).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",small:"",onClick:p},null,8,["icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),$t=X(Ke,[["__scopeId","data-v-4c05ac68"]]);Ke.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Bt={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},Qe=Q({__name:"AvAutocompleteSelectedTags",setup(e){const n=Y(),{selectedItems:s,props:v,getOptionId:u,getDisplayLabel:m}=ae();function f(i){const t=s.value,d=u(i);s.value=t.filter(b=>u(b)!==d)}return(i,t)=>r(v).multiSelect&&r(s).length>0&&r(v).showSelectedSection?(g(),A("div",Bt,[(g(!0),A(te,null,Be(r(s),d=>(g(),A("div",{key:r(u)(d),class:"av-autocomplete-selected-tags__item"},[n.selectedItem?N(i.$slots,"selectedItem",{key:0,option:d,remove:()=>f(d)},void 0,!0):(g(),U(Fe,{key:1,label:r(m)(d),icon:r(j).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>f(d)},null,8,["label","icon","onClick"]))]))),128))])):ee("",!0)}}),zt=X(Qe,[["__scopeId","data-v-19df692b"]]);Qe.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Ft={class:"av-autocomplete av-col av-gap-xxs"},Ye=Q({__name:"AvAutocomplete",props:re({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:re(["loadMore","clear"],["update:modelValue","update:search"]),setup(e,{emit:n}){const s=e,v=n,u=Y(),m=se(e,"modelValue"),f=se(e,"search"),i=w(!1),t=w(),d=w(),b=w(),y=V(()=>s.id||`av-autocomplete-${crypto.randomUUID()}`);function I(p){f.value=p}function _(p){var o,a;(a=(o=b.value)==null?void 0:o.dropdownRef)!=null&&a.contains(p.relatedTarget)||setTimeout(()=>{i.value=!1},s.blurCloseDelay)}function x(p){return s.getOptionKey?s.getOptionKey(p):p.value}function O(p){return s.getOptionLabel?s.getOptionLabel(p):p.label}lt(Pe,{selectedItems:m,searchQuery:f,isOpen:i,props:s,inputId:y,handleBlur:_,getOptionId:x,getDisplayLabel:O});function S(p){var l,c,h,T,q;const o=p.target,a=(l=d.value)==null?void 0:l.inputRef;!((c=a==null?void 0:a.contains)!=null&&c.call(a,o))&&!((h=t.value)!=null&&h.contains(o))&&!((q=(T=b.value)==null?void 0:T.dropdownRef)!=null&&q.contains(o))&&(i.value=!1)}return at(()=>{document.addEventListener("click",S)}),ne(()=>{document.removeEventListener("click",S)}),(p,o)=>(g(),A("div",Ft,[We("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[M($t,{ref_key:"inputRef",ref:d,onSearch:I,onClear:o[0]||(o[0]=a=>v("clear"))},J({_:2},[u.requiredTip?{name:"requiredTip",fn:D(()=>[(g(),U(ze(u.requiredTip)))]),key:"0"}:void 0]),1536),M(Et,{ref_key:"dropdownRef",ref:b,onLoadMore:o[1]||(o[1]=a=>v("loadMore"))},J({_:2},[u.item?{name:"item",fn:D(({option:a,isSelected:l,toggle:c})=>[N(p.$slots,"item",{option:a,isSelected:l,toggle:c},void 0,!0)]),key:"0"}:void 0,u.empty?{name:"empty",fn:D(()=>[N(p.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1536)],512),M(zt,null,J({_:2},[u.selectedItem?{name:"selectedItem",fn:D(({option:a,remove:l})=>[N(p.$slots,"selectedItem",{option:a,remove:l},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),le=X(Ye,[["__scopeId","data-v-8264204e"]]);Ye.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"displaySelectionInInput",defaultValue:{func:!1,value:"true"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}},{name:"selectedItemsCountLabel",defaultValue:{func:!1,value:"'element(s) selected'"}}],events:[{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const no={title:"Components/Interaction/Selects/AvAutocomplete",component:le,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},L=e=>({components:{AvAutocomplete:le},setup(){const n=w([]);return{args:e,modelValue:n,MDI_ICONS:j}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),E=L.bind({});E.args={};const W=L.bind({});W.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const $=L.bind({});$.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const B=L.bind({});B.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const z=L.bind({});z.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const F=L.bind({});F.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,n)=>({label:`Option ${n+1}`,value:`${n+1}`}))};const P=L.bind({});P.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const H=L.bind({});H.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const G={render(){return{components:{AvAutocomplete:le,AvListItem:Ee},setup(){return{modelValue:w([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:j}},template:`
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
      `}}};var ue,pe,me;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(me=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ve,ge;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,be,ye;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
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
})`,...(ye=(be=$.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,Ae,Ie;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var Oe,_e,we;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(we=(_e=z.parameters)==null?void 0:_e.docs)==null?void 0:we.source}}};var xe,Ce,Te;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
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
})`,...(Te=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var De,Le,ke;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`args => ({
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
})`,...(ke=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Ve,Me,Ne;H.parameters={...H.parameters,docs:{...(Ve=H.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
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
})`,...(Ne=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var je,qe,Re;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Re=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:Re.source}}};const ao=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{P as CustomDropdownSize,E as Default,z as Loading,W as MultiSelect,$ as MultiSelectWithoutSelectionInInput,B as WithCustomInput,G as WithCustomItemSlotExample,H as WithDescriptionAndDisabled,F as WithLoadMore,ao as __namedExportsOrder,no as default};
