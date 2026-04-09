import{_ as a}from"./AvCheckboxListItem-DO90njrn.js";import{A as r}from"./AvList-lCW-MsxP.js";import{M as o}from"./icons-8RiK4kYW.js";import{c as A,b as x}from"./storybook-CiLuEuGe.js";import{r as c}from"./iframe-CmPch3I4.js";import"./AvCheckbox-Kuj5puPr.js";import"./AvFieldsetElement-BrPW6zG_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-DYtMfDPd.js";import"./AvIconText-D8ZUPjep.js";import"./AvIcon-C1FiSzd9.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";const z={title:"Components/Interaction/Lists/AvCheckboxListItem",component:a,tags:["autodocs"],argTypes:{id:{control:"text"},listId:{control:"text"},label:{control:"text"},icon:{control:"select",options:["",...x],mapping:{"":"",...A}},disabled:{control:"boolean"},ariaLabel:{control:"text"},ariaDescribedby:{control:"text"}},args:{id:"checkbox-list-item",listId:"checkbox-list"},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvCheckboxListItem</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCheckboxListItem</code> component represents an individual checkbox item within a list container.
    It provides a flexible and accessible way to display content with optional icons, titles, descriptions,
    and interactive capabilities while maintaining consistent styling and behavior patterns.
  </span>
</p>

<p>
  <span class="b2-regular">
    It is designed to work seamlessly within <code>AvList</code> containers, offering extensive customization
    for various use cases such as navigation menus, content lists, action items, and interactive elements.
    It ensures full accessibility compliance with proper ARIA attributes and keyboard navigation.
  </span>
</p>

<p>
  <span class="b2-regular">
    The component supports multiple interaction states (hover, focus, active, disabled, selected),
    a flexible content structure with slots, and dynamic tag rendering for different semantic contexts,
    while maintaining visual consistency with the design system.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">
      The <code>AvListItem</code> wrapper.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      An optional icon displayed between the checkbox and the content.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A mandatory content area containing the label and/or custom content.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      An optional custom content slot allowing insertion of any custom elements within the content area.
    </span>
  </li>
</ul>

<p>
  <span class="b2-regular">
    The component integrates full accessibility support (ARIA attributes and keyboard navigation),
    comprehensive interaction states, and a flexible content structure with icon, label, and slot support.
  </span>
</p>`}}}},I=e=>({components:{AvList:r,AvCheckboxListItem:a},setup(){const t=c([]);return{args:e,selected:t,MDI_ICONS:o}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvCheckboxListItem v-bind="args" v-model="selected" />
      </AvList>
    </div>
  `}),n=I.bind({});n.args={label:"Default List Item",id:"default-item",listId:"default-list"};const L=e=>({components:{AvList:r,AvCheckboxListItem:a},setup(){const t=c([]);return{args:e,selected:t,MDI_ICONS:o}},template:`
    <AvList>
      <AvCheckboxListItem v-model="selected" v-bind="args">
        <span class="b2-bold">Custom item <span class="caption-light">with caption light description</span></span>
      </AvCheckboxListItem>
    </AvList>
  `}),s=L.bind({});s.args={label:"Custom Content",icon:o.DOTS_VERTICAL,id:"custom-content-item",listId:"custom-content-list"};const f=e=>({components:{AvList:r,AvCheckboxListItem:a},setup(){const t=c([]);return{args:e,selected:t,MDI_ICONS:o}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvCheckboxListItem v-bind="args" v-model="selected" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `}),i=f.bind({});i.args={label:"Accessible Item",icon:o.INFORMATION_OUTLINE,ariaLabel:"Custom accessible label for screen readers",ariaDescribedby:"helper-text",id:"accessible-item",listId:"accessible-list"};var l,p,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvCheckboxListItem
  },
  setup() {
    const selected = ref<string[]>([]);
    return {
      args,
      selected,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvCheckboxListItem v-bind="args" v-model="selected" />
      </AvList>
    </div>
  \`
})`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,b,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvCheckboxListItem
  },
  setup() {
    const selected = ref<(string | number)[]>([]);
    return {
      args,
      selected,
      MDI_ICONS
    };
  },
  template: \`
    <AvList>
      <AvCheckboxListItem v-model="selected" v-bind="args">
        <span class="b2-bold">Custom item <span class="caption-light">with caption light description</span></span>
      </AvCheckboxListItem>
    </AvList>
  \`
})`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,v,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvCheckboxListItem
  },
  setup() {
    const selected = ref<(string | number)[]>([]);
    return {
      args,
      selected,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvCheckboxListItem v-bind="args" v-model="selected" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  \`
})`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const E=["Default","WithCustomContent","WithAccessibility"];export{n as Default,i as WithAccessibility,s as WithCustomContent,E as __namedExportsOrder,z as default};
