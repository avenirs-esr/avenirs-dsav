import{A as r}from"./AvIconText-JDNIo6ak.js";import{A as d}from"./AvButton-C0lgGi-G.js";import{A as i}from"./AvModal-Co3JF0o4.js";import{M as e}from"./icons-CydXfigI.js";import{r as u}from"./iframe-CbaR7P62.js";import"./AvIcon-BpoabsH5.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-DEC8sGFm.js";import"./use-text-truncation-BjgPDzOo.js";import"./string-BZgCOP9D.js";import"./focus-trap-vue.esm-browser-CG1Dp0NV.js";import"./focus-trap.esm-BO0Icfjz.js";import"./AvCancelConfirmButtons-ZEou40CO.js";import"./AvCheckbox-CRrcK-HU.js";import"./AvFieldsetElement-NLBMX51c.js";import"./utils-BIlgUrNJ.js";import"./AvMessage-DG7_bqzq.js";import"./AvCheckboxesGroup-TOYk_MCQ.js";import"./AvFieldset-D9wgwfEH.js";import"./AvCheckboxListItem-B4omIxWQ.js";import"./AvList-DwY7322K.js";import"./AvRadioButton-C7UP-i6n.js";import"./AvRadioButtonSet-BXfvYaBt.js";import"./preload-helper-ILsKNznc.js";const F={title:"Components/Overlay/Modals/AvModal",component:i,tags:["autodocs"],argTypes:{opened:{control:"boolean"},isAlert:{control:"boolean"},closeButtonLabel:{control:"text",required:!0},closeButtonIcon:{control:"text"},closeButtonDisabled:{control:"boolean"},closeButtonDisabledTooltip:{control:"text"},confirmButtonLabel:{control:"text"},confirmButtonIcon:{control:"text"},confirmButtonDisabled:{control:"boolean"},confirmButtonDisabledTooltip:{control:"text"},isLoading:{control:"boolean"}},args:{opened:!1,isAlert:!1,closeButtonLabel:"Close",closeButtonIcon:e.CLOSE_CIRCLE_OUTLINE,closeButtonDisabled:!1,closeButtonDisabledTooltip:void 0,confirmButtonLabel:"Confirm",confirmButtonIcon:e.CHECK_CIRCLE_OUTLINE,confirmButtonDisabled:!1,confirmButtonDisabledTooltip:void 0,isLoading:!1},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Modals - <code>AvModal</code></h1>

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
</ul>`}}}},p=n=>({components:{AvModal:i,AvIconText:r,AvButton:d},setup(){const c=()=>alert("Clicked outside!"),t=u(n.opened);return{args:n,show:t,onClickOutside:c,onTeacherButtonClick:()=>{alert("Enseignant selected!"),t.value=!1},onStudentButtonClick:()=>{alert("Étudiant selected!"),t.value=!1}}},template:`
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
  `}),o=p.bind({});o.args={};const U=["Default"];var a,l,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
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
})`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};export{o as Default,U as __namedExportsOrder,F as default};
