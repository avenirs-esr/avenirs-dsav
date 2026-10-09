import{A as nn}from"./AvIcon-DIONtdP-.js";import{A as W}from"./AvInput-Nf91XHya.js";import{C as an}from"./icons-2YM_gKQ7.js";import{a4 as E,j as Ze}from"./iframe-BAltxv45.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-DLCwAn9B.js";import"./AvIconText-BAuxvmIF.js";import"./AvTooltip-BcE9a6PC.js";import"./use-text-truncation-Cf3Ng62E.js";import"./format-AL68iITa.js";import"./utils-BIlgUrNJ.js";import"./preload-helper-ILsKNznc.js";const vn={title:"Components/Interaction/Inputs/AvInput",component:W,tags:["autodocs"],argTypes:{hint:{control:"text"},isValid:{control:"boolean"},isTextarea:{control:"boolean"},labelVisible:{control:"boolean"},label:{control:"text"},labelClass:{control:"text"},modelValue:{control:"text"},placeholder:{control:"text"},type:{control:"select",options:["text","email","password","number","tel","url","search","date","datetime-local","month","time","week","color","file","hidden","range"]},minDate:{control:"date"},maxDate:{control:"date"},disabled:{control:"boolean"},required:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},errorMessage:{control:"text"},validMessage:{control:"text"},maxlengthExceededMessage:{control:"text"},prefixIcon:{control:"select",options:[void 0,"mdi:account-circle-outline","mdi:magnify","mdi:email-outline","mdi:lock-outline","mdi:phone-outline","mdi:calendar-outline","mdi:map-marker-outline"]},width:{control:"text"},formatDateStr:{control:"text"}},args:{label:"Input Label",placeholder:"Enter text here...",labelVisible:!0,type:"text",disabled:!1,required:!1,isValid:!1,isTextarea:!1,prefixIcon:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvInput</code> component is a flexible and accessible input component that provides a standardized way to collect user input in forms and interfaces.
    It supports various input types, validation states, and accessibility features to ensure a consistent user experience.
  </span>
</p>

<p>
  <span class="b2-regular">
    It adds prefix icon support, enhanced validation messaging, and custom styling while maintaining full compatibility with the French government's design system standards.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The input component consists of the following elements:</span></p>
<ul>
  <li><span class="b2-regular">a <strong>Wrapper</strong>: Container that manages the overall layout and positioning</span></li>
  <li><span class="b2-regular">a <strong>Prefix Icon</strong> (optional): Visual icon positioned at the beginning of the input field</span></li>
  <li><span class="b2-regular">a <strong>Input Field</strong>: The main input element (can be rendered as input or textarea)</span></li>
  <li><span class="b2-regular">a <strong>Label</strong>: Descriptive text for the input field</span></li>
  <li><span class="b2-regular">a <strong>Hint</strong>: Optional helper text displayed below the label</span></li>
  <li><span class="b2-regular">optional <strong>Error Messages</strong>: Validation error messages displayed when validation fails</span></li>
  <li><span class="b2-regular">optional <strong>Success Messages</strong>: Validation success messages displayed when validation passes</span></li>
</ul>

<p>
  <span class="b2-regular">
    The component integrates focus management, proper ARIA attributes, and responsive design patterns.
  </span>
</p>`}}}},e=n=>({components:{AvInput:W},setup(){const T=E(n.modelValue||"");return{args:Ze(()=>({...n,minDate:n.minDate?new Date(n.minDate):void 0,maxDate:n.maxDate?new Date(n.maxDate):void 0})),inputValue:T}},template:`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  `}),a=e.bind({});a.args={};const t=e.bind({});t.args={hint:"This is a helpful hint about what to enter"};const r=e.bind({});r.args={required:!0,hint:"This field is required"};const s=e.bind({});s.args={isValid:!0,validMessage:"This field is valid"};const o=e.bind({});o.args={disabled:!0,modelValue:"This input is disabled"};const i=e.bind({});i.args={label:"Disabled with placeholder",placeholder:"The placeholder stays visible",disabled:!0};const u=e.bind({});u.args={label:"Disabled with tooltip",placeholder:"Same width as without tooltip",disabled:!0,disabledTooltip:"This input is disabled"};const l=e.bind({});l.args={type:"email",label:"Email Address",placeholder:"Enter your email address"};const p=e.bind({});p.args={type:"password",label:"Password",placeholder:"Enter your password"};const m=e.bind({});m.args={type:"date",label:"Date",placeholder:"Enter your birthdate"};const d=e.bind({});d.args={isTextarea:!0,label:"Message",placeholder:"Enter your message here...",hint:"Please provide detailed information"};const c=e.bind({});c.args={labelVisible:!1,label:"Hidden Label",placeholder:"Label is hidden but still accessible"};const g=e.bind({});g.args={maxlength:50,label:"Limited Input",hint:"Maximum 50 characters allowed"};const D=e.bind({});D.args={isValid:!1,errorMessage:["This field is required","Must be at least 8 characters long"]};const f=e.bind({});f.args={isValid:!0,validMessage:["Password strength: Strong","All requirements met"]};const v=e.bind({});v.args={label:"Search",placeholder:"Search for something...",prefixIcon:"mdi:magnify"};const b=e.bind({});b.args={type:"email",label:"Email Address",placeholder:"Enter your email",prefixIcon:"mdi:email-outline"};const x=e.bind({});x.args={type:"password",label:"Password",placeholder:"Enter your password",prefixIcon:"mdi:lock-outline"};const V=e.bind({});V.args={type:"tel",label:"Phone Number",placeholder:"Enter your phone number",prefixIcon:"mdi:phone-outline"};const h=e.bind({});h.args={label:"Username",placeholder:"Enter your username",prefixIcon:"mdi:account-circle-outline",errorMessage:"Username is required"};const A=e.bind({});A.args={label:"Search",placeholder:"Search is disabled",prefixIcon:"mdi:magnify",disabled:!0};const I=e.bind({});I.args={type:"number",label:"Age",placeholder:"Enter your age"};const w=e.bind({});w.args={type:"search",label:"Search",placeholder:"Search for items...",prefixIcon:"mdi:magnify"};const y=e.bind({});y.args={type:"url",label:"Website URL",placeholder:"https://example.com"};const S=n=>({components:{AvInput:W,AvIcon:nn},setup(){const T=E(""),C=E(!1),$e=Ze(()=>C.value?"text":"password");function en(){C.value=!C.value}return{args:n,inputValue:T,inputType:$e,toggle:en,CUIDA_ICONS:an}},template:`
    <AvInput
      v-bind="args"
      v-model="inputValue"
      :type="inputType"
    >
      <template #suffix>
        <button
          style="background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center;"
          :aria-label="isVisible ? 'Hide password' : 'Show password'"
          @click="toggle"
        >
          <AvIcon :name="CUIDA_ICONS.VISIBILITY_ON_OUTLINE" :size="1.2" />
        </button>
      </template>
    </AvInput>
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  `});S.args={label:"Password",placeholder:"Enter your password"};const bn=["Default","WithHint","Required","Valid","Disabled","DisabledWithPlaceholder","DisabledWithTooltip","Email","Password","DateInput","Textarea","WithoutLabel","WithMaxLength","MultipleErrors","MultipleValidMessages","WithPrefixIcon","EmailWithIcon","PasswordWithIcon","PhoneWithIcon","PrefixIconWithValidation","PrefixIconDisabled","NumberInput","SearchInput","UrlInput","WithSuffix"];var P,M,L;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(L=(M=a.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var N,U,O;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(O=(U=t.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var _,q,k;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(k=(q=r.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var H,F,R;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(R=(F=s.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var z,B,Y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Y=(B=o.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var j,G,J;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(J=(G=i.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,ae,te;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,oe;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(oe=(se=m.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ue,le;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(le=(ue=d.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var pe,me,de;c.parameters={...c.parameters,docs:{...(pe=c.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(de=(me=c.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,ge,De;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(De=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var fe,ve,be;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(be=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var xe,Ve,he;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(he=(Ve=f.parameters)==null?void 0:Ve.docs)==null?void 0:he.source}}};var Ae,Ie,we;v.parameters={...v.parameters,docs:{...(Ae=v.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(we=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var ye,Se,Ce;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Ce=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Te,Ee,We;x.parameters={...x.parameters,docs:{...(Te=x.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(We=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:We.source}}};var Pe,Me,Le;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Le=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var Ne,Ue,Oe;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Oe=(Ue=h.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source}}};var _e,qe,ke;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(ke=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:ke.source}}};var He,Fe,Re;I.parameters={...I.parameters,docs:{...(He=I.parameters)==null?void 0:He.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Re=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ze,Be,Ye;w.parameters={...w.parameters,docs:{...(ze=w.parameters)==null?void 0:ze.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Ye=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:Ye.source}}};var je,Ge,Je;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`args => ({
  components: {
    AvInput
  },
  setup() {
    const inputValue = ref(args.modelValue || '');
    const safeArgs = computed(() => ({
      ...args,
      minDate: args.minDate ? new Date(args.minDate) : undefined,
      maxDate: args.maxDate ? new Date(args.maxDate) : undefined
    }));
    return {
      args: safeArgs,
      inputValue
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Je=(Ge=y.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;S.parameters={...S.parameters,docs:{...(Ke=S.parameters)==null?void 0:Ke.docs,source:{originalSource:`args => ({
  components: {
    AvInput,
    AvIcon
  },
  setup() {
    const inputValue = ref('');
    const isVisible = ref(false);
    const inputType = computed(() => isVisible.value ? 'text' : 'password');
    function toggle() {
      isVisible.value = !isVisible.value;
    }
    return {
      args,
      inputValue,
      inputType,
      toggle,
      CUIDA_ICONS
    };
  },
  template: \`
    <AvInput
      v-bind="args"
      v-model="inputValue"
      :type="inputType"
    >
      <template #suffix>
        <button
          style="background: none; border: none; cursor: pointer; padding: 0; display: flex; align-items: center;"
          :aria-label="isVisible ? 'Hide password' : 'Show password'"
          @click="toggle"
        >
          <AvIcon :name="CUIDA_ICONS.VISIBILITY_ON_OUTLINE" :size="1.2" />
        </button>
      </template>
    </AvInput>
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  \`
})`,...(Xe=(Qe=S.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};export{m as DateInput,a as Default,o as Disabled,i as DisabledWithPlaceholder,u as DisabledWithTooltip,l as Email,b as EmailWithIcon,D as MultipleErrors,f as MultipleValidMessages,I as NumberInput,p as Password,x as PasswordWithIcon,V as PhoneWithIcon,A as PrefixIconDisabled,h as PrefixIconWithValidation,r as Required,w as SearchInput,d as Textarea,y as UrlInput,s as Valid,t as WithHint,g as WithMaxLength,v as WithPrefixIcon,S as WithSuffix,c as WithoutLabel,bn as __namedExportsOrder,vn as default};
