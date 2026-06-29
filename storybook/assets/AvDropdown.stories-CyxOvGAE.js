import{A as X}from"./AvDropdown-DtAYQOT7.js";import{M as e,C as u}from"./icons-CFe2UbDp.js";import"./iframe-CTj483ov.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-cB4bEPq-.js";import"./AvTooltip-GwHRwPfg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-D2M8Zp2e.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvPopover-XhCVrsAj.js";import"./focus-trap.esm-CPw4bcQR.js";const me={title:"Components/Overlay/Dropdowns/AvDropdown",component:X,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE},{name:"details",label:"Details",to:"/details",icon:u.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK}],triggerAriaLabel:"Actions menu",triggerIcon:e.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=Z=>({components:{AvDropdown:X},setup(){return{args:Z,MDI_ICONS:e}},template:'<AvDropdown v-bind="args" />'}),r=n.bind({});r.args={};const a=n.bind({});a.args={triggerLabel:"Actions"};const t=n.bind({});t.args={triggerVariant:"FLAT"};const o=n.bind({});o.args={triggerVariant:"DEFAULT"};const s=n.bind({});s.args={triggerSmall:!1};const i=n.bind({});i.args={width:"20rem"};const c=n.bind({});c.args={itemSmall:!1};const l=n.bind({});l.args={itemTheme:"PRIMARY"};const p=n.bind({});p.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"},{name:"details",label:"Details",to:"/details"},{name:"external",label:"External",href:"https://example.com"}]};const m=n.bind({});m.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE,iconOnly:!0},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,iconOnly:!0},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,iconOnly:!0},{name:"details",label:"Details",to:"/details",icon:u.VISIBILITY_ON_OUTLINE,iconOnly:!0},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,iconOnly:!0}]};const d=n.bind({});d.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0},{name:"details",label:"Details",to:"/details",icon:u.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0}]};const g=n.bind({});g.args={items:[{name:"update",label:"Modifier ma compétence",icon:e.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:e.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:e.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var I,b,A;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(A=(b=r.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var D,v,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,T,h;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var O,L,w;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var _,E,C;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var f,x,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var U,y,R;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(R=(y=c.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var V,P,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(H=(P=l.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var W,Y,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(F=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var B,K,k;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(k=(K=m.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var z,j,q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,J,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const de=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","IconOnlyItems","WithDisabledItem","SettingsMenu"];export{r as Default,o as DefaultTrigger,t as FlatTrigger,m as IconOnlyItems,c as LargeItems,s as LargeTrigger,l as PrimaryItems,g as SettingsMenu,i as WideMenu,d as WithDisabledItem,a as WithLabel,p as WithoutIcons,de as __namedExportsOrder,me as default};
