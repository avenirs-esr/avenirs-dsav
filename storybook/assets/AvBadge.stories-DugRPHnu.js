import{_ as j}from"./vue-dsfr-ChM9UFcZ.js";import{d as F,c as g,b as G,m as H,f as m,G as J,o as K}from"./iframe-BVnJwASL.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const D=F({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{},iconPath:{},label:{},type:{},noIcon:{type:Boolean},small:{type:Boolean},ellipsis:{type:Boolean}},setup(a){J(p=>({v07eeafc6:p.color,v406561e2:p.backgroundColor,v6fc40bd1:p.borderColor}));const d=a,E=g(()=>d.iconPath&&!d.noIcon?"av-badge--customIcon":void 0),O=g(()=>({"--icon-path":`url(${d.iconPath})`}));return(p,R)=>{const V=j;return K(),G(V,H(d,{class:["av-badge",[m(E)]],style:m(O)}),null,16,["class","style"])}}}),u=L(D,[["__scopeId","data-v-844b9e93"]]);D.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"iconPath",description:"The link to the public icon in the project (e.g., `/assets/icons/calendar-clock-outline.svg`).",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"type",description:"Sets the badge type.",tags:{default:[{description:"'info'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"error"'},{name:'"new"'},{name:'"info"'},{name:'"warning"'},{name:"undefined"}]}},{name:"noIcon",description:"If true, the badge is displayed without an icon.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const e="/assets/icons/",M=[`${e}calendar-check-outline.svg`,`${e}calendar-clock-outline.svg`,`${e}calendar-range-outline.svg`,`${e}check-circle.svg`,`${e}close-circle-outline.svg`,`${e}dots-horizontal-circle-outline.svg`,`${e}hourglass.svg`,`${e}message-badge.svg`,`${e}text-box-check-outline.svg`,`${e}warning-outline.svg`],ee={title:"Components/Badges/AvBadge",component:u,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},iconPath:{control:"select",options:["",...M]},type:{control:"select",options:["success","error","new","info","warning"]},noIcon:{control:"boolean"},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",iconPath:"/assets/icons/calendar-clock-outline.svg",type:"info",noIcon:!1,small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvBadge</code> is ideal for displaying short, important information, such as categories, labels, or statuses.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">The component is a <code>p</code> element with the <code>fr-badge</code> class.</span>
  </li>
  <li>
    <span class="b2-regular">Props allow you to modify the badge appearance according to the props: color, icon presence, size, and handling of overly long text.</span>
  </li>
  <li>
    <span class="b2-regular">The <code>label</code> is displayed inside a <code>span</code>, potentially with the <code>ellipsis</code> prop and a defined or maximum size to handle truncated text.</span>
  </li>
</ul>`}}}},n=a=>({components:{AvBadge:u},setup(){return{args:a}},template:`
    <AvBadge v-bind="args" />
  `}),Q=a=>({components:{AvBadge:u},setup(){return{args:a}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),o=n.bind({});o.args={};const r=n.bind({});r.args={noIcon:!0};const s=Q.bind({});s.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0,iconPath:"/assets/icons/calendar-clock-outline.svg"};const t=n.bind({});t.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",iconPath:"/assets/icons/calendar-clock-outline.svg"};const c=n.bind({});c.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",iconPath:"/assets/icons/calendar-range-outline.svg"};const l=n.bind({});l.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",iconPath:"/assets/icons/dots-horizontal-circle-outline.svg"};const i=n.bind({});i.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",iconPath:"/assets/icons/calendar-check-outline.svg"};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,y,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var B,A,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(S=(A=s.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var C,I,_;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,x,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var T,$,q;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(q=($=l.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,N,W;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const ne=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{o as Default,s as SmallEllipsis,i as StatusCompleted,c as StatusInProgress,t as StatusNotStarted,l as StatusSubmitted,r as WithoutIcon,ne as __namedExportsOrder,ee as default};
