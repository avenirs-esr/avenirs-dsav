import{_ as B}from"./AvTab-h7Mg82DI.js";import{d as _,a0 as _e,a1 as ze,j as q,x as $e,v as E,q as p,o as Ue,w as Ke,A as je,s as De,l as m,t as X,k as L,a2 as Ge,p as ae,m as Le,T as Xe,$ as Je,c as W,a8 as Qe,n as te,r as v,R as Ye,y as Ze,b as en,W as G,X as oe,V as nn,z as an,N as tn,a9 as se}from"./iframe-DVRPue58.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as on}from"./AvIcon-D0PE-X24.js";import{A as sn}from"./AvTooltip-Cvb21MRJ.js";import{i as dn,g as rn}from"./utils-BIlgUrNJ.js";import{M as x,b as ie}from"./icons-B8GcT5Gy.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const ln=["id","aria-labelledby","tabindex"],O=_({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(o,a)=>_e((p(),q("div",{id:e.panelId,class:E(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[$e(o.$slots,"default",{},void 0,!0)],10,ln)),[[ze,e.isVisible]])}}),z=J(O,[["__scopeId","data-v-3bab28a1"]]);O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:"default",displayName:"TabContent",type:1,props:[{name:"panelId",global:!1,description:"ID of the associated tab panel.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"tabId",global:!1,description:"ID of the tab item.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"isVisible",global:!1,description:"Whether the tab content is visible.",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"default",type:"any",description:"Default slot for passing tab panel content.",tags:[],schema:"any",declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"});const cn=["id","tabindex","aria-selected","aria-controls","disabled"],F=_({inheritAttrs:!1,__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledTooltip:{},isLoading:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:o}){const a=o,d=Qe("button"),l=v(!1),f=W(()=>e.isSelected?"s2-bold":"s2-regular"),c={name:x.LOADING,animation:"spin"},T=W(()=>{if(e.isLoading)return{...c,size:2};if(e.icon)return{name:e.icon,size:2}}),j={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function C(r){const b=r==null?void 0:r.key,u=j[b];if(u)switch(u){case"next":a("next");break;case"previous":a("previous");break;case"first":a("first");break;case"last":a("last");break}}function y(){e.isSelected||e.disabled||e.isLoading||a("click",e.tabId)}return Ue(()=>{te(()=>{l.value=!0})}),Ke(()=>e.isSelected,async r=>{var b;!l.value||!r||e.disabled||e.isLoading||(await te(),(b=d.value)==null||b.focus())},{flush:"post"}),(r,b)=>{const u=on;return p(),q("li",{class:E(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill--md av-w-full":!e.compact}]),role:"presentation"},[je(sn,{content:m(rn)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!m(dn)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"full-width":!e.compact},{default:De(()=>[X("button",ae(r.$attrs,{id:e.tabId,ref:"button",class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,disabled:e.disabled||e.isLoading,onClick:Je(y,["prevent"]),onKeydown:b[0]||(b[0]=U=>C(U))}),[m(T)?(p(),L(u,Ge(ae({key:0},m(T))),null,16)):Le("",!0),X("span",{class:E(m(f))},Xe(e.title),3)],16,cn)]),_:1},8,["content","disabled","full-width"])],2)}}}),$=J(F,[["__scopeId","data-v-1d40bcdd"]]);F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:"default",displayName:"TabItem",type:1,props:[{name:"panelId",global:!1,description:"ID of the associated tab panel.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"tabId",global:!1,description:"ID of the tab item.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"isSelected",global:!1,description:"Whether the tab is currently selected.",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"title",global:!1,description:"Title of the tab displayed in the tab bar.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"icon",global:!1,description:"Name of the icon to display in the tab.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:"Whether the tab is displayed in compact mode.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"isLoading",global:!1,default:"false",description:"Indicates element loading status.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"click",description:"Emitted when the tab is clicked.",tags:[],type:"[tabId: string]",signature:'(event: "click", tabId: string): void',schema:["string"],declarations:[]},{name:"next",description:"Emitted when the user navigates to the next tab.",tags:[],type:"[]",signature:'(event: "next"): void',schema:[],declarations:[]},{name:"previous",description:"Emitted when the user navigates to the previous tab.",tags:[],type:"[]",signature:'(event: "previous"): void',schema:[],declarations:[]},{name:"first",description:"Emitted when the user navigates to the first tab.",tags:[],type:"[]",signature:'(event: "first"): void',schema:[],declarations:[]},{name:"last",description:"Emitted when the user navigates to the last tab.",tags:[],type:"[]",signature:'(event: "last"): void',schema:[],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"});const bn=_({name:"TabPanelContent",props:{tab:{type:Object,required:!0}},setup(e){return()=>{var a;const o=e.tab.children;return((a=o==null?void 0:o.default)==null?void 0:a.call(o))??null}}});function un(e,o,a){const d=v({"--tabs-height":"100px"});function l(){if(a.value<0||!e.value||!e.value.offsetHeight)return;const f=e.value.offsetHeight,c=o.value[a.value];if(!c||!c.offsetHeight)return;const T=c.offsetHeight;d.value["--tabs-height"]=`${f+T}px`}return{tabsStyle:d,updateTabsStyle:l}}const pn=["aria-label"],P=_({__name:"AvTabs",props:an({ariaLabel:{},compact:{type:Boolean,default:!1},lazyRender:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const o=Ye(),a=W(()=>{var n;return C(((n=o.default)==null?void 0:n.call(o))||[])}),d=Ze(e,"modelValue"),l=v(null),f=v(null),c=tn({}),{tabsStyle:T,updateTabsStyle:j}=un(f,W(()=>{var n;return Array.from(((n=l.value)==null?void 0:n.querySelectorAll(".av-tab-content"))||[])}),d);function C(n){return n.flatMap(s=>se(s)&&s.type===G&&Array.isArray(s.children)?C(s.children.filter(se)):[s])}function y(n){if(c[n])return c[n];const s=`tab-${crypto.randomUUID()}`;return c[n]=s,s}function r(){for(let n=0;n<a.value.length;n++)if(!u(a.value[n]))return n;return 0}function b(){for(let n=a.value.length-1;n>=0;n--)if(!u(a.value[n]))return n;return a.value.length-1}function u(n){var i,N,A;const s=(i=n==null?void 0:n.props)==null?void 0:i.disabled,t=((N=n==null?void 0:n.props)==null?void 0:N["is-loading"])??((A=n==null?void 0:n.props)==null?void 0:A.isLoading);return s===!0||s===""||t===!0||t===""}function U(n){const s=a.value.length;let t=(d.value+n+s)%s;const i=d.value;for(;u(a.value[t])&&(t=(t+n+s)%s,t!==i););d.value=t}function Fe(){U(-1)}function Pe(){U(1)}function We(){d.value=r()}function Be(){d.value=b()}const D=v(null);return Ue(()=>{var n;window.ResizeObserver&&(D.value=new window.ResizeObserver(()=>{j()})),(n=l.value)==null||n.querySelectorAll(".av-tab-content").forEach(s=>{var t;s&&((t=D.value)==null||t.observe(s))}),u(a.value[d.value])&&(d.value=r())}),en(()=>{var n,s;(n=l.value)==null||n.querySelectorAll(".av-tab-content").forEach(t=>{var i;t&&((i=D.value)==null||i.unobserve(t))}),(s=D.value)==null||s.disconnect()}),(n,s)=>(p(),q("div",{ref_key:"$el",ref:l,class:E(["av-tabs",{"av-tabs--compact":e.compact}]),style:nn(m(T))},[X("ul",{ref_key:"tablist",ref:f,class:E(["av-tabs__list av-col av-row--md av-px-xs av-py-none av-align-center av-gap-sm--md av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(p(!0),q(G,null,oe(m(a),(t,i)=>{var N,A,Q,Y,Z,ee,ne;return p(),L($,{key:i,"tab-id":y(i),"panel-id":`${y(i)}-panel`,title:(N=t.props)==null?void 0:N.title,icon:(A=t.props)==null?void 0:A.icon,disabled:(Q=t.props)==null?void 0:Q.disabled,"disabled-tooltip":((Y=t.props)==null?void 0:Y["disabled-tooltip"])??((Z=t.props)==null?void 0:Z.disabledTooltip),"is-loading":(ee=t.props)==null?void 0:ee["is-loading"],"data-testid":(ne=t.props)==null?void 0:ne["data-testid"],compact:e.compact,"is-selected":d.value===i,onClick:vn=>d.value=i,onNext:Pe,onPrevious:Fe,onFirst:We,onLast:Be},null,8,["tab-id","panel-id","title","icon","disabled","disabled-tooltip","is-loading","data-testid","compact","is-selected","onClick"])}),128))],10,pn),(p(!0),q(G,null,oe(m(a),(t,i)=>(p(),L(z,{key:i,"panel-id":`${y(i)}-panel`,"tab-id":y(i),"is-visible":d.value===i},{default:De(()=>[!e.lazyRender||d.value===i?(p(),L(m(bn),{key:0,tab:t},null,8,["tab"])):Le("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),S=J(P,[["__scopeId","data-v-42d405f4"]]);P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:"default",displayName:"AvTabs",type:1,props:[{name:"ariaLabel",global:!1,description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:`Allows compact display:
Underline without central pipe.`,tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"lazyRender",global:!1,default:"true",description:"If false, all tab contents are rendered in the DOM regardless of their active state.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"modelValue",global:!1,default:"0",description:"",tags:[],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: number]",signature:'(event: "update:modelValue", value: number): void',schema:["number"],declarations:[]}],slots:[{name:"default",type:"any",description:"Default slot for passing `AvTab` components.",tags:[],schema:"any",declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"});const Hn={title:"Components/Interaction/Tabs/AvTabs",component:S,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"},lazyRender:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1,lazyRender:!0},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvTabs</code> component automatically manages the addition of <code>AvTab</code> components
    provided through its <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    It supports both statically declared tabs and dynamically generated tabs using directives such as
    <code>v-for</code>.
  </span>
</p>

<p>
  <span class="b2-regular">
    The tab system allows users to navigate between different content sections within the same page.
    Individual <code>AvTab</code> entries can be disabled, display a loading state, and provide a
    <code>disabledTooltip</code> message; see the <code>AvTab</code> props.
  </span>
</p>

<p>
  <span class="b2-regular">
    Tabs help group different content sections within a limited space. This allows dense content to be
    divided into individually accessible sections, making it easier to read.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    Each tab consists of the following elements:
  </span>
</p>

<ul>
  <li>
    <span class="b2-regular">
      An optional icon to the left of the title.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A mandatory, clickable title that displays the associated content section.
    </span>
  </li>
</ul>

<p>
  <span class="b2-regular">
    If the number of tabs exceeds the width of the container, horizontal scrolling allows users to
    navigate between them.
  </span>
</p>`}}}},xe=e=>({components:{AvTabs:S,AvTab:B,TabContent:z,TabItem:$},setup(){const o=v(0);return{args:e,activeTab:o}},template:`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
      >
        <span>Second tab content</span>
      </AvTab>
    </AvTabs>
  `}),g=xe.bind({});g.args={};g.parameters={docs:{source:{code:`
        <AvTabs v-model="activeTab">
          <AvTab
            title="Tab 1"
            icon="mdi:format-list-bulleted"
          >
            <span>First tab content</span>
          </AvTab>
          <AvTab
            title="Tab 2"
            icon="mdi:calendar-month-outline"
          >
            <span>Second tab content</span>
          </AvTab>
        </AvTabs>
      `}}};const h=xe.bind({});h.args={compact:!0};h.parameters={docs:{source:{code:`
        <AvTabs compact v-model="activeTab">
          <AvTab
            title="Tab 1"
            icon="mdi:format-list-bulleted"
          >
            <span>First tab content</span>
          </AvTab>
          <AvTab
            title="Tab 2"
            icon="mdi:calendar-month-outline"
          >
            <span>Second tab content</span>
          </AvTab>
        </AvTabs>
      `}}};const K=e=>({components:{AvTabs:S,AvTab:B,TabContent:z,TabItem:$},setup(){const o=v(0);return{args:e,activeTab:o}},template:`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
        :disabled="args.disabledTab === 0"
        disabled-tooltip="This tab is disabled"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
        disabled-tooltip="This tab is disabled"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
        disabled-tooltip="This tab is disabled"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  `}),V=K.bind({});V.args={disabledTab:0};const H=K.bind({});H.args={disabledTab:1};const I=K.bind({});I.args={disabledTab:2};const Oe=e=>({components:{AvTabs:S,AvTab:B,TabContent:z,TabItem:$},setup(){const o=v(0);return{args:e,activeTab:o}},template:`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        is-loading
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  `}),k=Oe.bind({});k.args={};k.parameters={docs:{source:{code:`
        <AvTabs v-model="activeTab">
          <AvTab
            title="Tab 1"
            icon="mdi:format-list-bulleted"
          >
            <span>First tab content</span>
          </AvTab>
          <AvTab
            title="Tab 2"
            icon="mdi:calendar-month-outline"
            is-loading
          >
            <span>Second tab content</span>
          </AvTab>
          <AvTab
            title="Tab 3"
            icon="mdi:bell-notification"
          >
            <span>Third tab content</span>
          </AvTab>
        </AvTabs>
      `}}};const R=K.bind({});R.args={compact:!0,disabledTab:1};const M=Oe.bind({});M.args={compact:!0};const mn=e=>({components:{AvTabs:S,AvTab:B,MDI_ICONS:x,MS_ICONS:ie},setup(){const o=v(0),a=[{title:"National tools",icon:ie.GLOBE_LOCATION_PIN_ROUNDED,content:"National tools content"},{title:"Regional tools",icon:x.LAND_PLOTS_MARKER,content:"Regional tools content"},{title:"Local tools",icon:x.OFFICE_BUILDING_MARKER_OUTLINE,content:"Local tools content"}];return{args:e,activeTab:o,tabs:a}},template:`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        v-for="tab in tabs"
        :key="tab.title"
        :title="tab.title"
        :icon="tab.icon"
      >
        <span>{{ tab.content }}</span>
      </AvTab>
    </AvTabs>
  `}),w=mn.bind({});w.args={};const In=["Default","Compact","WithFirstTabDisabled","WithSecondTabDisabled","WithLastTabDisabled","WithLoadingTab","CompactWithDisabledTab","CompactWithLoadingTab","WithDynamicTabs"];var de,re,le;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
      >
        <span>Second tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(le=(re=g.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,be,ue;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
      >
        <span>Second tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(ue=(be=h.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var pe,me,ve;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
        :disabled="args.disabledTab === 0"
        disabled-tooltip="This tab is disabled"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
        disabled-tooltip="This tab is disabled"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
        disabled-tooltip="This tab is disabled"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(ve=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var fe,Te,ye;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
        :disabled="args.disabledTab === 0"
        disabled-tooltip="This tab is disabled"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
        disabled-tooltip="This tab is disabled"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
        disabled-tooltip="This tab is disabled"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(ye=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var ge,he,ke;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
        :disabled="args.disabledTab === 0"
        disabled-tooltip="This tab is disabled"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
        disabled-tooltip="This tab is disabled"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
        disabled-tooltip="This tab is disabled"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(ke=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var Ne,Ae,Ve;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        is-loading
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(Ve=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var He,Ie,Re;R.parameters={...R.parameters,docs:{...(He=R.parameters)==null?void 0:He.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
        :disabled="args.disabledTab === 0"
        disabled-tooltip="This tab is disabled"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
        disabled-tooltip="This tab is disabled"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
        disabled-tooltip="This tab is disabled"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(Re=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var Me,we,qe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    TabContent,
    TabItem
  },
  setup() {
    const activeTab = ref(0);
    return {
      args,
      activeTab
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        is-loading
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(qe=(we=M.parameters)==null?void 0:we.docs)==null?void 0:qe.source}}};var Ee,Se,Ce;w.parameters={...w.parameters,docs:{...(Ee=w.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab,
    MDI_ICONS,
    MS_ICONS
  },
  setup() {
    const activeTab = ref(0);
    const tabs = [{
      title: 'National tools',
      icon: MS_ICONS.GLOBE_LOCATION_PIN_ROUNDED,
      content: 'National tools content'
    }, {
      title: 'Regional tools',
      icon: MDI_ICONS.LAND_PLOTS_MARKER,
      content: 'Regional tools content'
    }, {
      title: 'Local tools',
      icon: MDI_ICONS.OFFICE_BUILDING_MARKER_OUTLINE,
      content: 'Local tools content'
    }];
    return {
      args,
      activeTab,
      tabs
    };
  },
  template: \`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        v-for="tab in tabs"
        :key="tab.title"
        :title="tab.title"
        :icon="tab.icon"
      >
        <span>{{ tab.content }}</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(Ce=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};export{h as Compact,R as CompactWithDisabledTab,M as CompactWithLoadingTab,g as Default,w as WithDynamicTabs,V as WithFirstTabDisabled,I as WithLastTabDisabled,k as WithLoadingTab,H as WithSecondTabDisabled,In as __namedExportsOrder,Hn as default};
