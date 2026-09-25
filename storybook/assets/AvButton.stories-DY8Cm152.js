import{A as ce}from"./AvButton-B38MxCq9.js";import"./iframe-T1PdNDhM.js";import{T as e}from"./theme.types-DKH7g3eH.js";import{i as ue,g as de}from"./storybook-Bli9j8YZ.js";import"./AvTooltip-DVbJ7XaX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-sXUIOxgk.js";import"./icon-path-u9rVYwcY.js";import"./icons-CS5vb1aa.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const Te={title:"Components/Interaction/Buttons/AvButton",component:ce,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:de,mapping:ue},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},theme:{control:{type:"radio"},options:Object.values(e)},small:{control:"boolean"},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},iconScale:{control:"number"},noRadius:{control:"boolean"},disabled:{control:"boolean"},disabledTooltip:{control:"text"},noSentenceCase:{control:"boolean"},href:{control:"text"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:e.PRIMARY,small:!1,iconOnly:!1,isLoading:!1,iconScale:void 0,noRadius:!1,disabled:!1,disabledTooltip:void 0,noSentenceCase:!1,href:void 0,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

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
    The button allows three variants (<code>DEFAULT</code> without border, <code>OUTLINED</code> with border
    and <code>FLAT</code> with filled background) and three themes
    (<code>PRIMARY</code> blue, <code>SECONDARY</code> grey and <code>TERTIARY</code> white).
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
</ul>`}}}},n=ie=>({components:{AvButton:ce},setup(){return{args:ie}},template:'<AvButton v-bind="args" />'}),o=n.bind({});o.args={};const s=n.bind({});s.args={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const c=n.bind({});c.args={isLoading:!0};const i=n.bind({});i.args={disabled:!0};const u=n.bind({});u.args={disabled:!0,disabledTooltip:"This action is not available yet"};const d=n.bind({});d.args={noRadius:!0};const l=n.bind({});l.args={theme:e.SECONDARY};const t=n.bind({});t.args={theme:e.TERTIARY};t.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const p=n.bind({});p.args={variant:"OUTLINED"};const m=n.bind({});m.args={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const g=n.bind({});g.args={variant:"OUTLINED",isLoading:!0};const v=n.bind({});v.args={variant:"OUTLINED",disabled:!0};const b=n.bind({});b.args={variant:"OUTLINED",noRadius:!0};const A=n.bind({});A.args={variant:"OUTLINED",theme:e.SECONDARY};const a=n.bind({});a.args={variant:"OUTLINED",theme:e.TERTIARY};a.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const B=n.bind({});B.args={variant:"FLAT"};const O=n.bind({});O.args={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"};const y=n.bind({});y.args={variant:"FLAT",isLoading:!0};const h=n.bind({});h.args={variant:"FLAT",disabled:!0};const T=n.bind({});T.args={variant:"FLAT",noRadius:!0};const D=n.bind({});D.args={variant:"FLAT",theme:e.SECONDARY};const r=n.bind({});r.args={variant:"FLAT",theme:e.TERTIARY};r.decorators=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})];const L=n.bind({});L.args={href:"https://example.com",label:"Go to external site",variant:"DEFAULT",theme:e.PRIMARY};const S=n.bind({});S.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:e.PRIMARY};const f=n.bind({});f.args={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:e.PRIMARY};const k=n.bind({});k.args={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:e.SECONDARY};const R=n.bind({});R.args={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:e.PRIMARY};const I=n.bind({});I.args={href:"https://example.com",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to external site",variant:"DEFAULT",theme:e.PRIMARY};var E,F,N;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var x,U,Y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Y=(U=s.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var w,C,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var P,G,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(j=(G=i.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var W,_,q;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,V,H;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(H=(V=d.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var J,K,Q;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,tn;p.parameters={...p.parameters,docs:{...(nn=p.parameters)==null?void 0:nn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(tn=(en=p.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var an,rn,on;m.parameters={...m.parameters,docs:{...(an=m.parameters)==null?void 0:an.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(on=(rn=m.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var sn,cn,un;g.parameters={...g.parameters,docs:{...(sn=g.parameters)==null?void 0:sn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(un=(cn=g.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var dn,ln,pn;v.parameters={...v.parameters,docs:{...(dn=v.parameters)==null?void 0:dn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pn=(ln=v.parameters)==null?void 0:ln.docs)==null?void 0:pn.source}}};var mn,gn,vn;b.parameters={...b.parameters,docs:{...(mn=b.parameters)==null?void 0:mn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(vn=(gn=b.parameters)==null?void 0:gn.docs)==null?void 0:vn.source}}};var bn,An,Bn;A.parameters={...A.parameters,docs:{...(bn=A.parameters)==null?void 0:bn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Bn=(An=A.parameters)==null?void 0:An.docs)==null?void 0:Bn.source}}};var On,yn,hn;a.parameters={...a.parameters,docs:{...(On=a.parameters)==null?void 0:On.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(hn=(yn=a.parameters)==null?void 0:yn.docs)==null?void 0:hn.source}}};var Tn,Dn,Ln;B.parameters={...B.parameters,docs:{...(Tn=B.parameters)==null?void 0:Tn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ln=(Dn=B.parameters)==null?void 0:Dn.docs)==null?void 0:Ln.source}}};var Sn,fn,kn;O.parameters={...O.parameters,docs:{...(Sn=O.parameters)==null?void 0:Sn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(kn=(fn=O.parameters)==null?void 0:fn.docs)==null?void 0:kn.source}}};var Rn,In,En;y.parameters={...y.parameters,docs:{...(Rn=y.parameters)==null?void 0:Rn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(En=(In=y.parameters)==null?void 0:In.docs)==null?void 0:En.source}}};var Fn,Nn,xn;h.parameters={...h.parameters,docs:{...(Fn=h.parameters)==null?void 0:Fn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(xn=(Nn=h.parameters)==null?void 0:Nn.docs)==null?void 0:xn.source}}};var Un,Yn,wn;T.parameters={...T.parameters,docs:{...(Un=T.parameters)==null?void 0:Un.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(wn=(Yn=T.parameters)==null?void 0:Yn.docs)==null?void 0:wn.source}}};var Cn,Mn,Pn;D.parameters={...D.parameters,docs:{...(Cn=D.parameters)==null?void 0:Cn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Pn=(Mn=D.parameters)==null?void 0:Mn.docs)==null?void 0:Pn.source}}};var Gn,jn,Wn;r.parameters={...r.parameters,docs:{...(Gn=r.parameters)==null?void 0:Gn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Wn=(jn=r.parameters)==null?void 0:jn.docs)==null?void 0:Wn.source}}};var _n,qn,zn;L.parameters={...L.parameters,docs:{...(_n=L.parameters)==null?void 0:_n.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(zn=(qn=L.parameters)==null?void 0:qn.docs)==null?void 0:zn.source}}};var Vn,Hn,Jn;S.parameters={...S.parameters,docs:{...(Vn=S.parameters)==null?void 0:Vn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Jn=(Hn=S.parameters)==null?void 0:Hn.docs)==null?void 0:Jn.source}}};var Kn,Qn,Xn;f.parameters={...f.parameters,docs:{...(Kn=f.parameters)==null?void 0:Kn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Xn=(Qn=f.parameters)==null?void 0:Qn.docs)==null?void 0:Xn.source}}};var Zn,$n,ne;k.parameters={...k.parameters,docs:{...(Zn=k.parameters)==null?void 0:Zn.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ne=($n=k.parameters)==null?void 0:$n.docs)==null?void 0:ne.source}}};var ee,te,ae;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ae=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,oe,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const De=["Default","DefaultIconOnly","DefaultLoading","DefaultDisabled","DefaultDisabledWithTooltip","DefaultNoRadius","DefaultSecondary","TertiaryOnDarkBackground","Outlined","OutlinedIconOnly","OutlinedLoading","OutlinedDisabled","OutlinedNoRadius","OutlinedSecondary","OutlinedTertiaryOnDarkBackground","Flat","FlatIconOnly","FlatLoading","FlatDisabled","FlatNoRadius","FlatSecondary","FlatTertiaryOnDarkBackground","ExternalLinkButton","LinkButton","LinkButtonOutlined","LinkButtonSecondary","LinkButtonIconOnly","ExternalLinkButtonIconOnly"];export{o as Default,i as DefaultDisabled,u as DefaultDisabledWithTooltip,s as DefaultIconOnly,c as DefaultLoading,d as DefaultNoRadius,l as DefaultSecondary,L as ExternalLinkButton,I as ExternalLinkButtonIconOnly,B as Flat,h as FlatDisabled,O as FlatIconOnly,y as FlatLoading,T as FlatNoRadius,D as FlatSecondary,r as FlatTertiaryOnDarkBackground,S as LinkButton,R as LinkButtonIconOnly,f as LinkButtonOutlined,k as LinkButtonSecondary,p as Outlined,v as OutlinedDisabled,m as OutlinedIconOnly,g as OutlinedLoading,b as OutlinedNoRadius,A as OutlinedSecondary,a as OutlinedTertiaryOnDarkBackground,t as TertiaryOnDarkBackground,De as __namedExportsOrder,Te as default};
