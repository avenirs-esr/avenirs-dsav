import{_ as _n}from"./AvRadioButtonSet-prDMVq5z.js";import{_ as ne}from"./AvRadioButton-DVU8oIdy.js";import{m as ee,b as s,g as k,W as u,y as P,R as B,f as ae,d as x,k as W,e as T,a4 as N,Y as te,H as f}from"./iframe-ZdUL57qH.js";import{c as A,t as Bn,A as O,i as re,p as oe,a as de}from"./AvInput-D4fE1pzN.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvFieldset-Dml3Trw9.js";import"./AvMessage-Crs3Tu5x.js";import"./AvIconText-CiIchsRw.js";import"./AvIcon-3mqjXMMh.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-L2fYmS2t.js";import"./icons-BJ4bGiUf.js";import"./AvFieldsetElement-BmrspxEk.js";import"./preload-helper-ILsKNznc.js";function le(n,l){let o,d=l==null?void 0:l.in;return n.forEach(t=>{!d&&typeof t=="object"&&(d=A.bind(null,t));const i=Bn(t,d);(!o||o<i||isNaN(+i))&&(o=i)}),A(d,o||NaN)}function ue(n,l){let o,d=l==null?void 0:l.in;return n.forEach(t=>{!d&&typeof t=="object"&&(d=A.bind(null,t));const i=Bn(t,d);(!o||o>i||isNaN(+i))&&(o=i)}),A(d,o||NaN)}const ie=["for"],pe={class:"b2-regular"},Wn=ee({__name:"AvPeriodInput",props:{id:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"},endDateDisabled:{type:Boolean,default:!1},startDateDisabled:{type:Boolean,default:!1},type:{default:"date"},labelVisible:{type:Boolean,default:!0},startErrorMessage:{},endErrorMessage:{},ongoingLabel:{},showEachInputLabel:{type:Boolean,default:!1},startLabel:{},endLabel:{},label:{}},emits:["update:startModelValue","update:endModelValue","change"],setup(n,{emit:l}){te(e=>({v3c5dfb30:e.separatorSpacing}));const o=l,d=s(()=>n.id??`period-input-${crypto.randomUUID()}`),t=s(()=>`${d.value}__start`),i=s(()=>`${d.value}__end`),Nn=s(()=>n.startLabel??n.label),On=s(()=>n.endLabel??n.label),jn=s(()=>re(n.type)?`${t.value}-picker`:t.value);function L(e){if(!e)return;const a=oe(e);return de(a)?a:void 0}function $n(e,a){return e&&a?le([e,a]):e??a}function Rn(e,a){return e&&a?ue([e,a]):e??a}const Fn=s(()=>L(n.startModelValue)),Hn=s(()=>L(n.endModelValue)),zn=s(()=>n.startMinDate),Yn=s(()=>Rn(n.startMaxDate,Hn.value)),qn=s(()=>$n(n.endMinDate,Fn.value)),Gn=s(()=>n.endMaxDate),Jn=s(()=>["av-label",{"av-sr-only":!n.labelVisible},n.labelClass]);function Kn(e){const a=(e==null?void 0:e.toString())??"";o("update:startModelValue",a),o("change",{start:a,end:n.endModelValue})}function Qn(e){const a=(e==null?void 0:e.toString())??"";o("update:endModelValue",a),o("change",{start:n.startModelValue,end:a})}return(e,a)=>{const Xn=ne,Zn=_n;return f(),k("div",{class:P(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":n.stacked}])},[n.showEachInputLabel?ae("",!0):(f(),k("label",{key:0,class:P(u(Jn)),for:u(jn),"data-testid":"common-label"},B(n.label),11,ie)),x("div",{class:P(["av-period-input__row",{"av-row av-align-start":!n.stacked,"av-col av-align-stretch":n.stacked}])},[W(O,{id:u(t),type:n.type,"model-value":n.startModelValue,label:n.startLabel,"aria-label":u(Nn),"label-visible":n.showEachInputLabel,disabled:n.startDateDisabled,width:n.width,"min-date":u(zn),"max-date":u(Yn),"error-message":n.startErrorMessage,"data-testid":"start-date-input","onUpdate:modelValue":a[0]||(a[0]=w=>Kn(w))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"]),!n.endModelValue&&n.endDateDisabled&&n.ongoingLabel?(f(),T(Zn,{key:0,"model-value":"ongoing",name:"ongoing",inline:"",small:""},{default:N(()=>[W(Xn,{value:"ongoing",disabled:""},{default:N(()=>[x("div",null,[x("span",pe,B(n.ongoingLabel),1)])]),_:1})]),_:1})):(f(),T(O,{key:1,id:u(i),type:n.type,"model-value":n.endModelValue,label:n.endLabel,"aria-label":u(On),"label-visible":n.showEachInputLabel,disabled:n.endDateDisabled,width:n.width,"min-date":u(qn),"max-date":u(Gn),"error-message":n.endErrorMessage,"data-testid":"end-date-input","onUpdate:modelValue":a[1]||(a[1]=w=>Qn(w))},null,8,["id","type","model-value","label","aria-label","label-visible","disabled","width","min-date","max-date","error-message"]))],2)],2)}}}),Tn=se(Wn,[["__scopeId","data-v-dd9b1d66"]]);Wn.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const Ce={title:"Components/Interaction/Inputs/AvPeriodInput",component:Tn,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text"},labelClass:{control:"text"},labelVisible:{control:"boolean"},startModelValue:{control:"text"},endModelValue:{control:"text"},startErrorMessage:{control:"text"},endErrorMessage:{control:"text"},showEachInputLabel:{control:"boolean"},startLabel:{control:"text"},endLabel:{control:"text"},startDateDisabled:{control:"boolean"},endDateDisabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"},type:{control:"select",options:["date","datetime-local","month","time","week"]}},args:{label:"Period",startModelValue:"",endModelValue:"",startErrorMessage:"",endErrorMessage:"",showEachInputLabel:!1,startDateDisabled:!1,endDateDisabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)",type:"date",labelVisible:!0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},r=n=>({components:{AvPeriodInput:Tn},setup(){return{args:n,onStartUpdate:t=>{n.startModelValue=t},onEndUpdate:t=>{n.endModelValue=t},onChange:t=>{n.startModelValue=t.start,n.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),p=r.bind({});p.args={};const c=r.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=r.bind({});g.args={width:"14.875rem"};const m=r.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const b=r.bind({});b.args={startDateDisabled:!0,endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const M=r.bind({});M.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const v=r.bind({});v.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const h=r.bind({});h.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const V=r.bind({});V.args={startDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const U=r.bind({});U.args={endDateDisabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const S=r.bind({});S.args={type:"month",startModelValue:"2026-01",endModelValue:"2026-06",width:"14.875rem"};const E=r.bind({});E.args={type:"datetime-local",startModelValue:"2026-01-10T09:00",endModelValue:"2026-01-10T17:00",width:"14.875rem"};const y=r.bind({});y.args={labelVisible:!1,width:"14.875rem"};const D=r.bind({});D.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",width:"14.875rem"};const I=r.bind({});I.args={showEachInputLabel:!0,startLabel:"Start date",endLabel:"End date",startModelValue:"2026-01-20",endModelValue:"2026-01-10",startErrorMessage:"",endErrorMessage:"The end date cannot be before the start date.",width:"14.875rem"};const C=r.bind({});C.args={startModelValue:"2026-01-10",ongoingLabel:"Ongoing",width:"14.875rem",endDateDisabled:!0};var j,$,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(R=($=p.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var F,H,z;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var Y,q,G;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,_;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(_=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var nn,en,an;M.parameters={...M.parameters,docs:{...(nn=M.parameters)==null?void 0:nn.docs,source:{originalSource:`args => ({
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
})`,...(an=(en=M.parameters)==null?void 0:en.docs)==null?void 0:an.source}}};var tn,rn,on;v.parameters={...v.parameters,docs:{...(tn=v.parameters)==null?void 0:tn.docs,source:{originalSource:`args => ({
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
})`,...(on=(rn=v.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var dn,sn,ln;h.parameters={...h.parameters,docs:{...(dn=h.parameters)==null?void 0:dn.docs,source:{originalSource:`args => ({
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
})`,...(ln=(sn=h.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var un,pn,cn;V.parameters={...V.parameters,docs:{...(un=V.parameters)==null?void 0:un.docs,source:{originalSource:`args => ({
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
})`,...(cn=(pn=V.parameters)==null?void 0:pn.docs)==null?void 0:cn.source}}};var gn,mn,bn;U.parameters={...U.parameters,docs:{...(gn=U.parameters)==null?void 0:gn.docs,source:{originalSource:`args => ({
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
})`,...(bn=(mn=U.parameters)==null?void 0:mn.docs)==null?void 0:bn.source}}};var Mn,vn,hn;S.parameters={...S.parameters,docs:{...(Mn=S.parameters)==null?void 0:Mn.docs,source:{originalSource:`args => ({
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
})`,...(hn=(vn=S.parameters)==null?void 0:vn.docs)==null?void 0:hn.source}}};var Vn,Un,Sn;E.parameters={...E.parameters,docs:{...(Vn=E.parameters)==null?void 0:Vn.docs,source:{originalSource:`args => ({
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
})`,...(Sn=(Un=E.parameters)==null?void 0:Un.docs)==null?void 0:Sn.source}}};var En,yn,Dn;y.parameters={...y.parameters,docs:{...(En=y.parameters)==null?void 0:En.docs,source:{originalSource:`args => ({
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
})`,...(Dn=(yn=y.parameters)==null?void 0:yn.docs)==null?void 0:Dn.source}}};var In,Cn,fn;D.parameters={...D.parameters,docs:{...(In=D.parameters)==null?void 0:In.docs,source:{originalSource:`args => ({
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
})`,...(fn=(Cn=D.parameters)==null?void 0:Cn.docs)==null?void 0:fn.source}}};var An,wn,Pn;I.parameters={...I.parameters,docs:{...(An=I.parameters)==null?void 0:An.docs,source:{originalSource:`args => ({
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
})`,...(Pn=(wn=I.parameters)==null?void 0:wn.docs)==null?void 0:Pn.source}}};var xn,Ln,kn;C.parameters={...C.parameters,docs:{...(xn=C.parameters)==null?void 0:xn.docs,source:{originalSource:`args => ({
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
})`,...(kn=(Ln=C.parameters)==null?void 0:Ln.docs)==null?void 0:kn.source}}};const fe=["Default","Prefilled","WithWidth","WithCustomSpacing","BothDisabled","Stacked","WithExternalBounds","WithRangeBehavior","StartDateDisabled","EndDateDisabled","MonthType","DateTimeLocalType","HiddenLabel","WithEachInputLabel","WithEachInputLabelAndErrors","Ongoing"];export{b as BothDisabled,E as DateTimeLocalType,p as Default,U as EndDateDisabled,y as HiddenLabel,S as MonthType,C as Ongoing,c as Prefilled,M as Stacked,V as StartDateDisabled,m as WithCustomSpacing,D as WithEachInputLabel,I as WithEachInputLabelAndErrors,v as WithExternalBounds,h as WithRangeBehavior,g as WithWidth,fe as __namedExportsOrder,Ce as default};
