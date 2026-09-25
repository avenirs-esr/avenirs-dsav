import{A as M}from"./AvCheckbox-BTsMV4j6.js";import{_ as $}from"./AvFieldset-B9GBU6U4.js";import{n as w,d as S,f as q,a9 as T,$ as B,L as D,e as W,B as U,R as E,P as F}from"./iframe-Cb79UARr.js";import"./AvFieldsetElement-lOOSKKsF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-D0pAnHvG.js";import"./AvIconText-Dm7ODHm_.js";import"./AvIcon-B6XRolpv.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-VZio7N2M.js";import"./use-text-truncation-IkOLGshO.js";import"./icons-CS5vb1aa.js";import"./preload-helper-ILsKNznc.js";const c=w({__name:"AvCheckboxesGroup",props:{id:{},legend:{default:""},legendId:{default:""},errorMessage:{default:""},successMessage:{default:""},hint:{default:""},inline:{type:Boolean,default:!1}},setup(e){const i=S(()=>e.id??`checkboxes-group-${crypto.randomUUID()}`);return(G,H)=>{const I=$;return D(),q(I,{id:B(i),legend:e.legend,"legend-id":e.legendId,hint:e.hint,"error-message":e.errorMessage,"success-message":e.successMessage,inline:e.inline,"aria-live":"polite"},{default:T(()=>[W("div",{class:U(["av-checkboxes-group av-gap-sm",{"av-checkboxes-group--inline av-row av-row-wrap":e.inline,"av-col":!e.inline}])},[E(G.$slots,"default")],2)]),_:3},8,["id","legend","legend-id","hint","error-message","success-message","inline"])}}});c.__docgenInfo={exportName:"default",displayName:"AvCheckboxesGroup",description:"",tags:{},props:[{name:"id",description:"Unique ID of the component",tags:{default:[{description:"`checkboxes-group-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"legend",description:"Fieldset caption",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"legendId",description:"`<legend>` tag id",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"Error message to be displayed under the checkboxes",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"successMessage",description:"Success message to be displayed under the checkboxes",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint to be displayed under the checkboxes",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"inline",description:"Display checkboxes inline",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/checkboxes/AvCheckboxesGroup/AvCheckboxesGroup.vue"]};const Y={title:"Components/Interaction/Checkboxes/AvCheckboxesGroup",component:c,tags:["autodocs"],argTypes:{legend:{control:"text"},legendId:{control:"text"},errorMessage:{control:"text"},successMessage:{control:"text"},hint:{control:"text"},inline:{control:"boolean"}},args:{legend:"Checkboxes group legend",legendId:"checkboxes-group-legend",errorMessage:"",successMessage:"",hint:"",inline:!1},parameters:{docs:{description:{component:`<h1 class="n1">Checkboxes groups - <code>AvCheckboxesGroup</code></h1>

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
</p>`}}}},a=e=>({components:{AvCheckboxesGroup:c,AvCheckbox:M},setup(){const i=F([]);return{args:e,model:i}},template:`<AvCheckboxesGroup v-bind="args">
    <AvCheckbox
      v-for="i in 3"
      :key="i"
      v-model="model"
      :name="\`checkbox-\${i}\`"
      :label="\`Checkbox \${i}\`"
      :value="i"
    />
  </AvCheckboxesGroup>`}),n=a.bind({});n.args={};const o=a.bind({});o.args={inline:!0};const s=a.bind({});s.args={errorMessage:"This is an error message."};const r=a.bind({});r.args={inline:!0,successMessage:"This is a success message."};const t=a.bind({});t.args={hint:"This is a hint message."};var l,d,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,b,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var k,x,f;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,A,y;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(y=(A=t.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const Z=["Default","Inline","WithErrorMessage","InlineWithSuccessMessage","WithHint"];export{n as Default,o as Inline,r as InlineWithSuccessMessage,s as WithErrorMessage,t as WithHint,Z as __namedExportsOrder,Y as default};
