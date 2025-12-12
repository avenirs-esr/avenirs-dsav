import{A as m,a as c}from"./AvListItem-mJQrSBHq.js";import{M as x}from"./icons-CKMza55H.js";import"./iframe-AJEPGUyF.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-2X82i7Mh.js";const H={title:"Components/Interaction/Lists/AvList",component:m,tags:["autodocs"],argTypes:{size:{control:"select",options:["xsmall","small","medium","large"]},role:{control:"select",options:["list","menu","listbox","group"]},backgroundColor:{control:"color"},borderColor:{control:"color"},borderRadius:{control:"text"},padding:{control:"text"},bordered:{control:"boolean"},divided:{control:"boolean"},ariaLabel:{control:"text"},ariaLabelledby:{control:"text"},ariaDescribedby:{control:"text"}},args:{size:"small",role:"list",backgroundColor:"transparent",borderColor:"var(--stroke)",borderRadius:"0",padding:"0",bordered:!1,divided:!1},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvList</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The AvList component is a flexible and accessible container for displaying collections of items.
    It provides a structured way to present data in a vertical list format with extensive customization options for styling, sizing, and accessibility.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvList</code> component is designed to work seamlessly with <code>AvListItem</code> components, offering consistent spacing, styling, and interaction patterns.
    It supports various visual configurations including borders, dividers, different sizes, and full accessibility compliance.
  </span>
</p>

<p>
  <span class="b2-regular">
    It features flexible sizing system for different use cases, optional visual enhancements, and full accessibility support with ARIA attributes
    while maintaining visual consistency with the design system's styling tokens.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The list component consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">the <strong>Container:</strong> (mandatory) Main wrapper that contains all list items with proper semantic structure</span></li>
  <li><span class="b2-regular">the <strong>List Items:</strong> (mandatory) Individual items rendered within the list, typically <code>AvListItem</code> components</span></li>
</ul>

<p><span class="b2-regular">The list integrates:</span></p>

<ul>
  <li><span class="b2-regular">Flexible sizing system for different use cases</span></li>
  <li><span class="b2-regular">Optional visual enhancements (borders, dividers)</span></li>
  <li><span class="b2-regular">Full accessibility support with ARIA attributes</span></li>
  <li><span class="b2-regular">Customizable styling through CSS custom properties</span></li>
</ul>`}}}},e=t=>({components:{AvList:m,AvListItem:c},setup(){return{args:t,MDI_ICONS:x}},template:`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  `}),r=e.bind({});r.args={};const s=e.bind({});s.args={size:"medium",bordered:!0,borderRadius:"var(--radius-md)",backgroundColor:"var(--surface-alt)"};s.render=t=>({components:{AvList:m,AvListItem:c},setup(){return{args:t}},template:`
    <AvList v-bind="args">
      <AvListItem title="Dashboard" clickable />
      <AvListItem title="Analytics" clickable />
      <AvListItem title="Reports" clickable />
    </AvList>
  `});const i=e.bind({});i.args={size:"large",divided:!0,padding:"var(--spacing-sm)"};i.render=t=>({components:{AvList:m,AvListItem:c},setup(){return{args:t}},template:`
    <AvList v-bind="args">
      <AvListItem title="Item 1" description="Description for item 1" />
      <AvListItem title="Item 2" description="Description for item 2" />
      <AvListItem title="Item 3" description="Description for item 3" />
      <AvListItem title="Item 4" description="Description for item 4" />
    </AvList>
  `});const n=e.bind({});n.args={backgroundColor:"#f0f9ff",borderColor:"#0ea5e9",borderRadius:"1rem",bordered:!0,divided:!0,size:"large",padding:"1rem",ariaLabel:"Custom styled list"};n.render=t=>({components:{AvList:m,AvListItem:c},setup(){return{args:t,MDI_ICONS:x}},template:`
    <AvList v-bind="args">
      <AvListItem title="Custom Item 1" :icon="MDI_ICONS.STARS" />
      <AvListItem title="Custom Item 2" :icon="MDI_ICONS.STAR_CHECK_OUTLINE" />
      <AvListItem title="Custom Item 3" :icon="MDI_ICONS.STAR_SHOOTING_OUTLINE" />
    </AvList>
  `});const a=e.bind({});a.args={size:"small"};const o=e.bind({});o.args={size:"medium"};const l=e.bind({});l.args={size:"large"};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,I,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(g=(I=s.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var L,A,b;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var S,f,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,y,D;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var z,T,O;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(O=(T=o.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var _,M,N;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  \`
})`,...(N=(M=l.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const U=["Default","Bordered","DividedList","CustomStyling","SmallSize","MediumSize","LargeSize"];export{s as Bordered,n as CustomStyling,r as Default,i as DividedList,l as LargeSize,o as MediumSize,a as SmallSize,U as __namedExportsOrder,H as default};
