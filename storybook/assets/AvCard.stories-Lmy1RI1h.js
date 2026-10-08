import{A as p}from"./AvCard-ChKae5jb.js";import"./AvButton-clQKuqJn.js";import"./AvTooltip-DKUUDH_R.js";import"./iframe-D4Ai9mOO.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-D73z_sAu.js";import"./icon-path-u9rVYwcY.js";import"./icons-Dyb4xUo3.js";import"./string-BZgCOP9D.js";const K={title:"Components/Cards/AvCard",component:p,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0,collapsible:!1,collapsed:!1},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCard</code> component is used to create customizable, styled containers.
    It provides a structured layout with optional sections and can include collapsible behavior
    for advanced interactions.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">A main wrapper <code>div</code>.</span>
  </li>
  <li>
    <span class="b2-regular">A title area rendered through the <code>title</code> slot.</span>
  </li>
  <li>
    <span class="b2-regular">A <code>default</code> slot for general content.</span>
  </li>
  <li>
    <span class="b2-regular">A body section rendered through the <code>body</code> slot.</span>
  </li>
  <li>
    <span class="b2-regular">A footer section rendered through the <code>footer</code> slot.</span>
  </li>
</ul>

<p>
  <span class="b2-regular">
    When the <code>collapsible</code> prop is enabled, the card displays only the
    <code>title</code> slot along with a toggle button that expands or collapses
    the rest of the content.
  </span>
</p>`}}}},c=e=>({components:{AvCard:p},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  `}),Y=e=>({components:{AvCard:p},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),t=c.bind({});t.args={};const a=c.bind({});a.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const n=Y.bind({});n.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};const r=c.bind({});r.args={collapsible:!0};const o=c.bind({});o.args={collapsible:!0,collapsed:!0};const l=c.bind({});l.args={titleOnly:!0};const B=e=>({components:{AvCard:p},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <template #title="{ collapsed }">
        <h3 class="n3" style="margin: 0;">{{ collapsed ? 'Collapsed state' : 'Expanded state' }}</h3>
      </template>
      <template #body>
        <p class="b2-regular">Click the card title area or the toggle button to see the title text update.</p>
      </template>
    </AvCard>
  `}),s=B.bind({});s.args={collapsible:!0,collapsed:!1};const L=["Default","WithCustomColors","WithOnlyDefaultSlot","Collapsible","CollapsedByDefault","TitleOnly","CollapsibleWithDynamicTitle"];var d,i,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,C,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  \`
})`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var y,A,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(f=(A=r.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var T,k,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var S,x,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(F=(x=l.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var W,M,O;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title="{ collapsed }">
        <h3 class="n3" style="margin: 0;">{{ collapsed ? 'Collapsed state' : 'Expanded state' }}</h3>
      </template>
      <template #body>
        <p class="b2-regular">Click the card title area or the toggle button to see the title text update.</p>
      </template>
    </AvCard>
  \`
})`,...(O=(M=s.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};export{o as CollapsedByDefault,r as Collapsible,s as CollapsibleWithDynamicTitle,t as Default,l as TitleOnly,a as WithCustomColors,n as WithOnlyDefaultSlot,L as __namedExportsOrder,K as default};
