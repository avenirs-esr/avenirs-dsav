import{_ as X}from"./AvTab-BK7ykaes.js";import{c as I,d as x,U as Y,H as A,I as H,Z as ee,Q as te,u as f,o as u,O as ae,b as C,n as w,h as ne,_ as se,r as T,$ as oe,w as M,a as S,B as ie,t as re,J as le,e as ce,M as de,A as be,N as ue,y as me,i as pe,D as ve,F as q,g as F,S as fe,L as Te}from"./iframe-CYHIPOtb.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as he}from"./AvIcon-DWTCp2s-.js";import"./preload-helper-ILsKNznc.js";function ge(e){const n={true:"100%",false:"-100%"},s=I(()=>e.value?n.true:n.false),a=I(()=>e.value?n.false:n.true);return{translateValueFrom:s,translateValueTo:a}}const ye=["id","aria-labelledby","tabindex"],O=x({__name:"TabContent",props:{panelId:{},tabId:{},isVisible:{type:Boolean},asc:{type:Boolean}},setup(e){te(r=>({bdb82ff8:f(s),v7effa556:f(a)}));const n=e,{translateValueFrom:s,translateValueTo:a}=ge(Y(n,"asc"));return(r,d)=>(u(),A(ee,{name:"slide-fade",mode:"in-out"},{default:H(()=>[ae(C("div",{id:e.panelId,class:w(["av-tab-content fr-tabs__panel",{"fr-tabs__panel--selected":e.isVisible}]),role:"tabpanel","aria-labelledby":e.tabId,tabindex:e.isVisible?0:-1},[ne(r.$slots,"default",{},void 0,!0)],10,ye),[[se,e.isVisible]])]),_:3}))}}),R=D(O,[["__scopeId","data-v-a29edf24"]]);O.__docgenInfo={exportName:"default",displayName:"TabContent",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isVisible",description:"Whether the tab content is visible.",required:!0,type:{name:"boolean"}},{name:"asc",description:`Direction of the tab transition animation.
True for ascending (left to right), false for descending (right to left).`,required:!0,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing tab panel content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabContent.vue"]};const Ae=["id","data-testid","tabindex","aria-selected","aria-controls"],U=x({__name:"TabItem",props:{panelId:{},tabId:{},isSelected:{type:Boolean},title:{},icon:{},compact:{type:Boolean,default:!1}},emits:["click","next","previous","first","last"],setup(e,{emit:n}){const s=n,a=T(null),r=oe("button"),d=I(()=>e.isSelected?"s2-bold":"s2-regular"),m={ArrowRight:"next",ArrowLeft:"previous",Home:"first",End:"last"};function v(l){const p=l==null?void 0:l.key,b=m[p];if(b)switch(b){case"next":s("next");break;case"previous":s("previous");break;case"first":s("first");break;case"last":s("last");break}}return M(()=>e.isSelected,()=>{var l;e.isSelected&&((l=r.value)==null||l.focus())}),(l,p)=>{const b=he;return u(),S("li",{class:w(["av-tab-item",{"av-tab-item--compact":e.compact}]),role:"presentation"},[C("button",le(l.$attrs,{id:e.tabId,ref_key:"button",ref:a,"data-testid":`test-${e.tabId}`,class:["av-tab-item__tab fr-tabs__tab",{"av-tab-item--compact__tab":e.compact}],tabindex:e.isSelected?0:-1,role:"tab",type:"button","aria-selected":e.isSelected,"aria-controls":e.panelId,onClick:p[0]||(p[0]=ce(y=>l.$emit("click",e.tabId),["prevent"])),onKeydown:p[1]||(p[1]=y=>v(y))}),[e.icon?(u(),A(b,{key:0,name:e.icon,size:2},null,8,["name"])):ie("",!0),C("span",{class:w(f(d))},re(e.title),3)],16,Ae)],2)}}}),P=D(U,[["__scopeId","data-v-be2c9a98"]]);U.__docgenInfo={exportName:"default",displayName:"TabItem",description:"",tags:{},props:[{name:"panelId",description:"ID of the associated tab panel.",required:!0,type:{name:"string"}},{name:"tabId",description:"ID of the tab item.",required:!0,type:{name:"string"}},{name:"isSelected",description:"Whether the tab is currently selected.",required:!0,type:{name:"boolean"}},{name:"title",description:"Title of the tab displayed in the tab bar.",required:!0,type:{name:"string"}},{name:"icon",description:"Name of the icon to display in the tab.",required:!1,type:{name:"string"}},{name:"compact",description:"Whether the tab is displayed in compact mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"click",type:{names:["string"]},description:"Emitted when the tab is clicked.",properties:[{type:{names:["mixed"]},name:"tabId",description:"The ID of the clicked tab."}],tags:[{title:"param",type:{name:"mixed"},name:"tabId",description:"The ID of the clicked tab."}]},{name:"next",description:"Emitted when the user navigates to the next tab."},{name:"previous",description:"Emitted when the user navigates to the previous tab."},{name:"first",description:"Emitted when the user navigates to the first tab."},{name:"last",description:"Emitted when the user navigates to the last tab."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/components/TabItem.vue"]};function Ie(e,n,s){const a=T({"--tabs-height":"100px"});function r(){if(s.value<0||!e.value||!e.value.offsetHeight)return;const d=e.value.offsetHeight,m=n.value[s.value];if(!m||!m.offsetHeight)return;const v=m.offsetHeight;a.value["--tabs-height"]=`${d+v}px`}return{tabsStyle:a,updateTabsStyle:r}}const we=["aria-label"],W=x({__name:"AvTabs",props:de({ariaLabel:{},compact:{type:Boolean,default:!1}},{modelValue:{default:0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=be(),s=I(()=>{var t;return((t=n.default)==null?void 0:t.call(n))||[]}),a=ue(e,"modelValue"),r=T(!1),d=T(null),m=T(null),v=me({}),{tabsStyle:l,updateTabsStyle:p}=Ie(m,I(()=>{var t;return Array.from(((t=d.value)==null?void 0:t.querySelectorAll(".av-tab-content"))||[])}),a);function b(t){if(v[t])return v[t];const o=`tab-${crypto.randomUUID()}`;return v[t]=o,o}function y(t){const o=s.value.length;a.value=(a.value+t+o)%o}function Q(){r.value=!1,y(-1)}function Z(){r.value=!0,y(1)}function j(){a.value=0}function G(){a.value=s.value.length-1}const k=T(null);return pe(()=>{var t;window.ResizeObserver&&(k.value=new window.ResizeObserver(()=>{p()})),(t=d.value)==null||t.querySelectorAll(".av-tab-content").forEach(o=>{var c;o&&((c=k.value)==null||c.observe(o))})}),ve(()=>{var t,o;(t=d.value)==null||t.querySelectorAll(".av-tab-content").forEach(c=>{var i;c&&((i=k.value)==null||i.unobserve(c))}),(o=k.value)==null||o.disconnect()}),M(a,(t,o)=>{r.value=t>o}),(t,o)=>(u(),S("div",{ref_key:"$el",ref:d,class:w(["av-tabs fr-tabs",{"av-tabs--compact":e.compact}]),style:fe(f(l))},[C("ul",{ref_key:"tablist",ref:m,class:w(["av-tabs__list fr-tabs__list",{"av-tabs__list--compact":e.compact}]),role:"tablist","aria-label":e.ariaLabel??"Liste d’onglets"},[(u(!0),S(q,null,F(f(s),(c,i)=>{var _,$;return u(),A(P,{key:i,"tab-id":b(i),"panel-id":`${b(i)}-panel`,title:(_=c.props)==null?void 0:_.title,icon:($=c.props)==null?void 0:$.icon,compact:e.compact,"is-selected":a.value===i,onClick:ke=>a.value=i,onNext:Z,onPrevious:Q,onFirst:j,onLast:G},null,8,["tab-id","panel-id","title","icon","compact","is-selected","onClick"])}),128))],10,we),(u(!0),S(q,null,F(f(s),(c,i)=>(u(),A(R,{key:i,"panel-id":`${b(i)}-panel`,"tab-id":b(i),"is-visible":a.value===i,asc:f(r)},{default:H(()=>[(u(),A(Te(c.children.default)))]),_:2},1032,["panel-id","tab-id","is-visible","asc"]))),128))],6))}}),K=D(W,[["__scopeId","data-v-a64ed698"]]);W.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"'false'",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const $e={title:"Components/Interaction/Tabs/AvTabs",component:K,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},compact:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},J=e=>({components:{AvTabs:K,AvTab:X,TabContent:R,TabItem:P},setup(){const n=T(0);return{args:e,activeTab:n}},template:`
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
  `}),h=J.bind({});h.args={};h.parameters={docs:{source:{code:`
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
      `}}};const g=J.bind({});g.args={compact:!0};g.parameters={docs:{source:{code:`
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
      `}}};var V,E,N;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(N=(E=h.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var L,B,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(z=(B=g.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};const qe=["Default","Compact"];export{g as Compact,h as Default,qe as __namedExportsOrder,$e as default};
