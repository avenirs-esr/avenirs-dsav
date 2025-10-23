import{A as c}from"./AvIcon-61O7I4yJ.js";import"./iframe-CILu2PJe.js";import"./preload-helper-ILsKNznc.js";import"./iconify-DEvsZX8U.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Components/Base/AvIcon",component:c,tags:["autodocs"],argTypes:{name:{control:"text",description:"Name of the icon (from Iconify naming convention)",type:{name:"string",required:!0}},size:{control:{type:"range",min:.5,max:5,step:.25},description:"Size in rem of the container and icon scale"},animation:{control:"select",options:["spin","wrench","pulse","spin-pulse","flash","float","ring",void 0]},speed:{control:"radio",options:["fast","slow",void 0]},flip:{control:"radio",options:["horizontal","vertical","both",void 0]},color:{control:"color"},label:{control:"text"},title:{control:"text"},ssr:{control:"boolean"}},args:{name:"mdi:check",size:2,animation:void 0,speed:void 0,flip:void 0,color:"var(--text1)",label:"Check icon",title:"Check",ssr:!0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},p=d=>({components:{AvIcon:c},setup(){return{args:d}},template:'<AvIcon v-bind="args" />'}),o=p.bind({});o.args={};const e=p.bind({});e.args={name:"mdi:loading",animation:"spin",speed:"fast",title:"Loading"};var n,s,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvIcon v-bind="args" />\`
})`,...(t=(s=o.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var a,r,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvIcon v-bind="args" />\`
})`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const v=["Default","Animated"];export{e as Animated,o as Default,v as __namedExportsOrder,h as default};
