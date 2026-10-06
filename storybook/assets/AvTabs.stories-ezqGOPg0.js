import{_ as j}from"./AvTab-ByA942Lx.js";import{u as L,ar as xe,an as Fe,n as q,a6 as De,P as w,$ as b,X as Re,O as _,ao as Le,r as Pe,aq as Ie,ag as p,k as K,l as C,Q as Oe,L as ee,m as qe,ab as We,at as ze,j as D,al as $e,a4 as m,ak as Be,aj as Ke,Z as je,F as ne,a5 as ae,R as Ge,K as Qe,a2 as Xe}from"./iframe-Byt39uED.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Ze}from"./AvIcon-dm5Wf1UN.js";import{A as Je}from"./AvTooltip-Cf8EcfLu.js";import{i as Ye,g as _e}from"./utils-BIlgUrNJ.js";import{M as en}from"./icons-B6bk2eYx.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const nn=["id","aria-labelledby","tabindex"],U=L({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(o,t)=>xe((b(),q("div",{id:e.panelId,class:w(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[De(o.$slots,"default",{},void 0,!0)],10,nn)),[[Fe,e.isVisible]])}}),P=G(U,[["__scopeId","data-v-3bab28a1"]]);U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:"default",displayName:"TabContent",type:1,props:[{name:"panelId",global:!1,description:"ID of the associated tab panel.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"tabId",global:!1,description:"ID of the tab item.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"isVisible",global:!1,description:"Whether the tab content is visible.",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"default",type:"any",description:"Default slot for passing tab panel content.",tags:[],schema:"any",declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"});const an=["id","tabindex","aria-selected","aria-controls","disabled"],x=L({inheritAttrs:!1,__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledTooltip:{}},emits:["click","next","previous","first","last"],setup(e,{emit:o}){const t=o,s=$e("button"),l=m(!1),v=D(()=>e.isSelected?"s2-bold":"s2-regular"),c={name:en.LOADING,animation:"spin"},y=D(()=>{if(e.isLoading)return{...c,size:2};if(e.icon)return{name:e.icon,size:2}}),$={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function g(u){const r=u==null?void 0:u.key,f=$[r];if(f)switch(f){case"next":t("next");break;case"previous":t("previous");break;case"first":t("first");break;case"last":t("last");break}}function E(){e.isSelected||e.disabled||e.isLoading||t("click",e.tabId)}return Re(()=>{_(()=>{l.value=!0})}),Le(()=>e.isSelected,async u=>{var r;!l.value||!u||e.disabled||e.isLoading||(await _(),(r=s.value)==null||r.focus())},{flush:"post"}),(u,r)=>{const f=Ze;return b(),q("li",{class:w(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill--md av-w-full":!e.compact}]),role:"presentation"},[Pe(Je,{content:p(_e)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!p(Ye)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"full-width":!e.compact},{default:Ie(()=>[K("button",ee(u.$attrs,{id:e.tabId,ref:"button",class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,disabled:e.disabled||e.isLoading,onClick:ze(E,["prevent"]),onKeydown:r[0]||(r[0]=B=>g(B))}),[p(y)?(b(),C(f,Oe(ee({key:0},p(y))),null,16)):qe("",!0),K("span",{class:w(p(v))},We(e.title),3)],16,an)]),_:1},8,["content","disabled","full-width"])],2)}}}),O=G(x,[["__scopeId","data-v-62797f7e"]]);x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"TabItem",type:1,props:[{name:"panelId",global:!1,description:"ID of the associated tab panel.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"tabId",global:!1,description:"ID of the tab item.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"isSelected",global:!1,description:"Whether the tab is currently selected.",tags:[],required:!0,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"title",global:!1,description:"Title of the tab displayed in the tab bar.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"icon",global:!1,description:"Name of the icon to display in the tab.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:"Whether the tab is displayed in compact mode.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"isLoading",global:!1,default:"false",description:"Whether the tab item is in loading state.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"click",description:"Emitted when the tab is clicked.",tags:[],type:"[tabId: string]",signature:'(event: "click", tabId: string): void',schema:["string"],declarations:[]},{name:"next",description:"Emitted when the user navigates to the next tab.",tags:[],type:"[]",signature:'(event: "next"): void',schema:[],declarations:[]},{name:"previous",description:"Emitted when the user navigates to the previous tab.",tags:[],type:"[]",signature:'(event: "previous"): void',schema:[],declarations:[]},{name:"first",description:"Emitted when the user navigates to the first tab.",tags:[],type:"[]",signature:'(event: "first"): void',schema:[],declarations:[]},{name:"last",description:"Emitted when the user navigates to the last tab.",tags:[],type:"[]",signature:'(event: "last"): void',schema:[],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"});const tn=L({name:"TabPanelContent",props:{tab:{type:Object,required:!0}},setup(e){return()=>{var t;const o=e.tab.children;return((t=o==null?void 0:o.default)==null?void 0:t.call(o))??null}}});function on(e,o,t){const s=m({"--tabs-height":"100px"});function l(){if(t.value<0||!e.value||!e.value.offsetHeight)return;const v=e.value.offsetHeight,c=o.value[t.value];if(!c||!c.offsetHeight)return;const y=c.offsetHeight;s.value["--tabs-height"]=`${v+y}px`}return{tabsStyle:s,updateTabsStyle:l}}const dn=["aria-label"],F=L({__name:"AvTabs",props:Qe({ariaLabel:{},compact:{type:Boolean,default:!1},lazyRender:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const o=Be(),t=D(()=>{var n;return((n=o.default)==null?void 0:n.call(o))||[]}),s=Ke(e,"modelValue"),l=m(null),v=m(null),c=Xe({}),{tabsStyle:y,updateTabsStyle:$}=on(v,D(()=>{var n;return Array.from(((n=l.value)==null?void 0:n.querySelectorAll(".av-tab-content"))||[])}),s);function g(n){if(c[n])return c[n];const i=`tab-${crypto.randomUUID()}`;return c[n]=i,i}function E(){for(let n=0;n<t.value.length;n++)if(!r(t.value[n]))return n;return 0}function u(){for(let n=t.value.length-1;n>=0;n--)if(!r(t.value[n]))return n;return t.value.length-1}function r(n){var d,N,V;const i=(d=n==null?void 0:n.props)==null?void 0:d.disabled,a=((N=n==null?void 0:n.props)==null?void 0:N["is-loading"])??((V=n==null?void 0:n.props)==null?void 0:V.isLoading);return i===!0||i===""||a===!0||a===""}function f(n){const i=t.value.length;let a=(s.value+n+i)%i;const d=s.value;for(;r(t.value[a])&&(a=(a+n+i)%i,a!==d););s.value=a}function B(){f(-1)}function Se(){f(1)}function Ce(){s.value=E()}function Ue(){s.value=u()}const S=m(null);return Re(()=>{var n;window.ResizeObserver&&(S.value=new window.ResizeObserver(()=>{$()})),(n=l.value)==null||n.querySelectorAll(".av-tab-content").forEach(i=>{var a;i&&((a=S.value)==null||a.observe(i))}),r(t.value[s.value])&&(s.value=E())}),je(()=>{var n,i;(n=l.value)==null||n.querySelectorAll(".av-tab-content").forEach(a=>{var d;a&&((d=S.value)==null||d.unobserve(a))}),(i=S.value)==null||i.disconnect()}),(n,i)=>(b(),q("div",{ref_key:"$el",ref:l,class:w(["av-tabs",{"av-tabs--compact":e.compact}]),style:Ge(p(y))},[K("ul",{ref_key:"tablist",ref:v,class:w(["av-tabs__list av-col av-row--md av-px-xs av-py-none av-align-center av-gap-sm--md av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(b(!0),q(ne,null,ae(p(t),(a,d)=>{var N,V,Q,X,Z,J,Y;return b(),C(O,{key:d,"tab-id":g(d),"panel-id":`${g(d)}-panel`,title:(N=a.props)==null?void 0:N.title,icon:(V=a.props)==null?void 0:V.icon,disabled:(Q=a.props)==null?void 0:Q.disabled,"disabled-tooltip":((X=a.props)==null?void 0:X["disabled-tooltip"])??((Z=a.props)==null?void 0:Z.disabledTooltip),"is-loading":(J=a.props)==null?void 0:J["is-loading"],"data-testid":(Y=a.props)==null?void 0:Y["data-testid"],compact:e.compact,"is-selected":s.value===d,onClick:sn=>s.value=d,onNext:Se,onPrevious:B,onFirst:Ce,onLast:Ue},null,8,["tab-id","panel-id","title","icon","disabled","disabled-tooltip","is-loading","data-testid","compact","is-selected","onClick"])}),128))],10,dn),(b(!0),q(ne,null,ae(p(t),(a,d)=>(b(),C(P,{key:d,"panel-id":`${g(d)}-panel`,"tab-id":g(d),"is-visible":s.value===d},{default:Ie(()=>[!e.lazyRender||s.value===d?(b(),C(p(tn),{key:0,tab:a},null,8,["tab"])):qe("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),W=G(F,[["__scopeId","data-v-a956d676"]]);F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:"default",displayName:"AvTabs",type:1,props:[{name:"ariaLabel",global:!1,description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"compact",global:!1,default:"false",description:`Allows compact display:
Underline without central pipe.`,tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"lazyRender",global:!1,default:"true",description:"If false, all tab contents are rendered in the DOM regardless of their active state.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"modelValue",global:!1,default:"0",description:"",tags:[],required:!1,type:"number | undefined",schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: number]",signature:'(event: "update:modelValue", value: number): void',schema:["number"],declarations:[]}],slots:[{name:"default",type:"any",description:"Default slot for passing `AvTab` components.",tags:[],schema:"any",declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"});const yn={title:"Components/Interaction/Tabs/AvTabs",component:W,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"},lazyRender:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1,lazyRender:!0},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvTabs</code> automatically manages the addition of <code>AvTab</code>
    according to the <code>AvTab</code> present in the <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    The tab component allows users to navigate different content sections within the same page.
  </span>
</p>

<p>
  <span class="b2-regular">
    The tab system helps to group different contents together in a limited space, and allows dense content to be divided into individually accessible sections to make reading easier for the user.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">Each tab consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">an icon to the left of the title - optional.</span></li>
  <li><span class="b2-regular">a clickable title - mandatory: displays the associated content zone.</span></li>
</ul>

<p>
  <span class="b2-regular">
    If the number of tabs exceeds the width of the container, a horizontal scroll allows you to navigate between the different tabs.
  </span>
</p>`}}}},we=e=>({components:{AvTabs:W,AvTab:j,TabContent:P,TabItem:O},setup(){const o=m(0);return{args:e,activeTab:o}},template:`
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
  `}),T=we.bind({});T.args={};T.parameters={docs:{source:{code:`
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
      `}}};const h=we.bind({});h.args={compact:!0};h.parameters={docs:{source:{code:`
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
      `}}};const z=e=>({components:{AvTabs:W,AvTab:j,TabContent:P,TabItem:O},setup(){const o=m(0);return{args:e,activeTab:o}},template:`
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
  `}),A=z.bind({});A.args={disabledTab:0};const H=z.bind({});H.args={disabledTab:1};const M=z.bind({});M.args={disabledTab:2};const Ee=e=>({components:{AvTabs:W,AvTab:j,TabContent:P,TabItem:O},setup(){const o=m(0);return{args:e,activeTab:o}},template:`
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
  `}),k=Ee.bind({});k.args={};k.parameters={docs:{source:{code:`
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
      `}}};const R=z.bind({});R.args={compact:!0,disabledTab:1};const I=Ee.bind({});I.args={compact:!0};const gn=["Default","Compact","WithFirstTabDisabled","WithSecondTabDisabled","WithLastTabDisabled","WithLoadingTab","CompactWithDisabledTab","CompactWithLoadingTab"];var te,oe,de;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(de=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,ie,re;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(re=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,ce,ue;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(ue=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var be,pe,me;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(me=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ve,ye;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(ye=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var ge,Te,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(he=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var ke,Ne,Ve;R.parameters={...R.parameters,docs:{...(ke=R.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Ve=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var Ae,He,Me;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(Me=(He=I.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};export{h as Compact,R as CompactWithDisabledTab,I as CompactWithLoadingTab,T as Default,A as WithFirstTabDisabled,M as WithLastTabDisabled,k as WithLoadingTab,H as WithSecondTabDisabled,gn as __namedExportsOrder,yn as default};
