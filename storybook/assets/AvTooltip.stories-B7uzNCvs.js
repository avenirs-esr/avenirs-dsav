import{A as z}from"./AvIcon-B15mic27.js";import{A as I}from"./AvTooltip-WgK4o6ix.js";import{d as l}from"./iframe-CGOhz9cP.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";const _={title:"Components/Overlay/Tooltips/AvTooltip",component:I,tags:["autodocs"],argTypes:{content:{type:{name:"string",required:!0},control:"text"},disabled:{control:"boolean"},forceFocusable:{control:"boolean"},justify:{control:{type:"radio"},options:["start","center","end"],description:"Storybook prop for demonstration purposes, allowing to adjust the trigger alignment within the container."}},args:{content:"There are two tooltips to demonstrate how the parent one is hidden when the child one is shown. Tooltip with some long text to demonstrate the max width and wrapping behavior of the tooltip content. Reduce the window width and scroll to see how it behaves on smaller screens and near edges.",disabled:!1,forceFocusable:!0,justify:"center"},parameters:{docs:{description:{component:`<h1 class="n1">Tooltips - <code>AvTooltip</code></h1>

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
</ul>`}}}},t=r=>({components:{AvTooltip:I,AvIcon:z},setup(){const S=l(()=>`av-justify-${r.justify}`);return{tooltipArgs:l(()=>({content:r.content,disabled:r.disabled,forceFocusable:r.forceFocusable})),justifyClass:S}},template:`
    <AvTooltip v-bind="tooltipArgs">
      <div style="height: 420px; width: 420px; border: 1px solid #ccc;">
        <div :class="['av-row', 'av-w-full', justifyClass, 'av-pt-xl']">
          <AvTooltip v-bind="tooltipArgs">
            <AvIcon name="mdi:information-outline" :size="3" />
          </AvTooltip>
        </div>
      </div>
    </AvTooltip>
  `}),o=t.bind({});o.args={};const s=t.bind({});s.args={disabled:!0};const e=t.bind({});e.args={justify:"start"};const i=t.bind({});i.args={justify:"center"};const a=t.bind({});a.args={justify:"end"};const n=t.bind({});n.args={content:"Quick hint"};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,v,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(m=(v=s.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var g,f,A;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(A=(f=e.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var b,h,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,j,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var x,C,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const q=["Default","Disabled","JustifyLeft","JustifyCenter","JustifyRight","ShortContent"];export{o as Default,s as Disabled,i as JustifyCenter,e as JustifyLeft,a as JustifyRight,n as ShortContent,q as __namedExportsOrder,_ as default};
