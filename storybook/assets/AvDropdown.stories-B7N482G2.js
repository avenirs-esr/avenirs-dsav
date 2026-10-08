import{A as ne}from"./AvDropdown-C48kEbQk.js";import{M as e,C as I}from"./icons-Dyb4xUo3.js";import"./iframe-D4Ai9mOO.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-clQKuqJn.js";import"./AvTooltip-DKUUDH_R.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-D73z_sAu.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvPopover-Bba54X14.js";import"./focus-trap.esm-CPw4bcQR.js";const Ie={title:"Components/Overlay/Dropdowns/AvDropdown",component:ne,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSize:{control:"radio",options:["SM","MD","LG"]},width:{control:"text"},padding:{control:"text"},itemSize:{control:"radio",options:["SM","MD","LG"]},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,separatorBefore:!0}],triggerAriaLabel:"Actions menu",triggerIcon:e.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSize:"MD",width:"15rem",padding:"var(--spacing-xs)",itemSize:"MD",itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=re=>({components:{AvDropdown:ne},setup(){return{args:re,MDI_ICONS:e}},template:'<AvDropdown v-bind="args" />'}),r=n.bind({});r.args={};const a=n.bind({});a.args={triggerLabel:"Actions"};const t=n.bind({});t.args={triggerVariant:"FLAT"};const o=n.bind({});o.args={triggerVariant:"DEFAULT"};const s=n.bind({});s.args={triggerSize:"LG"};const i=n.bind({});i.args={width:"20rem"};const c=n.bind({});c.args={itemSize:"LG"};const l=n.bind({});l.args={itemTheme:"PRIMARY"};const p=n.bind({});p.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"},{name:"details",label:"Details",to:"/details"},{name:"external",label:"External",href:"https://example.com"}]};const d=n.bind({});d.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE,iconOnly:!0},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,iconOnly:!0},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,iconOnly:!0},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE,iconOnly:!0},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,iconOnly:!0}]};const m=n.bind({});m.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0}]};const g=n.bind({});g.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0,disabledTooltip:"This action is not available yet"},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0,disabledTooltip:"External navigation is disabled"}]};const u=n.bind({});u.args={items:[{name:"update",label:"Modifier ma compétence",icon:e.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:e.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:e.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};const be=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","IconOnlyItems","WithDisabledItem","WithDisabledTooltip","SettingsMenu"];var b,D,A;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(A=(D=r.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var S,v,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,L,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(h=(L=t.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var O,_,E;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var w,C,M;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var x,U,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(f=(U=i.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var R,y,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(V=(y=c.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var P,H,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(W=(H=l.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var F,z,Y;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(Y=(z=p.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var B,G,K;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var k,j,q;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};export{r as Default,o as DefaultTrigger,t as FlatTrigger,d as IconOnlyItems,c as LargeItems,s as LargeTrigger,l as PrimaryItems,u as SettingsMenu,i as WideMenu,m as WithDisabledItem,g as WithDisabledTooltip,a as WithLabel,p as WithoutIcons,be as __namedExportsOrder,Ie as default};
