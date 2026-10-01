import{_ as Ve}from"./AvMessage-_MYuzha-.js";import{n as Ue,a2 as Ne,d as c,h as i,e as o,B as w,l as V,g as M,$ as t,X as p,a9 as $e,y as Re,a1 as Be,L as l,z as Le,F as W,Q as $}from"./iframe-C30ZCNdO.js";import{A as Ee}from"./AvIcon-DpzNr5hB.js";import{A as Ge}from"./AvTooltip-C9SdE3ql.js";import{a as Fe,i as He,g as ze}from"./utils-pnJYGbuQ.js";import{I as je,M as xe}from"./icons-B6bk2eYx.js";import{_ as Ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-CUEylIGB.js";import"./use-text-truncation-DPA6VCyl.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const Qe={key:0,class:"av-select-prefix av-align-center av-col av-text-text2"},Xe=["for"],Ye={key:0,class:"required"},Je={key:1,class:"av-hint-text"},Ze=["id","value","name","disabled","aria-disabled","required","aria-required","aria-describedby"],_e={disabled:"",value:"",hidden:""},et=["label","data-testid"],tt=["value","disabled","aria-disabled"],nt=["value","disabled","aria-disabled"],ke=Ue({inheritAttrs:!1,__name:"AvSelect",props:Re({required:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{},labelVisible:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{selectedItem:{default:()=>({itemId:""})},selectedItemModifiers:{}}),emits:["update:selectedItem"],setup(e){Be(n=>({a872ec36:t(we)}));const U=Ne(e,"selectedItem"),D=c(()=>String(U.value.itemId??"")),m=e.id??`select-${crypto.randomUUID()}`,Ce=c(()=>{if(!D.value)return e.placeholder;const n=Me(D.value);return n?n.label:e.placeholder}),Oe=c(()=>({"--icon-path":`url(${je.MDI_KEYBOARD_ARROW_DOWN})`})),O=c(()=>e.errorMessage||e.successMessage),u=c(()=>e.errorMessage?"error":"success"),Te=c(()=>["av-label b2-regular",{"av-sr-only":!e.labelVisible}]),we=c(()=>e.labelVisible&&e.label?"69%":"50%");function P(n){return Array.isArray(n.children)}function Me(n){for(const s of e.options){if(P(s)&&s.children){const r=s.children.find(a=>String(a.id)===n);if(r)return r}if(String(s.id)===n)return s}}function We(n){for(const s of e.options){if(P(s)&&s.children){const r=s.children.find(a=>String(a.id)===n);if(r)return{itemId:r.id,parentId:s.id}}if(String(s.id)===n)return{itemId:s.id}}return{itemId:n}}function De(n){const s=n.target.value;U.value=We(s)}return(n,s)=>{const r=Ve;return l(),i("div",{class:w({"av-select--dense":e.dense})},[o("div",{class:w(["av-select-group",{[`av-select-group--${t(u)}`]:t(O)}])},[o("div",{class:w(["av-select-control",{"av-select-control--disabled":e.disabled}])},[e.prefixIcon?(l(),i("div",Qe,[V(Ee,{name:e.prefixIcon,size:1.2},null,8,["name"])])):M("",!0),o("label",{class:w(t(Te)),for:t(m)},[o("span",null,p(e.label),1),e.required?(l(),i("span",Ye," *")):M("",!0),e.hint?(l(),i("span",Je,p(e.hint),1)):M("",!0)],10,Xe),V(Ge,{content:t(ze)({content:t(Ce),disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:t(He)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"force-focusable":t(Fe)({disabled:e.disabled,disabledTooltip:e.disabledTooltip})},{default:$e(()=>[o("select",Le({id:t(m),value:t(D),class:[{[`av-select--${t(u)}`]:t(O),"av-select--with-prefix av-pl-xl":e.prefixIcon,"av-py-xxs":e.dense,"av-py-xs":!e.dense},"av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"],name:e.name||t(m),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,"aria-describedby":t(O)?`${t(m)}-${t(u)}`:void 0},n.$attrs,{style:t(Oe),onChange:De}),[o("option",_e,p(e.placeholder),1),(l(!0),i(W,null,$(e.options,(a,N)=>(l(),i(W,{key:N},[P(a)&&a.children?(l(),i(W,{key:0},[a.children.length>0?(l(),i("optgroup",{key:0,label:a.label,"data-testid":`select-optgroup-${a.id}`},[(l(!0),i(W,null,$(a.children,(T,Pe)=>(l(),i("option",{key:`${N}-${Pe}`,value:T.id,disabled:T.disabled,"aria-disabled":T.disabled},p(T.label),9,tt))),128))],8,et)):M("",!0)],64)):(l(),i("option",{key:1,value:a.id,disabled:a.disabled,"aria-disabled":a.disabled},p(a.label),9,nt))],64))),128))],16,Ze)]),_:1},8,["content","disabled","force-focusable"])],2),V(r,{"message-id":`${t(m)}-${t(u)}`,message:t(O),type:t(u)},null,8,["message-id","message","type"])],2)],2)}}}),qe=Ke(ke,[["__scopeId","data-v-feedf6eb"]]);ke.__docgenInfo={exportName:"default",displayName:"AvSelect",type:1,props:[{name:"required",global:!1,description:"Indicates if the select is required.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"id",global:!1,description:"Unique id for the select. Used for the accessibility.",tags:[{name:"default",text:"`select-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"name",global:!1,description:"Field name.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"hint",global:!1,description:"Hint for guidance.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"label",global:!1,description:"Select text label.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"options",global:!1,description:"Selectable options.",tags:[{name:"default",text:"[]"}],required:!1,type:"AvSelectOption[] | undefined",declarations:[],schema:{kind:"enum",type:"AvSelectOption[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectOption[]"}]},default:"[]"},{name:"successMessage",global:!1,description:"If set, display a success message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"errorMessage",global:!1,description:"If set, display an error message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"placeholder",global:!1,description:"Placeholder text.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"dense",global:!1,description:"dense mode",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"prefixIcon",global:!1,description:"Prefix icon name (optional)",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"labelVisible",global:!1,description:"Whether the label is visible",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"true"},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"selectedItem",global:!1,description:"",tags:[],required:!1,type:"AvSelectSelectedOption | undefined",declarations:[],schema:{kind:"enum",type:"AvSelectSelectedOption | undefined",schema:["undefined",{kind:"object",type:"AvSelectSelectedOption"}]},default:'{ itemId: "" }'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:selectedItem",description:"",tags:[],type:"[value: AvSelectSelectedOption]",signature:'(event: "update:selectedItem", value: AvSelectSelectedOption): void',declarations:[],schema:[{kind:"object",type:"AvSelectSelectedOption"}]}],slots:[],exposed:[{name:"id",type:"string | undefined",description:"Unique id for the select. Used for the accessibility.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"selectedItem",type:"AvSelectSelectedOption | undefined",description:"",declarations:[],schema:{kind:"enum",type:"AvSelectSelectedOption | undefined",schema:["undefined",{kind:"object",type:"AvSelectSelectedOption"}]}},{name:"label",type:"string | undefined",description:"Select text label.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",type:"string | undefined",description:"Hint for guidance.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"errorMessage",type:"string | undefined",description:"If set, display an error message.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"successMessage",type:"string | undefined",description:"If set, display a success message.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"required",type:"boolean | undefined",description:"Indicates if the select is required.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",type:"boolean | undefined",description:"Indicates if the element is disabled.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabledTooltip",type:"string | undefined",description:"Tooltip text to display when the element is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"name",type:"string | undefined",description:"Field name.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",type:"AvSelectOption[] | undefined",description:"Selectable options.",declarations:[],schema:{kind:"enum",type:"AvSelectOption[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectOption[]"}]}},{name:"placeholder",type:"string",description:"Placeholder text.",declarations:[],schema:"string"},{name:"dense",type:"boolean | undefined",description:"dense mode",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"prefixIcon",type:"string | undefined",description:"Prefix icon name (optional)",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"labelVisible",type:"boolean | undefined",description:"Whether the label is visible",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"};const ft={title:"Components/Interaction/Selects/AvSelect",component:qe,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},label:{control:"text"},options:{type:{name:"{id: string | number | undefined, label: string, disabled?: boolean}[]",required:!0},control:!1},selectedItem:{control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"},labelVisible:{control:"boolean"}},args:{options:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"},{id:"3",label:"Choice 3",disabled:!0},{id:"4",label:"Choice 4"},{id:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",selectedItem:{itemId:""},label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:"",labelVisible:!0},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},d=e=>({components:{AvSelect:qe},setup(){return{args:e}},template:`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  `}),f=d.bind({});f.args={name:"default-select",label:"Select"};const g=d.bind({});g.args={name:"dense-select",dense:!0,label:"Dense Select"};const b=d.bind({});b.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const h=d.bind({});h.args={name:"required-select",required:!0,label:"Required Select"};const v=d.bind({});v.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const I=d.bind({});I.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const y=d.bind({});y.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const S=d.bind({});S.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const A=d.bind({});A.args={name:"with-prefix-icon-select",prefixIcon:xe.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};const x=d.bind({});x.args={name:"label-invisible-select",label:"Invisible label Select",labelVisible:!1};const k=d.bind({});k.args={name:"label-invisible-with-prefix-icon-select",label:"Invisible label with prefix icon Select",labelVisible:!1,prefixIcon:xe.ACCOUNT_CIRCLE_OUTLINE};const q=d.bind({});q.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2",disabled:!0}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}]};const C=d.bind({});C.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}],selectedItem:{itemId:"3",parentId:"group2"}};var R,B,L;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(L=(B=f.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var E,G,F;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(F=(G=g.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};var H,z,j;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(j=(z=b.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,J,Z;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(Z=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Z.source}}};var _,ee,te;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,ae;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(ae=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var de,ie,le;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,ce,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(oe=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var me,ue,pe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(pe=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,ge,be;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(be=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var he,ve,Ie;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(Ie=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var ye,Se,Ae;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    AvSelect
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  \`
})`,...(Ae=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};const gt=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon","LabelInvisible","LabelInvisibleWithPrefixIcon","WithOptGroups","WithOptGroupsAndSelectedItem"];export{I as CustomPlaceholder,f as Default,g as Dense,b as Disabled,v as Hint,x as LabelInvisible,k as LabelInvisibleWithPrefixIcon,h as Required,y as WithError,q as WithOptGroups,C as WithOptGroupsAndSelectedItem,A as WithPrefixIcon,S as WithSuccess,gt as __namedExportsOrder,ft as default};
