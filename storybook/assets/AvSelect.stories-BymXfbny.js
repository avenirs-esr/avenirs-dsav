import{d as ee,c as q,a as n,b as d,B as x,u as t,t as i,J as te,F as se,g as ae,n as V,o as r}from"./iframe-CYHIPOtb.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const re=["for"],le={key:0,class:"required"},oe={key:1,class:"fr-hint-text"},de=["id","name","disabled","aria-disabled","required","aria-required","title"],ie=["selected"],ce=["selected","value","disabled","aria-disabled"],ue=["id"],Q=ee({__name:"AvSelect",props:{required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},modelValue:{},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:Y}){const Z=Y,A=q(()=>e.id??`select-${crypto.randomUUID()}`),_=q(()=>{var o;if(!e.modelValue)return e.placeholder;const S=(o=e.options)==null?void 0:o.find(s=>String(s.value)===String(e.modelValue));return S?S.text:e.placeholder}),h=q(()=>e.errorMessage||e.successMessage),l=q(()=>e.errorMessage?"error":"valid");return(S,o)=>(r(),n("div",{class:V({"fr-select--dense":e.dense})},[d("div",{class:V(["fr-select-group",{[`fr-select-group--${t(l)}`]:t(h)}])},[d("label",{class:"fr-label b2-light",for:t(A)},[d("span",null,i(e.label),1),e.required?(r(),n("span",le," *")):x("",!0),e.hint?(r(),n("span",oe,i(e.hint),1)):x("",!0)],8,re),d("select",te({id:t(A),class:[{[`fr-select--${t(l)}`]:t(h)},"fr-select"],name:e.name||t(A),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,title:t(_)},S.$attrs,{onChange:o[0]||(o[0]=s=>{var y;return Z("update:modelValue",(y=s.target)==null?void 0:y.value)})}),[d("option",{selected:!e.options.some(s=>s.value===e.modelValue),disabled:"",value:"",hidden:""},i(e.placeholder),9,ie),(r(!0),n(se,null,ae(e.options,(s,y)=>(r(),n("option",{key:y,selected:e.modelValue===s.value,value:s.value,disabled:s.disabled,"aria-disabled":s.disabled},i(s.text),9,ce))),128))],16,de),t(h)?(r(),n("p",{key:0,id:`select-${t(l)}-desc-${t(l)}`,class:V(`fr-${t(l)}-text`)},i(t(h)),11,ue)):x("",!0)],2)],2))}}),X=ne(Q,[["__scopeId","data-v-a60f0c16"]]);Q.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"undefined"}]}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:`{
  value: string | number | undefined
  text: string
  disabled?: boolean
}`}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emitted when an option is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Value (`string | number`) of the selected option."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Value (`string | number`) of the selected option."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const fe={title:"Components/Interaction/Selects/AvSelect",component:X,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular"><code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},a=e=>({components:{AvSelect:X},setup(){return{args:e}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),c=a.bind({});c.args={name:"default-select",label:"Select"};const u=a.bind({});u.args={name:"dense-select",dense:!0,label:"Dense Select"};const m=a.bind({});m.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const p=a.bind({});p.args={name:"required-select",required:!0,label:"Required Select"};const g=a.bind({});g.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const f=a.bind({});f.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const b=a.bind({});b.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const v=a.bind({});v.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};var C,M,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var I,w,$;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...($=(w=u.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var k,B,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var P,U,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var E,F,H;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var N,R,z;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var O,J,L;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(L=(J=b.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var j,G,K;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const be=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess"];export{f as CustomPlaceholder,c as Default,u as Dense,m as Disabled,g as Hint,p as Required,b as WithError,v as WithSuccess,be as __namedExportsOrder,fe as default};
