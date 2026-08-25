import{A as o}from"./AvSkipLinks-CSU0RMDg.js";import"./iframe-DZiqhXFP.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-xgUC2e7_.js";import"./AvTooltip-BYkvA670.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CrU6Ktxf.js";import"./icon-path-u9rVYwcY.js";import"./icons-0dWeWY1j.js";import"./string-BZgCOP9D.js";const v={title:"Components/Navigation/AvSkipLinks",component:o,tags:["autodocs"],argTypes:{skipLinks:{control:"object"}},args:{skipLinks:[{label:"Go to main content",id:"main"},{label:"Go to footer",id:"footer"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSkipLinks</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvSkipLinks</code> component provides skip links to improve navigation and accessibility.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">
      The component is a <code>nav</code> element with the <code>av-skip-links</code> class.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      Props allow you to define the skip links with their labels (\`label\` prop) and target IDs (\`id\` prop).
    </span>
  </li>
</ul>`}}}},a=i=>({components:{AvSkipLinks:o},setup(){return{args:i}},template:`
    <AvSkipLinks v-bind="args" />
    <p>Press tab to navigate through the skip links.</p>
  `}),n=a.bind({});n.args={};var s,t,e;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    AvSkipLinks
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSkipLinks v-bind="args" />
    <p>Press tab to navigate through the skip links.</p>
  \`
})`,...(e=(t=n.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const b=["Default"];export{n as Default,b as __namedExportsOrder,v as default};
