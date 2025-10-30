import{d as A,r as L,w as I,a as o,B as l,b as m,u as n,t as u,F as w,g as C,n as T,V as D,o as s,H as N,I as V,f as E}from"./iframe-DV6v5drW.js";import{u as q}from"./use-collapsable-BH9l3Op8.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const S=["aria-label"],U=["aria-expanded","aria-controls"],$=["id"],F={class:"fr-breadcrumb__list"},j=["aria-current"],f=A({__name:"AvBreadcrumb",props:{breadcrumbId:{default:`breadcrumb-${crypto.randomUUID()}`},links:{},navigationLabel:{default:"Vous êtes ici :"},showBreadcrumbLabel:{default:"Voir le fil d’Ariane"}},setup(e){const{collapse:v,collapsing:y,cssExpanded:k,doExpand:x,onTransitionEnd:B}=q(),r=L(!1);return I(r,(c,t)=>{c!==t&&x(c)}),(c,t)=>{const _=D("RouterLink");return e.links&&e.links.length?(s(),o("nav",{key:0,role:"navigation",class:"av-breadcrumb fr-breadcrumb","aria-label":e.navigationLabel},[n(r)?l("",!0):(s(),o("button",{key:0,class:"fr-breadcrumb__button","aria-expanded":n(r),"aria-controls":e.breadcrumbId,onClick:t[0]||(t[0]=a=>r.value=!n(r))},u(e.showBreadcrumbLabel),9,U)),m("div",{id:e.breadcrumbId,ref_key:"collapse",ref:v,class:T(["fr-collapse",{"fr-collapse--expanded":n(k),"fr-collapsing":n(y)}]),onTransitionend:t[1]||(t[1]=a=>n(B)(n(r)))},[m("ol",F,[(s(!0),o(w,null,C(e.links,(a,d)=>(s(),o("li",{key:d,class:"fr-breadcrumb__item"},[a.to?(s(),N(_,{key:0,class:"b2-regular fr-breadcrumb__link",to:a.to,"aria-current":d===e.links.length-1?"page":void 0},{default:V(()=>[E(u(a.text),1)]),_:2},1032,["to","aria-current"])):l("",!0),a.to?l("",!0):(s(),o("a",{key:1,class:"b2-regular fr-breadcrumb__link","aria-current":d===e.links.length-1?"page":void 0},u(a.text),9,j))]))),128))])],42,$)],8,S)):l("",!0)}}}),h=R(f,[["__scopeId","data-v-0aed19f6"]]);f.__docgenInfo={exportName:"default",displayName:"AvBreadcrumb",description:"",tags:{},props:[{name:"breadcrumbId",description:"The unique identifier for the breadcrumb element.",tags:{default:[{description:"`breadcrumb-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"links",description:`A table of objects representing the links in the breadcrumb. Each object can
have a ‘text’ property and, optionally, a ‘to’ property for routes.`,required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:`{
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined
  text: string
}`}]},{name:"undefined"}]}},{name:"navigationLabel",description:"Displayed label on the breadcrumb `nav` tag.",tags:{default:[{description:"'Vous êtes ici :'",title:"default"}]},required:!1,type:{name:"string"}},{name:"showBreadcrumbLabel",description:"Displayed breadcrumb button label.",tags:{default:[{description:"'Voir le fil d’Ariane'",title:"default"}]},required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvBreadcrumb/AvBreadcrumb.vue"]};const J={title:"Components/Navigation/AvBreadcrumb",component:h,tags:["autodocs"],argTypes:{navigationLabel:{control:"text"},showBreadcrumbLabel:{control:"text"}},args:{links:[{text:"Home",to:"#home"},{text:"Second level",to:"#second-level"},{text:"Current level"}]},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvBreadcrumb</code></h1>

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
</ul>`}}}},G=e=>({components:{AvBreadcrumb:h},setup(){return{args:e}},template:'<AvBreadcrumb v-bind="args" />'}),i=G.bind({});i.args={};var p,b,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvBreadcrumb
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvBreadcrumb v-bind="args" />\`
})`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,J as default};
