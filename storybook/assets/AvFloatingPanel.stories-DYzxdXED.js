import{m as O,g as u,k as d,a4 as c,Y as D,H as g,d as i,N as E,W as M,R as T,f as k}from"./iframe-DDbxKQwF.js";import{A as W}from"./AvIconText-BxrGQ5cG.js";import{A as q}from"./AvCard-D2zkeeDN.js";import{A as B}from"./AvTooltip-CUwtNIyJ.js";import{M as p}from"./icons-BJ4bGiUf.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-CdAhybVA.js";import"./icon-path-u9rVYwcY.js";import"./AvButton-DQMpJ8_8.js";import"./string-BZgCOP9D.js";const U={class:"av-floating-panel av-floating-right","data-testid":"av-floating-panel"},R={class:"av-row av-gap-sm av-align-center av-flex-fill av-wrap-anywhere","data-testid":"av-floating-panel-title"},V={class:"av-row"},j={key:0,class:"av-flex-fill av-wrap-anywhere"},H={class:"av-max-lines av-text-primary1 s2-light",style:{"--max-lines":"1"},"data-testid":"av-floating-panel-subtitle"},$={"data-testid":"av-floating-panel-content"},N=O({__name:"AvFloatingPanel",props:{title:{},subtitle:{},icon:{},defaultCollapsed:{type:Boolean,default:!0},width:{default:"var(--dimension-8xl)"},collapseLabel:{default:"Collapse panel"},expandLabel:{default:"Expand panel"}},setup(e){return D(r=>({v0945839c:r.width})),(r,z)=>(g(),u("div",U,[d(q,{collapsible:"",collapsed:e.defaultCollapsed,role:"region","aria-label":e.title,"collapse-label":e.collapseLabel,"expand-label":e.expandLabel,"data-testid":"av-floating-panel-card"},{title:c(()=>[i("div",R,[i("div",V,[d(W,{icon:e.icon??M(p).CHAT_BUBBLE_OUTLINE,text:e.title,"icon-color":"var(--dark-background-primary1)","text-color":"var(--dark-background-primary1)",gap:"var(--spacing-sm)","typography-class":"n6",inline:""},null,8,["icon","text"])]),e.subtitle?(g(),u("div",j,[d(B,{content:e.subtitle,"force-focusable":""},{default:c(()=>[i("span",H,T(e.subtitle),1)]),_:1},8,["content"])])):k("",!0)])]),default:c(()=>[i("div",$,[E(r.$slots,"default",{},void 0,!0)])]),_:3},8,["collapsed","aria-label","collapse-label","expand-label"])]))}}),L=Y(N,[["__scopeId","data-v-29e45948"]]);N.__docgenInfo={exportName:"default",displayName:"AvFloatingPanel",description:"",tags:{},props:[{name:"title",description:"Title displayed in the panel header.",required:!0,type:{name:"string"}},{name:"subtitle",description:"Subtitle displayed in the panel header.",required:!1,type:{name:"string"}},{name:"icon",description:"Icon name (MDI or other iconify icon) displayed next to the title.",required:!1,type:{name:"string"}},{name:"defaultCollapsed",description:"Controls the initial collapsed state of the panel.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"width",description:"Width of the panel.",tags:{default:[{description:"'var(--dimension-8xl)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"collapseLabel",description:"ARIA label for the collapse button when the panel is expanded.",tags:{default:[{description:"'Collapse panel'",title:"default"}]},required:!1,type:{name:"string"}},{name:"expandLabel",description:"ARIA label for the expand button when the panel is collapsed.",tags:{default:[{description:"'Expand panel'",title:"default"}]},required:!1,type:{name:"string"}}],slots:[{name:"default",description:"Main content of the panel."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue"]};const se={title:"Components/Overlay/FloatingPanel/AvFloatingPanel",component:L,argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:"text"},defaultCollapsed:{control:"boolean"},width:{control:"text"},collapseLabel:{control:"text"},expandLabel:{control:"text"}},args:{title:"Contextual help",subtitle:"",icon:p.INFORMATION_OUTLINE,defaultCollapsed:!0,width:"var(--dimension-8xl)",collapseLabel:"Collapse panel",expandLabel:"Expand panel"},parameters:{docs:{story:{height:"28rem"},description:{component:`<h1 class="n1">Floating Panel - <code>AvFloatingPanel</code></h1>

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
</ul>`}},layout:"fullscreen"}},s=e=>({components:{AvFloatingPanel:L},setup(){return{args:e,MDI_ICONS:p}},template:`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  `}),o=s.bind({}),a=s.bind({});a.args={defaultCollapsed:!1};const n=s.bind({});n.args={title:"Project overview",subtitle:"Updated 2 minutes ago"};const t=s.bind({});t.args={title:"Project overview",subtitle:"Updated 2 minutes ago",width:"fit-content"};const l=s.bind({});l.args={icon:void 0};var m,v,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,A,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,F,P;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(P=(F=t.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var w,_,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const ie=["Default","Expanded","WithSubtitle","WithSubtitleAndFitContent","WithouIcon"];export{o as Default,a as Expanded,n as WithSubtitle,t as WithSubtitleAndFitContent,l as WithouIcon,ie as __namedExportsOrder,se as default};
