import{_ as we}from"./AvMessage-BxbPtyY0.js";import{u as De,aj as Ee,n as r,k as c,P as M,r as w,m as H,ag as t,ab as p,aq as We,K as Pe,ai as $e,j as o,$ as l,L as Le,F as R,a5 as W}from"./iframe-7czoOdiA.js";import{A as Be}from"./AvIcon-BCBwmoVs.js";import{A as Ge}from"./AvTooltip-CvY0R1mt.js";import{i as P,g as Fe}from"./utils-BIlgUrNJ.js";import{I as je,M as Ve}from"./icons-Dyb4xUo3.js";import{_ as Ke}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIconText-0Lzv4ZjO.js";import"./use-text-truncation-QYz865Fw.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";const ze={key:0,class:"av-select-prefix av-align-center av-col av-text-text2"},Ye=["for"],Je={key:0,class:"required"},Qe={key:1,class:"av-hint-text"},Xe=["id","value","name","disabled","aria-disabled","required","aria-required","aria-describedby"],Ze={disabled:"",value:"",hidden:""},_e=["label","data-testid"],et=["value","disabled","aria-disabled"],tt=["value","disabled","aria-disabled"],O=De({inheritAttrs:!1,__name:"AvSelect",props:Pe({required:{type:Boolean,default:!1},id:{},name:{default:""},hint:{default:""},label:{default:""},options:{default:()=>[]},successMessage:{default:""},errorMessage:{default:""},placeholder:{},dense:{type:Boolean,default:!1},prefixIcon:{},labelVisible:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},disabledTooltip:{}},{selectedItem:{default:()=>({itemId:""})},selectedItemModifiers:{}}),emits:["update:selectedItem"],setup(e){$e(n=>({fc90ef0e:t(He)}));const D=Ee(e,"selectedItem"),T=o(()=>String(D.value.itemId??"")),u=e.id??`select-${crypto.randomUUID()}`,qe=o(()=>{if(!T.value)return e.placeholder;const n=Re(T.value);return n?n.label:e.placeholder}),Ce=o(()=>({"--icon-path":`url(${je.MDI_KEYBOARD_ARROW_DOWN})`})),q=o(()=>e.errorMessage||e.successMessage),m=o(()=>e.errorMessage?"error":"success"),Me=o(()=>["av-label b2-regular",{"av-sr-only":!e.labelVisible}]),He=o(()=>e.labelVisible&&e.label?"69%":"50%");function U(n){return Array.isArray(n.children)}function Re(n){for(const a of e.options){if(U(a)&&a.children){const i=a.children.find(s=>String(s.id)===n);if(i)return i}if(String(a.id)===n)return a}}function Oe(n){for(const a of e.options){if(U(a)&&a.children){const i=a.children.find(s=>String(s.id)===n);if(i)return{itemId:i.id,parentId:a.id}}if(String(a.id)===n)return{itemId:a.id}}return{itemId:n}}function Te(n){const a=n.target.value;D.value=Oe(a)}return(n,a)=>{const i=we;return l(),r("div",{class:M({"av-select--dense":e.dense})},[c("div",{class:M(["av-select-group",{[`av-select-group--${t(m)}`]:t(q)}])},[c("div",{class:M(["av-select-control",{"av-select-control--disabled":e.disabled}])},[e.prefixIcon?(l(),r("div",ze,[w(Be,{name:e.prefixIcon,size:1.2},null,8,["name"])])):H("",!0),c("label",{class:M(t(Me)),for:t(u)},[c("span",null,p(e.label),1),e.required?(l(),r("span",Je," *")):H("",!0),e.hint?(l(),r("span",Qe,p(e.hint),1)):H("",!0)],10,Ye),w(Ge,{content:t(Fe)({content:t(qe),disabled:e.disabled,disabledTooltip:e.disabledTooltip}),disabled:!t(P)({disabled:e.disabled,disabledTooltip:e.disabledTooltip}),"force-focusable":t(P)({disabled:e.disabled,disabledTooltip:e.disabledTooltip})},{default:We(()=>[c("select",Le({id:t(u),value:t(T),class:[{[`av-select--${t(m)}`]:t(q),"av-select--with-prefix av-pl-xl":e.prefixIcon,"av-py-xxs":e.dense,"av-py-xs":!e.dense},"av-select b2-light av-w-full av-pr-xl av-pl-sm av-text-text2 av-radius-lg"],name:e.name||t(u),disabled:e.disabled,"aria-disabled":e.disabled,required:e.required,"aria-required":e.required,"aria-describedby":t(q)?`${t(u)}-${t(m)}`:void 0},n.$attrs,{style:t(Ce),onChange:Te}),[c("option",Ze,p(e.placeholder),1),(l(!0),r(R,null,W(e.options,(s,E)=>(l(),r(R,{key:E},[U(s)&&s.children?(l(),r(R,{key:0},[s.children.length>0?(l(),r("optgroup",{key:0,label:s.label,"data-testid":`select-optgroup-${s.id}`},[(l(!0),r(R,null,W(s.children,(C,Ue)=>(l(),r("option",{key:`${E}-${Ue}`,value:C.id,disabled:C.disabled,"aria-disabled":C.disabled},p(C.label),9,et))),128))],8,_e)):H("",!0)],64)):(l(),r("option",{key:1,value:s.id,disabled:s.disabled,"aria-disabled":s.disabled},p(s.label),9,tt))],64))),128))],16,Xe)]),_:1},8,["content","disabled","force-focusable"])],2),w(i,{"message-id":`${t(u)}-${t(m)}`,message:t(q),type:t(m)},null,8,["message-id","message","type"])],2)],2)}}}),xe=Ke(O,[["__scopeId","data-v-99b0840e"]]);O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:"default",displayName:"AvSelect",type:1,props:[{name:"required",global:!1,default:"false",description:"Indicates if the select is required.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"id",global:!1,description:"Unique id for the select. Used for the accessibility.",tags:[{name:"default",text:"`select-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"name",global:!1,default:'""',description:"Field name.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"hint",global:!1,default:'""',description:"Hint for guidance.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"label",global:!1,default:'""',description:"Select text label.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"options",global:!1,default:"[]",description:"Selectable options.",tags:[{name:"default",text:"[]"}],required:!1,type:"AvSelectOption[] | undefined",schema:{kind:"enum",type:"AvSelectOption[] | undefined",schema:["undefined",{kind:"array",type:"AvSelectOption[]"}]},declarations:[]},{name:"successMessage",global:!1,default:'""',description:"If set, display a success message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"errorMessage",global:!1,default:'""',description:"If set, display an error message.",tags:[{name:"default",text:"''"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"placeholder",global:!1,description:"Placeholder text.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"dense",global:!1,default:"false",description:"dense mode",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"prefixIcon",global:!1,description:"Prefix icon name (optional)",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"labelVisible",global:!1,default:"true",description:"Whether the label is visible",tags:[{name:"default",text:"true"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabled",global:!1,default:"false",description:"Indicates if the element is disabled.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"disabledTooltip",global:!1,description:"Tooltip text to display when the element is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"selectedItem",global:!1,default:'{ itemId: "" }',description:"",tags:[],required:!1,type:"AvSelectSelectedOption | undefined",schema:{kind:"enum",type:"AvSelectSelectedOption | undefined",schema:["undefined",{kind:"object",type:"AvSelectSelectedOption"}]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"update:selectedItem",description:"",tags:[],type:"[value: AvSelectSelectedOption]",signature:'(event: "update:selectedItem", value: AvSelectSelectedOption): void',schema:[{kind:"object",type:"AvSelectSelectedOption"}],declarations:[]}],slots:[],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/selects/AvSelect/AvSelect.vue"});const pt={title:"Components/Interaction/Selects/AvSelect",component:xe,tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},dense:{control:"boolean"},name:{control:"text"},hint:{control:"text"},label:{control:"text"},options:{type:{name:"{id: string | number | undefined, label: string, disabled?: boolean}[]",required:!0},control:!1},selectedItem:{control:!1},successMessage:{control:"text"},errorMessage:{control:"text"},placeholder:{control:"text",required:!0},prefixIcon:{control:"text"},labelVisible:{control:"boolean"}},args:{options:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"},{id:"3",label:"Choice 3",disabled:!0},{id:"4",label:"Choice 4"},{id:"5",label:"Choice 5"}],placeholder:"Placeholder",required:!1,disabled:!1,name:"select",hint:"",selectedItem:{itemId:""},label:"",successMessage:"",errorMessage:"",dense:!1,prefixIcon:"",labelVisible:!0},parameters:{docs:{description:{component:`<h1 class="n1">Drop-down list - <code>AvSelect</code></h1>

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

<p><span class="b2-regular">The <code>AvSelect</code> consists of a set of <code>&lt;option&gt;</code> within a <code>&lt;select&gt;</code>.</span></p>`}}}},d=e=>({components:{AvSelect:xe},setup(){return{args:e}},template:`
    <AvSelect v-bind="args" v-model:selected-item="args.selectedItem" />
    <p>Selected item: {{ args.selectedItem.itemId }}</p>
    <p>Selected item parent: {{ args.selectedItem.parentId }}</p>
  `}),g=d.bind({});g.args={name:"default-select",label:"Select"};const f=d.bind({});f.args={name:"dense-select",dense:!0,label:"Dense Select"};const b=d.bind({});b.args={name:"disabled-select",disabled:!0,label:"Disabled Select"};const h=d.bind({});h.args={name:"required-select",required:!0,label:"Required Select"};const v=d.bind({});v.args={name:"hint-select",hint:"This is a hint message.",label:"Hint Select"};const y=d.bind({});y.args={name:"custom-placeholder-select",placeholder:"Please select an option",label:"Custom placeholder Select"};const I=d.bind({});I.args={name:"with-error-select",errorMessage:"This field is required.",label:"With error Select"};const S=d.bind({});S.args={name:"with-success-select",successMessage:"Selection successful!",label:"With success Select"};const k=d.bind({});k.args={name:"with-prefix-icon-select",prefixIcon:Ve.ACCOUNT_CIRCLE_OUTLINE,label:"With prefix icon Select"};const A=d.bind({});A.args={name:"label-invisible-select",label:"Invisible label Select",labelVisible:!1};const N=d.bind({});N.args={name:"label-invisible-with-prefix-icon-select",label:"Invisible label with prefix icon Select",labelVisible:!1,prefixIcon:Ve.ACCOUNT_CIRCLE_OUTLINE};const V=d.bind({});V.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2",disabled:!0}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}]};const x=d.bind({});x.args={name:"with-optgroups-select",label:"Select with optgroups",options:[{id:"group1",label:"Group 1",children:[{id:"1",label:"Choice 1"},{id:"2",label:"Choice 2"}]},{id:"group2",label:"Group 2",children:[{id:"3",label:"Choice 3"},{id:"4",label:"Choice 4"}]},{id:"5",label:"Ungrouped Choice"}],selectedItem:{itemId:"3",parentId:"group2"}};const gt=["Default","Dense","Disabled","Required","Hint","CustomPlaceholder","WithError","WithSuccess","WithPrefixIcon","LabelInvisible","LabelInvisibleWithPrefixIcon","WithOptGroups","WithOptGroupsAndSelectedItem"];var $,L,B;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(B=(L=g.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var G,F,j;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(j=(F=f.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var K,z,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(Y=(z=b.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,_,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=(_=v.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,ne,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,de,re;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(re=(de=I.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};var le,ie,oe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(oe=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,ue,me;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(me=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,fe;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(fe=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,he,ve;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(ve=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,Ie,Se;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
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
})`,...(Se=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var ke,Ae,Ne;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Ne=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};export{y as CustomPlaceholder,g as Default,f as Dense,b as Disabled,v as Hint,A as LabelInvisible,N as LabelInvisibleWithPrefixIcon,h as Required,I as WithError,V as WithOptGroups,x as WithOptGroupsAndSelectedItem,k as WithPrefixIcon,S as WithSuccess,gt as __namedExportsOrder,pt as default};
