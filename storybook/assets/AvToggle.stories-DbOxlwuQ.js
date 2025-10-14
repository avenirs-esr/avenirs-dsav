import{A as s}from"./AvToggle-BwdGDko-.js";import"./iframe-DRmKsEoR.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Components/Interaction/Toggles/AvToggle",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},id:{control:"text"},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"}},args:{modelValue:!1,description:"Some description",id:void 0,disabled:!1,activeText:"On",inactiveText:"Off",name:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},u=n=>({components:{AvToggle:s},setup(){return{args:n}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),e=u.bind({});e.args={};const t=u.bind({});t.args={modelValue:!0};const v=n=>({components:{AvToggle:s},setup(){return{args:n}},template:`<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),o=v.bind({});o.args={description:"A long description to see how this works"};var r,a,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const V=["Default","InitActive","WidthRestrict"];export{e as Default,t as InitActive,o as WidthRestrict,V as __namedExportsOrder,x as default};
