import{A as Q}from"./AvDropdown-CH1DXB3b.js";import{M as n,C as Z}from"./icons-Dt7Ye3mU.js";import"./iframe-Cx06bDHC.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-7n_6x9cn.js";import"./AvTooltip-DrVftJC7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BL9q2U2O.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvPopover-D2d6SdHV.js";import"./focus-trap.esm-CPw4bcQR.js";const de={title:"Components/Overlay/Dropdowns/AvDropdown",component:Q,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:n.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:n.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:n.LINK},{name:"details",label:"Details",to:"/details",icon:Z.VISIBILITY_ON_OUTLINE}],triggerAriaLabel:"Actions menu",triggerIcon:n.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},e=X=>({components:{AvDropdown:Q},setup(){return{args:X,MDI_ICONS:n}},template:'<AvDropdown v-bind="args" />'}),r=e.bind({});r.args={};const a=e.bind({});a.args={triggerLabel:"Actions"};const o=e.bind({});o.args={triggerVariant:"FLAT"};const t=e.bind({});t.args={triggerVariant:"DEFAULT"};const s=e.bind({});s.args={triggerSmall:!1};const i=e.bind({});i.args={width:"20rem"};const c=e.bind({});c.args={itemSmall:!1};const p=e.bind({});p.args={itemTheme:"PRIMARY"};const m=e.bind({});m.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"}]};const d=e.bind({});d.args={items:[{name:"edit",label:"Edit",icon:n.PENCIL_OUTLINE,iconOnly:!0},{name:"delete",label:"Delete",icon:n.TRASH_CAN_OUTLINE,iconOnly:!0},{name:"share",label:"Share",icon:n.LINK,iconOnly:!0}]};const l=e.bind({});l.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share",disabled:!0}]};const g=e.bind({});g.args={items:[{name:"update",label:"Modifier ma compétence",icon:n.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:n.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:n.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var u,b,I;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(I=(b=r.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var D,A,v;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(v=(A=a.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var S,w,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var N,O,T;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var L,_,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var E,M,f;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(f=(M=i.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var y,U,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(R=(U=c.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var x,P,W;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var F,V,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(Y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var H,k,z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var B,K,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(j=(K=l.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const le=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","IconOnlyItems","WithDisabledItem","SettingsMenu"];export{r as Default,t as DefaultTrigger,o as FlatTrigger,d as IconOnlyItems,c as LargeItems,s as LargeTrigger,p as PrimaryItems,g as SettingsMenu,i as WideMenu,l as WithDisabledItem,a as WithLabel,m as WithoutIcons,le as __namedExportsOrder,de as default};
