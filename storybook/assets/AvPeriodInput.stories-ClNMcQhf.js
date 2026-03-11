import{d as Pe,c as l,e as x,j as Le,l as qe,u,n as I,M as ke,f as w,N as Ne,g as A}from"./iframe-BNLC-U5X.js";import{c as D,t as he,A as P,p as Be,i as Te}from"./AvInput-CiDrb1ZT.js";import{_ as We}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvMessage-DJfykUYi.js";import"./AvIconText-4dTdOCT6.js";import"./AvIcon-C9sYGnkf.js";import"./icon-path-u9rVYwcY.js";import"./icons-DKmRMgWU.js";function Ye(e,o){let r,d=o==null?void 0:o.in;return e.forEach(t=>{!d&&typeof t=="object"&&(d=D.bind(null,t));const i=he(t,d);(!r||r<i||isNaN(+i))&&(r=i)}),D(d,r||NaN)}function je(e,o){let r,d=o==null?void 0:o.in;return e.forEach(t=>{!d&&typeof t=="object"&&(d=D.bind(null,t));const i=he(t,d);(!r||r>i||isNaN(+i))&&(r=i)}),D(d,r||NaN)}const Oe=["for"],ve=Pe({__name:"AvPeriodInput",props:{id:{},label:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},startLabel:{},endLabel:{},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"},endDateDisabled:{type:Boolean,default:!1},startDateDisabled:{type:Boolean,default:!1},type:{default:"date"},labelVisible:{type:Boolean,default:!0},startErrorMessage:{},endErrorMessage:{},showEachInputLabel:{type:Boolean,default:!1}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:o}){Ne(a=>({v7ae171be:a.separatorSpacing}));const r=o,d=l(()=>e.id??`period-input-${crypto.randomUUID()}`),t=l(()=>`${d.value}__start`),i=l(()=>`${d.value}__end`);function C(a){if(!a)return;const n=Be(a);return Te(n)?n:void 0}function fe(a,n){return a&&n?Ye([a,n]):a??n}function ye(a,n){return a&&n?je([a,n]):a??n}const Ue=l(()=>C(e.startModelValue)),Se=l(()=>C(e.endModelValue)),De=l(()=>e.startMinDate),Ee=l(()=>ye(e.startMaxDate,Se.value)),Ie=l(()=>fe(e.endMinDate,Ue.value)),Ce=l(()=>e.endMaxDate),xe=l(()=>["av-label",{"av-hidden":!e.labelVisible},e.labelClass]);function we(a){const n=(a==null?void 0:a.toString())??"";r("update:startModelValue",n),r("change",{start:n,end:e.endModelValue})}function Ae(a){const n=(a==null?void 0:a.toString())??"";r("update:endModelValue",n),r("change",{start:e.startModelValue,end:n})}return(a,n)=>(A(),x("div",{class:I(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":e.stacked}])},[e.showEachInputLabel?Le("",!0):(A(),x("label",{key:0,class:I(u(xe)),for:u(t),"data-testid":"common-label"},ke(e.label),11,Oe)),qe("div",{class:I(["av-period-input__row",{"av-row av-align-end":!e.stacked,"av-col av-align-stretch":e.stacked}])},[w(P,{id:u(t),type:e.type,"model-value":e.startModelValue,label:e.startLabel,"aria-label":e.startLabel,"label-visible":e.showEachInputLabel,disabled:e.startDateDisabled,width:e.width,"min-date":u(De),"max-date":u(Ee),"error-message":e.startErrorMessage,"data-testid":"start-date-input","onUpdate:modelValue":n[0]||(n[0]=E=>we(E))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"]),w(P,{id:u(i),type:e.type,"model-value":e.endModelValue,label:e.endLabel,"aria-label":e.endLabel,"label-visible":e.showEachInputLabel,disabled:e.endDateDisabled,width:e.width,"min-date":u(Ie),"max-date":u(Ce),"error-message":e.endErrorMessage,"data-testid":"end-date-input","onUpdate:modelValue":n[1]||(n[1]=E=>Ae(E))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"])],2)],2))}}),Ve=We(ve,[["__scopeId","data-v-f30e67f0"]]);ve.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},props:[{name:"id",description:"Unique id for the period input",tags:{default:[{description:"`period-input-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"label",description:"Label displayed above the two inputs",required:!0,type:{name:"string"}},{name:"labelClass",description:"CSS class for the label",tags:{default:[{description:"'b2-light'",title:"default"}]},required:!1,type:{name:"string"}},{name:"startModelValue",description:"Start date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"endModelValue",description:"End date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"startLabel",description:`Label for the start input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"endLabel",description:`Label for the end input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"width",description:`Optional width for both inputs (CSS value)
e.g. '14.875rem', '240px', '100%'`,required:!1,type:{name:"string"}},{name:"startMinDate",description:"Minimum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"startMaxDate",description:"Maximum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"endMinDate",description:"Minimum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"endMaxDate",description:"Maximum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"stacked",description:"If `true`, stack inputs vertically (useful for mobile layouts)",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"separatorSpacing",description:`Spacing between start and end inputs.
Accepts any valid CSS length (e.g. '0.5rem', '1rem', '16px').`,tags:{default:[{description:"var(--spacing-sm)",title:"default"}]},required:!1,type:{name:"string"}},{name:"endDateDisabled",description:"If `true`, disable the end date input",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"startDateDisabled",description:"If `true`, disable the start date input",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"type",description:"Input type for both date inputs",tags:{default:[{description:"'date'",title:"default"}]},required:!1,type:{name:"Extract",elements:[{name:"TSIndexedAccessType"},{name:"union",elements:[{name:'"date"'},{name:'"datetime-local"'},{name:'"month"'},{name:'"time"'},{name:'"week"'}]}]}},{name:"labelVisible",description:"Whether the label is visible",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"startErrorMessage",description:"Error message for start input",required:!1,type:{name:"string"}},{name:"endErrorMessage",description:"Error message for end input",required:!1,type:{name:"string"}},{name:"showEachInputLabel",description:"If `true`, show individual labels for each input (start/end) instead of a single wrapper label.\nNote: if this prop is `true`, the `label` prop will be ignored and the `startLabel` and `endLabel` will be shown instead.",required:!1,type:{name:"boolean"}}],events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const Xe={title:"Components/Interaction/Inputs/AvPeriodInput",component:Ve,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text",required:!0},labelClass:{control:"text"},labelVisible:{control:"boolean"},startModelValue:{control:"text"},endModelValue:{control:"text"},startErrorMessage:{control:"text"},endErrorMessage:{control:"text"},startLabel:{control:"text",required:!0},endLabel:{control:"text",required:!0},startDateDisabled:{control:"boolean"},endDateDisabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"},type:{control:"select",options:["date","datetime-local","month","time","week"]}},args:{label:"Period",startLabel:"Start",endLabel:"End",startModelValue:"",endModelValue:"",startErrorMessage:"",endErrorMessage:"",startDateDisabled:!1,endDateDisabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)",type:"date",labelVisible:!0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},s=e=>({components:{AvPeriodInput:Ve},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),p=s.bind({});p.args={};const c=s.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=s.bind({});g.args={width:"14.875rem"};const m=s.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const b=s.bind({});b.args={startDateDisabled:!0,endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const M=s.bind({});M.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const h=s.bind({});h.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=s.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const V=s.bind({});V.args={startDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const f=s.bind({});f.args={endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const y=s.bind({});y.args={type:"month",startModelValue:"2026-01",endModelValue:"2026-06",width:"14.875rem"};const U=s.bind({});U.args={type:"datetime-local",startModelValue:"2026-01-10T09:00",endModelValue:"2026-01-10T17:00",width:"14.875rem"};const S=s.bind({});S.args={labelVisible:!1,width:"14.875rem"};var L,q,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(k=(q=p.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var N,B,T;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,Y,j;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(j=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var O,$,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var H,R,z;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(z=(R=b.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,J,K;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(K=(J=M.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var _,ee,ae;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
})`,...(re=(te=V.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var de,se,oe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(oe=(se=f.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,ue;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(ue=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var pe,ce,ge;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var me,be,Me;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(Me=(be=S.parameters)==null?void 0:be.docs)==null?void 0:Me.source}}};const Ze=["Default","Prefilled","WithWidth","WithCustomSpacing","BothDisabled","Stacked","WithExternalBounds","WithRangeBehavior","StartDateDisabled","EndDateDisabled","MonthType","DateTimeLocalType","HiddenLabel"];export{b as BothDisabled,U as DateTimeLocalType,p as Default,f as EndDateDisabled,S as HiddenLabel,y as MonthType,c as Prefilled,M as Stacked,V as StartDateDisabled,m as WithCustomSpacing,h as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,Ze as __namedExportsOrder,Xe as default};
