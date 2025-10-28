import{_ as l}from"./AvSearchBar-DYvml0oT.js";import"./AvButton-CbrT1fzv.js";import"./AvIcon-711Mni9z.js";import"./iframe-B5JDfl4a.js";import"./preload-helper-ILsKNznc.js";import"./iconify-DSTj272i.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-ubxugSKv.js";import"./string-BZgCOP9D.js";import"./AvInput-DZadntPc.js";const f={title:"Components/Interaction/Inputs/AvSearchBar",component:l,tags:["autodocs"],argTypes:{id:{control:"text"},label:{conrtol:"text"},modelValue:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}},args:{id:crypto.randomUUID(),label:"Search",modelValue:"",placeholder:"Search...",disabled:!1},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvSearchBar</code> is a navigation system that allows users
    to quickly access content by searching for a keyword or phrase.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">The search bar is composed by:</span>
</p>

<ul>
  <li><span class="b2-regular">an input</span></li>
  <li><span class="b2-regular">a button</span></li>
</ul>`}}}},p=m=>({components:{AvSearchBar:l},setup(){return{args:m}},template:'<AvSearchBar v-bind="args" v-model="args.modelValue" />'}),a=p.bind({});a.args={};const e=p.bind({});e.args={disabled:!0};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvSearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSearchBar v-bind="args" v-model="args.modelValue" />\`
})`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,t,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    AvSearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSearchBar v-bind="args" v-model="args.modelValue" />\`
})`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const y=["Default","Disabled"];export{a as Default,e as Disabled,y as __namedExportsOrder,f as default};
