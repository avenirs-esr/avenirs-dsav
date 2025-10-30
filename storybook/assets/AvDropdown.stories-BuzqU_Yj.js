import{d as te,H as f,I,o as b,b as re,a as ae,F as oe,g as ie,E as se}from"./iframe-B0Y85Vql.js";import{A as S}from"./AvButton-Cn8hth_I.js";import{A as de}from"./AvPopover-Dan_TvRO.js";import{M as t}from"./icons-ubxugSKv.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-COwFhIF4.js";import"./string-BZgCOP9D.js";const me={class:"av-dropdown"},Q=te({__name:"AvDropdown",props:{items:{},triggerAriaLabel:{},triggerIcon:{default:()=>t.DOTS_VERTICAL},triggerLabel:{},triggerVariant:{default:"OUTLINED"},triggerSize:{default:"sm"},width:{default:"15rem"},padding:{default:"var(--spacing-xs)"},itemSize:{default:"sm"},itemTheme:{default:"SECONDARY"},itemIconScale:{default:1.3}},emits:["itemSelected"],setup(e,{emit:Z}){const ee=Z;function ne(v,A){ee("itemSelected",v),A()}return(v,A)=>(b(),f(de,{width:e.width,padding:e.padding},{trigger:I(({toggle:u})=>[se(S,{icon:e.triggerIcon,label:e.triggerLabel||e.triggerAriaLabel,"aria-label":e.triggerAriaLabel,variant:e.triggerVariant,size:e.triggerSize,onClick:u},null,8,["icon","label","aria-label","variant","size","onClick"])]),popover:I(({close:u})=>[re("div",me,[(b(!0),ae(oe,null,ie(e.items,r=>(b(),f(S,{key:r.name,class:"av-dropdown__menu-item",icon:r.icon,label:r.label,"aria-label":r.label,size:e.itemSize,theme:e.itemTheme,"icon-scale":e.itemIconScale,"no-radius":"",onClick:le=>ne(r.name,u)},null,8,["icon","label","aria-label","size","theme","icon-scale","onClick"]))),128))])]),_:1},8,["width","padding"]))}}),X=ce(Q,[["__scopeId","data-v-59887d17"]]);Q.__docgenInfo={exportName:"default",displayName:"AvDropdown",description:"",tags:{},props:[{name:"items",description:"Array of menu items to display. Each item must have `name` and `label`, with optional `icon`.",required:!0,type:{name:"Array",elements:[{name:"AvDropdownItem"}]}},{name:"triggerAriaLabel",description:"Accessibility label for the trigger button.",required:!0,type:{name:"string"}},{name:"triggerIcon",description:"Icon for the trigger button.",tags:{default:[{description:"MDI_ICONS.DOTS_VERTICAL",title:"default"}]},required:!1,type:{name:"string"}},{name:"triggerLabel",description:"Text label for the trigger button. If not provided, only the icon is shown.",required:!1,type:{name:"string"}},{name:"triggerVariant",description:"Variant of the trigger button.",tags:{default:[{description:"'OUTLINED'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"triggerSize",description:"Size of the trigger button.",tags:{default:[{description:"'sm'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"width",description:"Width of the dropdown menu.",tags:{default:[{description:"'15rem'",title:"default"}]},required:!1,type:{name:"string"}},{name:"padding",description:"Internal padding of the dropdown menu.",tags:{default:[{description:"'var(--spacing-xs)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"itemSize",description:"Size of menu item buttons.",tags:{default:[{description:"'sm'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"itemTheme",description:"Theme of menu item buttons.",tags:{default:[{description:"'SECONDARY'",title:"default"}]},required:!1,type:{name:"TSIndexedAccessType"}},{name:"itemIconScale",description:"Scale factor for menu item icons.",tags:{default:[{description:"1.3",title:"default"}]},required:!1,type:{name:"number"}}],events:[{name:"itemSelected",type:{names:["string"]},description:"Event emitted when a menu item is clicked.",properties:[{type:{names:["mixed"]},name:"itemName",description:"Name of the selected item."}],tags:[{title:"param",type:{name:"mixed"},name:"itemName",description:"Name of the selected item."}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/dropdowns/AvDropdown/AvDropdown.vue"]};const Se={title:"Components/Overlay/Dropdowns/AvDropdown",component:X,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSize:{control:{type:"select"},options:["sm","small","md","medium","lg","large","",void 0]},width:{control:"text"},padding:{control:"text"},itemSize:{control:{type:"select"},options:["sm","small","md","medium","lg","large","",void 0]},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:t.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:t.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:t.LINK}],triggerAriaLabel:"Actions menu",triggerIcon:t.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSize:"sm",width:"15rem",padding:"var(--spacing-xs)",itemSize:"sm",itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=e=>({components:{AvDropdown:X},setup(){return{args:e,MDI_ICONS:t}},template:'<AvDropdown v-bind="args" />'}),a=n.bind({});a.args={};const o=n.bind({});o.args={triggerLabel:"Actions"};const i=n.bind({});i.args={triggerVariant:"FLAT"};const s=n.bind({});s.args={triggerVariant:"DEFAULT"};const d=n.bind({});d.args={triggerSize:"lg"};const c=n.bind({});c.args={width:"20rem"};const m=n.bind({});m.args={itemSize:"md"};const l=n.bind({});l.args={itemTheme:"PRIMARY"};const p=n.bind({});p.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"}]};const g=n.bind({});g.args={items:[{name:"update",label:"Modifier ma compétence",icon:t.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:t.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:t.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var h,D,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(w=(D=a.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var T,y,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var N,C,O;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var E,x,_;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(_=(x=s.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var z,M,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var k,V,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var U,F,P;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(P=(F=m.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,B,Y;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(Y=(B=l.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var H,j,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(K=(j=p.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var $,G,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const he=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","SettingsMenu"];export{a as Default,s as DefaultTrigger,i as FlatTrigger,m as LargeItems,d as LargeTrigger,l as PrimaryItems,g as SettingsMenu,c as WideMenu,o as WithLabel,p as WithoutIcons,he as __namedExportsOrder,Se as default};
