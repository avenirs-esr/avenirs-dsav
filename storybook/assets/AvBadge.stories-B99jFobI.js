import{d as R,c as z,a as M,b as V,t as W,n as u,S as P,u as H,Q as K,o as $}from"./iframe-B0Y85Vql.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as a}from"./icons-ubxugSKv.js";import"./preload-helper-ILsKNznc.js";const F=["title"],_=R({__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{},iconDataUrl:{},label:{},type:{default:"info"},noIcon:{type:Boolean,default:!1},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1}},setup(e){K(c=>({v5e64b99a:c.color,v3a992f68:c.backgroundColor,v890b68e4:c.borderColor}));const q=z(()=>({"--icon-path":`url(${e.iconDataUrl})`}));return(c,Y)=>($(),M("p",{class:u(["av-badge fr-badge",{[`fr-badge--${e.type}`]:e.type,"fr-badge--no-icon":e.noIcon,"fr-badge--sm":e.small,"av-badge--custom-icon":e.iconDataUrl&&!e.noIcon}]),title:e.ellipsis?e.label:void 0,style:P(H(q))},[V("span",{class:u(e.ellipsis?"fr-ellipsis":"")},W(e.label),3)],14,F))}}),p=j(_,[["__scopeId","data-v-4d6aaf2e"]]);_.__docgenInfo={exportName:"default",displayName:"AvBadge",description:"",tags:{},props:[{name:"color",description:"The color of the text to display in the badge.",required:!0,type:{name:"string"}},{name:"backgroundColor",description:"The background color of the badge.",required:!0,type:{name:"string"}},{name:"borderColor",description:"The color of the badge border.",required:!1,type:{name:"string"}},{name:"iconDataUrl",description:"The base64 icon to be displayed.\nYou can use the `ICONS_DATA_URL` constant from DSAV.",required:!1,type:{name:"string"}},{name:"label",description:"The text to display in the badge.",required:!0,type:{name:"string"}},{name:"type",description:"Sets the badge type.",tags:{default:[{description:"'info'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"success"'},{name:'"error"'},{name:'"new"'},{name:'"info"'},{name:'"warning"'},{name:"undefined"}]}},{name:"noIcon",description:"If true, the badge is displayed without an icon.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"small",description:"If true, displays a reduced-size badge.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}},{name:"ellipsis",description:"If true, the text is truncated with an ellipsis if it is too long.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"undefined"}]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"]};const g=Object.keys(a),G=a,ae={title:"Components/Badges/AvBadge",component:p,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},iconDataUrl:{control:"select",options:["",...g],mapping:{"":"",...G}},type:{control:"select",options:["success","error","new","info","warning"]},noIcon:{control:"boolean"},small:{control:"boolean"},ellipsis:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",iconDataUrl:g[0],type:"info",noIcon:!1,small:!1,ellipsis:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},n=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),Q=e=>({components:{AvBadge:p},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),r=n.bind({});r.args={};const o=n.bind({});o.args={noIcon:!0};const t=Q.bind({});t.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const s=n.bind({});s.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",iconDataUrl:a.MDI_CALENDAR_CLOCK_OUTLINE};const l=n.bind({});l.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",iconDataUrl:a.MDI_CALENDAR_RANGE_OUTLINE};const i=n.bind({});i.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",iconDataUrl:a.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const d=n.bind({});d.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",iconDataUrl:a.MDI_CALENDAR_CHECK_OUTLINE};var m,b,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,h,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,C,B;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(B=(C=t.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var I,S,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,T,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(N=(T=l.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var U,E,w;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var x,O,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const ne=["Default","WithoutIcon","SmallEllipsis","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted"];export{r as Default,t as SmallEllipsis,d as StatusCompleted,l as StatusInProgress,s as StatusNotStarted,i as StatusSubmitted,o as WithoutIcon,ne as __namedExportsOrder,ae as default};
