import{j as te,E as A,G as I,m as b,v as re,l as ae,F as oe,B as se,x as ie}from"./iframe-CVcss3L0.js";import{A as D}from"./AvButton-DrwKpkct.js";import{A as le}from"./AvPopover-F83fxz56.js";import{M as t}from"./icons-ByBBphah.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-BVMot_6O.js";import"./string-BZgCOP9D.js";import"./focus-trap.esm-CPw4bcQR.js";const ce={class:"av-dropdown"},Q=te({__name:"AvDropdown",props:{items:{},triggerAriaLabel:{},triggerIcon:{default:()=>t.DOTS_VERTICAL},triggerLabel:{},triggerVariant:{default:"OUTLINED"},triggerSmall:{type:Boolean,default:!0},width:{default:"15rem"},padding:{default:"var(--spacing-xs)"},itemSmall:{type:Boolean,default:!0},itemTheme:{default:"SECONDARY"},itemIconScale:{default:1.3}},emits:["itemSelected"],setup(e,{emit:Z}){const ee=Z;function ne(v,f){ee("itemSelected",v),f()}return(v,f)=>(b(),A(le,{width:e.width,padding:e.padding},{trigger:I(({toggle:u})=>[ie(D,{icon:e.triggerIcon,label:e.triggerLabel||e.triggerAriaLabel,"aria-label":e.triggerAriaLabel,variant:e.triggerVariant,small:e.triggerSmall,"icon-only":!!e.triggerAriaLabel&&!e.triggerLabel,onClick:u},null,8,["icon","label","aria-label","variant","small","icon-only","onClick"])]),popover:I(({close:u})=>[re("div",ce,[(b(!0),ae(oe,null,se(e.items,r=>(b(),A(D,{key:r.name,class:"av-dropdown__menu-item",icon:r.icon,label:r.label,"aria-label":r.label,small:e.itemSmall,theme:e.itemTheme,"icon-scale":e.itemIconScale,"no-radius":"",onClick:me=>ne(r.name,u)},null,8,["icon","label","aria-label","small","theme","icon-scale","onClick"]))),128))])]),_:1},8,["width","padding"]))}}),X=de(Q,[["__scopeId","data-v-152df648"]]);Q.__docgenInfo={exportName:"default",displayName:"AvDropdown",description:"",tags:{},props:[{name:"items",description:"Array of menu items to display. Each item must have `name` and `label`, with optional `icon`.",required:!0,type:{name:"Array",elements:[{name:"AvDropdownItem"}]}},{name:"triggerAriaLabel",description:"Accessibility label for the trigger button.",required:!0,type:{name:"string"}},{name:"triggerIcon",description:"Icon for the trigger button.",tags:{default:[{description:"MDI_ICONS.DOTS_VERTICAL",title:"default"}]},required:!1,type:{name:"string"}},{name:"triggerLabel",description:"Text label for the trigger button. If not provided, only the icon is shown.",required:!1,type:{name:"string"}},{name:"triggerVariant",description:"Variant of the trigger button.",tags:{default:[{description:"'OUTLINED'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"triggerSmall",description:"Display the trigger button in small size (`true`) or default size (`false`).",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"width",description:"Width of the dropdown menu.",tags:{default:[{description:"'15rem'",title:"default"}]},required:!1,type:{name:"string"}},{name:"padding",description:"Internal padding of the dropdown menu.",tags:{default:[{description:"'var(--spacing-xs)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"itemSmall",description:"Display menu item buttons in small size (`true`) or default size (`false`).",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"itemTheme",description:"Theme of menu item buttons.",tags:{default:[{description:"'SECONDARY'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"itemIconScale",description:"Scale factor for menu item icons.",tags:{default:[{description:"1.3",title:"default"}]},required:!1,type:{name:"number"}}],events:[{name:"itemSelected",type:{names:["string"]},description:"Event emitted when a menu item is clicked.",properties:[{type:{names:["mixed"]},name:"itemName",description:"Name of the selected item."}],tags:[{title:"param",type:{name:"mixed"},name:"itemName",description:"Name of the selected item."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/dropdowns/AvDropdown/AvDropdown.vue"]};const he={title:"Components/Overlay/Dropdowns/AvDropdown",component:X,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:t.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:t.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:t.LINK}],triggerAriaLabel:"Actions menu",triggerIcon:t.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvDropdown</code> is a contextual menu component that displays a list of actionable items in a popover.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvDropdown</code> is built on top of <code>AvPopover</code> and <code>AvButton</code> components,
    providing a convenient way to create dropdown menus with customizable trigger buttons and menu items.
  </span>
</p>

<p>
  <span class="b2-regular">
    Each menu item can have an optional icon and emits an event when clicked, making it perfect for settings menus,
    action lists, or contextual operations.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The dropdown consists of:</span></p>

<ul>
  <li>
    <span class="b2-regular">
      A trigger button - mandatory, configured via <code>trigger*</code> props;
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A list of menu items - mandatory, defined via the <code>items</code> prop, each with a name, label, and optional icon;
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A popover container - automatically managed, with customizable width and padding.
    </span>
  </li>
</ul>`}}}},n=e=>({components:{AvDropdown:X},setup(){return{args:e,MDI_ICONS:t}},template:'<AvDropdown v-bind="args" />'}),a=n.bind({});a.args={};const o=n.bind({});o.args={triggerLabel:"Actions"};const s=n.bind({});s.args={triggerVariant:"FLAT"};const i=n.bind({});i.args={triggerVariant:"DEFAULT"};const l=n.bind({});l.args={triggerSmall:!1};const d=n.bind({});d.args={width:"20rem"};const c=n.bind({});c.args={itemSmall:!1};const m=n.bind({});m.args={itemTheme:"PRIMARY"};const p=n.bind({});p.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"}]};const g=n.bind({});g.args={items:[{name:"update",label:"Modifier ma compétence",icon:t.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:t.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:t.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var h,S,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,y,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var N,C,O;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(O=(C=s.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var E,x,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var _,R,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var V,q,U;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(U=(q=d.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var B,F,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,z,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(Y=(z=m.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var H,j,G;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(G=(j=p.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var K,$,J;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvDropdown
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`<AvDropdown v-bind="args" />\`
})`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const Se=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","SettingsMenu"];export{a as Default,i as DefaultTrigger,s as FlatTrigger,c as LargeItems,l as LargeTrigger,m as PrimaryItems,g as SettingsMenu,d as WideMenu,o as WithLabel,p as WithoutIcons,Se as __namedExportsOrder,he as default};
