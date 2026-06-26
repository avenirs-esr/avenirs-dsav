import{A as Kn}from"./AvButton-7n_6x9cn.js";import{i as Wn,g as Xn}from"./storybook-z9dRHyo-.js";import"./AvTooltip-DrVftJC7.js";import"./iframe-Cx06bDHC.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BL9q2U2O.js";import"./icon-path-u9rVYwcY.js";import"./icons-Dt7Ye3mU.js";import"./string-BZgCOP9D.js";const ie={title:"Components/Interaction/Buttons/AvButton",component:Kn,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:Xn,mapping:Wn},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED"]},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY","TERTIARY"]},small:{control:"boolean"},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},noRadius:{control:"boolean"},disabled:{control:"boolean"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:"PRIMARY",small:!1,iconOnly:!1,isLoading:!1,noRadius:!1,disabled:!1,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

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
</ul>`}}}},n=Qn=>({components:{AvButton:Kn},setup(){return{args:Qn}},template:'<AvButton v-bind="args" />'}),a=n.bind({});a.args={};const o=n.bind({});o.args={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const s=n.bind({});s.args={isLoading:!0};const c=n.bind({});c.args={disabled:!0};const i=n.bind({});i.args={noRadius:!0};const u=n.bind({});u.args={theme:"SECONDARY"};const e=n.bind({});e.args={theme:"TERTIARY"};e.decorators=[()=>({template:`
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
    `})];const T=n.bind({});T.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};const S=n.bind({});S.args={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:"PRIMARY"};const L=n.bind({});L.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"SECONDARY"};const h=n.bind({});h.args={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};var R,k,I;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var f,E,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var N,Y,U;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(U=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var w,x,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var M,P,G;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(G=(P=i.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var _,j,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,V,H;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(H=(V=e.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,nn,en;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(en=(nn=l.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var tn,rn,an;m.parameters={...m.parameters,docs:{...(tn=m.parameters)==null?void 0:tn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(an=(rn=m.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var on,sn,cn;g.parameters={...g.parameters,docs:{...(on=g.parameters)==null?void 0:on.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(cn=(sn=g.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var un,dn,pn;v.parameters={...v.parameters,docs:{...(un=v.parameters)==null?void 0:un.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pn=(dn=v.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var ln,mn,gn;t.parameters={...t.parameters,docs:{...(ln=t.parameters)==null?void 0:ln.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(gn=(mn=t.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var vn,bn,An;b.parameters={...b.parameters,docs:{...(vn=b.parameters)==null?void 0:vn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(An=(bn=b.parameters)==null?void 0:bn.docs)==null?void 0:An.source}}};var Bn,On,yn;A.parameters={...A.parameters,docs:{...(Bn=A.parameters)==null?void 0:Bn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(yn=(On=A.parameters)==null?void 0:On.docs)==null?void 0:yn.source}}};var Dn,Tn,Sn;B.parameters={...B.parameters,docs:{...(Dn=B.parameters)==null?void 0:Dn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Sn=(Tn=B.parameters)==null?void 0:Tn.docs)==null?void 0:Sn.source}}};var Ln,hn,Rn;O.parameters={...O.parameters,docs:{...(Ln=O.parameters)==null?void 0:Ln.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Rn=(hn=O.parameters)==null?void 0:hn.docs)==null?void 0:Rn.source}}};var kn,In,fn;y.parameters={...y.parameters,docs:{...(kn=y.parameters)==null?void 0:kn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(fn=(In=y.parameters)==null?void 0:In.docs)==null?void 0:fn.source}}};var En,Fn,Nn;D.parameters={...D.parameters,docs:{...(En=D.parameters)==null?void 0:En.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Nn=(Fn=D.parameters)==null?void 0:Fn.docs)==null?void 0:Nn.source}}};var Yn,Un,wn;r.parameters={...r.parameters,docs:{...(Yn=r.parameters)==null?void 0:Yn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(wn=(Un=r.parameters)==null?void 0:Un.docs)==null?void 0:wn.source}}};var xn,Cn,Mn;T.parameters={...T.parameters,docs:{...(xn=T.parameters)==null?void 0:xn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Mn=(Cn=T.parameters)==null?void 0:Cn.docs)==null?void 0:Mn.source}}};var Pn,Gn,_n;S.parameters={...S.parameters,docs:{...(Pn=S.parameters)==null?void 0:Pn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(_n=(Gn=S.parameters)==null?void 0:Gn.docs)==null?void 0:_n.source}}};var jn,qn,zn;L.parameters={...L.parameters,docs:{...(jn=L.parameters)==null?void 0:jn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(zn=(qn=L.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var Vn,Hn,Jn;h.parameters={...h.parameters,docs:{...(Vn=h.parameters)==null?void 0:Vn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Jn=(Hn=h.parameters)==null?void 0:Hn.docs)==null?void 0:Jn.source}}};const ue=["Default","DefaultIconOnly","DefaultLoading","DefaultDisabled","DefaultNoRadius","DefaultSecondary","TertiaryOnDarkBackground","Outlined","OutlinedIconOnly","OutlinedLoading","OutlinedDisabled","OutlinedNoRadius","OutlinedSecondary","OutlinedTertiaryOnDarkBackground","Flat","FlatIconOnly","FlatLoading","FlatDisabled","FlatNoRadius","FlatSecondary","FlatTertiaryOnDarkBackground","LinkButton","LinkButtonOutlined","LinkButtonSecondary","LinkButtonIconOnly"];export{a as Default,c as DefaultDisabled,o as DefaultIconOnly,s as DefaultLoading,i as DefaultNoRadius,u as DefaultSecondary,b as Flat,O as FlatDisabled,A as FlatIconOnly,B as FlatLoading,y as FlatNoRadius,D as FlatSecondary,r as FlatTertiaryOnDarkBackground,T as LinkButton,h as LinkButtonIconOnly,S as LinkButtonOutlined,L as LinkButtonSecondary,d as Outlined,m as OutlinedDisabled,p as OutlinedIconOnly,l as OutlinedLoading,g as OutlinedNoRadius,v as OutlinedSecondary,t as OutlinedTertiaryOnDarkBackground,e as TertiaryOnDarkBackground,ue as __namedExportsOrder,ie as default};
