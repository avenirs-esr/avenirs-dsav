import{A as d}from"./AvSideNavigation-LBTARM5p.js";import{M as i}from"./icons-BJ4bGiUf.js";import{L as e}from"./iframe-CthDrYiS.js";import"./AvCheckboxListItem-Bkd-zpYo.js";import"./AvList-BdM2YDeS.js";import"./AvIcon-DH4K7RpX.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-CAqBASau.js";import"./AvCheckbox-B61txgdk.js";import"./AvFieldsetElement-CqcdS8km.js";import"./AvMessage-DlmgQ4ZJ.js";import"./AvIconText-DGPj26vd.js";import"./AvSideMenu-CCc9LfmS.js";import"./AvButton-mERv0ZSb.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const V=[{id:"careers",label:"Career Information",icon:i.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:i.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:i.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:i.TARGET_ARROW}],G=[{id:"default",label:"Default item",icon:i.BRIEFCASE_VARIANT_OUTLINE},{id:"menu-expanded",label:"Menu Expanded",icon:i.SCHOOL_OUTLINE,children:[{id:"subitem-1-1",label:"Subitem 1-1",icon:i.CHEVRON_RIGHT},{id:"subitem-1-2",label:"Subitem 1-2"},{id:"subitem-1-3",label:"Subitem 1-3",icon:i.CHEVRON_RIGHT}],expanded:!0},{id:"collapsed-menu",label:"Collapsed Menu",icon:i.VECTOR_POLYGON_VARIANT,children:[{id:"subitem-2-1",label:"Subitem 2-1",icon:i.CHEVRON_RIGHT},{id:"subitem-2-2",label:"Subitem 2-2",icon:i.CHEVRON_RIGHT}]}],ne={title:"Components/Navigation/AvSideNavigation",component:d,tags:["autodocs"],argTypes:{items:{control:{type:"object"}},width:{control:{type:"text"}},collapsedWidth:{control:{type:"text"}},selectedItem:{control:{type:"object"}},isSideMenuCollapsed:{control:{type:"boolean"}},sticky:{control:{type:"boolean"}},stickyOffset:{control:{type:"text"}}},args:{items:V,collapsedWidth:"3.5rem",width:"fit-content"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
    `})},a={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"subitem-1-1",parentId:"menu-expanded"}),n=e(!1);return{args:{...t,items:G},selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `})},r={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"educations"}),n=e(!0);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
      <div style="height: 400px; display: flex;">
        <AvSideNavigation 
          v-bind="args"
          hide-content-when-collapsed
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the collapsed state where only collapse button is visible.</p>
        </div>
      </div>
    `})},p={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"experiences"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `}),args:{width:"20rem"}},c={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"experiences"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `}),args:{collapsedWidth:"5rem"}},m={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"activities"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
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
    `}),args:{selectedItemColor:"var(--dark-background-warn)"}},g={render:t=>({components:{AvSideNavigation:d},setup(){const s=e({itemId:"careers"}),n=e(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:n}},template:`
      <div style="height: 500px; display: flex; overflow-y: auto; border: 1px solid var(--divider); border-radius: var(--radius-md);">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; min-height: 1200px; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the sticky behavior of the side menu. Scroll this container to see that the menu remains visible.</p>
        </div>
      </div>
    `}),args:{sticky:!0,stickyOffset:"0"}};var u,v,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,h,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(h=a.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,y,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var M,x,A;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          hide-content-when-collapsed
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the collapsed state where only collapse button is visible.</p>
        </div>
      </div>
    \`
  })
}`,...(A=(x=r.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var N,w,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,O,P;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,E,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    selectedItemColor: 'var(--dark-background-warn)'
  }
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var L,H,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      <div style="height: 500px; display: flex; overflow-y: auto; border: 1px solid var(--divider); border-radius: var(--radius-md);">
        <AvSideNavigation 
          v-bind="args"
          v-model:selected-item="selectedItem"
          v-model:is-side-menu-collapsed="isSideMenuCollapsed"
        />
        <div style="flex: 1; padding: 1rem; min-height: 1200px; background: #f5f5f5;">
          <p><strong>Selected item:</strong> {{ selectedItem.itemId }}</p>
          <p><strong>Parent item:</strong> {{ selectedItem.parentId }}</p>
          <p><strong>Menu collapsed:</strong> {{ isSideMenuCollapsed }}</p>
          <p>This story demonstrates the sticky behavior of the side menu. Scroll this container to see that the menu remains visible.</p>
        </div>
      </div>
    \`
  }),
  args: {
    sticky: true,
    stickyOffset: '0'
  }
}`,...(W=(H=g.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const ie=["Default","MenuItems","Collapsed","HiddenContentCollapsed","CustomdWidth","CustomCollapsedWidth","CustomColor","Sticky"];export{l as Collapsed,c as CustomCollapsedWidth,m as CustomColor,p as CustomdWidth,o as Default,r as HiddenContentCollapsed,a as MenuItems,g as Sticky,ie as __namedExportsOrder,ne as default};
