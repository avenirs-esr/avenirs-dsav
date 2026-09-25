import{A as re}from"./AvDropdown-mS4p9iIO.js";import{M as e,C as b}from"./icons-CS5vb1aa.js";import{T as I}from"./theme.types-DKH7g3eH.js";import"./iframe-T1PdNDhM.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-B38MxCq9.js";import"./AvTooltip-DVbJ7XaX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-sXUIOxgk.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvPopover-JVV5mlCF.js";import"./focus-trap.esm-CPw4bcQR.js";const Ae={title:"Components/Overlay/Dropdowns/AvDropdown",component:re,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:[I.PRIMARY,I.SECONDARY]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE},{name:"details",label:"Details",to:"/details",icon:b.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,separatorBefore:!0}],triggerAriaLabel:"Actions menu",triggerIcon:e.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:I.SECONDARY,itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=ae=>({components:{AvDropdown:re},setup(){return{args:ae,MDI_ICONS:e}},template:'<AvDropdown v-bind="args" />'}),r=n.bind({});r.args={};const a=n.bind({});a.args={triggerLabel:"Actions"};const t=n.bind({});t.args={triggerVariant:"FLAT"};const o=n.bind({});o.args={triggerVariant:"DEFAULT"};const s=n.bind({});s.args={triggerSmall:!1};const i=n.bind({});i.args={width:"20rem"};const l=n.bind({});l.args={itemSmall:!1};const c=n.bind({});c.args={itemTheme:I.PRIMARY};const p=n.bind({});p.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"},{name:"details",label:"Details",to:"/details"},{name:"external",label:"External",href:"https://example.com"}]};const m=n.bind({});m.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE,iconOnly:!0},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,iconOnly:!0},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,iconOnly:!0},{name:"details",label:"Details",to:"/details",icon:b.VISIBILITY_ON_OUTLINE,iconOnly:!0},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,iconOnly:!0}]};const d=n.bind({});d.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0},{name:"details",label:"Details",to:"/details",icon:b.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0}]};const g=n.bind({});g.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0,disabledTooltip:"This action is not available yet"},{name:"details",label:"Details",to:"/details",icon:b.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0,disabledTooltip:"External navigation is disabled"}]};const u=n.bind({});u.args={items:[{name:"update",label:"Modifier ma compétence",icon:e.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:e.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:e.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var A,D,S;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var v,T,N;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(N=(T=a.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var h,O,L;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(L=(O=t.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var _,E,w;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var C,x,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var U,M,R;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var y,V,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(P=(V=l.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var H,W,Y;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var B,F,K;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(K=(F=p.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var k,z,j;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(j=(z=m.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var q,G,J;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ne;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(ne=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const De=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","IconOnlyItems","WithDisabledItem","WithDisabledTooltip","SettingsMenu"];export{r as Default,o as DefaultTrigger,t as FlatTrigger,m as IconOnlyItems,l as LargeItems,s as LargeTrigger,c as PrimaryItems,u as SettingsMenu,i as WideMenu,d as WithDisabledItem,g as WithDisabledTooltip,a as WithLabel,p as WithoutIcons,De as __namedExportsOrder,Ae as default};
