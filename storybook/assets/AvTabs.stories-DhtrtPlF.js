import{_ as P}from"./AvTab-Bmq5_5p3.js";import{m as $,a5 as qe,a1 as ze,g as L,N as Ee,y as F,H as p,$ as $e,L as m,b as E,D as Ie,x as J,a2 as Ne,d as O,W as u,e as z,z as Be,w as Z,f as Se,R as Re,a7 as Ve,_ as Me,Z as He,J as Oe,G as Pe,F as Q,M as X,A as Ue,v as je,a4 as Ge}from"./iframe-B24GpuUl.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Ke}from"./AvIcon-COaG6nIa.js";import{M as Je}from"./icons-B2gJYSuB.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const Ze=["id","aria-labelledby","tabindex"],we=$({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(s,n)=>qe((p(),L("div",{id:e.panelId,class:F(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[Ee(s.$slots,"default",{},void 0,!0)],10,Ze)),[[ze,e.isVisible]])}}),N=U(we,[["__scopeId","data-v-3bab28a1"]]);we.__docgenInfo={exportName:"default",displayName:"TabContent",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isVisible",description:"Whether the tab content is visible.",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing tab panel content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"]};const Qe=["id","tabindex","aria-selected","aria-controls","disabled"],ke=$({inheritAttrs:!1,__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:s}){const n=s,o=$e("button"),c=m(!1),T=E(()=>e.isSelected?"s2-bold":"s2-regular"),d={name:Je.LOADING,animation:"spin"},f=E(()=>{if(e.isLoading)return{...d,size:2};if(e.icon)return{name:e.icon,size:2}}),M={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function g(b){const r=b==null?void 0:b.key,v=M[r];if(v)switch(v){case"next":n("next");break;case"previous":n("previous");break;case"first":n("first");break;case"last":n("last");break}}function W(){e.isSelected||e.disabled||e.isLoading||n("click",e.tabId)}return Ie(()=>{J(()=>{c.value=!0})}),Ne(()=>e.isSelected,async b=>{var r;!c.value||!b||e.disabled||e.isLoading||(await J(),(r=o.value)==null||r.focus())},{flush:"post"}),(b,r)=>{const v=Ke;return p(),L("li",{class:F(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill av-w-full":!e.compact}]),role:"presentation"},[O("button",Z(b.$attrs,{id:e.tabId,ref:"button",class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,disabled:e.disabled||e.isLoading,onClick:Ve(W,["prevent"]),onKeydown:r[0]||(r[0]=H=>g(H))}),[u(f)?(p(),z(v,Be(Z({key:0},u(f))),null,16)):Se("",!0),O("span",{class:F(u(T))},Re(e.title),3)],16,Qe)],2)}}}),B=U(ke,[["__scopeId","data-v-85bd02d2"]]);ke.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isSelected",description:"Whether the tab is currently selected.",required:!0,type:{name:"boolean"}},{name:"title",description:"Title of the tab displayed in the tab bar.",required:!0,type:{name:"string"}},{name:"icon",description:"Name of the icon to display in the tab.",required:!1,type:{name:"string"}},{name:"compact",description:"Whether the tab is displayed in compact mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Whether the tab item is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Whether the tab item is in loading state.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["string"]},description:"Emitted when the tab is clicked.",properties:[{type:{names:["mixed"]},name:"tabId",description:"The ID of the clicked tab."}],tags:[{title:"param",type:{name:"mixed"},name:"tabId",description:"The ID of the clicked tab."}]},{name:"next",description:"Emitted when the user navigates to the next tab."},{name:"previous",description:"Emitted when the user navigates to the previous tab."},{name:"first",description:"Emitted when the user navigates to the first tab."},{name:"last",description:"Emitted when the user navigates to the last tab."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"]};const Xe=$({name:"TabPanelContent",props:{tab:{type:Object,required:!0}},setup(e){return()=>{var n;const s=e.tab.children;return((n=s==null?void 0:s.default)==null?void 0:n.call(s))??null}}});function Ye(e,s,n){const o=m({"--tabs-height":"100px"});function c(){if(n.value<0||!e.value||!e.value.offsetHeight)return;const T=e.value.offsetHeight,d=s.value[n.value];if(!d||!d.offsetHeight)return;const f=d.offsetHeight;o.value["--tabs-height"]=`${T+f}px`}return{tabsStyle:o,updateTabsStyle:c}}const _e=["aria-label"],xe=$({__name:"AvTabs",props:je({ariaLabel:{},compact:{type:Boolean,default:!1},lazyRender:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const s=Me(),n=E(()=>{var a;return((a=s.default)==null?void 0:a.call(s))||[]}),o=He(e,"modelValue"),c=m(null),T=m(null),d=Oe({}),{tabsStyle:f,updateTabsStyle:M}=Ye(T,E(()=>{var a;return Array.from(((a=c.value)==null?void 0:a.querySelectorAll(".av-tab-content"))||[])}),o);function g(a){if(d[a])return d[a];const l=`tab-${crypto.randomUUID()}`;return d[a]=l,l}function W(){for(let a=0;a<n.value.length;a++)if(!r(n.value[a]))return a;return 0}function b(){for(let a=n.value.length-1;a>=0;a--)if(!r(n.value[a]))return a;return n.value.length-1}function r(a){var i,I,S;const l=(i=a==null?void 0:a.props)==null?void 0:i.disabled,t=((I=a==null?void 0:a.props)==null?void 0:I["is-loading"])??((S=a==null?void 0:a.props)==null?void 0:S.isLoading);return l===!0||l===""||t===!0||t===""}function v(a){const l=n.value.length;let t=(o.value+a+l)%l;const i=o.value;for(;r(n.value[t])&&(t=(t+a+l)%l,t!==i););o.value=t}function H(){v(-1)}function Le(){v(1)}function Fe(){o.value=W()}function We(){o.value=b()}const q=m(null);return Ie(()=>{var a;window.ResizeObserver&&(q.value=new window.ResizeObserver(()=>{M()})),(a=c.value)==null||a.querySelectorAll(".av-tab-content").forEach(l=>{var t;l&&((t=q.value)==null||t.observe(l))}),r(n.value[o.value])&&(o.value=W())}),Pe(()=>{var a,l;(a=c.value)==null||a.querySelectorAll(".av-tab-content").forEach(t=>{var i;t&&((i=q.value)==null||i.unobserve(t))}),(l=q.value)==null||l.disconnect()}),(a,l)=>(p(),L("div",{ref_key:"$el",ref:c,class:F(["av-tabs",{"av-tabs--compact":e.compact}]),style:Ue(u(f))},[O("ul",{ref_key:"tablist",ref:T,class:F(["av-tabs__list av-row av-px-xs av-py-none av-align-center av-gap-sm av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(p(!0),L(Q,null,X(u(n),(t,i)=>{var I,S,j,G,K;return p(),z(B,{key:i,"tab-id":g(i),"panel-id":`${g(i)}-panel`,title:(I=t.props)==null?void 0:I.title,icon:(S=t.props)==null?void 0:S.icon,disabled:(j=t.props)==null?void 0:j.disabled,"is-loading":(G=t.props)==null?void 0:G["is-loading"],"data-testid":(K=t.props)==null?void 0:K["data-testid"],compact:e.compact,"is-selected":o.value===i,onClick:ea=>o.value=i,onNext:Le,onPrevious:H,onFirst:Fe,onLast:We},null,8,["tab-id","panel-id","title","icon","disabled","is-loading","data-testid","compact","is-selected","onClick"])}),128))],10,_e),(p(!0),L(Q,null,X(u(n),(t,i)=>(p(),z(N,{key:i,"panel-id":`${g(i)}-panel`,"tab-id":g(i),"is-visible":o.value===i},{default:Ge(()=>[!e.lazyRender||o.value===i?(p(),z(u(Xe),{key:0,tab:t},null,8,["tab"])):Se("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),R=U(xe,[["__scopeId","data-v-75430fdd"]]);xe.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"lazyRender",description:"If false, all tab contents are rendered in the DOM regardless of their active state.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const ra={title:"Components/Interaction/Tabs/AvTabs",component:R,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"},lazyRender:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1,lazyRender:!0},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},Ce=e=>({components:{AvTabs:R,AvTab:P,TabContent:N,TabItem:B},setup(){const s=m(0);return{args:e,activeTab:s}},template:`
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
  `}),A=Ce.bind({});A.args={};A.parameters={docs:{source:{code:`
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
      `}}};const h=Ce.bind({});h.args={compact:!0};h.parameters={docs:{source:{code:`
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
      `}}};const V=e=>({components:{AvTabs:R,AvTab:P,TabContent:N,TabItem:B},setup(){const s=m(0);return{args:e,activeTab:s}},template:`
    <AvTabs v-bind="args" v-model="activeTab">
      <AvTab
        title="Tab 1"
        icon="mdi:format-list-bulleted"
        :disabled="args.disabledTab === 0"
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  `}),w=V.bind({});w.args={disabledTab:0};const k=V.bind({});k.args={disabledTab:1};const x=V.bind({});x.args={disabledTab:2};const De=e=>({components:{AvTabs:R,AvTab:P,TabContent:N,TabItem:B},setup(){const s=m(0);return{args:e,activeTab:s}},template:`
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
  `}),y=De.bind({});y.args={};y.parameters={docs:{source:{code:`
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
      `}}};const C=V.bind({});C.args={compact:!0,disabledTab:1};const D=De.bind({});D.args={compact:!0};var Y,_,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(ee=(_=A.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,ne,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,ie,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(oe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,re,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(ce=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var de,be,pe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(pe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var me,ve,ue;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ue=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var Te,fe,ge;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
      >
        <span>First tab content</span>
      </AvTab>
      <AvTab
        title="Tab 2"
        icon="mdi:calendar-month-outline"
        :disabled="args.disabledTab === 1"
      >
        <span>Second tab content</span>
      </AvTab>
      <AvTab
        title="Tab 3"
        icon="mdi:bell-notification"
        :disabled="args.disabledTab === 2"
      >
        <span>Third tab content</span>
      </AvTab>
    </AvTabs>
  \`
})`,...(ge=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Ae,he,ye;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(ye=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const ca=["Default","Compact","WithFirstTabDisabled","WithSecondTabDisabled","WithLastTabDisabled","WithLoadingTab","CompactWithDisabledTab","CompactWithLoadingTab"];export{h as Compact,C as CompactWithDisabledTab,D as CompactWithLoadingTab,A as Default,w as WithFirstTabDisabled,x as WithLastTabDisabled,y as WithLoadingTab,k as WithSecondTabDisabled,ca as __namedExportsOrder,ra as default};
