import{m as B,Z as M,b as m,g as d,d as o,W as t,y as v,R as c,F as S,v as q,H as r}from"./iframe-DOF9xepJ.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const O="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23929292'%20/%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.6'%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23D4D4EC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23000091'/%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23929292'%20/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%23929292'%20/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%2314171A'%20fill-opacity='0.36'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23F6F6F6'/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%2314171A'%20stroke-opacity='0.36'/%3e%3c/svg%3e",N=["id","disabled","aria-disabled","checked","data-testid","aria-describedby","name"],R=["id","for","data-testid"],W={width:"34",height:"14"},$=["href"],E={key:0,class:"caption-bold no-select"},j={key:1,class:"caption-regular no-select"},H={class:"caption-regular"},D=B({__name:"AvToggle",props:q({modelValue:{type:Boolean},description:{},id:{},disabled:{type:Boolean,default:!1},activeText:{default:"On"},inactiveText:{default:"Off"},name:{}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=M(e,"modelValue"),n=m(()=>e.id??`toggle-${crypto.randomUUID()}`),p=m(()=>`${n.value}-label`);function I(){return e.disabled?a.value?O:F:a.value?Z:U}function k(u){a.value=u.target.checked}return(u,G)=>(r(),d(S,null,[o("input",{id:t(n),class:"av-toggle-input",disabled:e.disabled,"aria-disabled":e.disabled,type:"checkbox",checked:a.value,"data-testid":t(n),"aria-describedby":t(p),name:e.name,onInput:k},null,40,N),o("label",{id:t(p),for:t(n),"data-testid":`${t(n)}-label`,class:v(["av-toggle av-row av-justify-center av-gap-xs av-align-start",{"av-toggle--disabled":e.disabled}])},[o("div",{class:v(["toggle av-row av-justify-center av-align-center av-gap-xxs",{"toggle--disabled":e.disabled}])},[(r(),d("svg",W,[o("image",{href:I(),width:"34",height:"14"},null,8,$)])),a.value?(r(),d("span",E,c(e.activeText),1)):(r(),d("span",j,c(e.inactiveText),1))],2),o("span",H,c(e.description),1)],10,R)],64))}}),g=_(D,[["__scopeId","data-v-66ae334a"]]);D.__docgenInfo={exportName:"default",displayName:"AvToggle",description:"",tags:{},props:[{name:"modelValue",description:"Boolean value linked to the input.",required:!1,type:{name:"boolean"}},{name:"description",description:"Indicates the purpose of the toggle.",required:!0,type:{name:"string"}},{name:"id",description:"Unique id for the toggle. Used for accessibility.",tags:{default:[{description:"`toggle-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Indicates if the toggle disabled.",required:!1,type:{name:"boolean"}},{name:"activeText",description:"Text to display next to the toggle (right) when it is active.",tags:{default:[{description:"'On'",title:"default"}]},required:!1,type:{name:"string"}},{name:"inactiveText",description:"Text to display next to the toggle (right) when it is inactive.",tags:{default:[{description:"'Off'",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"`name` attribute of the input",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/toggles/AvToggle/AvToggle.vue"]};const P={title:"Components/Interaction/Toggles/AvToggle",component:g,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"}},args:{modelValue:!1,description:"Some description",disabled:!1,activeText:"On",inactiveText:"Off",name:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Toggles - <code>AvToggle</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},V=e=>({components:{AvToggle:g},setup(){return{args:e}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),s=V.bind({});s.args={};const i=V.bind({});i.args={modelValue:!0};const z=e=>({components:{AvToggle:g},setup(){return{args:e}},template:`<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),l=z.bind({});l.args={description:"A long description to see how this works"};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var T,C,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '100px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const Q=["Default","InitActive","WidthRestrict"];export{s as Default,i as InitActive,l as WidthRestrict,Q as __namedExportsOrder,P as default};
