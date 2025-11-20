import{_ as y}from"./AvMessage-B4_eMHLk.js";import"./AvIconText-XOL5-QvY.js";import"./iframe-CBjuPNj6.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-S-R7evN1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-DGI95zqn.js";const w={title:"Components/Base/AvMessage",component:y,tags:["autodocs"],argTypes:{type:{control:"select",options:["info","success","warning","error"]},message:{control:"text"}},args:{type:"info",message:"This is an info message"},parameters:{docs:{description:{component:`<h1 class="n1">Messages - <code>AvMessage</code></h1>

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
</ul>`}}}},o=A=>({components:{AvMessage:y},setup(){return{args:A}},template:`
    <AvMessage v-bind="args" />
  `}),e=o.bind({});e.args={};const s=o.bind({});s.args={type:"success",message:"This is a success message"};const n=o.bind({});n.args={type:"warning",message:"This is a warning message"};const r=o.bind({});r.args={type:"error",message:"This is an error message"};var a,t,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,d,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,h,v;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const I=["Info","Success","Warning","Error"];export{r as Error,e as Info,s as Success,n as Warning,I as __namedExportsOrder,w as default};
