import{A as k}from"./AvDropdown-5a7mZiPt.js";import{M as e}from"./icons-DKmRMgWU.js";import"./iframe-UbGyYdVx.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-DLdv4SCV.js";import"./AvIcon-CirFJexH.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./string-BZgCOP9D.js";import"./AvPopover-BQBuOat1.js";import"./focus-trap.esm-CPw4bcQR.js";const en={title:"Components/Overlay/Dropdowns/AvDropdown",component:k,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.LINK}],triggerAriaLabel:"Actions menu",triggerIcon:e.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=z=>({components:{AvDropdown:k},setup(){return{args:z,MDI_ICONS:e}},template:'<AvDropdown v-bind="args" />'}),r=n.bind({});r.args={};const a=n.bind({});a.args={triggerLabel:"Actions"};const o=n.bind({});o.args={triggerVariant:"FLAT"};const t=n.bind({});t.args={triggerVariant:"DEFAULT"};const s=n.bind({});s.args={triggerSmall:!1};const i=n.bind({});i.args={width:"20rem"};const p=n.bind({});p.args={itemSmall:!1};const c=n.bind({});c.args={itemTheme:"PRIMARY"};const m=n.bind({});m.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"}]};const d=n.bind({});d.args={items:[{name:"update",label:"Modifier ma compétence",icon:e.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:e.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:e.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var l,g,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
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
})`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,A,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var v,I,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(S=(I=o.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var w,h,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(T=(h=t.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var L,N,O;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(O=(N=s.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,C,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var f,E,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(y=(E=p.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var x,R,U;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var P,F,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(W=(F=m.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,Y,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(H=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};const rn=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","SettingsMenu"];export{r as Default,t as DefaultTrigger,o as FlatTrigger,p as LargeItems,s as LargeTrigger,c as PrimaryItems,d as SettingsMenu,i as WideMenu,a as WithLabel,m as WithoutIcons,rn as __namedExportsOrder,en as default};
