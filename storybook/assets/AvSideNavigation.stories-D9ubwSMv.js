import{A as g}from"./AvSideNavigation-Czw-cLuG.js";import{M as e}from"./icons-B6bk2eYx.js";import{P as t}from"./iframe-CyF0G0ls.js";import"./AvCheckboxListItem-juat9Kyx.js";import"./AvList-BhPkFDt1.js";import"./AvIcon-KpGKPSqj.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-B8vstoA-.js";import"./utils-pnJYGbuQ.js";import"./use-text-truncation-Cr6sX4z0.js";import"./AvCheckbox-C6NFAT_I.js";import"./AvFieldsetElement-lyBu-aU3.js";import"./AvMessage-D96p1CSi.js";import"./AvIconText-XfroAJWq.js";import"./AvSideMenu-CfSCUQML.js";import"./AvButton-BNerEisy.js";import"./date-picker-uOcIu4U5.js";import"./string-DrqoAonW.js";import"./preload-helper-ILsKNznc.js";const K=[{id:"careers",label:"Career Information",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:e.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:e.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:e.TARGET_ARROW}],F=[{id:"default",label:"Default item",icon:e.BRIEFCASE_VARIANT_OUTLINE},{id:"menu-expanded",label:"Menu Expanded",icon:e.SCHOOL_OUTLINE,children:[{id:"subitem-1-1",label:"Subitem 1-1",icon:e.CHEVRON_RIGHT},{id:"subitem-1-2",label:"Subitem 1-2"},{id:"subitem-1-3",label:"Subitem 1-3",icon:e.CHEVRON_RIGHT}],expanded:!0},{id:"collapsed-menu",label:"Collapsed Menu",icon:e.VECTOR_POLYGON_VARIANT,children:[{id:"subitem-2-1",label:"Subitem 2-1",icon:e.CHEVRON_RIGHT},{id:"subitem-2-2",label:"Subitem 2-2",icon:e.CHEVRON_RIGHT}]}],Ie={title:"Components/Navigation/AvSideNavigation",component:g,tags:["autodocs"],argTypes:{items:{control:{type:"object"}},width:{control:{type:"text"}},collapsedWidth:{control:{type:"text"}},selectedItem:{control:{type:"object"}},isSideMenuCollapsed:{control:{type:"boolean"}},sticky:{control:{type:"boolean"}},stickyOffset:{control:{type:"text"}},theme:{control:{type:"radio"},options:["PRIMARY","SECONDARY"]}},args:{items:K,collapsedWidth:"3.5rem",width:"fit-content",theme:"PRIMARY"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
</ul>`}}}},I=`
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
`,v=n=>({components:{AvSideNavigation:g},setup(){const s=t({itemId:"careers"}),a=t(!1);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:I}),b=n=>({components:{AvSideNavigation:g},setup(){const s=t({itemId:"careers"}),a=t(!0);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:I}),z=n=>({components:{AvSideNavigation:g},setup(){const s=t({itemId:"subitem-1-1",parentId:"menu-expanded"}),a=t(!1);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:I}),q=n=>({components:{AvSideNavigation:g},setup(){const s=t({itemId:"careers"}),a=t(!1);return{args:n,selectedItem:s,isSideMenuCollapsed:a}},template:`
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
  `}),i=v.bind({});i.args={};const o=v.bind({});o.args={theme:"SECONDARY"};const r=z.bind({});r.args={items:F,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"}};const d=z.bind({});d.args={items:F,selectedItem:{itemId:"subitem-1-1",parentId:"menu-expanded"},theme:"SECONDARY"};const l=b.bind({});l.args={isSideMenuCollapsed:!0};const c=b.bind({});c.args={selectedItem:{itemId:"educations"},isSideMenuCollapsed:!0};const p=v.bind({});p.args={selectedItem:{itemId:"experiences"},width:"20rem"};const m=b.bind({});m.args={selectedItem:{itemId:"experiences"},collapsedWidth:"5rem"};const u=q.bind({});u.args={sticky:!0,stickyOffset:"0"};var h,S,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,y,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
})`,...(M=(y=o.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var A,N,T;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(T=(N=r.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var x,R,O;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(O=(R=d.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var w,E,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var _,L,H;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(H=(L=c.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var P,V,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,G,Y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(Y=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var U,j,B;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const ve=["Default","Secondary","MenuItemsDefault","MenuItemsSecondary","Collapsed","HiddenContentCollapsed","CustomWidth","CustomCollapsedWidth","Sticky"];export{l as Collapsed,m as CustomCollapsedWidth,p as CustomWidth,i as Default,c as HiddenContentCollapsed,r as MenuItemsDefault,d as MenuItemsSecondary,o as Secondary,u as Sticky,ve as __namedExportsOrder,Ie as default};
