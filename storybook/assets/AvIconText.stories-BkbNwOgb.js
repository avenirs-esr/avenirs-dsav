import{A as h}from"./AvIcon-AI4cqRPl.js";import{A as g}from"./AvIconText-CLaZbvT3.js";import"./iframe-BIZrIG-x.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x=["n1","n2","n3","n4","n5","n6","s1-bold","s1-regular","s1-light","s2-bold","s2-regular","s2-light","b1-bold","b1-regular","b1-light","b2-bold","b2-regular","b2-light","caption-bold","caption-regular","caption-light"],f={title:"Components/Base/AvIconText",component:g,tags:["autodocs"],argTypes:{textColor:{control:"color"},iconColor:{control:"color"},icon:{control:"text",type:{name:"string",required:!0}},text:{control:"text",type:{name:"string",required:!0}},typographyClass:{control:"select",options:["",...x]},gap:{control:"text"},inline:{control:"boolean"}},args:{textColor:"var(--text1)",iconColor:"var(--text1)",icon:"mdi:calendar-month",text:"Example text with icon",typographyClass:"b2-regular",gap:"var(--spacing-xxs)",inline:!1},parameters:{docs:{description:{component:`<h1 class="n1">Texts with icon - <code>AvIconText</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvIconText</code> is a component that allows you to display text with an icon on the left
    (preferably an
    <a href="https://icon-sets.iconify.design/mdi/" target="_blank" rel="noopener noreferrer">MDI</a>
    icon). This View component is ideal for displaying text with an icon that allows you to visualize
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
</ul>`}}}},t=u=>({components:{AvIconText:g,AvIcon:h},setup(){return{args:u}},template:`
    <AvIconText v-bind="args" />
  `}),n=t.bind({});n.args={};const o=t.bind({});o.args={text:"This text will not be truncated because inline is true",inline:!0};const e=t.bind({});e.args={icon:"mdi:calendar-month",text:"Warning icon with custom colors",iconColor:"var(--dark-background-primary1)",textColor:"var(--dark-background-primary2)",typographyClass:"b1-bold",gap:"var(--spacing-xs)"};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
    <AvIconText v-bind="args" />
  \`
})`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
    <AvIconText v-bind="args" />
  \`
})`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,d,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
    <AvIconText v-bind="args" />
  \`
})`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const A=["Default","InlineNoEllipsis","CustomColors"];export{e as CustomColors,n as Default,o as InlineNoEllipsis,A as __namedExportsOrder,f as default};
