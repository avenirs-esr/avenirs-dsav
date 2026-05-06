import{_ as G}from"./AvTab-SGKeDKcF.js";import{d as x,X as Y,_ as Z,e as h,p as ee,n as y,g as b,a2 as te,c as k,w as ae,l as S,i as I,j as _,u as w,O as ne,m as se,$ as oe,r as g,q as ie,V as re,s as le,J as ce,o as de,a as be,R as E,S as F,Q as pe,k as ue,N as me}from"./iframe-DICAr2n1.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as ve}from"./AvIcon-DW-afPp0.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const fe=["id","aria-labelledby","tabindex"],M=x({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(r,a)=>Y((b(),h("div",{id:e.panelId,class:y(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[ee(r.$slots,"default",{},void 0,!0)],10,fe)),[[Z,e.isVisible]])}}),O=C(M,[["__scopeId","data-v-3bab28a1"]]);M.__docgenInfo={exportName:"default",displayName:"TabContent",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isVisible",description:"Whether the tab content is visible.",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing tab panel content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"]};const Te=["id","tabindex","aria-selected","aria-controls"],R=x({inheritAttrs:!1,__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:r}){const a=r,n=te("button"),p=k(()=>e.isSelected?"s2-bold":"s2-regular"),m={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function c(o){const u=o==null?void 0:o.key,d=m[u];if(d)switch(d){case"next":a("next");break;case"previous":a("previous");break;case"first":a("first");break;case"last":a("last");break}}return ae(()=>e.isSelected,()=>{var o;e.isSelected&&((o=n.value)==null||o.focus())}),(o,u)=>{const d=ve;return b(),h("li",{class:y(["av-tab-item av-py-xs",{"av-tab-item--compact av-no-before":e.compact,"av-flex-fill av-w-full":!e.compact}]),role:"presentation"},[S("button",se(o.$attrs,{id:e.tabId,ref:"button",class:["av-tab-item__tab av-row av-gap-xs av-align-center av-justify-center av-text-text2 av-w-full",{"av-tab-item--compact__tab av-radius-none av-m-none av-py-xs av-px-2xl":e.compact,"av-radius-lg":!e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,onClick:u[0]||(u[0]=oe(T=>a("click",e.tabId),["prevent"])),onKeydown:u[1]||(u[1]=T=>c(T))}),[e.icon?(b(),I(d,{key:0,name:e.icon,size:2},null,8,["name"])):_("",!0),S("span",{class:y(w(p))},ne(e.title),3)],16,Te)],2)}}}),U=C(R,[["__scopeId","data-v-0ad74b1b"]]);R.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isSelected",description:"Whether the tab is currently selected.",required:!0,type:{name:"boolean"}},{name:"title",description:"Title of the tab displayed in the tab bar.",required:!0,type:{name:"string"}},{name:"icon",description:"Name of the icon to display in the tab.",required:!1,type:{name:"string"}},{name:"compact",description:"Whether the tab is displayed in compact mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["string"]},description:"Emitted when the tab is clicked.",properties:[{type:{names:["mixed"]},name:"tabId",description:"The ID of the clicked tab."}],tags:[{title:"param",type:{name:"mixed"},name:"tabId",description:"The ID of the clicked tab."}]},{name:"next",description:"Emitted when the user navigates to the next tab."},{name:"previous",description:"Emitted when the user navigates to the previous tab."},{name:"first",description:"Emitted when the user navigates to the first tab."},{name:"last",description:"Emitted when the user navigates to the last tab."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"]};function he(e,r,a){const n=g({"--tabs-height":"100px"});function p(){if(a.value<0||!e.value||!e.value.offsetHeight)return;const m=e.value.offsetHeight,c=r.value[a.value];if(!c||!c.offsetHeight)return;const o=c.offsetHeight;n.value["--tabs-height"]=`${m+o}px`}return{tabsStyle:n,updateTabsStyle:p}}const ge=["aria-label"],P=x({__name:"AvTabs",props:ie({ariaLabel:{},compact:{type:Boolean,default:!1}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=re(),a=k(()=>{var t;return((t=r.default)==null?void 0:t.call(r))||[]}),n=le(e,"modelValue"),p=g(null),m=g(null),c=ce({}),{tabsStyle:o,updateTabsStyle:u}=he(m,k(()=>{var t;return Array.from(((t=p.value)==null?void 0:t.querySelectorAll(".av-tab-content"))||[])}),n);function d(t){if(c[t])return c[t];const i=`tab-${crypto.randomUUID()}`;return c[t]=i,i}function T(t){const i=a.value.length;n.value=(n.value+t+i)%i}function K(){T(-1)}function J(){T(1)}function Q(){n.value=0}function X(){n.value=a.value.length-1}const A=g(null);return de(()=>{var t;window.ResizeObserver&&(A.value=new window.ResizeObserver(()=>{u()})),(t=p.value)==null||t.querySelectorAll(".av-tab-content").forEach(i=>{var l;i&&((l=A.value)==null||l.observe(i))})}),be(()=>{var t,i;(t=p.value)==null||t.querySelectorAll(".av-tab-content").forEach(l=>{var s;l&&((s=A.value)==null||s.unobserve(l))}),(i=A.value)==null||i.disconnect()}),(t,i)=>(b(),h("div",{ref_key:"$el",ref:p,class:y(["av-tabs",{"av-tabs--compact":e.compact}]),style:pe(w(o))},[S("ul",{ref_key:"tablist",ref:m,class:y(["av-tabs__list av-row av-px-xs av-py-none av-align-center av-gap-sm av-list-reset av-radius-lg",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(b(!0),h(E,null,F(w(a),(l,s)=>{var D,$,q;return b(),I(U,{key:s,"tab-id":d(s),"panel-id":`${d(s)}-panel`,title:(D=l.props)==null?void 0:D.title,icon:($=l.props)==null?void 0:$.icon,"data-testid":(q=l.props)==null?void 0:q["data-testid"],compact:e.compact,"is-selected":n.value===s,onClick:ye=>n.value=s,onNext:J,onPrevious:K,onFirst:Q,onLast:X},null,8,["tab-id","panel-id","title","icon","data-testid","compact","is-selected","onClick"])}),128))],10,ge),(b(!0),h(E,null,F(w(a),(l,s)=>(b(),I(O,{key:s,"panel-id":`${d(s)}-panel`,"tab-id":d(s),"is-visible":n.value===s},{default:ue(()=>[n.value===s?(b(),I(me(l.children.default),{key:0})):_("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),W=C(P,[["__scopeId","data-v-28c0db9a"]]);P.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"'false'",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const Ce={title:"Components/Interaction/Tabs/AvTabs",component:W,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},j=e=>({components:{AvTabs:W,AvTab:G,TabContent:O,TabItem:U},setup(){const r=g(0);return{args:e,activeTab:r}},template:`
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
  `}),v=j.bind({});v.args={};v.parameters={docs:{source:{code:`
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
      `}}};const f=j.bind({});f.args={compact:!0};f.parameters={docs:{source:{code:`
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
      `}}};var N,V,L;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(L=(V=v.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var z,B,H;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const De=["Default","Compact"];export{f as Compact,v as Default,De as __namedExportsOrder,Ce as default};
