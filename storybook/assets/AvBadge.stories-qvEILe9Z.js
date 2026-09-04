import{m as X,b as K,L as Y,e as F,a4 as G,W as u,Y as Z,H as $,d as v,w as j,y as J,R as Q}from"./iframe-BwozX2SB.js";import{A as ee}from"./AvTooltip-CIcbfJ9j.js";import{u as ae}from"./use-text-truncation-DNykW5t2.js";import{g as re}from"./icon-path-u9rVYwcY.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as p}from"./icons-0dWeWY1j.js";import{h as f,b as oe}from"./storybook-BXgy7yVt.js";import"./preload-helper-ILsKNznc.js";const V=X({inheritAttrs:!1,__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{default:"transparent"},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){Z(r=>({v23fa1d81:r.color,v3d865773:r.backgroundColor,v01f8e635:r.borderColor}));const H=K(()=>re(e.icon)),g=Y(),{isTruncated:b}=ae(g);return(r,te)=>($(),F(ee,{content:e.label,disabled:!u(b),"force-focusable":u(b)},{default:G(()=>[v("span",j(r.$attrs,{role:"status",class:["av-badge av-row av-align-center av-py-none av-m-none av-radius-sm",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}],style:u(H)}),[v("span",{ref_key:"labelRef",ref:g,class:J({"av-max-lines":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},Q(e.label),3)],16)]),_:1},8,["content","disabled","force-focusable"]))}}),m=ne(V,[["__scopeId","data-v-700d4674"]]);V.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"icon",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const be={title:"Components/Badges/AvBadge",component:m,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...f],mapping:{"":"",...oe}},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:f[0],small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},a=e=>({components:{AvBadge:m},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),se=e=>({components:{AvBadge:m},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),n=a.bind({});n.args={};const o=a.bind({});o.args={icon:void 0};const s=se.bind({});s.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const t=a.bind({});t.args={label:"Label not truncated",ellipsis:!0,small:!0};const l=a.bind({});l.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:p.MDI_CALENDAR_CLOCK_OUTLINE};const i=a.bind({});i.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:p.MDI_CALENDAR_RANGE_OUTLINE};const d=a.bind({});d.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:p.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const c=a.bind({});c.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:p.MDI_CALENDAR_CHECK_OUTLINE};var h,A,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(y=(A=n.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var C,B,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var T,I,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var x,N,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(D=(N=t.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,L,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,w,R;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var q,U,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var P,M,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(z=(M=c.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const ve=["Default","WithoutIcon","SmallEllipsis","EllipsisNotTruncated","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{n as Default,t as EllipsisNotTruncated,s as SmallEllipsis,c as StatusCompleted,i as StatusInProgress,l as StatusNotStarted,d as StatusSubmitted,o as WithoutIcon,ve as __namedExportsOrder,be as default};
