import{d as L,c as w,r as C,w as T,a as o,B as l,b as p,u as a,t as u,F as I,g as D,n as N,V,o as s,H as E,I as q,f as R}from"./iframe-DG3pTfcg.js";import{u as S}from"./use-collapsable-DDsccUe-.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const $=["aria-label"],F=["aria-expanded","aria-controls"],j=["id"],G={class:"fr-breadcrumb__list"},H=["aria-current"],h=L({__name:"AvBreadcrumb",props:{id:{},links:{},navigationLabel:{default:"Vous êtes ici :"},showBreadcrumbLabel:{default:"Voir le fil d’Ariane"}},setup(e){const{collapse:y,collapsing:k,cssExpanded:_,doExpand:x,onTransitionEnd:B}=S(),m=w(()=>e.id??`breadcrumb-${crypto.randomUUID()}`),t=C(!1);return T(t,(c,r)=>{c!==r&&x(c)}),(c,r)=>{const A=V("RouterLink");return e.links&&e.links.length?(s(),o("nav",{key:0,role:"navigation",class:"av-breadcrumb fr-breadcrumb","aria-label":e.navigationLabel},[a(t)?l("",!0):(s(),o("button",{key:0,class:"fr-breadcrumb__button","aria-expanded":a(t),"aria-controls":a(m),onClick:r[0]||(r[0]=n=>t.value=!a(t))},u(e.showBreadcrumbLabel),9,F)),p("div",{id:a(m),ref_key:"collapse",ref:y,class:N(["fr-collapse",{"fr-collapse--expanded":a(_),"fr-collapsing":a(k)}]),onTransitionend:r[1]||(r[1]=n=>a(B)(a(t)))},[p("ol",G,[(s(!0),o(I,null,D(e.links,(n,d)=>(s(),o("li",{key:d,class:"fr-breadcrumb__item"},[n.to?(s(),E(A,{key:0,class:"b2-regular fr-breadcrumb__link",to:n.to,"aria-current":d===e.links.length-1?"page":void 0},{default:q(()=>[R(u(n.text),1)]),_:2},1032,["to","aria-current"])):l("",!0),n.to?l("",!0):(s(),o("a",{key:1,class:"b2-regular fr-breadcrumb__link","aria-current":d===e.links.length-1?"page":void 0},u(n.text),9,H))]))),128))])],42,j)],8,$)):l("",!0)}}}),v=U(h,[["__scopeId","data-v-acfb9023"]]);h.__docgenInfo={exportName:"default",displayName:"AvBreadcrumb",description:"",tags:{},props:[{name:"id",description:"The unique identifier for the breadcrumb element.",tags:{default:[{description:"`breadcrumb-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"links",description:`A table of objects representing the links in the breadcrumb. Each object can
have a ‘text’ property and, optionally, a ‘to’ property for routes.`,required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:`{
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined
  text: string
}`}]},{name:"undefined"}]}},{name:"navigationLabel",description:"Displayed label on the breadcrumb `nav` tag.",tags:{default:[{description:"'Vous êtes ici :'",title:"default"}]},required:!1,type:{name:"string"}},{name:"showBreadcrumbLabel",description:"Displayed breadcrumb button label.",tags:{default:[{description:"'Voir le fil d’Ariane'",title:"default"}]},required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvBreadcrumb/AvBreadcrumb.vue"]};const M={title:"Components/Navigation/AvBreadcrumb",component:v,tags:["autodocs"],argTypes:{navigationLabel:{control:"text"},showBreadcrumbLabel:{control:"text"}},args:{links:[{text:"Home",to:"#home"},{text:"Second level",to:"#second-level"},{text:"Current level"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvBreadcrumb</code></h1>

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
</ul>`}}}},z=e=>({components:{AvBreadcrumb:v},setup(){return{args:e}},template:'<AvBreadcrumb v-bind="args" />'}),i=z.bind({});i.args={};var b,g,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvBreadcrumb v-bind="args" />\`
})`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Q=["Default"];export{i as Default,Q as __namedExportsOrder,M as default};
