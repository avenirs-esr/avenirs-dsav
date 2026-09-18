import{A as se}from"./AvButton-By5HhXx3.js";import{i as ie,g as ue}from"./storybook-BaZ1TU0g.js";import"./AvTooltip-CJdL_neK.js";import"./iframe-CBaXf498.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CKk4YUYD.js";import"./icon-path-u9rVYwcY.js";import"./icons-CRm7-dlP.js";import"./string-BZgCOP9D.js";const ye={title:"Components/Interaction/Buttons/AvButton",component:se,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:ue,mapping:ie},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY","TERTIARY"]},small:{control:"boolean"},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},noRadius:{control:"boolean"},disabled:{control:"boolean"},disabledTooltip:{control:"text"},href:{control:"text"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:"PRIMARY",small:!1,iconOnly:!1,isLoading:!1,noRadius:!1,disabled:!1,disabledTooltip:void 0,href:void 0,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

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
</ul>`}}}},n=ce=>({components:{AvButton:se},setup(){return{args:ce}},template:'<AvButton v-bind="args" />'}),a=n.bind({});a.args={};const o=n.bind({});o.args={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const s=n.bind({});s.args={isLoading:!0};const c=n.bind({});c.args={disabled:!0};const i=n.bind({});i.args={disabled:!0,disabledTooltip:"This action is not available yet"};const u=n.bind({});u.args={noRadius:!0};const d=n.bind({});d.args={theme:"SECONDARY"};const e=n.bind({});e.args={theme:"TERTIARY"};e.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const p=n.bind({});p.args={variant:"OUTLINED"};const l=n.bind({});l.args={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const m=n.bind({});m.args={variant:"OUTLINED",isLoading:!0};const g=n.bind({});g.args={variant:"OUTLINED",disabled:!0};const v=n.bind({});v.args={variant:"OUTLINED",noRadius:!0};const b=n.bind({});b.args={variant:"OUTLINED",theme:"SECONDARY"};const t=n.bind({});t.args={variant:"OUTLINED",theme:"TERTIARY"};t.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const A=n.bind({});A.args={variant:"FLAT"};const B=n.bind({});B.args={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const O=n.bind({});O.args={variant:"FLAT",isLoading:!0};const y=n.bind({});y.args={variant:"FLAT",disabled:!0};const T=n.bind({});T.args={variant:"FLAT",noRadius:!0};const D=n.bind({});D.args={variant:"FLAT",theme:"SECONDARY"};const r=n.bind({});r.args={variant:"FLAT",theme:"TERTIARY"};r.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const h=n.bind({});h.args={href:"https://example.com",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"};const L=n.bind({});L.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};const S=n.bind({});S.args={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:"PRIMARY"};const R=n.bind({});R.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"SECONDARY"};const f=n.bind({});f.args={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"};const k=n.bind({});k.args={href:"https://example.com",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"};var I,E,F;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(F=(E=a.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var N,x,Y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:Y.source}}};var U,w,M;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var C,P,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(G=(P=c.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var W,_,j;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;e.parameters={...e.parameters,docs:{...(Q=e.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Z=(X=e.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,nn,en;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(en=(nn=p.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var tn,rn,an;l.parameters={...l.parameters,docs:{...(tn=l.parameters)==null?void 0:tn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(an=(rn=l.parameters)==null?void 0:rn.docs)==null?void 0:an.source}}};var on,sn,cn;m.parameters={...m.parameters,docs:{...(on=m.parameters)==null?void 0:on.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(cn=(sn=m.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var un,dn,pn;g.parameters={...g.parameters,docs:{...(un=g.parameters)==null?void 0:un.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pn=(dn=g.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var ln,mn,gn;v.parameters={...v.parameters,docs:{...(ln=v.parameters)==null?void 0:ln.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(gn=(mn=v.parameters)==null?void 0:mn.docs)==null?void 0:gn.source}}};var vn,bn,An;b.parameters={...b.parameters,docs:{...(vn=b.parameters)==null?void 0:vn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(An=(bn=b.parameters)==null?void 0:bn.docs)==null?void 0:An.source}}};var Bn,On,yn;t.parameters={...t.parameters,docs:{...(Bn=t.parameters)==null?void 0:Bn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(yn=(On=t.parameters)==null?void 0:On.docs)==null?void 0:yn.source}}};var Tn,Dn,hn;A.parameters={...A.parameters,docs:{...(Tn=A.parameters)==null?void 0:Tn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(hn=(Dn=A.parameters)==null?void 0:Dn.docs)==null?void 0:hn.source}}};var Ln,Sn,Rn;B.parameters={...B.parameters,docs:{...(Ln=B.parameters)==null?void 0:Ln.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Rn=(Sn=B.parameters)==null?void 0:Sn.docs)==null?void 0:Rn.source}}};var fn,kn,In;O.parameters={...O.parameters,docs:{...(fn=O.parameters)==null?void 0:fn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(In=(kn=O.parameters)==null?void 0:kn.docs)==null?void 0:In.source}}};var En,Fn,Nn;y.parameters={...y.parameters,docs:{...(En=y.parameters)==null?void 0:En.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Nn=(Fn=y.parameters)==null?void 0:Fn.docs)==null?void 0:Nn.source}}};var xn,Yn,Un;T.parameters={...T.parameters,docs:{...(xn=T.parameters)==null?void 0:xn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Un=(Yn=T.parameters)==null?void 0:Yn.docs)==null?void 0:Un.source}}};var wn,Mn,Cn;D.parameters={...D.parameters,docs:{...(wn=D.parameters)==null?void 0:wn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Cn=(Mn=D.parameters)==null?void 0:Mn.docs)==null?void 0:Cn.source}}};var Pn,Gn,Wn;r.parameters={...r.parameters,docs:{...(Pn=r.parameters)==null?void 0:Pn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Wn=(Gn=r.parameters)==null?void 0:Gn.docs)==null?void 0:Wn.source}}};var _n,jn,qn;h.parameters={...h.parameters,docs:{...(_n=h.parameters)==null?void 0:_n.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(qn=(jn=h.parameters)==null?void 0:jn.docs)==null?void 0:qn.source}}};var zn,Vn,Hn;L.parameters={...L.parameters,docs:{...(zn=L.parameters)==null?void 0:zn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Hn=(Vn=L.parameters)==null?void 0:Vn.docs)==null?void 0:Hn.source}}};var Jn,Kn,Qn;S.parameters={...S.parameters,docs:{...(Jn=S.parameters)==null?void 0:Jn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Qn=(Kn=S.parameters)==null?void 0:Kn.docs)==null?void 0:Qn.source}}};var Xn,Zn,$n;R.parameters={...R.parameters,docs:{...(Xn=R.parameters)==null?void 0:Xn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($n=(Zn=R.parameters)==null?void 0:Zn.docs)==null?void 0:$n.source}}};var ne,ee,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Te=["Default","DefaultIconOnly","DefaultLoading","DefaultDisabled","DefaultDisabledWithTooltip","DefaultNoRadius","DefaultSecondary","TertiaryOnDarkBackground","Outlined","OutlinedIconOnly","OutlinedLoading","OutlinedDisabled","OutlinedNoRadius","OutlinedSecondary","OutlinedTertiaryOnDarkBackground","Flat","FlatIconOnly","FlatLoading","FlatDisabled","FlatNoRadius","FlatSecondary","FlatTertiaryOnDarkBackground","ExternalLinkButton","LinkButton","LinkButtonOutlined","LinkButtonSecondary","LinkButtonIconOnly","ExternalLinkButtonIconOnly"];export{a as Default,c as DefaultDisabled,i as DefaultDisabledWithTooltip,o as DefaultIconOnly,s as DefaultLoading,u as DefaultNoRadius,d as DefaultSecondary,h as ExternalLinkButton,k as ExternalLinkButtonIconOnly,A as Flat,y as FlatDisabled,B as FlatIconOnly,O as FlatLoading,T as FlatNoRadius,D as FlatSecondary,r as FlatTertiaryOnDarkBackground,L as LinkButton,f as LinkButtonIconOnly,S as LinkButtonOutlined,R as LinkButtonSecondary,p as Outlined,g as OutlinedDisabled,l as OutlinedIconOnly,m as OutlinedLoading,v as OutlinedNoRadius,b as OutlinedSecondary,t as OutlinedTertiaryOnDarkBackground,e as TertiaryOnDarkBackground,Te as __namedExportsOrder,ye as default};
