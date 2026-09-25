import{n as ee,d as h,P as ae,f as ne,a9 as re,$ as m,a1 as oe,L as se,e as C,z as te,B as le,X as ce}from"./iframe-Cb79UARr.js";import{A as ie}from"./AvTooltip-VZio7N2M.js";import{u as de}from"./use-text-truncation-IkOLGshO.js";import{g as pe}from"./icon-path-u9rVYwcY.js";import{t as ue}from"./string-BZgCOP9D.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as g}from"./icons-CS5vb1aa.js";import{h as A,b as ge}from"./storybook-Bli9j8YZ.js";import"./preload-helper-ILsKNznc.js";const j=ee({inheritAttrs:!1,__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{default:"transparent"},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1},noSentenceCase:{type:Boolean,default:!1}},setup(e){oe(n=>({v96f80d1e:n.color,v9bbbf13a:n.backgroundColor,v576be3b6:n.borderColor}));const J=h(()=>pe(e.icon)),v=ae(),Q=h(()=>e.noSentenceCase?e.label:ue(e.label)),{isTruncated:f}=de(v);return(n,ve)=>(se(),ne(ie,{content:e.label,disabled:!m(f),"force-focusable":m(f)},{default:re(()=>[C("span",te(n.$attrs,{role:"status",class:["av-badge av-row av-align-center av-py-none av-m-none av-radius-sm",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}],style:m(J)}),[C("span",{ref_key:"labelRef",ref:v,class:le({"av-max-lines":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},ce(m(Q)),3)],16)]),_:1},8,["content","disabled","force-focusable"]))}}),b=me(j,[["__scopeId","data-v-77c72dc9"]]);j.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"noSentenceCase",description:`Disable sentence case transformation on the label.
You should only use this on very specific cases.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const Ie={title:"Components/Badges/AvBadge",component:b,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...A],mapping:{"":"",...ge}},small:{control:"boolean"},ellipsis:{control:"boolean"},noSentenceCase:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:A[0],small:!1,ellipsis:!1,noSentenceCase:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},a=e=>({components:{AvBadge:b},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),be=e=>({components:{AvBadge:b},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),r=a.bind({});r.args={};const o=a.bind({});o.args={icon:void 0};const s=be.bind({});s.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const t=a.bind({});t.args={label:"Label not truncated",ellipsis:!0,small:!0};const l=a.bind({});l.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:g.MDI_CALENDAR_CLOCK_OUTLINE};const c=a.bind({});c.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:g.MDI_CALENDAR_RANGE_OUTLINE};const i=a.bind({});i.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:g.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const d=a.bind({});d.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:g.MDI_CALENDAR_CHECK_OUTLINE};const p=a.bind({});p.args={label:"NO SENTENCE CASE",noSentenceCase:!0};const u=a.bind({});u.args={label:"NO SENTENCE CASE",noSentenceCase:!1};var S,y,B;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(B=(y=r.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var T,N,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(I=(N=o.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var k,E,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var D,O,L;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(L=(O=t.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var R,w,_;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var q,U,W;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var P,z,M;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var V,X,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(H=(X=d.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var K,Y,$;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...($=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var F,G,Z;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(Z=(G=u.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const ke=["Default","WithoutIcon","SmallEllipsis","EllipsisNotTruncated","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted","NoSentenceCase","WithSentenceCase"];export{r as Default,t as EllipsisNotTruncated,p as NoSentenceCase,s as SmallEllipsis,d as StatusCompleted,c as StatusInProgress,l as StatusNotStarted,i as StatusSubmitted,u as WithSentenceCase,o as WithoutIcon,ke as __namedExportsOrder,Ie as default};
