import{u as O,n as f,r as u,aq as c,a4 as y,ai as D,$ as b,k as s,a6 as L,ag as v,ab as T,m as B}from"./iframe-Bv_rUoCq.js";import{A as W}from"./AvIconText-BMpBFcGV.js";import{A as Y}from"./AvCard-D8aNkdGx.js";import{A as j}from"./AvTooltip-t-xca0NX.js";import{u as K}from"./use-text-truncation-BQ6hQAek.js";import{M as p}from"./icons-Dyb4xUo3.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-itid32EZ.js";import"./icon-path-u9rVYwcY.js";import"./AvButton-tRwtxnl8.js";import"./string-BZgCOP9D.js";const z={class:"av-floating-panel av-floating-right","data-testid":"av-floating-panel"},G={class:"av-row av-gap-sm av-align-center av-flex-fill av-wrap-anywhere","data-testid":"av-floating-panel-title"},J={class:"av-row"},Q={key:0,class:"av-flex-fill av-wrap-anywhere"},X={"data-testid":"av-floating-panel-content"},r=O({__name:"AvFloatingPanel",props:{title:{},subtitle:{},icon:{},defaultCollapsed:{type:Boolean,default:!0},width:{default:"var(--dimension-8xl)"},collapseLabel:{default:"Collapse panel"},expandLabel:{default:"Expand panel"}},setup(e,{expose:q}){D(n=>({v2a678154:n.width}));const m=y(null),g=y(null),{isTruncated:S}=K(g);function U(){var n;(n=m.value)==null||n.toggleCollapsed()}return q({toggleCollapsed:U}),(n,Z)=>(b(),f("div",z,[u(Y,{ref_key:"cardRef",ref:m,collapsible:"",collapsed:e.defaultCollapsed,role:"region","aria-label":e.title,"collapse-label":e.collapseLabel,"expand-label":e.expandLabel,"data-testid":"av-floating-panel-card"},{title:c(()=>[s("div",G,[s("div",J,[u(W,{icon:e.icon??v(p).CHAT_BUBBLE_OUTLINE,text:e.title,"icon-color":"var(--dark-background-primary1)","text-color":"var(--dark-background-primary1)",gap:"var(--spacing-sm)","typography-class":"n6",inline:""},null,8,["icon","text"])]),e.subtitle?(b(),f("div",Q,[u(j,{disabled:!v(S),content:e.subtitle,"force-focusable":""},{default:c(()=>[s("span",{ref_key:"subtitleRef",ref:g,class:"av-max-lines av-text-primary1 s2-light",style:{"--max-lines":"1"},"data-testid":"av-floating-panel-subtitle"},T(e.subtitle),513)]),_:1},8,["disabled","content"])])):B("",!0)])]),default:c(()=>[s("div",X,[L(n.$slots,"default",{},void 0,!0)])]),_:3},8,["collapsed","aria-label","collapse-label","expand-label"])]))}}),E=$(r,[["__scopeId","data-v-0217cd4e"]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"AvFloatingPanel",type:1,props:[{name:"title",global:!1,description:"Title displayed in the panel header.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"subtitle",global:!1,description:"Subtitle displayed in the panel header.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"icon",global:!1,description:"Icon name (MDI or other iconify icon) displayed next to the title.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"defaultCollapsed",global:!1,default:"true",description:"Controls the initial collapsed state of the panel.",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"width",global:!1,default:'"var(--dimension-8xl)"',description:"Width of the panel.",tags:[{name:"default",text:"'var(--dimension-8xl)'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"collapseLabel",global:!1,default:'"Collapse panel"',description:"ARIA label for the collapse button when the panel is expanded.",tags:[{name:"default",text:"'Collapse panel'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"expandLabel",global:!1,default:'"Expand panel"',description:"ARIA label for the expand button when the panel is collapsed.",tags:[{name:"default",text:"'Expand panel'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[{name:"default",type:"any[]",description:"Main content of the panel.",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[{name:"toggleCollapsed",type:"() => void",description:"",tags:[],schema:{kind:"event",type:"(): void"},declarations:[]}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/panels/AvFloatingPanel/AvFloatingPanel.vue"});const pe={title:"Components/Overlay/FloatingPanel/AvFloatingPanel",component:E,argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:"text"},defaultCollapsed:{control:"boolean"},width:{control:"text"},collapseLabel:{control:"text"},expandLabel:{control:"text"}},args:{title:"Contextual help",subtitle:"",icon:p.INFORMATION_OUTLINE,defaultCollapsed:!0,width:"var(--dimension-8xl)",collapseLabel:"Collapse panel",expandLabel:"Expand panel"},parameters:{docs:{story:{height:"28rem"},description:{component:`<h1 class="n1">Floating Panel - <code>AvFloatingPanel</code></h1>

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
</ul>`}},layout:"fullscreen"}},i=e=>({components:{AvFloatingPanel:E},setup(){return{args:e,MDI_ICONS:p}},template:`
    <AvFloatingPanel v-bind="args">
      <ul style="display: flex; flex-direction: column; gap: var(--spacing-sm); margin: 0; list-style: none;">
        <li class="b3-regular">You need to submit your application on 01/06/2026</li>
        <li class="b3-regular">Interview scheduled on 10/06/2026</li>
        <li class="b3-regular">Complete file</li>
      </ul>
    </AvFloatingPanel>
  `}),d=i.bind({}),a=i.bind({});a.args={defaultCollapsed:!1};const t=i.bind({});t.args={title:"Project overview",subtitle:"Updated 2 minutes ago"};const o=i.bind({});o.args={title:"Project overview",subtitle:"Updated 2 minutes ago",width:"fit-content"};const l=i.bind({});l.args={icon:void 0};const me=["Default","Expanded","WithSubtitle","WithSubtitleAndFitContent","WithouIcon"];var h,k,N;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(N=(k=d.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var x,V,A;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(A=(V=a.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var C,F,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(I=(F=t.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,w,H;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(H=(w=o.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var M,R,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};export{d as Default,a as Expanded,t as WithSubtitle,o as WithSubtitleAndFitContent,l as WithouIcon,me as __namedExportsOrder,pe as default};
