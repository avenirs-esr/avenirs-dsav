import{A as d}from"./AvSideNavigation-0gEaz1C4.js";import{M as i}from"./icons-8RiK4kYW.js";import{r as e}from"./iframe-BhlUSutn.js";import"./AvCheckboxListItem-D5rDEbKR.js";import"./AvList-Dtg_4793.js";import"./AvIcon-CzOprw6S.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvCheckbox-DgzkpBvX.js";import"./AvFieldsetElement-DenUa4nu.js";import"./AvMessage-CPIBFOpO.js";import"./AvIconText-DoDYBF8A.js";import"./AvSideMenu-B-Jw0u9p.js";import"./AvButton-BIWfQMg0.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const R=[{id:"careers",label:"Career Information",icon:i.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:i.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:i.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:i.TARGET_ARROW}],k=[{id:"default",label:"Default item",icon:i.BRIEFCASE_VARIANT_OUTLINE},{id:"menu-expanded",label:"Menu Expanded",icon:i.SCHOOL_OUTLINE,children:[{id:"subitem-1-1",label:"Subitem 1-1",icon:i.CHEVRON_RIGHT},{id:"subitem-1-2",label:"Subitem 1-2",icon:i.CHEVRON_RIGHT}],expanded:!0},{id:"collapsed-menu",label:"Collapsed Menu",icon:i.VECTOR_POLYGON_VARIANT,children:[{id:"subitem-2-1",label:"Subitem 2-1",icon:i.CHEVRON_RIGHT},{id:"subitem-2-2",label:"Subitem 2-2",icon:i.CHEVRON_RIGHT}]}],q={title:"Components/Navigation/AvSideNavigation",component:d,tags:["autodocs"],argTypes:{items:{control:{type:"object"}},width:{control:{type:"text"}},collapsedWidth:{control:{type:"text"}},selectedItem:{control:{type:"object"}},isSideMenuCollapsed:{control:{type:"boolean"}}},args:{items:R,collapsedWidth:"3.5rem",width:"fit-content"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
</ul>`}}}},o={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"careers"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `})},a={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"subitem-1-1",parentId:"menu-expanded"}),n=e(!1);return{args:{...t,items:k},selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `})},l={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"educations"}),n=e(!0);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `})},r={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"experiences"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
          <p>This story demonstrates custom width (20rem instead of default fit-content).</p>
        </div>
      </div>
    `}),args:{width:"20rem"}},p={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"experiences"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `}),args:{collapsedWidth:"5rem"}},c={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"activities"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `}),args:{selectedItemColor:"#4caf50"}};var m,g,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,f,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var h,S,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,y,M;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
          <p>This story demonstrates custom width (20rem instead of default fit-content).</p>
        </div>
      </div>
    \`
  }),
  args: {
    width: '20rem'
  }
}`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var x,A,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var w,T,O;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(O=(T=c.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const J=["Default","MenuItems","Collapsed","CustomdWidth","CustomCollapsedWidth","CustomColor"];export{l as Collapsed,p as CustomCollapsedWidth,c as CustomColor,r as CustomdWidth,o as Default,a as MenuItems,J as __namedExportsOrder,q as default};
