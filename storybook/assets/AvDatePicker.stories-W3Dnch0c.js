import{A as D}from"./AvDatePicker-ZN-pDKrJ.js";import"./iframe-w6PSbEoS.js";import"./preload-helper-ILsKNznc.js";import"./format-AL68iITa.js";import"./AvMessage-Dm6tSzaI.js";import"./AvIconText-WUZ-57o2.js";import"./AvIcon-Bec1qqnI.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-ClvpBT6t.js";import"./use-text-truncation-B20xcPn-.js";import"./icons-CS5vb1aa.js";import"./AvButton-TNQ4kLrc.js";import"./string-BZgCOP9D.js";const Ue={title:"Components/Interaction/Inputs/AvDatePicker",component:D,tags:["autodocs"],decorators:[()=>({template:'<div style="min-height: 25rem;"><story /></div>'})],argTypes:{autoApply:{control:"boolean"},clearLabel:{control:"text"},disabled:{control:"boolean"},errorMessage:{control:"text"},formats:{control:"object"},id:{control:"text"},inputAttrs:{control:"object"},label:{control:"text"},labelClass:{control:"text"},labelVisible:{control:"boolean"},locale:{control:"text"},maxDate:{control:"object"},minDate:{control:"object"},placeholder:{control:"text"},range:{control:"boolean"},timeConfig:{control:"object"},type:{control:"select",options:["date","datetime-local","month","time","week"]},width:{control:"text"}},args:{autoApply:!0,clearLabel:"clear",disabled:!1,label:"Date",labelVisible:!0,type:"date"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},e=n=>({components:{AvDatePicker:D},setup(){return{args:n,onUpdate:b=>{n.modelValue=b}}},template:`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    />
  `}),a=e.bind({});a.args={modelValue:null};const t=e.bind({});t.args={modelValue:new Date("2026-01-10")};const r=e.bind({});r.args={modelValue:new Date("2026-01-10"),disabled:!0};const o=e.bind({});o.args={modelValue:null,errorMessage:"This date is required."};const s=e.bind({});s.args={modelValue:null,labelVisible:!1};const l=e.bind({});l.args={modelValue:null,minDate:new Date("2026-01-01"),maxDate:new Date("2026-12-31")};const p=e.bind({});p.args={modelValue:new Date("2026-01-10"),formats:{input:"dd.MM.yyyy",preview:"dd.MM.yyyy"}};const c=e.bind({});c.args={type:"month",modelValue:{month:0,year:2026}};const d=e.bind({});d.args={type:"time",modelValue:{hours:9,minutes:0,seconds:0}};const u=e.bind({});u.args={type:"week",modelValue:null};const m=e.bind({});m.args={range:!0,modelValue:null};const i=e.bind({});i.args={type:"month",range:!0,modelValue:null};const v=e.bind({});v.args={type:"datetime-local",modelValue:new Date("2026-01-10T09:00")};const g=n=>({components:{AvDatePicker:D},setup(){return{args:n,onUpdate:b=>{n.modelValue=b}}},template:`
    <AvDatePicker
      v-bind="args"
      @update:model-value="onUpdate"
    >
      <template #labelSuffix>
        <span class="b2-light">Optional</span>
      </template>
    </AvDatePicker>
  `});g.args={modelValue:null};var P,k,A;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var U,V,h;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(h=(V=t.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var y,f,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(T=(f=r.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,S,M;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(M=(S=o.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var w,W,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(L=(W=s.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var j,C,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,F,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var O,H,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var q,z,B;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,re,oe;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
    >
      <template #labelSuffix>
        <span class="b2-light">Optional</span>
      </template>
    </AvDatePicker>
  \`
})`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Ve=["Default","Prefilled","Disabled","WithError","HiddenLabel","WithMinMaxDate","WithCustomFormat","MonthType","TimeType","WeekType","RangeType","MonthRangeType","DateTimeLocalType","WithLabelSuffix"];export{v as DateTimeLocalType,a as Default,r as Disabled,s as HiddenLabel,i as MonthRangeType,c as MonthType,t as Prefilled,m as RangeType,d as TimeType,u as WeekType,p as WithCustomFormat,o as WithError,g as WithLabelSuffix,l as WithMinMaxDate,Ve as __namedExportsOrder,Ue as default};
