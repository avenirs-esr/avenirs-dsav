import{A as T}from"./AvIconText-DkoTyLmF.js";import{A as x}from"./AvButton-DqqCDEfd.js";import{_ as E}from"./AvCancelConfirmButtons-xxPbe1NU.js";import{d as M,S as D,c as O,r as h,w as S,o as q,$ as N,h as g,i as y,u as n,j as _,a0 as z,g as p,k as a,H as U,n as $,e as R,l as v,f as j}from"./iframe-CQX1b8Yz.js";import{F as K}from"./focus-trap-vue.esm-browser-CNp0nR0o.js";import{M as i}from"./icons-DSO42OmF.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BV59L0Mk.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvCheckbox-CmjdUkND.js";import"./AvFieldsetElement-BN_3oEgo.js";import"./AvMessage-TkseEWZ9.js";import"./AvCheckboxesGroup-CIoeeT6e.js";import"./AvFieldset-CBVy5f_P.js";import"./AvListItem-BfRKFkw6.js";import"./AvRadioButton-D8HVk_fe.js";import"./AvRadioButtonSet-CFYFqPAN.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";const F=["id","aria-labelledby","role","open"],H={class:"av-container av-container--md av-container--lg av-container-fluid av-w-full"},V={class:"av-modal__body av-pt-sm av-pt-none--md"},G={class:"av-modal__content av-mb-4xl av-px-lg av-pt-sm--md"},J=["id"],P={class:"av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl"},w=M({__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>i.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},confirmButtonLabel:{},confirmButtonIcon:{default:()=>i.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean}},emits:["close","confirm"],setup(e,{emit:r}){const d=r,L=D(),c=e.id??`modal-${crypto.randomUUID()}`,k=O(()=>e.isAlert?"alertdialog":"dialog"),b=h(null),m=h();S(()=>e.opened,t=>{var o,s,f;t?((o=m.value)==null||o.showModal(),(s=b.value)==null||s.focus()):(f=m.value)==null||f.close(),u(t)});function u(t){typeof window<"u"&&document.body.classList.toggle("modal-open",t)}return q(()=>{u(e.opened)}),N(()=>{u(!1)}),(t,o)=>{const s=E;return p(),g(z,{to:"body"},[e.opened?(p(),g(n(K),{key:0},{default:_(()=>[a("dialog",{id:n(c),ref_key:"modal",ref:m,"aria-modal":"true","aria-labelledby":`${n(c)}-header`,role:n(k),class:$(["av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none",{"av-modal--opened av-w-full av-h-full":e.opened}]),open:e.opened,onKeydown:o[2]||(o[2]=U(f=>d("close"),["esc"]))},[a("div",H,[a("div",V,[a("div",G,[L.header?(p(),R("div",{key:0,id:`${n(c)}-header`,class:"header av-row av-align-center av-pb-md"},[v(t.$slots,"header",{},void 0,!0)],8,J)):y("",!0),v(t.$slots,"default",{},void 0,!0)]),a("div",P,[j(s,{ref_key:"closeBtn",ref:b,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-is-loading":e.isLoading,onCancel:o[0]||(o[0]=()=>d("close")),onConfirm:o[1]||(o[1]=()=>d("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-is-loading"]),v(t.$slots,"footer",{},void 0,!0)])])])],42,F)]),_:3})):y("",!0)])}}}),I=Y(w,[["__scopeId","data-v-69a8dcc9"]]);w.__docgenInfo={exportName:"default",displayName:"AvModal",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the modal.",tags:{default:[{description:"`modal-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"opened",description:"Indicates whether the modal is open.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isAlert",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonLabel",description:"Label and title (for accessibility) of the close button.",required:!0,type:{name:"string"}},{name:"closeButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"closeButtonDisabled",description:"Adds a disabled state on the close button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"confirmButtonLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmButtonDisabled",description:"Adds a disabled state on the confirm button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Adds a loading state on the close button.",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"confirm"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"]};const be={title:"Components/Overlay/Modals/AvModal",component:I,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:i.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,confirmButtonLabel:"Confirm",confirmButtonIcon:i.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},Q=e=>({components:{AvModal:I,AvIconText:T,AvButton:x},setup(){const r=h(e.opened);return{args:e,show:r}},template:`
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
  `}),l=Q.bind({});l.args={};var B,A,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const ge=["Default"];export{l as Default,ge as __namedExportsOrder,be as default};
