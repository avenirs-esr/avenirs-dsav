import{_ as an}from"./AvRadioButtonSet-DnpyYfrY.js";import{_ as tn}from"./AvRadioButton-DtlCapNf.js";import{n as rn,d as s,h as W,$ as u,B as x,X as N,g as on,e as L,l as O,f as $,a9 as j,a1 as dn,L as C}from"./iframe-KRNHvQZU.js";import{A as F,i as H,a as sn,t as ln}from"./AvDatePicker-CkYyhPbB.js";import{p as un}from"./parseISO-Bq0sW2Ur.js";import{e as A,D as Ne,s as pn,h as k}from"./format-AL68iITa.js";import{_ as cn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvFieldset-BCjg_Yml.js";import"./AvMessage-DP5KZRKY.js";import"./AvIconText-3ZSlTHxA.js";import"./AvIcon-pmmsrp9q.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-C_hK8p7B.js";import"./use-text-truncation-BMvJXD-w.js";import"./icons-_H15CKU0.js";import"./AvFieldsetElement-CB-plX3Y.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-6m_qM0BT.js";import"./string-BZgCOP9D.js";function gn(e,l){let o,d=l==null?void 0:l.in;return e.forEach(t=>{!d&&typeof t=="object"&&(d=A.bind(null,t));const i=Ne(t,d);(!o||o<i||isNaN(+i))&&(o=i)}),A(d,o||NaN)}function mn(e,l){let o,d=l==null?void 0:l.in;return e.forEach(t=>{!d&&typeof t=="object"&&(d=A.bind(null,t));const i=Ne(t,d);(!o||o>i||isNaN(+i))&&(o=i)}),A(d,o||NaN)}const Mn=["for"],bn={class:"b2-regular"},Oe=rn({__name:"AvPeriodInput",props:{id:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"},endDateDisabled:{type:Boolean,default:!1},startDateDisabled:{type:Boolean,default:!1},type:{default:"date"},labelVisible:{type:Boolean,default:!0},startErrorMessage:{},endErrorMessage:{},ongoingLabel:{},showEachInputLabel:{type:Boolean,default:!1},startLabel:{},endLabel:{},label:{}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:l}){dn(a=>({dbd8e840:a.separatorSpacing}));const o=l,d=s(()=>e.id??`period-input-${crypto.randomUUID()}`),t=s(()=>`${d.value}__start`),i=s(()=>`${d.value}__end`),je=s(()=>e.startLabel??e.label),Fe=s(()=>e.endLabel??e.label),He=s(()=>t.value);function P(a){if(!a)return;const n=un(a);return pn(n)?n:void 0}function Re(a,n){return a&&n?gn([a,n]):a??n}function ze(a,n){return a&&n?mn([a,n]):a??n}const Xe=s(()=>P(e.startModelValue)),Ye=s(()=>P(e.endModelValue));function B(a){const n=P(a);return n?e.type==="month"?{month:n.getMonth(),year:n.getFullYear()}:n:null}const qe=s(()=>e.startMinDate),Ge=s(()=>ze(e.startMaxDate,Ye.value)),Je=s(()=>Re(e.endMinDate,Xe.value)),Ke=s(()=>e.endMaxDate),Qe=s(()=>["av-label",{"av-sr-only":!e.labelVisible},e.labelClass]);function T(a){switch(e.type){case"month":if(sn(a)){const n=ln(a);return n?k(n,"yyyy-MM"):""}return"";case"date":return H(a)?k(a,"yyyy-MM-dd"):"";case"datetime-local":return H(a)?k(a,"yyyy-MM-dd'T'HH:mm"):"";default:return""}}function Ze(a){const n=T(a);o("update:startModelValue",n),o("change",{start:n,end:e.endModelValue})}function _e(a){const n=T(a);o("update:endModelValue",n),o("change",{start:e.startModelValue,end:n})}return(a,n)=>{const en=tn,nn=an;return C(),W("div",{class:x(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":e.stacked}])},[e.showEachInputLabel?on("",!0):(C(),W("label",{key:0,class:x(u(Qe)),for:u(He),"data-testid":"common-label"},N(e.label),11,Mn)),L("div",{class:x(["av-period-input__row",{"av-row av-align-start":!e.stacked,"av-col av-align-stretch":e.stacked}])},[O(F,{id:u(t),"aria-label":u(je),type:e.type,"model-value":B(e.startModelValue),label:e.startLabel,"label-visible":e.showEachInputLabel,disabled:e.startDateDisabled,width:e.width,"min-date":u(qe),"max-date":u(Ge),"error-message":e.startErrorMessage,"data-testid":"start-date-input","onUpdate:modelValue":n[0]||(n[0]=w=>Ze(w))},null,8,["id","aria-label","type","model-value","label","label-visible","disabled","width","min-date","max-date","error-message"]),!e.endModelValue&&e.endDateDisabled&&e.ongoingLabel?(C(),$(nn,{key:0,"model-value":"ongoing",name:"ongoing",inline:"",small:""},{default:j(()=>[O(en,{value:"ongoing",disabled:""},{default:j(()=>[L("div",null,[L("span",bn,N(e.ongoingLabel),1)])]),_:1})]),_:1})):(C(),$(F,{key:1,id:u(i),"aria-label":u(Fe),type:e.type,"model-value":B(e.endModelValue),label:e.endLabel,"label-visible":e.showEachInputLabel,disabled:e.endDateDisabled,width:e.width,"min-date":u(Je),"max-date":u(Ke),"error-message":e.endErrorMessage,"data-testid":"end-date-input","onUpdate:modelValue":n[1]||(n[1]=w=>_e(w))},null,8,["id","aria-label","type","model-value","label","label-visible","disabled","width","min-date","max-date","error-message"]))],2)],2)}}}),$e=cn(Oe,[["__scopeId","data-v-bb1b8784"]]);Oe.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const Wn={title:"Components/Interaction/Inputs/AvPeriodInput",component:$e,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelClass:{control:"text"},labelVisible:{control:"boolean"},startModelValue:{control:"text"},endModelValue:{control:"text"},startErrorMessage:{control:"text"},endErrorMessage:{control:"text"},showEachInputLabel:{control:"boolean"},startLabel:{control:"text"},endLabel:{control:"text"},startDateDisabled:{control:"boolean"},endDateDisabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"},type:{control:"select",options:["date","datetime-local","month","time","week"]}},args:{label:"Period",startModelValue:"",endModelValue:"",startErrorMessage:"",endErrorMessage:"",showEachInputLabel:!1,startDateDisabled:!1,endDateDisabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)",type:"date",labelVisible:!0},parameters:{docs:{description:{component:`<p>
  <span class="b2-regular">
    ⚠️ <strong>Deprecated</strong>: use <code>AvDatePicker</code> with <code>type="range"</code> instead.
  </span>
</p>

<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},r=e=>({components:{AvPeriodInput:$e},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),p=r.bind({});p.args={};const c=r.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=r.bind({});g.args={width:"14.875rem"};const m=r.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const M=r.bind({});M.args={startDateDisabled:!0,endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const b=r.bind({});b.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const h=r.bind({});h.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=r.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const V=r.bind({});V.args={startDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const U=r.bind({});U.args={endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const y=r.bind({});y.args={type:"month",startModelValue:"2026-01",endModelValue:"2026-06",width:"14.875rem"};const S=r.bind({});S.args={type:"datetime-local",startModelValue:"2026-01-10T09:00",endModelValue:"2026-01-10T17:00",width:"14.875rem"};const E=r.bind({});E.args={labelVisible:!1,width:"14.875rem"};const D=r.bind({});D.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",width:"14.875rem"};const f=r.bind({});f.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",startModelValue:"2026-01-20",endModelValue:"2026-01-10",startErrorMessage:"",endErrorMessage:"The end date cannot be before the start date.",width:"14.875rem"};const I=r.bind({});I.args={startModelValue:"2026-01-10",ongoingLabel:"Ongoing",width:"14.875rem",endDateDisabled:!0};var R,z,X;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(X=(z=p.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var Y,q,G;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,_,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=(_=m.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ne,ae,te;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
})`,...(te=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,oe,de;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(de=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var se,le,ue;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(ue=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ie,pe,ce;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(ce=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ge,me,Me;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(Me=(me=V.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var be,he,ve;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(ve=(he=U.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Ve,Ue,ye;y.parameters={...y.parameters,docs:{...(Ve=y.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
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
})`,...(ye=(Ue=y.parameters)==null?void 0:Ue.docs)==null?void 0:ye.source}}};var Se,Ee,De;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(De=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var fe,Ie,Ce;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(Ce=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Ae,Pe,we;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(we=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:we.source}}};var xe,Le,ke;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
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
})`,...(ke=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Be,Te,We;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
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
})`,...(We=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};const Nn=["Default","Prefilled","WithWidth","WithCustomSpacing","BothDisabled","Stacked","WithExternalBounds","WithRangeBehavior","StartDateDisabled","EndDateDisabled","MonthType","DateTimeLocalType","HiddenLabel","WithEachInputLabel","WithEachInputLabelAndErrors","Ongoing"];export{M as BothDisabled,S as DateTimeLocalType,p as Default,U as EndDateDisabled,E as HiddenLabel,y as MonthType,I as Ongoing,c as Prefilled,b as Stacked,V as StartDateDisabled,m as WithCustomSpacing,D as WithEachInputLabel,f as WithEachInputLabelAndErrors,h as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,Nn as __namedExportsOrder,Wn as default};
