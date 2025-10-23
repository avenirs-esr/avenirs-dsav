import{_ as m}from"./AvNotice-ClS9QJsP.js";import"./iframe-CILu2PJe.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const A={title:"Components/Base/AvNotice",component:m,tags:["autodocs"],argTypes:{title:{control:"text"},text:{control:"text"},type:{control:"radio",options:["info","warning","alert"],description:"The type of notice"}},args:{title:"Attention",text:"Please **read carefully** the instructions.",type:"warning"},parameters:{docs:{description:{component:`<h1 class="n1">Important information banner - <code>AvNotice</code></h1>

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
</ul>`}}}},n=g=>({components:{AvNotice:m},setup(){return{args:g}},template:'<AvNotice v-bind="args" />'}),e=n.bind({});e.args={};const t=n.bind({});t.args={title:"Information",text:"This is an **informative message** with underlined parts.",type:"info"};const a=n.bind({});a.args={title:"Critical alert",text:"**Immediate action** is required.",type:"alert"};var o,s,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvNotice
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvNotice v-bind="args" />\`
})`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const y=["Default","InfoNotice","AlertNotice"];export{a as AlertNotice,e as Default,t as InfoNotice,y as __namedExportsOrder,A as default};
