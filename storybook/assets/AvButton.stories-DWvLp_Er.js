import{A as Nn}from"./AvButton-DtR1J8Qh.js";import{a as Un,i as wn}from"./storybook-DkVOMRQZ.js";import"./AvIcon-b0dnXlkW.js";import"./iframe-CafUQXUF.js";import"./preload-helper-ILsKNznc.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-DyiNu08W.js";import"./string-BZgCOP9D.js";const Gn={title:"Components/Interaction/Buttons/AvButton",component:Nn,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:wn,mapping:Un},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED"]},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY","TERTIARY"]},small:{control:"boolean"},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},noRadius:{control:"boolean"},disabled:{control:"boolean"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:"PRIMARY",small:!1,iconOnly:!1,isLoading:!1,noRadius:!1,disabled:!1},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvButton</code> is an interaction element with an interface enabling the user to perform an action.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvButton</code> is an elegant, reusable Vue component designed to simplify the creation of custom buttons.
    It features adjustable sizes (small and default), an optional icon and a click manager.
    It's easy to use, with the flexibility to adapt to different contexts.
  </span>
</p>

<p>
  <span class="b2-regular">
    The button only allow two variants (<code>DEFAULT</code> without border and <code>OUTLINED</code> with border)
    and three themes (<code>PRIMARY</code> blue, <code>SECONDARY</code> grey and <code>TERTIARY</code> white).
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">Buttons consist of :</span></p>

<ul>
  <li>
    <span class="b2-regular">
      A label - mandatory, using the <code>label</code> prop, enables label display when <code>iconOnly</code> is <code>false</code>,
      also enables connection to <code>title</code> and <code>aria-label</code>;
    </span>
  </li>
  <li>
    <span class="b2-regular">
      An icon, which can be modified (see available icons) - optional.
    </span>
  </li>
</ul>`}}}},n=Yn=>({components:{AvButton:Nn},setup(){return{args:Yn}},template:'<AvButton v-bind="args" />'}),t=n.bind({});t.args={};const s=n.bind({});s.args={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const o=n.bind({});o.args={isLoading:!0};const c=n.bind({});c.args={disabled:!0};const i=n.bind({});i.args={noRadius:!0};const d=n.bind({});d.args={theme:"SECONDARY"};const e=n.bind({});e.args={theme:"TERTIARY"};e.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const u=n.bind({});u.args={variant:"OUTLINED"};const p=n.bind({});p.args={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const l=n.bind({});l.args={variant:"OUTLINED",isLoading:!0};const m=n.bind({});m.args={variant:"OUTLINED",disabled:!0};const g=n.bind({});g.args={variant:"OUTLINED",noRadius:!0};const v=n.bind({});v.args={variant:"OUTLINED",theme:"SECONDARY"};const a=n.bind({});a.args={variant:"OUTLINED",theme:"TERTIARY"};a.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const b=n.bind({});b.args={variant:"FLAT"};const A=n.bind({});A.args={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const B=n.bind({});B.args={variant:"FLAT",isLoading:!0};const O=n.bind({});O.args={variant:"FLAT",disabled:!0};const y=n.bind({});y.args={variant:"FLAT",noRadius:!0};const D=n.bind({});D.args={variant:"FLAT",theme:"SECONDARY"};const r=n.bind({});r.args={variant:"FLAT",theme:"TERTIARY"};r.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];var T,S,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,R,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(L=(R=s.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var I,k,F;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(F=(k=o.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var E,N,Y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var U,w,x;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,M,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var _,j,q;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(q=(j=e.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,V,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,nn;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(nn=($=m.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};var en,an,rn;g.parameters={...g.parameters,docs:{...(en=g.parameters)==null?void 0:en.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(rn=(an=g.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var tn,sn,on;v.parameters={...v.parameters,docs:{...(tn=v.parameters)==null?void 0:tn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(on=(sn=v.parameters)==null?void 0:sn.docs)==null?void 0:on.source}}};var cn,dn,un;a.parameters={...a.parameters,docs:{...(cn=a.parameters)==null?void 0:cn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(un=(dn=a.parameters)==null?void 0:dn.docs)==null?void 0:un.source}}};var pn,ln,mn;b.parameters={...b.parameters,docs:{...(pn=b.parameters)==null?void 0:pn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(mn=(ln=b.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};var gn,vn,bn;A.parameters={...A.parameters,docs:{...(gn=A.parameters)==null?void 0:gn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(bn=(vn=A.parameters)==null?void 0:vn.docs)==null?void 0:bn.source}}};var An,Bn,On;B.parameters={...B.parameters,docs:{...(An=B.parameters)==null?void 0:An.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(On=(Bn=B.parameters)==null?void 0:Bn.docs)==null?void 0:On.source}}};var yn,Dn,Tn;O.parameters={...O.parameters,docs:{...(yn=O.parameters)==null?void 0:yn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Tn=(Dn=O.parameters)==null?void 0:Dn.docs)==null?void 0:Tn.source}}};var Sn,hn,fn;y.parameters={...y.parameters,docs:{...(Sn=y.parameters)==null?void 0:Sn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(fn=(hn=y.parameters)==null?void 0:hn.docs)==null?void 0:fn.source}}};var Rn,Ln,In;D.parameters={...D.parameters,docs:{...(Rn=D.parameters)==null?void 0:Rn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(In=(Ln=D.parameters)==null?void 0:Ln.docs)==null?void 0:In.source}}};var kn,Fn,En;r.parameters={...r.parameters,docs:{...(kn=r.parameters)==null?void 0:kn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(En=(Fn=r.parameters)==null?void 0:Fn.docs)==null?void 0:En.source}}};const Hn=["Default","DefaultIconOnly","DefaultLoading","DefaultDisabled","DefaultNoRadius","DefaultSecondary","TertiaryOnDarkBackground","Outlined","OutlinedIconOnly","OutlinedLoading","OutlinedDisabled","OutlinedNoRadius","OutlinedSecondary","OutlinedTertiaryOnDarkBackground","Flat","FlatIconOnly","FlatLoading","FlatDisabled","FlatNoRadius","FlatSecondary","FlatTertiaryOnDarkBackground"];export{t as Default,c as DefaultDisabled,s as DefaultIconOnly,o as DefaultLoading,i as DefaultNoRadius,d as DefaultSecondary,b as Flat,O as FlatDisabled,A as FlatIconOnly,B as FlatLoading,y as FlatNoRadius,D as FlatSecondary,r as FlatTertiaryOnDarkBackground,u as Outlined,m as OutlinedDisabled,p as OutlinedIconOnly,l as OutlinedLoading,g as OutlinedNoRadius,v as OutlinedSecondary,a as OutlinedTertiaryOnDarkBackground,e as TertiaryOnDarkBackground,Hn as __namedExportsOrder,Gn as default};
