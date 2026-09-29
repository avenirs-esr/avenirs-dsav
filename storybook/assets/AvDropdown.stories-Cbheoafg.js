import{A as ae}from"./AvDropdown-CT-Hw0ZF.js";import{M as e,C as A}from"./icons-CJ0cZR5z.js";import{S as r}from"./AvButton-DDqPHCEM.js";import{T as b}from"./theme.types-DKH7g3eH.js";import"./iframe-BTd5WVUI.js";import"./preload-helper-ILsKNznc.js";import"./AvPopover-BKmcRekV.js";import"./focus-trap.esm-CPw4bcQR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-tVqAVxBh.js";import"./AvIcon-Dy7uUo3w.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";const De={title:"Components/Overlay/Dropdowns/AvDropdown",component:ae,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSize:{control:"radio",options:Object.values(r)},width:{control:"text"},padding:{control:"text"},itemSize:{control:"radio",options:Object.values(r)},itemTheme:{control:{type:"radio"},options:[b.PRIMARY,b.SECONDARY]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE},{name:"details",label:"Details",to:"/details",icon:A.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,separatorBefore:!0}],triggerAriaLabel:"Actions menu",triggerIcon:e.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSize:r.MD,width:"15rem",padding:"var(--spacing-xs)",itemSize:r.MD,itemTheme:b.SECONDARY,itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},n=te=>({components:{AvDropdown:ae},setup(){return{args:te,MDI_ICONS:e}},template:'<AvDropdown v-bind="args" />'}),a=n.bind({});a.args={};const t=n.bind({});t.args={triggerLabel:"Actions"};const o=n.bind({});o.args={triggerVariant:"FLAT"};const s=n.bind({});s.args={triggerVariant:"DEFAULT"};const i=n.bind({});i.args={triggerSize:r.LG};const c=n.bind({});c.args={width:"20rem"};const l=n.bind({});l.args={itemSize:r.LG};const p=n.bind({});p.args={itemTheme:b.PRIMARY};const m=n.bind({});m.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"},{name:"details",label:"Details",to:"/details"},{name:"external",label:"External",href:"https://example.com"}]};const d=n.bind({});d.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE,iconOnly:!0},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE,iconOnly:!0},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,iconOnly:!0},{name:"details",label:"Details",to:"/details",icon:A.VISIBILITY_ON_OUTLINE,iconOnly:!0},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,iconOnly:!0}]};const g=n.bind({});g.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0},{name:"details",label:"Details",to:"/details",icon:A.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0}]};const u=n.bind({});u.args={items:[{name:"edit",label:"Edit",icon:e.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:e.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:e.SHARE_VARIANT_OUTLINE,disabled:!0,disabledTooltip:"This action is not available yet"},{name:"details",label:"Details",to:"/details",icon:A.VISIBILITY_ON_OUTLINE},{name:"external",label:"External",href:"https://example.com",icon:e.LINK,disabled:!0,disabledTooltip:"External navigation is disabled"}]};const I=n.bind({});I.args={items:[{name:"update",label:"Modifier ma compétence",icon:e.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:e.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:e.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var D,S,v;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var T,N,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(h=(N=t.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var O,L,_;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var E,w,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var x,f,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var U,R,y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var V,P,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(H=(P=l.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var W,z,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(Y=(z=p.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var B,F,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(K=(F=m.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var j,k,G;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(G=(k=d.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var q,J,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,re;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(re=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const Se=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","IconOnlyItems","WithDisabledItem","WithDisabledTooltip","SettingsMenu"];export{a as Default,s as DefaultTrigger,o as FlatTrigger,d as IconOnlyItems,l as LargeItems,i as LargeTrigger,p as PrimaryItems,I as SettingsMenu,c as WideMenu,g as WithDisabledItem,u as WithDisabledTooltip,t as WithLabel,m as WithoutIcons,Se as __namedExportsOrder,De as default};
