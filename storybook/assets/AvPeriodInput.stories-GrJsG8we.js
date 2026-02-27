import{d as Pe,c as l,e as we,l as x,M as qe,u,n as C,f as A,N as Le,g as ke}from"./iframe-RPmiq1BY.js";import{c as D,t as be,A as P,p as Ne,i as Be}from"./AvInput-VWKyH2YF.js";import{_ as Te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvMessage-CVqwaUYV.js";import"./AvIconText-DgNr-p4B.js";import"./AvIcon-B7-vflL6.js";import"./icon-path-u9rVYwcY.js";import"./icons-DSO42OmF.js";function We(e,o){let r,d=o==null?void 0:o.in;return e.forEach(t=>{!d&&typeof t=="object"&&(d=D.bind(null,t));const i=be(t,d);(!r||r<i||isNaN(+i))&&(r=i)}),D(d,r||NaN)}function Ye(e,o){let r,d=o==null?void 0:o.in;return e.forEach(t=>{!d&&typeof t=="object"&&(d=D.bind(null,t));const i=be(t,d);(!r||r>i||isNaN(+i))&&(r=i)}),D(d,r||NaN)}const Oe=["for"],he=Pe({__name:"AvPeriodInput",props:{id:{},label:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},startLabel:{},endLabel:{},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"},endDateDisabled:{type:Boolean,default:!1},startDateDisabled:{type:Boolean,default:!1},type:{default:"date"},labelVisible:{type:Boolean,default:!0},startErrorMessage:{},endErrorMessage:{}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:o}){Le(n=>({c7c0c816:n.separatorSpacing}));const r=o,d=l(()=>e.id??`period-input-${crypto.randomUUID()}`),t=l(()=>`${d.value}__start`),i=l(()=>`${d.value}__end`);function I(n){if(!n)return;const a=Ne(n);return Be(a)?a:void 0}function Ve(n,a){return n&&a?We([n,a]):n??a}function fe(n,a){return n&&a?Ye([n,a]):n??a}const ye=l(()=>I(e.startModelValue)),Ue=l(()=>I(e.endModelValue)),Se=l(()=>e.startMinDate),De=l(()=>fe(e.startMaxDate,Ue.value)),Ee=l(()=>Ve(e.endMinDate,ye.value)),Ce=l(()=>e.endMaxDate),Ie=l(()=>["av-label",{"av-hidden":!e.labelVisible},e.labelClass]);function xe(n){const a=(n==null?void 0:n.toString())??"";r("update:startModelValue",a),r("change",{start:a,end:e.endModelValue})}function Ae(n){const a=(n==null?void 0:n.toString())??"";r("update:endModelValue",a),r("change",{start:e.startModelValue,end:a})}return(n,a)=>(ke(),we("div",{class:C(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":e.stacked}])},[x("label",{class:C(u(Ie)),for:u(t),"data-testid":"common-label"},qe(e.label),11,Oe),x("div",{class:C(["av-period-input__row",{"av-row av-align-end":!e.stacked,"av-col av-align-stretch":e.stacked}])},[A(P,{id:u(t),type:e.type,"model-value":e.startModelValue,label:e.startLabel,"aria-label":e.startLabel,"label-visible":!1,disabled:e.startDateDisabled,width:e.width,"min-date":u(Se),"max-date":u(De),"error-message":e.startErrorMessage,"data-testid":"start-date-input","onUpdate:modelValue":a[0]||(a[0]=E=>xe(E))},null,8,["id","type","model-value","label","aria-label","disabled","width","min-date","max-date","error-message"]),A(P,{id:u(i),type:e.type,"model-value":e.endModelValue,label:e.endLabel,"aria-label":e.endLabel,"label-visible":!1,disabled:e.endDateDisabled,width:e.width,"min-date":u(Ee),"max-date":u(Ce),"error-message":e.endErrorMessage,"data-testid":"end-date-input","onUpdate:modelValue":a[1]||(a[1]=E=>Ae(E))},null,8,["id","type","model-value","label","aria-label","disabled","width","min-date","max-date","error-message"])],2)],2))}}),ve=Te(he,[["__scopeId","data-v-658fa9fb"]]);he.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},props:[{name:"id",description:"Unique id for the period input",tags:{default:[{description:"`period-input-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"label",description:"Label displayed above the two inputs",required:!0,type:{name:"string"}},{name:"labelClass",description:"CSS class for the label",tags:{default:[{description:"'b2-light'",title:"default"}]},required:!1,type:{name:"string"}},{name:"startModelValue",description:"Start date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"endModelValue",description:"End date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"startLabel",description:`Label for the start input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"endLabel",description:`Label for the end input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"width",description:`Optional width for both inputs (CSS value)
e.g. '14.875rem', '240px', '100%'`,required:!1,type:{name:"string"}},{name:"startMinDate",description:"Minimum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"startMaxDate",description:"Maximum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"endMinDate",description:"Minimum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"endMaxDate",description:"Maximum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"stacked",description:"If `true`, stack inputs vertically (useful for mobile layouts)",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"separatorSpacing",description:`Spacing between start and end inputs.
Accepts any valid CSS length (e.g. '0.5rem', '1rem', '16px').`,tags:{default:[{description:"var(--spacing-sm)",title:"default"}]},required:!1,type:{name:"string"}},{name:"endDateDisabled",description:"If `true`, disable the end date input",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"startDateDisabled",description:"If `true`, disable the start date input",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"type",description:"Input type for both date inputs",tags:{default:[{description:"'date'",title:"default"}]},required:!1,type:{name:"Extract",elements:[{name:"TSIndexedAccessType"},{name:"union",elements:[{name:'"date"'},{name:'"datetime-local"'},{name:'"month"'},{name:'"time"'},{name:'"week"'}]}]}},{name:"labelVisible",description:"Whether the label is visible",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"startErrorMessage",description:"Error message for start input",required:!1,type:{name:"string"}},{name:"endErrorMessage",description:"Error message for end input",required:!1,type:{name:"string"}}],events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const Qe={title:"Components/Interaction/Inputs/AvPeriodInput",component:ve,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text",required:!0},labelClass:{control:"text"},labelVisible:{control:"boolean"},startModelValue:{control:"text"},endModelValue:{control:"text"},startErrorMessage:{control:"text"},endErrorMessage:{control:"text"},startLabel:{control:"text",required:!0},endLabel:{control:"text",required:!0},startDateDisabled:{control:"boolean"},endDateDisabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"},type:{control:"select",options:["date","datetime-local","month","time","week"]}},args:{label:"Period",startLabel:"Start",endLabel:"End",startModelValue:"",endModelValue:"",startErrorMessage:"",endErrorMessage:"",startDateDisabled:!1,endDateDisabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)",type:"date",labelVisible:!0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},s=e=>({components:{AvPeriodInput:ve},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),p=s.bind({});p.args={};const c=s.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=s.bind({});g.args={width:"14.875rem"};const m=s.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const M=s.bind({});M.args={startDateDisabled:!0,endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const b=s.bind({});b.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const h=s.bind({});h.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=s.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const V=s.bind({});V.args={startDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const f=s.bind({});f.args={endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const y=s.bind({});y.args={type:"month",startModelValue:"2026-01",endModelValue:"2026-06",width:"14.875rem"};const U=s.bind({});U.args={type:"datetime-local",startModelValue:"2026-01-10T09:00",endModelValue:"2026-01-10T17:00",width:"14.875rem"};const S=s.bind({});S.args={labelVisible:!1,width:"14.875rem"};var w,q,L;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(L=(q=p.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var k,N,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var T,W,Y;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(Y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var O,j,$;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...($=(j=m.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var F,H,R;M.parameters={...M.parameters,docs:{...(F=M.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(R=(H=M.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var z,G,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,_,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=(_=v.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ne,ae,te;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
})`,...(te=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,de,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(se=(de=f.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var oe,le,ie;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
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
})`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,pe,ce;U.parameters={...U.parameters,docs:{...(ue=U.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(ce=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ge,me,Me;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(Me=(me=S.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};const Xe=["Default","Prefilled","WithWidth","WithCustomSpacing","BothDisabled","Stacked","WithExternalBounds","WithRangeBehavior","StartDateDisabled","EndDateDisabled","MonthType","DateTimeLocalType","HiddenLabel"];export{M as BothDisabled,U as DateTimeLocalType,p as Default,f as EndDateDisabled,S as HiddenLabel,y as MonthType,c as Prefilled,b as Stacked,V as StartDateDisabled,m as WithCustomSpacing,h as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,Xe as __namedExportsOrder,Qe as default};
