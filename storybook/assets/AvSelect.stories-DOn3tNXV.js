import{_ as be}from"./AvMessage-DYTnv_Re.js";import{d as he,c as C,e as s,k as i,f as $,n as W,i as D,u as t,L as p,I as Se,O as M,P as O,g as n}from"./iframe-iO2db2k6.js";import{A as xe}from"./AvIcon-B05HUcph.js";import{b as ye,M as Ae}from"./icons-hlhmcYzn.js";import{_ as qe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-FYs4IxAm.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const Ie={key:0,class:"av-select-prefix av-align-center av-col av-text-text2"},Ve=["for"],Ce={key:0,class:"required"},De={key:1,class:"av-hint-text"},Me=["id","name","disabled","aria-disabled","required","aria-required","aria-describedby","title"],we=["selected"],We=["label"],ke=["selected","value","disabled","aria-disabled"],$e=["selected","value","disabled","aria-disabled"],de=he({__name:"AvSelect",props:{required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},modelValue:{},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{}},emits:["update:modelValue"],setup(e,{emit:me}){const pe=me,c=e.id??`select-${crypto.randomUUID()}`,ge=C(()=>{if(!e.modelValue)return e.placeholder;const l=V();return l?l.text:e.placeholder}),ve=C(()=>({"--icon-path":`url(${ye.MDI_KEYBOARD_ARROW_DOWN})`})),I=C(()=>e.errorMessage||e.successMessage),d=C(()=>e.errorMessage?"error":"success");function k(l){return"children"in l}function V(){var l;return(l=e.options)==null?void 0:l.find(o=>k(o)?o.children.some(w=>String(w.value)===String(e.modelValue)):String(o.value)===String(e.modelValue))}return(l,o)=>{const w=be;return n(),s("div",{class:W({"av-select--dense":e.dense})},[i("div",{class:W(["av-select-group",{[`av-select-group--${t(d)}`]:t(I)}])},[i("div",{class:W(["av-select-control",{"av-select-control--disabled":e.disabled}])},[e.prefixIcon?(n(),s("div",Ie,[$(xe,{name:e.prefixIcon,size:1.2},null,8,["name"])])):D("",!0),i("label",{class:"av-label b2-light",for:t(c)},[i("span",null,p(e.label),1),e.required?(n(),s("span",Ce," *")):D("",!0),e.hint?(n(),s("span",De,p(e.hint),1)):D("",!0)],8,Ve),i("select",Se({id:t(c),class:[{[`av-select--${t(d)}`]:t(I),"av-select--with-prefix av-pl-xl":e.prefixIcon,"av-py-xxs":e.dense,"av-py-xs":!e.dense},"av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"],name:e.name||t(c),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,"aria-describedby":t(I)?`${t(c)}-${t(d)}`:void 0,title:t(ge)},l.$attrs,{style:t(ve),onChange:o[0]||(o[0]=a=>{var u;return pe("update:modelValue",(u=a.target)==null?void 0:u.value)})}),[i("option",{selected:!V(),disabled:"",value:"",hidden:""},p(e.placeholder),9,we),(n(!0),s(M,null,O(e.options,(a,u)=>(n(),s(M,{key:u},[k(a)?(n(),s(M,{key:0},[a.children.length>0?(n(),s("optgroup",{key:0,label:a.text},[(n(!0),s(M,null,O(a.children,(m,fe)=>(n(),s("option",{key:`${u}-${fe}`,selected:V()===m,value:m.value,disabled:m.disabled,"aria-disabled":m.disabled},p(m.text),9,ke))),128))],8,We)):D("",!0)],64)):(n(),s("option",{key:1,selected:V()===a,value:a.value,disabled:a.disabled,"aria-disabled":a.disabled},p(a.text),9,$e))],64))),128))],16,Me)],2),$(w,{"message-id":`${t(c)}-${t(d)}`,message:t(I),type:t(d)},null,8,["message-id","message","type"])],2)],2)}}}),ue=qe(de,[["__scopeId","data-v-a67d28c1"]]);de.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"modelValue",description:"Selected option value.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"undefined"}]}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:"SelectOption"}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"prefixIcon",description:"Prefix icon name (optional)",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]},description:"Emitted when an option is selected.",properties:[{type:{names:["mixed"]},name:"value",description:"Value (`string | number`) of the selected option."}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"Value (`string | number`) of the selected option."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const Ge={title:"Components/Interaction/Selects/AvSelect",component:ue,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},label:{control:"text"},options:{type:{name:"{value: string | number | undefined, text: string, disabled?: boolean}[]",required:!0},control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"}},args:{options:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"},{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"},{value:"5",text:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",modelValue:"",label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:""},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},r=e=>({components:{AvSelect:ue},setup(){return{args:e}},template:'<AvSelect v-bind="args" v-model="args.modelValue" />'}),g=r.bind({});g.args={name:"default-select",label:"Select"};const v=r.bind({});v.args={name:"dense-select",dense:!0,label:"Dense Select"};const f=r.bind({});f.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const b=r.bind({});b.args={name:"required-select",required:!0,label:"Required Select"};const h=r.bind({});h.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const S=r.bind({});S.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const x=r.bind({});x.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const y=r.bind({});y.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const A=r.bind({});A.args={name:"with-prefix-icon-select",prefixIcon:Ae.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};const q=r.bind({});q.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{text:"Group 1",children:[{value:"1",text:"Choice 1"},{value:"2",text:"Choice 2"}]},{text:"Group 2",children:[{value:"3",text:"Choice 3"},{value:"4",text:"Choice 4"}]},{value:"5",text:"Ungrouped Choice"}]};var T,N,P;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(P=(N=g.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var U,E,R;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var B,G,L;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(L=(G=f.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var H,z,F;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(F=(z=b.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var K,Y,j;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(j=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,_,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(ee=(_=x.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,ae,se;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,re,le;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(le=(re=A.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,ie,ce;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvSelect v-bind="args" v-model="args.modelValue" />\`
})`,...(ce=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Le=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon","WithOptGroups"];export{S as CustomPlaceholder,g as Default,v as Dense,f as Disabled,h as Hint,b as Required,x as WithError,q as WithOptGroups,A as WithPrefixIcon,y as WithSuccess,Le as __namedExportsOrder,Ge as default};
