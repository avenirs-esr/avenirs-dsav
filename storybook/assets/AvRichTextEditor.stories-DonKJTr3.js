import{A as p}from"./AvRichTextEditor-2m_nFZcM.js";import{r}from"./iframe-DwUfB3Md.js";import"./AvButton-BFxUqFMv.js";import"./AvTooltip-C0-5Hiqo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-ConR4Ano.js";import"./icon-path-u9rVYwcY.js";import"./use-text-truncation-CPJm8VaN.js";import"./icons-D5SKHg5c.js";import"./string--WCOsvs9.js";import"./AvPopover-B6naMwuc.js";import"./focus-trap.esm-BO0Icfjz.js";import"./AvCancelConfirmButtons-lAc2Rrys.js";import"./AvCheckbox-vEnncaSc.js";import"./AvFieldsetElement-DUl5J-YT.js";import"./utils-BIlgUrNJ.js";import"./AvMessage-hn4aUXxx.js";import"./AvIconText-BGskug2H.js";import"./AvCheckboxesGroup-CKHpSYGN.js";import"./AvFieldset-DV0b4TG8.js";import"./AvCheckboxListItem-oj1BLvH5.js";import"./AvList-pqiGgqGT.js";import"./AvRadioButton-Cs-Y_rjU.js";import"./AvRadioButtonSet-CYZRwKxh.js";import"./AvInput-CpKFE3ph.js";import"./format-Dv6JKX9m.js";import"./AvDropdown-BYQtARg-.js";import"./preload-helper-ILsKNznc.js";const ne={title:"Components/Interaction/Inputs/AvRichTextEditor",component:p,tags:["autodocs"],argTypes:{maxlength:{control:"number",required:!1},editorLabel:{control:"text"},toolbarLabel:{control:"text"},undoLabel:{control:"text"},redoLabel:{control:"text"},paragraphLabel:{control:"text"},headingLabel:{control:"text"},boldLabel:{control:"text"},italicLabel:{control:"text"},underlineLabel:{control:"text"},linkLabel:{control:"text"},linkNameLabel:{control:"text"},linkNamePlaceholder:{control:"text"},linkUrlLabel:{control:"text"},unsetLinkLabel:{control:"text"},imageLabel:{control:"text"},imageNameLabel:{control:"text"},imageNamePlaceholder:{control:"text"},imageUrlLabel:{control:"text"},removeImageLabel:{control:"text"},insertTableLabel:{control:"text"},tableSettingsLabel:{control:"text"},deleteTableLabel:{control:"text"},addColumnBeforeLabel:{control:"text"},addColumnAfterLabel:{control:"text"},deleteColumnLabel:{control:"text"},addRowBeforeLabel:{control:"text"},addRowAfterLabel:{control:"text"},deleteRowLabel:{control:"text"},alignLeftLabel:{control:"text"},alignCenterLabel:{control:"text"},alignRightLabel:{control:"text"},alignJustifyLabel:{control:"text"},bulletListLabel:{control:"text"},orderedListLabel:{control:"text"},decreaseIndentLabel:{control:"text"},increaseIndentLabel:{control:"text"},popoversCancelLabel:{control:"text"},popoversConfirmLabel:{control:"text"},allowExceedMaxlength:{control:"boolean",required:!1},allowedHeadersLevels:{control:{type:"check"},options:[1,2,3,4,5,6]}},args:{editorLabel:"Rich Text Editor",toolbarLabel:"Rich Text Editor Toolbar",undoLabel:"Undo (CTRL + Z)",redoLabel:"Redo (CTRL + Y)",paragraphLabel:"Paragraph",headingLabel:"Heading",boldLabel:"Bold (CTRL + B)",italicLabel:"Italic (CTRL + I)",underlineLabel:"Underline (CTRL + U)",linkLabel:"Link (CTRL + K)",linkNameLabel:"Link Name",linkNamePlaceholder:"Example Link",linkUrlLabel:"Link URL",unsetLinkLabel:"Unlink (CTRL + SHIFT + K)",imageLabel:"Image (CTRL + SHIFT + I)",imageNameLabel:"Image Name",imageNamePlaceholder:"Example Image",imageUrlLabel:"Image URL",removeImageLabel:"Remove image",insertTableLabel:"Insert table",tableSettingsLabel:"Table settings",deleteTableLabel:"Delete table",addColumnBeforeLabel:"Add column before",addColumnAfterLabel:"Add column after",deleteColumnLabel:"Delete column",addRowBeforeLabel:"Add row before",addRowAfterLabel:"Add row after",deleteRowLabel:"Delete row",alignLeftLabel:"Align left (CTRL + SHIFT + L)",alignCenterLabel:"Align center (CTRL + SHIFT + E)",alignRightLabel:"Align right (CTRL + SHIFT + R)",alignJustifyLabel:"Justify (CTRL + SHIFT + J)",bulletListLabel:"Bullet list (CTRL + SHIFT + 8)",orderedListLabel:"Numbered list (CTRL + SHIFT + 7)",decreaseIndentLabel:"Decrease indent (CTRL + [)",increaseIndentLabel:"Increase indent (CTRL + ])",popoversCancelLabel:"Cancel",popoversConfirmLabel:"Confirm",allowExceedMaxlength:!0,allowedHeadersLevels:[1,2,3]},parameters:{docs:{description:{component:`<h1 class="n1">Inputs - <code>AvRichTextEditor</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvRichTextEditor</code> component is a flexible and accessible rich text editor
    that provides a standardized way to collect formatted user input in forms and interfaces.
    It supports various formatting options, validation states, and accessibility features to
    ensure a consistent user experience.
  </span>
</p>

<p>
  <span class="b2-regular">
    It adds rich text editing capabilities, character count tracking, and custom styling.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">
      a <strong>Wrapper</strong>: container that manages the overall layout and positioning.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      a <strong>Toolbar</strong>: contains buttons for text formatting options (for example bold,
      italic, lists, etc.).
    </span>
  </li>
  <li>
    <span class="b2-regular">
      a <strong>Editable Area</strong>: the main <code>contenteditable</code> element where users
      can input and format their text.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      a <strong>Caption</strong>: optional helper text displayed below the label.
    </span>
  </li>
</ul>

<p>
  <span class="b2-regular">
    The component integrates focus management, proper ARIA attributes, and responsive design patterns.
  </span>
</p>`}}}},l=c=>({components:{AvRichTextEditor:p},setup(){const s=r(""),i=r(0);return{args:c,content:s,charCount:i}},template:`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      />

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  `}),e=l.bind({});e.args={};const n=l.bind({});n.args={maxlength:8,allowExceedMaxlength:!1};const t=l.bind({});t.args={maxlength:8,allowExceedMaxlength:!0};const I=c=>({components:{AvRichTextEditor:p},setup(){const s=r(""),i=r(0);return{args:c,content:s,charCount:i}},template:`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      >
        <template #maxLengthCaption="{ currentValue, maxlength }">
          <span class="b2-regular">{{ currentValue }} / {{ maxlength }} characters</span>
        </template>
      </AvRichTextEditor>

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  `}),o=I.bind({});o.args={maxlength:4e3};const a=l.bind({});a.args={allowedHeadersLevels:[1,2,3,4,5,6]};const te=["Default","MaxLength","ExceedableMaxLength","MaxLengthCaptionSlot","AllAllowedHeadersLevels"];var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content = ref('');
    const charCount = ref(0);
    return {
      args,
      content,
      charCount
    };
  },
  template: \`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      />

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  \`
})`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var L,b,g;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content = ref('');
    const charCount = ref(0);
    return {
      args,
      content,
      charCount
    };
  },
  template: \`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      />

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  \`
})`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,x,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content = ref('');
    const charCount = ref(0);
    return {
      args,
      content,
      charCount
    };
  },
  template: \`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      />

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  \`
})`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var v,T,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content = ref('');
    const charCount = ref(0);
    return {
      args,
      content,
      charCount
    };
  },
  template: \`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      >
        <template #maxLengthCaption="{ currentValue, maxlength }">
          <span class="b2-regular">{{ currentValue }} / {{ maxlength }} characters</span>
        </template>
      </AvRichTextEditor>

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  \`
})`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var R,A,E;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content = ref('');
    const charCount = ref(0);
    return {
      args,
      content,
      charCount
    };
  },
  template: \`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content"
        v-model:char-count="charCount"
        v-bind="args"
      />

      <p>Character count: {{ charCount }}</p>
      <p>HTML Content count: {{ content.length }}</p>
      <p>HTML Content: {{ content }}</p>
    </div>
  \`
})`,...(E=(A=a.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};export{a as AllAllowedHeadersLevels,e as Default,t as ExceedableMaxLength,n as MaxLength,o as MaxLengthCaptionSlot,te as __namedExportsOrder,ne as default};
