import{A as o}from"./AvLanguageSelector-BI_0wmsd.js";import"./AvDropdown-CLe9peu4.js";import"./iframe-BPCXuOts.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-DXsRlDdZ.js";import"./AvTooltip-C-7EGwfq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-B0bHt_KH.js";import"./icon-path-u9rVYwcY.js";import"./icons-B6bk2eYx.js";import"./date-picker-BV3-HI_h.js";import"./string-6CTWp9fy.js";import"./AvPopover--NyaqM6_.js";import"./focus-trap.esm-CPw4bcQR.js";import"./use-text-truncation-BuFfSHZ9.js";import"./use-av-breakpoints-ZkAzB-mE.js";import"./index-BckBhP1w.js";const y={title:"Components/Interaction/Buttons/AvLanguageSelector",component:o,tags:["autodocs"],argTypes:{languages:{control:!1},currentLanguage:{control:"select",options:["fr","en"]},title:{control:"text"}},args:{languages:[{codeIso:"fr",label:"Français"},{codeIso:"en",label:"English"},{codeIso:"es",label:"Español"}],currentLanguage:"fr",title:"Select a language"},parameters:{docs:{story:{height:"12rem"},description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvLanguageSelector</code> allows users to choose the language in which the site content is displayed, if it is available in several languages.
    It takes the form of a button that opens a drop-down list.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">The language selector is composed by:</span>
</p>

<ul>
  <li><span class="b2-regular">a button that opens or closes a drop-down menu of languages</span></li>
  <li><span class="b2-regular">a drop-down menu of available languages</span></li>
</ul>`}}}},r=s=>({components:{AvLanguageSelector:o},setup(){return{args:s}},template:'<AvLanguageSelector v-bind="args" />'}),e=r.bind({});e.args={};var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    AvLanguageSelector
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvLanguageSelector v-bind="args" />\`
})`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,y as default};
