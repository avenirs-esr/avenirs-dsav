import{n as M,P as g,h as f,l as d,a9 as c,a1 as B,L as h,e as o,R as V,$ as b,X as W,g as Y}from"./iframe-DgkEMT2l.js";import{A as U}from"./AvIconText-D-jpwjUQ.js";import{A as j}from"./AvCard-CFVqIHV-.js";import{A as $}from"./AvTooltip-CFpDmL-o.js";import{u as K}from"./use-text-truncation-DzMRwadk.js";import{M as p}from"./icons-B6bk2eYx.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-CDZUs-61.js";import"./icon-path-u9rVYwcY.js";import"./AvButton-Bf0mo01p.js";import"./date-picker--oZ-mZS2.js";import"./string-Cy5T4FjC.js";const X={class:"av-floating-panel av-floating-right","data-testid":"av-floating-panel"},z={class:"av-row av-gap-sm av-align-center av-flex-fill av-wrap-anywhere","data-testid":"av-floating-panel-title"},G={class:"av-row"},J={key:0,class:"av-flex-fill av-wrap-anywhere"},Q={"data-testid":"av-floating-panel-content"},O=M({__name:"AvFloatingPanel",props:{title:{},subtitle:{},icon:{},defaultCollapsed:{type:Boolean,default:!0},width:{default:"var(--dimension-8xl)"},collapseLabel:{default:"Collapse panel"},expandLabel:{default:"Expand panel"}},setup(e,{expose:q}){B(n=>({v3d83160d:n.width}));const u=g(null),m=g(null),{isTruncated:E}=K(m);function D(){var n;(n=u.value)==null||n.toggleCollapsed()}return q({toggleCollapsed:D}),(n,Z)=>(h(),f("div",X,[d(j,{ref_key:"cardRef",ref:u,collapsible:"",collapsed:e.defaultCollapsed,role:"region","aria-label":e.title,"collapse-label":e.collapseLabel,"expand-label":e.expandLabel,"data-testid":"av-floating-panel-card"},{title:c(()=>[o("div",z,[o("div",G,[d(U,{icon:e.icon??b(p).CHAT_BUBBLE_OUTLINE,text:e.title,"icon-color":"var(--dark-background-primary1)","text-color":"var(--dark-background-primary1)",gap:"var(--spacing-sm)","typography-class":"n6",inline:""},null,8,["icon","text"])]),e.subtitle?(h(),f("div",J,[d($,{disabled:!b(E),content:e.subtitle,"force-focusable":""},{default:c(()=>[o("span",{ref_key:"subtitleRef",ref:m,class:"av-max-lines av-text-primary1 s2-light",style:{"--max-lines":"1"},"data-testid":"av-floating-panel-subtitle"},W(e.subtitle),513)]),_:1},8,["disabled","content"])])):Y("",!0)])]),default:c(()=>[o("div",Q,[V(n.$slots,"default",{},void 0,!0)])]),_:3},8,["collapsed","aria-label","collapse-label","expand-label"])]))}}),T=H(O,[["__scopeId","data-v-412a5590"]]);O.__docgenInfo={exportName:"default",displayName:"AvFloatingPanel",type:1,props:[{name:"title",global:!1,description:"Title displayed in the panel header.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"subtitle",global:!1,description:"Subtitle displayed in the panel header.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"icon",global:!1,description:"Icon name (MDI or other iconify icon) displayed next to the title.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"defaultCollapsed",global:!1,description:"Controls the initial collapsed state of the panel.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"true"},{name:"width",global:!1,description:"Width of the panel.",tags:[{name:"default",text:"'var(--dimension-8xl)'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"var(--dimension-8xl)"'},{name:"collapseLabel",global:!1,description:"ARIA label for the collapse button when the panel is expanded.",tags:[{name:"default",text:"'Collapse panel'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Collapse panel"'},{name:"expandLabel",global:!1,description:"ARIA label for the expand button when the panel is collapsed.",tags:[{name:"default",text:"'Expand panel'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Expand panel"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"any[]",description:"Main content of the panel.",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"width",type:"string | undefined",description:"Width of the panel.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"title",type:"string",description:"Title displayed in the panel header.",declarations:[],schema:"string"},{name:"icon",type:"string | undefined",description:"Icon name (MDI or other iconify icon) displayed next to the title.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"subtitle",type:"string | undefined",description:"Subtitle displayed in the panel header.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"defaultCollapsed",type:"boolean | undefined",description:"Controls the initial collapsed state of the panel.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"collapseLabel",type:"string | undefined",description:"ARIA label for the collapse button when the panel is expanded.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"expandLabel",type:"string | undefined",description:"ARIA label for the expand button when the panel is collapsed.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"toggleCollapsed",type:"() => void",description:"",declarations:[],schema:{kind:"event",type:"(): void"}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue"};const me={title:"Components/Overlay/FloatingPanel/AvFloatingPanel",component:T,argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:"text"},defaultCollapsed:{control:"boolean"},width:{control:"text"},collapseLabel:{control:"text"},expandLabel:{control:"text"}},args:{title:"Contextual help",subtitle:"",icon:p.INFORMATION_OUTLINE,defaultCollapsed:!0,width:"var(--dimension-8xl)",collapseLabel:"Collapse panel",expandLabel:"Expand panel"},parameters:{docs:{story:{height:"28rem"},description:{component:`<h1 class="n1">Floating Panel - <code>AvFloatingPanel</code></h1>

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
</ul>`}},layout:"fullscreen"}},s=e=>({components:{AvFloatingPanel:T},setup(){return{args:e,MDI_ICONS:p}},template:`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  `}),r=s.bind({}),a=s.bind({});a.args={defaultCollapsed:!1};const t=s.bind({});t.args={title:"Project overview",subtitle:"Updated 2 minutes ago"};const l=s.bind({});l.args={title:"Project overview",subtitle:"Updated 2 minutes ago",width:"fit-content"};const i=s.bind({});i.args={icon:void 0};var y,v,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,C,I;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var k,w,P;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var F,_,S;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var L,N,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const ge=["Default","Expanded","WithSubtitle","WithSubtitleAndFitContent","WithouIcon"];export{r as Default,a as Expanded,t as WithSubtitle,l as WithSubtitleAndFitContent,i as WithouIcon,ge as __namedExportsOrder,me as default};
