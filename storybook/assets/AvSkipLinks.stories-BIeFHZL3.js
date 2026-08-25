import{A as a}from"./AvSkipLinks-Dw34P_1_.js";import"./iframe-C-V1HFqN.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/Navigation/AvSkipLinks",component:a,tags:["autodocs"],argTypes:{skipLinks:{control:"object",description:"Array of skip links with label and targetId."}},args:{skipLinks:[{label:"Go to main content",targetId:"main"},{label:"Go to footer",targetId:"footer"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSkipLinks</code></h1>

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
      Props allow you to define the skip links with their labels and target IDs.
    </span>
  </li>
</ul>`}}}},i=o=>({components:{AvSkipLinks:a},setup(){return{args:o}},template:`
    <AvSkipLinks v-bind="args" />
    <p>Press tab to navigate through the skip links.</p>
  `}),n=i.bind({});n.args={};var s,e,t;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(t=(e=n.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,d as default};
