import{d as G,T as H,a,b as s,u as e,F as b,g as _,Q as J,o as p,n as v,t as f}from"./iframe-DG3pTfcg.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const M={class:"custom-width-container"},U={class:"block-container"},X={class:"main-container"},Y=["aria-current"],Z=["aria-current"],$={class:"b1-regular"},ee={class:"main-labels-container"},R=G({__name:"AvStepper",props:{steps:{},currentStep:{},width:{default:"100%"}},setup(m){J(Q=>({v06d1bdf1:e(P)}));const O=m,{steps:g,currentStep:r,width:P}=H(O);return(Q,S)=>(p(),a("div",M,[s("div",U,[s("div",X,[s("div",{class:"step step--active","aria-current":e(r)===0?"step":void 0},[...S[0]||(S[0]=[s("span",{class:"b1-regular"},"1",-1)])],8,Y),(p(!0),a(b,null,_(e(g).slice(1,e(g).length),(h,t)=>(p(),a("div",{key:t,class:"steps-container"},[s("div",{class:v(["separator",{"separator--active":t+1<=e(r)}])},null,2),s("div",{class:v(["step",{"step--active":t+1<=e(r)}]),"aria-current":t+1===e(r)?"step":void 0},[s("span",$,f(t+2),1)],10,Z)]))),128))]),s("div",ee,[(p(!0),a(b,null,_(e(g),(h,t)=>(p(),a("div",{key:t,class:"label-container"},[s("span",{class:v(["label",{"b1-bold":t<=e(r),"b1-light":t>e(r)}])},f(h),3)]))),128))])])]))}}),j=K(R,[["__scopeId","data-v-26a5b40e"]]);R.__docgenInfo={exportName:"default",displayName:"AvStepper",description:"",tags:{},props:[{name:"steps",description:"List of steps to display in the stepper.",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"currentStep",description:"Index of the current step (starts at 0).",required:!0,type:{name:"number"}},{name:"width",description:"Width of the stepper.",tags:{default:[{description:"'100%'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvStepper/AvStepper.vue"]};const ne={title:"Components/Navigation/AvStepper",component:j,tags:["autodocs"],argTypes:{steps:{control:{type:"object",required:!0}},currentStep:{control:{type:"number",required:!0}},width:{control:"text"}},args:{steps:["Step 1: Init","Step 2: Develop a feature","Step 3: Deploy"],currentStep:0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},n=m=>({components:{AvStepper:j},setup(){return{args:m}},template:'<AvStepper v-bind="args" />'}),o=n.bind({});o.args={};const c=n.bind({});c.args={width:"40rem"};const i=n.bind({});i.args={currentStep:1};const u=n.bind({});u.args={currentStep:2};const l=n.bind({});l.args={steps:["Step 1","Step 2"]};const d=n.bind({});d.args={steps:["Step 1: Clone the repository","Step 2: Create a branch from develop","Step 3: Develop the feature","Step 4: Create a PR and merge when approved"]};var A,y,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(q=(D=i.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var F,I,N;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var B,V,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(x=(V=l.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var z,E,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvStepper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvStepper v-bind="args" />\`
})`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const ae=["Default","CustomWidth","WithStepTwoActive","WithAllStepsActive","WithTwoSteps","WithFourSteps"];export{c as CustomWidth,o as Default,u as WithAllStepsActive,d as WithFourSteps,i as WithStepTwoActive,l as WithTwoSteps,ae as __namedExportsOrder,ne as default};
