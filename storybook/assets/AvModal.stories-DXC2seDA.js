import{A as T}from"./AvIconText-C8VnK7wo.js";import{A as M}from"./AvButton-BQgY7fqn.js";import{_ as x}from"./AvCancelConfirmButtons-C-uLaFY_.js";import{d as E,V as D,h as q,c as N,r as h,w as S,o as _,a0 as $,i as g,j as y,u as n,k as U,a1 as z,g as p,l,m as R,$ as j,t as K,e as Y,p as v,f as F}from"./iframe-h44EQq5f.js";import{F as V}from"./focus-trap-vue.esm-browser-BgDrfnaI.js";import{M as c}from"./icons-YGS6wEJ5.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CzWoTiFn.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvCheckbox-BD5gBscs.js";import"./AvFieldsetElement-B6yzooYb.js";import"./AvMessage-DXcb4w1n.js";import"./AvCheckboxesGroup-CQNvd5FE.js";import"./AvFieldset-C0QJMW2E.js";import"./AvCheckboxListItem-DDWfa7H_.js";import"./AvList-BFai8yMZ.js";import"./AvRadioButton-DVUeUybX.js";import"./AvRadioButtonSet-BkHsImRh.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";const P=["id","aria-labelledby","role","open"],G={class:"av-container av-container--md av-container--lg av-container-fluid av-w-full"},J={class:"av-modal__body av-pt-sm av-pt-none--md"},Q={class:"av-modal__content av-mb-4xl av-px-lg av-pt-sm--md"},W=["id"],X={class:"av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl"},k=E({inheritAttrs:!1,__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>c.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},confirmButtonLabel:{},confirmButtonIcon:{default:()=>c.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean}},emits:["close","confirm","clickOutside"],setup(e,{emit:d}){const a=d,I=D(),L=q(),u=e.id??`modal-${crypto.randomUUID()}`,O=N(()=>e.isAlert?"alertdialog":"dialog"),b=h(null),m=h();S(()=>e.opened,t=>{var o,i,r;t?((o=m.value)==null||o.showModal(),(i=b.value)==null||i.focus()):(r=m.value)==null||r.close(),f(t)});function f(t){typeof window<"u"&&document.body.classList.toggle("modal-open",t)}return _(()=>{f(e.opened)}),$(()=>{f(!1)}),(t,o)=>{const i=x;return p(),g(z,{to:"body"},[e.opened?(p(),g(n(V),{key:0},{default:U(()=>[l("dialog",R({id:n(u),ref_key:"modal",ref:m},n(L),{"aria-modal":"true","aria-labelledby":`${n(u)}-header`,role:n(O),class:["av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none",{"av-modal--opened av-w-full av-h-full":e.opened}],open:e.opened,onKeydown:o[2]||(o[2]=K(r=>a("close"),["esc"])),onClick:o[3]||(o[3]=j(r=>a("clickOutside"),["self"]))}),[l("div",G,[l("div",J,[l("div",Q,[I.header?(p(),Y("div",{key:0,id:`${n(u)}-header`,class:"header av-row av-align-center av-pb-md"},[v(t.$slots,"header",{},void 0,!0)],8,W)):y("",!0),v(t.$slots,"default",{},void 0,!0)]),l("div",X,[F(i,{ref_key:"closeBtn",ref:b,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-is-loading":e.isLoading,onCancel:o[0]||(o[0]=()=>a("close")),onConfirm:o[1]||(o[1]=()=>a("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-is-loading"]),v(t.$slots,"footer",{},void 0,!0)])])])],16,P)]),_:3})):y("",!0)])}}}),w=H(k,[["__scopeId","data-v-5f7ca76a"]]);k.__docgenInfo={exportName:"default",displayName:"AvModal",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the modal.",tags:{default:[{description:"`modal-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"opened",description:"Indicates whether the modal is open.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isAlert",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonLabel",description:"Label and title (for accessibility) of the close button.",required:!0,type:{name:"string"}},{name:"closeButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"closeButtonDisabled",description:"Adds a disabled state on the close button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"confirmButtonLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmButtonDisabled",description:"Adds a disabled state on the confirm button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Adds a loading state on the close button.",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"confirm"},{name:"clickOutside"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"]};const Ce={title:"Components/Overlay/Modals/AvModal",component:w,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:c.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,confirmButtonLabel:"Confirm",confirmButtonIcon:c.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},Z=e=>({components:{AvModal:w,AvIconText:T,AvButton:M},setup(){const d=()=>alert("Clicked outside!"),a=h(e.opened);return{args:e,show:a,onClickOutside:d}},template:`
    <button @click="show = true">Open modal</button>
    <AvModal v-bind="args" :opened="show" @close="show = false" @clickOutside="onClickOutside">
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
  `}),s=Z.bind({});s.args={};var B,C,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvModal,
    AvIconText,
    AvButton
  },
  setup() {
    const onClickOutside = () => alert('Clicked outside!');
    const show = ref(args.opened);
    return {
      args,
      show,
      onClickOutside
    };
  },
  template: \`
    <button @click="show = true">Open modal</button>
    <AvModal v-bind="args" :opened="show" @close="show = false" @clickOutside="onClickOutside">
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
})`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const Ae=["Default"];export{s as Default,Ae as __namedExportsOrder,Ce as default};
