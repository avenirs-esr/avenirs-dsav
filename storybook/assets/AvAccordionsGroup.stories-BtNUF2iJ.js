import{_ as v}from"./AvAccordion-BJoajCkJ.js";import{A as u}from"./AvAccordionsGroup-BUIzssO4.js";import"./iframe-QnTi26yP.js";import"./preload-helper-ILsKNznc.js";import"./vue-dsfr-BVdCrHE_.js";import"./AvVIcon-BiMUebMS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Components/Interaction/Accordions/AvAccordionsGroup",component:u,tags:["autodocs"],argTypes:{activeAccordion:{control:{type:"number",min:0,max:2},description:"Index of the currently active accordion"}},args:{activeAccordion:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvAccordionsGroup</code> component automatically manages the addition of <code>AvAccordion</code>
    in a group according to the <code>AvAccordion</code> present in the <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    Accordions allow users to show and hide sections of content presented on a page.
  </span>
</p>

<p>
  <span class="b2-regular">
    The accordions group lets you group several accordions into a single coherent unit. It manages active selection logic between
    child accordions, allowing you to open one accordion while closing the others. This component is essential for organizing
    interactively linked accordion sets.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul class="b2-regular">
  <li>A header (<code>title</code> prop, type <code>string</code>) — mandatory, represents the section title.</li>
  <li>A left icon (<code>icon</code> prop, type <code>string</code>) — optional, must follow VICon naming convention.</li>
  <li>A right icon — <code>v</code> when the panel is closed, <code>^</code> when open.</li>
  <li>A separator.</li>
  <li>A content zone — hidden by default and shown when expanded, accepting any content via the default <code>slot</code>.</li>
</ul>`}}}},e=m=>({components:{AvAccordionsGroup:u,AvAccordion:v},setup(){return{args:m}},template:`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  `}),n=e.bind({});n.args={};const o=e.bind({});o.args={activeAccordion:0};const c=e.bind({});c.args={activeAccordion:1};var i,r,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    AvAccordionsGroup,
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  \`
})`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var s,d,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    AvAccordionsGroup,
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  \`
})`,...(a=(d=o.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};var p,l,A;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvAccordionsGroup,
    AvAccordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvAccordionsGroup v-bind="args">
      <AvAccordion
        title="Accordion 1"
        icon="mdi:file-document-multiple-outline"
      >
        <span>First accordion content</span>
      </AvAccordion>
      <AvAccordion
        title="Accordion 2"
        icon="mdi:plus-circle-outline"
      >
        <span>Second accordion content</span>
      </AvAccordion>
    </AvAccordionsGroup>
  \`
})`,...(A=(l=c.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};const F=["Default","WithFirstAccordionOpen","WithSecondAccordionOpen"];export{n as Default,o as WithFirstAccordionOpen,c as WithSecondAccordionOpen,F as __namedExportsOrder,S as default};
