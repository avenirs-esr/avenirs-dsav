import{A as E}from"./AvIconText-CQ48bmlT.js";import{A as M}from"./AvButton-CfRd-Nmi.js";import{_ as S}from"./AvCancelConfirmButtons-BcXqRDVj.js";import{j as O,r as v,c as y,o as D,w as T,q as x,Y as N,Z as _,O as q,Q as U,E as A,K as C,u as p,G as z,X as R,m as g,v as c,D as $,A as j,l as K,k as B,x as Y}from"./iframe-DXQJXA5y.js";import{c as P}from"./focus-trap.esm-CPw4bcQR.js";import{M as b}from"./icons-DGI95zqn.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BY_XioNt.js";import"./string-BZgCOP9D.js";import"./AvCheckbox-ByRk7r97.js";import"./AvFieldsetElement-LrFivNEf.js";import"./AvMessage-Z_MXZNs0.js";import"./AvCheckboxesGroup-CKbq4hoh.js";import"./AvFieldset-B9y5n7_r.js";import"./AvListItem-Cg219Z3g.js";import"./AvRadioButton-V4wagf7B.js";import"./AvRadioButtonSet-DmnkPmjx.js";import"./preload-helper-ILsKNznc.js";/*!
  * focus-trap-vue v4.0.3
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const V={escapeDeactivates:{type:Boolean,default:!0},returnFocusOnDeactivate:{type:Boolean,default:!0},allowOutsideClick:{type:[Boolean,Function],default:!0},clickOutsideDeactivates:[Boolean,Function],initialFocus:[String,Function,Boolean],fallbackFocus:[String,Function],checkCanFocusTrap:Function,checkCanReturnFocus:Function,delayInitialFocus:{type:Boolean,default:!0},document:Object,preventScroll:Boolean,setReturnFocus:[Object,String,Boolean,Function],tabbableOptions:Object},G=O({name:"FocusTrap",props:Object.assign({active:{type:Boolean,default:!0}},V),emits:["update:active","activate","postActivate","deactivate","postDeactivate"],render(){return this.renderImpl()},setup(e,{slots:i,emit:n}){let o;const r=v(null),s=y(()=>{const t=r.value;return t&&(t instanceof HTMLElement?t:t.$el)});function d(){return o||(o=P(s.value,{escapeDeactivates:e.escapeDeactivates,allowOutsideClick:e.allowOutsideClick,returnFocusOnDeactivate:e.returnFocusOnDeactivate,clickOutsideDeactivates:e.clickOutsideDeactivates,onActivate:()=>{n("update:active",!0),n("activate")},onDeactivate:()=>{n("update:active",!1),n("deactivate")},onPostActivate:()=>n("postActivate"),onPostDeactivate:()=>n("postDeactivate"),initialFocus:e.initialFocus,fallbackFocus:e.fallbackFocus,tabbableOptions:e.tabbableOptions,delayInitialFocus:e.delayInitialFocus,preventScroll:e.preventScroll}))}return D(()=>{T(()=>e.active,t=>{t&&s.value?d().activate():o&&(o.deactivate(),(!s.value||s.value.nodeType===Node.COMMENT_NODE)&&(o=null))},{immediate:!0,flush:"post"})}),x(()=>{o&&o.deactivate(),o=null}),{activate(){d().activate()},deactivate(){o&&o.deactivate()},renderImpl(){if(!i.default)return null;const t=i.default().filter(a=>a.type!==N);return!t||!t.length||t.length>1?(console.error("[focus-trap-vue]: FocusTrap requires exactly one child."),t):_(t[0],{ref:r})}}}}),Q=["id","aria-labelledby","role","open"],X={class:"av-container av-container-md av-container--fluid"},Z={class:"av-row-md av-row-md--center"},J={class:"av-modal__body"},W={class:"av-modal__content"},ee={key:0,class:"header"},te={class:"av-modal__footer"},L=O({__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>b.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},confirmButtonLabel:{},confirmButtonIcon:{default:()=>b.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},isLoading:{type:Boolean}},emits:["close","confirm"],setup(e,{emit:i}){const n=i,o=q(),r=y(()=>e.id??`modal-${crypto.randomUUID()}`),s=y(()=>e.isAlert?"alertdialog":"dialog"),d=v(null),t=v();T(()=>e.opened,a=>{var l,f,h;a?((l=t.value)==null||l.showModal(),(f=d.value)==null||f.focus()):(h=t.value)==null||h.close(),m(a)});function m(a){typeof window<"u"&&document.body.classList.toggle("modal-open",a)}return D(()=>{m(e.opened)}),U(()=>{m(!1)}),(a,l)=>{const f=S;return g(),A(R,{to:"body"},[e.opened?(g(),A(p(G),{key:0},{default:z(()=>[c("dialog",{id:p(r),ref_key:"modal",ref:t,"aria-modal":"true","aria-labelledby":p(r),role:p(s),class:j(["av-modal",{"av-modal--opened":e.opened}]),open:e.opened,onKeydown:l[2]||(l[2]=$(h=>n("close"),["esc"]))},[c("div",X,[c("div",Z,[c("div",J,[c("div",W,[o.header?(g(),K("div",ee,[B(a.$slots,"header",{},void 0,!0)])):C("",!0),B(a.$slots,"default",{},void 0,!0)]),c("div",te,[Y(f,{ref_key:"closeBtn",ref:d,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-is-loading":e.isLoading,onCancel:l[0]||(l[0]=()=>n("close")),onConfirm:l[1]||(l[1]=()=>n("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-is-loading"]),B(a.$slots,"footer",{},void 0,!0)])])])])],42,Q)]),_:3})):C("",!0)])}}}),F=H(L,[["__scopeId","data-v-b33d60cf"]]);L.__docgenInfo={exportName:"default",displayName:"AvModal",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the modal.",tags:{default:[{description:"`modal-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"opened",description:"Indicates whether the modal is open.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isAlert",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonLabel",description:"Label and title (for accessibility) of the close button.",required:!0,type:{name:"string"}},{name:"closeButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"closeButtonDisabled",description:"Adds a disabled state on the close button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"confirmButtonLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmButtonDisabled",description:"Adds a disabled state on the confirm button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isLoading",description:"Adds a loading state on the close button.",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"confirm"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"]};const Ae={title:"Components/Overlay/Modals/AvModal",component:F,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:b.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,confirmButtonLabel:"Confirm",confirmButtonIcon:b.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},oe=e=>({components:{AvModal:F,AvIconText:E,AvButton:M},setup(){const i=v(e.opened);return{args:e,show:i}},template:`
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
          :on-click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          size="sm"
          :on-click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  `}),u=oe.bind({});u.args={};var I,k,w;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
          :on-click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          size="sm"
          :on-click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  \`
})`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Ce=["Default"];export{u as Default,Ce as __namedExportsOrder,Ae as default};
