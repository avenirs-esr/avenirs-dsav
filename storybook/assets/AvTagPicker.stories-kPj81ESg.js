import{A as c}from"./AvTagPicker-BVGDxrS9.js";import"./iframe-s9HM9k22.js";import"./preload-helper-ILsKNznc.js";import"./AvTag-b98ewChP.js";import"./AvIcon-CCejg-up.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-8RiK4kYW.js";const y={title:"Components/Interaction/Pickers/AvTagPicker",component:c,tags:["autodocs"],argTypes:{options:{type:{name:"AvTagPickerOption[]",required:!0},control:!1},label:{type:{name:"string"},control:"text"},labelColor:{type:{name:"string"},control:"text"},labelTypographyClass:{type:{name:"string"},control:"text"},multiple:{type:{name:"boolean"},control:"boolean"},selected:{type:{name:"AvTagPickerOption | AvTagPickerOption[]"},control:!1},handleSelectChange:{type:{name:"function",required:!0},control:!1,action:"select-change"}},args:{label:"Pick:"},parameters:{docs:{description:{component:`<h1 class="n1">Tag picker - <code>AvTagPicker</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvTagPicker</code> is a Vue component enabling a user to select an element from a given set.
    Selectable elements consist of tag components.
  </span>
</p>

<p>
  <span class="b2-regular">
    The tag list provides a list of options from which the user can choose.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">Buttons consist of :</span></p>

<ul>
  <li>
    <span class="b2-regular">
      A label - mandatory, using the <code>label</code> prop, enables label display when <code>iconOnly</code> is <code>false</code>,
      also enables connection to <code>title</code> and <code>aria-label</code>;
    </span>
  </li>
  <li>
    <span class="b2-regular">
      An icon, which can be modified (see available icons) - optional.
    </span>
  </li>
</ul>`}}}},i=p=>({components:{AvTagPicker:c},setup(){return{args:p}},template:'<AvTagPicker v-bind="args" />'}),e=i.bind({});e.args={label:"Pick one:",labelColor:"var(--text2)",labelTypographyClass:"b2-regular",multiple:!1,options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],selected:{label:"Option B",value:"b"}};const n=i.bind({});n.args={label:"Pick many:",labelColor:"var(--text2)",labelTypographyClass:"b2-regular",multiple:!0,options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],selected:[{label:"Option A",value:"a"},{label:"Option C",value:"c"}]};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    AvTagPicker
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvTagPicker v-bind="args" />\`
})`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var l,r,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvTagPicker
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvTagPicker v-bind="args" />\`
})`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const A=["Default","Multiple"];export{e as Default,n as Multiple,A as __namedExportsOrder,y as default};
