import{A as Ws}from"./AvButton-DRSt2f9z.js";import{i as js,g as qs}from"./storybook-DgHgqv50.js";import"./AvTooltip-3F1r9Zzu.js";import"./iframe-_2ojwWJO.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BXmA3rYq.js";import"./icon-path-u9rVYwcY.js";import"./icons-B6bk2eYx.js";import"./date-picker-BV3-HI_h.js";import"./string-6CTWp9fy.js";const ao={title:"Components/Interaction/Buttons/AvButton",component:Ws,argTypes:{label:{type:{name:"string",required:!0},control:"text"},icon:{control:"select",options:qs,mapping:js},variant:{control:{type:"radio"},options:["DEFAULT","OUTLINED","FLAT"]},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY","TERTIARY"]},size:{control:{type:"radio"},options:["SM","MD","LG"]},iconOnly:{control:"boolean"},isLoading:{control:"boolean"},iconScale:{control:"number"},noRadius:{control:"boolean"},disabled:{control:"boolean"},disabledTooltip:{control:"text"},noSentenceCase:{control:"boolean"},href:{control:"text"},to:{control:"text"}},args:{label:"Click me",icon:"",variant:"DEFAULT",theme:"PRIMARY",size:"MD",iconOnly:!1,isLoading:!1,iconScale:void 0,noRadius:!1,disabled:!1,disabledTooltip:void 0,noSentenceCase:!1,href:void 0,to:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Buttons - <code>AvButton</code></h1>

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
</ul>`}}}},e=[()=>({template:`
      <div style="background: var(--dark-background-primary1); padding: 24px; display: inline-block;">
        <story />
      </div>
    `})],n=_s=>({components:{AvButton:Ws},setup(){return{args:_s}},template:'<AvButton v-bind="args" />'}),p=n.bind({});p.args={};const m=n.bind({});m.args={size:"SM"};const l=n.bind({});l.args={size:"LG"};const Gn={iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"},g=n.bind({});g.args=Gn;const v=n.bind({});v.args={...Gn,size:"SM"};const b=n.bind({});b.args={...Gn,size:"LG"};const Mn={isLoading:!0},B=n.bind({});B.args=Mn;const A=n.bind({});A.args={...Mn,...Mn,size:"SM"};const S=n.bind({});S.args={...Mn,size:"LG"};const Nn={disabled:!0},L=n.bind({});L.args=Nn;const O=n.bind({});O.args={...Nn,size:"SM"};const y=n.bind({});y.args={...Nn,size:"LG"};const xn={disabled:!0,disabledTooltip:"This action is not available yet"},k=n.bind({});k.args=xn;const D=n.bind({});D.args={...xn,size:"SM"};const T=n.bind({});T.args={...xn,size:"LG"};const Yn={noRadius:!0},I=n.bind({});I.args=Yn;const z=n.bind({});z.args={...Yn,size:"SM"};const F=n.bind({});F.args={...Yn,size:"LG"};const Un={theme:"SECONDARY"},h=n.bind({});h.args=Un;const R=n.bind({});R.args={...Un,size:"SM"};const f=n.bind({});f.args={...Un,size:"LG"};const Cn={theme:"TERTIARY"},r=n.bind({});r.args=Cn;r.decorators=e;const a=n.bind({});a.args={...Cn,size:"SM"};a.decorators=e;const t=n.bind({});t.args={...Cn,size:"LG"};t.decorators=e;const wn={variant:"OUTLINED"},E=n.bind({});E.args=wn;const M=n.bind({});M.args={...wn,size:"SM"};const G=n.bind({});G.args={...wn,size:"LG"};const Pn={variant:"OUTLINED",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"},N=n.bind({});N.args=Pn;const x=n.bind({});x.args={...Pn,size:"SM"};const Y=n.bind({});Y.args={...Pn,size:"LG"};const Wn={variant:"OUTLINED",isLoading:!0},U=n.bind({});U.args=Wn;const C=n.bind({});C.args={...Wn,size:"SM"};const w=n.bind({});w.args={...Wn,size:"LG"};const _n={variant:"OUTLINED",disabled:!0},P=n.bind({});P.args=_n;const W=n.bind({});W.args={..._n,size:"SM"};const _=n.bind({});_.args={..._n,size:"LG"};const jn={variant:"OUTLINED",noRadius:!0},j=n.bind({});j.args=jn;const q=n.bind({});q.args={...jn,size:"SM"};const V=n.bind({});V.args={...jn,size:"LG"};const qn={variant:"OUTLINED",theme:"SECONDARY"},H=n.bind({});H.args=qn;const J=n.bind({});J.args={...qn,size:"SM"};const K=n.bind({});K.args={...qn,size:"LG"};const Vn={variant:"OUTLINED",theme:"TERTIARY"},s=n.bind({});s.args=Vn;s.decorators=e;const o=n.bind({});o.args={...Vn,size:"SM"};o.decorators=e;const c=n.bind({});c.args={...Vn,size:"LG"};c.decorators=e;const Hn={variant:"FLAT"},Q=n.bind({});Q.args=Hn;const X=n.bind({});X.args={...Hn,size:"SM"};const Z=n.bind({});Z.args={...Hn,size:"LG"};const Jn={variant:"FLAT",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Settings"},$=n.bind({});$.args=Jn;const nn=n.bind({});nn.args={...Jn,size:"SM"};const en=n.bind({});en.args={...Jn,size:"LG"};const Kn={variant:"FLAT",isLoading:!0},rn=n.bind({});rn.args=Kn;const an=n.bind({});an.args={...Kn,size:"SM"};const tn=n.bind({});tn.args={...Kn,size:"LG"};const Qn={variant:"FLAT",disabled:!0},sn=n.bind({});sn.args=Qn;const on=n.bind({});on.args={...Qn,size:"SM"};const cn=n.bind({});cn.args={...Qn,size:"LG"};const Xn={variant:"FLAT",noRadius:!0},un=n.bind({});un.args=Xn;const dn=n.bind({});dn.args={...Xn,size:"SM"};const pn=n.bind({});pn.args={...Xn,size:"LG"};const Zn={variant:"FLAT",theme:"SECONDARY"},mn=n.bind({});mn.args=Zn;const ln=n.bind({});ln.args={...Zn,size:"SM"};const gn=n.bind({});gn.args={...Zn,size:"LG"};const $n={variant:"FLAT",theme:"TERTIARY"},u=n.bind({});u.args=$n;u.decorators=e;const i=n.bind({});i.args={...$n,size:"SM"};i.decorators=e;const d=n.bind({});d.args={...$n,size:"LG"};d.decorators=e;const ne={href:"https://example.com",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"},vn=n.bind({});vn.args=ne;const bn=n.bind({});bn.args={...ne,size:"SM"};const Bn=n.bind({});Bn.args={...ne,size:"LG"};const ee={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"},An=n.bind({});An.args=ee;const Sn=n.bind({});Sn.args={...ee,size:"SM"};const Ln=n.bind({});Ln.args={...ee,size:"LG"};const re={to:"/some-route",label:"Go to some route",variant:"OUTLINED",theme:"PRIMARY"},On=n.bind({});On.args=re;const yn=n.bind({});yn.args={...re,size:"SM"};const kn=n.bind({});kn.args={...re,size:"LG"};const ae={to:"/some-route",label:"Go to some route",variant:"DEFAULT",theme:"SECONDARY"},Dn=n.bind({});Dn.args=ae;const Tn=n.bind({});Tn.args={...ae,size:"SM"};const In=n.bind({});In.args={...ae,size:"LG"};const te={to:"/some-route",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to some route",variant:"DEFAULT",theme:"PRIMARY"},zn=n.bind({});zn.args=te;const Fn=n.bind({});Fn.args={...te,size:"SM"};const hn=n.bind({});hn.args={...te,size:"LG"};const se={href:"https://example.com",iconOnly:!0,icon:"mdi:home-variant-outline",label:"Go to external site",variant:"DEFAULT",theme:"PRIMARY"},Rn=n.bind({});Rn.args=se;const fn=n.bind({});fn.args={...se,size:"SM"};const En=n.bind({});En.args={...se,size:"LG"};var oe,ce,ue;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ue=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ie,de,pe;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,le,ge;l.parameters={...l.parameters,docs:{...(me=l.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ge=(le=l.parameters)==null?void 0:le.docs)==null?void 0:ge.source}}};var ve,be,Be;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Be=(be=g.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};var Ae,Se,Le;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Le=(Se=v.parameters)==null?void 0:Se.docs)==null?void 0:Le.source}}};var Oe,ye,ke;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ke=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var De,Te,Ie;B.parameters={...B.parameters,docs:{...(De=B.parameters)==null?void 0:De.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ie=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var ze,Fe,he;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(he=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:he.source}}};var Re,fe,Ee;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ee=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Ee.source}}};var Me,Ge,Ne;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ne=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var xe,Ye,Ue;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ue=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var Ce,we,Pe;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Pe=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var We,_e,je;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(je=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var qe,Ve,He;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(He=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Je,Ke,Qe;T.parameters={...T.parameters,docs:{...(Je=T.parameters)==null?void 0:Je.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Qe=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ze,$e;I.parameters={...I.parameters,docs:{...(Xe=I.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($e=(Ze=I.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var nr,er,rr;z.parameters={...z.parameters,docs:{...(nr=z.parameters)==null?void 0:nr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(rr=(er=z.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};var ar,tr,sr;F.parameters={...F.parameters,docs:{...(ar=F.parameters)==null?void 0:ar.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(sr=(tr=F.parameters)==null?void 0:tr.docs)==null?void 0:sr.source}}};var or,cr,ur;h.parameters={...h.parameters,docs:{...(or=h.parameters)==null?void 0:or.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ur=(cr=h.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var ir,dr,pr;R.parameters={...R.parameters,docs:{...(ir=R.parameters)==null?void 0:ir.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pr=(dr=R.parameters)==null?void 0:dr.docs)==null?void 0:pr.source}}};var mr,lr,gr;f.parameters={...f.parameters,docs:{...(mr=f.parameters)==null?void 0:mr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(gr=(lr=f.parameters)==null?void 0:lr.docs)==null?void 0:gr.source}}};var vr,br,Br;r.parameters={...r.parameters,docs:{...(vr=r.parameters)==null?void 0:vr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Br=(br=r.parameters)==null?void 0:br.docs)==null?void 0:Br.source}}};var Ar,Sr,Lr;a.parameters={...a.parameters,docs:{...(Ar=a.parameters)==null?void 0:Ar.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Lr=(Sr=a.parameters)==null?void 0:Sr.docs)==null?void 0:Lr.source}}};var Or,yr,kr;t.parameters={...t.parameters,docs:{...(Or=t.parameters)==null?void 0:Or.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(kr=(yr=t.parameters)==null?void 0:yr.docs)==null?void 0:kr.source}}};var Dr,Tr,Ir;E.parameters={...E.parameters,docs:{...(Dr=E.parameters)==null?void 0:Dr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ir=(Tr=E.parameters)==null?void 0:Tr.docs)==null?void 0:Ir.source}}};var zr,Fr,hr;M.parameters={...M.parameters,docs:{...(zr=M.parameters)==null?void 0:zr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(hr=(Fr=M.parameters)==null?void 0:Fr.docs)==null?void 0:hr.source}}};var Rr,fr,Er;G.parameters={...G.parameters,docs:{...(Rr=G.parameters)==null?void 0:Rr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Er=(fr=G.parameters)==null?void 0:fr.docs)==null?void 0:Er.source}}};var Mr,Gr,Nr;N.parameters={...N.parameters,docs:{...(Mr=N.parameters)==null?void 0:Mr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Nr=(Gr=N.parameters)==null?void 0:Gr.docs)==null?void 0:Nr.source}}};var xr,Yr,Ur;x.parameters={...x.parameters,docs:{...(xr=x.parameters)==null?void 0:xr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ur=(Yr=x.parameters)==null?void 0:Yr.docs)==null?void 0:Ur.source}}};var Cr,wr,Pr;Y.parameters={...Y.parameters,docs:{...(Cr=Y.parameters)==null?void 0:Cr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Pr=(wr=Y.parameters)==null?void 0:wr.docs)==null?void 0:Pr.source}}};var Wr,_r,jr;U.parameters={...U.parameters,docs:{...(Wr=U.parameters)==null?void 0:Wr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(jr=(_r=U.parameters)==null?void 0:_r.docs)==null?void 0:jr.source}}};var qr,Vr,Hr;C.parameters={...C.parameters,docs:{...(qr=C.parameters)==null?void 0:qr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Hr=(Vr=C.parameters)==null?void 0:Vr.docs)==null?void 0:Hr.source}}};var Jr,Kr,Qr;w.parameters={...w.parameters,docs:{...(Jr=w.parameters)==null?void 0:Jr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Qr=(Kr=w.parameters)==null?void 0:Kr.docs)==null?void 0:Qr.source}}};var Xr,Zr,$r;P.parameters={...P.parameters,docs:{...(Xr=P.parameters)==null?void 0:Xr.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($r=(Zr=P.parameters)==null?void 0:Zr.docs)==null?void 0:$r.source}}};var na,ea,ra;W.parameters={...W.parameters,docs:{...(na=W.parameters)==null?void 0:na.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ra=(ea=W.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var aa,ta,sa;_.parameters={..._.parameters,docs:{...(aa=_.parameters)==null?void 0:aa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(sa=(ta=_.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var oa,ca,ua;j.parameters={...j.parameters,docs:{...(oa=j.parameters)==null?void 0:oa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ua=(ca=j.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var ia,da,pa;q.parameters={...q.parameters,docs:{...(ia=q.parameters)==null?void 0:ia.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pa=(da=q.parameters)==null?void 0:da.docs)==null?void 0:pa.source}}};var ma,la,ga;V.parameters={...V.parameters,docs:{...(ma=V.parameters)==null?void 0:ma.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ga=(la=V.parameters)==null?void 0:la.docs)==null?void 0:ga.source}}};var va,ba,Ba;H.parameters={...H.parameters,docs:{...(va=H.parameters)==null?void 0:va.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ba=(ba=H.parameters)==null?void 0:ba.docs)==null?void 0:Ba.source}}};var Aa,Sa,La;J.parameters={...J.parameters,docs:{...(Aa=J.parameters)==null?void 0:Aa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(La=(Sa=J.parameters)==null?void 0:Sa.docs)==null?void 0:La.source}}};var Oa,ya,ka;K.parameters={...K.parameters,docs:{...(Oa=K.parameters)==null?void 0:Oa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ka=(ya=K.parameters)==null?void 0:ya.docs)==null?void 0:ka.source}}};var Da,Ta,Ia;s.parameters={...s.parameters,docs:{...(Da=s.parameters)==null?void 0:Da.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ia=(Ta=s.parameters)==null?void 0:Ta.docs)==null?void 0:Ia.source}}};var za,Fa,ha;o.parameters={...o.parameters,docs:{...(za=o.parameters)==null?void 0:za.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ha=(Fa=o.parameters)==null?void 0:Fa.docs)==null?void 0:ha.source}}};var Ra,fa,Ea;c.parameters={...c.parameters,docs:{...(Ra=c.parameters)==null?void 0:Ra.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ea=(fa=c.parameters)==null?void 0:fa.docs)==null?void 0:Ea.source}}};var Ma,Ga,Na;Q.parameters={...Q.parameters,docs:{...(Ma=Q.parameters)==null?void 0:Ma.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Na=(Ga=Q.parameters)==null?void 0:Ga.docs)==null?void 0:Na.source}}};var xa,Ya,Ua;X.parameters={...X.parameters,docs:{...(xa=X.parameters)==null?void 0:xa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ua=(Ya=X.parameters)==null?void 0:Ya.docs)==null?void 0:Ua.source}}};var Ca,wa,Pa;Z.parameters={...Z.parameters,docs:{...(Ca=Z.parameters)==null?void 0:Ca.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Pa=(wa=Z.parameters)==null?void 0:wa.docs)==null?void 0:Pa.source}}};var Wa,_a,ja;$.parameters={...$.parameters,docs:{...(Wa=$.parameters)==null?void 0:Wa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ja=(_a=$.parameters)==null?void 0:_a.docs)==null?void 0:ja.source}}};var qa,Va,Ha;nn.parameters={...nn.parameters,docs:{...(qa=nn.parameters)==null?void 0:qa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ha=(Va=nn.parameters)==null?void 0:Va.docs)==null?void 0:Ha.source}}};var Ja,Ka,Qa;en.parameters={...en.parameters,docs:{...(Ja=en.parameters)==null?void 0:Ja.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Qa=(Ka=en.parameters)==null?void 0:Ka.docs)==null?void 0:Qa.source}}};var Xa,Za,$a;rn.parameters={...rn.parameters,docs:{...(Xa=rn.parameters)==null?void 0:Xa.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($a=(Za=rn.parameters)==null?void 0:Za.docs)==null?void 0:$a.source}}};var nt,et,rt;an.parameters={...an.parameters,docs:{...(nt=an.parameters)==null?void 0:nt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(rt=(et=an.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var at,tt,st;tn.parameters={...tn.parameters,docs:{...(at=tn.parameters)==null?void 0:at.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(st=(tt=tn.parameters)==null?void 0:tt.docs)==null?void 0:st.source}}};var ot,ct,ut;sn.parameters={...sn.parameters,docs:{...(ot=sn.parameters)==null?void 0:ot.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ut=(ct=sn.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var it,dt,pt;on.parameters={...on.parameters,docs:{...(it=on.parameters)==null?void 0:it.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(pt=(dt=on.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,lt,gt;cn.parameters={...cn.parameters,docs:{...(mt=cn.parameters)==null?void 0:mt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(gt=(lt=cn.parameters)==null?void 0:lt.docs)==null?void 0:gt.source}}};var vt,bt,Bt;un.parameters={...un.parameters,docs:{...(vt=un.parameters)==null?void 0:vt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Bt=(bt=un.parameters)==null?void 0:bt.docs)==null?void 0:Bt.source}}};var At,St,Lt;dn.parameters={...dn.parameters,docs:{...(At=dn.parameters)==null?void 0:At.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Lt=(St=dn.parameters)==null?void 0:St.docs)==null?void 0:Lt.source}}};var Ot,yt,kt;pn.parameters={...pn.parameters,docs:{...(Ot=pn.parameters)==null?void 0:Ot.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(kt=(yt=pn.parameters)==null?void 0:yt.docs)==null?void 0:kt.source}}};var Dt,Tt,It;mn.parameters={...mn.parameters,docs:{...(Dt=mn.parameters)==null?void 0:Dt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(It=(Tt=mn.parameters)==null?void 0:Tt.docs)==null?void 0:It.source}}};var zt,Ft,ht;ln.parameters={...ln.parameters,docs:{...(zt=ln.parameters)==null?void 0:zt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ht=(Ft=ln.parameters)==null?void 0:Ft.docs)==null?void 0:ht.source}}};var Rt,ft,Et;gn.parameters={...gn.parameters,docs:{...(Rt=gn.parameters)==null?void 0:Rt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Et=(ft=gn.parameters)==null?void 0:ft.docs)==null?void 0:Et.source}}};var Mt,Gt,Nt;u.parameters={...u.parameters,docs:{...(Mt=u.parameters)==null?void 0:Mt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Nt=(Gt=u.parameters)==null?void 0:Gt.docs)==null?void 0:Nt.source}}};var xt,Yt,Ut;i.parameters={...i.parameters,docs:{...(xt=i.parameters)==null?void 0:xt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ut=(Yt=i.parameters)==null?void 0:Yt.docs)==null?void 0:Ut.source}}};var Ct,wt,Pt;d.parameters={...d.parameters,docs:{...(Ct=d.parameters)==null?void 0:Ct.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Pt=(wt=d.parameters)==null?void 0:wt.docs)==null?void 0:Pt.source}}};var Wt,_t,jt;vn.parameters={...vn.parameters,docs:{...(Wt=vn.parameters)==null?void 0:Wt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(jt=(_t=vn.parameters)==null?void 0:_t.docs)==null?void 0:jt.source}}};var qt,Vt,Ht;bn.parameters={...bn.parameters,docs:{...(qt=bn.parameters)==null?void 0:qt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ht=(Vt=bn.parameters)==null?void 0:Vt.docs)==null?void 0:Ht.source}}};var Jt,Kt,Qt;Bn.parameters={...Bn.parameters,docs:{...(Jt=Bn.parameters)==null?void 0:Jt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Qt=(Kt=Bn.parameters)==null?void 0:Kt.docs)==null?void 0:Qt.source}}};var Xt,Zt,$t;An.parameters={...An.parameters,docs:{...(Xt=An.parameters)==null?void 0:Xt.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...($t=(Zt=An.parameters)==null?void 0:Zt.docs)==null?void 0:$t.source}}};var ns,es,rs;Sn.parameters={...Sn.parameters,docs:{...(ns=Sn.parameters)==null?void 0:ns.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(rs=(es=Sn.parameters)==null?void 0:es.docs)==null?void 0:rs.source}}};var as,ts,ss;Ln.parameters={...Ln.parameters,docs:{...(as=Ln.parameters)==null?void 0:as.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ss=(ts=Ln.parameters)==null?void 0:ts.docs)==null?void 0:ss.source}}};var os,cs,us;On.parameters={...On.parameters,docs:{...(os=On.parameters)==null?void 0:os.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(us=(cs=On.parameters)==null?void 0:cs.docs)==null?void 0:us.source}}};var is,ds,ps;yn.parameters={...yn.parameters,docs:{...(is=yn.parameters)==null?void 0:is.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ps=(ds=yn.parameters)==null?void 0:ds.docs)==null?void 0:ps.source}}};var ms,ls,gs;kn.parameters={...kn.parameters,docs:{...(ms=kn.parameters)==null?void 0:ms.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(gs=(ls=kn.parameters)==null?void 0:ls.docs)==null?void 0:gs.source}}};var vs,bs,Bs;Dn.parameters={...Dn.parameters,docs:{...(vs=Dn.parameters)==null?void 0:vs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Bs=(bs=Dn.parameters)==null?void 0:bs.docs)==null?void 0:Bs.source}}};var As,Ss,Ls;Tn.parameters={...Tn.parameters,docs:{...(As=Tn.parameters)==null?void 0:As.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ls=(Ss=Tn.parameters)==null?void 0:Ss.docs)==null?void 0:Ls.source}}};var Os,ys,ks;In.parameters={...In.parameters,docs:{...(Os=In.parameters)==null?void 0:Os.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(ks=(ys=In.parameters)==null?void 0:ys.docs)==null?void 0:ks.source}}};var Ds,Ts,Is;zn.parameters={...zn.parameters,docs:{...(Ds=zn.parameters)==null?void 0:Ds.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Is=(Ts=zn.parameters)==null?void 0:Ts.docs)==null?void 0:Is.source}}};var zs,Fs,hs;Fn.parameters={...Fn.parameters,docs:{...(zs=Fn.parameters)==null?void 0:zs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(hs=(Fs=Fn.parameters)==null?void 0:Fs.docs)==null?void 0:hs.source}}};var Rs,fs,Es;hn.parameters={...hn.parameters,docs:{...(Rs=hn.parameters)==null?void 0:Rs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Es=(fs=hn.parameters)==null?void 0:fs.docs)==null?void 0:Es.source}}};var Ms,Gs,Ns;Rn.parameters={...Rn.parameters,docs:{...(Ms=Rn.parameters)==null?void 0:Ms.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ns=(Gs=Rn.parameters)==null?void 0:Gs.docs)==null?void 0:Ns.source}}};var xs,Ys,Us;fn.parameters={...fn.parameters,docs:{...(xs=fn.parameters)==null?void 0:xs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Us=(Ys=fn.parameters)==null?void 0:Ys.docs)==null?void 0:Us.source}}};var Cs,ws,Ps;En.parameters={...En.parameters,docs:{...(Cs=En.parameters)==null?void 0:Cs.docs,source:{originalSource:`args => ({
  components: {
    AvButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvButton v-bind="args" />\`
})`,...(Ps=(ws=En.parameters)==null?void 0:ws.docs)==null?void 0:Ps.source}}};const to=["Default","Small","Large","DefaultIconOnly","SmallIconOnly","LargeIconOnly","DefaultLoading","SmallLoading","LargeLoading","DefaultDisabled","SmallDisabled","LargeDisabled","DefaultDisabledWithTooltip","SmallDisabledWithTooltip","LargeDisabledWithTooltip","DefaultNoRadius","SmallNoRadius","LargeNoRadius","DefaultSecondary","SmallSecondary","LargeSecondary","TertiaryOnDarkBackground","SmallTertiaryOnDarkBackground","LargeTertiaryOnDarkBackground","Outlined","SmallOutlined","LargeOutlined","OutlinedIconOnly","SmallOutlinedIconOnly","LargeOutlinedIconOnly","OutlinedLoading","SmallOutlinedLoading","LargeOutlinedLoading","OutlinedDisabled","SmallOutlinedDisabled","LargeOutlinedDisabled","OutlinedNoRadius","SmallOutlinedNoRadius","LargeOutlinedNoRadius","OutlinedSecondary","SmallOutlinedSecondary","LargeOutlinedSecondary","OutlinedTertiaryOnDarkBackground","SmallOutlinedTertiaryOnDarkBackground","LargeOutlinedTertiaryOnDarkBackground","Flat","SmallFlat","LargeFlat","FlatIconOnly","SmallFlatIconOnly","LargeFlatIconOnly","FlatLoading","SmallFlatLoading","LargeFlatLoading","FlatDisabled","SmallFlatDisabled","LargeFlatDisabled","FlatNoRadius","SmallFlatNoRadius","LargeFlatNoRadius","FlatSecondary","SmallFlatSecondary","LargeFlatSecondary","FlatTertiaryOnDarkBackground","SmallFlatTertiaryOnDarkBackground","LargeFlatTertiaryOnDarkBackground","ExternalLinkButton","SmallExternalLinkButton","LargeExternalLinkButton","LinkButton","SmallLinkButton","LargeLinkButton","LinkButtonOutlined","SmallLinkButtonOutlined","LargeLinkButtonOutlined","LinkButtonSecondary","SmallLinkButtonSecondary","LargeLinkButtonSecondary","LinkButtonIconOnly","SmallLinkButtonIconOnly","LargeLinkButtonIconOnly","ExternalLinkButtonIconOnly","SmallExternalLinkButtonIconOnly","LargeExternalLinkButtonIconOnly"];export{p as Default,L as DefaultDisabled,k as DefaultDisabledWithTooltip,g as DefaultIconOnly,B as DefaultLoading,I as DefaultNoRadius,h as DefaultSecondary,vn as ExternalLinkButton,Rn as ExternalLinkButtonIconOnly,Q as Flat,sn as FlatDisabled,$ as FlatIconOnly,rn as FlatLoading,un as FlatNoRadius,mn as FlatSecondary,u as FlatTertiaryOnDarkBackground,l as Large,y as LargeDisabled,T as LargeDisabledWithTooltip,Bn as LargeExternalLinkButton,En as LargeExternalLinkButtonIconOnly,Z as LargeFlat,cn as LargeFlatDisabled,en as LargeFlatIconOnly,tn as LargeFlatLoading,pn as LargeFlatNoRadius,gn as LargeFlatSecondary,d as LargeFlatTertiaryOnDarkBackground,b as LargeIconOnly,Ln as LargeLinkButton,hn as LargeLinkButtonIconOnly,kn as LargeLinkButtonOutlined,In as LargeLinkButtonSecondary,S as LargeLoading,F as LargeNoRadius,G as LargeOutlined,_ as LargeOutlinedDisabled,Y as LargeOutlinedIconOnly,w as LargeOutlinedLoading,V as LargeOutlinedNoRadius,K as LargeOutlinedSecondary,c as LargeOutlinedTertiaryOnDarkBackground,f as LargeSecondary,t as LargeTertiaryOnDarkBackground,An as LinkButton,zn as LinkButtonIconOnly,On as LinkButtonOutlined,Dn as LinkButtonSecondary,E as Outlined,P as OutlinedDisabled,N as OutlinedIconOnly,U as OutlinedLoading,j as OutlinedNoRadius,H as OutlinedSecondary,s as OutlinedTertiaryOnDarkBackground,m as Small,O as SmallDisabled,D as SmallDisabledWithTooltip,bn as SmallExternalLinkButton,fn as SmallExternalLinkButtonIconOnly,X as SmallFlat,on as SmallFlatDisabled,nn as SmallFlatIconOnly,an as SmallFlatLoading,dn as SmallFlatNoRadius,ln as SmallFlatSecondary,i as SmallFlatTertiaryOnDarkBackground,v as SmallIconOnly,Sn as SmallLinkButton,Fn as SmallLinkButtonIconOnly,yn as SmallLinkButtonOutlined,Tn as SmallLinkButtonSecondary,A as SmallLoading,z as SmallNoRadius,M as SmallOutlined,W as SmallOutlinedDisabled,x as SmallOutlinedIconOnly,C as SmallOutlinedLoading,q as SmallOutlinedNoRadius,J as SmallOutlinedSecondary,o as SmallOutlinedTertiaryOnDarkBackground,R as SmallSecondary,a as SmallTertiaryOnDarkBackground,r as TertiaryOnDarkBackground,to as __namedExportsOrder,ao as default};
