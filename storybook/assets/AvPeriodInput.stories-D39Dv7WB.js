import{d as ie,c as l,e as ue,z as y,I as pe,u,A as S,f as D,J as ce,g as ge}from"./iframe-DYjuvXop.js";import{c as f,t as Q,A as x,p as me,i as Me}from"./AvInput-ByPMK1bm.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvMessage-C3-zjrIn.js";import"./AvIconText-g0PeDXa-.js";import"./AvIcon-CbJzOdp-.js";import"./icons-CvJnIbum.js";function he(e,s){let d,r=s==null?void 0:s.in;return e.forEach(t=>{!r&&typeof t=="object"&&(r=f.bind(null,t));const o=Q(t,r);(!d||d<o||isNaN(+o))&&(d=o)}),f(r,d||NaN)}function ve(e,s){let d,r=s==null?void 0:s.in;return e.forEach(t=>{!r&&typeof t=="object"&&(r=f.bind(null,t));const o=Q(t,r);(!d||d>o||isNaN(+o))&&(d=o)}),f(r,d||NaN)}const fe=["for"],X=ie({__name:"AvPeriodInput",props:{id:{},label:{},labelClass:{default:"b2-light"},startModelValue:{default:""},endModelValue:{default:""},startLabel:{},endLabel:{},disabled:{type:Boolean,default:!1},width:{},startMinDate:{},startMaxDate:{},endMinDate:{},endMaxDate:{},stacked:{type:Boolean,default:!1},separatorSpacing:{default:"var(--spacing-sm)"}},emits:["update:startModelValue","update:endModelValue","change"],setup(e,{emit:s}){ce(n=>({fb8ac81e:n.separatorSpacing}));const d=s,r=l(()=>e.id??`period-input-${crypto.randomUUID()}`),t=l(()=>`${r.value}__start`),o=l(()=>`${r.value}__end`);function U(n){if(!n)return;const a=me(n);return Me(a)?a:void 0}function _(n,a){return n&&a?he([n,a]):n??a}function ee(n,a){return n&&a?ve([n,a]):n??a}const ne=l(()=>U(e.startModelValue)),ae=l(()=>U(e.endModelValue)),te=l(()=>e.startMinDate),de=l(()=>ee(e.startMaxDate,ae.value)),re=l(()=>_(e.endMinDate,ne.value)),se=l(()=>e.endMaxDate);function oe(n){const a=(n==null?void 0:n.toString())??"";d("update:startModelValue",a),d("change",{start:a,end:e.endModelValue})}function le(n){const a=(n==null?void 0:n.toString())??"";d("update:endModelValue",a),d("change",{start:e.startModelValue,end:a})}return(n,a)=>(ge(),ue("div",{class:S(["av-period-input av-col av-gap-xxs",{"av-period-input--stacked":e.stacked}])},[y("label",{class:S(e.labelClass),for:u(t),"data-testid":"common-label"},pe(e.label),11,fe),y("div",{class:S(["av-period-input__row",{"av-row av-align-end":!e.stacked,"av-col av-align-stretch":e.stacked}])},[D(x,{id:u(t),type:"date","model-value":e.startModelValue,label:e.startLabel,"label-visible":!1,disabled:e.disabled,width:e.width,"min-date":u(te),"max-date":u(de),"data-testid":"start-date-input","onUpdate:modelValue":a[0]||(a[0]=V=>oe(V))},null,8,["id","model-value","label","disabled","width","min-date","max-date"]),D(x,{id:u(o),type:"date","model-value":e.endModelValue,label:e.endLabel,"label-visible":!1,disabled:e.disabled,width:e.width,"min-date":u(re),"max-date":u(se),"data-testid":"end-date-input","onUpdate:modelValue":a[1]||(a[1]=V=>le(V))},null,8,["id","model-value","label","disabled","width","min-date","max-date"])],2)],2))}}),Z=be(X,[["__scopeId","data-v-e9c8185b"]]);X.__docgenInfo={exportName:"default",displayName:"AvPeriodInput",description:"",tags:{},props:[{name:"id",description:"Unique id for the period input",tags:{default:[{description:"`period-input-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"label",description:"Label displayed above the two inputs",required:!0,type:{name:"string"}},{name:"labelClass",description:"CSS class for the label",tags:{default:[{description:"'b2-light'",title:"default"}]},required:!1,type:{name:"string"}},{name:"startModelValue",description:"Start date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"endModelValue",description:"End date value (ISO string: YYYY-MM-DD)",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"startLabel",description:`Label for the start input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"endLabel",description:`Label for the end input (optional).
Note: the internal labels are hidden by default since this component has a single wrapper label.`,required:!0,type:{name:"string"}},{name:"disabled",description:"If `true`, disable both inputs",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"width",description:`Optional width for both inputs (CSS value)
e.g. '14.875rem', '240px', '100%'`,required:!1,type:{name:"string"}},{name:"startMinDate",description:"Minimum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"startMaxDate",description:"Maximum selectable date for the start input",required:!1,type:{name:"Date"}},{name:"endMinDate",description:"Minimum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"endMaxDate",description:"Maximum selectable date for the end input",required:!1,type:{name:"Date"}},{name:"stacked",description:"If `true`, stack inputs vertically (useful for mobile layouts)",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"separatorSpacing",description:`Spacing between start and end inputs.
Accepts any valid CSS length (e.g. '0.5rem', '1rem', '16px').`,tags:{default:[{description:"var(--spacing-sm)",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"update:startModelValue",type:{names:["string"]}},{name:"update:endModelValue",type:{names:["string"]}},{name:"change",type:{names:["{ start: string, end: string }"]}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/inputs/AvPeriodInput/AvPeriodInput.vue"]};const Ee={title:"Components/Interaction/Inputs/AvPeriodInput",component:Z,tags:["autodocs"],argTypes:{id:{control:"text"},label:{control:"text",required:!0},labelClass:{control:"text"},startModelValue:{control:"text"},endModelValue:{control:"text"},startLabel:{control:"text",required:!0},endLabel:{control:"text",required:!0},disabled:{control:"boolean"},width:{control:"text"},startMinDate:{control:"object"},startMaxDate:{control:"object"},endMinDate:{control:"object"},endMaxDate:{control:"object"},stacked:{control:"boolean"},separatorSpacing:{control:"text"}},args:{label:"Period",startLabel:"Start",endLabel:"End",startModelValue:"",endModelValue:"",disabled:!1,stacked:!1,separatorSpacing:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},i=e=>({components:{AvPeriodInput:Z},setup(){return{args:e,onStartUpdate:t=>{e.startModelValue=t},onEndUpdate:t=>{e.endModelValue=t},onChange:t=>{e.startModelValue=t.start,e.endModelValue=t.end}}},template:`
    <AvPeriodInput
      v-bind="args"
      @update:startModelValue="onStartUpdate"
      @update:endModelValue="onEndUpdate"
      @change="onChange"
    />
  `}),p=i.bind({});p.args={};const c=i.bind({});c.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20"};const g=i.bind({});g.args={width:"14.875rem"};const m=i.bind({});m.args={width:"14.875rem",separatorSpacing:"1rem"};const M=i.bind({});M.args={disabled:!0,startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};const b=i.bind({});b.args={stacked:!0,width:"14.875rem",separatorSpacing:"1rem"};const h=i.bind({});h.args={width:"14.875rem",startMinDate:new Date("2026-01-01"),endMaxDate:new Date("2026-12-31")};const v=i.bind({});v.args={startModelValue:"2026-01-10",endModelValue:"2026-01-20",width:"14.875rem"};var I,C,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var A,w,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var q,k,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(j=(O=M.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var T,$,z;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(z=($=b.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,R,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(J=(R=h.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var G,H,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(K=(H=v.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const Ae=["Default","Prefilled","WithWidth","WithCustomSpacing","Disabled","Stacked","WithExternalBounds","WithRangeBehavior"];export{p as Default,M as Disabled,c as Prefilled,b as Stacked,m as WithCustomSpacing,h as WithExternalBounds,v as WithRangeBehavior,g as WithWidth,Ae as __namedExportsOrder,Ee as default};
