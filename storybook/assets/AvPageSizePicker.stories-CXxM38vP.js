import{j as u,c as r,l as g,x as h,u as o,m as v}from"./iframe-CulO-wQ2.js";import{A as S}from"./AvTagPicker-DLhcaOco.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvTag-CBgQ1eXC.js";import"./AvIcon-7bO5eqj_.js";import"./icons-ncf82qPh.js";var a=(e=>(e[e.FOUR=4]="FOUR",e[e.EIGHT=8]="EIGHT",e[e.TWELVE=12]="TWELVE",e))(a||{});const b={class:"pagination-size-picker-container"},l=u({__name:"AvPageSizePicker",props:{label:{},pageSizeSelected:{},handleSelectChange:{type:Function}},setup(e){const d=r(()=>Object.values(a).filter(t=>typeof t=="number").map(t=>({label:t.toString(),value:t.toString()}))),m=r(()=>({label:e.pageSizeSelected.toString(),value:e.pageSizeSelected.toString()}));return(t,P)=>(v(),g("div",b,[h(S,{options:o(d),selected:o(m),"handle-select-change":e.handleSelectChange,multiple:!1,label:e.label,"label-typography-class":"b2-regular","label-color":"var(--text2)"},null,8,["options","selected","handle-select-change","label"])]))}}),p=f(l,[["__scopeId","data-v-d72fe5ab"]]);l.__docgenInfo={exportName:"default",displayName:"AvPageSizePicker",description:"",tags:{},props:[{name:"label",description:"Label of the page size picker.",required:!0,type:{name:"string"}},{name:"pageSizeSelected",description:"Number of results per page selected.",required:!0,type:{name:"PageSizes"}},{name:"handleSelectChange",description:"Method executed when changing selection.",tags:{params:[{title:"param",type:{name:"mixed"},name:"val",description:"Selected option of type AvTagPickerOption."}]},required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/pickers/AvPageSizePicker/AvPageSizePicker.vue"]};const O={title:"Components/Interaction/Pickers/AvPageSizePicker",component:p,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},pageSizeSelected:{type:{name:"string",required:!0},control:{type:"select",options:Object.values(a)}},handleSelectChange:{type:{name:"function"},control:!1,action:"select-change"}},args:{label:"Number of results per page:",pageSizeSelected:a.FOUR},parameters:{docs:{description:{component:`<h1 class="n1">Picker for number of results per page - <code>AvPageSizePicker</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvPageSizePicker</code> is a component implementing the <code>AvTagPicker</code> and dedicated to selecting the number of results per page.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    The pickers for number of results per page consist of an <code>AvTagPicker</code> to which options specific to the number of results per page are assigned.
  </span>
</p>`}}}},k=e=>({components:{AvPageSizePicker:p},setup(){return{args:e}},template:'<AvPageSizePicker v-bind="args" />'}),n=k.bind({});n.args={};var c,s,i;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    AvPageSizePicker
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPageSizePicker v-bind="args" />\`
})`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,O as default};
