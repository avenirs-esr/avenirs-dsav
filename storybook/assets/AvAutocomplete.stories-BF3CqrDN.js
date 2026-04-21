import{A as Ye,a as Re}from"./AvList-CsJZ7x7i.js";import{D as Xe,d as Q,V as Y,r as w,c as V,w as Ze,a as ne,e as A,j as ee,u as r,Q as et,n as tt,i as U,f as M,l as Ee,p as N,k as D,m as We,g,R as te,S as $e,O as ot,a5 as J,N as Be,q as re,s as nt,o as at,L as lt}from"./iframe-Blwvday6.js";import{b as rt}from"./index-C8MOlECy.js";import{A as st}from"./AvIcon-BEWDYbKb.js";import{M as q}from"./icons-gIBop1dI.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as ze}from"./AvButton-vMA8zAS_.js";import{A as it}from"./AvInput-BTgr4AgY.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvMessage--9VJQOqz.js";import"./AvIconText-l54KhQ9W.js";var k=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(k||{});const Fe=Symbol("AvAutocompleteContext");function ae(){const e=Xe(Fe);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var ct=typeof global=="object"&&global&&global.Object===Object&&global,dt=typeof self=="object"&&self&&self.Object===Object&&self,Pe=ct||dt||Function("return this")(),K=Pe.Symbol,He=Object.prototype,ut=He.hasOwnProperty,pt=He.toString,R=K?K.toStringTag:void 0;function mt(e){var n=ut.call(e,R),s=e[R];try{e[R]=void 0;var v=!0}catch{}var m=pt.call(e);return v&&(n?e[R]=s:delete e[R]),m}var ft=Object.prototype,vt=ft.toString;function gt(e){return vt.call(e)}var ht="[object Null]",bt="[object Undefined]",se=K?K.toStringTag:void 0;function yt(e){return e==null?e===void 0?bt:ht:se&&se in Object(e)?mt(e):gt(e)}function St(e){return e!=null&&typeof e=="object"}var At="[object Symbol]";function It(e){return typeof e=="symbol"||St(e)&&yt(e)==At}var Ot=/\s/;function _t(e){for(var n=e.length;n--&&Ot.test(e.charAt(n)););return n}var wt=/^\s+/;function xt(e){return e&&e.slice(0,_t(e)+1).replace(wt,"")}function oe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var ie=NaN,Ct=/^[-+]0x[0-9a-f]+$/i,Tt=/^0b[01]+$/i,Dt=/^0o[0-7]+$/i,Lt=parseInt;function ce(e){if(typeof e=="number")return e;if(It(e))return ie;if(oe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=oe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=xt(e);var s=Tt.test(e);return s||Dt.test(e)?Lt(e.slice(2),s?2:8):Ct.test(e)?ie:+e}var Z=function(){return Pe.Date.now()},kt="Expected a function",Vt=Math.max,Mt=Math.min;function Ue(e,n,s){var v,m,f,d,i,t,u=0,b=!1,y=!1,I=!0;if(typeof e!="function")throw new TypeError(kt);n=ce(n)||0,oe(s)&&(b=!!s.leading,y="maxWait"in s,f=y?Vt(ce(s.maxWait)||0,n):f,I="trailing"in s?!!s.trailing:I);function _(c){var h=v,T=m;return v=m=void 0,u=c,d=e.apply(T,h),d}function x(c){return u=c,i=setTimeout(S,n),b?_(c):d}function O(c){var h=c-t,T=c-u,j=n-h;return y?Mt(j,f-T):j}function C(c){var h=c-t,T=c-u;return t===void 0||h>=n||h<0||y&&T>=f}function S(){var c=Z();if(C(c))return p(c);i=setTimeout(S,O(c))}function p(c){return i=void 0,I&&v?_(c):(v=m=void 0,d)}function o(){i!==void 0&&clearTimeout(i),u=0,v=t=m=i=void 0}function a(){return i===void 0?d:p(Z())}function l(){var c=Z(),h=C(c);if(v=arguments,m=this,t=c,h){if(i===void 0)return x(t);if(y)return clearTimeout(i),i=setTimeout(S,n),_(t)}return i===void 0&&(i=setTimeout(S,n)),d}return l.cancel=o,l.flush=a,l}const Nt={key:0,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},qt={key:1,class:"av-autocomplete-dropdown__empty av-p-md"},jt={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Rt={key:0,class:"caption-light"},Ge=Q({__name:"AvAutocompleteDropdown",emits:["loadMore"],setup(e,{expose:n,emit:s}){const v=s,m=Y(),{selectedItems:f,searchQuery:d,isOpen:i,props:t,getOptionId:u,getDisplayLabel:b}=ae(),y=w(),I=w(),_=V(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const o=d.value.toLowerCase().trim();if(!o){const l=t.options;return t.maxResults?l.slice(0,t.maxResults):l}let a;return t.filterOptions?a=t.filterOptions(t.options,o):a=t.options.filter(l=>b(l).toLowerCase().includes(o)),t.maxResults?a.slice(0,t.maxResults):a}),x=V(()=>t.loading?k.LOADING:i.value&&t.options&&t.options.length>0&&_.value.length>0?k.HAS_OPTIONS:k.NO_OPTIONS);function O(o){return f.value.some(a=>u(a)===u(o))}function C(o){if(o.disabled)return;if(!t.multiSelect){f.value=[o],i.value=!1,d.value="";return}const a=f.value,l=u(o);a.some(h=>u(h)===l)?f.value=a.filter(h=>u(h)!==l):f.value=[...a,o]}const{arrivedState:S}=rt(I,{throttle:100}),p=Ue(()=>{v("loadMore")},t.loadMoreThrottleDelay);return Ze(()=>S.bottom,o=>{t.enableLoadMore&&o&&i.value&&p()}),ne(()=>{p.cancel()}),n({dropdownRef:y}),(o,a)=>r(i)?(g(),A("div",{key:0,ref_key:"dropdownRef",ref:y,class:tt(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",r(t).dropdownClass]),style:et({width:r(t).dropdownWidth,maxHeight:r(t).maxDropdownHeight})},[r(x)===r(k).LOADING?(g(),A("div",Nt,[M(st,{name:r(q).LOADING,size:1.5,animation:"spin"},null,8,["name"]),a[0]||(a[0]=Ee("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):r(x)===r(k).NO_OPTIONS?(g(),A("div",qt,[m.empty?N(o.$slots,"empty",{key:0},void 0,!0):(g(),A("div",jt," No results found "))])):(g(),U(Ye,We({key:2,ref_key:"listRef",ref:I},r(t).listOptions,{class:["av-autocomplete-dropdown__options",r(t).scrollbarClass]}),{default:D(()=>[(g(!0),A(te,null,$e(r(_),l=>(g(),A(te,{key:r(u)(l)},[m.item?N(o.$slots,"item",{key:0,option:l,isSelected:O(l),toggle:()=>C(l)},void 0,!0):(g(),U(Re,{key:1,title:r(b)(l),icon:O(l)?r(q).CHECK:void 0,selected:O(l),disabled:l.disabled,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>C(l)},{default:D(()=>[l.description?(g(),A("span",Rt,ot(l.description),1)):ee("",!0)]),_:2},1032,["title","icon","selected","disabled","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):ee("",!0)}}),Et=X(Ge,[["__scopeId","data-v-4fbff47b"]]);Ge.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const Wt={class:"av-autocomplete-input"},Je=Q({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:n,emit:s}){const v=s,m=Y(),{selectedItems:f,searchQuery:d,isOpen:i,props:t,inputId:u,handleBlur:b,getDisplayLabel:y}=ae(),I=w(),_=V(()=>{if(!t.multiSelect&&f.value.length>0)return y(f.value[0]);if(t.multiSelect){if(!t.displaySelectionInInput)return d.value;if(f.value.length>0)return t.showSelectedSection?t.selectedItemsCountLabel:f.value.map(y).join(", ")}return d.value}),x=V(()=>{var o;return((o=t.inputOptions)==null?void 0:o.placeholder)||"Search..."}),O=Ue(o=>{d.value=o,v("search",o)},t.debounceDelay);function C(o){d.value=String(o||""),O(d.value)}function S(){i.value=!0}function p(){f.value=[],d.value="",O(d.value),v("clear")}return ne(()=>{O.cancel()}),n({inputRef:I,searchQuery:V(()=>d.value)}),(o,a)=>(g(),A("div",Wt,[M(it,We({id:r(u),ref_key:"inputRef",ref:I,"model-value":r(_),placeholder:r(x)},r(t).inputOptions,{"onUpdate:modelValue":C,onFocus:S,onBlur:r(b),onClick:S}),J({_:2},[m.requiredTip?{name:"requiredTip",fn:D(()=>[(g(),U(Be(m.requiredTip)))]),key:"0"}:void 0,r(f).length>0?{name:"suffix",fn:D(()=>[M(ze,{label:"Clear selected items",icon:r(q).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",small:"",onClick:p},null,8,["icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),$t=X(Je,[["__scopeId","data-v-36ac81e3"]]);Je.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Bt={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},Ke=Q({__name:"AvAutocompleteSelectedTags",setup(e){const n=Y(),{selectedItems:s,props:v,getOptionId:m,getDisplayLabel:f}=ae();function d(i){const t=s.value,u=m(i);s.value=t.filter(b=>m(b)!==u)}return(i,t)=>r(v).multiSelect&&r(s).length>0&&r(v).showSelectedSection?(g(),A("div",Bt,[(g(!0),A(te,null,$e(r(s),u=>(g(),A("div",{key:r(m)(u),class:"av-autocomplete-selected-tags__item"},[n.selectedItem?N(i.$slots,"selectedItem",{key:0,option:u,remove:()=>d(u)},void 0,!0):(g(),U(ze,{key:1,label:r(f)(u),icon:r(q).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>d(u)},null,8,["label","icon","onClick"]))]))),128))])):ee("",!0)}}),zt=X(Ke,[["__scopeId","data-v-19df692b"]]);Ke.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Ft={class:"av-autocomplete av-col av-gap-xxs"},Qe=Q({__name:"AvAutocomplete",props:re({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:re(["search","loadMore","clear"],["update:modelValue"]),setup(e,{emit:n}){const s=e,v=n,m=Y(),f=nt(e,"modelValue"),d=w(!1),i=w(""),t=w(),u=w(),b=w(),y=V(()=>s.id||`av-autocomplete-${crypto.randomUUID()}`);function I(p){i.value=p,v("search",p)}function _(p){var o,a;(a=(o=b.value)==null?void 0:o.dropdownRef)!=null&&a.contains(p.relatedTarget)||setTimeout(()=>{d.value=!1},s.blurCloseDelay)}function x(p){return s.getOptionKey?s.getOptionKey(p):p.value}function O(p){return s.getOptionLabel?s.getOptionLabel(p):p.label}lt(Fe,{selectedItems:f,searchQuery:i,isOpen:d,props:s,inputId:y,handleBlur:_,getOptionId:x,getDisplayLabel:O});function S(p){var l,c,h,T,j;const o=p.target,a=(l=u.value)==null?void 0:l.inputRef;!((c=a==null?void 0:a.contains)!=null&&c.call(a,o))&&!((h=t.value)!=null&&h.contains(o))&&!((j=(T=b.value)==null?void 0:T.dropdownRef)!=null&&j.contains(o))&&(d.value=!1)}return at(()=>{document.addEventListener("click",S)}),ne(()=>{document.removeEventListener("click",S)}),(p,o)=>(g(),A("div",Ft,[Ee("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[M($t,{ref_key:"inputRef",ref:u,onSearch:I,onClear:o[0]||(o[0]=a=>v("clear"))},J({_:2},[m.requiredTip?{name:"requiredTip",fn:D(()=>[(g(),U(Be(m.requiredTip)))]),key:"0"}:void 0]),1536),M(Et,{ref_key:"dropdownRef",ref:b,onLoadMore:o[1]||(o[1]=a=>v("loadMore"))},J({_:2},[m.item?{name:"item",fn:D(({option:a,isSelected:l,toggle:c})=>[N(p.$slots,"item",{option:a,isSelected:l,toggle:c},void 0,!0)]),key:"0"}:void 0,m.empty?{name:"empty",fn:D(()=>[N(p.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1536)],512),M(zt,null,J({_:2},[m.selectedItem?{name:"selectedItem",fn:D(({option:a,remove:l})=>[N(p.$slots,"selectedItem",{option:a,remove:l},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),le=X(Qe,[["__scopeId","data-v-9146db5c"]]);Qe.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"displaySelectionInInput",defaultValue:{func:!1,value:"true"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}},{name:"selectedItemsCountLabel",defaultValue:{func:!1,value:"'element(s) selected'"}}],events:[{name:"search",type:{names:["string"]},description:"Emitted when user searches for options.",properties:[{type:{names:["mixed"]},description:"e emitted event name: search"},{type:{names:["mixed"]},name:"query",description:"Search query string entered by the user."}],tags:[{title:"param",type:{name:"mixed"},description:"e emitted event name: search"},{title:"param",type:{name:"mixed"},name:"query",description:"Search query string entered by the user."}]},{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const no={title:"Components/Interaction/Selects/AvAutocomplete",component:le,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},L=e=>({components:{AvAutocomplete:le},setup(){const n=w([]);return{args:e,modelValue:n,MDI_ICONS:q}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),E=L.bind({});E.args={};const W=L.bind({});W.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const $=L.bind({});$.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const B=L.bind({});B.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const z=L.bind({});z.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const F=L.bind({});F.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,n)=>({label:`Option ${n+1}`,value:`${n+1}`}))};const P=L.bind({});P.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const H=L.bind({});H.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const G={render(){return{components:{AvAutocomplete:le,AvListItem:Re},setup(){return{modelValue:w([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:q}},template:`
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
      `}}};var de,ue,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(pe=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,ve;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ve=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ge,he,be;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(be=(he=$.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,Se,Ae;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
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
})`,...(Ae=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Ie,Oe,_e;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Oe=z.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var we,xe,Ce;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
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
})`,...(Ce=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Te,De,Le;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(Le=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};var ke,Ve,Me;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Me=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};var Ne,qe,je;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(je=(qe=G.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};const ao=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];export{P as CustomDropdownSize,E as Default,z as Loading,W as MultiSelect,$ as MultiSelectWithoutSelectionInInput,B as WithCustomInput,G as WithCustomItemSlotExample,H as WithDescriptionAndDisabled,F as WithLoadMore,ao as __namedExportsOrder,no as default};
