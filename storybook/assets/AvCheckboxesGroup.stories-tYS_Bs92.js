import{A as y}from"./AvCheckbox-C2gUFjta.js";import{_ as A}from"./AvCheckboxesGroup-BcYOMOMM.js";import{L as $}from"./iframe-vKZzE-Cu.js";import"./AvFieldsetElement-BkdIeiiP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-B_3RaBVr.js";import"./AvIconText-DVjbHviT.js";import"./AvIcon-sERosdMM.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-B3PybRe8.js";import"./icons-BJ4bGiUf.js";import"./AvFieldset-Mk6u1euS.js";import"./preload-helper-ILsKNznc.js";const O={title:"Components/Interaction/Checkboxes/AvCheckboxesGroup",component:A,tags:["autodocs"],argTypes:{legend:{control:"text"},legendId:{control:"text"},errorMessage:{control:"text"},successMessage:{control:"text"},hint:{control:"text"},inline:{control:"boolean"}},args:{legend:"Checkboxes group legend",legendId:"checkboxes-group-legend",errorMessage:"",successMessage:"",hint:"",inline:!1},parameters:{docs:{description:{component:`<h1 class="n1">Checkboxes groups - <code>AvCheckboxesGroup</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvCheckboxesGroup</code> allows you to manage a set of <code>AvCheckbox</code>.
  It consists of a label (legend), individual options represented by the <code>AvCheckbox</code> component,
  and a global information, error, or validation message.
</p>

<p class="b2-regular">
  Checkboxes can be used alone or in a list. Avoid lists with more than 5 items,
  and when you want to restrict the choice to a single item, use radio buttons
  (see <code>AvRadioButton</code>).
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  The <code>AvCheckboxesGroup</code> component consists of the following elements:
  <ul>
    <li>a <code>&lt;fieldset&gt;</code> element containing all the checkboxes,</li>
    <li>a legend defined by the <code>legend</code> prop and customizable with the <code>legend</code> slot,</li>
    <li>a group of individual checkboxes rendered by the <code>AvCheckbox</code> component,</li>
    <li>an information, error, or validation message displayed below the group of checkboxes.</li>
  </ul>
</p>`}}}},c=f=>({components:{AvCheckboxesGroup:A,AvCheckbox:y},setup(){const G=$([]);return{args:f,model:G}},template:`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\`checkbox-\${i}\`"
      :label="\`Checkbox \${i}\`"
      :value="i"
    />
  </AvCheckboxesGroup>`}),e=c.bind({});e.args={};const n=c.bind({});n.args={inline:!0};const o=c.bind({});o.args={errorMessage:"This is an error message."};const s=c.bind({});s.args={inline:!0,successMessage:"This is a success message."};const r=c.bind({});r.args={hint:"This is a hint message."};var t,a,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    AvCheckboxesGroup,
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\\\`checkbox-\\\${i}\\\`"
      :label="\\\`Checkbox \\\${i}\\\`"
      :value="i"
    />
  </AvCheckboxesGroup>\`
})`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvCheckboxesGroup,
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\\\`checkbox-\\\${i}\\\`"
      :label="\\\`Checkbox \\\${i}\\\`"
      :value="i"
    />
  </AvCheckboxesGroup>\`
})`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvCheckboxesGroup,
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\\\`checkbox-\\\${i}\\\`"
      :label="\\\`Checkbox \\\${i}\\\`"
      :value="i"
    />
  </AvCheckboxesGroup>\`
})`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvCheckboxesGroup,
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\\\`checkbox-\\\${i}\\\`"
      :label="\\\`Checkbox \\\${i}\\\`"
      :value="i"
    />
  </AvCheckboxesGroup>\`
})`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,k,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvCheckboxesGroup,
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\\\`checkbox-\\\${i}\\\`"
      :label="\\\`Checkbox \\\${i}\\\`"
      :value="i"
    />
  </AvCheckboxesGroup>\`
})`,...(C=(k=r.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const R=["Default","Inline","WithErrorMessage","InlineWithSuccessMessage","WithHint"];export{e as Default,n as Inline,s as InlineWithSuccessMessage,o as WithErrorMessage,r as WithHint,R as __namedExportsOrder,O as default};
