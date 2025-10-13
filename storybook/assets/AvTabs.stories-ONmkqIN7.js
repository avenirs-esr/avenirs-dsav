import{_ as Y}from"./AvTab-BRfn51Ug.js";import{m as Z,Y as j,Z as M}from"./vue-dsfr-CfU3oKsL.js";import{d as O,U as R,r as G,c as H,x as f,k as d,w as p,n as A,V as J,B as u,i as o,b as g,F as h,j as y,M as K,m as Q,t as W}from"./iframe-DhY3rxPY.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const C=O({__name:"AvTabs",props:{ariaLabel:{},modelValue:{},compact:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{expose:L,emit:D}){const $=D,m=R(),e=G(n.modelValue),r=H(()=>{var a;return((a=m.default)==null?void 0:a.call(m))||[]});function v(a){const i=r.value.length;e.value=(e.value+a+i)%i}function B(){v(-1)}function N(){v(1)}function q(){e.value=0}function E(){e.value=r.value.length-1}return f(()=>n.modelValue,a=>{a!==void 0&&(e.value=a)}),f(e,a=>{$("update:modelValue",a)}),L({activeTab:e}),(a,i)=>{const z=M,U=j,P=Z;return o(),d(P,{modelValue:u(e),"onUpdate:modelValue":i[0]||(i[0]=s=>J(e)?e.value=s:null),class:A({compact:n.compact}),"tab-list-name":n.ariaLabel??"Liste d’onglets","tab-titles":[]},{"tab-items":p(()=>[(o(!0),g(h,null,y(u(r),(s,t)=>{var T;return o(),d(z,{key:t,class:A({compact:n.compact}),"tab-id":`tab-${t}`,"panel-id":`panel-${t}`,icon:(T=s.props)==null?void 0:T.icon,onClick:b=>e.value=t,onNext:N,onPrevious:B,onFirst:q,onLast:E},{default:p(()=>{var b;return[Q(W((b=s.props)==null?void 0:b.title),1)]}),_:2},1032,["class","tab-id","panel-id","icon","onClick"])}),128))]),default:p(()=>[(o(!0),g(h,null,y(u(r),(s,t)=>(o(),d(U,{key:t,"panel-id":`panel-${t}`,"tab-id":`tab-${t}`},{default:p(()=>[(o(),d(K(s.children.default)))]),_:2},1032,["panel-id","tab-id"]))),128))]),_:1},8,["modelValue","class","tab-list-name"])}}}),F=X(C,[["__scopeId","data-v-dbd71c5f"]]);C.__docgenInfo={exportName:"default",displayName:"AvTabs",description:"",tags:{},expose:[{name:"activeTab"}],props:[{name:"ariaLabel",description:`Aria label for tab list.
Improves accessibility by providing a description for screen readers.`,required:!1,type:{name:"string"}},{name:"modelValue",description:`Index of selected tab on loading.
Index starts at 0.`,required:!0,type:{name:"number"}},{name:"compact",description:`Allows compact display:
Underline without central pipe.`,tags:{default:[{description:"'false'",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["number"]},description:"Emitted when a tab is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Index (`number`) of the selected tab."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Index (`number`) of the selected tab."}]}],slots:[{name:"default",description:"Default slot for passing `AvTab` components."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/tabs/AvTabs/AvTabs.vue"]};const oe={title:"Components/Interaction/Tabs/AvTabs",component:F,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},modelValue:{type:{name:"number",required:!0},control:"number"},compact:{control:"boolean"}},args:{ariaLabel:"Tabs switcher",compact:!1},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTabs</code></h1>

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
</p>`}}}},S=n=>({components:{AvTabs:F,AvTab:Y},setup(){return{args:n}},template:`
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
  `}),l=S.bind({});l.args={};l.parameters={docs:{source:{code:`
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
      `}}};const c=S.bind({});c.args={compact:!0};c.parameters={docs:{source:{code:`
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
      `}}};var _,w,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab
  },
  setup() {
    return {
      args
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
})`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,I,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvTabs,
    AvTab
  },
  setup() {
    return {
      args
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
})`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const le=["Default","Compact"];export{c as Compact,l as Default,le as __namedExportsOrder,oe as default};
