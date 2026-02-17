import{A as x}from"./AvIcon-CchWSR_s.js";import{A as u}from"./AvIconText-Ds3mK0ua.js";import{i as t,a as v}from"./storybook-D6ryGff4.js";import"./iframe-pRXexesd.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-galLJK8t.js";const b=["n1","n2","n3","n4","n5","n6","s1-bold","s1-regular","s1-light","s2-bold","s2-regular","s2-light","b1-bold","b1-regular","b1-light","b2-bold","b2-regular","b2-light","caption-bold","caption-regular","caption-light"],E={title:"Components/Base/AvIconText",component:u,tags:["autodocs"],argTypes:{textColor:{control:"color"},iconColor:{control:"color"},icon:{control:"select",options:t,mapping:v},text:{control:"text",type:{name:"string",required:!0}},typographyClass:{control:"select",options:["",...b]},gap:{control:"text"},inline:{control:"boolean"}},args:{textColor:"var(--text1)",iconColor:"var(--text1)",icon:t[0],text:"Example text with icon",typographyClass:"b2-regular",gap:"var(--spacing-xs)",inline:!1},parameters:{docs:{description:{component:`<h1 class="n1">Texts with icon - <code>AvIconText</code></h1>

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
</ul>`}}}},r=h=>({components:{AvIconText:u,AvIcon:x},setup(){return{args:h}},template:`
    <div style="width: 150px">
      <AvIconText v-bind="args" />
    </div>
  `}),n=r.bind({});n.args={};const o=r.bind({});o.args={text:"This text will not be truncated because inline is true",inline:!0};const e=r.bind({});e.args={icon:t[0],text:"Warning icon with custom colors",iconColor:"var(--dark-background-primary1)",textColor:"var(--dark-background-primary2)",typographyClass:"b1-bold",gap:"var(--spacing-xs)"};var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,g,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const S=["Default","InlineNoEllipsis","CustomColors"];export{e as CustomColors,n as Default,o as InlineNoEllipsis,S as __namedExportsOrder,E as default};
