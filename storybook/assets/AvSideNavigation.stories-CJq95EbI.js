import{A as a}from"./AvSideNavigation-MTEQn9hk.js";import{M as e}from"./icons-hlhmcYzn.js";import{r as t}from"./iframe-CHIYCWIc.js";import"./AvListItem-0git_ytt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-DNei_w_v.js";import"./icon-path-u9rVYwcY.js";import"./AvSideMenu-dSC2ibkY.js";import"./AvButton-DB9IQNlu.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const N=[{id:"careers",label:"Career Information",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:e.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:e.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:e.TARGET_ARROW}],T=[{id:"default",label:"Default item",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"menu-expanded",label:"Menu Expanded",icon:e.SCHOOL_OUTLINE,children:[{id:"subitem-1-1",label:"Subitem 1-1",icon:e.CHEVRON_RIGHT},{id:"subitem-1-2",label:"Subitem 1-2",icon:e.CHEVRON_RIGHT}],expanded:!0},{id:"collapsed-menu",label:"Collapsed Menu",icon:e.VECTOR_POLYGON_VARIANT,children:[{id:"subitem-2-1",label:"Subitem 2-1",icon:e.CHEVRON_RIGHT},{id:"subitem-2-2",label:"Subitem 2-2",icon:e.CHEVRON_RIGHT}]}],G={title:"Components/Navigation/AvSideNavigation",component:a,tags:["autodocs"],argTypes:{items:{description:"Array of navigation items with id, label, and icon",control:{type:"object"}},collapsedWidth:{description:"Width of the side menu when collapsed",control:{type:"text"}},selectedItem:{description:"Currently selected item ID (v-model)",control:{type:"object"}},isSideMenuCollapsed:{description:"Whether the side menu is collapsed (v-model)",control:{type:"boolean"}}},args:{items:N,collapsedWidth:"3.5rem"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
</ul>`}}}},o={render:s=>({components:{AvSideNavigation:a},setup(){const n=t({itemId:"careers"}),i=t(!1);return{args:s,selectedItem:n,isSideMenuCollapsed:i}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This component uses defineModel for automatic two-way binding with parent components.</p>
        </div>
      </div>
    `})},d={render:s=>({components:{AvSideNavigation:a},setup(){const n=t({itemId:"subitem-1-1",parentId:"menu-expanded"}),i=t(!1);return{args:{...s,items:T},selectedItem:n,isSideMenuCollapsed:i}},template:`
      <div style="height: 600px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This component uses defineModel for automatic two-way binding with parent components.</p>
        </div>
      </div>
    `})},l={render:s=>({components:{AvSideNavigation:a},setup(){const n=t({itemId:"educations"}),i=t(!0);return{args:s,selectedItem:n,isSideMenuCollapsed:i}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the collapsed state where only icons are visible.</p>
        </div>
      </div>
    `})},r={render:s=>({components:{AvSideNavigation:a},setup(){const n=t({itemId:"experiences"}),i=t(!1);return{args:s,selectedItem:n,isSideMenuCollapsed:i}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom collapsed width (5rem instead of default 3.5rem).</p>
        </div>
      </div>
    `}),args:{collapsedWidth:"5rem"}},p={render:s=>({components:{AvSideNavigation:a},setup(){const n=t({itemId:"activities"}),i=t(!1);return{args:s,selectedItem:n,isSideMenuCollapsed:i}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom colors using CSS variables.</p>
        </div>
      </div>
    `}),args:{selectedItemColor:"#4caf50"}};var c,m,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref({
        itemId: 'careers'
      });
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
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This component uses defineModel for automatic two-way binding with parent components.</p>
        </div>
      </div>
    \`
  })
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,v,I;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref({
        itemId: 'subitem-1-1',
        parentId: 'menu-expanded'
      });
      const isSideMenuCollapsed = ref(false);
      return {
        args: {
          ...args,
          items: mockItemsWithChildren
        },
        selectedItem,
        isSideMenuCollapsed
      };
    },
    template: \`
      <div style="height: 600px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This component uses defineModel for automatic two-way binding with parent components.</p>
        </div>
      </div>
    \`
  })
}`,...(I=(v=d.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var f,h,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref({
        itemId: 'educations'
      });
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
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the collapsed state where only icons are visible.</p>
        </div>
      </div>
    \`
  })
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var S,C,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref({
        itemId: 'experiences'
      });
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
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom collapsed width (5rem instead of default 3.5rem).</p>
        </div>
      </div>
    \`
  }),
  args: {
    collapsedWidth: '5rem'
  }
}`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var M,A,x;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AvSideNavigation
    },
    setup() {
      const selectedItem = ref({
        itemId: 'activities'
      });
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
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates custom colors using CSS variables.</p>
        </div>
      </div>
    \`
  }),
  args: {
    selectedItemColor: '#4caf50'
  }
}`,...(x=(A=p.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};const D=["Default","MenuItems","Collapsed","CustomWidth","CustomColor"];export{l as Collapsed,p as CustomColor,r as CustomWidth,o as Default,d as MenuItems,D as __namedExportsOrder,G as default};
