import{d as X,a as Y,j as f,v as b,A as g,e as u}from"./iframe-D7OPTHdM.js";import"./AvListItem-1ljKoXyY.js";import"./AvRadioButton-BeRXBRP7.js";import"./AvRadioButtonSet-BASXorUB.js";import{M as C}from"./icons-DLnh1uvi.js";import{A as v}from"./AvButton-CB6qqIkn.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-D6WBB9X2.js";import"./iconify-CG-Oriw0.js";import"./string-BZgCOP9D.js";const $={class:"av-cancel-confirm-buttons-container"},P=X({__name:"AvCancelConfirmButtons",props:{cancelLabel:{},cancelIcon:{default:()=>C.CLOSE_CIRCLE_OUTLINE},cancelDisabled:{type:Boolean},cancelIsLoading:{type:Boolean},confirmLabel:{},confirmIcon:{default:()=>C.CLOSE_CIRCLE_OUTLINE},confirmDisabled:{type:Boolean},confirmIsLoading:{type:Boolean}},emits:["cancel","confirm"],setup(n,{emit:W}){const p=W;return(_,d)=>(u(),Y("div",$,[n.cancelLabel?(u(),f(g(v),{key:0,icon:n.cancelIcon,label:n.cancelLabel,title:n.cancelLabel,variant:"OUTLINED","is-loading":n.cancelIsLoading,disabled:n.cancelDisabled,size:"sm",onClick:d[0]||(d[0]=()=>p("cancel"))},null,8,["icon","label","title","is-loading","disabled"])):b("",!0),n.confirmLabel?(u(),f(g(v),{key:1,icon:n.confirmIcon,label:n.confirmLabel,title:n.confirmLabel,variant:"FLAT","is-loading":n.confirmIsLoading,disabled:n.confirmDisabled,size:"sm",onClick:d[1]||(d[1]=()=>p("confirm"))},null,8,["icon","label","title","is-loading","disabled"])):b("",!0)]))}}),Q=Z(P,[["__scopeId","data-v-b2b6579f"]]);P.__docgenInfo={exportName:"default",displayName:"AvCancelConfirmButtons",description:"",tags:{},props:[{name:"cancelLabel",description:"Label and title (for accessibility) of the cancel button.",required:!1,type:{name:"string"}},{name:"cancelIcon",description:"Icon name of the cancel button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"cancelDisabled",description:"Adds a disabled state on the cancel button.",required:!1,type:{name:"boolean"}},{name:"cancelIsLoading",description:"Adds a loading state on the cancel button.",required:!1,type:{name:"boolean"}},{name:"confirmLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmDisabled",description:"Adds a disabled state on the confirm button.",required:!1,type:{name:"boolean"}},{name:"confirmIsLoading",description:"Adds a loading state on the confirm button.",required:!1,type:{name:"boolean"}}],events:[{name:"cancel"},{name:"confirm"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.vue"]};const un={title:"Components/Interaction/Buttons/AvCancelConfirmButtons",component:Q,argTypes:{cancelLabel:{control:"text"},cancelIcon:{control:"text"},cancelDisabled:{control:"boolean"},cancelIsLoading:{control:"boolean"},confirmLabel:{control:"text"},confirmIcon:{control:"text"},confirmDisabled:{control:"boolean"},confirmIsLoading:{control:"boolean"}},args:{cancelLabel:"Cancel",cancelIcon:void 0,confirmLabel:"Confirm",confirmIcon:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCancelConfirmButtons</code> is an interaction element with an interface enabling the user
    to perform a cancel and/or a confirm action.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    This component consists of two optional buttons:
  </span>
</p>

<ul>
  <li>
    <span class="b2-regular">
      A <strong>cancel button</strong>, displayed by passing the <code>cancelLabel</code> prop.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A <strong>confirm button</strong>, displayed by passing the <code>confirmLabel</code> prop.
    </span>
  </li>
</ul>`}}}},e=n=>({components:{AvCancelConfirmButtons:Q},setup(){return{args:n}},template:'<AvCancelConfirmButtons v-bind="args" />'}),a=e.bind({});a.args={};const o=e.bind({});o.args={cancelLabel:"Cancel",confirmLabel:void 0};const t=e.bind({});t.args={confirmLabel:"Confirm",cancelLabel:void 0};const r=e.bind({});r.args={cancelDisabled:!0};const s=e.bind({});s.args={confirmDisabled:!0};const c=e.bind({});c.args={cancelDisabled:!0,confirmDisabled:!0};const i=e.bind({});i.args={cancelIsLoading:!0};const l=e.bind({});l.args={confirmIsLoading:!0};const m=e.bind({});m.args={cancelIsLoading:!0,confirmIsLoading:!0};var L,B,A;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(A=(B=a.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var I,y,h;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var D,S,O;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var k,x,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(E=(x=r.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var q,T,N;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var w,U,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(z=(U=c.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var F,M,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var j,V,G;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(G=(V=l.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const pn=["Default","CancelOnly","ConfirmOnly","CancelDisabled","ConfirmDisabled","BothDisabled","CancelLoading","ConfirmLoading","BothLoading"];export{c as BothDisabled,m as BothLoading,r as CancelDisabled,i as CancelLoading,o as CancelOnly,s as ConfirmDisabled,l as ConfirmLoading,t as ConfirmOnly,a as Default,pn as __namedExportsOrder,un as default};
