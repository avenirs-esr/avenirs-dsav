import{A as v}from"./AvSideNavigation-4FnK7hoe.js";import{M as e,E as te}from"./icons-0TexbTrg.js";import{r as n}from"./iframe-DYGtp9Pz.js";import"./AvCheckboxListItem-D8EJBtBS.js";import"./AvList-DV96Xsud.js";import"./AvIcon-D5ziTFYu.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-J_3xkcQ-.js";import"./utils-BIlgUrNJ.js";import"./use-text-truncation-ChLs2rLt.js";import"./AvCheckbox-B2qGo-0C.js";import"./AvFieldsetElement-BSnLYDtE.js";import"./AvMessage-BA3jkYKn.js";import"./AvIconText-DI3e3jsJ.js";import"./AvSideMenu-BLayRWdu.js";import"./AvButton-CE46tggz.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const se=[{id:"careers",label:"Career Information",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:e.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:e.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:e.TARGET_ARROW}],$=[{id:"careers",label:"Career Information",icon:te.ACTION_CHAINS_OUTLINED},{id:"educations",label:"Educational Background",index:1},{id:"experiences",label:"Professional Experience",index:2,icon:e.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",index:3}],ee=[{id:"default",label:"Default item",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"menu-expanded",label:"Menu Expanded",icon:e.SCHOOL_OUTLINE,children:[{id:"subitem-1-1",label:"Subitem 1-1",icon:e.CHEVRON_RIGHT},{id:"subitem-1-2",label:"Subitem 1-2"},{id:"subitem-1-3",label:"Subitem 1-3",icon:e.CHEVRON_RIGHT}],expanded:!0},{id:"collapsed-menu",label:"Collapsed Menu",icon:e.VECTOR_POLYGON_VARIANT,children:[{id:"subitem-2-1",label:"Subitem 2-1",icon:e.CHEVRON_RIGHT},{id:"subitem-2-2",label:"Subitem 2-2",icon:e.CHEVRON_RIGHT}]}],Ae={title:"Components/Navigation/AvSideNavigation",component:v,tags:["autodocs"],argTypes:{items:{control:{type:"object"}},width:{control:{type:"text"}},collapsedWidth:{control:{type:"text"}},selectedItem:{control:{type:"object"}},isSideMenuCollapsed:{control:{type:"boolean"}},sticky:{control:{type:"boolean"}},stickyOffset:{control:{type:"text"}},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]}},args:{items:se,collapsedWidth:"3.5rem",width:"fit-content",theme:"PRIMARY"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
</ul>`}}}},b=`
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
`,S=t=>({components:{AvSideNavigation:v},setup(){const s=n({itemId:"careers"}),a=n(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:a}},template:b}),h=t=>({components:{AvSideNavigation:v},setup(){const s=n({itemId:"careers"}),a=n(!0);return{args:t,selectedItem:s,isSideMenuCollapsed:a}},template:b}),ne=t=>({components:{AvSideNavigation:v},setup(){const s=n({itemId:"subitem-1-1",parentId:"menu-expanded"}),a=n(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:a}},template:b}),ae=t=>({components:{AvSideNavigation:v},setup(){const s=n({itemId:"careers"}),a=n(!1);return{args:t,selectedItem:s,isSideMenuCollapsed:a}},template:`
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
  `}),i=S.bind({});i.args={};const o=S.bind({});o.args={theme:"SECONDARY"};const r=S.bind({});r.args={items:$,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"}};const d=S.bind({});d.args={items:$,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"},theme:"SECONDARY"};const l=ne.bind({});l.args={items:ee,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"}};const c=ne.bind({});c.args={items:ee,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"},theme:"SECONDARY"};const p=h.bind({});p.args={isSideMenuCollapsed:!0};const m=h.bind({});m.args={selectedItem:{itemId:"educations"},isSideMenuCollapsed:!0};const u=S.bind({});u.args={selectedItem:{itemId:"experiences"},width:"20rem"};const g=h.bind({});g.args={selectedItem:{itemId:"experiences"},collapsedWidth:"5rem"};const I=ae.bind({});I.args={sticky:!0,stickyOffset:"0"};const Ne=["Default","Secondary","ItemsWithIndexes","ItemWithIndexesSecondary","MenuItemsDefault","MenuItemsSecondary","Collapsed","HiddenContentCollapsed","CustomWidth","CustomCollapsedWidth","Sticky"];var f,C,M;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var y,A,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(N=(A=o.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var x,T,O;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(O=(T=r.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var E,R,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var _,k,L;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(L=(k=l.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var W,D,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var P,V,Y;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(Y=(V=p.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var G,F,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(U=(F=m.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var j,B,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(z=(B=u.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var K,q,J;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};export{p as Collapsed,g as CustomCollapsedWidth,u as CustomWidth,i as Default,m as HiddenContentCollapsed,d as ItemWithIndexesSecondary,r as ItemsWithIndexes,l as MenuItemsDefault,c as MenuItemsSecondary,o as Secondary,I as Sticky,Ne as __namedExportsOrder,Ae as default};
