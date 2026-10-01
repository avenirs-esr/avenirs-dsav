import{_ as H}from"./AvTab-C4PDqC72.js";import{n as N,aa as We,a6 as Pe,h as L,R as ze,B as D,L as u,a4 as $e,P as p,d as E,I as we,A as X,a7 as Be,l as Oe,a9 as Se,$ as m,e as M,f as V,D as Me,z as J,g as xe,X as He,ac as Ke,a3 as Ue,a2 as je,N as _e,K as Ge,F as Y,Q as Z,E as Qe,y as Xe}from"./iframe-vTLvUDU6.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Je}from"./AvIcon-CUtiXhT-.js";import{A as Ye}from"./AvTooltip-JMbfuuJw.js";import{i as Ze,g as ea}from"./utils-AN5LjLGN.js";import{M as aa}from"./icons-B6bk2eYx.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const na=["id","aria-labelledby","tabindex"],Ce=N({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(s,t)=>We((u(),L("div",{id:e.panelId,class:D(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[ze(s.$slots,"default",{},void 0,!0)],10,na)),[[Pe,e.isVisible]])}}),W=K(Ce,[["__scopeId","data-v-3bab28a1"]]);Ce.__docgenInfo={exportName:"default",displayName:"TabContent",type:1,props:[{name:"panelId",global:!1,description:"ID of the associated tab panel.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"tabId",global:!1,description:"ID of the tab item.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"isVisible",global:!1,description:"Whether the tab content is visible.",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"any",description:"Default slot for passing tab panel content.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"panelId",type:"string",description:"ID of the associated tab panel.",declarations:[],schema:"string"},{name:"tabId",type:"string",description:"ID of the tab item.",declarations:[],schema:"string"},{name:"isVisible",type:"boolean",description:"Whether the tab content is visible.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"};const ta=["id","tabindex","aria-selected","aria-controls","disabled"],qe=N({inheritAttrs:!1,__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledTooltip:{}},emits:["click","next","previous","first","last"],setup(e,{emit:s}){const t=s,o=$e("button"),r=p(!1),v=E(()=>e.isSelected?"s2-bold":"s2-regular"),c={name:aa.LOADING,animation:"spin"},T=E(()=>{if(e.isLoading)return{...c,size:2};if(e.icon)return{name:e.icon,size:2}}),B={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function g(b){const l=b==null?void 0:b.key,f=B[l];if(f)switch(f){case"next":t("next");break;case"previous":t("previous");break;case"first":t("first");break;case"last":t("last");break}}function R(){e.isSelected||e.disabled||e.isLoading||t("click",e.tabId)}return we(()=>{X(()=>{r.value=!0})}),Be(()=>e.isSelected,async b=>{var l;!r.value||!b||e.disabled||e.isLoading||(await X(),(l=o.value)==null||l.focus())},{flush:"post"}),(b,l)=>{const f=Je;return u(),L("li",{class:D(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill--md av-w-full":!e.compact}]),role:"presentation"},[Oe(Ye,{content:m(ea)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!m(Ze)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"full-width":!e.compact},{default:Se(()=>[M("button",J(b.$attrs,{id:e.tabId,ref:"button",class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,disabled:e.disabled||e.isLoading,onClick:Ke(R,["prevent"]),onKeydown:l[0]||(l[0]=O=>g(O))}),[m(T)?(u(),V(f,Me(J({key:0},m(T))),null,16)):xe("",!0),M("span",{class:D(m(v))},He(e.title),3)],16,ta)]),_:1},8,["content","disabled","full-width"])],2)}}}),P=K(qe,[["__scopeId","data-v-62797f7e"]]);qe.__docgenInfo={exportName:"default",displayName:"TabItem",type:1,props:[{name:"panelId",global:!1,description:"ID of the associated tab panel.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"tabId",global:!1,description:"ID of the tab item.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"isSelected",global:!1,description:"Whether the tab is currently selected.",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"title",global:!1,description:"Title of the tab displayed in the tab bar.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"icon",global:!1,description:"Name of the icon to display in the tab.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"compact",global:!1,description:"Whether the tab is displayed in compact mode.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"isLoading",global:!1,description:"Whether the tab item is in loading state.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"Emitted when the tab is clicked.",tags:[],type:"[tabId: string]",signature:'(event: "click", tabId: string): void',declarations:[],schema:["string"]},{name:"next",description:"Emitted when the user navigates to the next tab.",tags:[],type:"[]",signature:'(event: "next"): void',declarations:[],schema:[]},{name:"previous",description:"Emitted when the user navigates to the previous tab.",tags:[],type:"[]",signature:'(event: "previous"): void',declarations:[],schema:[]},{name:"first",description:"Emitted when the user navigates to the first tab.",tags:[],type:"[]",signature:'(event: "first"): void',declarations:[],schema:[]},{name:"last",description:"Emitted when the user navigates to the last tab.",tags:[],type:"[]",signature:'(event: "last"): void',declarations:[],schema:[]}],slots:[],exposed:[{name:"compact",type:"boolean | undefined",description:"Whether the tab is displayed in compact mode.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",type:"boolean | undefined",description:"Indicates if the element is disabled.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabledTooltip",type:"string | undefined",description:"Tooltip text to display when the element is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"title",type:"string",description:"Title of the tab displayed in the tab bar.",declarations:[],schema:"string"},{name:"icon",type:"string | undefined",description:"Name of the icon to display in the tab.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"isLoading",type:"boolean | undefined",description:"Whether the tab item is in loading state.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"panelId",type:"string",description:"ID of the associated tab panel.",declarations:[],schema:"string"},{name:"tabId",type:"string",description:"ID of the tab item.",declarations:[],schema:"string"},{name:"isSelected",type:"boolean",description:"Whether the tab is currently selected.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"};const sa=N({name:"TabPanelContent",props:{tab:{type:Object,required:!0}},setup(e){return()=>{var t;const s=e.tab.children;return((t=s==null?void 0:s.default)==null?void 0:t.call(s))??null}}});function Le(e,s,t){const o=p({"--tabs-height":"100px"});function r(){if(t.value<0||!e.value||!e.value.offsetHeight)return;const v=e.value.offsetHeight,c=s.value[t.value];if(!c||!c.offsetHeight)return;const T=c.offsetHeight;o.value["--tabs-height"]=`${v+T}px`}return{tabsStyle:o,updateTabsStyle:r}}Le.__docgenInfo={exportName:"useTabsStyle",displayName:"useTabsStyle",type:2,props:[{name:"value",global:!1,description:"",tags:[],required:!0,type:"HTMLElement | null",declarations:[],schema:{kind:"enum",type:"HTMLElement | null",schema:["null",{kind:"object",type:"HTMLElement"}]}},{name:"__@RefSymbol@986",global:!1,description:`Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`,tags:[],required:!0,type:"true",declarations:[],schema:"true"}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/composables/use-tabs-style.ts"};const ia=["aria-label"],De=N({__name:"AvTabs",props:Xe({ariaLabel:{},compact:{type:Boolean,default:!1},lazyRender:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const s=Ue(),t=E(()=>{var a;return((a=s.default)==null?void 0:a.call(s))||[]}),o=je(e,"modelValue"),r=p(null),v=p(null),c=_e({}),{tabsStyle:T,updateTabsStyle:B}=Le(v,E(()=>{var a;return Array.from(((a=r.value)==null?void 0:a.querySelectorAll(".av-tab-content"))||[])}),o);function g(a){if(c[a])return c[a];const d=`tab-${crypto.randomUUID()}`;return c[a]=d,d}function R(){for(let a=0;a<t.value.length;a++)if(!l(t.value[a]))return a;return 0}function b(){for(let a=t.value.length-1;a>=0;a--)if(!l(t.value[a]))return a;return t.value.length-1}function l(a){var i,k,I;const d=(i=a==null?void 0:a.props)==null?void 0:i.disabled,n=((k=a==null?void 0:a.props)==null?void 0:k["is-loading"])??((I=a==null?void 0:a.props)==null?void 0:I.isLoading);return d===!0||d===""||n===!0||n===""}function f(a){const d=t.value.length;let n=(o.value+a+d)%d;const i=o.value;for(;l(t.value[n])&&(n=(n+a+d)%d,n!==i););o.value=n}function O(){f(-1)}function Ve(){f(1)}function Ee(){o.value=R()}function Ne(){o.value=b()}const F=p(null);return we(()=>{var a;window.ResizeObserver&&(F.value=new window.ResizeObserver(()=>{B()})),(a=r.value)==null||a.querySelectorAll(".av-tab-content").forEach(d=>{var n;d&&((n=F.value)==null||n.observe(d))}),l(t.value[o.value])&&(o.value=R())}),Ge(()=>{var a,d;(a=r.value)==null||a.querySelectorAll(".av-tab-content").forEach(n=>{var i;n&&((i=F.value)==null||i.unobserve(n))}),(d=F.value)==null||d.disconnect()}),(a,d)=>(u(),L("div",{ref_key:"$el",ref:r,class:D(["av-tabs",{"av-tabs--compact":e.compact}]),style:Qe(m(T))},[M("ul",{ref_key:"tablist",ref:v,class:D(["av-tabs__list av-col av-row--md av-px-xs av-py-none av-align-center av-gap-sm--md av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(u(!0),L(Y,null,Z(m(t),(n,i)=>{var k,I,U,j,_,G,Q;return u(),V(P,{key:i,"tab-id":g(i),"panel-id":`${g(i)}-panel`,title:(k=n.props)==null?void 0:k.title,icon:(I=n.props)==null?void 0:I.icon,disabled:(U=n.props)==null?void 0:U.disabled,"disabled-tooltip":((j=n.props)==null?void 0:j["disabled-tooltip"])??((_=n.props)==null?void 0:_.disabledTooltip),"is-loading":(G=n.props)==null?void 0:G["is-loading"],"data-testid":(Q=n.props)==null?void 0:Q["data-testid"],compact:e.compact,"is-selected":o.value===i,onClick:oa=>o.value=i,onNext:Ve,onPrevious:O,onFirst:Ee,onLast:Ne},null,8,["tab-id","panel-id","title","icon","disabled","disabled-tooltip","is-loading","data-testid","compact","is-selected","onClick"])}),128))],10,ia),(u(!0),L(Y,null,Z(m(t),(n,i)=>(u(),V(W,{key:i,"panel-id":`${g(i)}-panel`,"tab-id":g(i),"is-visible":o.value===i},{default:Se(()=>[!e.lazyRender||o.value===i?(u(),V(m(sa),{key:0,tab:n},null,8,["tab"])):xe("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),z=K(De,[["__scopeId","data-v-a956d676"]]);De.__docgenInfo={exportName:"default",displayName:"AvTabs",type:1,props:[{name:"ariaLabel",global:!1,description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"compact",global:!1,description:`Allows compact display:
Underline without central pipe.`,tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"lazyRender",global:!1,description:"If false, all tab contents are rendered in the DOM regardless of their active state.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"true"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},default:"0"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: number]",signature:'(event: "update:modelValue", value: number): void',declarations:[],schema:["number"]}],slots:[{name:"default",type:"any",description:"Default slot for passing `AvTab` components.",declarations:[],schema:"any"}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"compact",type:"boolean | undefined",description:`Allows compact display:
Underline without central pipe.`,declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ariaLabel",type:"string | undefined",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"number | undefined",description:"",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"lazyRender",type:"boolean | undefined",description:"If false, all tab contents are rendered in the DOM regardless of their active state.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"};const va={title:"Components/Interaction/Tabs/AvTabs",component:z,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"},lazyRender:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1,lazyRender:!0},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},Re=e=>({components:{AvTabs:z,AvTab:H,TabContent:W,TabItem:P},setup(){const s=p(0);return{args:e,activeTab:s}},template:`
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
  `}),h=Re.bind({});h.args={};h.parameters={docs:{source:{code:`
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
      `}}};const y=Re.bind({});y.args={compact:!0};y.parameters={docs:{source:{code:`
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
      `}}};const $=e=>({components:{AvTabs:z,AvTab:H,TabContent:W,TabItem:P},setup(){const s=p(0);return{args:e,activeTab:s}},template:`
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
  `}),w=$.bind({});w.args={disabledTab:0};const S=$.bind({});S.args={disabledTab:1};const x=$.bind({});x.args={disabledTab:2};const Fe=e=>({components:{AvTabs:z,AvTab:H,TabContent:W,TabItem:P},setup(){const s=p(0);return{args:e,activeTab:s}},template:`
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
  `}),A=Fe.bind({});A.args={};A.parameters={docs:{source:{code:`
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
      `}}};const C=$.bind({});C.args={compact:!0,disabledTab:1};const q=Fe.bind({});q.args={compact:!0};var ee,ae,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,ie;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,de,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
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
})`,...(le=(de=w.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var re,ce,be;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(be=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var ue,me,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,ve,Te;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(Te=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var ge,he,ye;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(ye=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Ae,ke,Ie;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};const Ta=["Default","Compact","WithFirstTabDisabled","WithSecondTabDisabled","WithLastTabDisabled","WithLoadingTab","CompactWithDisabledTab","CompactWithLoadingTab"];export{y as Compact,C as CompactWithDisabledTab,q as CompactWithLoadingTab,h as Default,w as WithFirstTabDisabled,x as WithLastTabDisabled,A as WithLoadingTab,S as WithSecondTabDisabled,Ta as __namedExportsOrder,va as default};
