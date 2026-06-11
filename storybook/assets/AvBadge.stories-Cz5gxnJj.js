import{m as W,b as z,e as M,a4 as P,Y as V,H,d as u,A as X,W as K,y as g,R as Y}from"./iframe-jU6N5RnV.js";import{A as F}from"./AvTooltip-B7Qj5ltb.js";import{g as G}from"./icon-path-u9rVYwcY.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as c}from"./icons-BJ4bGiUf.js";import{h as m,b as j}from"./storybook-DCqn2qwk.js";import"./preload-helper-ILsKNznc.js";const q=W({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{default:"transparent"},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){V(d=>({v4f191be3:d.color,f7e77956:d.backgroundColor,e4f7d9d2:d.borderColor}));const U=z(()=>G(e.icon));return(d,Q)=>(H(),M(F,{content:e.label,disabled:!e.ellipsis,"force-focusable":e.ellipsis},{default:P(()=>[u("span",{role:"status",class:g(["av-badge av-row av-align-center av-py-none av-m-none av-radius-sm",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}]),style:X(K(U))},[u("span",{class:g({"av-max-lines":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},Y(e.label),3)],6)]),_:1},8,["content","disabled","force-focusable"]))}}),p=Z(q,[["__scopeId","data-v-ea828b9c"]]);q.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const te={title:"Components/Badges/AvBadge",component:p,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...m],mapping:{"":"",...j}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:m[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
  `}),J=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),n=a.bind({});n.args={};const r=a.bind({});r.args={icon:void 0};const o=J.bind({});o.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const s=a.bind({});s.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:c.MDI_CALENDAR_CLOCK_OUTLINE};const t=a.bind({});t.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:c.MDI_CALENDAR_RANGE_OUTLINE};const l=a.bind({});l.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:c.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const i=a.bind({});i.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:c.MDI_CALENDAR_CHECK_OUTLINE};var b,v,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,A,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(y=(A=r.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var C,B,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var I,k,T;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var x,N,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(D=(N=t.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,O,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var w,_,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(R=(_=i.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const le=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{n as Default,o as SmallEllipsis,i as StatusCompleted,t as StatusInProgress,s as StatusNotStarted,l as StatusSubmitted,r as WithoutIcon,le as __namedExportsOrder,te as default};
