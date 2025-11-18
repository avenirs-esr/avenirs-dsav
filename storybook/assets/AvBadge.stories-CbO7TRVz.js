import{j as R,c as z,l as M,v as V,C as W,A as u,z as P,u as j,L as H,m as K}from"./iframe-B5IygEQu.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as a}from"./icons-BvQE-1Ij.js";import"./preload-helper-ILsKNznc.js";const G=["title"],q=R({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{},iconDataUrl:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){H(d=>({b9ace04c:d.color,v69116e8c:d.backgroundColor,v0c5571ce:d.borderColor}));const w=z(()=>e.iconDataUrl?{"--icon-path":`url(${e.iconDataUrl})`}:{});return(d,$)=>(K(),M("p",{class:u(["av-badge",{"av-badge--sm":e.small,"av-badge--custom-icon":e.iconDataUrl,"av-badge--no-icon":!e.iconDataUrl}]),title:e.ellipsis?e.label:void 0,style:P(j(w))},[V("span",{class:u({"av-ellipsis":e.ellipsis,"caption-bold":e.small,"b2-bold":!e.small})},W(e.label),3)],14,G))}}),p=F(q,[["__scopeId","data-v-1334694a"]]);q.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"iconDataUrl",description:"The base64 icon to be displayed.\nYou can use the `ICONS_DATA_URL` constant from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const g=Object.keys(a),Y=a,ae={title:"Components/Badges/AvBadge",component:p,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},iconDataUrl:{control:"select",options:["",...g],mapping:{"":"",...Y}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",iconDataUrl:g[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},n=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),Z=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),r=n.bind({});r.args={};const o=n.bind({});o.args={iconDataUrl:void 0};const t=Z.bind({});t.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const s=n.bind({});s.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",iconDataUrl:a.MDI_CALENDAR_CLOCK_OUTLINE};const l=n.bind({});l.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",iconDataUrl:a.MDI_CALENDAR_RANGE_OUTLINE};const i=n.bind({});i.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",iconDataUrl:a.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const c=n.bind({});c.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",iconDataUrl:a.MDI_CALENDAR_CHECK_OUTLINE};var m,b,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,f,A;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var y,C,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(B=(C=t.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,D,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var I,T,U;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(U=(T=l.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var N,E,x;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(x=(E=i.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var L,O,_;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const ne=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{r as Default,t as SmallEllipsis,c as StatusCompleted,l as StatusInProgress,s as StatusNotStarted,i as StatusSubmitted,o as WithoutIcon,ne as __namedExportsOrder,ae as default};
