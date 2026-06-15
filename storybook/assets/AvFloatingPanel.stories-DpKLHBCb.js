import{m as D,g as d,k as p,a4 as u,Y as M,H as g,d as s,N as k,W as T,R as W,f as B}from"./iframe-CU1L5LoN.js";import{A as E}from"./AvIconText-BAqLxNH4.js";import{A as Y}from"./AvCard-Czj-9wwb.js";import{M as c}from"./icons-BJ4bGiUf.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-CReGdcLP.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-Be0tRBtb.js";import"./AvButton-ChxwzknD.js";import"./string-BZgCOP9D.js";const U={class:"av-floating-panel av-floating-right","data-testid":"av-floating-panel"},V={class:"av-row av-gap-sm av-align-end","data-testid":"av-floating-panel-title"},L={class:"av-flex-fill"},j={key:0},H={class:"av-max-lines av-text-primary1 s2-light",style:{"--max-lines":"1"},"data-testid":"av-floating-panel-subtitle"},R={"data-testid":"av-floating-panel-content"},N=D({__name:"AvFloatingPanel",props:{title:{},subtitle:{},icon:{},defaultCollapsed:{type:Boolean,default:!0},width:{default:"var(--dimension-8xl)"}},setup(e){return M(r=>({v4ab2ffbf:r.width})),(r,$)=>(g(),d("div",U,[p(Y,{collapsible:"",collapsed:e.defaultCollapsed,role:"region","aria-label":e.title,"data-testid":"av-floating-panel-card"},{title:u(()=>[s("div",V,[s("div",L,[p(E,{icon:e.icon??T(c).CHAT_BUBBLE_OUTLINE,text:e.title,"icon-color":"var(--dark-background-primary1)","text-color":"var(--dark-background-primary1)",gap:"var(--spacing-sm)","typography-class":"s1-regular"},null,8,["icon","text"])]),e.subtitle?(g(),d("div",j,[s("span",H,W(e.subtitle),1)])):B("",!0)])]),default:u(()=>[s("div",R,[k(r.$slots,"default",{},void 0,!0)])]),_:3},8,["collapsed","aria-label"])]))}}),O=q(N,[["__scopeId","data-v-0f959822"]]);N.__docgenInfo={exportName:"default",displayName:"AvFloatingPanel",description:"",tags:{},props:[{name:"title",description:"Title displayed in the panel header.",required:!0,type:{name:"string"}},{name:"subtitle",description:"Subtitle displayed in the panel header.",required:!1,type:{name:"string"}},{name:"icon",description:"Icon name (MDI or other iconify icon) displayed next to the title.",required:!1,type:{name:"string"}},{name:"defaultCollapsed",description:"Controls the initial collapsed state of the panel.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"width",description:"Width of the panel.",tags:{default:[{description:"'var(--dimension-8xl)'",title:"default"}]},required:!1,type:{name:"string"}}],slots:[{name:"default",description:"Main content of the panel."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue"]};const le={title:"Components/Overlay/FloatingPanel/AvFloatingPanel",component:O,argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:"text"},defaultCollapsed:{control:"boolean"},width:{control:"text"}},args:{title:"Contextual help",subtitle:"",icon:c.INFORMATION_OUTLINE,defaultCollapsed:!0,width:"var(--dimension-8xl)"},parameters:{docs:{story:{height:"28rem"},description:{component:`<h1 class="n1">Floating Panel - <code>AvFloatingPanel</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFloatingPanel</code> component is a fixed panel anchored at the bottom-right
    of the viewport.
  </span>
</p>

<p>
  <span class="b2-regular">
    It wraps an <code>AvCard</code> in collapsible mode and is intended for contextual content
    that must remain available without interrupting the user's current page.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">
      A fixed container positioned in the bottom-right corner of the viewport.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A header area containing an icon and a title.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      An optional subtitle displayed on the same header line.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A collapsible <code>AvCard</code> used to render the panel body.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A <code>default</code> slot used to display the panel content.
    </span>
  </li>
</ul>`}},layout:"fullscreen"}},i=e=>({components:{AvFloatingPanel:O},setup(){return{args:e,MDI_ICONS:c}},template:`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  `}),o=i.bind({}),a=i.bind({});a.args={defaultCollapsed:!1};const n=i.bind({});n.args={title:"Project overview",subtitle:"Updated 2 minutes ago"};const t=i.bind({});t.args={title:"Project overview",subtitle:"Updated 2 minutes ago",width:"fit-content"};const l=i.bind({});l.args={icon:void 0};var m,v,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    AvFloatingPanel
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  \`
})`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,h,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvFloatingPanel
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  \`
})`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,x,C;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvFloatingPanel
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  \`
})`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var F,I,P;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvFloatingPanel
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  \`
})`,...(P=(I=t.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var _,w,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvFloatingPanel
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  \`
})`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const ie=["Default","Expanded","WithSubtitle","WithSubtitleAndFitContent","WithouIcon"];export{o as Default,a as Expanded,n as WithSubtitle,t as WithSubtitleAndFitContent,l as WithouIcon,ie as __namedExportsOrder,le as default};
