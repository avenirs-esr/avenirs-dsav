import{A as v}from"./AvNotice-DG2ckVzc.js";import"./AvIcon-CuMPiwbP.js";import"./iframe-zinZr9wm.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-D5SKHg5c.js";const S={title:"Components/Base/AvNotice",component:v,tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},type:{control:"radio",options:["info","warning","alert"],description:"The type of notice"},global:{control:"boolean"}},args:{title:"Attention",text:"<p>Please <b>read carefully</b> the instructions.</p>",type:"warning",global:!1},parameters:{docs:{description:{component:`<h1 class="n1">Important information banner - <code>AvNotice</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvNotice</code> component is an important information banner that allows users to view or
    access important and temporary information.
  </span>
</p>

<p>
  <span class="b2-regular">
    It is displayed on all pages, on both desktop and mobile devices. It is intended for important and
    urgent information; overuse may cause users to overlook the banner.
  </span>
</p>

<p>
  <span class="b2-regular">
    The text supports plain text or HTML and is sanitized to prevent XSS attacks.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    The notice consists of the following elements:
  </span>
</p>

<ul>
  <li>
    <span class="b2-regular">
      A title, provided by the <code>title</code> prop (<code>string</code>), which is optional and defaults
      to <code>''</code>.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A text, provided by the <code>text</code> prop (<code>string</code>), which is optional and defaults
      to <code>''</code>.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A pictogram and a color determined by the <code>type</code> prop, which accepts one of the following
      values:
    </span>
    <ul>
      <li><code>'info'</code></li>
      <li><code>'warning'</code></li>
      <li><code>'alert'</code></li>
    </ul>
  </li>
  <li>
    <span class="b2-regular">
      An information icon.
    </span>
  </li>
</ul>`}}}},a=f=>({components:{AvNotice:v},setup(){return{args:f}},template:'<AvNotice v-bind="args" />'}),n=a.bind({});n.args={};const e=a.bind({});e.args={title:"Information",text:"<p>This is an <b>informative message</b> with bolded parts.</p>",type:"info"};const t=a.bind({});t.args={title:"Critical alert",text:"<p><b>Immediate action</b> is required.</p>",type:"alert"};const o=a.bind({});o.args={title:void 0,text:"<p>This is an informative message <b>without title</b> and you must pay attention to it.</p>",type:"info"};const D=["Default","InfoNotice","AlertNotice","WithoutTitle"];var r,s,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};export{t as AlertNotice,n as Default,e as InfoNotice,o as WithoutTitle,D as __namedExportsOrder,S as default};
