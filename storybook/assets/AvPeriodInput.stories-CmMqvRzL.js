import{_ as Qe}from"./AvRadioButtonSet-C9Fq31MZ.js";import{_ as Xe}from"./AvRadioButton-CRSTf76j.js";import{d as Ye,c as l,e as k,j as Ze,l as w,u as p,n as x,O as B,f as W,i as N,k as T,P as _e,g as f}from"./iframe-CafUQXUF.js";import{c as P,t as ke,A as j,p as en,i as nn}from"./AvInput-s9DFKxOu.js";import{_ as an}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvFieldset-DPVDozan.js";import"./AvMessage-B2Z4zRfX.js";import"./AvIconText-BvNarmIK.js";import"./AvIcon-b0dnXlkW.js";import"./icon-path-u9rVYwcY.js";import"./icons-DyiNu08W.js";import"./AvFieldsetElement-D-5pu8Hk.js";import"./preload-helper-ILsKNznc.js";function tn(e,s){let d,o=s==null?void 0:s.in;return e.forEach(t=>{!o&&typeof t=="object"&&(o=P.bind(null,t));const u=ke(t,o);(!d||d<u||isNaN(+u))&&(d=u)}),P(o,d||NaN)}function rn(e,s){let d,o=s==null?void 0:s.in;return e.forEach(t=>{!o&&typeof t=="object"&&(o=P.bind(null,t));const u=ke(t,o);(!d||d>u||isNaN(+u))&&(d=u)}),P(o,d||NaN)}const dn=["for"],on={class:"b2-regular"},Be=Ye({__name:"AvPeriodInput",props:{id:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"},endDateDisabled:{type:Boolean,default:!1},startDateDisabled:{type:Boolean,default:!1},type:{default:"date"},labelVisible:{type:Boolean,default:!0},startErrorMessage:{},endErrorMessage:{},inProgressLabel:{},showEachInputLabel:{type:Boolean,default:!1},startLabel:{},endLabel:{},label:{}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:s}){_e(n=>({v29e23db1:n.separatorSpacing}));const d=s,o=l(()=>e.id??`period-input-${crypto.randomUUID()}`),t=l(()=>`${o.value}__start`),u=l(()=>`${o.value}__end`);function L(n){if(!n)return;const a=en(n);return nn(a)?a:void 0}function Ne(n,a){return n&&a?tn([n,a]):n??a}function Te(n,a){return n&&a?rn([n,a]):n??a}const je=l(()=>L(e.startModelValue)),Oe=l(()=>L(e.endModelValue)),$e=l(()=>e.startMinDate),Re=l(()=>Te(e.startMaxDate,Oe.value)),Fe=l(()=>Ne(e.endMinDate,je.value)),He=l(()=>e.endMaxDate),ze=l(()=>["av-label",{"av-sr-only":!e.labelVisible},e.labelClass]);function qe(n){const a=(n==null?void 0:n.toString())??"";d("update:startModelValue",a),d("change",{start:a,end:e.endModelValue})}function Ge(n){const a=(n==null?void 0:n.toString())??"";d("update:endModelValue",a),d("change",{start:e.startModelValue,end:a})}return(n,a)=>{const Je=Xe,Ke=Qe;return f(),k("div",{class:x(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":e.stacked}])},[e.showEachInputLabel?Ze("",!0):(f(),k("label",{key:0,class:x(p(ze)),for:p(t),"data-testid":"common-label"},B(e.label),11,dn)),w("div",{class:x(["av-period-input__row",{"av-row av-align-start":!e.stacked,"av-col av-align-stretch":e.stacked}])},[W(j,{id:p(t),type:e.type,"model-value":e.startModelValue,label:e.startLabel,"aria-label":e.startLabel,"label-visible":e.showEachInputLabel,disabled:e.startDateDisabled,width:e.width,"min-date":p($e),"max-date":p(Re),"error-message":e.startErrorMessage,"data-testid":"start-date-input","onUpdate:modelValue":a[0]||(a[0]=A=>qe(A))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"]),!e.endModelValue&&e.endDateDisabled&&e.inProgressLabel?(f(),N(Ke,{key:0,"model-value":"in-progress",name:"in-progress",inline:"",small:""},{default:T(()=>[W(Je,{value:"in-progress",disabled:""},{default:T(()=>[w("div",null,[w("span",on,B(e.inProgressLabel),1)])]),_:1})]),_:1})):(f(),N(j,{key:1,id:p(u),type:e.type,"model-value":e.endModelValue,label:e.endLabel,"aria-label":e.endLabel,"label-visible":e.showEachInputLabel,disabled:e.endDateDisabled,width:e.width,"min-date":p(Fe),"max-date":p(He),"error-message":e.endErrorMessage,"data-testid":"end-date-input","onUpdate:modelValue":a[1]||(a[1]=A=>Ge(A))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"]))],2)],2)}}}),We=an(Be,[["__scopeId","data-v-4e6775f3"]]);Be.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const Sn={title:"Components/Interaction/Inputs/AvPeriodInput",component:We,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelClass:{control:"text"},labelVisible:{control:"boolean"},startModelValue:{control:"text"},endModelValue:{control:"text"},startErrorMessage:{control:"text"},endErrorMessage:{control:"text"},showEachInputLabel:{control:"boolean"},startLabel:{control:"text"},endLabel:{control:"text"},startDateDisabled:{control:"boolean"},endDateDisabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"},type:{control:"select",options:["date","datetime-local","month","time","week"]}},args:{label:"Period",startModelValue:"",endModelValue:"",startErrorMessage:"",endErrorMessage:"",showEachInputLabel:!1,startDateDisabled:!1,endDateDisabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)",type:"date",labelVisible:!0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},r=e=>({components:{AvPeriodInput:We},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),i=r.bind({});i.args={};const c=r.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=r.bind({});g.args={width:"14.875rem"};const m=r.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const b=r.bind({});b.args={startDateDisabled:!0,endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const M=r.bind({});M.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const h=r.bind({});h.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=r.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const V=r.bind({});V.args={startDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const U=r.bind({});U.args={endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const S=r.bind({});S.args={type:"month",startModelValue:"2026-01",endModelValue:"2026-06",width:"14.875rem"};const E=r.bind({});E.args={type:"datetime-local",startModelValue:"2026-01-10T09:00",endModelValue:"2026-01-10T17:00",width:"14.875rem"};const y=r.bind({});y.args={labelVisible:!1,width:"14.875rem"};const D=r.bind({});D.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",width:"14.875rem"};const I=r.bind({});I.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",startModelValue:"2026-01-20",endModelValue:"2026-01-10",startErrorMessage:"",endErrorMessage:"The end date cannot be before the start date.",width:"14.875rem"};const C=r.bind({});C.args={startModelValue:"2026-01-10",inProgressLabel:"In progress",width:"14.875rem",endDateDisabled:!0};var O,$,R;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(R=($=i.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var F,H,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,_;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(_=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ne,ae;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,re,de;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(de=(re=h.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var oe,se,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
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
})`,...(le=(se=v.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ue,pe,ie;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(ie=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};var ce,ge,me;U.parameters={...U.parameters,docs:{...(ce=U.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(me=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var be,Me,he;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(he=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:he.source}}};var ve,Ve,Ue;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(Ue=(Ve=E.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var Se,Ee,ye;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(ye=(Ee=y.parameters)==null?void 0:Ee.docs)==null?void 0:ye.source}}};var De,Ie,Ce;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`args => ({
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
})`,...(Ce=(Ie=D.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var fe,Pe,Ae;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(Ae=(Pe=I.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var we,xe,Le;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
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
})`,...(Le=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Le.source}}};const En=["Default","Prefilled","WithWidth","WithCustomSpacing","BothDisabled","Stacked","WithExternalBounds","WithRangeBehavior","StartDateDisabled","EndDateDisabled","MonthType","DateTimeLocalType","HiddenLabel","WithEachInputLabel","WithEachInputLabelAndErrors","InProgress"];export{b as BothDisabled,E as DateTimeLocalType,i as Default,U as EndDateDisabled,y as HiddenLabel,C as InProgress,S as MonthType,c as Prefilled,M as Stacked,V as StartDateDisabled,m as WithCustomSpacing,D as WithEachInputLabel,I as WithEachInputLabelAndErrors,h as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,En as __namedExportsOrder,Sn as default};
