import{m as E,L as M,g,k as d,a4 as c,Y as T,H as m,d as i,N as W,W as q,R as B,f as Y}from"./iframe-CTj483ov.js";import{A as R}from"./AvIconText-ylcNyQRc.js";import{A as U}from"./AvCard-jDAJhcST.js";import{A as V}from"./AvTooltip-GwHRwPfg.js";import{M as p}from"./icons-CFe2UbDp.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-D2M8Zp2e.js";import"./icon-path-u9rVYwcY.js";import"./AvButton-cB4bEPq-.js";import"./string-BZgCOP9D.js";const H={class:"av-floating-panel av-floating-right","data-testid":"av-floating-panel"},$={class:"av-row av-gap-sm av-align-center av-flex-fill av-wrap-anywhere","data-testid":"av-floating-panel-title"},z={class:"av-row"},G={key:0,class:"av-flex-fill av-wrap-anywhere"},J={class:"av-max-lines av-text-primary1 s2-light",style:{"--max-lines":"1"},"data-testid":"av-floating-panel-subtitle"},K={"data-testid":"av-floating-panel-content"},L=E({__name:"AvFloatingPanel",props:{title:{},subtitle:{},icon:{},defaultCollapsed:{type:Boolean,default:!0},width:{default:"var(--dimension-8xl)"},collapseLabel:{default:"Collapse panel"},expandLabel:{default:"Expand panel"}},setup(e,{expose:k}){T(a=>({v42cd021a:a.width}));const u=M(null);function D(){var a;(a=u.value)==null||a.toggleCollapsed()}return k({toggleCollapsed:D}),(a,Q)=>(m(),g("div",H,[d(U,{ref_key:"cardRef",ref:u,collapsible:"",collapsed:e.defaultCollapsed,role:"region","aria-label":e.title,"collapse-label":e.collapseLabel,"expand-label":e.expandLabel,"data-testid":"av-floating-panel-card"},{title:c(()=>[i("div",$,[i("div",z,[d(R,{icon:e.icon??q(p).CHAT_BUBBLE_OUTLINE,text:e.title,"icon-color":"var(--dark-background-primary1)","text-color":"var(--dark-background-primary1)",gap:"var(--spacing-sm)","typography-class":"n6",inline:""},null,8,["icon","text"])]),e.subtitle?(m(),g("div",G,[d(V,{content:e.subtitle,"force-focusable":""},{default:c(()=>[i("span",J,B(e.subtitle),1)]),_:1},8,["content"])])):Y("",!0)])]),default:c(()=>[i("div",K,[W(a.$slots,"default",{},void 0,!0)])]),_:3},8,["collapsed","aria-label","collapse-label","expand-label"])]))}}),O=j(L,[["__scopeId","data-v-fcb2b772"]]);L.__docgenInfo={exportName:"default",displayName:"AvFloatingPanel",description:"",tags:{},expose:[{name:"toggleCollapsed"}],props:[{name:"title",description:"Title displayed in the panel header.",required:!0,type:{name:"string"}},{name:"subtitle",description:"Subtitle displayed in the panel header.",required:!1,type:{name:"string"}},{name:"icon",description:"Icon name (MDI or other iconify icon) displayed next to the title.",required:!1,type:{name:"string"}},{name:"defaultCollapsed",description:"Controls the initial collapsed state of the panel.",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"width",description:"Width of the panel.",tags:{default:[{description:"'var(--dimension-8xl)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"collapseLabel",description:"ARIA label for the collapse button when the panel is expanded.",tags:{default:[{description:"'Collapse panel'",title:"default"}]},required:!1,type:{name:"string"}},{name:"expandLabel",description:"ARIA label for the expand button when the panel is collapsed.",tags:{default:[{description:"'Expand panel'",title:"default"}]},required:!1,type:{name:"string"}}],slots:[{name:"default",description:"Main content of the panel."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue"]};const de={title:"Components/Overlay/FloatingPanel/AvFloatingPanel",component:O,argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:"text"},defaultCollapsed:{control:"boolean"},width:{control:"text"},collapseLabel:{control:"text"},expandLabel:{control:"text"}},args:{title:"Contextual help",subtitle:"",icon:p.INFORMATION_OUTLINE,defaultCollapsed:!0,width:"var(--dimension-8xl)",collapseLabel:"Collapse panel",expandLabel:"Expand panel"},parameters:{docs:{story:{height:"28rem"},description:{component:`<h1 class="n1">Floating Panel - <code>AvFloatingPanel</code></h1>

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
</ul>`}},layout:"fullscreen"}},o=e=>({components:{AvFloatingPanel:O},setup(){return{args:e,MDI_ICONS:p}},template:`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  `}),r=o.bind({}),n=o.bind({});n.args={defaultCollapsed:!1};const l=o.bind({});l.args={title:"Project overview",subtitle:"Updated 2 minutes ago"};const t=o.bind({});t.args={title:"Project overview",subtitle:"Updated 2 minutes ago",width:"fit-content"};const s=o.bind({});s.args={icon:void 0};var f,v,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,x,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var A,C,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var F,P,w;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(w=(P=t.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var _,S,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const ce=["Default","Expanded","WithSubtitle","WithSubtitleAndFitContent","WithouIcon"];export{r as Default,n as Expanded,l as WithSubtitle,t as WithSubtitleAndFitContent,s as WithouIcon,ce as __namedExportsOrder,de as default};
