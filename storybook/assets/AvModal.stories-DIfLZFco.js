import{A as E}from"./AvIconText-CAqVq0lk.js";import{A as M}from"./AvButton-Dci_2BeC.js";import{_ as D}from"./AvCancelConfirmButtons-Bfw5KMgS.js";import{d as x,T as O,c as v,r as h,w as q,o as N,Z as S,h as B,i as y,u as s,y as _,_ as z,g as f,z as n,E as U,A as R,e as $,B as p,f as K}from"./iframe-BY5iJQ77.js";import{F as Y}from"./focus-trap-vue.esm-browser-7_69QdWA.js";import{M as i}from"./icons-DLse1evt.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-cV2yP7uA.js";import"./string-BZgCOP9D.js";import"./AvCheckbox-DreZgfj2.js";import"./AvFieldsetElement-icjkQmgC.js";import"./AvMessage-U3D5Np7E.js";import"./AvCheckboxesGroup-i2_w7iLr.js";import"./AvFieldset-DKMXjP_8.js";import"./AvListItem-CuqYTtcM.js";import"./AvRadioButton-CV1kK-Mr.js";import"./AvRadioButtonSet-DQU-w1wi.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";const H=["id","aria-labelledby","role","open"],V={class:"av-container av-container--md av-container-fluid"},j={class:"av-modal__body"},Z={class:"av-modal__content"},G={key:0,class:"header"},J={class:"av-modal__footer"},w=x({__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>i.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},confirmButtonLabel:{},confirmButtonIcon:{default:()=>i.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean}},emits:["close","confirm"],setup(e,{emit:r}){const c=r,k=O(),b=v(()=>e.id??`modal-${crypto.randomUUID()}`),T=v(()=>e.isAlert?"alertdialog":"dialog"),g=h(null),d=h();q(()=>e.opened,t=>{var o,l,u;t?((o=d.value)==null||o.showModal(),(l=g.value)==null||l.focus()):(u=d.value)==null||u.close(),m(t)});function m(t){typeof window<"u"&&document.body.classList.toggle("modal-open",t)}return N(()=>{m(e.opened)}),S(()=>{m(!1)}),(t,o)=>{const l=D;return f(),B(z,{to:"body"},[e.opened?(f(),B(s(Y),{key:0},{default:_(()=>[n("dialog",{id:s(b),ref_key:"modal",ref:d,"aria-modal":"true","aria-labelledby":s(b),role:s(T),class:R(["av-modal",{"av-modal--opened":e.opened}]),open:e.opened,onKeydown:o[2]||(o[2]=U(u=>c("close"),["esc"]))},[n("div",V,[n("div",j,[n("div",Z,[k.header?(f(),$("div",G,[p(t.$slots,"header",{},void 0,!0)])):y("",!0),p(t.$slots,"default",{},void 0,!0)]),n("div",J,[K(l,{ref_key:"closeBtn",ref:g,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-is-loading":e.isLoading,onCancel:o[0]||(o[0]=()=>c("close")),onConfirm:o[1]||(o[1]=()=>c("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-is-loading"]),p(t.$slots,"footer",{},void 0,!0)])])])],42,H)]),_:3})):y("",!0)])}}}),L=F(w,[["__scopeId","data-v-82e0cdaa"]]);w.__docgenInfo={exportName:"default",displayName:"AvModal",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the modal.",tags:{default:[{description:"`modal-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"opened",description:"Indicates whether the modal is open.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isAlert",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonLabel",description:"Label and title (for accessibility) of the close button.",required:!0,type:{name:"string"}},{name:"closeButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"closeButtonDisabled",description:"Adds a disabled state on the close button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"confirmButtonLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmButtonDisabled",description:"Adds a disabled state on the confirm button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Adds a loading state on the close button.",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"confirm"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"]};const be={title:"Components/Overlay/Modals/AvModal",component:L,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:i.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,confirmButtonLabel:"Confirm",confirmButtonIcon:i.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvModal</code> allows the user's attention to be focused exclusively on a task or a piece of information,
  without losing the context of the current page. This component requires a user action to be opened or closed.
</p>

<p class="b2-regular">
  The <code>AvModal</code> component is a configurable modal window offering advanced features such as focus trapping,
  escape key handling for closure, and action button management. This component is designed to display dialogs and alerts
  in an accessible and ergonomic way.
</p>

<h2 class="n2">🏗️ Structure</h2>

<p class="b2-regular">
  The default modal is used to highlight information that does not require user action. It is displayed when a button is clicked.
  It consists of the following elements:
</p>

<ul>
  <li>The title (slot <code>header</code>), optional,</li>
  <li>The content zone (slot <code>default</code>), mandatory,</li>
  <li>The right-justified footer zone, which can be filled using the <code>footer</code> slot.
      This zone always includes the close button to the left of the custom slot elements,
      and must contain buttons only.</li>
</ul>`}}}},P=e=>({components:{AvModal:L,AvIconText:E,AvButton:M},setup(){const r=h(e.opened);return{args:e,show:r}},template:`
    <button @click="show = true">Open modal</button>
    <AvModal v-bind="args" :opened="show" @close="show = false">
      <template #header>
        <AvIconText
          icon="mdi:swap-horizontal"
          icon-color="var(--dark-background-primary1)"
          text="Changer d'univers"
          text-color="var(--title)"
          typography-class="n6"
          gap="var(--spacing-sm)"
        />
      </template>
      <div class="modal-content">
        <AvButton
          label="Enseignant"
          theme="SECONDARY"
          size="sm"
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          size="sm"
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  `}),a=P.bind({});a.args={};var A,C,I;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvModal,
    AvIconText,
    AvButton
  },
  setup() {
    const show = ref(args.opened);
    return {
      args,
      show
    };
  },
  template: \`
    <button @click="show = true">Open modal</button>
    <AvModal v-bind="args" :opened="show" @close="show = false">
      <template #header>
        <AvIconText
          icon="mdi:swap-horizontal"
          icon-color="var(--dark-background-primary1)"
          text="Changer d'univers"
          text-color="var(--title)"
          typography-class="n6"
          gap="var(--spacing-sm)"
        />
      </template>
      <div class="modal-content">
        <AvButton
          label="Enseignant"
          theme="SECONDARY"
          size="sm"
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          size="sm"
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  \`
})`,...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const ge=["Default"];export{a as Default,ge as __namedExportsOrder,be as default};
