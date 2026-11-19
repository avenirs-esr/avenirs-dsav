import{A as i}from"./AvAccordion-DSVtvvey.js";import"./AvIconText-KVasf135.js";import"./iframe-bTAOROpQ.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-B6SM-v-Y.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-CJPuDKOh.js";import"./use-text-truncation-CmWG0PEA.js";import"./AvNumberIndicator-ogVW2VwK.js";import"./use-collapsable-BxyTUVTN.js";import"./icons-D5SKHg5c.js";const S={title:"Components/Interaction/Accordions/AvAccordion",component:i,tags:["autodocs"],argTypes:{title:{control:"text",required:!0},icon:{control:"text"},headingLevel:{control:{type:"select",options:["h2","h3","h4","h5","h6"]}},overflowVisible:{control:"boolean"},triggerBorderColor:{control:"color"},numberIndicator:{control:"number"}},args:{title:"Accordion 1",icon:"mdi:home-variant-outline",triggerBorderColor:"transparent"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
  <li><span class="b2-regular">an optional number indicator, displayed before the title when the <code>numberIndicator</code> prop is provided.</span></li>
  <li><span class="b2-regular">a separator</span></li>
  <li><span class="b2-regular">a content area, hidden by default, that can contain any type of element; the default <code>slot</code> is designed for this.</span></li>
</ul>`}}}},p=d=>({components:{AvAccordion:i},setup(){return{args:d}},template:'<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>'}),n=p.bind({});n.args={};const o=p.bind({});o.args={numberIndicator:1,icon:void 0};const D=["Default","NumberIndicator"];var e,r,t;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>\`
})`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var a,s,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvAccordion v-bind="args"><span>Some content</span></AvAccordion>\`
})`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};export{n as Default,o as NumberIndicator,D as __namedExportsOrder,S as default};
