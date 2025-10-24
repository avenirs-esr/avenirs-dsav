import{d as D,c as V,a as O,f as j,t as F,z as g,p as G,y as H,G as J,e as K}from"./iframe-BDv7I-hC.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const M=["title"],E=D({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{},iconPath:{},label:{},type:{default:"info"},noIcon:{type:Boolean,default:!1},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){J(d=>({v49e2bb85:d.color,c9577f12:d.backgroundColor,v060bf139:d.borderColor}));const W=V(()=>({"--icon-path":`url(${e.iconPath})`}));return(d,U)=>(K(),O("p",{class:g(["av-badge fr-badge",{[`fr-badge--${e.type}`]:e.type,"fr-badge--no-icon":e.noIcon,"fr-badge--sm":e.small,"av-badge--custom-icon":e.iconPath&&!e.noIcon}]),title:e.ellipsis?e.label:void 0,style:G(H(W))},[j("span",{class:g(e.ellipsis?"fr-ellipsis":"")},F(e.label),3)],14,M))}}),u=L(E,[["__scopeId","data-v-97b734d8"]]);E.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"iconPath",description:"The link to the public icon in the project (e.g., `/assets/icons/calendar-clock-outline.svg`).",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"type",description:"Sets the badge type.",tags:{default:[{description:"'info'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"error"'},{name:'"new"'},{name:'"info"'},{name:'"warning"'},{name:"undefined"}]}},{name:"noIcon",description:"If true, the badge is displayed without an icon.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const a="/assets/icons/",Q=[`${a}calendar-check-outline.svg`,`${a}calendar-clock-outline.svg`,`${a}calendar-range-outline.svg`,`${a}check-circle.svg`,`${a}close-circle-outline.svg`,`${a}dots-horizontal-circle-outline.svg`,`${a}hourglass.svg`,`${a}message-badge.svg`,`${a}text-box-check-outline.svg`,`${a}warning-outline.svg`],_={title:"Components/Badges/AvBadge",component:u,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},iconPath:{control:"select",options:["",...Q]},type:{control:"select",options:["success","error","new","info","warning"]},noIcon:{control:"boolean"},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",iconPath:"/assets/icons/calendar-clock-outline.svg",type:"info",noIcon:!1,small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},n=e=>({components:{AvBadge:u},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),R=e=>({components:{AvBadge:u},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),o=n.bind({});o.args={};const s=n.bind({});s.args={noIcon:!0};const r=R.bind({});r.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0,iconPath:"/assets/icons/calendar-clock-outline.svg"};const t=n.bind({});t.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",iconPath:"/assets/icons/calendar-clock-outline.svg"};const l=n.bind({});l.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",iconPath:"/assets/icons/calendar-range-outline.svg"};const i=n.bind({});i.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",iconPath:"/assets/icons/dots-horizontal-circle-outline.svg"};const c=n.bind({});c.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",iconPath:"/assets/icons/calendar-check-outline.svg"};var p,m,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,h,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,k,B;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(B=(k=r.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,A,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,x,P;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var w,T,$;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var q,z,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const ee=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{o as Default,r as SmallEllipsis,c as StatusCompleted,l as StatusInProgress,t as StatusNotStarted,i as StatusSubmitted,s as WithoutIcon,ee as __namedExportsOrder,_ as default};
