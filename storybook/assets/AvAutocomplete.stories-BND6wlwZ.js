import{A as vt,a as Ye}from"./AvList-BEXh6Tgh.js";import{M as $}from"./icons-DLnh1uvi.js";import{q as gt,o as pe,G as ht,x as me,a1 as Ze,a2 as bt,a3 as yt,V as St,a4 as x,a5 as oe,c as M,l as we,B as v,d as ae,U as se,r as V,g as fe,b as D,f as ve,p as At,n as Ot,k as Z,y as W,e as et,a as F,w as R,z as tt,i as I,F as ue,j as ot,a6 as ne,M as nt,O as Ie,P as _t,S as wt}from"./iframe-DhY3rxPY.js";import{A as It}from"./AvVIcon-W2_JcLXn.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as rt}from"./AvButton-B5ATaHms.js";import{A as Tt}from"./AvInput-CAI8-Yap.js";import"./preload-helper-ILsKNznc.js";import"./vue-dsfr-CfU3oKsL.js";import"./string-BZgCOP9D.js";const lt=Symbol("AvAutocompleteContext");function ge(){const e=gt(lt);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}function at(e){return bt()?(yt(e),!0):!1}const xt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Lt=e=>e!=null,Dt=Object.prototype.toString,kt=e=>Dt.call(e)==="[object Object]",P=()=>{};function st(e,o){function n(...l){return new Promise((c,i)=>{Promise.resolve(e(()=>o.apply(this,l),{fn:o,thisArg:this,args:l})).then(c).catch(i)})}return n}function Ct(e,o={}){let n,l,c=P;const i=t=>{clearTimeout(t),c(),c=P};let d;return t=>{const a=x(e),p=x(o.maxWait);return n&&i(n),a<=0||p!==void 0&&p<=0?(l&&(i(l),l=void 0),Promise.resolve(t())):new Promise((y,S)=>{c=o.rejectOnCancel?S:y,d=t,p&&!l&&(l=setTimeout(()=>{n&&i(n),l=void 0,y(d())},p)),n=setTimeout(()=>{l&&i(l),l=void 0,y(t())},a)})}}function Mt(...e){let o=0,n,l=!0,c=P,i,d,r,t,a;!St(e[0])&&typeof e[0]=="object"?{delay:d,trailing:r=!0,leading:t=!0,rejectOnCancel:a=!1}=e[0]:[d,r=!0,t=!0,a=!1]=e;const p=()=>{n&&(clearTimeout(n),n=void 0,c(),c=P)};return S=>{const b=x(d),O=Date.now()-o,_=()=>i=S();return p(),b<=0?(o=Date.now(),_()):(O>b&&(t||!l)?(o=Date.now(),_()):r&&(i=new Promise((T,w)=>{c=a?w:T,n=setTimeout(()=>{o=Date.now(),l=!0,T(_()),p()},Math.max(0,b-O))})),!t&&!n&&(n=setTimeout(()=>l=!0,b)),l=!1,i)}}function re(e){return Array.isArray(e)?e:[e]}function Vt(e){return Ze()}function qt(e,o=200,n={}){return st(Ct(o,n),e)}function Et(e,o=200,n=!1,l=!0,c=!1){return st(Mt(o,n,l,c),e)}function Nt(e,o=!0,n){Vt()?pe(e,n):o?e():ht(e)}function jt(e,o,n){return me(e,o,{...n,immediate:!0})}const he=xt?window:void 0;function be(e){var o;const n=x(e);return(o=n==null?void 0:n.$el)!=null?o:n}function Te(...e){const o=[],n=()=>{o.forEach(r=>r()),o.length=0},l=(r,t,a,p)=>(r.addEventListener(t,a,p),()=>r.removeEventListener(t,a,p)),c=M(()=>{const r=re(x(e[0])).filter(t=>t!=null);return r.every(t=>typeof t!="string")?r:void 0}),i=jt(()=>{var r,t;return[(t=(r=c.value)==null?void 0:r.map(a=>be(a)))!=null?t:[he].filter(a=>a!=null),re(x(c.value?e[1]:e[0])),re(v(c.value?e[2]:e[1])),x(c.value?e[3]:e[2])]},([r,t,a,p])=>{if(n(),!(r!=null&&r.length)||!(t!=null&&t.length)||!(a!=null&&a.length))return;const y=kt(p)?{...p}:p;o.push(...r.flatMap(S=>t.flatMap(b=>a.map(O=>l(S,b,O,y)))))},{flush:"post"}),d=()=>{i(),n()};return at(n),d}function Rt(){const e=oe(!1),o=Ze();return o&&pe(()=>{e.value=!0},o),e}function Wt(e){const o=Rt();return M(()=>(o.value,!!e()))}function Ft(e,o,n={}){const{window:l=he,...c}=n;let i;const d=Wt(()=>l&&"MutationObserver"in l),r=()=>{i&&(i.disconnect(),i=void 0)},t=M(()=>{const S=x(e),b=re(S).map(be).filter(Lt);return new Set(b)}),a=me(t,S=>{r(),d.value&&S.size&&(i=new MutationObserver(o),S.forEach(b=>i.observe(b,c)))},{immediate:!0,flush:"post"}),p=()=>i==null?void 0:i.takeRecords(),y=()=>{a(),r()};return at(y),{isSupported:d,stop:y,takeRecords:p}}const xe=1;function $t(e,o={}){const{throttle:n=0,idle:l=200,onStop:c=P,onScroll:i=P,offset:d={left:0,right:0,top:0,bottom:0},observe:r={mutation:!1},eventListenerOptions:t={capture:!1,passive:!0},behavior:a="auto",window:p=he,onError:y=m=>{console.error(m)}}=o,S=typeof r=="boolean"?{mutation:r}:r,b=oe(0),O=oe(0),_=M({get(){return b.value},set(m){w(m,void 0)}}),T=M({get(){return O.value},set(m){w(void 0,m)}});function w(m,E){var L,B,H,ee;if(!p)return;const C=x(e);if(!C)return;(H=C instanceof Document?p.document.body:C)==null||H.scrollTo({top:(L=x(E))!=null?L:T.value,left:(B=x(m))!=null?B:_.value,behavior:x(a)});const q=((ee=C==null?void 0:C.document)==null?void 0:ee.documentElement)||(C==null?void 0:C.documentElement)||C;_!=null&&(b.value=q.scrollLeft),T!=null&&(O.value=q.scrollTop)}const g=oe(!1),s=we({left:!0,right:!1,top:!0,bottom:!1}),u=we({left:!1,right:!1,top:!1,bottom:!1}),f=m=>{g.value&&(g.value=!1,u.left=!1,u.right=!1,u.top=!1,u.bottom=!1,c(m))},h=qt(f,n+l),A=m=>{var E;if(!p)return;const L=((E=m==null?void 0:m.document)==null?void 0:E.documentElement)||(m==null?void 0:m.documentElement)||be(m),{display:B,flexDirection:H,direction:ee}=getComputedStyle(L),C=ee==="rtl"?-1:1,q=L.scrollLeft;u.left=q<b.value,u.right=q>b.value;const Se=Math.abs(q*C)<=(d.left||0),Ae=Math.abs(q*C)+L.clientWidth>=L.scrollWidth-(d.right||0)-xe;B==="flex"&&H==="row-reverse"?(s.left=Ae,s.right=Se):(s.left=Se,s.right=Ae),b.value=q;let N=L.scrollTop;m===p.document&&!N&&(N=p.document.body.scrollTop),u.top=N<O.value,u.bottom=N>O.value;const Oe=Math.abs(N)<=(d.top||0),_e=Math.abs(N)+L.clientHeight>=L.scrollHeight-(d.bottom||0)-xe;B==="flex"&&H==="column-reverse"?(s.top=_e,s.bottom=Oe):(s.top=Oe,s.bottom=_e),O.value=N},k=m=>{var E;if(!p)return;const L=(E=m.target.documentElement)!=null?E:m.target;A(L),g.value=!0,h(m),i(m)};return Te(e,"scroll",n?Et(k,n,!0,!1):k,t),Nt(()=>{try{const m=x(e);if(!m)return;A(m)}catch(m){y(m)}}),S!=null&&S.mutation&&e!=null&&e!==p&&e!==document&&Ft(e,()=>{const m=x(e);m&&A(m)},{attributes:!0,childList:!0,subtree:!0}),Te(e,"scrollend",f,t),{x:_,y:T,isScrolling:g,arrivedState:s,directions:u,measure(){const m=x(e);p&&m&&A(m)}}}var Pt=typeof global=="object"&&global&&global.Object===Object&&global,zt=typeof self=="object"&&self&&self.Object===Object&&self,it=Pt||zt||Function("return this")(),le=it.Symbol,ct=Object.prototype,Bt=ct.hasOwnProperty,Ht=ct.toString,U=le?le.toStringTag:void 0;function Ut(e){var o=Bt.call(e,U),n=e[U];try{e[U]=void 0;var l=!0}catch{}var c=Ht.call(e);return l&&(o?e[U]=n:delete e[U]),c}var Gt=Object.prototype,Kt=Gt.toString;function Jt(e){return Kt.call(e)}var Qt="[object Null]",Xt="[object Undefined]",Le=le?le.toStringTag:void 0;function Yt(e){return e==null?e===void 0?Xt:Qt:Le&&Le in Object(e)?Ut(e):Jt(e)}function Zt(e){return e!=null&&typeof e=="object"}var eo="[object Symbol]";function to(e){return typeof e=="symbol"||Zt(e)&&Yt(e)==eo}var oo=/\s/;function no(e){for(var o=e.length;o--&&oo.test(e.charAt(o)););return o}var ro=/^\s+/;function lo(e){return e&&e.slice(0,no(e)+1).replace(ro,"")}function de(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}var De=NaN,ao=/^[-+]0x[0-9a-f]+$/i,so=/^0b[01]+$/i,io=/^0o[0-7]+$/i,co=parseInt;function ke(e){if(typeof e=="number")return e;if(to(e))return De;if(de(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=de(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=lo(e);var n=so.test(e);return n||io.test(e)?co(e.slice(2),n?2:8):ao.test(e)?De:+e}var ce=function(){return it.Date.now()},uo="Expected a function",po=Math.max,mo=Math.min;function ut(e,o,n){var l,c,i,d,r,t,a=0,p=!1,y=!1,S=!0;if(typeof e!="function")throw new TypeError(uo);o=ke(o)||0,de(n)&&(p=!!n.leading,y="maxWait"in n,i=y?po(ke(n.maxWait)||0,o):i,S="trailing"in n?!!n.trailing:S);function b(h){var A=l,k=c;return l=c=void 0,a=h,d=e.apply(k,A),d}function O(h){return a=h,r=setTimeout(w,o),p?b(h):d}function _(h){var A=h-t,k=h-a,m=o-A;return y?mo(m,i-k):m}function T(h){var A=h-t,k=h-a;return t===void 0||A>=o||A<0||y&&k>=i}function w(){var h=ce();if(T(h))return g(h);r=setTimeout(w,_(h))}function g(h){return r=void 0,S&&l?b(h):(l=c=void 0,d)}function s(){r!==void 0&&clearTimeout(r),a=0,l=t=c=r=void 0}function u(){return r===void 0?d:g(ce())}function f(){var h=ce(),A=T(h);if(l=arguments,c=this,t=h,A){if(r===void 0)return O(t);if(y)return clearTimeout(r),r=setTimeout(w,o),b(t)}return r===void 0&&(r=setTimeout(w,o)),d}return f.cancel=s,f.flush=u,f}var j=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(j||{});const fo={key:0,class:"av-autocomplete-dropdown__loading"},vo={key:1,class:"av-autocomplete-dropdown__empty"},go={key:1,class:"av-autocomplete-dropdown__empty-text"},dt=ae({__name:"AvAutocompleteDropdown",emits:["loadMore"],setup(e,{expose:o,emit:n}){const l=n,c=se(),{selectedItems:i,searchQuery:d,isOpen:r,props:t,getOptionId:a,getDisplayLabel:p}=ge(),y=V(),S=V(),b=M(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const s=d.value.toLowerCase().trim();if(!s){const f=t.options;return t.maxResults?f.slice(0,t.maxResults):f}let u;return t.filterOptions?u=t.filterOptions(t.options,s):u=t.options.filter(f=>p(f).toLowerCase().includes(s)),t.maxResults?u.slice(0,t.maxResults):u}),O=M(()=>t.loading?j.LOADING:r.value&&t.options&&t.options.length>0&&b.value.length>0?j.HAS_OPTIONS:j.NO_OPTIONS);function _(s){return i.value.some(u=>a(u)===a(s))}function T(s){if(!t.multiSelect){i.value=[s],r.value=!1,d.value="";return}const u=i.value,f=a(s);u.some(A=>a(A)===f)?i.value=u.filter(A=>a(A)!==f):i.value=[...u,s]}const{arrivedState:w}=$t(S,{throttle:100}),g=ut(()=>{l("loadMore")},t.loadMoreThrottleDelay);return me(()=>w.bottom,s=>{t.enableLoadMore&&s&&r.value&&g()}),fe(()=>{g.cancel()}),o({dropdownRef:y}),(s,u)=>v(r)?(I(),D("div",{key:0,ref_key:"dropdownRef",ref:y,class:Ot(["av-autocomplete-dropdown",v(t).dropdownClass]),style:At({width:v(t).dropdownWidth,maxHeight:v(t).maxDropdownHeight})},[v(O)===v(j).LOADING?(I(),D("div",fo,[W(It,{name:v($).LOADING_OUTLINE,size:1.5,class:"av-autocomplete-dropdown__spinner"},null,8,["name"]),u[0]||(u[0]=et("span",{class:"av-autocomplete-dropdown__loading-text"},"Loading...",-1))])):v(O)===v(j).NO_OPTIONS?(I(),D("div",vo,[c.empty?F(s.$slots,"empty",{key:0},void 0,!0):(I(),D("div",go," No results found "))])):(I(),Z(vt,tt({key:2,ref_key:"listRef",ref:S},v(t).listOptions,{class:["av-autocomplete-dropdown__options",v(t).scrollbarClass]}),{default:R(()=>[(I(!0),D(ue,null,ot(v(b),f=>(I(),D(ue,{key:v(a)(f)},[c.item?F(s.$slots,"item",{key:0,option:f,isSelected:_(f),toggle:()=>T(f)},void 0,!0):(I(),Z(Ye,{key:1,title:v(p)(f),icon:_(f)?v($).CHECK:void 0,selected:_(f),clickable:"","on-click":()=>T(f),"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)"},null,8,["title","icon","selected","on-click"]))],64))),128))]),_:3},16,["class"]))],6)):ve("",!0)}}),ho=ie(dt,[["__scopeId","data-v-b59b9163"]]);dt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const bo={class:"av-autocomplete-input"},yo={key:0,class:"av-autocomplete-input__suffix"},pt=ae({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:o,emit:n}){const l=n,c=se(),{selectedItems:i,searchQuery:d,isOpen:r,props:t,inputId:a,handleBlur:p,getDisplayLabel:y}=ge(),S=V(),b=M(()=>!t.multiSelect&&i.value.length>0?y(i.value[0]):t.multiSelect&&i.value.length>0?t.showSelectedSection?`${i.value.length} element(s) selected`:i.value.map(y).join(", "):d.value),O=M(()=>{var s;return((s=t.inputOptions)==null?void 0:s.placeholder)||"Search..."}),_=ut(s=>{d.value=s,l("search",s)},t.debounceDelay);function T(s){d.value=String(s||""),_(d.value)}function w(){r.value=!0}function g(){i.value=[],d.value="",l("clear")}return fe(()=>{_.cancel()}),o({inputRef:S,searchQuery:M(()=>d.value)}),(s,u)=>(I(),D("div",bo,[W(Tt,tt({id:v(a),ref_key:"inputRef",ref:S,"model-value":v(b),placeholder:v(O)},v(t).inputOptions,{"onUpdate:modelValue":T,onFocus:w,onBlur:v(p),onClick:w}),ne({_:2},[c.requiredTip?{name:"requiredTip",fn:R(()=>[(I(),Z(nt(c.requiredTip)))]),key:"0"}:void 0]),1040,["id","model-value","placeholder","onBlur"]),v(i).length>0?(I(),D("div",yo,[W(rt,{label:"Clear selected items",icon:v($).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":.8,size:"sm",variant:"DEFAULT",theme:"SECONDARY","on-click":g},null,8,["icon"])])):ve("",!0)]))}}),So=ie(pt,[["__scopeId","data-v-24fd377c"]]);pt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Ao={key:0,class:"av-autocomplete-selected-tags"},mt=ae({__name:"AvAutocompleteSelectedTags",setup(e){const o=se(),{selectedItems:n,props:l,getOptionId:c,getDisplayLabel:i}=ge();function d(r){const t=n.value,a=c(r);n.value=t.filter(p=>c(p)!==a)}return(r,t)=>v(l).multiSelect&&v(n).length>0&&v(l).showSelectedSection?(I(),D("div",Ao,[(I(!0),D(ue,null,ot(v(n),a=>(I(),D("div",{key:v(c)(a),class:"av-autocomplete-selected-tags__item"},[o.selectedItem?F(r.$slots,"selectedItem",{key:0,option:a,remove:()=>d(a)},void 0,!0):(I(),Z(rt,{key:1,label:v(i)(a),icon:v($).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY","on-click":()=>d(a)},null,8,["label","icon","on-click"]))]))),128))])):ve("",!0)}}),Oo=ie(mt,[["__scopeId","data-v-c00c128b"]]);mt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const _o={class:"av-autocomplete"},ft=ae({__name:"AvAutocomplete",props:Ie({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{default:"av-autocomplete__scrollbar--default"},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:Ie(["search","loadMore","clear"],["update:modelValue"]),setup(e,{emit:o}){const n=e,l=o,c=se(),i=_t(e,"modelValue"),d=V(!1),r=V(""),t=V(),a=V(),p=V(),y=M(()=>n.id||`av-autocomplete-${crypto.randomUUID()}`);function S(g){r.value=g,l("search",g)}function b(g){var s,u;(u=(s=p.value)==null?void 0:s.dropdownRef)!=null&&u.contains(g.relatedTarget)||setTimeout(()=>{d.value=!1},n.blurCloseDelay)}function O(g){return n.getOptionKey?n.getOptionKey(g):g.value}function _(g){return n.getOptionLabel?n.getOptionLabel(g):g.label}wt(lt,{selectedItems:i,searchQuery:r,isOpen:d,props:n,inputId:y,handleBlur:b,getOptionId:O,getDisplayLabel:_});function w(g){var f,h,A,k,m;const s=g.target,u=(f=a.value)==null?void 0:f.inputRef;!((h=u==null?void 0:u.contains)!=null&&h.call(u,s))&&!((A=t.value)!=null&&A.contains(s))&&!((m=(k=p.value)==null?void 0:k.dropdownRef)!=null&&m.contains(s))&&(d.value=!1)}return pe(()=>{document.addEventListener("click",w)}),fe(()=>{document.removeEventListener("click",w)}),(g,s)=>(I(),D("div",_o,[et("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[W(So,{ref_key:"inputRef",ref:a,onSearch:S,onClear:s[0]||(s[0]=u=>l("clear"))},ne({_:2},[c.requiredTip?{name:"requiredTip",fn:R(()=>[(I(),Z(nt(c.requiredTip)))]),key:"0"}:void 0]),1536),W(ho,{ref_key:"dropdownRef",ref:p,onLoadMore:s[1]||(s[1]=u=>l("loadMore"))},ne({_:2},[c.item?{name:"item",fn:R(({option:u,isSelected:f,toggle:h})=>[F(g.$slots,"item",{option:u,isSelected:f,toggle:h},void 0,!0)]),key:"0"}:void 0,c.empty?{name:"empty",fn:R(()=>[F(g.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1536)],512),W(Oo,null,ne({_:2},[c.selectedItem?{name:"selectedItem",fn:R(({option:u,remove:f})=>[F(g.$slots,"selectedItem",{option:u,remove:f},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),ye=ie(ft,[["__scopeId","data-v-fd810890"]]);ft.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"id",description:"ID of the input element",required:!1,type:{name:"string"}},{name:"inputOptions",description:"Input-related options and configuration",required:!1,type:{name:"Omit",elements:[{name:"AvInputProps"},{name:"union",elements:[{name:'"id"'},{name:'"modelValue"'}]}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"options",description:"Options available for selection",required:!1,type:{name:"Array",elements:[{name:"T"}]}},{name:"multiSelect",description:"Whether to allow multi-selection",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"getOptionLabel",description:"Function to get display text from option",required:!1,type:{name:"TSFunctionType"}},{name:"getOptionKey",description:"Function to get unique key from option",required:!1,type:{name:"TSFunctionType"}},{name:"filterOptions",description:"Function to filter options based on query",required:!1,type:{name:"TSFunctionType"}},{name:"dropdownWidth",description:"Width of the dropdown",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",description:"Maximum height of the dropdown",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",description:"Props to pass to the AvList component",required:!1,type:{name:"AvListProps"},defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"scrollbarClass",description:"CSS class to apply to the scrollbar",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'av-autocomplete__scrollbar--default'"}},{name:"dropdownClass",description:"CSS class to apply to the dropdown",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",description:"Whether the component is in loading state",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",description:"Debounce delay for search input in milliseconds",tags:{default:[{description:"300",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"maxResults",description:"Maximum number of results to display",required:!1,type:{name:"number"}},{name:"enableLoadMore",description:"Whether to enable pagination with scroll-to-bottom loading",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",description:"Whether to show the selected items section below the input",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"blurCloseDelay",description:"Delay before closing dropdown when focus is lost (in milliseconds)",tags:{default:[{description:"150",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",description:"Throttle delay for scroll-to-bottom load more (in milliseconds)",tags:{default:[{description:"200",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",description:`Whether filtering is handled server-side (options prop already contains filtered results)
When true, client-side filtering is bypassed and options are used as-is`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"search",type:{names:["string"]},description:"Emitted when user searches for options.",properties:[{type:{names:["mixed"]},description:"e emitted event name: search"},{type:{names:["mixed"]},name:"query",description:"Search query string entered by the user."}],tags:[{title:"param",type:{name:"mixed"},description:"e emitted event name: search"},{title:"param",type:{name:"mixed"},name:"query",description:"Search query string entered by the user."}]},{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const qo={title:"Components/Interaction/Selects/AvAutocomplete",component:ye,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},z=e=>({components:{AvAutocomplete:ye},setup(){const o=V([]);return{args:e,modelValue:o,MDI_ICONS:$}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),G=z.bind({});G.args={};const K=z.bind({});K.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const J=z.bind({});J.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const Q=z.bind({});Q.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const X=z.bind({});X.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,o)=>({label:`Option ${o+1}`,value:`${o+1}`}))};const Y=z.bind({});Y.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const te={render(){return{components:{AvAutocomplete:ye,AvListItem:Ye},setup(){return{modelValue:V([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:$}},template:`
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
      `}}};var Ce,Me,Ve;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(Ve=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var qe,Ee,Ne;K.parameters={...K.parameters,docs:{...(qe=K.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
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
})`,...(Ne=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var je,Re,We;J.parameters={...J.parameters,docs:{...(je=J.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
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
})`,...(We=(Re=J.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};var Fe,$e,Pe;Q.parameters={...Q.parameters,docs:{...(Fe=Q.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => ({
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
})`,...(Pe=($e=Q.parameters)==null?void 0:$e.docs)==null?void 0:Pe.source}}};var ze,Be,He;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:`args => ({
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
})`,...(He=(Be=X.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var Ue,Ge,Ke;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
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
})`,...(Ke=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Ke.source}}};var Je,Qe,Xe;te.parameters={...te.parameters,docs:{...(Je=te.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const Eo=["Default","MultiSelect","WithCustomInput","Loading","WithLoadMore","CustomDropdownSize","WithCustomItemSlotExample"];export{Y as CustomDropdownSize,G as Default,Q as Loading,K as MultiSelect,J as WithCustomInput,te as WithCustomItemSlotExample,X as WithLoadMore,Eo as __namedExportsOrder,qo as default};
