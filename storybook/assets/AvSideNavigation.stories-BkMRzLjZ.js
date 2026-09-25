import{A as I}from"./AvSideNavigation-B2x0yXyh.js";import{M as e}from"./icons-CS5vb1aa.js";import{T as g}from"./theme.types-DKH7g3eH.js";import{P as t}from"./iframe-Cb79UARr.js";import"./AvSideMenu-pQKZYJov.js";import"./AvButton-k4kPiKTH.js";import"./AvTooltip-VZio7N2M.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-B6XRolpv.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./AvList-Cx29yBxn.js";import"./use-text-truncation-IkOLGshO.js";import"./preload-helper-ILsKNznc.js";const q=[{id:"careers",label:"Career Information",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:e.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:e.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:e.TARGET_ARROW}],z=[{id:"default",label:"Default item",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"menu-expanded",label:"Menu Expanded",icon:e.SCHOOL_OUTLINE,children:[{id:"subitem-1-1",label:"Subitem 1-1",icon:e.CHEVRON_RIGHT},{id:"subitem-1-2",label:"Subitem 1-2"},{id:"subitem-1-3",label:"Subitem 1-3",icon:e.CHEVRON_RIGHT}],expanded:!0},{id:"collapsed-menu",label:"Collapsed Menu",icon:e.VECTOR_POLYGON_VARIANT,children:[{id:"subitem-2-1",label:"Subitem 2-1",icon:e.CHEVRON_RIGHT},{id:"subitem-2-2",label:"Subitem 2-2",icon:e.CHEVRON_RIGHT}]}],ce={title:"Components/Navigation/AvSideNavigation",component:I,tags:["autodocs"],argTypes:{items:{control:{type:"object"}},width:{control:{type:"text"}},collapsedWidth:{control:{type:"text"}},selectedItem:{control:{type:"object"}},isSideMenuCollapsed:{control:{type:"boolean"}},sticky:{control:{type:"boolean"}},stickyOffset:{control:{type:"text"}},theme:{control:{type:"radio"},options:[g.PRIMARY,g.SECONDARY]}},args:{items:q,collapsedWidth:"3.5rem",width:"fit-content",theme:g.PRIMARY},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
</ul>`}}}},v=`
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
`,b=n=>({components:{AvSideNavigation:I},setup(){const s=t({itemId:"careers"}),a=t(!1);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:v}),h=n=>({components:{AvSideNavigation:I},setup(){const s=t({itemId:"careers"}),a=t(!0);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:v}),K=n=>({components:{AvSideNavigation:I},setup(){const s=t({itemId:"subitem-1-1",parentId:"menu-expanded"}),a=t(!1);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:v}),J=n=>({components:{AvSideNavigation:I},setup(){const s=t({itemId:"careers"}),a=t(!1);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:`
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
  `}),i=b.bind({});i.args={};const o=b.bind({});o.args={theme:g.SECONDARY};const r=K.bind({});r.args={items:z,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"}};const d=K.bind({});d.args={items:z,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"},theme:g.SECONDARY};const l=h.bind({});l.args={isSideMenuCollapsed:!0};const c=h.bind({});c.args={selectedItem:{itemId:"educations"},isSideMenuCollapsed:!0};const p=b.bind({});p.args={selectedItem:{itemId:"experiences"},width:"20rem"};const m=h.bind({});m.args={selectedItem:{itemId:"experiences"},collapsedWidth:"5rem"};const u=J.bind({});u.args={sticky:!0,stickyOffset:"0"};var S,f,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
  template
})`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var y,M,A;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
  template
})`,...(A=(M=o.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var N,T,x;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
      args,
      selectedItem,
      isSideMenuCollapsed
    };
  },
  template
})`,...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var R,O,w;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
      args,
      selectedItem,
      isSideMenuCollapsed
    };
  },
  template
})`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var E,k,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvSideNavigation
  },
  setup() {
    const selectedItem = ref({
      itemId: 'careers'
    });
    const isSideMenuCollapsed = ref(true);
    return {
      args,
      selectedItem,
      isSideMenuCollapsed
    };
  },
  template
})`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var L,H,P;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvSideNavigation
  },
  setup() {
    const selectedItem = ref({
      itemId: 'careers'
    });
    const isSideMenuCollapsed = ref(true);
    return {
      args,
      selectedItem,
      isSideMenuCollapsed
    };
  },
  template
})`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var V,W,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
  template
})`,...(D=(W=p.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var G,Y,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    AvSideNavigation
  },
  setup() {
    const selectedItem = ref({
      itemId: 'careers'
    });
    const isSideMenuCollapsed = ref(true);
    return {
      args,
      selectedItem,
      isSideMenuCollapsed
    };
  },
  template
})`,...(U=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var j,B,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const pe=["Default","Secondary","MenuItemsDefault","MenuItemsSecondary","Collapsed","HiddenContentCollapsed","CustomWidth","CustomCollapsedWidth","Sticky"];export{l as Collapsed,m as CustomCollapsedWidth,p as CustomWidth,i as Default,c as HiddenContentCollapsed,r as MenuItemsDefault,d as MenuItemsSecondary,o as Secondary,u as Sticky,pe as __namedExportsOrder,ce as default};
