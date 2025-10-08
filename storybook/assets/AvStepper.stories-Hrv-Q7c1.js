import{d as H,W as J,b as a,e as s,B as e,F as b,j as _,C as K,i as p,n as g,t as f}from"./iframe-CM3fYS2g.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const Q={class:"custom-width-container"},U={class:"block-container"},X={class:"main-container"},Y=["aria-current"],Z=["aria-current"],$={class:"b1-regular"},ee={class:"main-labels-container"},L=H({__name:"AvStepper",props:{steps:{},currentStep:{},width:{default:"100%"}},setup(m){K(G=>({v06d1bdf1:e(P)}));const O=m,{steps:v,currentStep:r,width:P}=J(O);return(G,S)=>(p(),a("div",Q,[s("div",U,[s("div",X,[s("div",{class:"step step--active","aria-current":e(r)===0?"step":void 0},[...S[0]||(S[0]=[s("span",{class:"b1-regular"},"1",-1)])],8,Y),(p(!0),a(b,null,_(e(v).slice(1,e(v).length),(h,t)=>(p(),a("div",{key:t,class:"steps-container"},[s("div",{class:g(["separator",{"separator--active":t+1<=e(r)}])},null,2),s("div",{class:g(["step",{"step--active":t+1<=e(r)}]),"aria-current":t+1===e(r)?"step":void 0},[s("span",$,f(t+2),1)],10,Z)]))),128))]),s("div",ee,[(p(!0),a(b,null,_(e(v),(h,t)=>(p(),a("div",{key:t,class:"label-container"},[s("span",{class:g(["label",{"b1-bold":t<=e(r),"b1-light":t>e(r)}])},f(h),3)]))),128))])])]))}}),R=M(L,[["__scopeId","data-v-26a5b40e"]]);L.__docgenInfo={exportName:"default",displayName:"AvStepper",description:"",tags:{},props:[{name:"steps",description:"List of steps to display in the stepper.",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"currentStep",description:"Index of the current step (starts at 0).",required:!0,type:{name:"number"}},{name:"width",description:"Width of the stepper.",tags:{default:[{description:"'100%'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvStepper/AvStepper.vue"]};const ne={title:"Components/Navigation/AvStepper",component:R,tags:["autodocs"],argTypes:{steps:{control:{type:"object",required:!0}},currentStep:{control:{type:"number",required:!0}},width:{control:"text"}},args:{steps:["Step 1: Init","Step 2: Develop a feature","Step 3: Deploy"],currentStep:0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},n=m=>({components:{AvStepper:R},setup(){return{args:m}},template:'<AvStepper v-bind="args" />'}),o=n.bind({});o.args={};const c=n.bind({});c.args={width:"40rem"};const i=n.bind({});i.args={currentStep:1};const l=n.bind({});l.args={currentStep:2};const u=n.bind({});u.args={steps:["Step 1","Step 2"]};const d=n.bind({});d.args={steps:["Step 1: Clone the repository","Step 2: Create a branch from develop","Step 3: Develop the feature","Step 4: Create a PR and merge when approved"]};var A,y,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var F,I,B;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(B=(I=l.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var N,V,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(j=(V=u.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var x,z,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const ae=["Default","CustomWidth","WithStepTwoActive","WithAllStepsActive","WithTwoSteps","WithFourSteps"];export{c as CustomWidth,o as Default,l as WithAllStepsActive,d as WithFourSteps,i as WithStepTwoActive,u as WithTwoSteps,ae as __namedExportsOrder,ne as default};
