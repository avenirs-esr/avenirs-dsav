import{A as w}from"./AvFilePill-BdG1n2Uo.js";import"./iframe-Bv_rUoCq.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-itid32EZ.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvButton-tRwtxnl8.js";import"./AvTooltip-t-xca0NX.js";import"./icons-Dyb4xUo3.js";import"./string-BZgCOP9D.js";const _={title:"Components/Interaction/Files/AvFilePill",component:w,tags:["autodocs"],argTypes:{name:{control:"text"},size:{control:"number"},type:{control:"text"},id:{control:"text"},downloadable:{control:"boolean"},deletable:{control:"boolean"},showDetails:{control:"boolean"}},args:{name:"Document.pdf",size:5123456,type:"pdf",id:"document-pdf",downloadable:!1,deletable:!0,showDetails:!1},parameters:{docs:{description:{component:`<h1 class="n1">File pill - <code>AvFilePill</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFilePill</code> component displays a selected or attached file as a compact pill with its name,
    optional details, and optional download or delete actions.
  </span>
</p>`}}}},r=P=>({components:{AvFilePill:w},setup(){return{args:P}},template:'<AvFilePill v-bind="args" />'}),e=r.bind({});e.args={};const n=r.bind({});n.args={showDetails:!0};const a=r.bind({});a.args={downloadable:!0,deletable:!1,showDetails:!0};const o=r.bind({});o.args={downloadable:!0,showDetails:!0};const t=r.bind({});t.args={name:"very-long-file-name-that-should-be-truncated-in-the-file-pill-component.pdf",showDetails:!0};const C=["Default","WithDetails","Downloadable","DownloadableAndDeletable","LongFileName"];var l,s,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvFilePill
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvFilePill v-bind="args" />'
})`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvFilePill
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvFilePill v-bind="args" />'
})`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    AvFilePill
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvFilePill v-bind="args" />'
})`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,v,F;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvFilePill
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvFilePill v-bind="args" />'
})`,...(F=(v=o.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var h,A,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvFilePill
  },
  setup() {
    return {
      args
    };
  },
  template: '<AvFilePill v-bind="args" />'
})`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};export{e as Default,a as Downloadable,o as DownloadableAndDeletable,t as LongFileName,n as WithDetails,C as __namedExportsOrder,_ as default};
