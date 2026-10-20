import{A as o}from"./AvLanguageSelector-D-S1Agjv.js";import"./AvDropdown-BUXxDzr3.js";import"./iframe-CJDV_0aW.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-Ysro0r7S.js";import"./AvTooltip-Cgw7Ycph.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CYmPSr1_.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-BabA-PQ8.js";import"./icons-CydXfigI.js";import"./string-BZgCOP9D.js";import"./AvPopover-BqOZCnbb.js";import"./focus-trap.esm-BO0Icfjz.js";import"./use-av-breakpoints-Ckgp7qOR.js";import"./index-DGnmiUAF.js";const w={title:"Components/Interaction/Buttons/AvLanguageSelector",component:o,tags:["autodocs"],argTypes:{languages:{control:!1},currentLanguage:{control:"select",options:["fr","en"]},title:{control:"text"}},args:{languages:[{codeIso:"fr",label:"Français"},{codeIso:"en",label:"English"},{codeIso:"es",label:"Español"}],currentLanguage:"fr",title:"Select a language"},parameters:{docs:{story:{height:"12rem"},description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},r=s=>({components:{AvLanguageSelector:o},setup(){return{args:s}},template:'<AvLanguageSelector v-bind="args" />'}),e=r.bind({});e.args={};const D=["Default"];var a,n,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    AvLanguageSelector
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvLanguageSelector v-bind="args" />\`
})`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};export{e as Default,D as __namedExportsOrder,w as default};
