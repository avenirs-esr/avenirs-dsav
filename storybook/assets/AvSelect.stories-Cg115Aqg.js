import{d as y,c as S,b as q,y as V,z as A,B as l,n as I,i as _}from"./iframe-BFTUYVEK.js";import{v as T}from"./vue-dsfr-Bz5H0akL.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const g=y({__name:"AvSelect",props:{required:{type:Boolean},disabled:{type:Boolean},selectId:{},name:{},hint:{},modelValue:{},label:{},options:{},successMessage:{},errorMessage:{},defaultUnselectedText:{},dense:{type:Boolean}},emits:["update:modelValue"],setup(a,{emit:b}){const e=a,h=b,x=S(()=>{var t;if(!e.modelValue)return e.defaultUnselectedText;const o=(t=e.options)==null?void 0:t.find(r=>String(r.value)===String(e.modelValue));return o?o.text:e.defaultUnselectedText});return(o,t)=>(_(),q("div",{class:I({"fr-select--dense":e.dense})},[V(l(T),A(e,{title:l(x),"onUpdate:modelValue":t[0]||(t[0]=r=>h("update:modelValue",r))}),null,16,["title"])],2))}}),f=U(g,[["__scopeId","data-v-d230e734"]]);g.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",required:!1,type:{name:"boolean"}},{name:"selectId",description:"Unique id for the select. Used for the accessibility.",required:!1,type:{name:"string"}},{name:"name",description:"Field name.",required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"undefined"}]}},{name:"label",description:"Select text label.",required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",required:!1,type:{name:"Array",elements:[{name:`{
  value: string | number | undefined
  text: string
  disabled?: boolean
}`}]}},{name:"successMessage",description:"If set, display a success message.",required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",required:!1,type:{name:"string"}},{name:"defaultUnselectedText",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emitted when an option is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Value (`string | number`) of the selected option."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Value (`string | number`) of the selected option."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const D={title:"Components/Interaction/Selects/AvSelect",component:f,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},selectId:{control:"text"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},defaultUnselectedText:{control:"text",required:!0}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],defaultUnselectedText:"Placeholder",required:!1,disabled:!1,selectId:"selectId",name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvSelect</code> is a Vue component enabling a user to select an item from a given list.
  </span>
</p>

<p>
  <span class="b2-regular">
    The drop-down list provides a list of options from which the user can choose. Only the visible part of the component is stylized:
    the drop-down list of options retains the browser style.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular"><code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},v=a=>({components:{AvSelect:f},setup(){return{args:a}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),n=v.bind({});n.args={label:"Select"};const s=v.bind({});s.args={dense:!0,label:"Dense Select"};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const k=["Default","Dense"];export{n as Default,s as Dense,k as __namedExportsOrder,D as default};
