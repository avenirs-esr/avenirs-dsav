import{d as i,j as c,I as l,V as p,A as m,e as u}from"./iframe-D7OPTHdM.js";import{H as d}from"./vue-dsfr-IN64CnFq.js";import"./preload-helper-ILsKNznc.js";import"./iconify-CG-Oriw0.js";const a=i({__name:"AvBreadcrumb",props:{links:{},navigationLabel:{},showBreadcrumbLabel:{}},setup(n){const o=n;return(b,h)=>(u(),c(m(d),l(p(o)),null,16))}});a.__docgenInfo={exportName:"default",displayName:"AvBreadcrumb",description:"",tags:{},props:[{name:"links",description:`A table of objects representing the links in the breadcrumb. Each object can
have a ‘text’ property and, optionally, a ‘to’ property for routes.`,required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:`{
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined
  text: string
}`}]},{name:"undefined"}]}},{name:"navigationLabel",description:"Displayed label on the breadcrumb `nav` tag.",required:!1,type:{name:"string"}},{name:"showBreadcrumbLabel",description:"Displayed breadcrumb button label.",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvBreadcrumb/AvBreadcrumb.vue"]};const B={title:"Components/Navigation/AvBreadcrumb",component:a,tags:["autodocs"],argTypes:{navigationLabel:{control:"text"},showBreadcrumbLabel:{control:"text"}},args:{links:[{text:"Home",to:"#home"},{text:"Second level",to:"#second-level"},{text:"Current level"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvBreadcrumb</code></h1>

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
</ul>`}}}},g=n=>({components:{AvBreadcrumb:a},setup(){return{args:n}},template:'<AvBreadcrumb v-bind="args" />'}),e=g.bind({});e.args={};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    AvBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvBreadcrumb v-bind="args" />\`
})`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,B as default};
