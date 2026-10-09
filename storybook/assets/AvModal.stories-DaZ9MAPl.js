import{A}from"./AvIconText-BAuxvmIF.js";import{A as T}from"./AvButton-1Ni9UELl.js";import{u as E,ak as L,ah as O,ao as x,X as D,V as H,l as B,ag as a,aq as R,m as N,T as q,a4 as h,$ as y,k as d,L as U,at as S,as as _,n as $,a6 as g,r as K,j}from"./iframe-BAltxv45.js";import{F}from"./focus-trap-vue.esm-browser-DVzKShJB.js";import{_ as z}from"./AvCancelConfirmButtons-BG-AXUOK.js";import{M as c}from"./icons-2YM_gKQ7.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-DIONtdP-.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-BcE9a6PC.js";import"./use-text-truncation-Cf3Ng62E.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";import"./focus-trap.esm-CPw4bcQR.js";import"./AvCheckbox-CQeqxfBm.js";import"./AvFieldsetElement-Dg-mKSt6.js";import"./utils-BIlgUrNJ.js";import"./AvMessage-DLCwAn9B.js";import"./AvCheckboxesGroup-B05jxR-k.js";import"./AvFieldset-CygQn1fI.js";import"./AvCheckboxListItem-CgaK8BDD.js";import"./AvList-BXBvzQu-.js";import"./AvRadioButton-j5zaAopk.js";import"./AvRadioButtonSet-9Ihgheh4.js";const Y=["id","aria-labelledby","role","open"],X={class:"av-container av-container--md av-container--lg av-container-fluid av-w-full"},G={class:"av-modal__body av-pt-sm av-pt-none--md"},J={class:"av-modal__content av-mb-4xl av-px-lg av-pt-sm--md"},Q=["id"],W={class:"av-modal__footer av-row av-justify-end av-p-sm av--mt-2xl"},r=E({inheritAttrs:!1,__name:"AvModal",props:{id:{},opened:{type:Boolean,default:!1},isAlert:{type:Boolean,default:!1},closeButtonLabel:{},closeButtonIcon:{default:()=>c.CLOSE_CIRCLE_OUTLINE},closeButtonDisabled:{type:Boolean,default:!1},closeButtonDisabledTooltip:{},confirmButtonLabel:{},confirmButtonIcon:{default:()=>c.CHECK_CIRCLE_OUTLINE},confirmButtonDisabled:{type:Boolean,default:!1},confirmButtonDisabledTooltip:{},isLoading:{type:Boolean}},emits:["close","confirm","clickOutside"],setup(e,{emit:u}){const t=u,b=L(),k=O(),m=e.id??`modal-${crypto.randomUUID()}`,I=j(()=>e.isAlert?"alertdialog":"dialog"),f=h(null),s=h();x(()=>e.opened,o=>{var n,l,v;o?((n=s.value)==null||n.showModal(),(l=f.value)==null||l.focusCancel()):(v=s.value)==null||v.close(),p(o)},{flush:"post"});function p(o){typeof window<"u"&&document.body.classList.toggle("modal-open",o)}return D(()=>{var o,n;p(e.opened),e.opened&&((o=s.value)==null||o.showModal(),(n=f.value)==null||n.focusCancel())}),H(()=>{p(!1)}),(o,n)=>(y(),B(q,{to:"body"},[e.opened?(y(),B(a(F),{key:0},{default:R(()=>[d("dialog",U({id:a(m),ref_key:"modal",ref:s},a(k),{"aria-modal":"true","aria-labelledby":`${a(m)}-header`,role:a(I),class:["av-modal av-col av-h-full av-w-full av-align-stretch av-justify-end av-justify-around--md av-p-none av-m-none",{"av-modal--opened av-w-full av-h-full":e.opened}],open:e.opened,onKeydown:n[2]||(n[2]=_(l=>t("close"),["esc"])),onClick:n[3]||(n[3]=S(l=>t("clickOutside"),["self"]))}),[d("div",X,[d("div",G,[d("div",J,[b.header?(y(),$("div",{key:0,id:`${a(m)}-header`,class:"header av-row av-align-center av-pb-md"},[g(o.$slots,"header",{},void 0,!0)],8,Q)):N("",!0),g(o.$slots,"default",{},void 0,!0)]),d("div",W,[K(z,{ref_key:"closeBtn",ref:f,"cancel-label":e.closeButtonLabel,"cancel-icon":e.closeButtonIcon,"cancel-disabled":e.closeButtonDisabled,"cancel-disabled-tooltip":e.closeButtonDisabledTooltip,"cancel-is-loading":e.isLoading,"confirm-label":e.confirmButtonLabel,"confirm-icon":e.confirmButtonIcon,"confirm-disabled":e.confirmButtonDisabled,"confirm-disabled-tooltip":e.confirmButtonDisabledTooltip,"confirm-is-loading":e.isLoading,onCancel:n[0]||(n[0]=()=>t("close")),onConfirm:n[1]||(n[1]=()=>t("confirm"))},null,8,["cancel-label","cancel-icon","cancel-disabled","cancel-disabled-tooltip","cancel-is-loading","confirm-label","confirm-icon","confirm-disabled","confirm-disabled-tooltip","confirm-is-loading"]),g(o.$slots,"footer",{},void 0,!0)])])])],16,Y)]),_:3})):N("",!0)]))}}),M=P(r,[["__scopeId","data-v-b3922cae"]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"AvModal",type:1,props:[{name:"id",global:!1,description:"Unique identifier for the modal.",tags:[{name:"default",text:"`modal-${crypto.randomUUID()}`"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"opened",global:!1,default:"false",description:"Indicates whether the modal is open.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"isAlert",global:!1,default:"false",description:'Specifies whether the modal is an alert (role `"alertdialog"` if `true`) or not (role will be `"dialog"`).',tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"closeButtonLabel",global:!1,description:"Label and title (for accessibility) of the close button.",tags:[],required:!0,type:"string",schema:"string",declarations:[]},{name:"closeButtonIcon",global:!1,default:"MDI_ICONS.CLOSE_CIRCLE_OUTLINE",description:"Icon name of the close button.",tags:[{name:"default",text:"'mdi:close-circle-outline'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"closeButtonDisabled",global:!1,default:"false",description:"Adds a disabled state on the close button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"closeButtonDisabledTooltip",global:!1,description:"Adds a tooltip text to display when the close button is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"confirmButtonLabel",global:!1,description:"Label and title (for accessibility) of the confirm button.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"confirmButtonIcon",global:!1,default:"MDI_ICONS.CHECK_CIRCLE_OUTLINE",description:"Icon name of the confirm button.",tags:[{name:"default",text:"'mdi:check-circle-outline'"}],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"confirmButtonDisabled",global:!1,default:"false",description:"Adds a disabled state on the confirm button.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"confirmButtonDisabledTooltip",global:!1,description:"Adds a tooltip text to display when the confirm button is disabled.",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"isLoading",global:!1,description:"Adds a loading state on the close and confirm buttons.",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[] | undefined",schema:["undefined",{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[{name:"close",description:"",tags:[],type:"[]",signature:'(event: "close"): void',schema:[],declarations:[]},{name:"confirm",description:"",tags:[],type:"[]",signature:'(event: "confirm"): void',schema:[],declarations:[]},{name:"clickOutside",description:"",tags:[],type:"[]",signature:'(event: "clickOutside"): void',schema:[],declarations:[]}],slots:[{name:"default",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"header",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]},{name:"footer",type:"any[]",description:"",tags:[],schema:{kind:"array",type:"any[]"},declarations:[]}],exposed:[],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/modals/AvModal/AvModal.vue"});const Ve={title:"Components/Overlay/Modals/AvModal",component:M,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},closeButtonDisabledTooltip:{control:"text"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},confirmButtonDisabledTooltip:{control:"text"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:c.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,closeButtonDisabledTooltip:void 0,confirmButtonLabel:"Confirm",confirmButtonIcon:c.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,confirmButtonDisabledTooltip:void 0,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},Z=e=>({components:{AvModal:M,AvIconText:A,AvButton:T},setup(){const u=()=>alert("Clicked outside!"),t=h(e.opened);return{args:e,show:t,onClickOutside:u,onTeacherButtonClick:()=>{alert("Enseignant selected!"),t.value=!1},onStudentButtonClick:()=>{alert("Étudiant selected!"),t.value=!1}}},template:`
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
  `}),i=Z.bind({});i.args={};const we=["Default"];var C,V,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(w=(V=i.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};export{i as Default,we as __namedExportsOrder,Ve as default};
