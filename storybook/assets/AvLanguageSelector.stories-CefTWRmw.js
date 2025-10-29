import{_ as s}from"./AvLanguageSelector-CX75Lerj.js";import"./iframe-CXyHY9rM.js";import"./preload-helper-ILsKNznc.js";import"./use-collapsable-DuELBiTX.js";const u={title:"Components/Interaction/Buttons/AvLanguageSelector",component:s,tags:["autodocs"],argTypes:{id:{control:"text"},languages:{control:!1},currentLanguage:{control:"select",options:["fr","en"]},title:{control:"text"}},args:{id:crypto.randomUUID(),languages:[{codeIso:"fr",label:"Français"},{codeIso:"en",label:"English"}],currentLanguage:"fr",title:"Select a language"},parameters:{docs:{story:{height:"10rem"},description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},r=o=>({components:{AvLanguageSelector:s},setup(){return{args:o}},template:'<AvLanguageSelector v-bind="args" />'}),e=r.bind({});e.args={};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    AvLanguageSelector
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvLanguageSelector v-bind="args" />\`
})`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,u as default};
