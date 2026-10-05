import{A as u}from"./AvBadge-DzipcgFV.js";import{I as p}from"./icons-B6bk2eYx.js";import{h as m,b as Z}from"./storybook-DgHgqv50.js";import"./iframe-gg2ZS4dM.js";import"./preload-helper-ILsKNznc.js";import"./AvTooltip-C-gHPtit.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-text-truncation-Btzk4NTf.js";import"./date-picker-20c-wtnQ.js";import"./string-DpXhLkA7.js";import"./icon-path-u9rVYwcY.js";const oe={title:"Components/Badges/AvBadge",component:u,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},color:{control:"color"},backgroundColor:{control:"color"},borderColor:{control:"color"},icon:{control:"select",options:["",...m],mapping:{"":"",...Z}},small:{control:"boolean"},ellipsis:{control:"boolean"},noSentenceCase:{control:"boolean"}},args:{label:"A super badge",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",borderColor:"",icon:m[0],small:!1,ellipsis:!1,noSentenceCase:!1},parameters:{docs:{description:{component:`<h1 class="n1">Badges - <code>AvBadge</code></h1>

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
</ul>`}}}},e=g=>({components:{AvBadge:u},setup(){return{args:g}},template:`
    <AvBadge v-bind="args" />
  `}),j=g=>({components:{AvBadge:u},setup(){return{args:g}},template:`
    <div style="width: 150px">
      <AvBadge v-bind="args" />
    </div>
  `}),n=e.bind({});n.args={};const r=e.bind({});r.args={icon:void 0};const a=j.bind({});a.args={label:"This is a very long badge label that will be truncated",ellipsis:!0,small:!0};const o=e.bind({});o.args={label:"Label not truncated",ellipsis:!0,small:!0};const s=e.bind({});s.args={label:"Not started",color:"var(--text2)",backgroundColor:"var(--other-background-base)",borderColor:"var(--other-border-skill-card)",icon:p.MDI_CALENDAR_CLOCK_OUTLINE};const t=e.bind({});t.args={label:"In progress",color:"var(--dark-background-primary1)",backgroundColor:"var(--light-background-primary2)",icon:p.MDI_CALENDAR_RANGE_OUTLINE};const c=e.bind({});c.args={label:"Submitted for evaluation",color:"var(--light-foreground-primary1)",backgroundColor:"var(--light-background-critical)",icon:p.MDI_DOTS_HORIZONTAL_CIRCLE_OUTLINE};const l=e.bind({});l.args={label:"Completed",color:"var(--light-foreground-neutral)",backgroundColor:"var(--light-background-neutral)",icon:p.MDI_CALENDAR_CHECK_OUTLINE};const d=e.bind({});d.args={label:"NO SENTENCE CASE",noSentenceCase:!0};const i=e.bind({});i.args={label:"NO SENTENCE CASE",noSentenceCase:!1};var b,v,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var A,S,C;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var B,E,N;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(N=(E=a.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var f,I,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(T=(I=o.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var _,k,y;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var D,O,L;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(L=(O=t.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var x,W,R;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(R=(W=c.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var U,w,M;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(M=(w=l.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var P,z,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(H=(z=d.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var K,q,G;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(G=(q=i.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const se=["Default","WithoutIcon","SmallEllipsis","EllipsisNotTruncated","StatusNotStarted","StatusInProgress","StatusSubmitted","StatusCompleted","NoSentenceCase","WithSentenceCase"];export{n as Default,o as EllipsisNotTruncated,d as NoSentenceCase,a as SmallEllipsis,l as StatusCompleted,t as StatusInProgress,s as StatusNotStarted,c as StatusSubmitted,i as WithSentenceCase,r as WithoutIcon,se as __namedExportsOrder,oe as default};
