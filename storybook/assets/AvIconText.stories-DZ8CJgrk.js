import{A as w}from"./AvIcon-D64V8ePC.js";import{A as y}from"./AvIconText-DfYpS-N0.js";import{g as a,i as A}from"./storybook-DCqn2qwk.js";import"./iframe-DSlEl8eq.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-RrE9taMo.js";import"./icons-BJ4bGiUf.js";const I=["n1","n2","n3","n4","n5","n6","s1-bold","s1-regular","s1-light","s2-bold","s2-regular","s2-light","b1-bold","b1-regular","b1-light","b2-bold","b2-regular","b2-light","caption-bold","caption-regular","caption-light"],z={title:"Components/Base/AvIconText",component:y,tags:["autodocs"],argTypes:{textColor:{control:"color"},iconColor:{control:"color"},icon:{control:"select",options:a,mapping:A},text:{control:"text",type:{name:"string",required:!0}},typographyClass:{control:"select",options:["",...I]},gap:{control:"text"},inline:{control:"boolean"},wrapAnywhere:{control:"boolean"}},args:{textColor:"var(--text1)",iconColor:"var(--text1)",icon:a[0],text:"Example text with icon",typographyClass:"b2-regular",gap:"var(--spacing-xs)",inline:!1,wrapAnywhere:!1},parameters:{docs:{description:{component:`<h1 class="n1">Texts with icon - <code>AvIconText</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvIconText</code> is a component that allows you to display text with an icon on the left
    (preferably an
    <a href="https://icon-sets.iconify.design/mdi/" target="_blank" rel="noopener noreferrer">MDI</a> icon).
    This View component is ideal for displaying text with an icon that allows you to visualize
    the type of information conveyed by the text.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">The component is a <code>div</code> element composed of an <code>AvIcon</code> component and a <code>span</code>.</span>
  </li>
  <li>
    <span class="b2-regular">Props allow you to modify the appearance of the icon and text according to the props: color, icon, size, and handling of overly long text.</span>
  </li>
  <li>
    <span class="b2-regular">The <code>label</code> is displayed inside a <code>span</code>, potentially with the <code>ellipsis</code> prop to handle truncated text.</span>
  </li>
</ul>`}}}},r=b=>({components:{AvIconText:y,AvIcon:w},setup(){return{args:b}},template:`
    <div style="width: 150px">
      <AvIconText v-bind="args" />
    </div>
  `}),n=r.bind({});n.args={};const e=r.bind({});e.args={text:"This text will not be truncated because inline is true",inline:!0};const o=r.bind({});o.args={icon:a[0],text:"Warning icon with custom colors",iconColor:"var(--dark-background-primary1)",textColor:"var(--dark-background-primary2)",typographyClass:"b1-bold",gap:"var(--spacing-xs)"};const t=r.bind({});t.args={text:"thisisaverylongwordthatshouldbreakanywhereifwrapanywhereistrue",inline:!0,wrapAnywhere:!0};var s,i,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    AvIconText,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="width: 150px">
      <AvIconText v-bind="args" />
    </div>
  \`
})`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvIconText,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="width: 150px">
      <AvIconText v-bind="args" />
    </div>
  \`
})`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,m,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    AvIconText,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="width: 150px">
      <AvIconText v-bind="args" />
    </div>
  \`
})`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvIconText,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="width: 150px">
      <AvIconText v-bind="args" />
    </div>
  \`
})`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const M=["Default","InlineNoEllipsis","CustomColors","WrapAnywhere"];export{o as CustomColors,n as Default,e as InlineNoEllipsis,t as WrapAnywhere,M as __namedExportsOrder,z as default};
