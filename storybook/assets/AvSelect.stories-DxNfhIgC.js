import{_ as oe}from"./AvMessage-Bf2MUTvz.js";import{d as ie,c,e as n,D as r,f as C,i as V,u as t,L as y,I as ce,O as de,P as ue,E as D,g as l}from"./iframe-BzX4UFBz.js";import{A as me}from"./AvIcon-CT6v9gSI.js";import{I as pe,M as ge}from"./icons-CvJnIbum.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-BRdW-1Vy.js";import"./preload-helper-ILsKNznc.js";const ve={class:"av-select-control"},be={key:0,class:"av-select-prefix av-align-center av-col"},he=["for"],Se={key:0,class:"required"},xe={key:1,class:"av-hint-text"},ye=["id","name","disabled","aria-disabled","required","aria-required","title"],Ae=["selected"],qe=["selected","value","disabled","aria-disabled"],te=ie({__name:"AvSelect",props:{required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},modelValue:{},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{}},emits:["update:modelValue"],setup(e,{emit:ae}){const ne=ae,A=c(()=>e.id??`select-${crypto.randomUUID()}`),re=c(()=>{var i;if(!e.modelValue)return e.placeholder;const S=(i=e.options)==null?void 0:i.find(I=>String(I.value)===String(e.modelValue));return S?S.text:e.placeholder}),le=c(()=>({"--icon-path":`url(${pe.MDI_KEYBOARD_ARROW_DOWN})`})),q=c(()=>e.errorMessage||e.successMessage),o=c(()=>e.errorMessage?"error":"success");return(S,i)=>{const I=oe;return l(),n("div",{class:D({"av-select--dense":e.dense})},[r("div",{class:D(["av-select-group",{[`av-select-group--${t(o)}`]:t(q)}])},[r("div",ve,[e.prefixIcon?(l(),n("div",be,[C(me,{name:e.prefixIcon,size:1.2},null,8,["name"])])):V("",!0),r("label",{class:"av-label b2-light",for:t(A)},[r("span",null,y(e.label),1),e.required?(l(),n("span",Se," *")):V("",!0),e.hint?(l(),n("span",xe,y(e.hint),1)):V("",!0)],8,he),r("select",ce({id:t(A),class:[{[`av-select--${t(o)}`]:t(q),"av-select--with-prefix":e.prefixIcon},"av-select b2-light"],name:e.name||t(A),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,title:t(re)},S.$attrs,{style:t(le),onChange:i[0]||(i[0]=s=>{var x;return ne("update:modelValue",(x=s.target)==null?void 0:x.value)})}),[r("option",{selected:!e.options.some(s=>s.value===e.modelValue),disabled:"",value:"",hidden:""},y(e.placeholder),9,Ae),(l(!0),n(de,null,ue(e.options,(s,x)=>(l(),n("option",{key:x,selected:e.modelValue===s.value,value:s.value,disabled:s.disabled,"aria-disabled":s.disabled},y(s.text),9,qe))),128))],16,ye)]),C(I,{"message-id":`select-${t(o)}-desc-${t(o)}`,message:t(q),type:t(o)},null,8,["message-id","message","type"])],2)],2)}}}),se=fe(te,[["__scopeId","data-v-2bdc0c89"]]);te.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"undefined"}]}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:`{
  value: string | number | undefined
  text: string
  disabled?: boolean
}`}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"prefixIcon",description:"Prefix icon name (optional)",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emitted when an option is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Value (`string | number`) of the selected option."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Value (`string | number`) of the selected option."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const We={title:"Components/Interaction/Selects/AvSelect",component:se,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:""},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},a=e=>({components:{AvSelect:se},setup(){return{args:e}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),d=a.bind({});d.args={name:"default-select",label:"Select"};const u=a.bind({});u.args={name:"dense-select",dense:!0,label:"Dense Select"};const m=a.bind({});m.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const p=a.bind({});p.args={name:"required-select",required:!0,label:"Required Select"};const g=a.bind({});g.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const f=a.bind({});f.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const v=a.bind({});v.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const b=a.bind({});b.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const h=a.bind({});h.args={name:"with-prefix-icon-select",prefixIcon:ge.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};var M,w,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var W,N,O;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,E,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(U=(E=m.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var R,$,k;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(k=($=p.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var B,L,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var z,F,K;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(K=(F=f.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Y,j,G;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(G=(j=v.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,_,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(ee=(_=h.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};const Ne=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon"];export{f as CustomPlaceholder,d as Default,u as Dense,m as Disabled,g as Hint,p as Required,v as WithError,h as WithPrefixIcon,b as WithSuccess,Ne as __namedExportsOrder,We as default};
