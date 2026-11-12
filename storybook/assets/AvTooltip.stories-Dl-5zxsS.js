import{A as k}from"./AvIcon-CHo9VUsQ.js";import{A as d}from"./AvTooltip-DWpot2kn.js";import{c}from"./iframe-FIWxiUI5.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const Q={title:"Components/Overlay/Tooltips/AvTooltip",component:d,tags:["autodocs"],argTypes:{content:{type:{name:"string",required:!0},control:"text"},disabled:{control:"boolean"},forceFocusable:{control:"boolean"},justify:{control:{type:"radio"},options:["start","center","end"],description:"Storybook prop for demonstration purposes, allowing to adjust the trigger alignment within the container."}},args:{content:"There are two tooltips to demonstrate how the parent one is hidden when the child one is shown. Tooltip with some long text to demonstrate the max width and wrapping behavior of the tooltip content. Reduce the window width and scroll to see how it behaves on smaller screens and near edges.",disabled:!1,forceFocusable:!0,justify:"center"},parameters:{docs:{description:{component:`<h1 class="n1">Tooltips - <code>AvTooltip</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvTooltip</code> component replaces the native <code>title</code> attribute with a custom tooltip
    that can be styled and positioned consistently with the DSAV design system.
  </span>
</p>

<p>
  <span class="b2-regular">
    It appears on hover and keyboard focus, making it a more accessible and consistent alternative to the browser
    default tooltip.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">
      A trigger element provided via the <code>default</code> slot.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A tooltip content element displayed on hover or focus.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      The tooltip content is defined through the <code>content</code> prop.
    </span>
  </li>
</ul>`}}}},o=t=>({components:{AvTooltip:d,AvIcon:k},setup(){const p=c(()=>`av-justify-${t.justify}`);return{tooltipArgs:c(()=>({content:t.content,disabled:t.disabled,forceFocusable:t.forceFocusable})),justifyClass:p}},template:`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  `}),R=t=>({components:{AvTooltip:d,AvIcon:k},setup(){const p=c(()=>`av-justify-${t.justify}`);return{tooltipArgs:c(()=>({content:t.content,disabled:t.disabled,forceFocusable:t.forceFocusable})),justifyClass:p}},template:`
    <AvTooltip v-bind="tooltipArgs">
      <div class="av-col av-justify-between" style="height: 2000px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  `}),n=o.bind({});n.args={};const s=o.bind({});s.args={disabled:!0};const e=o.bind({});e.args={justify:"start"};const i=o.bind({});i.args={justify:"center"};const a=o.bind({});a.args={justify:"end"};const r=o.bind({});r.args={content:"Quick hint"};const l=R.bind({});l.args={justify:"center"};const V=["Default","Disabled","JustifyLeft","JustifyCenter","JustifyRight","ShortContent","WideHeight"];var u,v,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var f,g,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var b,y,h;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,j,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var x,C,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(F=(C=a.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var I,S,z;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var $,D,J;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvTooltip,
    AvIcon
  },
  setup() {
    const justifyClass = computed(() => \`av-justify-\${args.justify}\`);
    const tooltipArgs = computed(() => ({
      content: args.content,
      disabled: args.disabled,
      forceFocusable: args.forceFocusable
    }));
    return {
      tooltipArgs,
      justifyClass
    };
  },
  template: \`
    <AvTooltip v-bind="tooltipArgs">
      <div class="av-col av-justify-between" style="height: 2000px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  \`
})`,...(J=(D=l.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};export{n as Default,s as Disabled,i as JustifyCenter,e as JustifyLeft,a as JustifyRight,r as ShortContent,l as WideHeight,V as __namedExportsOrder,Q as default};
