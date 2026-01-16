import{d as V,c as p,e as K,z as P,I as $,A as b,K as H,u as F,J as G,g as J}from"./iframe-DYjuvXop.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as d}from"./icons-CvJnIbum.js";import{b as v,c as Z}from"./storybook-B9wkepe6.js";import"./preload-helper-ILsKNznc.js";const j=["title"],W=V({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){G(a=>({v9916578e:a.color,v5013efaa:a.backgroundColor,v418db2ed:a.borderColor}));const m=p(()=>{var a,u;return(a=e.icon)!=null&&a.startsWith("data:")?null:(u=e.icon)==null?void 0:u.replace(":","-")}),z=p(()=>`--icon-${m.value}`),M=p(()=>m.value?{"--icon-path":`var(${z.value})`}:e.icon?{"--icon-path":`url(${e.icon})`}:{});return(a,u)=>(J(),K("p",{class:b(["av-badge av-row av-align-center av-py-none av-m-none",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}]),title:e.ellipsis?e.label:void 0,style:H(F(M))},[P("span",{class:b({"av-ellipsis":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},$(e.label),3)],14,j))}}),g=Y(W,[["__scopeId","data-v-bc1cb35e"]]);W.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `MDI_ICONS`, `RI_ICONS`, and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const oe={title:"Components/Badges/AvBadge",component:g,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...v],mapping:{"":"",...Z}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:v[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
})`,...(A=(f=r.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var y,C,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,I,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var N,T,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var D,E,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(O=(E=l.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var L,w,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var q,U,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const te=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{r as Default,t as SmallEllipsis,c as StatusCompleted,l as StatusInProgress,s as StatusNotStarted,i as StatusSubmitted,o as WithoutIcon,te as __namedExportsOrder,oe as default};
