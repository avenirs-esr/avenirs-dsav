import{A as m}from"./AvMultiselect-0NMK0Y52.js";import{M as e}from"./icons-DLnh1uvi.js";import"./AvVIcon-Bz_XRoTN.js";import"./vue-dsfr-C6dkiLOv.js";import"./iframe-DRmKsEoR.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={title:"Components/Interaction/Selects/AvMultiselect",component:m,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},dense:{control:"boolean"},selectId:{control:"text"},name:{control:"text"},hint:{control:"text"},modelValue:{type:{name:"{value: string | number, label: string}[]",required:!0},control:!1},label:{control:"text"},options:{type:{name:"{value: string | number, label: string}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},defaultUnselectedText:{control:"text",required:!0},selectAll:{control:"boolean"},search:{control:"boolean"},width:{control:"text"}},args:{options:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"},{value:"3",label:"Choice 3"},{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5"}],defaultUnselectedText:"Placeholder",required:!1,disabled:!1,selectId:"selectId",name:"select",hint:"",modelValue:[],label:"",successMessage:"",errorMessage:"",dense:!1,selectAll:!1,search:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvMultiselect</code> is a Vue component enabling a user to select one or many items from a given list.
  </span>
</p>

<p>
  <span class="b2-regular">
    The drop-down list provides a list of options for the user to choose from.
    The user can filter this list and use a button to select/deselect all visible items.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The <code>AvMultiselect</code> consists of:</span></p>
<ul>
  <li><span class="b2-regular">a <strong>label</strong> - Mandatory (<code>label</code> prop)</span></li>
  <li><span class="b2-regular">a <strong>description</strong> - Optional (<code>hint</code> prop or <code>hint</code> slot)</span></li>
  <li><span class="b2-regular">a <strong>list</strong> - Composed of a set of selectable options (mandatory, <code>options</code> prop with a label, a value and an optional icon)</span></li>
</ul>

<p><span class="b2-regular">Inside the list:</span></p>
<ul>
  <li><span class="b2-regular">a <strong>"Select all" / "Deselect all" button</strong> - Optional (<code>selectAll</code> and <code>selectAllLabel</code> props)</span></li>
  <li><span class="b2-regular">an <strong>input field</strong> - Optional</span></li>
  <li><span class="b2-regular">a <strong>form section (fieldset)</strong> containing:</span>
    <ul>
      <li><span class="b2-regular">a <strong>legend</strong> - Optional, can be hidden (<code>legend</code> prop or <code>legend</code> slot)</span></li>
      <li><span class="b2-regular">a <strong>description of the group</strong> - Optional, can be hidden</span></li>
      <li><span class="b2-regular">a <strong>list of options</strong> - Mandatory (<code>options</code> prop with a label, a value and an optional icon)</span></li>
    </ul>
  </li>
</ul>`}}}},o=b=>({components:{AvMultiselect:m},setup(){return{args:b}},template:'<AvMultiselect v-bind="args" v-model="args.modelValue" />'}),n=o.bind({});n.args={label:"Select"};const s=o.bind({});s.args={dense:!0,label:"Dense Select"};const l=o.bind({});l.args={options:[{value:"1",label:"Choice 1",icon:e.ATTACH_FILE},{value:"2",label:"Choice 2",icon:e.CHAT_ALERT},{value:"3",label:"Choice 3",icon:e.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:e.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:e.IMAGE_OUTLINE}],label:"Options with icon"};var t,a,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    AvMultiselect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvMultiselect v-bind="args" v-model="args.modelValue" />\`
})`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var c,i,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    AvMultiselect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvMultiselect v-bind="args" v-model="args.modelValue" />\`
})`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvMultiselect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvMultiselect v-bind="args" v-model="args.modelValue" />\`
})`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const I=["Default","Dense","OptionsWithIcon"];export{n as Default,s as Dense,l as OptionsWithIcon,I as __namedExportsOrder,O as default};
