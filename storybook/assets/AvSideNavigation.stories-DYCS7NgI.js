import{M as a}from"./icons-DGI95zqn.js";import{A as i}from"./AvSideNavigation-BgHD8PYV.js";import{r as e}from"./iframe-CBl62ORi.js";import"./AvListItem-BXfY74hi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-Dti4b3Ab.js";import"./AvSideMenu-BvGzLh56.js";import"./AvButton-5Dy39sUi.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const C=[{id:"careers",label:"Career Information",icon:a.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:a.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:a.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:a.TARGET_ARROW}],W={title:"Components/Navigation/AvSideNavigation",component:i,tags:["autodocs"],argTypes:{items:{description:"Array of navigation items with id, label, and icon",control:{type:"object"}},collapsedWidth:{description:"Width of the side menu when collapsed",control:{type:"text"}},selectedItem:{description:"Currently selected item ID (v-model)",control:{type:"text"}},isSideMenuCollapsed:{description:"Whether the side menu is collapsed (v-model)",control:{type:"boolean"}}},args:{items:C,collapsedWidth:"3.5rem"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The side navigation component is a comprehensive solution that combines AvSideMenu, AvList, and AvListItem
    components to provide a fully functional navigational sidebar. It handles both the layout structure and
    navigation behavior while maintaining full accessibility and keyboard navigation support.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvSideNavigation</code> component offers automatic state management through defineModel,
    customizable navigation items with icons and labels, and responsive behavior that adapts to collapsed states.
    It provides a clean API for managing selected items and menu visibility.
  </span>
</p>

<p>
  <span class="b2-regular">
    It features two-way data binding for selected items and collapse state, smooth transitions,
    proper focus management, and screen reader support while maintaining visual consistency
    with the design system's styling tokens.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The side navigation component consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">the <strong>Side Menu Container:</strong> The main AvSideMenu wrapper that handles collapsible behavior</span></li>
  <li><span class="b2-regular">the <strong>Navigation List:</strong> An AvList component that contains all navigation items</span></li>
  <li><span class="b2-regular">the <strong>Navigation Items:</strong> Individual AvListItem components representing each navigational option</span></li>
  <li><span class="b2-regular">the <strong>Toggle Functionality:</strong> Automatic label hiding/showing based on collapsed state</span></li>
</ul>

<p><span class="b2-regular">The side navigation integrates:</span></p>

<ul>
  <li><span class="b2-regular">Two-way binding for selected item and collapsed state via defineModel</span></li>
  <li><span class="b2-regular">Automatic icon-only display when collapsed</span></li>
  <li><span class="b2-regular">Selection state management with visual feedback</span></li>
  <li><span class="b2-regular">Keyboard navigation and accessibility attributes</span></li>
  <li><span class="b2-regular">Responsive design with customizable widths</span></li>
</ul>`}}}},o={render:s=>({components:{AvSideNavigation:i},setup(){const t=e("careers"),n=e(!1);return{args:s,selectedItem:t,isSideMenuCollapsed:n}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This component uses defineModel for automatic two-way binding with parent components.</p>
        </div>
      </div>
    `})},l={render:s=>({components:{AvSideNavigation:i},setup(){const t=e("educations"),n=e(!0);return{args:s,selectedItem:t,isSideMenuCollapsed:n}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the collapsed state where only icons are visible.</p>
        </div>
      </div>
    `})},d={render:s=>({components:{AvSideNavigation:i},setup(){const t=e("experiences"),n=e(!1);return{args:s,selectedItem:t,isSideMenuCollapsed:n}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom collapsed width (5rem instead of default 3.5rem).</p>
        </div>
      </div>
    `}),args:{collapsedWidth:"5rem"}},r={render:s=>({components:{AvSideNavigation:i},setup(){const t=e("activities"),n=e(!1);return{args:s,selectedItem:t,isSideMenuCollapsed:n}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom colors using CSS variables.</p>
        </div>
      </div>
    `}),args:{selectedItemColor:"#4caf50"}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref('careers');
      const isSideMenuCollapsed = ref(false);
      return {
        args,
        selectedItem,
        isSideMenuCollapsed
      };
    },
    template: \`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This component uses defineModel for automatic two-way binding with parent components.</p>
        </div>
      </div>
    \`
  })
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,u,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref('educations');
      const isSideMenuCollapsed = ref(true);
      return {
        args,
        selectedItem,
        isSideMenuCollapsed
      };
    },
    template: \`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the collapsed state where only icons are visible.</p>
        </div>
      </div>
    \`
  })
}`,...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,h,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref('experiences');
      const isSideMenuCollapsed = ref(false);
      return {
        args,
        selectedItem,
        isSideMenuCollapsed
      };
    },
    template: \`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom collapsed width (5rem instead of default 3.5rem).</p>
        </div>
      </div>
    \`
  }),
  args: {
    collapsedWidth: '5rem'
  }
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,y,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref('activities');
      const isSideMenuCollapsed = ref(false);
      return {
        args,
        selectedItem,
        isSideMenuCollapsed
      };
    },
    template: \`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom colors using CSS variables.</p>
        </div>
      </div>
    \`
  }),
  args: {
    selectedItemColor: '#4caf50'
  }
}`,...(I=(y=r.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const _=["Default","Collapsed","CustomWidth","CustomColor"];export{l as Collapsed,r as CustomColor,d as CustomWidth,o as Default,_ as __namedExportsOrder,W as default};
