import{m,b as o,g as u,k as g,W as c,H as h}from"./iframe-BwozX2SB.js";import{A as v}from"./AvTagPicker-cJyV7r_l.js";import"./preload-helper-ILsKNznc.js";import"./AvTag-DXT3VDBo.js";import"./AvIcon-DyekagiX.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-CIcbfJ9j.js";import"./icons-0dWeWY1j.js";var r=(e=>(e[e.FOUR=4]="FOUR",e[e.EIGHT=8]="EIGHT",e[e.TWELVE=12]="TWELVE",e[e.TWENTY=20]="TWENTY",e))(r||{});const f={class:"pagination-size-picker-container av-row"},a=m({__name:"AvPageSizePicker",props:{label:{},pageSizeSelected:{},handleSelectChange:{type:Function}},setup(e){const l=o(()=>Object.values(r).filter(t=>typeof t=="number").map(t=>({label:t.toString(),value:t.toString()}))),d=o(()=>e.pageSizeSelected.toString());return(t,S)=>(h(),u("div",f,[g(v,{options:c(l),selected:c(d),"handle-select-change":e.handleSelectChange,multiple:!1,label:e.label,"label-typography-class":"b2-regular","label-color":"var(--text2)"},null,8,["options","selected","handle-select-change","label"])]))}});a.__docgenInfo={exportName:"default",displayName:"AvPageSizePicker",description:"",tags:{},props:[{name:"label",description:"Label of the page size picker.",required:!0,type:{name:"string"}},{name:"pageSizeSelected",description:"Number of results per page selected.",required:!0,type:{name:"PageSizes"}},{name:"handleSelectChange",description:"Method executed when changing selection.",tags:{params:[{title:"param",type:{name:"mixed"},name:"val",description:"Selected option of type AvTagPickerOption."}]},required:!0,type:{name:"TSFunctionType"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/pickers/AvPageSizePicker/AvPageSizePicker.vue"]};const _={title:"Components/Interaction/Pickers/AvPageSizePicker",component:a,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},pageSizeSelected:{type:{name:"string",required:!0},control:{type:"select",options:Object.values(r)}},handleSelectChange:{type:{name:"function"},control:!1,action:"select-change"}},args:{label:"Number of results per page:",pageSizeSelected:r.FOUR},parameters:{docs:{description:{component:`<h1 class="n1">Picker for number of results per page - <code>AvPageSizePicker</code></h1>

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
</p>`}}}},b=e=>({components:{AvPageSizePicker:a},setup(){return{args:e}},template:'<AvPageSizePicker v-bind="args" />'}),n=b.bind({});n.args={};var s,i,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    AvPageSizePicker
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvPageSizePicker v-bind="args" />\`
})`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,_ as default};
