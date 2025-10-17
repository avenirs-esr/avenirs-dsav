import{A as D}from"./AvVIcon-BgoH42om.js";import{d as L,c as b,b as F,y as f,w as H,z as K,B as c,n as h,C as R,i as v,e as y,k as z,f as P,t as W}from"./iframe-R8FOEziV.js";import{F as $}from"./vue-dsfr-BAvT4AfM.js";import{M as l}from"./icons-DLnh1uvi.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const G={class:"item-container"},q=L({__name:"AvMultiselect",props:{disabled:{type:Boolean},selectId:{},name:{},hint:{},modelValue:{},label:{},options:{},successMessage:{},errorMessage:{},defaultUnselectedText:{},dense:{type:Boolean},selectedText:{},selectAll:{type:Boolean},selectAllLabel:{},search:{type:Boolean},width:{}},emits:["update:modelValue"],setup(d,{emit:S}){R(e=>({v5e495a53:e.width}));const t=d,w=S,N=b(()=>t.modelValue.map(e=>e.value)),m=b(()=>{if(!t.modelValue||t.modelValue.length===0)return t.defaultUnselectedText;if(t.selectedText)return t.selectedText;const e=t.modelValue.length>1?"s":"";return`${t.modelValue.length} option${e} sélectionnée${e}`});function u(e){return t.modelValue.some(n=>n.value===e.value)}function U(e){return u(e)?l.CHECKBOX_MARKED:l.CHECKBOX_BLANK_OUTLINE}function g(e){return u(e)?"var(--dark-background-primary1)":"var(--icon)"}function k(e){return u(e)?"b2-bold":"b2-regular"}function B(e){var a;const n=((a=t.options)==null?void 0:a.filter(s=>e.includes(s.value)))??[];w("update:modelValue",n)}return(e,n)=>{const a=D;return v(),F("div",{class:h({"fr-multiselect--dense":t.dense,"fr-multiselect--unselected":t.modelValue.length===0,"fr-multiselect--selected":t.modelValue.length>0})},[f(c($),K(t,{"model-value":c(N),title:c(m),"button-label":c(m),"id-key":"value","filtering-keys":["label"],"onUpdate:modelValue":n[0]||(n[0]=s=>B(s))}),{"checkbox-label":H(({option:s})=>[y("div",G,[f(a,{class:"option-checkbox",name:U(s),color:g(s),size:1.5},null,8,["name","color"]),s.icon?(v(),z(a,{key:0,class:"option-icon",name:s.icon,color:g(s),size:1.5},null,8,["name","color"])):P("",!0),y("span",{class:h(k(s))},W(s.label),3)])]),_:1},16,["model-value","title","button-label"])],2)}}}),E=X(q,[["__scopeId","data-v-4cc765fa"]]);q.__docgenInfo={exportName:"default",displayName:"AvMultiselect",description:"",tags:{},props:[{name:"disabled",description:"Indicated if the select is disabled.",required:!1,type:{name:"boolean"}},{name:"selectId",description:"Unique id for the select. Used for the accessibility.",required:!1,type:{name:"string"}},{name:"name",description:"Field name.",required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option(s) value(s).",required:!0,type:{name:"Array",elements:[{name:"AvMultiselectOption"}]}},{name:"label",description:"Select text label.",required:!0,type:{name:"string"}},{name:"options",description:"Selectable options.",required:!1,type:{name:"Array",elements:[{name:"AvMultiselectOption"}]}},{name:"successMessage",description:"If set, display a success message.",required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",required:!1,type:{name:"string"}},{name:"defaultUnselectedText",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",required:!1,type:{name:"boolean"}},{name:"selectedText",description:"Displayed text when options are selected.",required:!1,type:{name:"string"}},{name:"selectAll",description:"Displays the select all items button",required:!1,type:{name:"boolean"}},{name:"selectAllLabel",description:"Update the select all items button label",tags:{default:[{description:'["Tout sélectionner", "Tout désélectionner"]',title:"default"}]},required:!1,type:{name:"tuple",elements:[{name:"string"},{name:"string"}]}},{name:"search",description:"Displays the search bar",required:!1,type:{name:"boolean"}},{name:"width",description:"Fixes the width of the multiselect",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["Array"],elements:[{name:"AvMultiselectOption"}]},description:"Emitted when an option is selected or unselected.",properties:[{type:{names:["mixed"]},name:"value",description:"Values (`AvMultiselectOption[]`) of the current selected options."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Values (`AvMultiselectOption[]`) of the current selected options."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvMultiselect/AvMultiselect.vue"]};const te={title:"Components/Interaction/Selects/AvMultiselect",component:E,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},dense:{control:"boolean"},selectId:{control:"text"},name:{control:"text"},hint:{control:"text"},modelValue:{type:{name:"{value: string | number, label: string}[]",required:!0},control:!1},label:{control:"text"},options:{type:{name:"{value: string | number, label: string}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},defaultUnselectedText:{control:"text",required:!0},selectAll:{control:"boolean"},search:{control:"boolean"},width:{control:"text"}},args:{options:[{value:"1",label:"Choice 1"},{value:"2",label:"Choice 2"},{value:"3",label:"Choice 3"},{value:"4",label:"Choice 4"},{value:"5",label:"Choice 5"}],defaultUnselectedText:"Placeholder",required:!1,disabled:!1,selectId:"selectId",name:"select",hint:"",modelValue:[],label:"",successMessage:"",errorMessage:"",dense:!1,selectAll:!1,search:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvMultiselect</code> is a Vue component enabling a user to select one or many items from a given list.
  </span>
</p>

<p>
  <span class="b2-regular">
    The drop-down list provides a list of options for the user to choose from.
    The user can filter this list and use a button to select/deselect all visible items.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The <code>AvMultiselect</code> consists of:</span></p>
<ul>
  <li><span class="b2-regular">a <strong>label</strong> - Mandatory (<code>label</code> prop)</span></li>
  <li><span class="b2-regular">a <strong>description</strong> - Optional (<code>hint</code> prop or <code>hint</code> slot)</span></li>
  <li><span class="b2-regular">a <strong>list</strong> - Composed of a set of selectable options (mandatory, <code>options</code> prop with a label, a value and an optional icon)</span></li>
</ul>

<p><span class="b2-regular">Inside the list:</span></p>
<ul>
  <li><span class="b2-regular">a <strong>"Select all" / "Deselect all" button</strong> - Optional (<code>selectAll</code> and <code>selectAllLabel</code> props)</span></li>
  <li><span class="b2-regular">an <strong>input field</strong> - Optional</span></li>
  <li><span class="b2-regular">a <strong>form section (fieldset)</strong> containing:</span>
    <ul>
      <li><span class="b2-regular">a <strong>legend</strong> - Optional, can be hidden (<code>legend</code> prop or <code>legend</code> slot)</span></li>
      <li><span class="b2-regular">a <strong>description of the group</strong> - Optional, can be hidden</span></li>
      <li><span class="b2-regular">a <strong>list of options</strong> - Mandatory (<code>options</code> prop with a label, a value and an optional icon)</span></li>
    </ul>
  </li>
</ul>`}}}},p=d=>({components:{AvMultiselect:E},setup(){return{args:d}},template:'<AvMultiselect v-bind="args" v-model="args.modelValue" />'}),o=p.bind({});o.args={label:"Select"};const r=p.bind({});r.args={dense:!0,label:"Dense Select"};const i=p.bind({});i.args={options:[{value:"1",label:"Choice 1",icon:l.ATTACH_FILE},{value:"2",label:"Choice 2",icon:l.CHAT_ALERT},{value:"3",label:"Choice 3",icon:l.CONTENT_SAVE_OUTLINE},{value:"4",label:"Choice 4",icon:l.ELECTRON_FRAMEWORK},{value:"5",label:"Choice 5",icon:l.IMAGE_OUTLINE}],label:"Options with icon"};var A,M,V;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvMultiselect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvMultiselect v-bind="args" v-model="args.modelValue" />\`
})`,...(V=(M=o.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var x,C,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvMultiselect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvMultiselect v-bind="args" v-model="args.modelValue" />\`
})`,...(_=(C=r.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var T,I,O;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvMultiselect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvMultiselect v-bind="args" v-model="args.modelValue" />\`
})`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const se=["Default","Dense","OptionsWithIcon"];export{o as Default,r as Dense,i as OptionsWithIcon,se as __namedExportsOrder,te as default};
