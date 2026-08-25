import{m as W,Z as _,X as O,b as i,g as n,d as t,W as a,y as h,R as u,f as Z,F,v as U,Y as N,H as o}from"./iframe-B4EvC81Z.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const R="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23929292'%20/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.6'%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23D4D4EC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23000091'/%3e%3c/svg%3e",j="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23929292'%20/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%23929292'%20/%3e%3c/svg%3e",H="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%2314171A'%20fill-opacity='0.36'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23F6F6F6'/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%2314171A'%20stroke-opacity='0.36'/%3e%3c/svg%3e",z=["id","disabled","aria-disabled","checked","aria-describedby","name","data-testid"],X=["id","for","data-testid"],Y={class:"av-col"},G={width:"34",height:"14"},J=["href"],K={class:"av-col toggle-text"},L={key:0,class:"caption-bold no-select"},P={key:1,class:"caption-regular no-select"},Q={key:0,class:"caption-regular"},I=W({inheritAttrs:!1,__name:"AvToggle",props:U({modelValue:{type:Boolean},description:{},id:{},disabled:{type:Boolean,default:!1},activeText:{default:"On"},inactiveText:{default:"Off"},name:{},statusTextWidth:{default:"1.8rem"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){N(c=>({v0a9d3112:c.statusTextWidth}));const s=_(e,"modelValue"),k=O(),g=i(()=>e.id??`toggle-${crypto.randomUUID()}`),p=i(()=>`${g.value}-label`);function B(){return e.disabled?s.value?R:j:s.value?E:H}function q(c){s.value=c.target.checked}const v=i(()=>k["data-testid"]??(e.id||"av-toggle")),M=i(()=>`${v.value}-input`),S=i(()=>`${v.value}-label`);return(c,te)=>(o(),n(F,null,[t("input",{id:a(g),class:"av-toggle-input",disabled:e.disabled,"aria-disabled":e.disabled,type:"checkbox",checked:s.value,"aria-describedby":a(p),name:e.name,"data-testid":a(M),onInput:q},null,40,z),t("label",{id:a(p),for:a(g),class:h(["av-toggle av-row av-justify-center av-gap-xs av-align-start",{"av-toggle--disabled":e.disabled}]),"data-testid":a(S)},[t("div",{class:h(["toggle av-row av-justify-start av-align-start av-gap-xxs",{"toggle--disabled":e.disabled}])},[t("div",Y,[(o(),n("svg",G,[t("image",{href:B(),width:"34",height:"14"},null,8,J)]))]),t("div",K,[s.value?(o(),n("span",L,u(e.activeText),1)):(o(),n("span",P,u(e.inactiveText),1))])],2),e.description?(o(),n("span",Q,u(e.description),1)):Z("",!0)],10,X)],64))}}),m=$(I,[["__scopeId","data-v-fa9367bf"]]);I.__docgenInfo={exportName:"default",displayName:"AvToggle",description:"",tags:{},props:[{name:"modelValue",description:"Boolean value linked to the input.",required:!1,type:{name:"boolean"}},{name:"description",description:"Indicates the purpose of the toggle.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"id",description:"Unique id for the toggle. Used for accessibility.",tags:{default:[{description:"`toggle-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Indicates if the toggle disabled.",required:!1,type:{name:"boolean"}},{name:"activeText",description:"Text to display next to the toggle (right) when it is active.",tags:{default:[{description:"'On'",title:"default"}]},required:!1,type:{name:"string"}},{name:"inactiveText",description:"Text to display next to the toggle (right) when it is inactive.",tags:{default:[{description:"'Off'",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"`name` attribute of the input",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"statusTextWidth",description:"Width of the active/inactive texts",tags:{default:[{description:"'1.8rem'",title:"default"}]},required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/toggles/AvToggle/AvToggle.vue"]};const ne={title:"Components/Interaction/Toggles/AvToggle",component:m,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"},statusTextWidth:{control:"text"}},args:{modelValue:!1,description:"Some description",disabled:!1,activeText:"On",inactiveText:"Off",name:void 0,statusTextWidth:"1.8rem"},parameters:{docs:{description:{component:`<h1 class="n1">Toggles - <code>AvToggle</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},V=e=>({components:{AvToggle:m},setup(){return{args:e}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),l=V.bind({});l.args={};const d=V.bind({});d.args={modelValue:!0};const ee=e=>({components:{AvToggle:m},setup(){return{args:e}},template:`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),r=ee.bind({});r.args={description:"A long description to see how this works"};var f,x,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,T,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(y=(T=d.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var C,A,D;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(D=(A=r.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const oe=["Default","InitActive","WidthRestrict"];export{l as Default,d as InitActive,r as WidthRestrict,oe as __namedExportsOrder,ne as default};
