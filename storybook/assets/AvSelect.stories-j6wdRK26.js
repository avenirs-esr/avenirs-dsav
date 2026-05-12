import{_ as xe}from"./AvMessage-BhrI0dYy.js";import{d as qe,q as Ce,s as Me,c as p,e as r,l as c,f as U,n as $,j as D,u as t,O as u,m as De,R as w,S as N,g as l}from"./iframe-Cw2SG8Ur.js";import{A as we}from"./AvIcon-BYroXGZo.js";import{b as Oe,M as We}from"./icons-DyiNu08W.js";import{_ as $e}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-cE-7QjqW.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const ke={key:0,class:"av-select-prefix av-align-center av-col av-text-text2"},Te=["for"],Ue={key:0,class:"required"},Ne={key:1,class:"av-hint-text"},Be=["id","value","name","disabled","aria-disabled","required","aria-required","aria-describedby","title"],Ge={disabled:"",value:"",hidden:""},Pe=["label","data-testid"],Re=["value","disabled","aria-disabled"],Ee=["value","disabled","aria-disabled"],be=qe({__name:"AvSelect",props:Ce({required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{}},{selectedItem:{default:()=>({itemId:""})},selectedItemModifiers:{}}),emits:["update:selectedItem"],setup(e){const k=Me(e,"selectedItem"),O=p(()=>String(k.value.itemId??"")),o=e.id??`select-${crypto.randomUUID()}`,he=p(()=>{if(!O.value)return e.placeholder;const s=ve(O.value);return s?s.label:e.placeholder}),Ie=p(()=>({"--icon-path":`url(${Oe.MDI_KEYBOARD_ARROW_DOWN})`})),C=p(()=>e.errorMessage||e.successMessage),m=p(()=>e.errorMessage?"error":"success");function W(s){return Array.isArray(s.children)}function ve(s){for(const a of e.options){if(W(a)&&a.children){const i=a.children.find(n=>String(n.id)===s);if(i)return i}if(String(a.id)===s)return a}}function Se(s){for(const a of e.options){if(W(a)&&a.children){const i=a.children.find(n=>String(n.id)===s);if(i)return{itemId:i.id,parentId:a.id}}if(String(a.id)===s)return{itemId:a.id}}return{itemId:s}}function ye(s){const a=s.target.value;k.value=Se(a)}return(s,a)=>{const i=xe;return l(),r("div",{class:$({"av-select--dense":e.dense})},[c("div",{class:$(["av-select-group",{[`av-select-group--${t(m)}`]:t(C)}])},[c("div",{class:$(["av-select-control",{"av-select-control--disabled":e.disabled}])},[e.prefixIcon?(l(),r("div",ke,[U(we,{name:e.prefixIcon,size:1.2},null,8,["name"])])):D("",!0),c("label",{class:"av-label b2-light",for:t(o)},[c("span",null,u(e.label),1),e.required?(l(),r("span",Ue," *")):D("",!0),e.hint?(l(),r("span",Ne,u(e.hint),1)):D("",!0)],8,Te),c("select",De({id:t(o),value:t(O),class:[{[`av-select--${t(m)}`]:t(C),"av-select--with-prefix av-pl-xl":e.prefixIcon,"av-py-xxs":e.dense,"av-py-xs":!e.dense},"av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"],name:e.name||t(o),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,"aria-describedby":t(C)?`${t(o)}-${t(m)}`:void 0,title:t(he)},s.$attrs,{style:t(Ie),onChange:ye}),[c("option",Ge,u(e.placeholder),1),(l(!0),r(w,null,N(e.options,(n,T)=>(l(),r(w,{key:T},[W(n)&&n.children?(l(),r(w,{key:0},[n.children.length>0?(l(),r("optgroup",{key:0,label:n.label,"data-testid":`select-optgroup-${n.id}`},[(l(!0),r(w,null,N(n.children,(M,Ae)=>(l(),r("option",{key:`${T}-${Ae}`,value:M.id,disabled:M.disabled,"aria-disabled":M.disabled},u(M.label),9,Re))),128))],8,Pe)):D("",!0)],64)):(l(),r("option",{key:1,value:n.id,disabled:n.disabled,"aria-disabled":n.disabled},u(n.label),9,Ee))],64))),128))],16,Be)],2),U(i,{"message-id":`${t(o)}-${t(m)}`,message:t(C),type:t(m)},null,8,["message-id","message","type"])],2)],2)}}}),fe=$e(be,[["__scopeId","data-v-574bbbf6"]]);be.__docgenInfo={exportName:"default",displayName:"AvSelect",description:"",tags:{},props:[{name:"required",description:"Indicates if the select is required.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"disabled",description:"Indicated if the select is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"id",description:"Unique id for the select. Used for the accessibility.",tags:{default:[{description:"`select-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"name",description:"Field name.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"hint",description:"Hint for guidance.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"label",description:"Select text label.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"options",description:"Selectable options.",tags:{default:[{description:"[]",title:"default"}]},required:!1,type:{name:"Array",elements:[{name:"AvSelectOption"}]}},{name:"successMessage",description:"If set, display a success message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"errorMessage",description:"If set, display an error message.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"placeholder",description:"Placeholder text.",required:!0,type:{name:"string"}},{name:"dense",description:"dense mode",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"prefixIcon",description:"Prefix icon name (optional)",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"]};const Je={title:"Components/Interaction/Selects/AvSelect",component:fe,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},label:{control:"text"},options:{type:{name:"{id: string | number | undefined, label: string, disabled?: boolean}[]",required:!0},control:!1},selectedItem:{control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"}},args:{options:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"},{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"},{id:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",selectedItem:{itemId:""},label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:""},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},d=e=>({components:{AvSelect:fe},setup(){return{args:e}},template:`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  `}),g=d.bind({});g.args={name:"default-select",label:"Select"};const b=d.bind({});b.args={name:"dense-select",dense:!0,label:"Dense Select"};const f=d.bind({});f.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const h=d.bind({});h.args={name:"required-select",required:!0,label:"Required Select"};const I=d.bind({});I.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const v=d.bind({});v.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const S=d.bind({});S.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const y=d.bind({});y.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const A=d.bind({});A.args={name:"with-prefix-icon-select",prefixIcon:We.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};const x=d.bind({});x.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}]};const q=d.bind({});q.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}],selectedItem:{itemId:"3",parentId:"group2"}};var B,G,P;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(P=(G=g.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var R,E,V;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(V=(E=b.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var H,L,z;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(z=(L=f.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var F,j,K;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(K=(j=h.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var Y,J,Q;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,_;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(_=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,te,se;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,ne,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(re=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,de,ie;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(ie=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,oe,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(me=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:me.source}}};var pe,ue,ge;q.parameters={...q.parameters,docs:{...(pe=q.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const Qe=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon","WithOptGroups","WithOptGroupsAndSelectedItem"];export{v as CustomPlaceholder,g as Default,b as Dense,f as Disabled,I as Hint,h as Required,S as WithError,x as WithOptGroups,q as WithOptGroupsAndSelectedItem,A as WithPrefixIcon,y as WithSuccess,Qe as __namedExportsOrder,Je as default};
