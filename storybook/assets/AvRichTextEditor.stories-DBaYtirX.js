import{A as h}from"./AvRichTextEditor-6uET3tmV.js";import{r as n}from"./iframe-FIWxiUI5.js";import"./AvIcon-CHo9VUsQ.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvButton-ByVxqiVf.js";import"./AvTooltip-DWpot2kn.js";import"./use-text-truncation-COP-4L4y.js";import"./icons-D5SKHg5c.js";import"./string--WCOsvs9.js";import"./AvPopover-BrZemaWW.js";import"./focus-trap.esm-BO0Icfjz.js";import"./AvCancelConfirmButtons-Beksk1W3.js";import"./AvCheckbox-Ds7Bv9_i.js";import"./AvFieldsetElement-yQ3bpUe2.js";import"./utils-BIlgUrNJ.js";import"./AvMessage--x7uHZjn.js";import"./AvIconText-CWux-JHO.js";import"./AvCheckboxesGroup-DI-6tEf8.js";import"./AvFieldset-Bze2FHuB.js";import"./AvCheckboxListItem-PGBWvqlR.js";import"./AvList-R6v10Zmo.js";import"./AvSortableList-kgun_eI0.js";import"./AvCard-12hP3tnL.js";import"./AvRadioButton-BEZGji9T.js";import"./AvRadioButtonSet-D4QdRxRx.js";import"./AvInput-Dx0yxx9s.js";import"./format-Dv6JKX9m.js";import"./AvDropdown-C_IWWkU7.js";import"./preload-helper-ILsKNznc.js";const En={title:"Components/Interaction/Inputs/AvRichTextEditor",component:h,tags:["autodocs"],argTypes:{maxlength:{control:"number",required:!1},editorLabel:{control:"text"},toolbarLabel:{control:"text"},undoLabel:{control:"text"},redoLabel:{control:"text"},paragraphLabel:{control:"text"},headingLabel:{control:"text"},boldLabel:{control:"text"},italicLabel:{control:"text"},underlineLabel:{control:"text"},linkLabel:{control:"text"},linkNameLabel:{control:"text"},linkNamePlaceholder:{control:"text"},linkUrlLabel:{control:"text"},unsetLinkLabel:{control:"text"},imageLabel:{control:"text"},imageNameLabel:{control:"text"},imageNamePlaceholder:{control:"text"},imageUrlLabel:{control:"text"},removeImageLabel:{control:"text"},insertTableLabel:{control:"text"},tableSettingsLabel:{control:"text"},deleteTableLabel:{control:"text"},addColumnBeforeLabel:{control:"text"},addColumnAfterLabel:{control:"text"},deleteColumnLabel:{control:"text"},addRowBeforeLabel:{control:"text"},addRowAfterLabel:{control:"text"},deleteRowLabel:{control:"text"},alignLeftLabel:{control:"text"},alignCenterLabel:{control:"text"},alignRightLabel:{control:"text"},alignJustifyLabel:{control:"text"},bulletListLabel:{control:"text"},orderedListLabel:{control:"text"},decreaseIndentLabel:{control:"text"},increaseIndentLabel:{control:"text"},popoversCancelLabel:{control:"text"},popoversConfirmLabel:{control:"text"},allowExceedMaxlength:{control:"boolean",required:!1},allowedHeadersLevels:{control:{type:"check"},options:[1,2,3,4,5,6]},disabled:{control:"boolean",required:!1},isLoading:{control:"boolean",required:!1},disabledTooltip:{control:"text",required:!1}},args:{editorLabel:"Rich Text Editor",toolbarLabel:"Rich Text Editor Toolbar",undoLabel:"Undo (CTRL + Z)",redoLabel:"Redo (CTRL + Y)",paragraphLabel:"Paragraph",headingLabel:"Heading",boldLabel:"Bold (CTRL + B)",italicLabel:"Italic (CTRL + I)",underlineLabel:"Underline (CTRL + U)",linkLabel:"Link (CTRL + K)",linkNameLabel:"Link Name",linkNamePlaceholder:"Example Link",linkUrlLabel:"Link URL",unsetLinkLabel:"Unlink (CTRL + SHIFT + K)",imageLabel:"Image (CTRL + SHIFT + I)",imageNameLabel:"Image Name",imageNamePlaceholder:"Example Image",imageUrlLabel:"Image URL",removeImageLabel:"Remove image",insertTableLabel:"Insert table",tableSettingsLabel:"Table settings",deleteTableLabel:"Delete table",addColumnBeforeLabel:"Add column before",addColumnAfterLabel:"Add column after",deleteColumnLabel:"Delete column",addRowBeforeLabel:"Add row before",addRowAfterLabel:"Add row after",deleteRowLabel:"Delete row",alignLeftLabel:"Align left (CTRL + SHIFT + L)",alignCenterLabel:"Align center (CTRL + SHIFT + E)",alignRightLabel:"Align right (CTRL + SHIFT + R)",alignJustifyLabel:"Justify (CTRL + SHIFT + J)",bulletListLabel:"Bullet list (CTRL + SHIFT + 8)",orderedListLabel:"Numbered list (CTRL + SHIFT + 7)",decreaseIndentLabel:"Decrease indent (CTRL + [)",increaseIndentLabel:"Increase indent (CTRL + ])",popoversCancelLabel:"Cancel",popoversConfirmLabel:"Confirm",allowExceedMaxlength:!0,allowedHeadersLevels:[1,2,3],disabled:!1,isLoading:!1,disabledTooltip:"This field is disabled"},parameters:{docs:{description:{component:`<h1 class="n1">Inputs - <code>AvRichTextEditor</code></h1>

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
</p>`}}}},a=t=>({components:{AvRichTextEditor:h},setup(){const e=n(""),o=n(0);return{args:t,content:e,charCount:o}},template:`
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
  `}),r=a.bind({});r.args={};const c=a.bind({});c.args={disabled:!0};const l=a.bind({});l.args={isLoading:!0};const i=a.bind({});i.args={maxlength:8,allowExceedMaxlength:!1};const s=a.bind({});s.args={maxlength:8,allowExceedMaxlength:!0};const _=t=>({components:{AvRichTextEditor:h},setup(){const e=n(""),o=n(0);return{args:t,content:e,charCount:o}},template:`
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
  `}),p=_.bind({});p.args={maxlength:4e3};const d=a.bind({});d.args={allowedHeadersLevels:[1,2,3,4,5,6]};const z=t=>({components:{AvRichTextEditor:h},setup(){const e=n("<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>"),o=n(0),g=n("<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>"),L=n(0);return{args:t,content1:e,charCount1:o,content2:g,charCount2:L}},template:`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content1"
        v-model:char-count="charCount1"
        v-bind="args"
      />

      <p>Character count 1: {{ charCount1 }}</p>
      <p>HTML Content count 1: {{ content1.length }}</p>
      <p>HTML Content 1: {{ content1 }}</p>

      <AvRichTextEditor
        v-model="content2"
        v-model:char-count="charCount2"
        v-bind="args"
      />

      <p>Character count 2: {{ charCount2 }}</p>
      <p>HTML Content count 2: {{ content2.length }}</p>
      <p>HTML Content 2: {{ content2 }}</p>
    </div>
  `}),u=z.bind({});u.args={};const O=t=>({components:{AvRichTextEditor:h},setup(){const e=n("<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>"),o=n(0),g=n("<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>"),L=n(0);return{args:t,content1:e,charCount1:o,content2:g,charCount2:L}},template:`
    <ol>
      <li>
        <div class="av-col av-container">
          <AvRichTextEditor
            v-model="content1"
            v-model:char-count="charCount1"
            v-bind="args"
          />

          <p>Character count 1: {{ charCount1 }}</p>
          <p>HTML Content count 1: {{ content1.length }}</p>
          <p>HTML Content 1: {{ content1 }}</p>

          <AvRichTextEditor
            v-model="content2"
            v-model:char-count="charCount2"
            v-bind="args"
          />

          <p>Character count 2: {{ charCount2 }}</p>
          <p>HTML Content count 2: {{ content2.length }}</p>
          <p>HTML Content 2: {{ content2 }}</p>
        </div>
      </li>
    </ol>
  `}),m=O.bind({});m.args={};const An=["Default","Disabled","Loading","MaxLength","ExceedableMaxLength","MaxLengthCaptionSlot","AllAllowedHeadersLevels","TwoEditors","TwoEditorsInList"];var b,v,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,x,f;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var R,E,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var H,M,I;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(I=(M=i.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var w,S,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,F,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var y,U,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(B=(U=d.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var q,P,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content1 = ref('<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>');
    const charCount1 = ref(0);
    const content2 = ref('<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>');
    const charCount2 = ref(0);
    return {
      args,
      content1,
      charCount1,
      content2,
      charCount2
    };
  },
  template: \`
    <div class="av-col av-container">
      <AvRichTextEditor
        v-model="content1"
        v-model:char-count="charCount1"
        v-bind="args"
      />

      <p>Character count 1: {{ charCount1 }}</p>
      <p>HTML Content count 1: {{ content1.length }}</p>
      <p>HTML Content 1: {{ content1 }}</p>

      <AvRichTextEditor
        v-model="content2"
        v-model:char-count="charCount2"
        v-bind="args"
      />

      <p>Character count 2: {{ charCount2 }}</p>
      <p>HTML Content count 2: {{ content2.length }}</p>
      <p>HTML Content 2: {{ content2 }}</p>
    </div>
  \`
})`,...(J=(P=u.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var V,W,K;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvRichTextEditor
  },
  setup() {
    const content1 = ref('<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>');
    const charCount1 = ref(0);
    const content2 = ref('<ol><li><p>item 1</p></li><li><p>item 2</p></li></ol><p></p>');
    const charCount2 = ref(0);
    return {
      args,
      content1,
      charCount1,
      content2,
      charCount2
    };
  },
  template: \`
    <ol>
      <li>
        <div class="av-col av-container">
          <AvRichTextEditor
            v-model="content1"
            v-model:char-count="charCount1"
            v-bind="args"
          />

          <p>Character count 1: {{ charCount1 }}</p>
          <p>HTML Content count 1: {{ content1.length }}</p>
          <p>HTML Content 1: {{ content1 }}</p>

          <AvRichTextEditor
            v-model="content2"
            v-model:char-count="charCount2"
            v-bind="args"
          />

          <p>Character count 2: {{ charCount2 }}</p>
          <p>HTML Content count 2: {{ content2.length }}</p>
          <p>HTML Content 2: {{ content2 }}</p>
        </div>
      </li>
    </ol>
  \`
})`,...(K=(W=m.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};export{d as AllAllowedHeadersLevels,r as Default,c as Disabled,s as ExceedableMaxLength,l as Loading,i as MaxLength,p as MaxLengthCaptionSlot,u as TwoEditors,m as TwoEditorsInList,An as __namedExportsOrder,En as default};
