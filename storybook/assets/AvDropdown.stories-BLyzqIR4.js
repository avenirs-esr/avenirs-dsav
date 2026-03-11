import{A as K}from"./AvDropdown-BSEPRYYy.js";import{M as n}from"./icons-DKmRMgWU.js";import"./iframe-BVpoTUD1.js";import"./preload-helper-ILsKNznc.js";import"./AvButton-CmpEd4hl.js";import"./AvIcon-Dk9XZDVK.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./string-BZgCOP9D.js";import"./AvPopover-DhnD5J_m.js";import"./focus-trap.esm-CPw4bcQR.js";const te={title:"Components/Overlay/Dropdowns/AvDropdown",component:K,argTypes:{items:{control:"object"},triggerAriaLabel:{control:"text"},triggerIcon:{control:"text"},triggerLabel:{control:"text"},triggerVariant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},triggerSmall:{control:"boolean"},width:{control:"text"},padding:{control:"text"},itemSmall:{control:"boolean"},itemTheme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]},itemIconScale:{control:"number"}},args:{items:[{name:"edit",label:"Edit",icon:n.PENCIL_OUTLINE},{name:"delete",label:"Delete",icon:n.TRASH_CAN_OUTLINE},{name:"share",label:"Share",icon:n.LINK}],triggerAriaLabel:"Actions menu",triggerIcon:n.DOTS_VERTICAL,triggerLabel:void 0,triggerVariant:"OUTLINED",triggerSmall:!0,width:"15rem",padding:"var(--spacing-xs)",itemSmall:!0,itemTheme:"SECONDARY",itemIconScale:1.3},parameters:{docs:{description:{component:`<h1 class="n1">Dropdowns - <code>AvDropdown</code></h1>

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
</ul>`}}}},e=q=>({components:{AvDropdown:K},setup(){return{args:q,MDI_ICONS:n}},template:'<AvDropdown v-bind="args" />'}),r=e.bind({});r.args={};const a=e.bind({});a.args={triggerLabel:"Actions"};const o=e.bind({});o.args={triggerVariant:"FLAT"};const t=e.bind({});t.args={triggerVariant:"DEFAULT"};const s=e.bind({});s.args={triggerSmall:!1};const i=e.bind({});i.args={width:"20rem"};const p=e.bind({});p.args={itemSmall:!1};const c=e.bind({});c.args={itemTheme:"PRIMARY"};const m=e.bind({});m.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share"}]};const d=e.bind({});d.args={items:[{name:"edit",label:"Edit"},{name:"delete",label:"Delete"},{name:"share",label:"Share",disabled:!0}]};const l=e.bind({});l.args={items:[{name:"update",label:"Modifier ma compétence",icon:n.PENCIL_OUTLINE},{name:"deleteAssociation",label:"Supprimer une association",icon:n.TRASH_CAN_OUTLINE},{name:"delete",label:"Supprimer ma compétence",icon:n.TRASH_CAN_OUTLINE}],triggerAriaLabel:"Paramètres de la compétence déclarée"};var g,u,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var D,A,v;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(v=(A=a.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var I,S,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var h,T,L;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(L=(T=t.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var N,O,_;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(_=(O=s.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var C,M,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(E=(M=i.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var f,y,x;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var R,U,P;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(P=(U=c.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var W,F,V;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(V=(F=m.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var Y,H,k;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(k=(H=d.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var z,j,B;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(B=(j=l.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const se=["Default","WithLabel","FlatTrigger","DefaultTrigger","LargeTrigger","WideMenu","LargeItems","PrimaryItems","WithoutIcons","WithDisabledItem","SettingsMenu"];export{r as Default,t as DefaultTrigger,o as FlatTrigger,p as LargeItems,s as LargeTrigger,c as PrimaryItems,l as SettingsMenu,i as WideMenu,d as WithDisabledItem,a as WithLabel,m as WithoutIcons,se as __namedExportsOrder,te as default};
