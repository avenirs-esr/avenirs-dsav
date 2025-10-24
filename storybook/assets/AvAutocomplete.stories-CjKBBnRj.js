import{A as vt,a as Ye}from"./AvListItem-BAAyOkjH.js";import{s as gt,o as me,J as ht,A as pe,a0 as Ze,a1 as bt,a2 as yt,X as St,a3 as x,a4 as oe,c as M,l as we,y as v,d as ae,N as se,r as V,b as fe,a as k,k as ve,p as At,z as _t,j as Z,B as W,f as et,g as $,w as q,m as tt,e as I,F as ue,i as ot,a5 as ne,Q as nt,R as Ie,S as Ot,M as wt}from"./iframe-BDv7I-hC.js";import{A as It}from"./AvIcon-DfXcdKVl.js";import{M as F}from"./icons-DLnh1uvi.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as lt}from"./AvButton-C7MDLG-c.js";import{A as Tt}from"./AvInput-BjTZL0am.js";import"./preload-helper-ILsKNznc.js";import"./iconify-Ds45UQOM.js";import"./string-BZgCOP9D.js";var R=(e=>(e.LOADING="loading",e.NO_OPTIONS="no-options",e.HAS_OPTIONS="has-options",e))(R||{});const rt=Symbol("AvAutocompleteContext");function ge(){const e=gt(rt);if(!e)throw new Error("useAutocompleteContext must be used within AvAutocomplete component");return e}function at(e){return bt()?(yt(e),!0):!1}const xt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Lt=e=>e!=null,kt=Object.prototype.toString,Dt=e=>kt.call(e)==="[object Object]",z=()=>{};function st(e,o){function n(...r){return new Promise((c,i)=>{Promise.resolve(e(()=>o.apply(this,r),{fn:o,thisArg:this,args:r})).then(c).catch(i)})}return n}function Ct(e,o={}){let n,r,c=z;const i=t=>{clearTimeout(t),c(),c=z};let d;return t=>{const a=x(e),m=x(o.maxWait);return n&&i(n),a<=0||m!==void 0&&m<=0?(r&&(i(r),r=void 0),Promise.resolve(t())):new Promise((y,S)=>{c=o.rejectOnCancel?S:y,d=t,m&&!r&&(r=setTimeout(()=>{n&&i(n),r=void 0,y(d())},m)),n=setTimeout(()=>{r&&i(r),r=void 0,y(t())},a)})}}function Mt(...e){let o=0,n,r=!0,c=z,i,d,l,t,a;!St(e[0])&&typeof e[0]=="object"?{delay:d,trailing:l=!0,leading:t=!0,rejectOnCancel:a=!1}=e[0]:[d,l=!0,t=!0,a=!1]=e;const m=()=>{n&&(clearTimeout(n),n=void 0,c(),c=z)};return S=>{const b=x(d),_=Date.now()-o,O=()=>i=S();return m(),b<=0?(o=Date.now(),O()):(_>b&&(t||!r)?(o=Date.now(),O()):l&&(i=new Promise((T,w)=>{c=a?w:T,n=setTimeout(()=>{o=Date.now(),r=!0,T(O()),m()},Math.max(0,b-_))})),!t&&!n&&(n=setTimeout(()=>r=!0,b)),r=!1,i)}}function le(e){return Array.isArray(e)?e:[e]}function Vt(e){return Ze()}function Et(e,o=200,n={}){return st(Ct(o,n),e)}function Nt(e,o=200,n=!1,r=!0,c=!1){return st(Mt(o,n,r,c),e)}function jt(e,o=!0,n){Vt()?me(e,n):o?e():ht(e)}function Rt(e,o,n){return pe(e,o,{...n,immediate:!0})}const he=xt?window:void 0;function be(e){var o;const n=x(e);return(o=n==null?void 0:n.$el)!=null?o:n}function Te(...e){const o=[],n=()=>{o.forEach(l=>l()),o.length=0},r=(l,t,a,m)=>(l.addEventListener(t,a,m),()=>l.removeEventListener(t,a,m)),c=M(()=>{const l=le(x(e[0])).filter(t=>t!=null);return l.every(t=>typeof t!="string")?l:void 0}),i=Rt(()=>{var l,t;return[(t=(l=c.value)==null?void 0:l.map(a=>be(a)))!=null?t:[he].filter(a=>a!=null),le(x(c.value?e[1]:e[0])),le(v(c.value?e[2]:e[1])),x(c.value?e[3]:e[2])]},([l,t,a,m])=>{if(n(),!(l!=null&&l.length)||!(t!=null&&t.length)||!(a!=null&&a.length))return;const y=Dt(m)?{...m}:m;o.push(...l.flatMap(S=>t.flatMap(b=>a.map(_=>r(S,b,_,y)))))},{flush:"post"}),d=()=>{i(),n()};return at(n),d}function qt(){const e=oe(!1),o=Ze();return o&&me(()=>{e.value=!0},o),e}function Wt(e){const o=qt();return M(()=>(o.value,!!e()))}function $t(e,o,n={}){const{window:r=he,...c}=n;let i;const d=Wt(()=>r&&"MutationObserver"in r),l=()=>{i&&(i.disconnect(),i=void 0)},t=M(()=>{const S=x(e),b=le(S).map(be).filter(Lt);return new Set(b)}),a=pe(t,S=>{l(),d.value&&S.size&&(i=new MutationObserver(o),S.forEach(b=>i.observe(b,c)))},{immediate:!0,flush:"post"}),m=()=>i==null?void 0:i.takeRecords(),y=()=>{a(),l()};return at(y),{isSupported:d,stop:y,takeRecords:m}}const xe=1;function Ft(e,o={}){const{throttle:n=0,idle:r=200,onStop:c=z,onScroll:i=z,offset:d={left:0,right:0,top:0,bottom:0},observe:l={mutation:!1},eventListenerOptions:t={capture:!1,passive:!0},behavior:a="auto",window:m=he,onError:y=p=>{console.error(p)}}=o,S=typeof l=="boolean"?{mutation:l}:l,b=oe(0),_=oe(0),O=M({get(){return b.value},set(p){w(p,void 0)}}),T=M({get(){return _.value},set(p){w(void 0,p)}});function w(p,N){var L,P,H,ee;if(!m)return;const C=x(e);if(!C)return;(H=C instanceof Document?m.document.body:C)==null||H.scrollTo({top:(L=x(N))!=null?L:T.value,left:(P=x(p))!=null?P:O.value,behavior:x(a)});const E=((ee=C==null?void 0:C.document)==null?void 0:ee.documentElement)||(C==null?void 0:C.documentElement)||C;O!=null&&(b.value=E.scrollLeft),T!=null&&(_.value=E.scrollTop)}const g=oe(!1),s=we({left:!0,right:!1,top:!0,bottom:!1}),u=we({left:!1,right:!1,top:!1,bottom:!1}),f=p=>{g.value&&(g.value=!1,u.left=!1,u.right=!1,u.top=!1,u.bottom=!1,c(p))},h=Et(f,n+r),A=p=>{var N;if(!m)return;const L=((N=p==null?void 0:p.document)==null?void 0:N.documentElement)||(p==null?void 0:p.documentElement)||be(p),{display:P,flexDirection:H,direction:ee}=getComputedStyle(L),C=ee==="rtl"?-1:1,E=L.scrollLeft;u.left=E<b.value,u.right=E>b.value;const Se=Math.abs(E*C)<=(d.left||0),Ae=Math.abs(E*C)+L.clientWidth>=L.scrollWidth-(d.right||0)-xe;P==="flex"&&H==="row-reverse"?(s.left=Ae,s.right=Se):(s.left=Se,s.right=Ae),b.value=E;let j=L.scrollTop;p===m.document&&!j&&(j=m.document.body.scrollTop),u.top=j<_.value,u.bottom=j>_.value;const _e=Math.abs(j)<=(d.top||0),Oe=Math.abs(j)+L.clientHeight>=L.scrollHeight-(d.bottom||0)-xe;P==="flex"&&H==="column-reverse"?(s.top=Oe,s.bottom=_e):(s.top=_e,s.bottom=Oe),_.value=j},D=p=>{var N;if(!m)return;const L=(N=p.target.documentElement)!=null?N:p.target;A(L),g.value=!0,h(p),i(p)};return Te(e,"scroll",n?Nt(D,n,!0,!1):D,t),jt(()=>{try{const p=x(e);if(!p)return;A(p)}catch(p){y(p)}}),S!=null&&S.mutation&&e!=null&&e!==m&&e!==document&&$t(e,()=>{const p=x(e);p&&A(p)},{attributes:!0,childList:!0,subtree:!0}),Te(e,"scrollend",f,t),{x:O,y:T,isScrolling:g,arrivedState:s,directions:u,measure(){const p=x(e);m&&p&&A(p)}}}var zt=typeof global=="object"&&global&&global.Object===Object&&global,Bt=typeof self=="object"&&self&&self.Object===Object&&self,it=zt||Bt||Function("return this")(),re=it.Symbol,ct=Object.prototype,Pt=ct.hasOwnProperty,Ht=ct.toString,U=re?re.toStringTag:void 0;function Ut(e){var o=Pt.call(e,U),n=e[U];try{e[U]=void 0;var r=!0}catch{}var c=Ht.call(e);return r&&(o?e[U]=n:delete e[U]),c}var Gt=Object.prototype,Jt=Gt.toString;function Kt(e){return Jt.call(e)}var Qt="[object Null]",Xt="[object Undefined]",Le=re?re.toStringTag:void 0;function Yt(e){return e==null?e===void 0?Xt:Qt:Le&&Le in Object(e)?Ut(e):Kt(e)}function Zt(e){return e!=null&&typeof e=="object"}var eo="[object Symbol]";function to(e){return typeof e=="symbol"||Zt(e)&&Yt(e)==eo}var oo=/\s/;function no(e){for(var o=e.length;o--&&oo.test(e.charAt(o)););return o}var lo=/^\s+/;function ro(e){return e&&e.slice(0,no(e)+1).replace(lo,"")}function de(e){var o=typeof e;return e!=null&&(o=="object"||o=="function")}var ke=NaN,ao=/^[-+]0x[0-9a-f]+$/i,so=/^0b[01]+$/i,io=/^0o[0-7]+$/i,co=parseInt;function De(e){if(typeof e=="number")return e;if(to(e))return ke;if(de(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=de(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=ro(e);var n=so.test(e);return n||io.test(e)?co(e.slice(2),n?2:8):ao.test(e)?ke:+e}var ce=function(){return it.Date.now()},uo="Expected a function",mo=Math.max,po=Math.min;function ut(e,o,n){var r,c,i,d,l,t,a=0,m=!1,y=!1,S=!0;if(typeof e!="function")throw new TypeError(uo);o=De(o)||0,de(n)&&(m=!!n.leading,y="maxWait"in n,i=y?mo(De(n.maxWait)||0,o):i,S="trailing"in n?!!n.trailing:S);function b(h){var A=r,D=c;return r=c=void 0,a=h,d=e.apply(D,A),d}function _(h){return a=h,l=setTimeout(w,o),m?b(h):d}function O(h){var A=h-t,D=h-a,p=o-A;return y?po(p,i-D):p}function T(h){var A=h-t,D=h-a;return t===void 0||A>=o||A<0||y&&D>=i}function w(){var h=ce();if(T(h))return g(h);l=setTimeout(w,O(h))}function g(h){return l=void 0,S&&r?b(h):(r=c=void 0,d)}function s(){l!==void 0&&clearTimeout(l),a=0,r=t=c=l=void 0}function u(){return l===void 0?d:g(ce())}function f(){var h=ce(),A=T(h);if(r=arguments,c=this,t=h,A){if(l===void 0)return _(t);if(y)return clearTimeout(l),l=setTimeout(w,o),b(t)}return l===void 0&&(l=setTimeout(w,o)),d}return f.cancel=s,f.flush=u,f}const fo={key:0,class:"av-autocomplete-dropdown__loading"},vo={key:1,class:"av-autocomplete-dropdown__empty"},go={key:1,class:"av-autocomplete-dropdown__empty-text"},dt=ae({__name:"AvAutocompleteDropdown",emits:["loadMore"],setup(e,{expose:o,emit:n}){const r=n,c=se(),{selectedItems:i,searchQuery:d,isOpen:l,props:t,getOptionId:a,getDisplayLabel:m}=ge(),y=V(),S=V(),b=M(()=>{if(!t.options)return[];if(t.serverSideFiltering)return t.maxResults?t.options.slice(0,t.maxResults):t.options;const s=d.value.toLowerCase().trim();if(!s){const f=t.options;return t.maxResults?f.slice(0,t.maxResults):f}let u;return t.filterOptions?u=t.filterOptions(t.options,s):u=t.options.filter(f=>m(f).toLowerCase().includes(s)),t.maxResults?u.slice(0,t.maxResults):u}),_=M(()=>t.loading?R.LOADING:l.value&&t.options&&t.options.length>0&&b.value.length>0?R.HAS_OPTIONS:R.NO_OPTIONS);function O(s){return i.value.some(u=>a(u)===a(s))}function T(s){if(!t.multiSelect){i.value=[s],l.value=!1,d.value="";return}const u=i.value,f=a(s);u.some(A=>a(A)===f)?i.value=u.filter(A=>a(A)!==f):i.value=[...u,s]}const{arrivedState:w}=Ft(S,{throttle:100}),g=ut(()=>{r("loadMore")},t.loadMoreThrottleDelay);return pe(()=>w.bottom,s=>{t.enableLoadMore&&s&&l.value&&g()}),fe(()=>{g.cancel()}),o({dropdownRef:y}),(s,u)=>v(l)?(I(),k("div",{key:0,ref_key:"dropdownRef",ref:y,class:_t(["av-autocomplete-dropdown",v(t).dropdownClass]),style:At({width:v(t).dropdownWidth,maxHeight:v(t).maxDropdownHeight})},[v(_)===v(R).LOADING?(I(),k("div",fo,[W(It,{name:v(F).LOADING_OUTLINE,size:1.5,class:"av-autocomplete-dropdown__spinner"},null,8,["name"]),u[0]||(u[0]=et("span",{class:"av-autocomplete-dropdown__loading-text"},"Loading...",-1))])):v(_)===v(R).NO_OPTIONS?(I(),k("div",vo,[c.empty?$(s.$slots,"empty",{key:0},void 0,!0):(I(),k("div",go," No results found "))])):(I(),Z(vt,tt({key:2,ref_key:"listRef",ref:S},v(t).listOptions,{class:["av-autocomplete-dropdown__options",v(t).scrollbarClass]}),{default:q(()=>[(I(!0),k(ue,null,ot(v(b),f=>(I(),k(ue,{key:v(a)(f)},[c.item?$(s.$slots,"item",{key:0,option:f,isSelected:O(f),toggle:()=>T(f)},void 0,!0):(I(),Z(Ye,{key:1,title:v(m)(f),icon:O(f)?v(F).CHECK:void 0,selected:O(f),clickable:"","on-click":()=>T(f),"hover-background-color":"var(--light-background-neutral)","color-on-hover":"var(--base)"},null,8,["title","icon","selected","on-click"]))],64))),128))]),_:3},16,["class"]))],6)):ve("",!0)}}),ho=ie(dt,[["__scopeId","data-v-3471432d"]]);dt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteDropdown",description:"",tags:{},expose:[{name:"dropdownRef"}],events:[{name:"loadMore"}],slots:[{name:"empty"},{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteDropdown.vue"]};const bo={class:"av-autocomplete-input"},yo={key:0,class:"av-autocomplete-input__suffix"},mt=ae({__name:"AvAutocompleteInput",emits:["search","clear"],setup(e,{expose:o,emit:n}){const r=n,c=se(),{selectedItems:i,searchQuery:d,isOpen:l,props:t,inputId:a,handleBlur:m,getDisplayLabel:y}=ge(),S=V(),b=M(()=>!t.multiSelect&&i.value.length>0?y(i.value[0]):t.multiSelect&&i.value.length>0?t.showSelectedSection?`${i.value.length} element(s) selected`:i.value.map(y).join(", "):d.value),_=M(()=>{var s;return((s=t.inputOptions)==null?void 0:s.placeholder)||"Search..."}),O=ut(s=>{d.value=s,r("search",s)},t.debounceDelay);function T(s){d.value=String(s||""),O(d.value)}function w(){l.value=!0}function g(){i.value=[],d.value="",r("clear")}return fe(()=>{O.cancel()}),o({inputRef:S,searchQuery:M(()=>d.value)}),(s,u)=>(I(),k("div",bo,[W(Tt,tt({id:v(a),ref_key:"inputRef",ref:S,"model-value":v(b),placeholder:v(_)},v(t).inputOptions,{"onUpdate:modelValue":T,onFocus:w,onBlur:v(m),onClick:w}),ne({_:2},[c.requiredTip?{name:"requiredTip",fn:q(()=>[(I(),Z(nt(c.requiredTip)))]),key:"0"}:void 0]),1040,["id","model-value","placeholder","onBlur"]),v(i).length>0?(I(),k("div",yo,[W(lt,{label:"Clear selected items",icon:v(F).CLOSE_CIRCLE_OUTLINE,"icon-only":"","icon-scale":.8,size:"sm",variant:"DEFAULT",theme:"SECONDARY","on-click":g},null,8,["icon"])])):ve("",!0)]))}}),So=ie(mt,[["__scopeId","data-v-87b17010"]]);mt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteInput",description:"",tags:{},expose:[{name:"inputRef"},{name:"searchQuery"}],events:[{name:"search",type:{names:["string"]}},{name:"clear"}],slots:[{name:"requiredTip"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteInput.vue"]};const Ao={key:0,class:"av-autocomplete-selected-tags"},pt=ae({__name:"AvAutocompleteSelectedTags",setup(e){const o=se(),{selectedItems:n,props:r,getOptionId:c,getDisplayLabel:i}=ge();function d(l){const t=n.value,a=c(l);n.value=t.filter(m=>c(m)!==a)}return(l,t)=>v(r).multiSelect&&v(n).length>0&&v(r).showSelectedSection?(I(),k("div",Ao,[(I(!0),k(ue,null,ot(v(n),a=>(I(),k("div",{key:v(c)(a),class:"av-autocomplete-selected-tags__item"},[o.selectedItem?$(l.$slots,"selectedItem",{key:0,option:a,remove:()=>d(a)},void 0,!0):(I(),Z(lt,{key:1,label:v(i)(a),icon:v(F).CLOSE_CIRCLE_OUTLINE,"icon-right":"",size:"sm",variant:"OUTLINED",theme:"SECONDARY","on-click":()=>d(a)},null,8,["label","icon","on-click"]))]))),128))])):ve("",!0)}}),_o=ie(pt,[["__scopeId","data-v-ec438588"]]);pt.__docgenInfo={exportName:"default",displayName:"AvAutocompleteSelectedTags",description:"",tags:{},slots:[{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocompleteSelectedTags.vue"]};const Oo={class:"av-autocomplete"},ft=ae({__name:"AvAutocomplete",props:Ie({id:{},inputOptions:{default:()=>({})},options:{},multiSelect:{type:Boolean,default:!1},getOptionLabel:{},getOptionKey:{},filterOptions:{},dropdownWidth:{default:"100%"},maxDropdownHeight:{default:"20rem"},listOptions:{default:()=>({size:"small",ariaLabel:"Available options list"})},scrollbarClass:{default:"av-autocomplete__scrollbar--default"},dropdownClass:{default:"av-autocomplete__dropdown--default"},loading:{type:Boolean,default:!1},debounceDelay:{default:300},maxResults:{},enableLoadMore:{type:Boolean,default:!1},showSelectedSection:{type:Boolean,default:!1},blurCloseDelay:{default:150},loadMoreThrottleDelay:{default:200},serverSideFiltering:{type:Boolean,default:!1}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:Ie(["search","loadMore","clear"],["update:modelValue"]),setup(e,{emit:o}){const n=e,r=o,c=se(),i=Ot(e,"modelValue"),d=V(!1),l=V(""),t=V(),a=V(),m=V(),y=M(()=>n.id||`av-autocomplete-${crypto.randomUUID()}`);function S(g){l.value=g,r("search",g)}function b(g){var s,u;(u=(s=m.value)==null?void 0:s.dropdownRef)!=null&&u.contains(g.relatedTarget)||setTimeout(()=>{d.value=!1},n.blurCloseDelay)}function _(g){return n.getOptionKey?n.getOptionKey(g):g.value}function O(g){return n.getOptionLabel?n.getOptionLabel(g):g.label}wt(rt,{selectedItems:i,searchQuery:l,isOpen:d,props:n,inputId:y,handleBlur:b,getOptionId:_,getDisplayLabel:O});function w(g){var f,h,A,D,p;const s=g.target,u=(f=a.value)==null?void 0:f.inputRef;!((h=u==null?void 0:u.contains)!=null&&h.call(u,s))&&!((A=t.value)!=null&&A.contains(s))&&!((p=(D=m.value)==null?void 0:D.dropdownRef)!=null&&p.contains(s))&&(d.value=!1)}return me(()=>{document.addEventListener("click",w)}),fe(()=>{document.removeEventListener("click",w)}),(g,s)=>(I(),k("div",Oo,[et("div",{ref_key:"wrapperRef",ref:t,class:"av-autocomplete__wrapper"},[W(So,{ref_key:"inputRef",ref:a,onSearch:S,onClear:s[0]||(s[0]=u=>r("clear"))},ne({_:2},[c.requiredTip?{name:"requiredTip",fn:q(()=>[(I(),Z(nt(c.requiredTip)))]),key:"0"}:void 0]),1536),W(ho,{ref_key:"dropdownRef",ref:m,onLoadMore:s[1]||(s[1]=u=>r("loadMore"))},ne({_:2},[c.item?{name:"item",fn:q(({option:u,isSelected:f,toggle:h})=>[$(g.$slots,"item",{option:u,isSelected:f,toggle:h},void 0,!0)]),key:"0"}:void 0,c.empty?{name:"empty",fn:q(()=>[$(g.$slots,"empty",{},void 0,!0)]),key:"1"}:void 0]),1536)],512),W(_o,null,ne({_:2},[c.selectedItem?{name:"selectedItem",fn:q(({option:u,remove:f})=>[$(g.$slots,"selectedItem",{option:u,remove:f},void 0,!0)]),key:"0"}:void 0]),1024)]))}}),ye=ie(ft,[["__scopeId","data-v-a8c4de33"]]);ft.__docgenInfo={exportName:"default",displayName:"AvAutocomplete",description:"",tags:{},props:[{name:"inputOptions",defaultValue:{func:!1,value:"() => ({})"}},{name:"multiSelect",defaultValue:{func:!1,value:"false"}},{name:"dropdownWidth",defaultValue:{func:!1,value:"'100%'"}},{name:"maxDropdownHeight",defaultValue:{func:!1,value:"'20rem'"}},{name:"listOptions",defaultValue:{func:!1,value:`() => ({
  size: 'small',
  ariaLabel: 'Available options list'
})`}},{name:"scrollbarClass",defaultValue:{func:!1,value:"'av-autocomplete__scrollbar--default'"}},{name:"dropdownClass",defaultValue:{func:!1,value:"'av-autocomplete__dropdown--default'"}},{name:"loading",defaultValue:{func:!1,value:"false"}},{name:"debounceDelay",defaultValue:{func:!1,value:"300"}},{name:"enableLoadMore",defaultValue:{func:!1,value:"false"}},{name:"showSelectedSection",defaultValue:{func:!1,value:"false"}},{name:"blurCloseDelay",defaultValue:{func:!1,value:"150"}},{name:"loadMoreThrottleDelay",defaultValue:{func:!1,value:"200"}},{name:"serverSideFiltering",defaultValue:{func:!1,value:"false"}}],events:[{name:"search",type:{names:["string"]},description:"Emitted when user searches for options.",properties:[{type:{names:["mixed"]},description:"e emitted event name: search"},{type:{names:["mixed"]},name:"query",description:"Search query string entered by the user."}],tags:[{title:"param",type:{name:"mixed"},description:"e emitted event name: search"},{title:"param",type:{name:"mixed"},name:"query",description:"Search query string entered by the user."}]},{name:"loadMore",description:"Emitted when more options should be loaded (infinite scroll)."},{name:"clear",description:"Emitted when the selection is cleared."}],slots:[{name:"item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"is-selected",title:"binding"},{name:"toggle",title:"binding"}],description:"Slot for customizing how each option is displayed in the dropdown.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The option object being rendered"},{title:"param",type:{name:"mixed"},name:"isSelected",description:"Whether the option is currently selected"},{title:"param",type:{name:"mixed"},name:"toggle",description:"Function to toggle the option's selected state"}]}},{name:"empty",description:"Slot for customizing the empty state when no options match the search."},{name:"selectedItem",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"remove",title:"binding"}],description:"Slot for customizing how selected items are displayed as tags.",tags:{params:[{title:"param",type:{name:"mixed"},name:"option",description:"The selected option object"},{title:"param",type:{name:"mixed"},name:"remove",description:"Function to remove this option from selection"}]}},{name:"requiredTip",description:"Slot for displaying a required field tip in the input."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvAutocomplete/AvAutocomplete.vue"]};const Eo={title:"Components/Interaction/Selects/AvAutocomplete",component:ye,tags:["autodocs"],argTypes:{id:{control:"text"},inputOptions:{control:"object",description:"Input-related options and configuration"},options:{control:"object"},multiSelect:{control:"boolean"},getOptionLabel:{control:!1},getOptionKey:{control:!1},filterOptions:{control:!1},dropdownWidth:{control:"text"},maxDropdownHeight:{control:"text"},listOptions:{control:"object"},scrollbarClass:{control:"text"},dropdownClass:{control:"text"},loading:{control:"boolean"},debounceDelay:{control:"number"},maxResults:{control:"number"},enableLoadMore:{control:"boolean"},showSelectedSection:{control:"boolean"},blurCloseDelay:{control:"number"},loadMoreThrottleDelay:{control:"number"},serverSideFiltering:{control:"boolean"},requiredTip:{description:"Slot for displaying a required field tip in the input",table:{category:"slots",type:{summary:"VNode"}}},item:{description:"Slot for customizing how each option is displayed in the dropdown",table:{category:"slots",type:{summary:"{ option: T; isSelected: boolean; toggle: () => void } => VNode"}}},selectedItem:{description:"Slot for customizing how selected items are displayed",table:{category:"slots",type:{summary:"{ option: T; remove: () => void } => VNode"}}},empty:{description:"Slot for customizing the empty state when no options match",table:{category:"slots",type:{summary:"VNode"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}],inputOptions:{label:"Select options",placeholder:"Search for options..."},multiSelect:!1,dropdownWidth:"100%",maxDropdownHeight:"20rem",loading:!1,debounceDelay:300,enableLoadMore:!1,showSelectedSection:!1,blurCloseDelay:150,loadMoreThrottleDelay:200,serverSideFiltering:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Selects - <code>AvAutocomplete</code></h1>

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

<p><span class="b2-regular">The autocomplete consists of an input field, dropdown with filterable options, and optional selected items section for multi-select mode.</span></p>`}}}},B=e=>({components:{AvAutocomplete:ye},setup(){const o=V([]);return{args:e,modelValue:o,MDI_ICONS:F}},template:`<AvAutocomplete v-bind="args" v-model="modelValue" @search="(query) => console.log('Search:', query)" @load-more="() => console.log('Load more')" />`}),G=B.bind({});G.args={};const J=B.bind({});J.args={multiSelect:!0,showSelectedSection:!0,inputOptions:{label:"Multi-select options",placeholder:"Search and select multiple options..."}};const K=B.bind({});K.args={inputOptions:{label:"Custom input",placeholder:"Start typing to search...",required:!0}};const Q=B.bind({});Q.args={loading:!0,inputOptions:{label:"Loading state",placeholder:"Loading options..."}};const X=B.bind({});X.args={enableLoadMore:!0,maxDropdownHeight:"15rem",inputOptions:{label:"Infinite scroll",placeholder:"Scroll to load more..."},options:Array.from({length:20},(e,o)=>({label:`Option ${o+1}`,value:`${o+1}`}))};const Y=B.bind({});Y.args={dropdownWidth:"25rem",maxDropdownHeight:"12rem",inputOptions:{label:"Custom dropdown size",placeholder:"Fixed width dropdown..."}};const te={render(){return{components:{AvAutocomplete:ye,AvListItem:Ye},setup(){return{modelValue:V([]),customOptions:[{label:"John Doe",value:"john",role:"Developer",department:"Engineering"},{label:"Jane Smith",value:"jane",role:"Designer",department:"Design"},{label:"Bob Johnson",value:"bob",role:"Manager",department:"Product"},{label:"Alice Brown",value:"alice",role:"Analyst",department:"Marketing"}],MDI_ICONS:F}},template:`
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
})`,...(Ve=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ee,Ne,je;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
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
})`,...(je=(Ne=J.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Re,qe,We;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(We=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};var $e,Fe,ze;Q.parameters={...Q.parameters,docs:{...($e=Q.parameters)==null?void 0:$e.docs,source:{originalSource:`args => ({
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
})`,...(ze=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var Be,Pe,He;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
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
})`,...(He=(Pe=X.parameters)==null?void 0:Pe.docs)==null?void 0:He.source}}};var Ue,Ge,Je;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
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
})`,...(Je=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;te.parameters={...te.parameters,docs:{...(Ke=te.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const No=["Default","MultiSelect","WithCustomInput","Loading","WithLoadMore","CustomDropdownSize","WithCustomItemSlotExample"];export{Y as CustomDropdownSize,G as Default,Q as Loading,J as MultiSelect,K as WithCustomInput,te as WithCustomItemSlotExample,X as WithLoadMore,No as __namedExportsOrder,Eo as default};
