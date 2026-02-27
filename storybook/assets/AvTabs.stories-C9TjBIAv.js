import{_ as X}from"./AvTab-CdIDNPEv.js";import{d as x,X as J,_ as Y,e as h,p as Z,n as y,g as b,a2 as ee,c as k,w as te,l as S,i as I,j as H,u as w,M as ae,m as ne,$ as se,r as g,V as oe,T as ie,W as le,G as re,o as ce,a as de,P as q,Q as E,O as be,k as ue,L as me}from"./iframe-RPmiq1BY.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as pe}from"./AvIcon-B7-vflL6.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const ve=["id","aria-labelledby","tabindex"],M=x({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(l,a)=>J((b(),h("div",{id:e.panelId,class:y(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[Z(l.$slots,"default",{},void 0,!0)],10,ve)),[[Y,e.isVisible]])}}),O=C(M,[["__scopeId","data-v-3bab28a1"]]);M.__docgenInfo={exportName:"default",displayName:"TabContent",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isVisible",description:"Whether the tab content is visible.",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing tab panel content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"]};const fe=["id","data-testid","tabindex","aria-selected","aria-controls"],P=x({__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:l}){const a=l,n=ee("button"),u=k(()=>e.isSelected?"s2-bold":"s2-regular"),p={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function c(o){const m=o==null?void 0:o.key,d=p[m];if(d)switch(d){case"next":a("next");break;case"previous":a("previous");break;case"first":a("first");break;case"last":a("last");break}}return te(()=>e.isSelected,()=>{var o;e.isSelected&&((o=n.value)==null||o.focus())}),(o,m)=>{const d=pe;return b(),h("li",{class:y(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill av-w-full":!e.compact}]),role:"presentation"},[S("button",ne(o.$attrs,{id:e.tabId,ref:"button","data-testid":`test-${e.tabId}`,class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,onClick:m[0]||(m[0]=se(T=>a("click",e.tabId),["prevent"])),onKeydown:m[1]||(m[1]=T=>c(T))}),[e.icon?(b(),I(d,{key:0,name:e.icon,size:2},null,8,["name"])):H("",!0),S("span",{class:y(w(u))},ae(e.title),3)],16,fe)],2)}}}),R=C(P,[["__scopeId","data-v-9b3fc9bd"]]);P.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isSelected",description:"Whether the tab is currently selected.",required:!0,type:{name:"boolean"}},{name:"title",description:"Title of the tab displayed in the tab bar.",required:!0,type:{name:"string"}},{name:"icon",description:"Name of the icon to display in the tab.",required:!1,type:{name:"string"}},{name:"compact",description:"Whether the tab is displayed in compact mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["string"]},description:"Emitted when the tab is clicked.",properties:[{type:{names:["mixed"]},name:"tabId",description:"The ID of the clicked tab."}],tags:[{title:"param",type:{name:"mixed"},name:"tabId",description:"The ID of the clicked tab."}]},{name:"next",description:"Emitted when the user navigates to the next tab."},{name:"previous",description:"Emitted when the user navigates to the previous tab."},{name:"first",description:"Emitted when the user navigates to the first tab."},{name:"last",description:"Emitted when the user navigates to the last tab."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"]};function Te(e,l,a){const n=g({"--tabs-height":"100px"});function u(){if(a.value<0||!e.value||!e.value.offsetHeight)return;const p=e.value.offsetHeight,c=l.value[a.value];if(!c||!c.offsetHeight)return;const o=c.offsetHeight;n.value["--tabs-height"]=`${p+o}px`}return{tabsStyle:n,updateTabsStyle:u}}const he=["aria-label"],U=x({__name:"AvTabs",props:oe({ariaLabel:{},compact:{type:Boolean,default:!1}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const l=ie(),a=k(()=>{var t;return((t=l.default)==null?void 0:t.call(l))||[]}),n=le(e,"modelValue"),u=g(null),p=g(null),c=re({}),{tabsStyle:o,updateTabsStyle:m}=Te(p,k(()=>{var t;return Array.from(((t=u.value)==null?void 0:t.querySelectorAll(".av-tab-content"))||[])}),n);function d(t){if(c[t])return c[t];const i=`tab-${crypto.randomUUID()}`;return c[t]=i,i}function T(t){const i=a.value.length;n.value=(n.value+t+i)%i}function j(){T(-1)}function K(){T(1)}function G(){n.value=0}function Q(){n.value=a.value.length-1}const A=g(null);return ce(()=>{var t;window.ResizeObserver&&(A.value=new window.ResizeObserver(()=>{m()})),(t=u.value)==null||t.querySelectorAll(".av-tab-content").forEach(i=>{var r;i&&((r=A.value)==null||r.observe(i))})}),de(()=>{var t,i;(t=u.value)==null||t.querySelectorAll(".av-tab-content").forEach(r=>{var s;r&&((s=A.value)==null||s.unobserve(r))}),(i=A.value)==null||i.disconnect()}),(t,i)=>(b(),h("div",{ref_key:"$el",ref:u,class:y(["av-tabs",{"av-tabs--compact":e.compact}]),style:be(w(o))},[S("ul",{ref_key:"tablist",ref:p,class:y(["av-tabs__list av-row av-px-xs av-py-none av-align-center av-gap-sm av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(b(!0),h(q,null,E(w(a),(r,s)=>{var $,D;return b(),I(R,{key:s,"tab-id":d(s),"panel-id":`${d(s)}-panel`,title:($=r.props)==null?void 0:$.title,icon:(D=r.props)==null?void 0:D.icon,compact:e.compact,"is-selected":n.value===s,onClick:ge=>n.value=s,onNext:K,onPrevious:j,onFirst:G,onLast:Q},null,8,["tab-id","panel-id","title","icon","compact","is-selected","onClick"])}),128))],10,he),(b(!0),h(q,null,E(w(a),(r,s)=>(b(),I(O,{key:s,"panel-id":`${d(s)}-panel`,"tab-id":d(s),"is-visible":n.value===s},{default:ue(()=>[n.value===s?(b(),I(me(r.children.default),{key:0})):H("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),W=C(U,[["__scopeId","data-v-e74f88fe"]]);U.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"'false'",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const xe={title:"Components/Interaction/Tabs/AvTabs",component:W,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},_=e=>({components:{AvTabs:W,AvTab:X,TabContent:O,TabItem:R},setup(){const l=g(0);return{args:e,activeTab:l}},template:`
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
  `}),v=_.bind({});v.args={};v.parameters={docs:{source:{code:`
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
      `}}};const f=_.bind({});f.args={compact:!0};f.parameters={docs:{source:{code:`
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
      `}}};var F,L,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(N=(L=v.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var V,z,B;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(B=(z=f.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const Ce=["Default","Compact"];export{f as Compact,v as Default,Ce as __namedExportsOrder,xe as default};
