import{d as ue,c as o,e as pe,z as S,I as ce,u as i,f as U,K as ge,A as D,g as me}from"./iframe-BteZ1Kap.js";import{c as V,t as Q,A as x,p as Me,i as he}from"./AvInput-BT03kcvT.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvMessage-B95pG80_.js";import"./AvIconText-B9tbF8EB.js";import"./AvIcon-Ba416Ekm.js";import"./icons-CvJnIbum.js";function ve(e,s){let d,r=s==null?void 0:s.in;return e.forEach(t=>{!r&&typeof t=="object"&&(r=V.bind(null,t));const l=Q(t,r);(!d||d<l||isNaN(+l))&&(d=l)}),V(r,d||NaN)}function Ve(e,s){let d,r=s==null?void 0:s.in;return e.forEach(t=>{!r&&typeof t=="object"&&(r=V.bind(null,t));const l=Q(t,r);(!d||d>l||isNaN(+l))&&(d=l)}),V(r,d||NaN)}const fe=["for"],X=ue({__name:"AvPeriodInput",props:{id:{},label:{},startModelValue:{default:""},endModelValue:{default:""},startLabel:{},endLabel:{},disabled:{type:Boolean,default:!1},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:s}){const d=s,r=o(()=>e.id??`period-input-${crypto.randomUUID()}`),t=o(()=>`${r.value}__start`),l=o(()=>`${r.value}__end`),_=o(()=>e.stacked?{height:e.separatorSpacing}:{width:e.separatorSpacing});function y(n){if(!n)return;const a=Me(n);return he(a)?a:void 0}function ee(n,a){return n&&a?ve([n,a]):n??a}function ae(n,a){return n&&a?Ve([n,a]):n??a}const ne=o(()=>y(e.startModelValue)),te=o(()=>y(e.endModelValue)),de=o(()=>e.startMinDate),re=o(()=>ae(e.startMaxDate,te.value)),se=o(()=>ee(e.endMinDate,ne.value)),oe=o(()=>e.endMaxDate);function le(n){const a=(n==null?void 0:n.toString())??"";d("update:startModelValue",a),d("change",{start:a,end:e.endModelValue})}function ie(n){const a=(n==null?void 0:n.toString())??"";d("update:endModelValue",a),d("change",{start:e.startModelValue,end:a})}return(n,a)=>(me(),pe("div",{class:D(["av-period-input av-col av-gap-sm",{"av-period-input--stacked":e.stacked}])},[S("label",{class:"av-period-input__label",for:i(t)},ce(e.label),9,fe),S("div",{class:D(["av-period-input__row",{"av-row av-align-end":!e.stacked,"av-col av-align-stretch":e.stacked}])},[U(x,{id:i(t),type:"date","model-value":e.startModelValue,label:e.startLabel,"label-visible":!1,disabled:e.disabled,"aria-disabled":e.disabled,width:e.width,"min-date":i(de),"max-date":i(re),"data-testid":"start-date-input","onUpdate:modelValue":a[0]||(a[0]=f=>le(f))},null,8,["id","model-value","label","disabled","aria-disabled","width","min-date","max-date"]),S("div",{class:"av-period-input__separator","aria-hidden":"true",style:ge(i(_))},null,4),U(x,{id:i(l),type:"date","model-value":e.endModelValue,label:e.endLabel,"label-visible":!1,disabled:e.disabled,"aria-disabled":e.disabled,width:e.width,"min-date":i(se),"max-date":i(oe),"data-testid":"end-date-input","onUpdate:modelValue":a[1]||(a[1]=f=>ie(f))},null,8,["id","model-value","label","disabled","aria-disabled","width","min-date","max-date"])],2)],2))}}),Z=be(X,[["__scopeId","data-v-2eeee759"]]);X.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},props:[{name:"id",description:"Unique id for the period input",tags:{default:[{description:"`period-input-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"label",description:"Label displayed above the two inputs",required:!0,type:{name:"string"}},{name:"startModelValue",description:"Start date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"endModelValue",description:"End date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"startLabel",description:`Label for the start input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"endLabel",description:`Label for the end input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"disabled",description:"If `true`, disable both inputs",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"width",description:`Optional width for both inputs (CSS value)
e.g. '14.875rem', '240px', '100%'`,required:!1,type:{name:"string"}},{name:"startMinDate",description:"Minimum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"startMaxDate",description:"Maximum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"endMinDate",description:"Minimum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"endMaxDate",description:"Maximum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"stacked",description:"If `true`, stack inputs vertically (useful for mobile layouts)",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"separatorSpacing",description:`Spacing between start and end inputs.
Accepts any valid CSS length (e.g. '0.5rem', '1rem', '16px').`,tags:{default:[{description:"var(--spacing-sm)",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const we={title:"Components/Interaction/Inputs/AvPeriodInput",component:Z,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text",required:!0},startModelValue:{control:"text"},endModelValue:{control:"text"},startLabel:{control:"text",required:!0},endLabel:{control:"text",required:!0},disabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"}},args:{label:"Period",startLabel:"Start",endLabel:"End",startModelValue:"",endModelValue:"",disabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvPeriodInput</code> component allows users to select a period
    by choosing a start date and an end date under a single label.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">The period input is composed of:</span>
</p>

<ul>
  <li><span class="b2-regular">a wrapper label</span></li>
  <li><span class="b2-regular">a start date input</span></li>
  <li><span class="b2-regular">a spacer separator</span></li>
  <li><span class="b2-regular">an end date input</span></li>
</ul>

<h2 class="n2">🔁 Built-in range behavior</h2>

<p>
  <span class="b2-regular">
    Selecting a start date automatically constrains the end date minimum, and selecting
    an end date automatically constrains the start date maximum.
  </span>
</p>`}}}},u=e=>({components:{AvPeriodInput:Z},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),p=u.bind({});p.args={};const c=u.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=u.bind({});g.args={width:"14.875rem"};const m=u.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const M=u.bind({});M.args={disabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const h=u.bind({});h.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const b=u.bind({});b.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=u.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};var I,E,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(C=(E=p.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var w,A,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var q,k,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(N=(k=g.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var L,B,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var Y,O,j;M.parameters={...M.parameters,docs:{...(Y=M.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(j=(O=M.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var T,$,z;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(z=($=h.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,R,K;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(K=(R=b.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    AvPeriodInput
  },
  setup() {
    const onStartUpdate = (value: string) => {
      args.startModelValue = value;
    };
    const onEndUpdate = (value: string) => {
      args.endModelValue = value;
    };
    const onChange = (payload: {
      start: string;
      end: string;
    }) => {
      args.startModelValue = payload.start;
      args.endModelValue = payload.end;
    };
    return {
      args,
      onStartUpdate,
      onEndUpdate,
      onChange
    };
  },
  template: \`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  \`
})`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Ae=["Default","Prefilled","WithWidth","WithCustomSpacing","Disabled","Stacked","WithExternalBounds","WithRangeBehavior"];export{p as Default,M as Disabled,c as Prefilled,h as Stacked,m as WithCustomSpacing,b as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,Ae as __namedExportsOrder,we as default};
