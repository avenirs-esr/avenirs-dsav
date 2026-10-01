import{n as ee,d as y,P as ne,f as ae,a9 as se,$ as m,a1 as re,L as te,e as v,z as oe,B as de,X as ie}from"./iframe-CyF0G0ls.js";import{A as le}from"./AvTooltip-B8vstoA-.js";import{u as ce}from"./use-text-truncation-Cr6sX4z0.js";import"./date-picker-uOcIu4U5.js";import{t as ue}from"./string-DrqoAonW.js";import{g as pe}from"./icon-path-u9rVYwcY.js";import{_ as me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as g}from"./icons-B6bk2eYx.js";import{h as C,b as ge}from"./storybook-DgHgqv50.js";import"./preload-helper-ILsKNznc.js";const j=ee({inheritAttrs:!1,__name:"AvBadge",props:{color:{},backgroundColor:{},borderColor:{default:"transparent"},icon:{},label:{},small:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!1},noSentenceCase:{type:Boolean,default:!1}},setup(e){re(a=>({v96f80d1e:a.color,v9bbbf13a:a.backgroundColor,v576be3b6:a.borderColor}));const J=y(()=>pe(e.icon)),b=ne(),Q=y(()=>e.noSentenceCase?e.label:ue(e.label)),{isTruncated:h}=ce(b);return(a,be)=>(te(),ae(le,{content:e.label,disabled:!m(h),"force-focusable":m(h)},{default:se(()=>[v("span",oe(a.$attrs,{role:"status",class:["av-badge av-row av-align-center av-py-none av-m-none av-radius-sm",{"av-badge--sm av-px-xxs":e.small,"av-px-xs":!e.small,"av-badge--custom-icon":e.icon,"av-badge--no-icon":!e.icon}],style:m(J)}),[v("span",{ref_key:"labelRef",ref:b,class:de({"av-max-lines":e.ellipsis,"caption-regular":e.small,"b2-regular":!e.small})},ie(m(Q)),3)],16)]),_:1},8,["content","disabled","force-focusable"]))}}),f=me(j,[["__scopeId","data-v-77c72dc9"]]);j.__docgenInfo={exportName:"default",displayName:"AvBadge",type:1,props:[{name:"color",global:!1,description:"The color of the text to display in the badge.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"backgroundColor",global:!1,description:"The background color of the badge.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"borderColor",global:!1,description:"The color of the badge border.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"transparent"'},{name:"icon",global:!1,description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"label",global:!1,description:"The text to display in the badge.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"small",global:!1,description:"If true, displays a reduced-size badge.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"ellipsis",global:!1,description:"If true, the text is truncated with an ellipsis if it is too long.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"noSentenceCase",global:!1,description:`Disable sentence case transformation on the label.
You should only use this on very specific cases.`,tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"icon",type:"string | undefined",description:"The name of the icon or the base64 icon to be displayed.\nYou can use the `XXX_ICONS` and `ICONS_DATA_URL` constants from DSAV.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"small",type:"boolean | undefined",description:"If true, displays a reduced-size badge.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"label",type:"string",description:"The text to display in the badge.",declarations:[],schema:"string"},{name:"color",type:"string",description:"The color of the text to display in the badge.",declarations:[],schema:"string"},{name:"backgroundColor",type:"string",description:"The background color of the badge.",declarations:[],schema:"string"},{name:"borderColor",type:"string | undefined",description:"The color of the badge border.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"ellipsis",type:"boolean | undefined",description:"If true, the text is truncated with an ellipsis if it is too long.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"noSentenceCase",type:"boolean | undefined",description:`Disable sentence case transformation on the label.
You should only use this on very specific cases.`,declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/badges/AvBadge/AvBadge.vue"};const Ie={title:"Components/Badges/AvBadge",component:f,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...C],mapping:{"":"",...ge}},small:{control:"boolean"},ellipsis:{control:"boolean"},noSentenceCase:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:C[0],small:!1,ellipsis:!1,noSentenceCase:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},n=e=>({components:{AvBadge:f},setup(){return{args:e}},template:`
    <AvBadge v-bind="args" />
  `}),fe=e=>({components:{AvBadge:f},setup(){return{args:e}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),s=n.bind({});s.args={};const r=n.bind({});r.args={icon:void 0};const t=fe.bind({});t.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const o=n.bind({});o.args={label:"Label not truncated",ellipsis:!0,small:!0};const d=n.bind({});d.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:g.MDI_CALENDAR_CLOCK_OUTLINE};const i=n.bind({});i.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:g.MDI_CALENDAR_RANGE_OUTLINE};const l=n.bind({});l.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:g.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const c=n.bind({});c.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:g.MDI_CALENDAR_CHECK_OUTLINE};const u=n.bind({});u.args={label:"NO SENTENCE CASE",noSentenceCase:!0};const p=n.bind({});p.args={label:"NO SENTENCE CASE",noSentenceCase:!1};var S,A,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var B,T,N;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(N=(T=r.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var I,x,E;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var D,O,R;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,w,L;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var _,P,U;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(U=(P=i.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,V,X;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var z,M,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(K=(M=c.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var Y,H,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...($=(H=u.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var F,G,Z;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(Z=(G=p.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const xe=["Default","WithoutIcon","SmallEllipsis","EllipsisNotTruncated","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted","NoSentenceCase","WithSentenceCase"];export{s as Default,o as EllipsisNotTruncated,u as NoSentenceCase,t as SmallEllipsis,c as StatusCompleted,i as StatusInProgress,d as StatusNotStarted,l as StatusSubmitted,p as WithSentenceCase,r as WithoutIcon,xe as __namedExportsOrder,Ie as default};
