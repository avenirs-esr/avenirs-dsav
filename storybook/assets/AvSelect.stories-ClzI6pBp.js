import{d as _,c as q,a as n,b as d,B as x,t as c,J as ee,u as s,F as te,g as se,n as A,o as r}from"./iframe-BIZrIG-x.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const ne=["for"],re={key:0,class:"required"},le={key:1,class:"fr-hint-text"},oe=["id","name","disabled","aria-disabled","required","aria-required","title"],de=["selected"],ce=["selected","value","disabled","aria-disabled"],ie=["id"],K=_({__name:"AvSelect",props:{required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},selectId:{default:`select-${crypto.randomUUID()}`},name:{default:""},hint:{default:""},modelValue:{},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:X}){const Y=X,Z=q(()=>{var o;if(!e.modelValue)return e.placeholder;const S=(o=e.options)==null?void 0:o.find(t=>String(t.value)===String(e.modelValue));return S?S.text:e.placeholder}),v=q(()=>e.errorMessage||e.successMessage),l=q(()=>e.errorMessage?"error":"valid");return(S,o)=>(r(),n("div",{class:A({"fr-select--dense":e.dense})},[d("div",{class:A(["fr-select-group",{[`fr-select-group--${s(l)}`]:s(v)}])},[d("label",{class:"fr-label b2-light",for:e.selectId},[d("span",null,c(e.label),1),e.required?(r(),n("span",re," *")):x("",!0),e.hint?(r(),n("span",le,c(e.hint),1)):x("",!0)],8,ne),d("select",ee({id:e.selectId,class:[{[`fr-select--${s(l)}`]:s(v)},"fr-select"],name:e.name||e.selectId,disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,title:s(Z)},S.$attrs,{onChange:o[0]||(o[0]=t=>{var y;return Y("update:modelValue",(y=t.target)==null?void 0:y.value)})}),[d("option",{selected:!e.options.some(t=>t.value===e.modelValue),disabled:"",value:"",hidden:""},c(e.placeholder),9,de),(r(!0),n(te,null,se(e.options,(t,y)=>(r(),n("option",{key:y,selected:e.modelValue===t.value,value:t.value,disabled:t.disabled,"aria-disabled":t.disabled},c(t.text),9,ce))),128))],16,oe),s(v)?(r(),n("p",{key:0,id:`select-${s(l)}-desc-${s(l)}`,class:A(`fr-${s(l)}-text`)},c(s(v)),11,ie)):x("",!0)],2)],2))}}),Q=ae(K,[["__scopeId","data-v-a0cac33e"]]);K.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"selectId",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"undefined"}]}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:`{
  value: string | number | undefined
  text: string
  disabled?: boolean
}`}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emitted when an option is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Value (`string | number`) of the selected option."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Value (`string | number`) of the selected option."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const ge={title:"Components/Interaction/Selects/AvSelect",component:Q,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},selectId:{control:"text"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,selectId:"selectId",name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular"><code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},a=e=>({components:{AvSelect:Q},setup(){return{args:e}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),i=a.bind({});i.args={selectId:"default-select",name:"default-select",label:"Select"};const u=a.bind({});u.args={selectId:"dense-select",name:"dense-select",dense:!0,label:"Dense Select"};const m=a.bind({});m.args={selectId:"disabled-select",name:"disabled-select",disabled:!0,label:"Disabled Select"};const p=a.bind({});p.args={selectId:"required-select",name:"required-select",required:!0,label:"Required Select"};const g=a.bind({});g.args={selectId:"hint-select",name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const f=a.bind({});f.args={selectId:"custom-placeholder-select",name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const b=a.bind({});b.args={selectId:"with-error-select",name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const h=a.bind({});h.args={selectId:"with-success-select",name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};var I,V,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(C=(V=i.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var M,w,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var $,k,B;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var T,P,U;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(U=(P=p.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,E,F;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var H,N,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,O,J;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(J=(O=b.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var L,j,G;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(G=(j=h.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const fe=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess"];export{f as CustomPlaceholder,i as Default,u as Dense,m as Disabled,g as Hint,p as Required,b as WithError,h as WithSuccess,fe as __namedExportsOrder,ge as default};
