import{A as o}from"./AvLanguageSelector-8VyrK9Fi.js";import"./AvDropdown-CBWxeKmh.js";import"./iframe-BeH9VBWJ.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-BF4wx6rV.js";import"./AvTooltip-D4vubeu0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-C7z4dWSV.js";import"./icon-path-u9rVYwcY.js";import"./icons-CydXfigI.js";import"./string-BZgCOP9D.js";import"./AvPopover-CR2eLU68.js";import"./focus-trap.esm-CPw4bcQR.js";import"./use-av-breakpoints-DvfhOOda.js";import"./index-BJMphtvj.js";const I={title:"Components/Interaction/Buttons/AvLanguageSelector",component:o,tags:["autodocs"],argTypes:{languages:{control:!1},currentLanguage:{control:"select",options:["fr","en"]},title:{control:"text"}},args:{languages:[{codeIso:"fr",label:"Français"},{codeIso:"en",label:"English"},{codeIso:"es",label:"Español"}],currentLanguage:"fr",title:"Select a language"},parameters:{docs:{story:{height:"12rem"},description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},r=s=>({components:{AvLanguageSelector:o},setup(){return{args:s}},template:'<AvLanguageSelector v-bind="args" />'}),e=r.bind({});e.args={};const w=["Default"];var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    AvLanguageSelector
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvLanguageSelector v-bind="args" />\`
})`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};export{e as Default,w as __namedExportsOrder,I as default};
