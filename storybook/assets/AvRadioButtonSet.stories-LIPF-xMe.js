import{_ as y}from"./AvRadioButton-CqnhW7zV.js";import{_ as h}from"./AvRadioButtonSet-ByrNG_wQ.js";import"./iframe-BxXJz-6C.js";import"./preload-helper-ILsKNznc.js";import"./vue-dsfr-B20psRaW.js";const T={title:"Components/Interaction/Radios/AvRadioButtonSet",component:h,tags:["autodocs"],argTypes:{name:{type:{name:"string",required:!0},control:"text"},modelValue:{type:{name:"string",required:!0},control:"text"},legend:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},small:{control:"boolean"},inline:{control:"boolean"},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{name:"RadioButtonSet",modelValue:"1",legend:"",disabled:!1,required:!1,small:!1,inline:!1,errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h1 class="n1">Radio button set - <code>AvRadioButtonSet</code></h1>

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
</ul>`}}}},s=f=>({components:{AvRadioButtonSet:h,AvRadioButton:y},setup(){return{args:f}},template:`
    <AvRadioButtonSet v-bind="args" v-model="args.modelValue">
      <AvRadioButton value="1">
        <span>First option</span>
      </AvRadioButton>
      <AvRadioButton value="2">
        <span>Second option</span>
      </AvRadioButton>
    </AvRadioButtonSet>
  `}),n=s.bind({});n.args={name:"Default"};n.parameters={docs:{source:{code:`
        <AvRadioButtonSet v-model="selected">
          <AvRadioButton value="1">
            <span>First option</span>
          </AvRadioButton>
          <AvRadioButton value="2">
            <span>Second option</span>
          </AvRadioButton>
        </AvRadioButtonSet>
      `}}};const o=s.bind({});o.args={name:"Inline",inline:!0};const e=s.bind({});e.args={name:"Disabled",disabled:!0};const t=s.bind({});t.args={name:"Error",errorMessage:"This is an error message"};const a=s.bind({});a.args={name:"SuccessInline",inline:!0,validMessage:"This is a sucess message"};var r,i,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,u,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,v;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(v=(m=e.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,A,R;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(R=(A=t.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,b,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvRadioButtonSet,
    AvRadioButton
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
})`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const w=["Default","Inline","Disabled","Error","SuccessInline"];export{n as Default,e as Disabled,t as Error,o as Inline,a as SuccessInline,w as __namedExportsOrder,T as default};
