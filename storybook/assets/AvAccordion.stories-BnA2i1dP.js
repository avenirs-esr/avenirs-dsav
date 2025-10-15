import{_ as s}from"./AvAccordion-LOiMjNvv.js";import"./iframe-BxXJz-6C.js";import"./preload-helper-ILsKNznc.js";const i={title:"Components/Interaction/Accordions/AvAccordion",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`<h1 class="n1">Accordions - <code>AvAccordions</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvAccordion</code> is a declarative component used exclusively in the <code>default</code> slot of
    <code>AvAccordionsGroup</code>.
    <code>AvAccordion</code> allows you to configure an accordion by passing its props (such as <code>title</code> and <code>icon</code>)
    to the <code>AvAccordionsGroup</code> component without rendering.
  </span>
</p>

<p>
  <span class="b2-regular">
    It acts as a proxy component: it exposes information (props) used by <code>AvAccordionsGroup</code> to generate the interface.
  </span>
</p>

<p>
  <span class="b2-regular">
    🚫 This component does not display anything by itself and should not be used outside <code>AvAccordion</code>.
  </span>
</p>`}}}},t=()=>({components:{AvAccordion:s},setup(){return{}},template:'<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>'}),o=t.bind({});o.args={};o.parameters={docs:{source:{code:`
        <AvAccordion title="Accordion 1">
          <span>Some content</span>
        </AvAccordion>`}}};var n,e,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => ({
  components: {
    AvAccordion
  },
  setup() {
    return {};
  },
  template: \`<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>\`
})`,...(c=(e=o.parameters)==null?void 0:e.docs)==null?void 0:c.source}}};const p=["Default"];export{o as Default,p as __namedExportsOrder,i as default};
