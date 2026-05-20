import{A as r}from"./AvAccordion-CJ5DRzHE.js";import"./AvIcon-FTn1hyAS.js";import"./iframe-DDwuU5RR.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-collapsable-BwXdQB7j.js";import"./icons-YGS6wEJ5.js";const h={title:"Components/Interaction/Accordions/AvAccordion",component:r,tags:["autodocs"],argTypes:{title:{control:"text",required:!0},icon:{control:"text"},headingLevel:{control:{type:"select",options:["h2","h3","h4","h5","h6"]}},overflowVisible:{control:"boolean"},triggerBorderColor:{control:"color"}},args:{title:"Accordion 1",icon:"mdi:home-variant-outline",triggerBorderColor:"transparent"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvAccordion</code> allows users to show and hide sections of content presented on a page.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">An accordion consists of the following elements:</span>
</p>

<ul>
  <li><span class="b2-regular">a header (<code>title</code> prop, of type <code>string</code>), corresponding to the section title - mandatory.</span></li>
  <li><span class="b2-regular">an icon, indicating when the panel is closed and when it is open.</span></li>
  <li><span class="b2-regular">a separator</span></li>
  <li><span class="b2-regular">a content area, hidden by default, that can contain any type of element; the default <code>slot</code> is designed for this.</span></li>
</ul>`}}}},s=a=>({components:{AvAccordion:r},setup(){return{args:a}},template:'<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>'}),n=s.bind({});n.args={};var o,e,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>\`
})`,...(t=(e=n.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,h as default};
