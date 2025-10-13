import{M as o}from"./icons-DLnh1uvi.js";import{d as E,O as g,P as v,k as f,i as p,w as h,y as O,B as S,b as B,F as R,j as D,n as q,r as i}from"./iframe-DhY3rxPY.js";import{A as z,a as F}from"./AvList-BEXh6Tgh.js";import{A as P}from"./AvSideMenu-moa9b7-5.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./AvVIcon-W2_JcLXn.js";import"./vue-dsfr-CfU3oKsL.js";import"./AvButton-B5ATaHms.js";import"./string-BZgCOP9D.js";const W=E({__name:"AvSideNavigation",props:g({items:{},selectedItem:{},isSideMenuCollapsed:{type:Boolean},collapsedWidth:{default:"3.5rem"},selectedItemColor:{}},{selectedItem:{default:""},selectedItemModifiers:{},isSideMenuCollapsed:{type:Boolean,default:!1},isSideMenuCollapsedModifiers:{}}),emits:g(["update:selectedItem","update:isSideMenuCollapsed"],["update:selectedItem","update:isSideMenuCollapsed"]),setup(e){const t=v(e,"selectedItem"),s=v(e,"isSideMenuCollapsed");function L(m){t.value=m}return(m,u)=>(p(),f(P,{collapsed:s.value,"onUpdate:collapsed":u[0]||(u[0]=a=>s.value=a),"collapsed-width":e.collapsedWidth,color:e.selectedItemColor},{default:h(()=>[O(S(z),{size:"small",role:"menu"},{default:h(()=>[(p(!0),B(R,null,D(e.items,a=>(p(),f(S(F),{key:a.id,title:s.value?void 0:a.label,icon:a.icon,"icon-size":1.8,selected:t.value===a.id,"hover-background-color":e.selectedItemColor,tag:"button",role:"menuitem",class:q(["av-side-navigation__menu-item",{"av-side-navigation__menu-item--collapsed":s.value}]),clickable:"",onClick:U=>L(a.id)},null,8,["title","icon","selected","hover-background-color","class","onClick"]))),128))]),_:1})]),_:1},8,["collapsed","collapsed-width","color"]))}}),n=V(W,[["__scopeId","data-v-3c5a1abd"]]);W.__docgenInfo={exportName:"default",displayName:"AvSideNavigation",description:"",tags:{},props:[{name:"items",description:"List of items to display in the side navigation.",required:!0,type:{name:"Array",elements:[{name:"AvSideNavigationItem"}]}},{name:"selectedItem",description:"The currently selected item ID.",required:!1,type:{name:"string"}},{name:"isSideMenuCollapsed",description:"Whether the side menu is collapsed or not.",required:!1,type:{name:"boolean"}},{name:"collapsedWidth",description:"Width of the side menu when collapsed.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'3.5rem'"}},{name:"selectedItemColor",description:"Color of selected item background and icon.",required:!1,type:{name:"string"}}],events:[{name:"update:selectedItem",type:{names:["string"]},description:"Emitted when the selected item changes.",properties:[{type:{names:["mixed"]},name:"value",description:"The ID of the newly selected item"}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"The ID of the newly selected item"}]},{name:"update:isSideMenuCollapsed",type:{names:["boolean"]},description:"Emitted when the side menu collapse state changes.",properties:[{type:{names:["mixed"]},name:"value",description:"New collapsed state (true for collapsed, false for expanded)"}],tags:[{title:"param",type:{name:"mixed"},name:"value",description:"New collapsed state (true for collapsed, false for expanded)"}]}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/navigation/AvSideNavigation/AvSideNavigation.vue"]};const j=[{id:"careers",label:"Career Information",icon:o.BRIEFCASE_VARIANT_OUTLINE},{id:"educations",label:"Educational Background",icon:o.SCHOOL_OUTLINE},{id:"experiences",label:"Professional Experience",icon:o.VECTOR_POLYGON_VARIANT},{id:"activities",label:"Activities & Projects",icon:o.TARGET_ARROW}],se={title:"Components/Navigation/AvSideNavigation",component:n,tags:["autodocs"],argTypes:{items:{description:"Array of navigation items with id, label, and icon",control:{type:"object"}},collapsedWidth:{description:"Width of the side menu when collapsed",control:{type:"text"}},selectedItem:{description:"Currently selected item ID (v-model)",control:{type:"text"}},isSideMenuCollapsed:{description:"Whether the side menu is collapsed (v-model)",control:{type:"boolean"}}},args:{items:j,collapsedWidth:"3.5rem"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideNavigation</code></h1>

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
  <li><span class="b2-regular"><strong>Side Menu Container:</strong> The main AvSideMenu wrapper that handles collapsible behavior</span></li>
  <li><span class="b2-regular"><strong>Navigation List:</strong> An AvList component that contains all navigation items</span></li>
  <li><span class="b2-regular"><strong>Navigation Items:</strong> Individual AvListItem components representing each navigational option</span></li>
  <li><span class="b2-regular"><strong>Toggle Functionality:</strong> Automatic label hiding/showing based on collapsed state</span></li>
</ul>

<p><span class="b2-regular">The side navigation integrates:</span></p>

<ul>
  <li><span class="b2-regular">Two-way binding for selected item and collapsed state via defineModel</span></li>
  <li><span class="b2-regular">Automatic icon-only display when collapsed</span></li>
  <li><span class="b2-regular">Selection state management with visual feedback</span></li>
  <li><span class="b2-regular">Keyboard navigation and accessibility attributes</span></li>
  <li><span class="b2-regular">Responsive design with customizable widths</span></li>
</ul>`}}}},l={render:e=>({components:{AvSideNavigation:n},setup(){const t=i("careers"),s=i(!1);return{args:e,selectedItem:t,isSideMenuCollapsed:s}},template:`
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
    `})},d={render:e=>({components:{AvSideNavigation:n},setup(){const t=i("educations"),s=i(!0);return{args:e,selectedItem:t,isSideMenuCollapsed:s}},template:`
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
    `})},r={render:e=>({components:{AvSideNavigation:n},setup(){const t=i("experiences"),s=i(!1);return{args:e,selectedItem:t,isSideMenuCollapsed:s}},template:`
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
    `}),args:{collapsedWidth:"5rem"}},c={render:e=>({components:{AvSideNavigation:n},setup(){const t=i("activities"),s=i(!1);return{args:e,selectedItem:t,isSideMenuCollapsed:s}},template:`
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
    `}),args:{selectedItemColor:"#4caf50"}};var y,b,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(b=l.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var C,M,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var x,w,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(w=r.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var T,k,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const te=["Default","Collapsed","CustomWidth","CustomColor"];export{d as Collapsed,c as CustomColor,r as CustomWidth,l as Default,te as __namedExportsOrder,se as default};
