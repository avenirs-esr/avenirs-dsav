import{_ as $e}from"./AvMessage-BvrzWINP.js";import{m as ke,Z as Ne,b as c,g as l,d as o,y as D,k as $,f as O,W as t,R as u,a4 as Pe,v as Le,Y as Be,H as i,w as Re,F as T,M as P}from"./iframe-BXADJhGp.js";import{A as Ee}from"./AvIcon-D5dgGl8n.js";import{A as Ge}from"./AvTooltip-CAQz-A_Y.js";import{I as He,M as xe}from"./icons-Cm2C8MUK.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-kcSfza98.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const ze={key:0,class:"av-select-prefix av-align-center av-col av-text-text2"},Ye=["for"],Ke={key:0,class:"required"},Ze={key:1,class:"av-hint-text"},je=["id","value","name","disabled","aria-disabled","required","aria-required","aria-describedby"],Je={disabled:"",value:"",hidden:""},Qe=["label","data-testid"],Xe=["value","disabled","aria-disabled"],_e=["value","disabled","aria-disabled"],Ce=ke({inheritAttrs:!1,__name:"AvSelect",props:Le({required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{},labelVisible:{type:Boolean,default:!0}},{selectedItem:{default:()=>({itemId:""})},selectedItemModifiers:{}}),emits:["update:selectedItem"],setup(e){Be(s=>({v150f595c:t(De)}));const k=Ne(e,"selectedItem"),V=c(()=>String(k.value.itemId??"")),m=e.id??`select-${crypto.randomUUID()}`,Me=c(()=>{if(!V.value)return e.placeholder;const s=Oe(V.value);return s?s.label:e.placeholder}),we=c(()=>({"--icon-path":`url(${He.MDI_KEYBOARD_ARROW_DOWN})`})),w=c(()=>e.errorMessage||e.successMessage),p=c(()=>e.errorMessage?"error":"success"),We=c(()=>["av-label b2-regular",{"av-sr-only":!e.labelVisible}]),De=c(()=>e.labelVisible&&e.label?"69%":"50%");function U(s){return Array.isArray(s.children)}function Oe(s){for(const a of e.options){if(U(a)&&a.children){const d=a.children.find(n=>String(n.id)===s);if(d)return d}if(String(a.id)===s)return a}}function Te(s){for(const a of e.options){if(U(a)&&a.children){const d=a.children.find(n=>String(n.id)===s);if(d)return{itemId:d.id,parentId:a.id}}if(String(a.id)===s)return{itemId:a.id}}return{itemId:s}}function Ve(s){const a=s.target.value;k.value=Te(a)}return(s,a)=>{const d=$e;return i(),l("div",{class:D({"av-select--dense":e.dense})},[o("div",{class:D(["av-select-group",{[`av-select-group--${t(p)}`]:t(w)}])},[o("div",{class:D(["av-select-control",{"av-select-control--disabled":e.disabled}])},[e.prefixIcon?(i(),l("div",ze,[$(Ee,{name:e.prefixIcon,size:1.2},null,8,["name"])])):O("",!0),o("label",{class:D(t(We)),for:t(m)},[o("span",null,u(e.label),1),e.required?(i(),l("span",Ke," *")):O("",!0),e.hint?(i(),l("span",Ze,u(e.hint),1)):O("",!0)],10,Ye),$(Ge,{content:t(Me)},{default:Pe(()=>[o("select",Re({id:t(m),value:t(V),class:[{[`av-select--${t(p)}`]:t(w),"av-select--with-prefix av-pl-xl":e.prefixIcon,"av-py-xxs":e.dense,"av-py-xs":!e.dense},"av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"],name:e.name||t(m),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,"aria-describedby":t(w)?`${t(m)}-${t(p)}`:void 0},s.$attrs,{style:t(we),onChange:Ve}),[o("option",Je,u(e.placeholder),1),(i(!0),l(T,null,P(e.options,(n,N)=>(i(),l(T,{key:N},[U(n)&&n.children?(i(),l(T,{key:0},[n.children.length>0?(i(),l("optgroup",{key:0,label:n.label,"data-testid":`select-optgroup-${n.id}`},[(i(!0),l(T,null,P(n.children,(W,Ue)=>(i(),l("option",{key:`${N}-${Ue}`,value:W.id,disabled:W.disabled,"aria-disabled":W.disabled},u(W.label),9,Xe))),128))],8,Qe)):O("",!0)],64)):(i(),l("option",{key:1,value:n.id,disabled:n.disabled,"aria-disabled":n.disabled},u(n.label),9,_e))],64))),128))],16,je)]),_:1},8,["content"])],2),$(d,{"message-id":`${t(m)}-${t(p)}`,message:t(w),type:t(p)},null,8,["message-id","message","type"])],2)],2)}}}),qe=Fe(Ce,[["__scopeId","data-v-36e3f337"]]);Ce.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:"AvSelectOption"}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"prefixIcon",description:"Prefix icon name (optional)",required:!1,type:{name:"string"}},{name:"labelVisible",description:"Whether the label is visible",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const ct={title:"Components/Interaction/Selects/AvSelect",component:qe,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},label:{control:"text"},options:{type:{name:"{id: string | number | undefined, label: string, disabled?: boolean}[]",required:!0},control:!1},selectedItem:{control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"},labelVisible:{control:"boolean"}},args:{options:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"},{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"},{id:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",selectedItem:{itemId:""},label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:"",labelVisible:!0},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},r=e=>({components:{AvSelect:qe},setup(){return{args:e}},template:`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  `}),g=r.bind({});g.args={name:"default-select",label:"Select"};const b=r.bind({});b.args={name:"dense-select",dense:!0,label:"Dense Select"};const f=r.bind({});f.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const I=r.bind({});I.args={name:"required-select",required:!0,label:"Required Select"};const v=r.bind({});v.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const h=r.bind({});h.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const S=r.bind({});S.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const A=r.bind({});A.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const y=r.bind({});y.args={name:"with-prefix-icon-select",prefixIcon:xe.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};const x=r.bind({});x.args={name:"label-invisible-select",label:"Invisible label Select",labelVisible:!1};const C=r.bind({});C.args={name:"label-invisible-with-prefix-icon-select",label:"Invisible label with prefix icon Select",labelVisible:!1,prefixIcon:xe.ACCOUNT_CIRCLE_OUTLINE};const q=r.bind({});q.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}]};const M=r.bind({});M.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}],selectedItem:{itemId:"3",parentId:"group2"}};var L,B,R;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var E,G,H;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var F,z,Y;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(Y=(z=f.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var K,Z,j;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(j=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var _,ee,te;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ne;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,le,ie;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(ie=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,oe;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(oe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var me,pe,ue;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ue=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,be,fe;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(fe=(be=C.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ie,ve,he;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
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
})`,...(he=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Se,Ae,ye;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(ye=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:ye.source}}};const ot=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon","LabelInvisible","LabelInvisibleWithPrefixIcon","WithOptGroups","WithOptGroupsAndSelectedItem"];export{h as CustomPlaceholder,g as Default,b as Dense,f as Disabled,v as Hint,x as LabelInvisible,C as LabelInvisibleWithPrefixIcon,I as Required,S as WithError,q as WithOptGroups,M as WithOptGroupsAndSelectedItem,y as WithPrefixIcon,A as WithSuccess,ot as __namedExportsOrder,ct as default};
