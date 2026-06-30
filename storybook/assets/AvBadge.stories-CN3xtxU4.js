import{m as U,b as W,e as P,a4 as M,Y as z,H as V,d as u,w as H,W as X,y as K,R as Y}from"./iframe-B24GpuUl.js";import{A as F}from"./AvTooltip-Bm9A490O.js";import{g as G}from"./icon-path-u9rVYwcY.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as c}from"./icons-B2gJYSuB.js";import{h as g,b as $}from"./storybook-DIdAqDfU.js";import"./preload-helper-ILsKNznc.js";const _=U({inheritAttrs:!1,__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{default:"transparent"},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){z(n=>({v0d2f3178:n.color,v42a18976:n.backgroundColor,v7f2b91b8:n.borderColor}));const q=W(()=>G(e.icon));return(n,J)=>(V(),P(F,{content:e.label,disabled:!e.ellipsis,"force-focusable":e.ellipsis},{default:M(()=>[u("span",H(n.$attrs,{role:"status",class:["av-badge av-row av-align-center av-py-none av-m-none av-radius-sm",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}],style:X(q)}),[u("span",{class:K({"av-max-lines":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},Y(e.label),3)],16)]),_:1},8,["content","disabled","force-focusable"]))}}),p=Z(_,[["__scopeId","data-v-d72f20bf"]]);_.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const te={title:"Components/Badges/AvBadge",component:p,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...g],mapping:{"":"",...$}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:g[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
  `}),r=a.bind({});r.args={};const o=a.bind({});o.args={icon:void 0};const s=j.bind({});s.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const t=a.bind({});t.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:c.MDI_CALENDAR_CLOCK_OUTLINE};const l=a.bind({});l.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:c.MDI_CALENDAR_RANGE_OUTLINE};const i=a.bind({});i.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:c.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const d=a.bind({});d.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:c.MDI_CALENDAR_CHECK_OUTLINE};var m,b,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,h,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var y,C,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,I,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var T,x,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var D,E,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var L,w,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const le=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{r as Default,s as SmallEllipsis,d as StatusCompleted,l as StatusInProgress,t as StatusNotStarted,i as StatusSubmitted,o as WithoutIcon,le as __namedExportsOrder,te as default};
