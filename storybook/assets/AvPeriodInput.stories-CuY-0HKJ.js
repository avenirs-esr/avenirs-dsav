import{d as Oe,c as l,e as w,j as $e,l as Fe,u as p,n as A,O as He,f as x,P as Re,g as L}from"./iframe-BhlUSutn.js";import{c as C,t as Ie,A as k,p as ze,i as qe}from"./AvInput-CV57mmDX.js";import{_ as Ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvMessage-CPIBFOpO.js";import"./AvIconText-DoDYBF8A.js";import"./AvIcon-CzOprw6S.js";import"./icon-path-u9rVYwcY.js";import"./icons-8RiK4kYW.js";function Je(e,s){let r,o=s==null?void 0:s.in;return e.forEach(t=>{!o&&typeof t=="object"&&(o=C.bind(null,t));const u=Ie(t,o);(!r||r<u||isNaN(+u))&&(r=u)}),C(o,r||NaN)}function Ke(e,s){let r,o=s==null?void 0:s.in;return e.forEach(t=>{!o&&typeof t=="object"&&(o=C.bind(null,t));const u=Ie(t,o);(!r||r>u||isNaN(+u))&&(r=u)}),C(o,r||NaN)}const Qe=["for"],Ce=Oe({__name:"AvPeriodInput",props:{id:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"},endDateDisabled:{type:Boolean,default:!1},startDateDisabled:{type:Boolean,default:!1},type:{default:"date"},labelVisible:{type:Boolean,default:!0},startErrorMessage:{},endErrorMessage:{},showEachInputLabel:{type:Boolean,default:!1},startLabel:{},endLabel:{},label:{}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:s}){Re(n=>({c7edf41e:n.separatorSpacing}));const r=s,o=l(()=>e.id??`period-input-${crypto.randomUUID()}`),t=l(()=>`${o.value}__start`),u=l(()=>`${o.value}__end`);function P(n){if(!n)return;const a=ze(n);return qe(a)?a:void 0}function Ae(n,a){return n&&a?Je([n,a]):n??a}function Pe(n,a){return n&&a?Ke([n,a]):n??a}const we=l(()=>P(e.startModelValue)),xe=l(()=>P(e.endModelValue)),Le=l(()=>e.startMinDate),ke=l(()=>Pe(e.startMaxDate,xe.value)),Be=l(()=>Ae(e.endMinDate,we.value)),We=l(()=>e.endMaxDate),Ne=l(()=>["av-label",{"av-sr-only":!e.labelVisible},e.labelClass]);function Te(n){const a=(n==null?void 0:n.toString())??"";r("update:startModelValue",a),r("change",{start:a,end:e.endModelValue})}function je(n){const a=(n==null?void 0:n.toString())??"";r("update:endModelValue",a),r("change",{start:e.startModelValue,end:a})}return(n,a)=>(L(),w("div",{class:A(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":e.stacked}])},[e.showEachInputLabel?$e("",!0):(L(),w("label",{key:0,class:A(p(Ne)),for:p(t),"data-testid":"common-label"},He(e.label),11,Qe)),Fe("div",{class:A(["av-period-input__row",{"av-row av-align-start":!e.stacked,"av-col av-align-stretch":e.stacked}])},[x(k,{id:p(t),type:e.type,"model-value":e.startModelValue,label:e.startLabel,"aria-label":e.startLabel,"label-visible":e.showEachInputLabel,disabled:e.startDateDisabled,width:e.width,"min-date":p(Le),"max-date":p(ke),"error-message":e.startErrorMessage,"data-testid":"start-date-input","onUpdate:modelValue":a[0]||(a[0]=f=>Te(f))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"]),x(k,{id:p(u),type:e.type,"model-value":e.endModelValue,label:e.endLabel,"aria-label":e.endLabel,"label-visible":e.showEachInputLabel,disabled:e.endDateDisabled,width:e.width,"min-date":p(Be),"max-date":p(We),"error-message":e.endErrorMessage,"data-testid":"end-date-input","onUpdate:modelValue":a[1]||(a[1]=f=>je(f))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"])],2)],2))}}),fe=Ge(Ce,[["__scopeId","data-v-d5e737a7"]]);Ce.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const dn={title:"Components/Interaction/Inputs/AvPeriodInput",component:fe,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelClass:{control:"text"},labelVisible:{control:"boolean"},startModelValue:{control:"text"},endModelValue:{control:"text"},startErrorMessage:{control:"text"},endErrorMessage:{control:"text"},showEachInputLabel:{control:"boolean"},startLabel:{control:"text"},endLabel:{control:"text"},startDateDisabled:{control:"boolean"},endDateDisabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"},type:{control:"select",options:["date","datetime-local","month","time","week"]}},args:{label:"Period",startModelValue:"",endModelValue:"",startErrorMessage:"",endErrorMessage:"",showEachInputLabel:!1,startDateDisabled:!1,endDateDisabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)",type:"date",labelVisible:!0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvPeriodInput</code> component allows users to select a period
    by choosing a start date and an end date.
  </span>
</p>

<p>
  <span class="b2-regular">It supports two label modes:</span>
</p>

<ul>
  <li><span class="b2-regular"><strong>Single label</strong> (default): one label is displayed above both inputs via the <code>label</code> prop.</span></li>
  <li><span class="b2-regular"><strong>Separated labels</strong>: each input has its own label via <code>startLabel</code> and <code>endLabel</code>, enabled with <code>showEachInputLabel</code>.</span></li>
</ul>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">The period input is composed of:</span>
</p>

<ul>
  <li><span class="b2-regular">a wrapper label (single mode) or individual input labels (separated mode)</span></li>
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
</p>`}}}},d=e=>({components:{AvPeriodInput:fe},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),i=d.bind({});i.args={};const c=d.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=d.bind({});g.args={width:"14.875rem"};const m=d.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const M=d.bind({});M.args={startDateDisabled:!0,endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const b=d.bind({});b.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const h=d.bind({});h.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=d.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const V=d.bind({});V.args={startDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const U=d.bind({});U.args={endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const S=d.bind({});S.args={type:"month",startModelValue:"2026-01",endModelValue:"2026-06",width:"14.875rem"};const E=d.bind({});E.args={type:"datetime-local",startModelValue:"2026-01-10T09:00",endModelValue:"2026-01-10T17:00",width:"14.875rem"};const y=d.bind({});y.args={labelVisible:!1,width:"14.875rem"};const D=d.bind({});D.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",width:"14.875rem"};const I=d.bind({});I.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",startModelValue:"2026-01-20",endModelValue:"2026-01-10",startErrorMessage:"",endErrorMessage:"The end date cannot be before the start date.",width:"14.875rem"};var B,W,N;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var T,j,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var $,F,H;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var R,z,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(q=(z=m.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var G,J,K;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(K=(J=M.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=(_=h.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ne,ae,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
})`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,de,oe;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(oe=(de=V.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var se,le,ue;U.parameters={...U.parameters,docs:{...(se=U.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(ue=(le=U.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var pe,ie,ce;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ge,me,Me;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(Me=(me=E.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var be,he,ve;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(ve=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Ve,Ue,Se;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
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
})`,...(Se=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Se.source}}};var Ee,ye,De;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
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
})`,...(De=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};const on=["Default","Prefilled","WithWidth","WithCustomSpacing","BothDisabled","Stacked","WithExternalBounds","WithRangeBehavior","StartDateDisabled","EndDateDisabled","MonthType","DateTimeLocalType","HiddenLabel","WithEachInputLabel","WithEachInputLabelAndErrors"];export{M as BothDisabled,E as DateTimeLocalType,i as Default,U as EndDateDisabled,y as HiddenLabel,S as MonthType,c as Prefilled,b as Stacked,V as StartDateDisabled,m as WithCustomSpacing,D as WithEachInputLabel,I as WithEachInputLabelAndErrors,h as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,on as __namedExportsOrder,dn as default};
