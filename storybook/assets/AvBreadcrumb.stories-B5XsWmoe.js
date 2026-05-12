import{A as a}from"./AvBreadcrumb-Br7oPgRh.js";import"./AvButton-CwKp56QE.js";import"./AvIcon-BYroXGZo.js";import"./iframe-Cw2SG8Ur.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-DyiNu08W.js";import"./string-BZgCOP9D.js";import"./use-av-breakpoints-BcSv_SvH.js";import"./index-qbaTniUZ.js";import"./use-collapsable-CbMyXEO2.js";const y={title:"Components/Navigation/AvBreadcrumb",component:a,tags:["autodocs"],argTypes:{navigationLabel:{control:"text"},showBreadcrumbLabel:{control:"text"}},args:{links:[{text:"Home",to:"#home"},{text:"No link level"},{text:"Second level",to:"#second-level"},{text:"Current level"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvBreadcrumb</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvBreadcrumb</code> guides users through the different levels of your application.
  </span>
</p>

<p>
  <span class="b2-regular">
    The breadcrumb is a secondary navigation system that allows users to see where they are
    on the site they are visiting.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">It consists of the following elements:</span>
</p>

<ul>
  <li>
    <span class="b2-regular">
      A link to the root of the site (home page) — <strong>mandatory</strong>.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      Links to pages separating the root of the site from the current page —
      <strong>mandatory</strong> if the site hierarchy has more than one level.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      The current page, the only non-clickable element — <strong>mandatory</strong>.
    </span>
  </li>
</ul>`}}}},s=o=>({components:{AvBreadcrumb:a},setup(){return{args:o}},template:'<AvBreadcrumb v-bind="args" />'}),e=s.bind({});e.args={};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    AvBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvBreadcrumb v-bind="args" />\`
})`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,y as default};
