import{A as Zn}from"./AvButton-wALVWVwk.js";import{i as ne,g as ee}from"./storybook-BU4y9mzL.js";import"./AvTooltip-CihwzKQ5.js";import"./iframe-DJC2oW5V.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Izq-H_-Q.js";import"./icon-path-u9rVYwcY.js";import"./icons-Cm2C8MUK.js";import"./string-BZgCOP9D.js";const le={title:"Components/Interaction/Buttons/AvButton",component:Zn,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:ee,mapping:ne},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED"]},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY","TERTIARY"]},small:{control:"boolean"},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},noRadius:{control:"boolean"},disabled:{control:"boolean"},href:{control:"text"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:"PRIMARY",small:!1,iconOnly:!1,isLoading:!1,noRadius:!1,disabled:!1,href:void 0,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

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
</ul>`}}}},n=$n=>({components:{AvButton:Zn},setup(){return{args:$n}},template:'<AvButton v-bind="args" />'}),a=n.bind({});a.args={};const o=n.bind({});o.args={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const s=n.bind({});s.args={isLoading:!0};const c=n.bind({});c.args={disabled:!0};const i=n.bind({});i.args={noRadius:!0};const u=n.bind({});u.args={theme:"SECONDARY"};const e=n.bind({});e.args={theme:"TERTIARY"};e.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const d=n.bind({});d.args={variant:"OUTLINED"};const p=n.bind({});p.args={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const l=n.bind({});l.args={variant:"OUTLINED",isLoading:!0};const m=n.bind({});m.args={variant:"OUTLINED",disabled:!0};const g=n.bind({});g.args={variant:"OUTLINED",noRadius:!0};const v=n.bind({});v.args={variant:"OUTLINED",theme:"SECONDARY"};const t=n.bind({});t.args={variant:"OUTLINED",theme:"TERTIARY"};t.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const b=n.bind({});b.args={variant:"FLAT"};const A=n.bind({});A.args={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const B=n.bind({});B.args={variant:"FLAT",isLoading:!0};const O=n.bind({});O.args={variant:"FLAT",disabled:!0};const y=n.bind({});y.args={variant:"FLAT",noRadius:!0};const D=n.bind({});D.args={variant:"FLAT",theme:"SECONDARY"};const r=n.bind({});r.args={variant:"FLAT",theme:"TERTIARY"};r.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const L=n.bind({});L.args={href:"https://example.com",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"};const T=n.bind({});T.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};const h=n.bind({});h.args={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:"PRIMARY"};const S=n.bind({});S.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"SECONDARY"};const R=n.bind({});R.args={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};var k,f,I;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var E,F,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var Y,U,x;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(x=(U=s.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var w,C,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var P,G,_;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(_=(G=i.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var j,q,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var V,H,J;e.parameters={...e.parameters,docs:{...(V=e.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(J=(H=e.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,W;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(W=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,$;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,tn;l.parameters={...l.parameters,docs:{...(nn=l.parameters)==null?void 0:nn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(tn=(en=l.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var rn,an,on;m.parameters={...m.parameters,docs:{...(rn=m.parameters)==null?void 0:rn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(on=(an=m.parameters)==null?void 0:an.docs)==null?void 0:on.source}}};var sn,cn,un;g.parameters={...g.parameters,docs:{...(sn=g.parameters)==null?void 0:sn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(un=(cn=g.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var dn,pn,ln;v.parameters={...v.parameters,docs:{...(dn=v.parameters)==null?void 0:dn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ln=(pn=v.parameters)==null?void 0:pn.docs)==null?void 0:ln.source}}};var mn,gn,vn;t.parameters={...t.parameters,docs:{...(mn=t.parameters)==null?void 0:mn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(vn=(gn=t.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var bn,An,Bn;b.parameters={...b.parameters,docs:{...(bn=b.parameters)==null?void 0:bn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Bn=(An=b.parameters)==null?void 0:An.docs)==null?void 0:Bn.source}}};var On,yn,Dn;A.parameters={...A.parameters,docs:{...(On=A.parameters)==null?void 0:On.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Dn=(yn=A.parameters)==null?void 0:yn.docs)==null?void 0:Dn.source}}};var Ln,Tn,hn;B.parameters={...B.parameters,docs:{...(Ln=B.parameters)==null?void 0:Ln.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(hn=(Tn=B.parameters)==null?void 0:Tn.docs)==null?void 0:hn.source}}};var Sn,Rn,kn;O.parameters={...O.parameters,docs:{...(Sn=O.parameters)==null?void 0:Sn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(kn=(Rn=O.parameters)==null?void 0:Rn.docs)==null?void 0:kn.source}}};var fn,In,En;y.parameters={...y.parameters,docs:{...(fn=y.parameters)==null?void 0:fn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(En=(In=y.parameters)==null?void 0:In.docs)==null?void 0:En.source}}};var Fn,Nn,Yn;D.parameters={...D.parameters,docs:{...(Fn=D.parameters)==null?void 0:Fn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Yn=(Nn=D.parameters)==null?void 0:Nn.docs)==null?void 0:Yn.source}}};var Un,xn,wn;r.parameters={...r.parameters,docs:{...(Un=r.parameters)==null?void 0:Un.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(wn=(xn=r.parameters)==null?void 0:xn.docs)==null?void 0:wn.source}}};var Cn,Mn,Pn;L.parameters={...L.parameters,docs:{...(Cn=L.parameters)==null?void 0:Cn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Pn=(Mn=L.parameters)==null?void 0:Mn.docs)==null?void 0:Pn.source}}};var Gn,_n,jn;T.parameters={...T.parameters,docs:{...(Gn=T.parameters)==null?void 0:Gn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(jn=(_n=T.parameters)==null?void 0:_n.docs)==null?void 0:jn.source}}};var qn,zn,Vn;h.parameters={...h.parameters,docs:{...(qn=h.parameters)==null?void 0:qn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Vn=(zn=h.parameters)==null?void 0:zn.docs)==null?void 0:Vn.source}}};var Hn,Jn,Kn;S.parameters={...S.parameters,docs:{...(Hn=S.parameters)==null?void 0:Hn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Kn=(Jn=S.parameters)==null?void 0:Jn.docs)==null?void 0:Kn.source}}};var Qn,Wn,Xn;R.parameters={...R.parameters,docs:{...(Qn=R.parameters)==null?void 0:Qn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Xn=(Wn=R.parameters)==null?void 0:Wn.docs)==null?void 0:Xn.source}}};const me=["Default","DefaultIconOnly","DefaultLoading","DefaultDisabled","DefaultNoRadius","DefaultSecondary","TertiaryOnDarkBackground","Outlined","OutlinedIconOnly","OutlinedLoading","OutlinedDisabled","OutlinedNoRadius","OutlinedSecondary","OutlinedTertiaryOnDarkBackground","Flat","FlatIconOnly","FlatLoading","FlatDisabled","FlatNoRadius","FlatSecondary","FlatTertiaryOnDarkBackground","ExternalLinkButton","LinkButton","LinkButtonOutlined","LinkButtonSecondary","LinkButtonIconOnly"];export{a as Default,c as DefaultDisabled,o as DefaultIconOnly,s as DefaultLoading,i as DefaultNoRadius,u as DefaultSecondary,L as ExternalLinkButton,b as Flat,O as FlatDisabled,A as FlatIconOnly,B as FlatLoading,y as FlatNoRadius,D as FlatSecondary,r as FlatTertiaryOnDarkBackground,T as LinkButton,R as LinkButtonIconOnly,h as LinkButtonOutlined,S as LinkButtonSecondary,d as Outlined,m as OutlinedDisabled,p as OutlinedIconOnly,l as OutlinedLoading,g as OutlinedNoRadius,v as OutlinedSecondary,t as OutlinedTertiaryOnDarkBackground,e as TertiaryOnDarkBackground,me as __namedExportsOrder,le as default};
