import{d as U,c as M,e as W,l as z,M as P,n as u,O as V,u as X,N as H,g as K}from"./iframe-UbGyYdVx.js";import{g as F}from"./icon-path-u9rVYwcY.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as c}from"./icons-DKmRMgWU.js";import{b as g,c as Y}from"./storybook-Dc1Cnj89.js";import"./preload-helper-ILsKNznc.js";const Z=["title"],q=U({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{default:"transparent"},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){H(d=>({daab4f7c:d.color,v2120d4f4:d.backgroundColor,v90af6794:d.borderColor}));const R=M(()=>F(e.icon));return(d,J)=>(K(),W("span",{role:"status",class:u(["av-badge av-row av-align-center av-py-none av-m-none av-radius-sm",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}]),title:e.label,style:V(X(R))},[z("span",{class:u({"av-ellipsis":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},P(e.label),3)],14,Z))}}),p=G(q,[["__scopeId","data-v-7c129502"]]);q.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const oe={title:"Components/Badges/AvBadge",component:p,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...g],mapping:{"":"",...Y}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:g[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},a=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),j=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),n=a.bind({});n.args={};const r=a.bind({});r.args={icon:void 0};const o=j.bind({});o.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const s=a.bind({});s.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:c.MDI_CALENDAR_CLOCK_OUTLINE};const t=a.bind({});t.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:c.MDI_CALENDAR_RANGE_OUTLINE};const l=a.bind({});l.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:c.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const i=a.bind({});i.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:c.MDI_CALENDAR_CHECK_OUTLINE};var m,b,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,f,A;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  \`
})`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,I,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var T,N,x;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(x=(N=t.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var D,_,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var O,L,w;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(w=(L=i.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const se=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{n as Default,o as SmallEllipsis,i as StatusCompleted,t as StatusInProgress,s as StatusNotStarted,l as StatusSubmitted,r as WithoutIcon,se as __namedExportsOrder,oe as default};
