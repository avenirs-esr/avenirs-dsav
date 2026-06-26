import{A as v}from"./AvNotice-Ctzq7HuV.js";import"./AvIcon-BL9q2U2O.js";import"./iframe-Cx06bDHC.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-Dt7Ye3mU.js";import"./string-BZgCOP9D.js";const O={title:"Components/Base/AvNotice",component:v,tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},type:{control:"radio",options:["info","warning","alert"],description:"The type of notice"}},args:{title:"Attention",text:"Please **read carefully** the instructions.",type:"warning"},parameters:{docs:{description:{component:`<h1 class="n1">Important information banner - <code>AvNotice</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvNotice</code> is an important information banner that allow
    users to view or access important and temporary information.
  </span>
</p>

<p>
  <span class="b2-regular">
    It is displayed on all pages on desktop and mobile devices. It displays important and urgent information
    (overuse may cause this banner to "disappear").
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The notice consists of the following elements:</span></p>

<ul>
  <li>
    <span class="b2-regular">A title (prop <code>title</code>, of type <code>string</code>):</span>
    <ul>
      <li><span class="b2-regular">Optional with a default value <code>''</code></span></li>
    </ul>
  </li>
  <li>
    <span class="b2-regular">A text (prop <code>text</code>, of type <code>string</code>):</span>
    <ul>
      <li><span class="b2-regular">Optional with a default value <code>''</code></span></li>
    </ul>
  </li>
  <li>
    <span class="b2-regular">A pictogram and a color determined by the prop <code>type</code>, which can be one of the following strings:</span>
    <ul>
      <li><span class="b2-regular"><code>'info'</code></span></li>
      <li><span class="b2-regular"><code>'warning'</code></span></li>
      <li><span class="b2-regular"><code>'alert'</code></span></li>
    </ul>
  </li>
  <li>
    <span class="b2-regular">An information icon</span>
  </li>
</ul>`}}}},o=h=>({components:{AvNotice:v},setup(){return{args:h}},template:'<AvNotice v-bind="args" />'}),e=o.bind({});e.args={};const t=o.bind({});t.args={title:"Information",text:"This is an **informative message** with underlined parts.",type:"info"};const a=o.bind({});a.args={title:"Critical alert",text:"**Immediate action** is required.",type:"alert"};const n=o.bind({});n.args={title:void 0,text:"This is an informative message **without title** and you must pay attention to it.",type:"info"};var s,r,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,p,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const C=["Default","InfoNotice","AlertNotice","WithoutTitle"];export{a as AlertNotice,e as Default,t as InfoNotice,n as WithoutTitle,C as __namedExportsOrder,O as default};
