import{A as D}from"./AvIconText-D-jpwjUQ.js";import{A as x}from"./AvButton-Bf0mo01p.js";import{n as O,a3 as E,a0 as S,d as M,P as b,a7 as q,I as N,G as R,f as k,$ as a,a9 as _,g as B,T as U,L as p,e as i,z as $,ac as K,ab as z,h as P,R as h,l as V}from"./iframe-DgkEMT2l.js";import{F as j}from"./focus-trap-vue.esm-browser-urPRRH5M.js";import{_ as Y}from"./AvCancelConfirmButtons-D-Ut4QOZ.js";import{M as c}from"./icons-B6bk2eYx.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CDZUs-61.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-CFpDmL-o.js";import"./use-text-truncation-DzMRwadk.js";import"./date-picker--oZ-mZS2.js";import"./string-Cy5T4FjC.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";import"./AvCheckbox-B79lPCrq.js";import"./AvFieldsetElement-DJh1Sovj.js";import"./utils-pnJYGbuQ.js";import"./AvMessage-0-Qsef5I.js";import"./AvCheckboxesGroup-B689uAit.js";import"./AvFieldset-CcTmFdpm.js";import"./AvCheckboxListItem-CldQlhiP.js";import"./AvList-Dxmc0mb4.js";import"./AvRadioButton-DCaoygGI.js";import"./AvRadioButtonSet-CpiRv6pa.js";const H=["id","aria-labelledby","role","open"],G={class:"av-container av-container--md av-container--lg av-container-fluid av-w-full"},J={class:"av-modal__body av-pt-sm av-pt-none--md"},Q={class:"av-modal__content av-mb-4xl av-px-lg av-pt-sm--md"},W=["id"],X={class:"av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl"},A=O({inheritAttrs:!1,__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>c.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},closeButtonDisabledTooltip:{},confirmButtonLabel:{},confirmButtonIcon:{default:()=>c.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},confirmButtonDisabledTooltip:{},isLoading:{type:Boolean}},emits:["close","confirm","clickOutside"],setup(e,{emit:r}){const o=r,g=E(),y=S(),u=e.id??`modal-${crypto.randomUUID()}`,T=M(()=>e.isAlert?"alertdialog":"dialog"),m=b(null),l=b();q(()=>e.opened,t=>{var n,d,v;t?((n=l.value)==null||n.showModal(),(d=m.value)==null||d.focusCancel()):(v=l.value)==null||v.close(),f(t)},{flush:"post"});function f(t){typeof window<"u"&&document.body.classList.toggle("modal-open",t)}return N(()=>{var t,n;f(e.opened),e.opened&&((t=l.value)==null||t.showModal(),(n=m.value)==null||n.focusCancel())}),R(()=>{f(!1)}),(t,n)=>(p(),k(U,{to:"body"},[e.opened?(p(),k(a(j),{key:0},{default:_(()=>[i("dialog",$({id:a(u),ref_key:"modal",ref:l},a(y),{"aria-modal":"true","aria-labelledby":`${a(u)}-header`,role:a(T),class:["av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none",{"av-modal--opened av-w-full av-h-full":e.opened}],open:e.opened,onKeydown:n[2]||(n[2]=z(d=>o("close"),["esc"])),onClick:n[3]||(n[3]=K(d=>o("clickOutside"),["self"]))}),[i("div",G,[i("div",J,[i("div",Q,[g.header?(p(),P("div",{key:0,id:`${a(u)}-header`,class:"header av-row av-align-center av-pb-md"},[h(t.$slots,"header",{},void 0,!0)],8,W)):B("",!0),h(t.$slots,"default",{},void 0,!0)]),i("div",X,[V(Y,{ref_key:"closeBtn",ref:m,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-disabled-tooltip":e.closeButtonDisabledTooltip,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-disabled-tooltip":e.confirmButtonDisabledTooltip,"confirm-is-loading":e.isLoading,onCancel:n[0]||(n[0]=()=>o("close")),onConfirm:n[1]||(n[1]=()=>o("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-disabled-tooltip","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-disabled-tooltip","confirm-is-loading"]),h(t.$slots,"footer",{},void 0,!0)])])])],16,H)]),_:3})):B("",!0)]))}}),L=F(A,[["__scopeId","data-v-b3922cae"]]);A.__docgenInfo={exportName:"default",displayName:"AvModal",type:1,props:[{name:"id",global:!1,description:"Unique identifier for the modal.",tags:[{name:"default",text:"`modal-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"opened",global:!1,description:"Indicates whether the modal is open.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"isAlert",global:!1,description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"closeButtonLabel",global:!1,description:"Label and title (for accessibility) of the close button.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"closeButtonIcon",global:!1,description:"Icon name of the close button.",tags:[{name:"default",text:"'mdi:close-circle-outline'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:"MDI_ICONS.CLOSE_CIRCLE_OUTLINE"},{name:"closeButtonDisabled",global:!1,description:"Adds a disabled state on the close button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"closeButtonDisabledTooltip",global:!1,description:"Adds a tooltip text to display when the close button is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"confirmButtonLabel",global:!1,description:"Label and title (for accessibility) of the confirm button.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"confirmButtonIcon",global:!1,description:"Icon name of the confirm button.",tags:[{name:"default",text:"'mdi:check-circle-outline'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:"MDI_ICONS.CHECK_CIRCLE_OUTLINE"},{name:"confirmButtonDisabled",global:!1,description:"Adds a disabled state on the confirm button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"confirmButtonDisabledTooltip",global:!1,description:"Adds a tooltip text to display when the confirm button is disabled.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"isLoading",global:!1,description:"Adds a loading state on the close and confirm buttons.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"close",description:"",tags:[],type:"[]",signature:'(event: "close"): void',declarations:[],schema:[]},{name:"confirm",description:"",tags:[],type:"[]",signature:'(event: "confirm"): void',declarations:[],schema:[]},{name:"clickOutside",description:"",tags:[],type:"[]",signature:'(event: "clickOutside"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}},{name:"header",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}},{name:"footer",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"id",type:"string | undefined",description:"Unique identifier for the modal.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"isLoading",type:"boolean | undefined",description:"Adds a loading state on the close and confirm buttons.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"closeButtonLabel",type:"string",description:"Label and title (for accessibility) of the close button.",declarations:[],schema:"string"},{name:"opened",type:"boolean | undefined",description:"Indicates whether the modal is open.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"isAlert",type:"boolean | undefined",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"closeButtonIcon",type:"string | undefined",description:"Icon name of the close button.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"closeButtonDisabled",type:"boolean | undefined",description:"Adds a disabled state on the close button.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"closeButtonDisabledTooltip",type:"string | undefined",description:"Adds a tooltip text to display when the close button is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"confirmButtonLabel",type:"string | undefined",description:"Label and title (for accessibility) of the confirm button.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"confirmButtonIcon",type:"string | undefined",description:"Icon name of the confirm button.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"confirmButtonDisabled",type:"boolean | undefined",description:"Adds a disabled state on the confirm button.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"confirmButtonDisabledTooltip",type:"string | undefined",description:"Adds a tooltip text to display when the confirm button is disabled.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"};const Ae={title:"Components/Overlay/Modals/AvModal",component:L,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},closeButtonDisabledTooltip:{control:"text"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},confirmButtonDisabledTooltip:{control:"text"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:c.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,closeButtonDisabledTooltip:void 0,confirmButtonLabel:"Confirm",confirmButtonIcon:c.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,confirmButtonDisabledTooltip:void 0,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},Z=e=>({components:{AvModal:L,AvIconText:D,AvButton:x},setup(){const r=()=>alert("Clicked outside!"),o=b(e.opened);return{args:e,show:o,onClickOutside:r,onTeacherButtonClick:()=>{alert("Enseignant selected!"),o.value=!1},onStudentButtonClick:()=>{alert("Étudiant selected!"),o.value=!1}}},template:`
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
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  `}),s=Z.bind({});s.args={};var C,I,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
          @click="onTeacherButtonClick"
        />
        <AvButton
          label="Étudiant"
          theme="SECONDARY"
          @click="onStudentButtonClick"
        />
      </div>
    </AvModal>
  \`
})`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const Le=["Default"];export{s as Default,Le as __namedExportsOrder,Ae as default};
