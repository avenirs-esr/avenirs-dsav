import{A as te}from"./AvButton-DZmqbEdM.js";import{i as ae,g as oe}from"./storybook-BU4y9mzL.js";import"./AvTooltip-CKAXM9P4.js";import"./iframe-D-CpAvji.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BAV6QaXf.js";import"./icon-path-u9rVYwcY.js";import"./icons-Cm2C8MUK.js";import"./string-BZgCOP9D.js";const be={title:"Components/Interaction/Buttons/AvButton",component:te,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:oe,mapping:ae},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED"]},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY","TERTIARY"]},small:{control:"boolean"},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},noRadius:{control:"boolean"},disabled:{control:"boolean"},href:{control:"text"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:"PRIMARY",small:!1,iconOnly:!1,isLoading:!1,noRadius:!1,disabled:!1,href:void 0,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

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
</ul>`}}}},n=re=>({components:{AvButton:te},setup(){return{args:re}},template:'<AvButton v-bind="args" />'}),a=n.bind({});a.args={};const o=n.bind({});o.args={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const s=n.bind({});s.args={isLoading:!0};const c=n.bind({});c.args={disabled:!0};const i=n.bind({});i.args={noRadius:!0};const u=n.bind({});u.args={theme:"SECONDARY"};const e=n.bind({});e.args={theme:"TERTIARY"};e.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const d=n.bind({});d.args={variant:"OUTLINED"};const p=n.bind({});p.args={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const l=n.bind({});l.args={variant:"OUTLINED",isLoading:!0};const m=n.bind({});m.args={variant:"OUTLINED",disabled:!0};const g=n.bind({});g.args={variant:"OUTLINED",noRadius:!0};const v=n.bind({});v.args={variant:"OUTLINED",theme:"SECONDARY"};const t=n.bind({});t.args={variant:"OUTLINED",theme:"TERTIARY"};t.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const b=n.bind({});b.args={variant:"FLAT"};const A=n.bind({});A.args={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const B=n.bind({});B.args={variant:"FLAT",isLoading:!0};const O=n.bind({});O.args={variant:"FLAT",disabled:!0};const y=n.bind({});y.args={variant:"FLAT",noRadius:!0};const h=n.bind({});h.args={variant:"FLAT",theme:"SECONDARY"};const r=n.bind({});r.args={variant:"FLAT",theme:"TERTIARY"};r.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const D=n.bind({});D.args={href:"https://example.com",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"};const L=n.bind({});L.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};const T=n.bind({});T.args={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:"PRIMARY"};const S=n.bind({});S.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"SECONDARY"};const R=n.bind({});R.args={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};const k=n.bind({});k.args={href:"https://example.com",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"};var I,f,E;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(E=(f=a.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var F,N,Y;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var x,U,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(w=(U=s.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var M,C,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var G,_,j;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(j=(_=i.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,z,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,J,K;e.parameters={...e.parameters,docs:{...(H=e.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(K=(J=e.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(X=(W=d.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,nn;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(nn=($=p.parameters)==null?void 0:$.docs)==null?void 0:nn.source}}};var en,tn,rn;l.parameters={...l.parameters,docs:{...(en=l.parameters)==null?void 0:en.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(rn=(tn=l.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var an,on,sn;m.parameters={...m.parameters,docs:{...(an=m.parameters)==null?void 0:an.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(sn=(on=m.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var cn,un,dn;g.parameters={...g.parameters,docs:{...(cn=g.parameters)==null?void 0:cn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(dn=(un=g.parameters)==null?void 0:un.docs)==null?void 0:dn.source}}};var pn,ln,mn;v.parameters={...v.parameters,docs:{...(pn=v.parameters)==null?void 0:pn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(mn=(ln=v.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};var gn,vn,bn;t.parameters={...t.parameters,docs:{...(gn=t.parameters)==null?void 0:gn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(bn=(vn=t.parameters)==null?void 0:vn.docs)==null?void 0:bn.source}}};var An,Bn,On;b.parameters={...b.parameters,docs:{...(An=b.parameters)==null?void 0:An.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(On=(Bn=b.parameters)==null?void 0:Bn.docs)==null?void 0:On.source}}};var yn,hn,Dn;A.parameters={...A.parameters,docs:{...(yn=A.parameters)==null?void 0:yn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Dn=(hn=A.parameters)==null?void 0:hn.docs)==null?void 0:Dn.source}}};var Ln,Tn,Sn;B.parameters={...B.parameters,docs:{...(Ln=B.parameters)==null?void 0:Ln.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Sn=(Tn=B.parameters)==null?void 0:Tn.docs)==null?void 0:Sn.source}}};var Rn,kn,In;O.parameters={...O.parameters,docs:{...(Rn=O.parameters)==null?void 0:Rn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(In=(kn=O.parameters)==null?void 0:kn.docs)==null?void 0:In.source}}};var fn,En,Fn;y.parameters={...y.parameters,docs:{...(fn=y.parameters)==null?void 0:fn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Fn=(En=y.parameters)==null?void 0:En.docs)==null?void 0:Fn.source}}};var Nn,Yn,xn;h.parameters={...h.parameters,docs:{...(Nn=h.parameters)==null?void 0:Nn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(xn=(Yn=h.parameters)==null?void 0:Yn.docs)==null?void 0:xn.source}}};var Un,wn,Mn;r.parameters={...r.parameters,docs:{...(Un=r.parameters)==null?void 0:Un.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Mn=(wn=r.parameters)==null?void 0:wn.docs)==null?void 0:Mn.source}}};var Cn,Pn,Gn;D.parameters={...D.parameters,docs:{...(Cn=D.parameters)==null?void 0:Cn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Gn=(Pn=D.parameters)==null?void 0:Pn.docs)==null?void 0:Gn.source}}};var _n,jn,qn;L.parameters={...L.parameters,docs:{...(_n=L.parameters)==null?void 0:_n.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(qn=(jn=L.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var zn,Vn,Hn;T.parameters={...T.parameters,docs:{...(zn=T.parameters)==null?void 0:zn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Hn=(Vn=T.parameters)==null?void 0:Vn.docs)==null?void 0:Hn.source}}};var Jn,Kn,Qn;S.parameters={...S.parameters,docs:{...(Jn=S.parameters)==null?void 0:Jn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Qn=(Kn=S.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};var Wn,Xn,Zn;R.parameters={...R.parameters,docs:{...(Wn=R.parameters)==null?void 0:Wn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Zn=(Xn=R.parameters)==null?void 0:Xn.docs)==null?void 0:Zn.source}}};var $n,ne,ee;k.parameters={...k.parameters,docs:{...($n=k.parameters)==null?void 0:$n.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ee=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ee.source}}};const Ae=["Default","DefaultIconOnly","DefaultLoading","DefaultDisabled","DefaultNoRadius","DefaultSecondary","TertiaryOnDarkBackground","Outlined","OutlinedIconOnly","OutlinedLoading","OutlinedDisabled","OutlinedNoRadius","OutlinedSecondary","OutlinedTertiaryOnDarkBackground","Flat","FlatIconOnly","FlatLoading","FlatDisabled","FlatNoRadius","FlatSecondary","FlatTertiaryOnDarkBackground","ExternalLinkButton","LinkButton","LinkButtonOutlined","LinkButtonSecondary","LinkButtonIconOnly","ExternalLinkButtonIconOnly"];export{a as Default,c as DefaultDisabled,o as DefaultIconOnly,s as DefaultLoading,i as DefaultNoRadius,u as DefaultSecondary,D as ExternalLinkButton,k as ExternalLinkButtonIconOnly,b as Flat,O as FlatDisabled,A as FlatIconOnly,B as FlatLoading,y as FlatNoRadius,h as FlatSecondary,r as FlatTertiaryOnDarkBackground,L as LinkButton,R as LinkButtonIconOnly,T as LinkButtonOutlined,S as LinkButtonSecondary,d as Outlined,m as OutlinedDisabled,p as OutlinedIconOnly,l as OutlinedLoading,g as OutlinedNoRadius,v as OutlinedSecondary,t as OutlinedTertiaryOnDarkBackground,e as TertiaryOnDarkBackground,Ae as __namedExportsOrder,be as default};
