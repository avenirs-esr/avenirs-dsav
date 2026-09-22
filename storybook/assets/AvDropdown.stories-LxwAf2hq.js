import{A as ne}from"./AvDropdown-BIleeWky.js";import{M as e,C as I}from"./icons-CS5vb1aa.js";import"./iframe-COD2OEwc.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-DZt0R5l_.js";import"./AvTooltip-B5Ot1NRJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CuU3bjIP.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvPopover-CI4IexxU.js";import"./focus-trap.esm-CPw4bcQR.js";const Ie={title:"Components/Overlay/Dropdowns/AvDropdown",component:ne,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK}],triggerAriaLabel:"Actions menu",triggerIcon:e.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=re=>({components:{AvDropdown:ne},setup(){return{args:re,MDI_ICONS:e}},template:'<AvDropdown v-bind="args" />'}),r=n.bind({});r.args={};const a=n.bind({});a.args={triggerLabel:"Actions"};const t=n.bind({});t.args={triggerVariant:"FLAT"};const o=n.bind({});o.args={triggerVariant:"DEFAULT"};const s=n.bind({});s.args={triggerSmall:!1};const i=n.bind({});i.args={width:"20rem"};const l=n.bind({});l.args={itemSmall:!1};const c=n.bind({});c.args={itemTheme:"PRIMARY"};const p=n.bind({});p.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"},{name:"details",label:"Details",to:"/details"},{name:"external",label:"External",href:"https://example.com"}]};const m=n.bind({});m.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE,iconOnly:!0},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,iconOnly:!0},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,iconOnly:!0},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE,iconOnly:!0},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,iconOnly:!0}]};const d=n.bind({});d.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0}]};const g=n.bind({});g.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0,disabledTooltip:"This action is not available yet"},{name:"details",label:"Details",to:"/details",icon:I.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0,disabledTooltip:"External navigation is disabled"}]};const u=n.bind({});u.args={items:[{name:"update",label:"Modifier ma compétence",icon:e.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:e.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:e.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var b,A,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(D=(A=r.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var S,v,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,h,O;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(O=(h=t.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var L,_,E;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var w,C,x;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var U,f,M;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var R,y,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(V=(y=l.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var P,H,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(W=(H=c.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Y,F,B;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var K,k,z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var j,q,G;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const be=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","IconOnlyItems","WithDisabledItem","WithDisabledTooltip","SettingsMenu"];export{r as Default,o as DefaultTrigger,t as FlatTrigger,m as IconOnlyItems,l as LargeItems,s as LargeTrigger,c as PrimaryItems,u as SettingsMenu,i as WideMenu,d as WithDisabledItem,g as WithDisabledTooltip,a as WithLabel,p as WithoutIcons,be as __namedExportsOrder,Ie as default};
