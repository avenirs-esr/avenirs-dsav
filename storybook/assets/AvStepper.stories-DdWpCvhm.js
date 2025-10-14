import{d as H,W as J,g as a,l as s,f as e,F as b,h as f,G as K,o as p,p as v,x as _}from"./iframe-DRmKsEoR.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const Q={class:"custom-width-container"},U={class:"block-container"},X={class:"main-container"},Y=["aria-current"],Z=["aria-current"],$={class:"b1-regular"},ee={class:"main-labels-container"},R=H({__name:"AvStepper",props:{steps:{},currentStep:{},width:{default:"100%"}},setup(m){K(P=>({v06d1bdf1:e(O)}));const G=m,{steps:g,currentStep:r,width:O}=J(G);return(P,S)=>(p(),a("div",Q,[s("div",U,[s("div",X,[s("div",{class:"step step--active","aria-current":e(r)===0?"step":void 0},[...S[0]||(S[0]=[s("span",{class:"b1-regular"},"1",-1)])],8,Y),(p(!0),a(b,null,f(e(g).slice(1,e(g).length),(h,t)=>(p(),a("div",{key:t,class:"steps-container"},[s("div",{class:v(["separator",{"separator--active":t+1<=e(r)}])},null,2),s("div",{class:v(["step",{"step--active":t+1<=e(r)}]),"aria-current":t+1===e(r)?"step":void 0},[s("span",$,_(t+2),1)],10,Z)]))),128))]),s("div",ee,[(p(!0),a(b,null,f(e(g),(h,t)=>(p(),a("div",{key:t,class:"label-container"},[s("span",{class:v(["label",{"b1-bold":t<=e(r),"b1-light":t>e(r)}])},_(h),3)]))),128))])])]))}}),j=M(R,[["__scopeId","data-v-26a5b40e"]]);R.__docgenInfo={exportName:"default",displayName:"AvStepper",description:"",tags:{},props:[{name:"steps",description:"List of steps to display in the stepper.",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"currentStep",description:"Index of the current step (starts at 0).",required:!0,type:{name:"number"}},{name:"width",description:"Width of the stepper.",tags:{default:[{description:"'100%'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvStepper/AvStepper.vue"]};const ne={title:"Components/Navigation/AvStepper",component:j,tags:["autodocs"],argTypes:{steps:{control:{type:"object",required:!0}},currentStep:{control:{type:"number",required:!0}},width:{control:"text"}},args:{steps:["Step 1: Init","Step 2: Develop a feature","Step 3: Deploy"],currentStep:0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvStepper</code> component is a visual guide to show the user their progress through a series of steps.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The stepper displays:</span></p>
<ul>
  <li><span class="b2-regular">all steps titles</span></li>
  <li><span class="b2-regular">a progress status showing the current step and the total number of steps</span></li>
  <li><span class="b2-regular">a stylized progress bar</span></li>
</ul>`}}}},n=m=>({components:{AvStepper:j},setup(){return{args:m}},template:'<AvStepper v-bind="args" />'}),o=n.bind({});o.args={};const c=n.bind({});c.args={width:"40rem"};const i=n.bind({});i.args={currentStep:1};const l=n.bind({});l.args={currentStep:2};const u=n.bind({});u.args={steps:["Step 1","Step 2"]};const d=n.bind({});d.args={steps:["Step 1: Clone the repository","Step 2: Create a branch from develop","Step 3: Develop the feature","Step 4: Create a PR and merge when approved"]};var A,y,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var W,C,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var k,D,q;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var F,I,N;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var x,B,V;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var z,E,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const ae=["Default","CustomWidth","WithStepTwoActive","WithAllStepsActive","WithTwoSteps","WithFourSteps"];export{c as CustomWidth,o as Default,l as WithAllStepsActive,d as WithFourSteps,i as WithStepTwoActive,u as WithTwoSteps,ae as __namedExportsOrder,ne as default};
