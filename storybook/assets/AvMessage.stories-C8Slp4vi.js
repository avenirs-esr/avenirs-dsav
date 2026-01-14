import{_ as y}from"./AvMessage-D3WJba0b.js";import"./AvIconText-Bvwkchg7.js";import"./iframe-CpPNlKR7.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-9kvbLgo4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-DLse1evt.js";const C={title:"Components/Base/AvMessage",component:y,tags:["autodocs"],argTypes:{type:{control:"select",options:["info","success","warning","error"]},message:{control:"object"}},args:{type:"info",message:"This is an info message"},parameters:{docs:{description:{component:`<h1 class="n1">Messages - <code>AvMessage</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvMessage</code> component allows you to display short texts accompanied by an icon on the left,
  depending on the type of information. This component is useful for displaying contextual feedback messages,
  such as errors or successes, to the user.
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>The component is based on an <code>AvIconText</code> element.</li>
  <li>The icon and color are automatically adjusted according to the <code>type</code> prop.</li>
  <li>Common types include <code>error</code> and <code>success</code>.</li>
</ul>`}}}},o=T=>({components:{AvMessage:y},setup(){return{args:T}},template:`
    <AvMessage v-bind="args" />
  `}),e=o.bind({});e.args={};const s=o.bind({});s.args={type:"success",message:"This is a success message"};const n=o.bind({});n.args={type:"warning",message:"This is a warning message"};const r=o.bind({});r.args={type:"error",message:"This is an error message"};const a=o.bind({});a.args={message:["This is the first message","This is the second message","This is the third message"]};var t,c,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    AvMessage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvMessage v-bind="args" />
  \`
})`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvMessage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvMessage v-bind="args" />
  \`
})`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,u,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvMessage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvMessage v-bind="args" />
  \`
})`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var h,v,M;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvMessage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvMessage v-bind="args" />
  \`
})`,...(M=(v=r.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var b,A,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvMessage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvMessage v-bind="args" />
  \`
})`,...(f=(A=a.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const W=["Info","Success","Warning","Error","MultipleMessages"];export{r as Error,e as Info,a as MultipleMessages,s as Success,n as Warning,W as __namedExportsOrder,C as default};
