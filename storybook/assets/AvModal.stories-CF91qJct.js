import{A as D}from"./AvIconText-WUZ-57o2.js";import{A as O}from"./AvButton-TNQ4kLrc.js";import{n as x,a3 as E,a0 as M,d as S,P as h,a7 as q,I as N,G as $,f as y,$ as n,a9 as U,g as C,T as R,L as p,e as l,z,ac as j,ab as K,h as Y,R as b,l as F}from"./iframe-w6PSbEoS.js";import{F as _}from"./focus-trap-vue.esm-browser-D3kfUFf2.js";import{_ as H}from"./AvCancelConfirmButtons-bsKQ6vmd.js";import{M as c}from"./icons-CS5vb1aa.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Bec1qqnI.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-ClvpBT6t.js";import"./use-text-truncation-B20xcPn-.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";import"./AvCheckbox-B0Eybb73.js";import"./AvFieldsetElement-C0QiPG0C.js";import"./AvMessage-Dm6tSzaI.js";import"./AvCheckboxesGroup-BARyOWJ7.js";import"./AvFieldset-JxOjuW5o.js";import"./AvCheckboxListItem-rR-CIGq2.js";import"./AvList-Blo8NXVO.js";import"./AvRadioButton-DgAYn0SZ.js";import"./AvRadioButtonSet-Bg-DG7sX.js";const V=["id","aria-labelledby","role","open"],G={class:"av-container av-container--md av-container--lg av-container-fluid av-w-full"},J={class:"av-modal__body av-pt-sm av-pt-none--md"},Q={class:"av-modal__content av-mb-4xl av-px-lg av-pt-sm--md"},W=["id"],X={class:"av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl"},T=x({inheritAttrs:!1,__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>c.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},closeButtonDisabledTooltip:{},confirmButtonLabel:{},confirmButtonIcon:{default:()=>c.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},confirmButtonDisabledTooltip:{},isLoading:{type:Boolean}},emits:["close","confirm","clickOutside"],setup(e,{emit:r}){const a=r,v=E(),g=M(),u=e.id??`modal-${crypto.randomUUID()}`,L=S(()=>e.isAlert?"alertdialog":"dialog"),m=h(null),s=h();q(()=>e.opened,t=>{var o,d,B;t?((o=s.value)==null||o.showModal(),(d=m.value)==null||d.focusCancel()):(B=s.value)==null||B.close(),f(t)},{flush:"post"});function f(t){typeof window<"u"&&document.body.classList.toggle("modal-open",t)}return N(()=>{var t,o;f(e.opened),e.opened&&((t=s.value)==null||t.showModal(),(o=m.value)==null||o.focusCancel())}),$(()=>{f(!1)}),(t,o)=>(p(),y(R,{to:"body"},[e.opened?(p(),y(n(_),{key:0},{default:U(()=>[l("dialog",z({id:n(u),ref_key:"modal",ref:s},n(g),{"aria-modal":"true","aria-labelledby":`${n(u)}-header`,role:n(L),class:["av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none",{"av-modal--opened av-w-full av-h-full":e.opened}],open:e.opened,onKeydown:o[2]||(o[2]=K(d=>a("close"),["esc"])),onClick:o[3]||(o[3]=j(d=>a("clickOutside"),["self"]))}),[l("div",G,[l("div",J,[l("div",Q,[v.header?(p(),Y("div",{key:0,id:`${n(u)}-header`,class:"header av-row av-align-center av-pb-md"},[b(t.$slots,"header",{},void 0,!0)],8,W)):C("",!0),b(t.$slots,"default",{},void 0,!0)]),l("div",X,[F(H,{ref_key:"closeBtn",ref:m,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-disabled-tooltip":e.closeButtonDisabledTooltip,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-disabled-tooltip":e.confirmButtonDisabledTooltip,"confirm-is-loading":e.isLoading,onCancel:o[0]||(o[0]=()=>a("close")),onConfirm:o[1]||(o[1]=()=>a("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-disabled-tooltip","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-disabled-tooltip","confirm-is-loading"]),b(t.$slots,"footer",{},void 0,!0)])])])],16,V)]),_:3})):C("",!0)]))}}),I=P(T,[["__scopeId","data-v-b3922cae"]]);T.__docgenInfo={exportName:"default",displayName:"AvModal",description:"",tags:{},props:[{name:"id",description:"Unique identifier for the modal.",tags:{default:[{description:"`modal-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"opened",description:"Indicates whether the modal is open.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"isAlert",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonLabel",description:"Label and title (for accessibility) of the close button.",required:!0,type:{name:"string"}},{name:"closeButtonIcon",description:"Icon name of the close button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"closeButtonDisabled",description:"Adds a disabled state on the close button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"closeButtonDisabledTooltip",description:"Adds a tooltip text to display when the close button is disabled.",required:!1,type:{name:"string"}},{name:"confirmButtonLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmButtonIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmButtonDisabled",description:"Adds a disabled state on the confirm button.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"confirmButtonDisabledTooltip",description:"Adds a tooltip text to display when the confirm button is disabled.",required:!1,type:{name:"string"}},{name:"isLoading",description:"Adds a loading state on the close and confirm buttons.",required:!1,type:{name:"boolean"}}],events:[{name:"close"},{name:"confirm"},{name:"clickOutside"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"]};const Ae={title:"Components/Overlay/Modals/AvModal",component:I,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},closeButtonDisabledTooltip:{control:"text"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},confirmButtonDisabledTooltip:{control:"text"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:c.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,closeButtonDisabledTooltip:void 0,confirmButtonLabel:"Confirm",confirmButtonIcon:c.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,confirmButtonDisabledTooltip:void 0,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},Z=e=>({components:{AvModal:I,AvIconText:D,AvButton:O},setup(){const r=()=>alert("Clicked outside!"),a=h(e.opened);return{args:e,show:a,onClickOutside:r,onTeacherButtonClick:()=>{alert("Enseignant selected!"),a.value=!1},onStudentButtonClick:()=>{alert("Étudiant selected!"),a.value=!1}}},template:`
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
          small
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          small
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  `}),i=Z.bind({});i.args={};var k,A,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvModal,
    AvIconText,
    AvButton
  },
  setup() {
    const onClickOutside = () => alert('Clicked outside!');
    const show = ref(args.opened);
    const onTeacherButtonClick = () => {
      alert('Enseignant selected!');
      show.value = false;
    };
    const onStudentButtonClick = () => {
      alert('Étudiant selected!');
      show.value = false;
    };
    return {
      args,
      show,
      onClickOutside,
      onTeacherButtonClick,
      onStudentButtonClick
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
          small
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          small
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  \`
})`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};const we=["Default"];export{i as Default,we as __namedExportsOrder,Ae as default};
