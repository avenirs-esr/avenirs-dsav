import{m as B,Z as q,b as m,g as s,d as t,w as M,W as n,y as p,R as g,f as S,F as W,v as _,Y as O,H as o}from"./iframe-DnxxszEz.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const F="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23929292'%20/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20width='35'%20height='20'%20viewBox='0%200%2035%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20opacity='0.6'%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23D4D4EC'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M24.5%2020C30.0228%2020%2034.5%2015.5228%2034.5%2010C34.5%204.47715%2030.0228%200%2024.5%200C18.9772%200%2014.5%204.47715%2014.5%2010C14.5%2015.5228%2018.9772%2020%2024.5%2020Z'%20fill='%23000091'/%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%23DDDDDD'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23929292'%20/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%23929292'%20/%3e%3c/svg%3e",$="data:image/svg+xml,%3csvg%20width='34'%20height='20'%20viewBox='0%200%2034%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='3'%20width='34'%20height='14'%20rx='7'%20fill='%2314171A'%20fill-opacity='0.36'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10%2020C15.5228%2020%2020%2015.5228%2020%2010C20%204.47715%2015.5228%200%2010%200C4.47715%200%200%204.47715%200%2010C0%2015.5228%204.47715%2020%2010%2020Z'%20fill='%23F6F6F6'/%3e%3cpath%20d='M10%200.5C15.2467%200.5%2019.5%204.75329%2019.5%2010C19.5%2015.2467%2015.2467%2019.5%2010%2019.5C4.75329%2019.5%200.5%2015.2467%200.5%2010C0.5%204.75329%204.75329%200.5%2010%200.5Z'%20stroke='%2314171A'%20stroke-opacity='0.36'/%3e%3c/svg%3e",R=["id","disabled","aria-disabled","checked","aria-describedby","name"],E=["id","for","data-testid"],j={class:"av-col"},H={width:"34",height:"14"},z=["href"],P={class:"av-col toggle-text"},Y={key:0,class:"caption-bold no-select"},G={key:1,class:"caption-regular no-select"},J={key:0,class:"caption-regular"},D=B({inheritAttrs:!1,__name:"AvToggle",props:_({modelValue:{type:Boolean},description:{},id:{},disabled:{type:Boolean,default:!1},activeText:{default:"On"},inactiveText:{default:"Off"},name:{},activeInactiveTextWidth:{default:"1.5rem"}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){O(i=>({v602c92d5:i.activeInactiveTextWidth}));const a=q(e,"modelValue"),c=m(()=>e.id??`toggle-${crypto.randomUUID()}`),u=m(()=>`${c.value}-label`);function V(){return e.disabled?a.value?F:N:a.value?U:$}function k(i){a.value=i.target.checked}return(i,L)=>(o(),s(W,null,[t("input",M({id:n(c),class:"av-toggle-input",disabled:e.disabled,"aria-disabled":e.disabled,type:"checkbox",checked:a.value,"aria-describedby":n(u),name:e.name,"data-testid":"av-toggle"},i.$attrs,{onInput:k}),null,16,R),t("label",{id:n(u),for:n(c),"data-testid":`${n(c)}-label`,class:p(["av-toggle av-row av-justify-center av-gap-xs av-align-start",{"av-toggle--disabled":e.disabled}])},[t("div",{class:p(["toggle av-row av-justify-start av-align-start av-gap-xxs",{"toggle--disabled":e.disabled}])},[t("div",j,[(o(),s("svg",H,[t("image",{href:V(),width:"34",height:"14"},null,8,z)]))]),t("div",P,[a.value?(o(),s("span",Y,g(e.activeText),1)):(o(),s("span",G,g(e.inactiveText),1))])],2),e.description?(o(),s("span",J,g(e.description),1)):S("",!0)],10,E)],64))}}),v=Z(D,[["__scopeId","data-v-ea289ba3"]]);D.__docgenInfo={exportName:"default",displayName:"AvToggle",description:"",tags:{},props:[{name:"modelValue",description:"Boolean value linked to the input.",required:!1,type:{name:"boolean"}},{name:"description",description:"Indicates the purpose of the toggle.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"id",description:"Unique id for the toggle. Used for accessibility.",tags:{default:[{description:"`toggle-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Indicates if the toggle disabled.",required:!1,type:{name:"boolean"}},{name:"activeText",description:"Text to display next to the toggle (right) when it is active.",tags:{default:[{description:"'On'",title:"default"}]},required:!1,type:{name:"string"}},{name:"inactiveText",description:"Text to display next to the toggle (right) when it is inactive.",tags:{default:[{description:"'Off'",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"`name` attribute of the input",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"activeInactiveTextWidth",description:"Width of the active/inactive texts",tags:{default:[{description:"'1.5rem'",title:"default"}]},required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/toggles/AvToggle/AvToggle.vue"]};const te={title:"Components/Interaction/Toggles/AvToggle",component:v,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},description:{control:"text",type:{name:"string",required:!0}},disabled:{control:"boolean"},activeText:{control:"text"},inactiveText:{control:"text"},name:{control:"text"},activeInactiveTextWidth:{control:"text"}},args:{modelValue:!1,description:"Some description",disabled:!1,activeText:"On",inactiveText:"Off",name:void 0,activeInactiveTextWidth:"1.5rem"},parameters:{docs:{description:{component:`<h1 class="n1">Toggles - <code>AvToggle</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvToggle</code> is a versatile Vue component, designed to allow the user to choose between two opposite states
    (<em>active</em> / <em>inactive</em>).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">None.</span></p>`}}}},I=e=>({components:{AvToggle:v},setup(){return{args:e}},template:'<AvToggle v-bind="args" v-model="args.modelValue" />'}),l=I.bind({});l.args={};const d=I.bind({});d.args={modelValue:!0};const K=e=>({components:{AvToggle:v},setup(){return{args:e}},template:`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>`}),r=K.bind({});r.args={description:"A long description to see how this works"};var h,f,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,w,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvToggle v-bind="args" v-model="args.modelValue" />\`
})`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var y,C,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    AvToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div :style="{width: '10px'}"><AvToggle v-bind="args" v-model="args.modelValue" /></div>\`
})`,...(A=(C=r.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const ae=["Default","InitActive","WidthRestrict"];export{l as Default,d as InitActive,r as WidthRestrict,ae as __namedExportsOrder,te as default};
