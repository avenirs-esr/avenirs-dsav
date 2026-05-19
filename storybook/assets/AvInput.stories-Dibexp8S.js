import{A as Ge}from"./AvIcon-Cw9ZxuQo.js";import{A as T}from"./AvInput-b9KIFUOp.js";import{C as Je}from"./icons-DoXnPNNW.js";import{r as C,c as Fe}from"./iframe-CdVmQOKs.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-CgRKPb-y.js";import"./AvIconText-NAbjBN98.js";import"./preload-helper-ILsKNznc.js";const rn={title:"Components/Interaction/Inputs/AvInput",component:T,tags:["autodocs"],argTypes:{hint:{control:"text"},isValid:{control:"boolean"},isTextarea:{control:"boolean"},labelVisible:{control:"boolean"},label:{control:"text"},labelClass:{control:"text"},modelValue:{control:"text"},placeholder:{control:"text"},type:{control:"select",options:["text","email","password","number","tel","url","search","date","datetime-local","month","time","week","color","file","hidden","range"]},minDate:{control:"date"},maxDate:{control:"date"},disabled:{control:"boolean"},required:{control:"boolean"},maxlength:{control:"number"},minlength:{control:"number"},errorMessage:{control:"text"},validMessage:{control:"text"},maxlengthExceededMessage:{control:"text"},prefixIcon:{control:"select",options:[void 0,"mdi:account-circle-outline","mdi:magnify","mdi:email-outline","mdi:lock-outline","mdi:phone-outline","mdi:calendar-outline","mdi:map-marker-outline"]},width:{control:"text"},formatDateStr:{control:"text"}},args:{label:"Input Label",placeholder:"Enter text here...",labelVisible:!0,type:"text",disabled:!1,required:!1,isValid:!1,isTextarea:!1,prefixIcon:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</p>`}}}},e=n=>({components:{AvInput:T},setup(){const S=C(n.modelValue||"");return{args:Fe(()=>({...n,minDate:n.minDate?new Date(n.minDate):void 0,maxDate:n.maxDate?new Date(n.maxDate):void 0})),inputValue:S}},template:`
    <AvInput
      v-bind="args"
      v-model="inputValue"
    />
    <p style="margin-top: 1rem; color: var(--text2);">
      Current value: {{ inputValue }}
    </p>
  `}),a=e.bind({});a.args={};const t=e.bind({});t.args={hint:"This is a helpful hint about what to enter"};const r=e.bind({});r.args={required:!0,hint:"This field is required"};const s=e.bind({});s.args={isValid:!0,validMessage:"This field is valid"};const o=e.bind({});o.args={disabled:!0,modelValue:"This input is disabled"};const i=e.bind({});i.args={type:"email",label:"Email Address",placeholder:"Enter your email address"};const u=e.bind({});u.args={type:"password",label:"Password",placeholder:"Enter your password"};const l=e.bind({});l.args={type:"date",label:"Date",placeholder:"Enter your birthdate"};const p=e.bind({});p.args={isTextarea:!0,label:"Message",placeholder:"Enter your message here...",hint:"Please provide detailed information"};const m=e.bind({});m.args={labelVisible:!1,label:"Hidden Label",placeholder:"Label is hidden but still accessible"};const d=e.bind({});d.args={maxlength:50,label:"Limited Input",hint:"Maximum 50 characters allowed"};const c=e.bind({});c.args={isValid:!1,errorMessage:["This field is required","Must be at least 8 characters long"]};const g=e.bind({});g.args={isValid:!0,validMessage:["Password strength: Strong","All requirements met"]};const D=e.bind({});D.args={label:"Search",placeholder:"Search for something...",prefixIcon:"mdi:magnify"};const f=e.bind({});f.args={type:"email",label:"Email Address",placeholder:"Enter your email",prefixIcon:"mdi:email-outline"};const v=e.bind({});v.args={type:"password",label:"Password",placeholder:"Enter your password",prefixIcon:"mdi:lock-outline"};const x=e.bind({});x.args={type:"tel",label:"Phone Number",placeholder:"Enter your phone number",prefixIcon:"mdi:phone-outline"};const V=e.bind({});V.args={label:"Username",placeholder:"Enter your username",prefixIcon:"mdi:account-circle-outline",errorMessage:"Username is required"};const b=e.bind({});b.args={label:"Search",placeholder:"Search is disabled",prefixIcon:"mdi:magnify",disabled:!0};const A=e.bind({});A.args={type:"number",label:"Age",placeholder:"Enter your age"};const I=e.bind({});I.args={type:"search",label:"Search",placeholder:"Search for items...",prefixIcon:"mdi:magnify"};const h=e.bind({});h.args={type:"url",label:"Website URL",placeholder:"https://example.com"};const w=n=>({components:{AvInput:T,AvIcon:Ge},setup(){const S=C(""),y=C(!1),Ye=Fe(()=>y.value?"text":"password");function je(){y.value=!y.value}return{args:n,inputValue:S,inputType:Ye,toggle:je,CUIDA_ICONS:Je}},template:`
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
  `});w.args={label:"Password",placeholder:"Enter your password"};var E,M,W;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(W=(M=a.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,L,N;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(N=(L=t.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var U,O,_;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(_=(O=r.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var q,k,H;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(H=(k=s.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var R,z,B;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(B=(z=o.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,Y,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(j=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ne;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(ne=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,re;m.parameters={...m.parameters,docs:{...(ae=m.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(re=(te=m.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ie;d.parameters={...d.parameters,docs:{...(se=d.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(ie=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,le,pe;c.parameters={...c.parameters,docs:{...(ue=c.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(pe=(le=c.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var me,de,ce;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ce=(de=g.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ge,De,fe;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(fe=(De=D.parameters)==null?void 0:De.docs)==null?void 0:fe.source}}};var ve,xe,Ve;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(Ve=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Ve.source}}};var be,Ae,Ie;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var he,we,ye;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
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
})`,...(ye=(we=x.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};var Se,Ce,Te;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(Te=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ee,Me,We;b.parameters={...b.parameters,docs:{...(Ee=b.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
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
})`,...(We=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var Pe,Le,Ne;A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => ({
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
})`,...(Ne=(Le=A.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Ue,Oe,_e;I.parameters={...I.parameters,docs:{...(Ue=I.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var qe,ke,He;h.parameters={...h.parameters,docs:{...(qe=h.parameters)==null?void 0:qe.docs,source:{originalSource:`args => ({
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
})`,...(He=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var Re,ze,Be;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(Be=(ze=w.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};const sn=["Default","WithHint","Required","Valid","Disabled","Email","Password","DateInput","Textarea","WithoutLabel","WithMaxLength","MultipleErrors","MultipleValidMessages","WithPrefixIcon","EmailWithIcon","PasswordWithIcon","PhoneWithIcon","PrefixIconWithValidation","PrefixIconDisabled","NumberInput","SearchInput","UrlInput","WithSuffix"];export{l as DateInput,a as Default,o as Disabled,i as Email,f as EmailWithIcon,c as MultipleErrors,g as MultipleValidMessages,A as NumberInput,u as Password,v as PasswordWithIcon,x as PhoneWithIcon,b as PrefixIconDisabled,V as PrefixIconWithValidation,r as Required,I as SearchInput,p as Textarea,h as UrlInput,s as Valid,t as WithHint,d as WithMaxLength,D as WithPrefixIcon,w as WithSuffix,m as WithoutLabel,sn as __namedExportsOrder,rn as default};
