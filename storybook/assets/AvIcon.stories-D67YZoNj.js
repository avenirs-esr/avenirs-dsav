import{A as p}from"./AvIcon-CbJzOdp-.js";import{M as m}from"./icons-CvJnIbum.js";import{i as n,a as u}from"./storybook-B9wkepe6.js";import"./iframe-DYjuvXop.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Components/Base/AvIcon",component:p,tags:["autodocs"],argTypes:{name:{control:"select",options:n,mapping:u},size:{control:{type:"range",min:.5,max:5,step:.25},description:"Size in rem of the container and icon scale"},animation:{control:"select",options:["spin","wrench","pulse","spin-pulse","flash","float","ring",void 0]},speed:{control:"radio",options:["fast","slow",void 0]},flip:{control:"radio",options:["horizontal","vertical","both",void 0]},color:{control:"color"},title:{control:"text"}},args:{name:n[0],size:2,animation:void 0,speed:void 0,flip:void 0,color:"var(--text1)",title:"Some icon"},parameters:{docs:{description:{component:`<h1 class="n1">Messages - <code>AvMessage</code></h1>

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
</ul>`}}}},l=d=>({components:{AvIcon:p},setup(){return{args:d}},template:'<AvIcon v-bind="args" />'}),o=l.bind({});o.args={};const e=l.bind({});e.args={name:m.LOADING,animation:"spin",speed:"fast",title:"Loading"};var t,s,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvIcon v-bind="args" />\`
})`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var r,c,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvIcon v-bind="args" />\`
})`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const y=["Default","Animated"];export{e as Animated,o as Default,y as __namedExportsOrder,b as default};
