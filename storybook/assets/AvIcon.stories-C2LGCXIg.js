import{A as p}from"./AvIcon-BY_XioNt.js";import{M as m}from"./icons-DGI95zqn.js";import{i as e,a as u}from"./storybook-lTDtLd0n.js";import"./iframe-DXQJXA5y.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={title:"Components/Base/AvIcon",component:p,tags:["autodocs"],argTypes:{name:{control:"select",options:e,mapping:u},size:{control:{type:"range",min:.5,max:5,step:.25},description:"Size in rem of the container and icon scale"},animation:{control:"select",options:["spin","wrench","pulse","spin-pulse","flash","float","ring",void 0]},speed:{control:"radio",options:["fast","slow",void 0]},flip:{control:"radio",options:["horizontal","vertical","both",void 0]},color:{control:"color"},title:{control:"text"}},args:{name:e[0],size:2,animation:void 0,speed:void 0,flip:void 0,color:"var(--text1)",title:"Some icon"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvIcon</code> component places an <code>Icon</code>
    (see <a href="https://iconify.design/docs/icon-components/vue/" target="_blank">Icon component from Iconify</a>)
    in a square <code>div</code> of configurable size.
    It is a Vue.js component for displaying icons with a wide range of customization options,
    including animations, colors, and sizes.
  </span>
</p>

<p>
  <span class="b2-regular">
    It's designed to be flexible and performant, with support for various display options,
    flip options, and accessible titles.
  </span>
</p>

<p>
  <span class="b2-regular">
    It has exactly the same API as <code>OhVueIcon</code>, and uses <code>@iconify/vue</code> under the hood.
  </span>
</p>

<p>
  <span class="b2-regular">
    <strong>⚠️ Icon names must be those from </strong>
    <a href="https://icon-sets.iconify.design/" target="_blank" rel="noopener noreferrer">Iconify-vue</a>
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    The icon is composed of a square <code>div</code> of configurable size containing the <code>Icon</code> component.
  </span>
</p>`}}}},d=l=>({components:{AvIcon:p},setup(){return{args:l}},template:'<AvIcon v-bind="args" />'}),o=d.bind({});o.args={};const n=d.bind({});n.args={name:m.LOADING,animation:"spin",speed:"fast",title:"Loading"};var s,a,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvIcon v-bind="args" />\`
})`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var r,i,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvIcon v-bind="args" />\`
})`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["Default","Animated"];export{n as Animated,o as Default,y as __namedExportsOrder,A as default};
