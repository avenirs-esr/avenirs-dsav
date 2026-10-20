import{A as e}from"./AvSkipLinks-Bp5Xqyid.js";import"./iframe-BT56DLmR.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-Dfi0GG6Q.js";import"./AvTooltip-DIov_q_k.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Bj1e_f6U.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-mZq6P6-b.js";import"./icons-CydXfigI.js";import"./string-BZgCOP9D.js";const b={title:"Components/Navigation/AvSkipLinks",component:e,tags:["autodocs"],argTypes:{skipLinks:{control:"object"}},args:{skipLinks:[{label:"Go to main content",id:"main"},{label:"Go to footer",id:"footer"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSkipLinks</code></h1>

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
</ul>`}}}},a=i=>({components:{AvSkipLinks:e},setup(){return{args:i}},template:`
    <AvSkipLinks v-bind="args" />
    <p>Press tab to navigate through the skip links.</p>
  `}),n=a.bind({});n.args={};const L=["Default"];var s,t,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
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
})`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};export{n as Default,L as __namedExportsOrder,b as default};
