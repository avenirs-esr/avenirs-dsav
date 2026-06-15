import{_ as O}from"./AvTab-C6Ejj0xQ.js";import{m as P,a5 as qe,a1 as ze,g as L,N as Ee,y as F,H as p,$ as $e,L as m,b as E,D as Ie,x as J,a2 as Ne,d as H,W as y,e as z,z as Be,w as Z,f as Se,R as Re,a7 as Ve,_ as Me,Z as He,J as Oe,G as Pe,F as Q,M as X,A as Ue,v as Ge,a4 as Ke,P as je}from"./iframe-B2myc9c-.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Je}from"./AvIcon-BV7zFFp9.js";import{M as Ze}from"./icons-BJ4bGiUf.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const Qe=["id","aria-labelledby","tabindex"],we=P({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(l,t)=>qe((p(),L("div",{id:e.panelId,class:F(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[Ee(l.$slots,"default",{},void 0,!0)],10,Qe)),[[ze,e.isVisible]])}}),$=U(we,[["__scopeId","data-v-3bab28a1"]]);we.__docgenInfo={exportName:"default",displayName:"TabContent",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isVisible",description:"Whether the tab content is visible.",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing tab panel content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"]};const Xe=["id","tabindex","aria-selected","aria-controls","disabled"],ke=P({inheritAttrs:!1,__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:l}){const t=l,i=$e("button"),c=m(!1),u=E(()=>e.isSelected?"s2-bold":"s2-regular"),d={name:Ze.LOADING,animation:"spin"},T=E(()=>{if(e.isLoading)return{...d,size:2};if(e.icon)return{name:e.icon,size:2}}),V={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function f(b){const r=b==null?void 0:b.key,v=V[r];if(v)switch(v){case"next":t("next");break;case"previous":t("previous");break;case"first":t("first");break;case"last":t("last");break}}function W(){e.isSelected||e.disabled||e.isLoading||t("click",e.tabId)}return Ie(()=>{J(()=>{c.value=!0})}),Ne(()=>e.isSelected,async b=>{var r;!c.value||!b||e.disabled||e.isLoading||(await J(),(r=i.value)==null||r.focus())},{flush:"post"}),(b,r)=>{const v=Je;return p(),L("li",{class:F(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill av-w-full":!e.compact}]),role:"presentation"},[H("button",Z(b.$attrs,{id:e.tabId,ref:"button",class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,disabled:e.disabled||e.isLoading,onClick:Ve(W,["prevent"]),onKeydown:r[0]||(r[0]=M=>f(M))}),[y(T)?(p(),z(v,Be(Z({key:0},y(T))),null,16)):Se("",!0),H("span",{class:F(y(u))},Re(e.title),3)],16,Xe)],2)}}}),N=U(ke,[["__scopeId","data-v-85bd02d2"]]);ke.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isSelected",description:"Whether the tab is currently selected.",required:!0,type:{name:"boolean"}},{name:"title",description:"Title of the tab displayed in the tab bar.",required:!0,type:{name:"string"}},{name:"icon",description:"Name of the icon to display in the tab.",required:!1,type:{name:"string"}},{name:"compact",description:"Whether the tab is displayed in compact mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Whether the tab item is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Whether the tab item is in loading state.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["string"]},description:"Emitted when the tab is clicked.",properties:[{type:{names:["mixed"]},name:"tabId",description:"The ID of the clicked tab."}],tags:[{title:"param",type:{name:"mixed"},name:"tabId",description:"The ID of the clicked tab."}]},{name:"next",description:"Emitted when the user navigates to the next tab."},{name:"previous",description:"Emitted when the user navigates to the previous tab."},{name:"first",description:"Emitted when the user navigates to the first tab."},{name:"last",description:"Emitted when the user navigates to the last tab."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"]};function Ye(e,l,t){const i=m({"--tabs-height":"100px"});function c(){if(t.value<0||!e.value||!e.value.offsetHeight)return;const u=e.value.offsetHeight,d=l.value[t.value];if(!d||!d.offsetHeight)return;const T=d.offsetHeight;i.value["--tabs-height"]=`${u+T}px`}return{tabsStyle:i,updateTabsStyle:c}}const _e=["aria-label"],xe=P({__name:"AvTabs",props:Ge({ariaLabel:{},compact:{type:Boolean,default:!1},lazyRender:{type:Boolean,default:!0}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=Me(),t=E(()=>{var a;return((a=l.default)==null?void 0:a.call(l))||[]}),i=He(e,"modelValue"),c=m(null),u=m(null),d=Oe({}),{tabsStyle:T,updateTabsStyle:V}=Ye(u,E(()=>{var a;return Array.from(((a=c.value)==null?void 0:a.querySelectorAll(".av-tab-content"))||[])}),i);function f(a){if(d[a])return d[a];const o=`tab-${crypto.randomUUID()}`;return d[a]=o,o}function W(){for(let a=0;a<t.value.length;a++)if(!r(t.value[a]))return a;return 0}function b(){for(let a=t.value.length-1;a>=0;a--)if(!r(t.value[a]))return a;return t.value.length-1}function r(a){var s,I,S;const o=(s=a==null?void 0:a.props)==null?void 0:s.disabled,n=((I=a==null?void 0:a.props)==null?void 0:I["is-loading"])??((S=a==null?void 0:a.props)==null?void 0:S.isLoading);return o===!0||o===""||n===!0||n===""}function v(a){const o=t.value.length;let n=(i.value+a+o)%o;const s=i.value;for(;r(t.value[n])&&(n=(n+a+o)%o,n!==s););i.value=n}function M(){v(-1)}function Le(){v(1)}function Fe(){i.value=W()}function We(){i.value=b()}const q=m(null);return Ie(()=>{var a;window.ResizeObserver&&(q.value=new window.ResizeObserver(()=>{V()})),(a=c.value)==null||a.querySelectorAll(".av-tab-content").forEach(o=>{var n;o&&((n=q.value)==null||n.observe(o))}),r(t.value[i.value])&&(i.value=W())}),Pe(()=>{var a,o;(a=c.value)==null||a.querySelectorAll(".av-tab-content").forEach(n=>{var s;n&&((s=q.value)==null||s.unobserve(n))}),(o=q.value)==null||o.disconnect()}),(a,o)=>(p(),L("div",{ref_key:"$el",ref:c,class:F(["av-tabs",{"av-tabs--compact":e.compact}]),style:Ue(y(T))},[H("ul",{ref_key:"tablist",ref:u,class:F(["av-tabs__list av-row av-px-xs av-py-none av-align-center av-gap-sm av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(p(!0),L(Q,null,X(y(t),(n,s)=>{var I,S,G,K,j;return p(),z(N,{key:s,"tab-id":f(s),"panel-id":`${f(s)}-panel`,title:(I=n.props)==null?void 0:I.title,icon:(S=n.props)==null?void 0:S.icon,disabled:(G=n.props)==null?void 0:G.disabled,"is-loading":(K=n.props)==null?void 0:K["is-loading"],"data-testid":(j=n.props)==null?void 0:j["data-testid"],compact:e.compact,"is-selected":i.value===s,onClick:ea=>i.value=s,onNext:Le,onPrevious:M,onFirst:Fe,onLast:We},null,8,["tab-id","panel-id","title","icon","disabled","is-loading","data-testid","compact","is-selected","onClick"])}),128))],10,_e),(p(!0),L(Q,null,X(y(t),(n,s)=>(p(),z($,{key:s,"panel-id":`${f(s)}-panel`,"tab-id":f(s),"is-visible":i.value===s},{default:Ke(()=>[!e.lazyRender||i.value===s?(p(),z(je(n.children.default),{key:0})):Se("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),B=U(xe,[["__scopeId","data-v-8559d4ab"]]);xe.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"lazyRender",description:"If false, all tab contents are rendered in the DOM regardless of their active state.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const ra={title:"Components/Interaction/Tabs/AvTabs",component:B,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"},lazyRender:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1,lazyRender:!0},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},Ce=e=>({components:{AvTabs:B,AvTab:O,TabContent:$,TabItem:N},setup(){const l=m(0);return{args:e,activeTab:l}},template:`
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
  `}),g=Ce.bind({});g.args={};g.parameters={docs:{source:{code:`
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
      `}}};const A=Ce.bind({});A.args={compact:!0};A.parameters={docs:{source:{code:`
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
      `}}};const R=e=>({components:{AvTabs:B,AvTab:O,TabContent:$,TabItem:N},setup(){const l=m(0);return{args:e,activeTab:l}},template:`
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
  `}),w=R.bind({});w.args={disabledTab:0};const k=R.bind({});k.args={disabledTab:1};const x=R.bind({});x.args={disabledTab:2};const De=e=>({components:{AvTabs:B,AvTab:O,TabContent:$,TabItem:N},setup(){const l=m(0);return{args:e,activeTab:l}},template:`
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
  `}),h=De.bind({});h.args={};h.parameters={docs:{source:{code:`
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
      `}}};const C=R.bind({});C.args={compact:!0,disabledTab:1};const D=De.bind({});D.args={compact:!0};var Y,_,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(ee=(_=g.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,ne,te;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(te=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,ie,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(pe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var me,ve,ue;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ue=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var Te,fe,ge;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(ye=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const ca=["Default","Compact","WithFirstTabDisabled","WithSecondTabDisabled","WithLastTabDisabled","WithLoadingTab","CompactWithDisabledTab","CompactWithLoadingTab"];export{A as Compact,C as CompactWithDisabledTab,D as CompactWithLoadingTab,g as Default,w as WithFirstTabDisabled,x as WithLastTabDisabled,h as WithLoadingTab,k as WithSecondTabDisabled,ca as __namedExportsOrder,ra as default};
