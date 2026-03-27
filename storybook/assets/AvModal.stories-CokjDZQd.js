import{A as x}from"./AvIconText-Bf6yk654.js";import{A as E}from"./AvButton-CXZAjeCU.js";import{_ as M}from"./AvCancelConfirmButtons-DbRVoaCd.js";import{d as D,V as O,h as q,c as N,r as h,w as S,o as _,a0 as U,i as g,j as y,u as n,k as z,a1 as $,g as p,l as a,m as R,t as j,e as K,p as v,f as Y}from"./iframe-DJoRRokI.js";import{F}from"./focus-trap-vue.esm-browser-Dhb6FJ3D.js";import{M as i}from"./icons-8RiK4kYW.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-ChtcmsEF.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvCheckbox-BwGJIU7k.js";import"./AvFieldsetElement-Tj5SEJQB.js";import"./AvMessage-BIWSBMyf.js";import"./AvCheckboxesGroup-DHgVIovr.js";import"./AvFieldset-DKOCffg-.js";import"./AvCheckboxListItem-IqxYtunT.js";import"./AvList-CNmvnGaa.js";import"./AvRadioButton-C9q5yl6d.js";import"./AvRadioButtonSet-BRGN3b1A.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";const H=["id","aria-labelledby","role","open"],P={class:"av-container av-container--md av-container--lg av-container-fluid av-w-full"},G={class:"av-modal__body av-pt-sm av-pt-none--md"},J={class:"av-modal__content av-mb-4xl av-px-lg av-pt-sm--md"},Q=["id"],W={class:"av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl"},C=D({inheritAttrs:!1,__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>i.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},confirmButtonLabel:{},confirmButtonIcon:{default:()=>i.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean}},emits:["close","confirm"],setup(e,{emit:r}){const d=r,L=O(),k=q(),c=e.id??`modal-${crypto.randomUUID()}`,T=N(()=>e.isAlert?"alertdialog":"dialog"),b=h(null),m=h();S(()=>e.opened,t=>{var o,s,f;t?((o=m.value)==null||o.showModal(),(s=b.value)==null||s.focus()):(f=m.value)==null||f.close(),u(t)});function u(t){typeof window<"u"&&document.body.classList.toggle("modal-open",t)}return _(()=>{u(e.opened)}),U(()=>{u(!1)}),(t,o)=>{const s=M;return p(),g($,{to:"body"},[e.opened?(p(),g(n(F),{key:0},{default:z(()=>[a("dialog",R({id:n(c),ref_key:"modal",ref:m},n(k),{"aria-modal":"true","aria-labelledby":`${n(c)}-header`,role:n(T),class:["av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none",{"av-modal--opened av-w-full av-h-full":e.opened}],open:e.opened,onKeydown:o[2]||(o[2]=j(f=>d("close"),["esc"]))}),[a("div",P,[a("div",G,[a("div",J,[L.header?(p(),K("div",{key:0,id:`${n(c)}-header`,class:"header av-row av-align-center av-pb-md"},[v(t.$slots,"header",{},void 0,!0)],8,Q)):y("",!0),v(t.$slots,"default",{},void 0,!0)]),a("div",W,[Y(s,{ref_key:"closeBtn",ref:b,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-is-loading":e.isLoading,onCancel:o[0]||(o[0]=()=>d("close")),onConfirm:o[1]||(o[1]=()=>d("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-is-loading"]),v(t.$slots,"footer",{},void 0,!0)])])])],16,H)]),_:3})):y("",!0)])}}}),I=V(C,[["__scopeId","data-v-21bb36c5"]]);C.__docgenInfo={exportName:"default",displayName:"AvModal",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the modal.",tags:{default:[{description:"`modal-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"opened",description:"Indicates whether the modal is open.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isAlert",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonLabel",description:"Label and title (for accessibility) of the close button.",required:!0,type:{name:"string"}},{name:"closeButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"closeButtonDisabled",description:"Adds a disabled state on the close button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"confirmButtonLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmButtonDisabled",description:"Adds a disabled state on the confirm button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Adds a loading state on the close button.",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"confirm"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"]};const Be={title:"Components/Overlay/Modals/AvModal",component:I,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:i.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,confirmButtonLabel:"Confirm",confirmButtonIcon:i.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},X=e=>({components:{AvModal:I,AvIconText:x,AvButton:E},setup(){const r=h(e.opened);return{args:e,show:r}},template:`
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
  `}),l=X.bind({});l.args={};var B,A,w;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const Ae=["Default"];export{l as Default,Ae as __namedExportsOrder,Be as default};
