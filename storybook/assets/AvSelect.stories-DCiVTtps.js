import{_ as se}from"./AvMessage-C3-zjrIn.js";import{d as ae,c as l,e as o,z as d,f as ne,u as t,i as x,I as y,F as re,L as le,M as oe,A as D,g as i}from"./iframe-DYjuvXop.js";import{I as de}from"./icons-CvJnIbum.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-g0PeDXa-.js";import"./AvIcon-CbJzOdp-.js";import"./preload-helper-ILsKNznc.js";const ce=["for"],ue={key:0,class:"required"},me={key:1,class:"av-hint-text"},pe=["id","name","disabled","aria-disabled","required","aria-required","title"],ge=["selected"],fe=["selected","value","disabled","aria-disabled"],Q=ae({__name:"AvSelect",props:{required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},modelValue:{},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:Z}){const _=Z,q=l(()=>e.id??`select-${crypto.randomUUID()}`),ee=l(()=>{var r;if(!e.modelValue)return e.placeholder;const h=(r=e.options)==null?void 0:r.find(V=>String(V.value)===String(e.modelValue));return h?h.text:e.placeholder}),te=l(()=>({"--icon-path":`url(${de.MDI_KEYBOARD_ARROW_DOWN})`})),A=l(()=>e.errorMessage||e.successMessage),n=l(()=>e.errorMessage?"error":"success");return(h,r)=>{const V=se;return i(),o("div",{class:D({"av-select--dense":e.dense})},[d("div",{class:D(["av-select-group",{[`av-select-group--${t(n)}`]:t(A)}])},[d("label",{class:"av-label b2-light",for:t(q)},[d("span",null,y(e.label),1),e.required?(i(),o("span",ue," *")):x("",!0),e.hint?(i(),o("span",me,y(e.hint),1)):x("",!0)],8,ce),d("select",re({id:t(q),class:[{[`av-select--${t(n)}`]:t(A),"b1-regular":!e.dense,"b2-regular":e.dense},"av-select"],name:e.name||t(q),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,title:t(ee)},h.$attrs,{style:t(te),onChange:r[0]||(r[0]=s=>{var S;return _("update:modelValue",(S=s.target)==null?void 0:S.value)})}),[d("option",{selected:!e.options.some(s=>s.value===e.modelValue),disabled:"",value:"",hidden:""},y(e.placeholder),9,ge),(i(!0),o(le,null,oe(e.options,(s,S)=>(i(),o("option",{key:S,selected:e.modelValue===s.value,value:s.value,disabled:s.disabled,"aria-disabled":s.disabled},y(s.text),9,fe))),128))],16,pe),ne(V,{"message-id":`select-${t(n)}-desc-${t(n)}`,message:t(A),type:t(n)},null,8,["message-id","message","type"])],2)],2)}}}),X=ie(Q,[["__scopeId","data-v-4a0652cc"]]);Q.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"undefined"}]}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:`{
  value: string | number | undefined
  text: string
  disabled?: boolean
}`}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emitted when an option is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Value (`string | number`) of the selected option."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Value (`string | number`) of the selected option."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const Ve={title:"Components/Interaction/Selects/AvSelect",component:X,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},a=e=>({components:{AvSelect:X},setup(){return{args:e}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),c=a.bind({});c.args={name:"default-select",label:"Select"};const u=a.bind({});u.args={name:"dense-select",dense:!0,label:"Dense Select"};const m=a.bind({});m.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const p=a.bind({});p.args={name:"required-select",required:!0,label:"Required Select"};const g=a.bind({});g.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const f=a.bind({});f.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const b=a.bind({});b.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const v=a.bind({});v.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};var M,I,C;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(C=(I=c.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var w,T,W;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var $,B,N;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var R,U,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(k=(U=p.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var E,O,P;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var F,H,z;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(z=(H=f.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var L,K,Y;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(Y=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var j,G,J;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const xe=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess"];export{f as CustomPlaceholder,c as Default,u as Dense,m as Disabled,g as Hint,p as Required,b as WithError,v as WithSuccess,xe as __namedExportsOrder,Ve as default};
