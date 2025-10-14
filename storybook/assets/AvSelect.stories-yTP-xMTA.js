import{A as c}from"./AvSelect-CLF7ru6y.js";import"./iframe-DRmKsEoR.js";import"./preload-helper-ILsKNznc.js";import"./vue-dsfr-C6dkiLOv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Components/Interaction/Selects/AvSelect",component:c,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},selectId:{control:"text"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},defaultUnselectedText:{control:"text",required:!0}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],defaultUnselectedText:"Placeholder",required:!1,disabled:!1,selectId:"selectId",name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvSelect</code> is a Vue component enabling a user to select an item from a given list.
  </span>
</p>

<p>
  <span class="b2-regular">
    The drop-down list provides a list of options from which the user can choose. Only the visible part of the component is stylized:
    the drop-down list of options retains the browser style.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular"><code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},d=i=>({components:{AvSelect:c},setup(){return{args:i}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),e=d.bind({});e.args={label:"Select"};const t=d.bind({});t.args={dense:!0,label:"Dense Select"};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var r,a,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const b=["Default","Dense"];export{e as Default,t as Dense,b as __namedExportsOrder,v as default};
