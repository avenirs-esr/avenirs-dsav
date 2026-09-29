import{S as e,A as _s}from"./AvButton-DDqPHCEM.js";import"./iframe-BTd5WVUI.js";import{T as r}from"./theme.types-DKH7g3eH.js";import{i as Vs,g as Hs}from"./storybook-J6TbA4Y9.js";import"./AvTooltip-tVqAVxBh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Dy7uUo3w.js";import"./icon-path-u9rVYwcY.js";import"./icons-CJ0cZR5z.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const so={title:"Components/Interaction/Buttons/AvButton",component:_s,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:Hs,mapping:Vs},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},theme:{control:{type:"radio"},options:Object.values(r)},size:{control:{type:"radio"},options:Object.values(e)},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},iconScale:{control:"number"},noRadius:{control:"boolean"},disabled:{control:"boolean"},disabledTooltip:{control:"text"},noSentenceCase:{control:"boolean"},href:{control:"text"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:r.PRIMARY,size:e.MD,iconOnly:!1,isLoading:!1,iconScale:void 0,noRadius:!1,disabled:!1,disabledTooltip:void 0,noSentenceCase:!1,href:void 0,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvButton</code> is an interaction element with an interface enabling the user to perform an action.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvButton</code> is an elegant, reusable Vue component designed to simplify the creation of custom buttons.
    It features adjustable sizes ('SM', 'MD', 'LG'), an optional icon and a click manager.
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
</ul>`}}}},a=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})],n=qs=>({components:{AvButton:_s},setup(){return{args:qs}},template:'<AvButton v-bind="args" />'}),l=n.bind({});l.args={};const g=n.bind({});g.args={size:e.SM};const v=n.bind({});v.args={size:e.LG};const Nn={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"},b=n.bind({});b.args=Nn;const B=n.bind({});B.args={...Nn,size:e.SM};const A=n.bind({});A.args={...Nn,size:e.LG};const xn={isLoading:!0},S=n.bind({});S.args=xn;const L=n.bind({});L.args={...xn,size:e.SM};const O=n.bind({});O.args={...xn,size:e.LG};const Un={disabled:!0},y=n.bind({});y.args=Un;const k=n.bind({});k.args={...Un,size:e.SM};const D=n.bind({});D.args={...Un,size:e.LG};const Yn={disabled:!0,disabledTooltip:"This action is not available yet"},T=n.bind({});T.args=Yn;const z=n.bind({});z.args={...Yn,size:e.SM};const h=n.bind({});h.args={...Yn,size:e.LG};const wn={noRadius:!0},F=n.bind({});F.args=wn;const I=n.bind({});I.args={...wn,size:e.SM};const R=n.bind({});R.args={...wn,size:e.LG};const Cn={theme:r.SECONDARY},f=n.bind({});f.args=Cn;const E=n.bind({});E.args={...Cn,size:e.SM};const M=n.bind({});M.args={...Cn,size:e.LG};const Pn={theme:r.TERTIARY},t=n.bind({});t.args=Pn;t.decorators=a;const s=n.bind({});s.args={...Pn,size:e.SM};s.decorators=a;const o=n.bind({});o.args={...Pn,size:e.LG};o.decorators=a;const Wn={variant:"OUTLINED"},G=n.bind({});G.args=Wn;const N=n.bind({});N.args={...Wn,size:e.SM};const x=n.bind({});x.args={...Wn,size:e.LG};const jn={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"},U=n.bind({});U.args=jn;const Y=n.bind({});Y.args={...jn,size:e.SM};const w=n.bind({});w.args={...jn,size:e.LG};const _n={variant:"OUTLINED",isLoading:!0},C=n.bind({});C.args=_n;const P=n.bind({});P.args={..._n,size:e.SM};const W=n.bind({});W.args={..._n,size:e.LG};const qn={variant:"OUTLINED",disabled:!0},j=n.bind({});j.args=qn;const _=n.bind({});_.args={...qn,size:e.SM};const q=n.bind({});q.args={...qn,size:e.LG};const Vn={variant:"OUTLINED",noRadius:!0},V=n.bind({});V.args=Vn;const H=n.bind({});H.args={...Vn,size:e.SM};const J=n.bind({});J.args={...Vn,size:e.LG};const Hn={variant:"OUTLINED",theme:r.SECONDARY},K=n.bind({});K.args=Hn;const Q=n.bind({});Q.args={...Hn,size:e.SM};const X=n.bind({});X.args={...Hn,size:e.LG};const Jn={variant:"OUTLINED",theme:r.TERTIARY},c=n.bind({});c.args=Jn;c.decorators=a;const u=n.bind({});u.args={...Jn,size:e.SM};u.decorators=a;const i=n.bind({});i.args={...Jn,size:e.LG};i.decorators=a;const Kn={variant:"FLAT"},Z=n.bind({});Z.args=Kn;const $=n.bind({});$.args={...Kn,size:e.SM};const nn=n.bind({});nn.args={...Kn,size:e.LG};const Qn={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"},en=n.bind({});en.args=Qn;const rn=n.bind({});rn.args={...Qn,size:e.SM};const an=n.bind({});an.args={...Qn,size:e.LG};const Xn={variant:"FLAT",isLoading:!0},tn=n.bind({});tn.args=Xn;const sn=n.bind({});sn.args={...Xn,size:e.SM};const on=n.bind({});on.args={...Xn,size:e.LG};const Zn={variant:"FLAT",disabled:!0},cn=n.bind({});cn.args=Zn;const un=n.bind({});un.args={...Zn,size:e.SM};const dn=n.bind({});dn.args={...Zn,size:e.LG};const $n={variant:"FLAT",noRadius:!0},pn=n.bind({});pn.args=$n;const mn=n.bind({});mn.args={...$n,size:e.SM};const ln=n.bind({});ln.args={...$n,size:e.LG};const ne={variant:"FLAT",theme:r.SECONDARY},gn=n.bind({});gn.args=ne;const vn=n.bind({});vn.args={...ne,size:e.SM};const bn=n.bind({});bn.args={...ne,size:e.LG};const ee={variant:"FLAT",theme:r.TERTIARY},d=n.bind({});d.args=ee;d.decorators=a;const p=n.bind({});p.args={...ee,size:e.SM};p.decorators=a;const m=n.bind({});m.args={...ee,size:e.LG};m.decorators=a;const re={href:"https://example.com",label:"Go to external site",variant:"DEFAULT",theme:r.PRIMARY},Bn=n.bind({});Bn.args=re;const An=n.bind({});An.args={...re,size:e.SM};const Sn=n.bind({});Sn.args={...re,size:e.LG};const ae={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:r.PRIMARY},Ln=n.bind({});Ln.args=ae;const On=n.bind({});On.args={...ae,size:e.SM};const yn=n.bind({});yn.args={...ae,size:e.LG};const te={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:r.PRIMARY},kn=n.bind({});kn.args=te;const Dn=n.bind({});Dn.args={...te,size:e.SM};const Tn=n.bind({});Tn.args={...te,size:e.LG};const se={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:r.SECONDARY},zn=n.bind({});zn.args=se;const hn=n.bind({});hn.args={...se,size:e.SM};const Fn=n.bind({});Fn.args={...se,size:e.LG};const oe={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:r.PRIMARY},In=n.bind({});In.args=oe;const Rn=n.bind({});Rn.args={...oe,size:e.SM};const fn=n.bind({});fn.args={...oe,size:e.LG};const ce={href:"https://example.com",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to external site",variant:"DEFAULT",theme:r.PRIMARY},En=n.bind({});En.args=ce;const Mn=n.bind({});Mn.args={...ce,size:e.SM};const Gn=n.bind({});Gn.args={...ce,size:e.LG};var ue,ie,de;l.parameters={...l.parameters,docs:{...(ue=l.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(de=(ie=l.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var pe,me,le;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(le=(me=g.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var ge,ve,be;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(be=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Be,Ae,Se;b.parameters={...b.parameters,docs:{...(Be=b.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Se=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var Le,Oe,ye;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ye=(Oe=B.parameters)==null?void 0:Oe.docs)==null?void 0:ye.source}}};var ke,De,Te;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Te=(De=A.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var ze,he,Fe;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Fe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:Fe.source}}};var Ie,Re,fe;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(fe=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:fe.source}}};var Ee,Me,Ge;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ge=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var Ne,xe,Ue;y.parameters={...y.parameters,docs:{...(Ne=y.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ue=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:Ue.source}}};var Ye,we,Ce;k.parameters={...k.parameters,docs:{...(Ye=k.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ce=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Pe,We,je;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(je=(We=D.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var _e,qe,Ve;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ve=(qe=T.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var He,Je,Ke;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ke=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ze;h.parameters={...h.parameters,docs:{...(Qe=h.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ze=(Xe=h.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var $e,nr,er;F.parameters={...F.parameters,docs:{...($e=F.parameters)==null?void 0:$e.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(er=(nr=F.parameters)==null?void 0:nr.docs)==null?void 0:er.source}}};var rr,ar,tr;I.parameters={...I.parameters,docs:{...(rr=I.parameters)==null?void 0:rr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(tr=(ar=I.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var sr,or,cr;R.parameters={...R.parameters,docs:{...(sr=R.parameters)==null?void 0:sr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(cr=(or=R.parameters)==null?void 0:or.docs)==null?void 0:cr.source}}};var ur,ir,dr;f.parameters={...f.parameters,docs:{...(ur=f.parameters)==null?void 0:ur.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(dr=(ir=f.parameters)==null?void 0:ir.docs)==null?void 0:dr.source}}};var pr,mr,lr;E.parameters={...E.parameters,docs:{...(pr=E.parameters)==null?void 0:pr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(lr=(mr=E.parameters)==null?void 0:mr.docs)==null?void 0:lr.source}}};var gr,vr,br;M.parameters={...M.parameters,docs:{...(gr=M.parameters)==null?void 0:gr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(br=(vr=M.parameters)==null?void 0:vr.docs)==null?void 0:br.source}}};var Br,Ar,Sr;t.parameters={...t.parameters,docs:{...(Br=t.parameters)==null?void 0:Br.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Sr=(Ar=t.parameters)==null?void 0:Ar.docs)==null?void 0:Sr.source}}};var Lr,Or,yr;s.parameters={...s.parameters,docs:{...(Lr=s.parameters)==null?void 0:Lr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(yr=(Or=s.parameters)==null?void 0:Or.docs)==null?void 0:yr.source}}};var kr,Dr,Tr;o.parameters={...o.parameters,docs:{...(kr=o.parameters)==null?void 0:kr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Tr=(Dr=o.parameters)==null?void 0:Dr.docs)==null?void 0:Tr.source}}};var zr,hr,Fr;G.parameters={...G.parameters,docs:{...(zr=G.parameters)==null?void 0:zr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Fr=(hr=G.parameters)==null?void 0:hr.docs)==null?void 0:Fr.source}}};var Ir,Rr,fr;N.parameters={...N.parameters,docs:{...(Ir=N.parameters)==null?void 0:Ir.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(fr=(Rr=N.parameters)==null?void 0:Rr.docs)==null?void 0:fr.source}}};var Er,Mr,Gr;x.parameters={...x.parameters,docs:{...(Er=x.parameters)==null?void 0:Er.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Gr=(Mr=x.parameters)==null?void 0:Mr.docs)==null?void 0:Gr.source}}};var Nr,xr,Ur;U.parameters={...U.parameters,docs:{...(Nr=U.parameters)==null?void 0:Nr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ur=(xr=U.parameters)==null?void 0:xr.docs)==null?void 0:Ur.source}}};var Yr,wr,Cr;Y.parameters={...Y.parameters,docs:{...(Yr=Y.parameters)==null?void 0:Yr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Cr=(wr=Y.parameters)==null?void 0:wr.docs)==null?void 0:Cr.source}}};var Pr,Wr,jr;w.parameters={...w.parameters,docs:{...(Pr=w.parameters)==null?void 0:Pr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(jr=(Wr=w.parameters)==null?void 0:Wr.docs)==null?void 0:jr.source}}};var _r,qr,Vr;C.parameters={...C.parameters,docs:{...(_r=C.parameters)==null?void 0:_r.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Vr=(qr=C.parameters)==null?void 0:qr.docs)==null?void 0:Vr.source}}};var Hr,Jr,Kr;P.parameters={...P.parameters,docs:{...(Hr=P.parameters)==null?void 0:Hr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Kr=(Jr=P.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Qr,Xr,Zr;W.parameters={...W.parameters,docs:{...(Qr=W.parameters)==null?void 0:Qr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Zr=(Xr=W.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var $r,na,ea;j.parameters={...j.parameters,docs:{...($r=j.parameters)==null?void 0:$r.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ea=(na=j.parameters)==null?void 0:na.docs)==null?void 0:ea.source}}};var ra,aa,ta;_.parameters={..._.parameters,docs:{...(ra=_.parameters)==null?void 0:ra.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ta=(aa=_.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var sa,oa,ca;q.parameters={...q.parameters,docs:{...(sa=q.parameters)==null?void 0:sa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ca=(oa=q.parameters)==null?void 0:oa.docs)==null?void 0:ca.source}}};var ua,ia,da;V.parameters={...V.parameters,docs:{...(ua=V.parameters)==null?void 0:ua.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(da=(ia=V.parameters)==null?void 0:ia.docs)==null?void 0:da.source}}};var pa,ma,la;H.parameters={...H.parameters,docs:{...(pa=H.parameters)==null?void 0:pa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(la=(ma=H.parameters)==null?void 0:ma.docs)==null?void 0:la.source}}};var ga,va,ba;J.parameters={...J.parameters,docs:{...(ga=J.parameters)==null?void 0:ga.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ba=(va=J.parameters)==null?void 0:va.docs)==null?void 0:ba.source}}};var Ba,Aa,Sa;K.parameters={...K.parameters,docs:{...(Ba=K.parameters)==null?void 0:Ba.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Sa=(Aa=K.parameters)==null?void 0:Aa.docs)==null?void 0:Sa.source}}};var La,Oa,ya;Q.parameters={...Q.parameters,docs:{...(La=Q.parameters)==null?void 0:La.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ya=(Oa=Q.parameters)==null?void 0:Oa.docs)==null?void 0:ya.source}}};var ka,Da,Ta;X.parameters={...X.parameters,docs:{...(ka=X.parameters)==null?void 0:ka.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ta=(Da=X.parameters)==null?void 0:Da.docs)==null?void 0:Ta.source}}};var za,ha,Fa;c.parameters={...c.parameters,docs:{...(za=c.parameters)==null?void 0:za.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Fa=(ha=c.parameters)==null?void 0:ha.docs)==null?void 0:Fa.source}}};var Ia,Ra,fa;u.parameters={...u.parameters,docs:{...(Ia=u.parameters)==null?void 0:Ia.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(fa=(Ra=u.parameters)==null?void 0:Ra.docs)==null?void 0:fa.source}}};var Ea,Ma,Ga;i.parameters={...i.parameters,docs:{...(Ea=i.parameters)==null?void 0:Ea.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ga=(Ma=i.parameters)==null?void 0:Ma.docs)==null?void 0:Ga.source}}};var Na,xa,Ua;Z.parameters={...Z.parameters,docs:{...(Na=Z.parameters)==null?void 0:Na.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ua=(xa=Z.parameters)==null?void 0:xa.docs)==null?void 0:Ua.source}}};var Ya,wa,Ca;$.parameters={...$.parameters,docs:{...(Ya=$.parameters)==null?void 0:Ya.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ca=(wa=$.parameters)==null?void 0:wa.docs)==null?void 0:Ca.source}}};var Pa,Wa,ja;nn.parameters={...nn.parameters,docs:{...(Pa=nn.parameters)==null?void 0:Pa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ja=(Wa=nn.parameters)==null?void 0:Wa.docs)==null?void 0:ja.source}}};var _a,qa,Va;en.parameters={...en.parameters,docs:{...(_a=en.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Va=(qa=en.parameters)==null?void 0:qa.docs)==null?void 0:Va.source}}};var Ha,Ja,Ka;rn.parameters={...rn.parameters,docs:{...(Ha=rn.parameters)==null?void 0:Ha.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ka=(Ja=rn.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.source}}};var Qa,Xa,Za;an.parameters={...an.parameters,docs:{...(Qa=an.parameters)==null?void 0:Qa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Za=(Xa=an.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var $a,nt,et;tn.parameters={...tn.parameters,docs:{...($a=tn.parameters)==null?void 0:$a.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(et=(nt=tn.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};var rt,at,tt;sn.parameters={...sn.parameters,docs:{...(rt=sn.parameters)==null?void 0:rt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(tt=(at=sn.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};var st,ot,ct;on.parameters={...on.parameters,docs:{...(st=on.parameters)==null?void 0:st.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ct=(ot=on.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var ut,it,dt;cn.parameters={...cn.parameters,docs:{...(ut=cn.parameters)==null?void 0:ut.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(dt=(it=cn.parameters)==null?void 0:it.docs)==null?void 0:dt.source}}};var pt,mt,lt;un.parameters={...un.parameters,docs:{...(pt=un.parameters)==null?void 0:pt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(lt=(mt=un.parameters)==null?void 0:mt.docs)==null?void 0:lt.source}}};var gt,vt,bt;dn.parameters={...dn.parameters,docs:{...(gt=dn.parameters)==null?void 0:gt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(bt=(vt=dn.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var Bt,At,St;pn.parameters={...pn.parameters,docs:{...(Bt=pn.parameters)==null?void 0:Bt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(St=(At=pn.parameters)==null?void 0:At.docs)==null?void 0:St.source}}};var Lt,Ot,yt;mn.parameters={...mn.parameters,docs:{...(Lt=mn.parameters)==null?void 0:Lt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(yt=(Ot=mn.parameters)==null?void 0:Ot.docs)==null?void 0:yt.source}}};var kt,Dt,Tt;ln.parameters={...ln.parameters,docs:{...(kt=ln.parameters)==null?void 0:kt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Tt=(Dt=ln.parameters)==null?void 0:Dt.docs)==null?void 0:Tt.source}}};var zt,ht,Ft;gn.parameters={...gn.parameters,docs:{...(zt=gn.parameters)==null?void 0:zt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ft=(ht=gn.parameters)==null?void 0:ht.docs)==null?void 0:Ft.source}}};var It,Rt,ft;vn.parameters={...vn.parameters,docs:{...(It=vn.parameters)==null?void 0:It.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ft=(Rt=vn.parameters)==null?void 0:Rt.docs)==null?void 0:ft.source}}};var Et,Mt,Gt;bn.parameters={...bn.parameters,docs:{...(Et=bn.parameters)==null?void 0:Et.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Gt=(Mt=bn.parameters)==null?void 0:Mt.docs)==null?void 0:Gt.source}}};var Nt,xt,Ut;d.parameters={...d.parameters,docs:{...(Nt=d.parameters)==null?void 0:Nt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ut=(xt=d.parameters)==null?void 0:xt.docs)==null?void 0:Ut.source}}};var Yt,wt,Ct;p.parameters={...p.parameters,docs:{...(Yt=p.parameters)==null?void 0:Yt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ct=(wt=p.parameters)==null?void 0:wt.docs)==null?void 0:Ct.source}}};var Pt,Wt,jt;m.parameters={...m.parameters,docs:{...(Pt=m.parameters)==null?void 0:Pt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(jt=(Wt=m.parameters)==null?void 0:Wt.docs)==null?void 0:jt.source}}};var _t,qt,Vt;Bn.parameters={...Bn.parameters,docs:{...(_t=Bn.parameters)==null?void 0:_t.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Vt=(qt=Bn.parameters)==null?void 0:qt.docs)==null?void 0:Vt.source}}};var Ht,Jt,Kt;An.parameters={...An.parameters,docs:{...(Ht=An.parameters)==null?void 0:Ht.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Kt=(Jt=An.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source}}};var Qt,Xt,Zt;Sn.parameters={...Sn.parameters,docs:{...(Qt=Sn.parameters)==null?void 0:Qt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Zt=(Xt=Sn.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var $t,ns,es;Ln.parameters={...Ln.parameters,docs:{...($t=Ln.parameters)==null?void 0:$t.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(es=(ns=Ln.parameters)==null?void 0:ns.docs)==null?void 0:es.source}}};var rs,as,ts;On.parameters={...On.parameters,docs:{...(rs=On.parameters)==null?void 0:rs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ts=(as=On.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var ss,os,cs;yn.parameters={...yn.parameters,docs:{...(ss=yn.parameters)==null?void 0:ss.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(cs=(os=yn.parameters)==null?void 0:os.docs)==null?void 0:cs.source}}};var us,is,ds;kn.parameters={...kn.parameters,docs:{...(us=kn.parameters)==null?void 0:us.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ds=(is=kn.parameters)==null?void 0:is.docs)==null?void 0:ds.source}}};var ps,ms,ls;Dn.parameters={...Dn.parameters,docs:{...(ps=Dn.parameters)==null?void 0:ps.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ls=(ms=Dn.parameters)==null?void 0:ms.docs)==null?void 0:ls.source}}};var gs,vs,bs;Tn.parameters={...Tn.parameters,docs:{...(gs=Tn.parameters)==null?void 0:gs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(bs=(vs=Tn.parameters)==null?void 0:vs.docs)==null?void 0:bs.source}}};var Bs,As,Ss;zn.parameters={...zn.parameters,docs:{...(Bs=zn.parameters)==null?void 0:Bs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ss=(As=zn.parameters)==null?void 0:As.docs)==null?void 0:Ss.source}}};var Ls,Os,ys;hn.parameters={...hn.parameters,docs:{...(Ls=hn.parameters)==null?void 0:Ls.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ys=(Os=hn.parameters)==null?void 0:Os.docs)==null?void 0:ys.source}}};var ks,Ds,Ts;Fn.parameters={...Fn.parameters,docs:{...(ks=Fn.parameters)==null?void 0:ks.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ts=(Ds=Fn.parameters)==null?void 0:Ds.docs)==null?void 0:Ts.source}}};var zs,hs,Fs;In.parameters={...In.parameters,docs:{...(zs=In.parameters)==null?void 0:zs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Fs=(hs=In.parameters)==null?void 0:hs.docs)==null?void 0:Fs.source}}};var Is,Rs,fs;Rn.parameters={...Rn.parameters,docs:{...(Is=Rn.parameters)==null?void 0:Is.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(fs=(Rs=Rn.parameters)==null?void 0:Rs.docs)==null?void 0:fs.source}}};var Es,Ms,Gs;fn.parameters={...fn.parameters,docs:{...(Es=fn.parameters)==null?void 0:Es.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Gs=(Ms=fn.parameters)==null?void 0:Ms.docs)==null?void 0:Gs.source}}};var Ns,xs,Us;En.parameters={...En.parameters,docs:{...(Ns=En.parameters)==null?void 0:Ns.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Us=(xs=En.parameters)==null?void 0:xs.docs)==null?void 0:Us.source}}};var Ys,ws,Cs;Mn.parameters={...Mn.parameters,docs:{...(Ys=Mn.parameters)==null?void 0:Ys.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Cs=(ws=Mn.parameters)==null?void 0:ws.docs)==null?void 0:Cs.source}}};var Ps,Ws,js;Gn.parameters={...Gn.parameters,docs:{...(Ps=Gn.parameters)==null?void 0:Ps.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(js=(Ws=Gn.parameters)==null?void 0:Ws.docs)==null?void 0:js.source}}};const oo=["Default","Small","Large","DefaultIconOnly","SmallIconOnly","LargeIconOnly","DefaultLoading","SmallLoading","LargeLoading","DefaultDisabled","SmallDisabled","LargeDisabled","DefaultDisabledWithTooltip","SmallDisabledWithTooltip","LargeDisabledWithTooltip","DefaultNoRadius","SmallNoRadius","LargeNoRadius","DefaultSecondary","SmallSecondary","LargeSecondary","TertiaryOnDarkBackground","SmallTertiaryOnDarkBackground","LargeTertiaryOnDarkBackground","Outlined","SmallOutlined","LargeOutlined","OutlinedIconOnly","SmallOutlinedIconOnly","LargeOutlinedIconOnly","OutlinedLoading","SmallOutlinedLoading","LargeOutlinedLoading","OutlinedDisabled","SmallOutlinedDisabled","LargeOutlinedDisabled","OutlinedNoRadius","SmallOutlinedNoRadius","LargeOutlinedNoRadius","OutlinedSecondary","SmallOutlinedSecondary","LargeOutlinedSecondary","OutlinedTertiaryOnDarkBackground","SmallOutlinedTertiaryOnDarkBackground","LargeOutlinedTertiaryOnDarkBackground","Flat","SmallFlat","LargeFlat","FlatIconOnly","SmallFlatIconOnly","LargeFlatIconOnly","FlatLoading","SmallFlatLoading","LargeFlatLoading","FlatDisabled","SmallFlatDisabled","LargeFlatDisabled","FlatNoRadius","SmallFlatNoRadius","LargeFlatNoRadius","FlatSecondary","SmallFlatSecondary","LargeFlatSecondary","FlatTertiaryOnDarkBackground","SmallFlatTertiaryOnDarkBackground","LargeFlatTertiaryOnDarkBackground","ExternalLinkButton","SmallExternalLinkButton","LargeExternalLinkButton","LinkButton","SmallLinkButton","LargeLinkButton","LinkButtonOutlined","SmallLinkButtonOutlined","LargeLinkButtonOutlined","LinkButtonSecondary","SmallLinkButtonSecondary","LargeLinkButtonSecondary","LinkButtonIconOnly","SmallLinkButtonIconOnly","LargeLinkButtonIconOnly","ExternalLinkButtonIconOnly","SmallExternalLinkButtonIconOnly","LargeExternalLinkButtonIconOnly"];export{l as Default,y as DefaultDisabled,T as DefaultDisabledWithTooltip,b as DefaultIconOnly,S as DefaultLoading,F as DefaultNoRadius,f as DefaultSecondary,Bn as ExternalLinkButton,En as ExternalLinkButtonIconOnly,Z as Flat,cn as FlatDisabled,en as FlatIconOnly,tn as FlatLoading,pn as FlatNoRadius,gn as FlatSecondary,d as FlatTertiaryOnDarkBackground,v as Large,D as LargeDisabled,h as LargeDisabledWithTooltip,Sn as LargeExternalLinkButton,Gn as LargeExternalLinkButtonIconOnly,nn as LargeFlat,dn as LargeFlatDisabled,an as LargeFlatIconOnly,on as LargeFlatLoading,ln as LargeFlatNoRadius,bn as LargeFlatSecondary,m as LargeFlatTertiaryOnDarkBackground,A as LargeIconOnly,yn as LargeLinkButton,fn as LargeLinkButtonIconOnly,Tn as LargeLinkButtonOutlined,Fn as LargeLinkButtonSecondary,O as LargeLoading,R as LargeNoRadius,x as LargeOutlined,q as LargeOutlinedDisabled,w as LargeOutlinedIconOnly,W as LargeOutlinedLoading,J as LargeOutlinedNoRadius,X as LargeOutlinedSecondary,i as LargeOutlinedTertiaryOnDarkBackground,M as LargeSecondary,o as LargeTertiaryOnDarkBackground,Ln as LinkButton,In as LinkButtonIconOnly,kn as LinkButtonOutlined,zn as LinkButtonSecondary,G as Outlined,j as OutlinedDisabled,U as OutlinedIconOnly,C as OutlinedLoading,V as OutlinedNoRadius,K as OutlinedSecondary,c as OutlinedTertiaryOnDarkBackground,g as Small,k as SmallDisabled,z as SmallDisabledWithTooltip,An as SmallExternalLinkButton,Mn as SmallExternalLinkButtonIconOnly,$ as SmallFlat,un as SmallFlatDisabled,rn as SmallFlatIconOnly,sn as SmallFlatLoading,mn as SmallFlatNoRadius,vn as SmallFlatSecondary,p as SmallFlatTertiaryOnDarkBackground,B as SmallIconOnly,On as SmallLinkButton,Rn as SmallLinkButtonIconOnly,Dn as SmallLinkButtonOutlined,hn as SmallLinkButtonSecondary,L as SmallLoading,I as SmallNoRadius,N as SmallOutlined,_ as SmallOutlinedDisabled,Y as SmallOutlinedIconOnly,P as SmallOutlinedLoading,H as SmallOutlinedNoRadius,Q as SmallOutlinedSecondary,u as SmallOutlinedTertiaryOnDarkBackground,E as SmallSecondary,s as SmallTertiaryOnDarkBackground,t as TertiaryOnDarkBackground,oo as __namedExportsOrder,so as default};
