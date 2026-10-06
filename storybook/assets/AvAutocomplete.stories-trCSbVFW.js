import{A as on,a as Ge}from"./AvList-DPegSfKj.js";import{B as an,u as te,ak as oe,ao as rn,Z as se,ag as o,n as N,R as dn,P as sn,r as _,m as J,k as Je,a6 as L,ab as pe,l as K,aq as q,L as Qe,a4 as x,$ as v,F as de,a5 as Ye,j as R,p as Q,a8 as Xe,aj as me,X as ln,K as fe,a1 as un}from"./iframe-Byt39uED.js";import{A as le}from"./AvButton-BOpNH54s.js";import{a as cn}from"./index-DFiSKgnG.js";import{A as pn}from"./AvIcon-dm5Wf1UN.js";import{M as T}from"./icons-B6bk2eYx.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as mn}from"./AvInput-CQSSD7kr.js";import"./AvTooltip-Cf8EcfLu.js";import"./utils-BIlgUrNJ.js";import"./use-text-truncation-C987Yc5z.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";import"./icon-path-u9rVYwcY.js";import"./AvMessage-CS2zYA4A.js";import"./AvIconText-Cgj675A5.js";import"./format-AL68iITa.js";var C=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(C||{});const Ze=Symbol("AvAutocompleteContext");function ue(){const e=an(Ze);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}var fn=typeof global=="object"&&global&&global.Object===Object&&global,yn=typeof self=="object"&&self&&self.Object===Object&&self,en=fn||yn||Function("return this")(),ne=en.Symbol,nn=Object.prototype,gn=nn.hasOwnProperty,hn=nn.toString,D=ne?ne.toStringTag:void 0;function vn(e){var a=gn.call(e,D),r=e[D];try{e[D]=void 0;var h=!0}catch{}var u=hn.call(e);return h&&(a?e[D]=r:delete e[D]),u}var bn=Object.prototype,kn=bn.toString;function Nn(e){return kn.call(e)}var Vn="[object Null]",Sn="[object Undefined]",ye=ne?ne.toStringTag:void 0;function An(e){return e==null?e===void 0?Sn:Vn:ye&&ye in Object(e)?vn(e):Nn(e)}function Mn(e){return e!=null&&typeof e=="object"}var wn="[object Symbol]";function On(e){return typeof e=="symbol"||Mn(e)&&An(e)==wn}var xn=/\s/;function Hn(e){for(var a=e.length;a--&&xn.test(e.charAt(a)););return a}var In=/^\s+/;function qn(e){return e&&e.slice(0,Hn(e)+1).replace(In,"")}function ie(e){var a=typeof e;return e!=null&&(a=="object"||a=="function")}var ge=NaN,_n=/^[-+]0x[0-9a-f]+$/i,Rn=/^0b[01]+$/i,Tn=/^0o[0-7]+$/i,Cn=parseInt;function he(e){if(typeof e=="number")return e;if(On(e))return ge;if(ie(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ie(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=qn(e);var r=Rn.test(e);return r||Tn.test(e)?Cn(e.slice(2),r?2:8):_n.test(e)?ge:+e}var re=function(){return en.Date.now()},Ln="Expected a function",Dn=Math.max,En=Math.min;function tn(e,a,r){var h,u,m,c,d,n,s=0,V=!1,b=!1,S=!0;if(typeof e!="function")throw new TypeError(Ln);a=he(a)||0,ie(r)&&(V=!!r.leading,b="maxWait"in r,m=b?Dn(he(r.maxWait)||0,a):m,S="trailing"in r?!!r.trailing:S);function A(t){var g=h,p=u;return h=u=void 0,s=t,c=e.apply(p,g),c}function I(t){return s=t,d=setTimeout(k,a),V?A(t):c}function M(t){var g=t-n,p=t-s,O=a-g;return b?En(O,m-p):O}function w(t){var g=t-n,p=t-s;return n===void 0||g>=a||g<0||b&&p>=m}function k(){var t=re();if(w(t))return f(t);d=setTimeout(k,M(t))}function f(t){return d=void 0,S&&h?A(t):(h=u=void 0,c)}function l(){d!==void 0&&clearTimeout(d),s=0,h=n=u=d=void 0}function y(){return d===void 0?c:f(re())}function i(){var t=re(),g=w(t);if(h=arguments,u=this,n=t,g){if(d===void 0)return I(n);if(b)return clearTimeout(d),d=setTimeout(k,a),A(n)}return d===void 0&&(d=setTimeout(k,a)),c}return i.cancel=l,i.flush=y,i}const Un={key:0,class:"av-p-xs"},jn={key:1,class:"av-row av-align-center av-justify-center av-gap-xs av-p-md av-text-text2","data-testid":"av-autocomplete-dropdown__loading"},Pn={key:2,class:"av-autocomplete-dropdown__empty av-p-md"},Bn={key:1,class:"av-autocomplete-dropdown__empty-text av-text-text2"},Wn={key:0,class:"caption-light"},Y=te({__name:"AvAutocompleteDropdown",emits:["loadMore","clearSelection"],setup(e,{expose:a,emit:r}){const h=r,u=oe(),{selectedItems:m,searchQuery:c,isOpen:d,props:n,getOptionId:s,getDisplayLabel:V}=ue(),b=x(),S=x(),A=R(()=>{if(!n.options)return[];if(n.serverSideFiltering)return n.maxResults?n.options.slice(0,n.maxResults):n.options;const i=c.value.toLowerCase().trim();if(!i){const g=n.options;return n.maxResults?g.slice(0,n.maxResults):g}let t;return n.filterOptions?t=n.filterOptions(n.options,i):t=n.options.filter(g=>V(g).toLowerCase().includes(i)),n.maxResults?t.slice(0,n.maxResults):t}),I=R(()=>n.itemsTitleMaxLines),M=R(()=>n.loading?C.LOADING:d.value&&n.options&&n.options.length>0&&A.value.length>0?C.HAS_OPTIONS:C.NO_OPTIONS);function w(i){return m.value.some(t=>s(t)===s(i))}function k(i){if(i.disabled)return;if(!n.multiSelect){m.value=[i],d.value=!1,c.value="";return}const t=m.value,g=s(i);t.some(O=>s(O)===g)?m.value=t.filter(O=>s(O)!==g):m.value=[...t,i]}function f(){m.value=[],h("clearSelection")}const{arrivedState:l}=cn(S,{throttle:100}),y=tn(()=>{h("loadMore")},n.loadMoreThrottleDelay);return rn(()=>l.bottom,i=>{n.enableLoadMore&&i&&d.value&&y()}),se(()=>{y.cancel()}),a({dropdownRef:b}),(i,t)=>{const g=le;return o(d)?(v(),N("div",{key:0,ref_key:"dropdownRef",ref:b,class:sn(["av-autocomplete-dropdown av-mt-xxxs av-radius-lg",o(n).dropdownClass]),style:dn({width:o(n).dropdownWidth,maxHeight:o(n).maxDropdownHeight})},[o(n).showClearSelectionButton?(v(),N("div",Un,[_(g,{label:o(n).clearSelectionLabel??"Clear selection",icon:o(T).CLOSE_CIRCLE_OUTLINE,variant:"DEFAULT",theme:"SECONDARY",disabled:o(m).length===0,onClick:f},null,8,["label","icon","disabled"])])):J("",!0),o(M)===o(C).LOADING?(v(),N("div",jn,[_(pn,{name:o(T).LOADING,size:1.5,animation:"spin"},null,8,["name"]),t[0]||(t[0]=Je("span",{class:"av-autocomplete-dropdown__loading-text av-text-text2"},"Loading...",-1))])):o(M)===o(C).NO_OPTIONS?(v(),N("div",Pn,[u.empty?L(i.$slots,"empty",{},void 0,!0,0):(v(),N("div",Bn,pe(o(n).noResultsLabel??"No results found"),1))])):(v(),K(on,Qe({key:3,ref_key:"listRef",ref:S},o(n).listOptions,{class:["av-autocomplete-dropdown__options",o(n).scrollbarClass]}),{default:q(()=>[(v(!0),N(de,null,Ye(o(A),p=>(v(),N(de,{key:o(s)(p)},[u.item?L(i.$slots,"item",{option:p,isSelected:w(p),toggle:()=>k(p)},void 0,!0,0):(v(),K(Ge,{key:1,title:o(V)(p),"title-max-lines":o(I),"enable-tooltip":!!o(I),icon:w(p)?o(T).CHECK:void 0,selected:w(p),disabled:p.disabled,"disabled-tooltip":p.disabledTooltip,"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)",onClick:()=>k(p)},{default:q(()=>[p.description?(v(),N("span",Wn,pe(p.description),1)):J("",!0)]),_:2},1032,["title","title-max-lines","enable-tooltip","icon","selected","disabled","disabled-tooltip","onClick"]))],64))),128))]),_:3},16,["class"]))],6)):J("",!0)}}}),Fn=ae(Y,[["__scopeId","data-v-2aa4e722"]]);Y.__docgenInfo=Object.assign({displayName:Y.name??Y.__name},{exportName:"default",displayName:"AvAutocompleteDropdown",typeParams:"T extends AvAutocompleteOption = AvAutocompleteOption",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"loadMore",description:"",tags:[],type:"[]",signature:'(evt: "loadMore"): void',schema:[],declarations:[]},{name:"clearSelection",description:"",tags:[],type:"[]",signature:'(evt: "clearSelection"): void',schema:[],declarations:[]}],slots:[{name:"item",type:"[{ option: T; isSelected: boolean; toggle: () => void; }]",description:"",tags:[],schema:{kind:"array",type:"[{ option: T; isSelected: boolean; toggle: () => void; }]"},declarations:[]},{name:"empty",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"});const $n={class:"av-autocomplete-input"},X=te({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:a,emit:r}){const h=r,u=oe(),{selectedItems:m,searchQuery:c,isOpen:d,props:n,inputId:s,handleBlur:V,getDisplayLabel:b}=ue(),S=x(),A=R(()=>{if(!n.multiSelect&&m.value.length>0)return b(m.value[0]);if(n.multiSelect){if(!n.displaySelectionInInput)return c.value;if(m.value.length>0)return n.showSelectedSection?n.selectedItemsCountLabel:m.value.map(b).join(", ")}return c.value}),I=R(()=>{var l;return((l=n.inputOptions)==null?void 0:l.placeholder)||"Search..."}),M=tn(l=>{c.value=l},n.debounceDelay);function w(l){M(String(l||""))}function k(){d.value=!0}function f(){c.value="",h("clear")}return se(()=>{M.cancel()}),a({inputRef:S,searchQuery:R(()=>c.value)}),(l,y)=>(v(),N("div",$n,[_(mn,Qe({id:o(s),ref_key:"inputRef",ref:S,"model-value":o(A),placeholder:o(I)},o(n).inputOptions,{"onUpdate:modelValue":w,onFocus:k,onBlur:o(V),onClick:k}),Q({_:2},[u.requiredTip?{name:"requiredTip",fn:q(()=>[(v(),K(Xe(u.requiredTip)))]),key:"0"}:void 0,o(c)&&o(c).length>0?{name:"suffix",fn:q(()=>[_(le,{label:o(n).clearLabel??"Clear search",icon:o(T).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":1.25,variant:"DEFAULT",theme:"SECONDARY",onClick:f},null,8,["label","icon"])]),key:"1"}:void 0]),1040,["id","model-value","placeholder","onBlur"])]))}}),zn=ae(X,[["__scopeId","data-v-cd920193"]]);X.__docgenInfo=Object.assign({displayName:X.name??X.__name},{exportName:"default",displayName:"AvAutocompleteInput",typeParams:"T extends AvAutocompleteOption = AvAutocompleteOption",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"search",description:"",tags:[],type:"[query: string]",signature:'(evt: "search", query: string): void',schema:["string"],declarations:[]},{name:"clear",description:"",tags:[],type:"[]",signature:'(evt: "clear"): void',schema:[],declarations:[]}],slots:[{name:"requiredTip",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"});const Kn={key:0,class:"av-autocomplete-selected-tags av-row av-wrap av-gap-xs av-mt-xs"},Z=te({__name:"AvAutocompleteSelectedTags",setup(e){const a=oe(),{selectedItems:r,props:h,getOptionId:u,getDisplayLabel:m}=ue();function c(d){const n=r.value,s=u(d);r.value=n.filter(V=>u(V)!==s)}return(d,n)=>o(h).multiSelect&&o(r).length>0&&o(h).showSelectedSection?(v(),N("div",Kn,[(v(!0),N(de,null,Ye(o(r),s=>(v(),N("div",{key:o(u)(s),class:"av-autocomplete-selected-tags__item"},[a.selectedItem?L(d.$slots,"selectedItem",{option:s,remove:()=>c(s)},void 0,!0,0):(v(),K(le,{key:1,label:o(m)(s),icon:o(T).CLOSE_CIRCLE_OUTLINE,"icon-right":"",variant:"OUTLINED",theme:"SECONDARY",onClick:()=>c(s)},null,8,["label","icon","onClick"]))]))),128))])):J("",!0)}}),Gn=ae(Z,[["__scopeId","data-v-35b19294"]]);Z.__docgenInfo=Object.assign({displayName:Z.name??Z.__name},{exportName:"default",displayName:"AvAutocompleteSelectedTags",typeParams:"T extends AvAutocompleteOption = AvAutocompleteOption",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"selectedItem",type:"[{ option: T; remove: () => void; }]",description:"",tags:[],schema:{kind:"array",type:"[{ option: T; remove: () => void; }]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"});const Jn={class:"av-autocomplete av-col av-gap-xxs"},ee=te({__name:"AvAutocomplete",props:fe({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},displaySelectionInInput:{type:Boolean,default:!0},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1},selectedItemsCountLabel:{default:"element(s) selected"},clearLabel:{default:"Clear search"},showClearSelectionButton:{type:Boolean,default:!1},clearSelectionLabel:{default:"Clear selection"},noResultsLabel:{},itemsTitleMaxLines:{default:void 0}},{modelValue:{default:()=>[]},modelModifiers:{},search:{default:""},searchModifiers:{}}),emits:fe(["loadMore","clear","clearSelection"],["update:modelValue","update:search"]),setup(e,{emit:a}){const r=e,h=a,u=oe(),m=me(e,"modelValue"),c=me(e,"search"),d=x(!1),n=x(),s=x(),V=x(),b=R(()=>r.id||`av-autocomplete-${crypto.randomUUID()}`);function S(f){c.value=f}function A(f){var y;const l=f.relatedTarget;l&&((y=n.value)!=null&&y.contains(l))||setTimeout(()=>{d.value=!1},r.blurCloseDelay)}function I(f){return r.getOptionKey?r.getOptionKey(f):f.value}function M(f){return r.getOptionLabel?r.getOptionLabel(f):f.label}un(Ze,{selectedItems:m,searchQuery:c,isOpen:d,props:r,inputId:b,handleBlur:A,getOptionId:I,getDisplayLabel:M});function k(f){var i,t,g,p,O;const l=f.target,y=(i=s.value)==null?void 0:i.inputRef;!((t=y==null?void 0:y.contains)!=null&&t.call(y,l))&&!((g=n.value)!=null&&g.contains(l))&&!((O=(p=V.value)==null?void 0:p.dropdownRef)!=null&&O.contains(l))&&(d.value=!1)}return ln(()=>{document.addEventListener("click",k)}),se(()=>{document.removeEventListener("click",k)}),(f,l)=>(v(),N("div",Jn,[Je("div",{ref_key:"wrapperRef",ref:n,class:"av-autocomplete__wrapper"},[_(zn,{ref_key:"inputRef",ref:s,onSearch:S,onClear:l[0]||(l[0]=y=>h("clear"))},Q({_:2},[u.requiredTip?{name:"requiredTip",fn:q(()=>[(v(),K(Xe(u.requiredTip)))]),key:"0"}:void 0]),1536),_(Fn,{ref_key:"dropdownRef",ref:V,"show-clear-selection-button":e.showClearSelectionButton,onClearSelection:l[1]||(l[1]=y=>h("clearSelection")),onLoadMore:l[2]||(l[2]=y=>h("loadMore"))},Q({_:2},[u.item?{name:"item",fn:q(({option:y,isSelected:i,toggle:t})=>[L(f.$slots,"item",{option:y,isSelected:i,toggle:t},void 0,!0)]),key:"0"}:void 0,u.empty?{name:"empty",fn:q(()=>[L(f.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1032,["show-clear-selection-button"])],512),_(Gn,null,Q({_:2},[u.selectedItem?{name:"selectedItem",fn:q(({option:y,remove:i})=>[L(f.$slots,"selectedItem",{option:y,remove:i},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),ce=ae(ee,[["__scopeId","data-v-473cb38e"]]);ee.__docgenInfo=Object.assign({displayName:ee.name??ee.__name},{exportName:"default",displayName:"AvAutocomplete",typeParams:"T extends AvAutocompleteOption = AvAutocompleteOption",type:2,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"id",global:!1,description:"ID of the input element",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"inputOptions",global:!1,default:"{}",description:"Input-related options and configuration",tags:[],required:!1,type:'Omit<AvInputProps, "modelValue" | "id"> | undefined',schema:{kind:"enum",type:'Omit<AvInputProps, "modelValue" | "id"> | undefined',schema:["undefined",'Omit<AvInputProps, "modelValue" | "id">']},declarations:[]},{name:"options",global:!1,description:"Options available for selection",tags:[],required:!1,type:"T[] | undefined",schema:{kind:"enum",type:"T[] | undefined",schema:["undefined",{kind:"array",type:"T[]"}]},declarations:[]},{name:"multiSelect",global:!1,default:"false",description:"Whether to allow multi-selection",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"getOptionLabel",global:!1,description:"Function to get display text from option",tags:[],required:!1,type:"((option: T) => string) | undefined",schema:{kind:"enum",type:"((option: T) => string) | undefined",schema:["undefined",{kind:"event",type:"(option: T): string"}]},declarations:[]},{name:"getOptionKey",global:!1,description:"Function to get unique key from option",tags:[],required:!1,type:"((option: T) => string | number) | undefined",schema:{kind:"enum",type:"((option: T) => string | number) | undefined",schema:["undefined",{kind:"event",type:"(option: T): string | number"}]},declarations:[]},{name:"filterOptions",global:!1,description:"Function to filter options based on query",tags:[],required:!1,type:"((options: T[], query: string) => T[]) | undefined",schema:{kind:"enum",type:"((options: T[], query: string) => T[]) | undefined",schema:["undefined",{kind:"event",type:"(options: T[], query: string): T[]"}]},declarations:[]},{name:"dropdownWidth",global:!1,default:'"100%"',description:"Width of the dropdown",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"maxDropdownHeight",global:!1,default:'"20rem"',description:"Maximum height of the dropdown",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"listOptions",global:!1,default:`{
    size: "small",
    ariaLabel: "Available options list"
}`,description:"Props to pass to the AvList component",tags:[],required:!1,type:"AvListProps | undefined",schema:{kind:"enum",type:"AvListProps | undefined",schema:["undefined",{kind:"object",type:"AvListProps"}]},declarations:[]},{name:"scrollbarClass",global:!1,description:"CSS class to apply to the scrollbar",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"dropdownClass",global:!1,default:'"av-autocomplete__dropdown--default"',description:"CSS class to apply to the dropdown",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"loading",global:!1,default:"false",description:"Whether the component is in loading state",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"debounceDelay",global:!1,default:"300",description:"Debounce delay for search input in milliseconds",tags:[{name:"default",text:"300"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"maxResults",global:!1,description:"Maximum number of results to display",tags:[],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"enableLoadMore",global:!1,default:"false",description:"Whether to enable pagination with scroll-to-bottom loading",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"showSelectedSection",global:!1,default:"false",description:"Whether to show the selected items section below the input",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"displaySelectionInInput",global:!1,default:"true",description:`Whether selected items should be displayed inside the input.
When false in multi-select mode, the input only shows the current search query.`,tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"blurCloseDelay",global:!1,default:"150",description:"Delay before closing dropdown when focus is lost (in milliseconds)",tags:[{name:"default",text:"150"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"loadMoreThrottleDelay",global:!1,default:"200",description:"Throttle delay for scroll-to-bottom load more (in milliseconds)",tags:[{name:"default",text:"200"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"serverSideFiltering",global:!1,default:"false",description:`Whether filtering is handled server-side (options prop already contains filtered results)
When true, client-side filtering is bypassed and options are used as-is`,tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"selectedItemsCountLabel",global:!1,default:'"element(s) selected"',description:`Label displayed after the selected items count in multi-select mode.
The count is handled internally by the component.`,tags:[{name:"default",text:'"element(s) selected"'},{name:"example",text:'"element(s) selected" → "3 element(s) selected"'}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"clearLabel",global:!1,default:'"Clear search"',description:"Label for the clear search query button",tags:[{name:"default",text:'"Clear search"'}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"showClearSelectionButton",global:!1,default:"false",description:"Whether to show a button to clear the selection",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"clearSelectionLabel",global:!1,default:'"Clear selection"',description:"Label for the clear selection button when no items are selected",tags:[{name:"default",text:'"Clear selection"'}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"noResultsLabel",global:!1,description:"Label displayed when no results are found for the current search query",tags:[{name:"default",text:'"No results found"'}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"itemsTitleMaxLines",global:!1,default:"undefined",description:`Maximum number of lines to display for the title of each item in the dropdown.
If the title exceeds this number of lines, it will be truncated with an ellipsis.`,tags:[{name:"default",text:"undefined"},{name:"example",text:'2 → "This is a long title that will be truncated..." (if it exceeds 2 lines)'},{name:"example",text:'3 → "This is a long title that will be truncated..." (if it exceeds 3 lines)'},{name:"example",text:"undefined → No truncation, the title will take as many lines as needed"}],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"modelValue",global:!1,default:"[]",description:"",tags:[],required:!1,type:"T[] | undefined",schema:{kind:"enum",type:"T[] | undefined",schema:["undefined",{kind:"array",type:"T[]"}]},declarations:[]},{name:"search",global:!1,default:'""',description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]}],events:[{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll).",tags:[],type:"[]",signature:'(e: "loadMore"): void',schema:[],declarations:[]},{name:"clear",description:"Emitted when the search query is cleared.",tags:[],type:"[]",signature:'(e: "clear"): void',schema:[],declarations:[]},{name:"clearSelection",description:"Emitted when the selection is cleared.",tags:[],type:"[]",signature:'(e: "clearSelection"): void',schema:[],declarations:[]},{name:"update:modelValue",description:"",tags:[],type:"[value: T[]]",signature:'(event: "update:modelValue", value: T[]): void',schema:[{kind:"array",type:"T[]"}],declarations:[]},{name:"update:search",description:"",tags:[],type:"[value: string]",signature:'(event: "update:search", value: string): void',schema:["string"],declarations:[]}],slots:[{name:"requiredTip",type:"any",description:"Slot for displaying a required field tip in the input.",tags:[],schema:"any",declarations:[]},{name:"item",type:"[{ option: T; isSelected: boolean; toggle: () => void; }]",description:"Slot for customizing how each option is displayed in the dropdown.",tags:[{name:"param",text:"option The option object being rendered"},{name:"param",text:"isSelected Whether the option is currently selected"},{name:"param",text:"toggle Function to toggle the option's selected state"}],schema:{kind:"array",type:"[{ option: T; isSelected: boolean; toggle: () => void; }]"},declarations:[]},{name:"selectedItem",type:"[{ option: T; remove: () => void; }]",description:"Slot for customizing how selected items are displayed as tags.",tags:[{name:"param",text:"option The selected option object"},{name:"param",text:"remove Function to remove this option from selection"}],schema:{kind:"array",type:"[{ option: T; remove: () => void; }]"},declarations:[]},{name:"empty",type:"any[]",description:"Slot for customizing the empty state when no options match the search.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"});const mt={title:"Components/Interaction/Selects/AvAutocomplete",component:ce,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},displaySelectionInInput:{control:"boolean",description:"Whether selected items should be displayed inside the input in multi-select mode"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}},clearLabel:{control:"text",description:"Label for the clear selection button"},showClearSelectionButton:{control:"boolean",description:"Whether to show a button to clear the selection"},clearSelectionLabel:{control:"text",description:"Label for the clear selection button when no items are selected"}},args:{clearLabel:"Clear search",clearSelectionLabel:"Clear selection",showClearSelectionButton:!1,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"},{label:"Test 1",value:"6"},{label:"Test 2",value:"7"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,displaySelectionInInput:!0,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},H=e=>({components:{AvAutocomplete:ce},setup(){const a=x([]);return{args:e,modelValue:a,MDI_ICONS:T}},template:`
    <AvAutocomplete
      v-bind="args"
      v-model="modelValue"
      @search="(query) => console.log('Search:', query)"
      @load-more="() => console.log('Load more')"
    />
  `}),E=H.bind({});E.args={};const U=H.bind({});U.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const j=H.bind({});j.args={multiSelect:!0,showSelectedSection:!0,displaySelectionInInput:!1,inputOptions:{label:"Multi-select without selection in input",placeholder:"Search and keep typing after selection..."}};const P=H.bind({});P.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const B=H.bind({});B.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const W=H.bind({});W.args={multiSelect:!0,showSelectedSection:!0,showClearSelectionButton:!0,inputOptions:{label:"Multi-select with clear button",placeholder:"Search and select multiple options..."}};const F=H.bind({});F.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,a)=>({label:`Option ${a+1}`,value:`${a+1}`}))};const $=H.bind({});$.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const z=H.bind({});z.args={multiSelect:!0,serverSideFiltering:!0,inputOptions:{label:"Select an activity",placeholder:"Search for activities..."},options:[{label:"Définir ses valeurs",value:"1",description:"Me connaître"},{label:"Explorer ses pistes",value:"2",description:"Explorer mes futures"},{label:"Activité désactivée",value:"3",description:"CV",disabled:!0}]};const G={render(){return{components:{AvAutocomplete:ce,AvListItem:Ge},setup(){return{modelValue:x([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:T}},template:`
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
      `}}},ft=["Default","MultiSelect","MultiSelectWithoutSelectionInInput","WithCustomInput","Loading","WithClearSelectionButton","WithLoadMore","CustomDropdownSize","WithDescriptionAndDisabled","WithCustomItemSlotExample"];var ve,be,ke;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(ke=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var Ne,Ve,Se;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
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
})`,...(Se=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var Ae,Me,we;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(we=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var Oe,xe,He;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(He=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:He.source}}};var Ie,qe,_e;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
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
})`,...(_e=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Re,Te,Ce;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(Ce=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var Le,De,Ee;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
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
})`,...(Ee=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var Ue,je,Pe;$.parameters={...$.parameters,docs:{...(Ue=$.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
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
})`,...(Pe=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var Be,We,Fe;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
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
})`,...(Fe=(We=z.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var $e,ze,Ke;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ke=(ze=G.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};export{$ as CustomDropdownSize,E as Default,B as Loading,U as MultiSelect,j as MultiSelectWithoutSelectionInInput,W as WithClearSelectionButton,P as WithCustomInput,G as WithCustomItemSlotExample,z as WithDescriptionAndDisabled,F as WithLoadMore,ft as __namedExportsOrder,mt as default};
