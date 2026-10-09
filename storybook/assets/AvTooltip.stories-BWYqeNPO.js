import{A as D}from"./AvIcon-itid32EZ.js";import{A as I}from"./AvTooltip-t-xca0NX.js";import{j as l}from"./iframe-Bv_rUoCq.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const O={title:"Components/Overlay/Tooltips/AvTooltip",component:I,tags:["autodocs"],argTypes:{content:{type:{name:"string",required:!0},control:"text"},disabled:{control:"boolean"},forceFocusable:{control:"boolean"},justify:{control:{type:"radio"},options:["start","center","end"],description:"Storybook prop for demonstration purposes, allowing to adjust the trigger alignment within the container."}},args:{content:"There are two tooltips to demonstrate how the parent one is hidden when the child one is shown. Tooltip with some long text to demonstrate the max width and wrapping behavior of the tooltip content. Reduce the window width and scroll to see how it behaves on smaller screens and near edges.",disabled:!1,forceFocusable:!0,justify:"center"},parameters:{docs:{description:{component:`<h1 class="n1">Tooltips - <code>AvTooltip</code></h1>

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
</ul>`}}}},t=r=>({components:{AvTooltip:I,AvIcon:D},setup(){const S=l(()=>`av-justify-${r.justify}`);return{tooltipArgs:l(()=>({content:r.content,disabled:r.disabled,forceFocusable:r.forceFocusable})),justifyClass:S}},template:`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  `}),o=t.bind({});o.args={};const n=t.bind({});n.args={disabled:!0};const s=t.bind({});s.args={justify:"start"};const e=t.bind({});e.args={justify:"center"};const i=t.bind({});i.args={justify:"end"};const a=t.bind({});a.args={content:"Quick hint"};const _=["Default","Disabled","JustifyLeft","JustifyCenter","JustifyRight","ShortContent"];var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,v,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var g,f,A;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(A=(f=s.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var b,h,y;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(y=(h=e.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,j,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(F=(C=a.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};export{o as Default,n as Disabled,e as JustifyCenter,s as JustifyLeft,i as JustifyRight,a as ShortContent,_ as __namedExportsOrder,O as default};
