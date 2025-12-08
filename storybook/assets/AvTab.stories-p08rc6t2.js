import{_ as s}from"./AvTab-B0V3qE3P.js";import"./iframe-DW8EiDtf.js";import"./preload-helper-ILsKNznc.js";const i={title:"Components/Interaction/Tabs/AvTab",component:s,tags:["autodocs"],argTypes:{title:{control:"text"},icon:{control:"text"}},args:{title:"Tab 1",icon:""},parameters:{docs:{description:{component:`<h1 class="n1">Tabs - <code>AvTab</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvTab</code> is a declarative component used exclusively in the <code>default</code> slot of <code>AvTabs</code>.
    <code>AvTab</code> allows you to configure a tab by passing its props (such as <code>title</code> and <code>icon</code>)
    to the <code>AvTabs</code> component without rendering.
  </span>
</p>

<p>
  <span class="b2-regular">
    It acts as a proxy component: it exposes information (props) used by <code>AvTabs</code> to generate the interface.
  </span>
</p>

<p>
  <span class="b2-regular">
    🚫 This component does not display anything by itself and should not be used outside <code>AvTabs</code>.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},c=t=>({components:{AvTab:s},setup(){return{args:t}},template:'<AvTab v-bind="args"><span>Some content</span></AvTab>'}),n=c.bind({});n.args={};n.parameters={docs:{source:{code:`
        <AvTab title="Tab 1">
          <span>Some content</span>
        </AvTab>`}}};var e,o,a;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    AvTab
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvTab v-bind="args"><span>Some content</span></AvTab>\`
})`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const l=["Default"];export{n as Default,l as __namedExportsOrder,i as default};
