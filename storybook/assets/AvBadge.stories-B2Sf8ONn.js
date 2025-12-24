import{j as V,c as p,l as P,v as $,C as H,A as b,z as K,u as j,L as F,m as G}from"./iframe-CVcss3L0.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as d}from"./icons-ByBBphah.js";import{b as v,c as Z}from"./storybook-Cqdy4f0f.js";import"./preload-helper-ILsKNznc.js";const J=["title"],W=V({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){F(a=>({v60a37574:a.color,v43734cf8:a.backgroundColor,v4241338c:a.borderColor}));const m=p(()=>{var a,u;return(a=e.icon)!=null&&a.startsWith("data:")?null:(u=e.icon)==null?void 0:u.replace(":","-")}),z=p(()=>`--icon-${m.value}`),M=p(()=>m.value?{"--icon-path":`var(${z.value})`}:e.icon?{"--icon-path":`url(${e.icon})`}:{});return(a,u)=>(G(),P("p",{class:b(["av-badge",{"av-badge--sm":e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}]),title:e.ellipsis?e.label:void 0,style:K(j(M))},[$("span",{class:b({"av-ellipsis":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},H(e.label),3)],14,J))}}),g=Y(W,[["__scopeId","data-v-a31125c5"]]);W.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `MDI_ICONS`, `RI_ICONS`, and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const oe={title:"Components/Badges/AvBadge",component:g,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...v],mapping:{"":"",...Z}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:v[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvBadge</code> is ideal for displaying short, important information, such as categories, labels, or statuses.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">The component is a <code>p</code> element with the <code>av-badge</code> class.</span>
  </li>
  <li>
    <span class="b2-regular">Props allow you to modify the badge appearance according to the props: color, icon presence, size, and handling of overly long text.</span>
  </li>
  <li>
    <span class="b2-regular">The <code>label</code> is displayed inside a <code>span</code>, potentially with the <code>ellipsis</code> prop and a defined or maximum size to handle truncated text.</span>
  </li>
</ul>`}}}},n=e=>({components:{AvBadge:g},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),Q=e=>({components:{AvBadge:g},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),r=n.bind({});r.args={};const o=n.bind({});o.args={icon:void 0};const t=Q.bind({});t.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const s=n.bind({});s.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:d.MDI_CALENDAR_CLOCK_OUTLINE};const l=n.bind({});l.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:d.MDI_CALENDAR_RANGE_OUTLINE};const i=n.bind({});i.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:d.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const c=n.bind({});c.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:d.MDI_CALENDAR_CHECK_OUTLINE};var h,f,A;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvBadge v-bind="args" />
  \`
})`,...(A=(f=r.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var C,y,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvBadge v-bind="args" />
  \`
})`,...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var S,I,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  \`
})`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var N,T,D;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvBadge v-bind="args" />
  \`
})`,...(D=(T=s.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,O,x;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvBadge v-bind="args" />
  \`
})`,...(x=(O=l.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var L,_,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvBadge v-bind="args" />
  \`
})`,...(R=(_=i.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,w,U;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvBadge v-bind="args" />
  \`
})`,...(U=(w=c.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};const te=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{r as Default,t as SmallEllipsis,c as StatusCompleted,l as StatusInProgress,s as StatusNotStarted,i as StatusSubmitted,o as WithoutIcon,te as __namedExportsOrder,oe as default};
