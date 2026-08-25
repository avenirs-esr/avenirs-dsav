import{A as c}from"./AvSearchBar-Bp73-JdI.js";import"./AvButton-3JGnpng4.js";import"./AvTooltip-B2CAInbA.js";import"./iframe-B4EvC81Z.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Dj62aktN.js";import"./icon-path-u9rVYwcY.js";import"./icons-0dWeWY1j.js";import"./string-BZgCOP9D.js";import"./AvInput-CYfNU126.js";import"./AvMessage-CDYwatlM.js";import"./AvIconText-7qI1FgPG.js";const V={title:"Components/Interaction/Inputs/AvSearchBar",component:c,tags:["autodocs"],argTypes:{label:{conrtol:"text"},modelValue:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"}},args:{label:"Search",modelValue:"",placeholder:"Search...",disabled:!1},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},p=m=>({components:{AvSearchBar:c},setup(){return{args:m}},template:'<AvSearchBar v-bind="args" v-model="args.modelValue" />'}),a=p.bind({});a.args={};const e=p.bind({});e.args={disabled:!0};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvSearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSearchBar v-bind="args" v-model="args.modelValue" />\`
})`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,t,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    AvSearchBar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSearchBar v-bind="args" v-model="args.modelValue" />\`
})`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const D=["Default","Disabled"];export{a as Default,e as Disabled,D as __namedExportsOrder,V as default};
