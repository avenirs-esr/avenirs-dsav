import{_ as Ue}from"./AvMessage-BPqYihX2.js";import{n as Ne,a2 as $e,d as c,h as i,e as o,B as w,l as V,g as M,$ as t,X as p,a9 as Re,y as Be,a1 as Le,L as l,z as Ee,F as W,Q as $}from"./iframe-DNAxf33W.js";import{A as Ge}from"./AvIcon-qEjhXtjL.js";import{A as Fe}from"./AvTooltip-D1HYxf-s.js";import{i as R,g as He}from"./utils-AN5LjLGN.js";import{I as ze,M as ke}from"./icons-B6bk2eYx.js";import{_ as je}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-29E-vgJA.js";import"./use-text-truncation-CSqvruZY.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const Ke={key:0,class:"av-select-prefix av-align-center av-col av-text-text2"},Qe=["for"],Xe={key:0,class:"required"},Ye={key:1,class:"av-hint-text"},Je=["id","value","name","disabled","aria-disabled","required","aria-required","aria-describedby"],Ze={disabled:"",value:"",hidden:""},_e=["label","data-testid"],et=["value","disabled","aria-disabled"],tt=["value","disabled","aria-disabled"],qe=Ne({inheritAttrs:!1,__name:"AvSelect",props:Be({required:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{},labelVisible:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{selectedItem:{default:()=>({itemId:""})},selectedItemModifiers:{}}),emits:["update:selectedItem"],setup(e){Le(n=>({fc90ef0e:t(Me)}));const U=$e(e,"selectedItem"),P=c(()=>String(U.value.itemId??"")),m=e.id??`select-${crypto.randomUUID()}`,Oe=c(()=>{if(!P.value)return e.placeholder;const n=We(P.value);return n?n.label:e.placeholder}),Te=c(()=>({"--icon-path":`url(${ze.MDI_KEYBOARD_ARROW_DOWN})`})),O=c(()=>e.errorMessage||e.successMessage),u=c(()=>e.errorMessage?"error":"success"),we=c(()=>["av-label b2-regular",{"av-sr-only":!e.labelVisible}]),Me=c(()=>e.labelVisible&&e.label?"69%":"50%");function D(n){return Array.isArray(n.children)}function We(n){for(const s of e.options){if(D(s)&&s.children){const r=s.children.find(a=>String(a.id)===n);if(r)return r}if(String(s.id)===n)return s}}function Pe(n){for(const s of e.options){if(D(s)&&s.children){const r=s.children.find(a=>String(a.id)===n);if(r)return{itemId:r.id,parentId:s.id}}if(String(s.id)===n)return{itemId:s.id}}return{itemId:n}}function De(n){const s=n.target.value;U.value=Pe(s)}return(n,s)=>{const r=Ue;return l(),i("div",{class:w({"av-select--dense":e.dense})},[o("div",{class:w(["av-select-group",{[`av-select-group--${t(u)}`]:t(O)}])},[o("div",{class:w(["av-select-control",{"av-select-control--disabled":e.disabled}])},[e.prefixIcon?(l(),i("div",Ke,[V(Ge,{name:e.prefixIcon,size:1.2},null,8,["name"])])):M("",!0),o("label",{class:w(t(we)),for:t(m)},[o("span",null,p(e.label),1),e.required?(l(),i("span",Xe," *")):M("",!0),e.hint?(l(),i("span",Ye,p(e.hint),1)):M("",!0)],10,Qe),V(Fe,{content:t(He)({content:t(Oe),disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!t(R)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"force-focusable":t(R)({disabled:e.disabled,disabledTooltip:e.disabledTooltip})},{default:Re(()=>[o("select",Ee({id:t(m),value:t(P),class:[{[`av-select--${t(u)}`]:t(O),"av-select--with-prefix av-pl-xl":e.prefixIcon,"av-py-xxs":e.dense,"av-py-xs":!e.dense},"av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"],name:e.name||t(m),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,"aria-describedby":t(O)?`${t(m)}-${t(u)}`:void 0},n.$attrs,{style:t(Te),onChange:De}),[o("option",Ze,p(e.placeholder),1),(l(!0),i(W,null,$(e.options,(a,N)=>(l(),i(W,{key:N},[D(a)&&a.children?(l(),i(W,{key:0},[a.children.length>0?(l(),i("optgroup",{key:0,label:a.label,"data-testid":`select-optgroup-${a.id}`},[(l(!0),i(W,null,$(a.children,(T,Ve)=>(l(),i("option",{key:`${N}-${Ve}`,value:T.id,disabled:T.disabled,"aria-disabled":T.disabled},p(T.label),9,et))),128))],8,_e)):M("",!0)],64)):(l(),i("option",{key:1,value:a.id,disabled:a.disabled,"aria-disabled":a.disabled},p(a.label),9,tt))],64))),128))],16,Je)]),_:1},8,["content","disabled","force-focusable"])],2),V(r,{"message-id":`${t(m)}-${t(u)}`,message:t(O),type:t(u)},null,8,["message-id","message","type"])],2)],2)}}}),Ce=je(qe,[["__scopeId","data-v-99b0840e"]]);qe.__docgenInfo={exportName:"default",displayName:"AvSelect",type:1,props:[{name:"required",global:!1,description:"Indicates if the select is required.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"id",global:!1,description:"Unique id for the select. Used for the accessibility.",tags:[{name:"default",text:"`select-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"name",global:!1,description:"Field name.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"hint",global:!1,description:"Hint for guidance.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"label",global:!1,description:"Select text label.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"options",global:!1,description:"Selectable options.",tags:[{name:"default",text:"[]"}],required:!1,type:"AvSelectOption[] | undefined",declarations:[],schema:{kind:"enum",type:"AvSelectOption[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectOption[]"}]},default:"[]"},{name:"successMessage",global:!1,description:"If set, display a success message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"errorMessage",global:!1,description:"If set, display an error message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"placeholder",global:!1,description:"Placeholder text.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"dense",global:!1,description:"dense mode",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"prefixIcon",global:!1,description:"Prefix icon name (optional)",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"labelVisible",global:!1,description:"Whether the label is visible",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"true"},{name:"disabled",global:!1,description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"selectedItem",global:!1,description:"",tags:[],required:!1,type:"AvSelectSelectedOption | undefined",declarations:[],schema:{kind:"enum",type:"AvSelectSelectedOption | undefined",schema:["undefined",{kind:"object",type:"AvSelectSelectedOption"}]},default:'{ itemId: "" }'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:selectedItem",description:"",tags:[],type:"[value: AvSelectSelectedOption]",signature:'(event: "update:selectedItem", value: AvSelectSelectedOption): void',declarations:[],schema:[{kind:"object",type:"AvSelectSelectedOption"}]}],slots:[],exposed:[{name:"id",type:"string | undefined",description:"Unique id for the select. Used for the accessibility.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"name",type:"string | undefined",description:"Field name.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"required",type:"boolean | undefined",description:"Indicates if the select is required.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"label",type:"string | undefined",description:"Select text label.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"errorMessage",type:"string | undefined",description:"If set, display an error message.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",type:"string | undefined",description:"Hint for guidance.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",type:"boolean | undefined",description:"Indicates if the element is disabled.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabledTooltip",type:"string | undefined",description:"Tooltip text to display when the element is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"successMessage",type:"string | undefined",description:"If set, display a success message.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"selectedItem",type:"AvSelectSelectedOption | undefined",description:"",declarations:[],schema:{kind:"enum",type:"AvSelectSelectedOption | undefined",schema:["undefined",{kind:"object",type:"AvSelectSelectedOption"}]}},{name:"options",type:"AvSelectOption[] | undefined",description:"Selectable options.",declarations:[],schema:{kind:"enum",type:"AvSelectOption[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectOption[]"}]}},{name:"labelVisible",type:"boolean | undefined",description:"Whether the label is visible",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",type:"string",description:"Placeholder text.",declarations:[],schema:"string"},{name:"prefixIcon",type:"string | undefined",description:"Prefix icon name (optional)",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"dense",type:"boolean | undefined",description:"dense mode",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"};const pt={title:"Components/Interaction/Selects/AvSelect",component:Ce,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},label:{control:"text"},options:{type:{name:"{id: string | number | undefined, label: string, disabled?: boolean}[]",required:!0},control:!1},selectedItem:{control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"},labelVisible:{control:"boolean"}},args:{options:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"},{id:"3",label:"Choice 3",disabled:!0},{id:"4",label:"Choice 4"},{id:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",selectedItem:{itemId:""},label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:"",labelVisible:!0},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},d=e=>({components:{AvSelect:Ce},setup(){return{args:e}},template:`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  `}),f=d.bind({});f.args={name:"default-select",label:"Select"};const g=d.bind({});g.args={name:"dense-select",dense:!0,label:"Dense Select"};const b=d.bind({});b.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const h=d.bind({});h.args={name:"required-select",required:!0,label:"Required Select"};const v=d.bind({});v.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const I=d.bind({});I.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const y=d.bind({});y.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const S=d.bind({});S.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const A=d.bind({});A.args={name:"with-prefix-icon-select",prefixIcon:ke.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};const x=d.bind({});x.args={name:"label-invisible-select",label:"Invisible label Select",labelVisible:!1};const k=d.bind({});k.args={name:"label-invisible-with-prefix-icon-select",label:"Invisible label with prefix icon Select",labelVisible:!1,prefixIcon:ke.ACCOUNT_CIRCLE_OUTLINE};const q=d.bind({});q.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2",disabled:!0}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}]};const C=d.bind({});C.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}],selectedItem:{itemId:"3",parentId:"group2"}};var B,L,E;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(E=(L=f.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var G,F,H;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(H=(F=g.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var z,j,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(K=(j=b.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var Q,X,Y;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Z,_;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(_=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,te,ne;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ae,de;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(de=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ie,le,re;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(re=(le=S.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ce,oe,me;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(me=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};var ue,pe,fe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(fe=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,be,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(he=(be=k.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ve,Ie,ye;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(ye=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Se,Ae,xe;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(xe=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};const ft=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon","LabelInvisible","LabelInvisibleWithPrefixIcon","WithOptGroups","WithOptGroupsAndSelectedItem"];export{I as CustomPlaceholder,f as Default,g as Dense,b as Disabled,v as Hint,x as LabelInvisible,k as LabelInvisibleWithPrefixIcon,h as Required,y as WithError,q as WithOptGroups,C as WithOptGroupsAndSelectedItem,A as WithPrefixIcon,S as WithSuccess,ft as __namedExportsOrder,pt as default};
