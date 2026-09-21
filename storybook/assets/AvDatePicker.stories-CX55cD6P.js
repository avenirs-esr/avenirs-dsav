import{A as X}from"./AvDatePicker-CpUORGsd.js";import"./iframe-LXSj1Zfo.js";import"./preload-helper-ILsKNznc.js";import"./format-AL68iITa.js";import"./AvMessage-DfDX1qPH.js";import"./AvIconText-D80NQQTJ.js";import"./AvIcon-CYMG4TsH.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-CS5RAD9k.js";import"./use-text-truncation-CxQw96_7.js";import"./icons-CS5vb1aa.js";import"./AvButton-wn-vPH1f.js";import"./string-BZgCOP9D.js";const ie={title:"Components/Interaction/Inputs/AvDatePicker",component:X,tags:["autodocs"],decorators:[()=>({template:'<div style="min-height: 25rem;"><story /></div>'})],argTypes:{autoApply:{control:"boolean"},clearLabel:{control:"text"},disabled:{control:"boolean"},errorMessage:{control:"text"},formats:{control:"object"},id:{control:"text"},inputAttrs:{control:"object"},label:{control:"text"},labelClass:{control:"text"},labelVisible:{control:"boolean"},locale:{control:"text"},maxDate:{control:"object"},minDate:{control:"object"},placeholder:{control:"text"},timeConfig:{control:"object"},type:{control:"select",options:["date","datetime-local","month","time","week","range"]},width:{control:"text"}},args:{autoApply:!0,clearLabel:"clear",disabled:!1,label:"Date",labelVisible:!0,type:"date"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvDatePicker</code> component renders a single date input with an
    associated label, built on top of VueDatePicker.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">The date picker is composed of:</span>
</p>

<ul>
  <li><span class="b2-regular">a label</span></li>
  <li><span class="b2-regular">a date input</span></li>
  <li><span class="b2-regular">an optional error message</span></li>
</ul>

<p>
  <span class="b2-regular">
    Locale shortcuts are mapped for common French and English locales. The list is
    not exhaustive; use the <code>formats</code> prop for custom display/parsing formats.
  </span>
</p>`}}}},e=i=>({components:{AvDatePicker:X},setup(){return{args:i,onUpdate:Y=>{i.modelValue=Y}}},template:`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  `}),n=e.bind({});n.args={modelValue:null};const a=e.bind({});a.args={modelValue:new Date("2026-01-10")};const t=e.bind({});t.args={modelValue:new Date("2026-01-10"),disabled:!0};const r=e.bind({});r.args={modelValue:null,errorMessage:"This date is required."};const o=e.bind({});o.args={modelValue:null,labelVisible:!1};const s=e.bind({});s.args={modelValue:null,minDate:new Date("2026-01-01"),maxDate:new Date("2026-12-31")};const l=e.bind({});l.args={modelValue:new Date("2026-01-10"),formats:{input:"dd.MM.yyyy",preview:"dd.MM.yyyy"}};const p=e.bind({});p.args={type:"month",modelValue:{month:0,year:2026}};const c=e.bind({});c.args={type:"time",modelValue:{hours:9,minutes:0,seconds:0}};const d=e.bind({});d.args={type:"week",modelValue:null};const u=e.bind({});u.args={type:"range",modelValue:null};const m=e.bind({});m.args={type:"datetime-local",modelValue:new Date("2026-01-10T09:00")};var v,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var D,P,k;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(k=(P=a.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var A,V,U;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(U=(V=t.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var y,h,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var f,x,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var M,w,W;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(W=(w=s.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var L,j,C;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,F,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var H,R,_;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,O,z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(z=(O=d.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var B,G,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvDatePicker
  },
  setup() {
    const onUpdate = (value: AvDatePickerProps['modelValue']) => {
      args.modelValue = value;
    };
    return {
      args,
      onUpdate
    };
  },
  template: \`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  \`
})`,...(Q=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const ve=["Default","Prefilled","Disabled","WithError","HiddenLabel","WithMinMaxDate","WithCustomFormat","MonthType","TimeType","WeekType","RangeType","DateTimeLocalType"];export{m as DateTimeLocalType,n as Default,t as Disabled,o as HiddenLabel,p as MonthType,a as Prefilled,u as RangeType,c as TimeType,d as WeekType,l as WithCustomFormat,r as WithError,s as WithMinMaxDate,ve as __namedExportsOrder,ie as default};
