import{_ as F}from"./AvRadioButton-xASZ6h7l.js";import{_ as V,R as _}from"./AvRadioButtonSet-BH6k3knB.js";import"./iframe-DOZoNlj0.js";import"./preload-helper-ILsKNznc.js";import"./AvFieldset-BfTfyGuO.js";import"./AvMessage-BZTR98Ec.js";import"./AvIconText-DQjUvGr6.js";import"./AvIcon-CydxKPgq.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-DyiNu08W.js";import"./AvFieldsetElement-BB-2Owp0.js";const G={title:"Components/Interaction/Radios/AvRadioButtonSet",component:V,tags:["autodocs"],argTypes:{name:{type:{name:"string",required:!0},control:"text"},modelValue:{type:{name:"string",required:!0},control:"text"},legend:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},small:{control:"boolean"},inline:{control:"boolean"},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{name:"RadioButtonSet",modelValue:"1",legend:"",disabled:!1,required:!1,small:!1,inline:!1,errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h1 class="n1">Radio button set - <code>AvRadioButtonSet</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvRadioButtonSet</code> automatically manages the addition of <code>AvRadioButton</code>
    in a group according to the <code>AvRadioButton</code> present in the <code>default</code> slot.
  </span>
</p>

<p>
  <span class="b2-regular">
    Radio buttons allow the user to select a single option from a list.
  </span>
</p>

<p>
  <span class="b2-regular">
    The radio button cannot be used on its own: a minimum of 2 options is required. It is preferable not to select a default option,
    so that the user choice is conscious (especially if the choice is mandatory).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The <code>AvRadioButtonSet</code> component consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">A <code>&lt;div&gt;</code> element encompassing the entire radio group.</span></li>
  <li><span class="b2-regular">A <code>&lt;fieldset&gt;</code> element containing the radio buttons and associated messages.</span></li>
  <li><span class="b2-regular">A legend (<code>legend</code>) defined by the <code>legend</code> prop and customizable with the <code>legend</code> slot.</span></li>
  <li><span class="b2-regular">A hint (<code>hint</code>) defined by the <code>hint</code> prop and customizable with the <code>hint</code> slot.</span></li>
  <li><span class="b2-regular">A group of individual radio buttons rendered by the <code>AvRadioButton</code> component.</span></li>
  <li><span class="b2-regular">An information, error or validation message, displayed below the group of radio buttons (optional).</span></li>
</ul>`}}}},o=x=>({components:{AvRadioButtonSet:V,AvRadioButton:F,RadioButton:_},setup(){return{args:x}},template:`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  `}),n=o.bind({});n.args={name:"Default"};n.parameters={docs:{source:{code:`
        <AvRadioButtonSet v-model="selected">
          <AvRadioButton value="1">
            <span>First option</span>
          </AvRadioButton>
          <AvRadioButton value="2">
            <span>Second option</span>
          </AvRadioButton>
        </AvRadioButtonSet>
      `}}};const t=o.bind({});t.args={name:"Inline",inline:!0};const e=o.bind({});e.args={name:"Disabled",disabled:!0};const a=o.bind({});a.args={name:"Small",small:!0};const s=o.bind({});s.args={name:"Error",errorMessage:"This is an error message"};const i=o.bind({});i.args={name:"SuccessInline",inline:!0,validMessage:"This is a sucess message"};var r,d,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,v,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(g=(v=e.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var R,B,A;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(A=(B=a.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var S,b,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,y,I;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton,
    RadioButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  \`
})`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const H=["Default","Inline","Disabled","Small","Error","SuccessInline"];export{n as Default,e as Disabled,s as Error,t as Inline,a as Small,i as SuccessInline,H as __namedExportsOrder,G as default};
