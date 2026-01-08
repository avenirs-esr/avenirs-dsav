import{_ as J}from"./AvTab-Ch24vYF7.js";import{d as C,Q as X,V as Y,a as g,y as Z,x as y,o as b,r as T,$ as ee,c as S,w as te,v as x,b as w,e as _,u as k,G as ae,I as ne,C as se,O as oe,S as ie,P as re,m as ce,f as le,A as de,F as E,E as F,D as be,q as me,K as ue}from"./iframe-BQ7qKONV.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as pe}from"./AvIcon-DsbNWGPN.js";import"./preload-helper-ILsKNznc.js";const ve=["id","aria-labelledby","tabindex"],M=C({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean}},setup(e){return(i,s)=>X((b(),g("div",{id:e.panelId,class:y(["av-tab-content",{"av-tab-content--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[Z(i.$slots,"default",{},void 0,!0)],10,ve)),[[Y,e.isVisible]])}}),O=$(M,[["__scopeId","data-v-3bab28a1"]]);M.__docgenInfo={exportName:"default",displayName:"TabContent",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isVisible",description:"Whether the tab content is visible.",required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing tab panel content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"]};const fe=["id","data-testid","tabindex","aria-selected","aria-controls"],P=C({__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:i}){const s=i,a=T(null),m=ee("button"),p=S(()=>e.isSelected?"s2-bold":"s2-regular"),d={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function h(r){const c=r==null?void 0:r.key,u=d[c];if(u)switch(u){case"next":s("next");break;case"previous":s("previous");break;case"first":s("first");break;case"last":s("last");break}}return te(()=>e.isSelected,()=>{var r;e.isSelected&&((r=m.value)==null||r.focus())}),(r,c)=>{const u=pe;return b(),g("li",{class:y(["av-tab-item",{"av-tab-item--compact":e.compact}]),role:"presentation"},[x("button",ne(r.$attrs,{id:e.tabId,ref_key:"button",ref:a,"data-testid":`test-${e.tabId}`,class:["av-tab-item__tab",{"av-tab-item--compact__tab":e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,onClick:c[0]||(c[0]=se(A=>r.$emit("click",e.tabId),["prevent"])),onKeydown:c[1]||(c[1]=A=>h(A))}),[e.icon?(b(),w(u,{key:0,name:e.icon,size:2},null,8,["name"])):_("",!0),x("span",{class:y(k(p))},ae(e.title),3)],16,fe)],2)}}}),R=$(P,[["__scopeId","data-v-e92501ec"]]);P.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isSelected",description:"Whether the tab is currently selected.",required:!0,type:{name:"boolean"}},{name:"title",description:"Title of the tab displayed in the tab bar.",required:!0,type:{name:"string"}},{name:"icon",description:"Name of the icon to display in the tab.",required:!1,type:{name:"string"}},{name:"compact",description:"Whether the tab is displayed in compact mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["string"]},description:"Emitted when the tab is clicked.",properties:[{type:{names:["mixed"]},name:"tabId",description:"The ID of the clicked tab."}],tags:[{title:"param",type:{name:"mixed"},name:"tabId",description:"The ID of the clicked tab."}]},{name:"next",description:"Emitted when the user navigates to the next tab."},{name:"previous",description:"Emitted when the user navigates to the previous tab."},{name:"first",description:"Emitted when the user navigates to the first tab."},{name:"last",description:"Emitted when the user navigates to the last tab."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"]};function Te(e,i,s){const a=T({"--tabs-height":"100px"});function m(){if(s.value<0||!e.value||!e.value.offsetHeight)return;const p=e.value.offsetHeight,d=i.value[s.value];if(!d||!d.offsetHeight)return;const h=d.offsetHeight;a.value["--tabs-height"]=`${p+h}px`}return{tabsStyle:a,updateTabsStyle:m}}const he=["aria-label"],U=C({__name:"AvTabs",props:oe({ariaLabel:{},compact:{type:Boolean,default:!1}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const i=ie(),s=S(()=>{var t;return((t=i.default)==null?void 0:t.call(i))||[]}),a=re(e,"modelValue"),m=T(null),p=T(null),d=ce({}),{tabsStyle:h,updateTabsStyle:r}=Te(p,S(()=>{var t;return Array.from(((t=m.value)==null?void 0:t.querySelectorAll(".av-tab-content"))||[])}),a);function c(t){if(d[t])return d[t];const o=`tab-${crypto.randomUUID()}`;return d[t]=o,o}function u(t){const o=s.value.length;a.value=(a.value+t+o)%o}function A(){u(-1)}function G(){u(1)}function Q(){a.value=0}function j(){a.value=s.value.length-1}const I=T(null);return le(()=>{var t;window.ResizeObserver&&(I.value=new window.ResizeObserver(()=>{r()})),(t=m.value)==null||t.querySelectorAll(".av-tab-content").forEach(o=>{var l;o&&((l=I.value)==null||l.observe(o))})}),de(()=>{var t,o;(t=m.value)==null||t.querySelectorAll(".av-tab-content").forEach(l=>{var n;l&&((n=I.value)==null||n.unobserve(l))}),(o=I.value)==null||o.disconnect()}),(t,o)=>(b(),g("div",{ref_key:"$el",ref:m,class:y(["av-tabs",{"av-tabs--compact":e.compact}]),style:be(k(h))},[x("ul",{ref_key:"tablist",ref:p,class:y(["av-tabs__list av-row av-px-xs av-py-none av-align-center av-gap-sm",{"av-tabs__list--compact":e.compact,"av-w-full":!e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(b(!0),g(E,null,F(k(s),(l,n)=>{var D,q;return b(),w(R,{key:n,"tab-id":c(n),"panel-id":`${c(n)}-panel`,title:(D=l.props)==null?void 0:D.title,icon:(q=l.props)==null?void 0:q.icon,compact:e.compact,"is-selected":a.value===n,onClick:ge=>a.value=n,onNext:G,onPrevious:A,onFirst:Q,onLast:j},null,8,["tab-id","panel-id","title","icon","compact","is-selected","onClick"])}),128))],10,he),(b(!0),g(E,null,F(k(s),(l,n)=>(b(),w(O,{key:n,"panel-id":`${c(n)}-panel`,"tab-id":c(n),"is-visible":a.value===n},{default:me(()=>[a.value===n?(b(),w(ue(l.children.default),{key:0})):_("",!0)]),_:2},1032,["panel-id","tab-id","is-visible"]))),128))],6))}}),K=$(U,[["__scopeId","data-v-56676859"]]);U.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"'false'",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const Se={title:"Components/Interaction/Tabs/AvTabs",component:K,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},W=e=>({components:{AvTabs:K,AvTab:J,TabContent:O,TabItem:R},setup(){const i=T(0);return{args:e,activeTab:i}},template:`
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
  `}),v=W.bind({});v.args={};v.parameters={docs:{source:{code:`
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
      `}}};const f=W.bind({});f.args={compact:!0};f.parameters={docs:{source:{code:`
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
})`,...(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const xe=["Default","Compact"];export{f as Compact,v as Default,xe as __namedExportsOrder,Se as default};
