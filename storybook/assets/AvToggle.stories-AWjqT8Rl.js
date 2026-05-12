import{d as q,c as m,e as l,l as a,n as u,u as t,O as r,R as B,g as d}from"./iframe-DOZoNlj0.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const S="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.6'%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23D4D4EC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23000091'/%3e%3c/svg%3e",D="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%2314171A'%20fill-opacity='0.36'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23F6F6F6'/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%2314171A'%20stroke-opacity='0.36'/%3e%3c/svg%3e",N=["id","for"],U={width:"34",height:"14"},F=["href"],E={key:0,class:"caption-bold no-select"},R={key:1,class:"caption-regular no-select"},_={class:"caption-regular"},$=["id","disabled","aria-disabled","checked","data-testid","aria-describedby","name"],V=q({__name:"AvToggle",props:{modelValue:{type:Boolean},description:{},id:{},disabled:{type:Boolean},activeText:{default:"On"},inactiveText:{default:"Off"},name:{}},emits:["update:modelValue"],setup(e){const i=m(()=>e.id??`toggle-${crypto.randomUUID()}`),g=m(()=>`${i.value}-label`);return(k,p)=>(d(),l(B,null,[a("label",{id:t(g),for:t(i),class:u(["av-toggle av-row av-justify-center av-gap-xs av-align-start",{"av-toggle--disabled":e.disabled}])},[a("div",{class:u(["toggle av-row av-justify-center av-align-center av-gap-xxs",{"toggle--disabled":e.disabled}])},[(d(),l("svg",U,[a("image",{href:e.modelValue?t(S):t(D),width:"34",height:"14"},null,8,F)])),e.modelValue?(d(),l("span",E,r(e.activeText),1)):(d(),l("span",R,r(e.inactiveText),1))],2),a("span",_,r(e.description),1)],10,N),a("input",{id:t(i),style:{display:"none"},disabled:e.disabled,"aria-disabled":e.disabled,type:"checkbox",checked:e.modelValue,"data-testid":t(i),"aria-describedby":t(g),name:e.name,onInput:p[0]||(p[0]=I=>k.$emit("update:modelValue",I.target.checked))},null,40,$)],64))}}),c=O(V,[["__scopeId","data-v-49a101c1"]]);V.__docgenInfo={exportName:"default",displayName:"AvToggle",description:"",tags:{},props:[{name:"modelValue",description:"Boolean value linked to the input.",required:!1,type:{name:"boolean"}},{name:"description",description:"Indicates the purpose of the toggle.",required:!0,type:{name:"string"}},{name:"id",description:"Unique id for the toggle. Used for accessibility.",tags:{default:[{description:"`toggle-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Indicates if the toggle disabled.",required:!1,type:{name:"boolean"}},{name:"activeText",description:"Text to display next to the toggle (right) when it is active.",tags:{default:[{description:"'On'",title:"default"}]},required:!1,type:{name:"string"}},{name:"inactiveText",description:"Text to display next to the toggle (right) when it is inactive.",tags:{default:[{description:"'Off'",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"`name` attribute of the input",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]},description:"Emitted when the toggle is clicked.",properties:[{type:{names:["mixed"]},name:"payload",description:"New state (`boolean`) of the toggle."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"New state (`boolean`) of the toggle."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/toggles/AvToggle/AvToggle.vue"]};const z={title:"Components/Interaction/Toggles/AvToggle",component:c,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"}},args:{modelValue:!1,description:"Some description",disabled:!1,activeText:"On",inactiveText:"Off",name:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Toggles - <code>AvToggle</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},C=e=>({components:{AvToggle:c},setup(){return{args:e}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),n=C.bind({});n.args={};const o=C.bind({});o.args={modelValue:!0};const M=e=>({components:{AvToggle:c},setup(){return{args:e}},template:`<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),s=M.bind({});s.args={description:"A long description to see how this works"};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,y,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var T,w,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(A=(w=s.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const G=["Default","InitActive","WidthRestrict"];export{n as Default,o as InitActive,s as WidthRestrict,G as __namedExportsOrder,z as default};
