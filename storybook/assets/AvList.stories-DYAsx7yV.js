import{_ as K}from"./AvCheckboxListItem-CvKUsXdO.js";import{A as e,a as p}from"./AvList-BOq9ZFCc.js";import{M as v}from"./icons-BpRHDIj8.js";import{r as j}from"./iframe-BoyNFxvL.js";import"./AvCheckbox-DOl1Wa98.js";import"./AvFieldsetElement-C0XUsjFw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-DsY1MJGm.js";import"./AvIconText-CPsC35qk.js";import"./AvIcon-B06BrcxT.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";const nt={title:"Components/Interaction/Lists/AvList",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["xsmall","small","medium","large"]},role:{control:"select",options:["list","menu","listbox","group"]},backgroundColor:{control:"color"},borderColor:{control:"color"},borderRadius:{control:"text"},padding:{control:"text"},bordered:{control:"boolean"},divided:{control:"boolean"},ariaLabel:{control:"text"},ariaLabelledby:{control:"text"},ariaDescribedby:{control:"text"}},args:{size:"small",role:"list",backgroundColor:"transparent",borderColor:"var(--stroke)",borderRadius:"0",padding:"0",bordered:!1,divided:!1},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvList</code></h1>

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
</ul>`}}}},s=t=>({components:{AvList:e,AvListItem:p},setup(){return{args:t,MDI_ICONS:v}},template:`
    <AvList v-bind="args">
      <AvListItem title="First Item" />
      <AvListItem title="Second Item" />
      <AvListItem title="Third Item" />
    </AvList>
  `}),o=s.bind({});o.args={};const i=s.bind({});i.args={size:"medium",bordered:!0,borderRadius:"var(--radius-md)",backgroundColor:"var(--surface-alt)"};i.render=t=>({components:{AvList:e,AvListItem:p},setup(){return{args:t}},template:`
    <AvList v-bind="args">
      <AvListItem title="Dashboard" clickable />
      <AvListItem title="Analytics" clickable />
      <AvListItem title="Reports" clickable />
    </AvList>
  `});const n=s.bind({});n.args={size:"large",divided:!0,padding:"var(--spacing-sm)"};n.render=t=>({components:{AvList:e,AvListItem:p},setup(){return{args:t}},template:`
    <AvList v-bind="args">
      <AvListItem title="Item 1" description="Description for item 1" />
      <AvListItem title="Item 2" description="Description for item 2" />
      <AvListItem title="Item 3" description="Description for item 3" />
      <AvListItem title="Item 4" description="Description for item 4" />
    </AvList>
  `});const r=s.bind({});r.args={backgroundColor:"#f0f9ff",borderColor:"#0ea5e9",borderRadius:"1rem",bordered:!0,divided:!0,size:"large",padding:"1rem",ariaLabel:"Custom styled list"};r.render=t=>({components:{AvList:e,AvListItem:p},setup(){return{args:t,MDI_ICONS:v}},template:`
    <AvList v-bind="args">
      <AvListItem title="Custom Item 1" :icon="MDI_ICONS.STARS" />
      <AvListItem title="Custom Item 2" :icon="MDI_ICONS.STAR_CHECK_OUTLINE" />
      <AvListItem title="Custom Item 3" :icon="MDI_ICONS.STAR_SHOOTING_OUTLINE" />
    </AvList>
  `});const a=s.bind({});a.args={size:"small"};const l=s.bind({});l.args={size:"medium"};const m=s.bind({});m.args={size:"large"};const q=t=>({components:{AvList:e,AvCheckboxListItem:K},setup(){const u=j([]);return{args:t,model:u,MDI_ICONS:v}},template:`
    <AvList v-bind="args">
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="first-item" label="First Item" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="second-item" label="Second Item" :icon="MDI_ICONS.STAR" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="third-item" label="Third Item (disabled)" :disabled="true" />
    </AvList>
  `}),c=q.bind({});c.args={size:"xsmall",bordered:!0,borderRadius:"var(--radius-md)",backgroundColor:"var(--surface-alt)"};const J=t=>({components:{AvList:e,AvCheckboxListItem:K},setup(){const u=j([]);return{args:t,model:u,MDI_ICONS:v}},template:`
    <AvList v-bind="args">
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="first-item">
        <span class="b2-bold">Custom item <span class="caption-light">with caption light description</span></span>
      </AvCheckboxListItem>
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="second-item" label="Basic item with icon" :icon="MDI_ICONS.STAR" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="third-item" :icon="MDI_ICONS.STAR">
        <div class="av-col"><span>Custom item on two lines</span><span>and with icon in props</span></div>
      </AvCheckboxListItem>
    </AvList>
  `}),d=J.bind({});d.args={size:"xsmall",bordered:!0,borderRadius:"var(--radius-md)",backgroundColor:"var(--surface-alt)"};var I,b,L;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var A,g,h;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,S,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,k,T;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var D,_,y;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var O,M,z;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(z=(M=l.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var N,w,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(R=(w=m.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var F,B,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvCheckboxListItem
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="first-item" label="First Item" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="second-item" label="Second Item" :icon="MDI_ICONS.STAR" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="third-item" label="Third Item (disabled)" :disabled="true" />
    </AvList>
  \`
})`,...(E=(B=c.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var H,U,G;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvCheckboxListItem
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model,
      MDI_ICONS
    };
  },
  template: \`
    <AvList v-bind="args">
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="first-item">
        <span class="b2-bold">Custom item <span class="caption-light">with caption light description</span></span>
      </AvCheckboxListItem>
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="second-item" label="Basic item with icon" :icon="MDI_ICONS.STAR" />
      <AvCheckboxListItem v-model="model" list-id="checkbox-list" id="third-item" :icon="MDI_ICONS.STAR">
        <div class="av-col"><span>Custom item on two lines</span><span>and with icon in props</span></div>
      </AvCheckboxListItem>
    </AvList>
  \`
})`,...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const rt=["Default","Bordered","DividedList","CustomStyling","SmallSize","MediumSize","LargeSize","CheckboxList","CheckboxListCustomItems"];export{i as Bordered,c as CheckboxList,d as CheckboxListCustomItems,r as CustomStyling,o as Default,n as DividedList,m as LargeSize,l as MediumSize,a as SmallSize,rt as __namedExportsOrder,nt as default};
