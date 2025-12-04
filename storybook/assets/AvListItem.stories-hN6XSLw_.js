import{a as g,A as b}from"./AvListItem-D25u2ybi.js";import{M as e}from"./icons-BZJLfc_p.js";import"./iframe-BJrrlspE.js";import"./preload-helper-ILsKNznc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-CT6DFD2s.js";const ie={title:"Components/Interaction/Lists/AvListItem",component:g,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,e.HOME_VARIANT_OUTLINE,e.ACCOUNT_CIRCLE_OUTLINE,e.PENCIL_OUTLINE,e.BRIEFCASE_VARIANT_OUTLINE,e.SCHOOL_OUTLINE,e.TARGET_ARROW,e.STARS]},color:{control:"color"},iconSize:{control:"number"},title:{control:"text"},description:{control:"text"},hoverBackgroundColor:{control:"color"},colorOnHover:{control:"color"},descriptionColor:{control:"color"},clickable:{control:"boolean"},disabled:{control:"boolean"},selected:{control:"boolean"},tag:{control:"select",options:["button","div","a"]},href:{control:"text"},target:{control:"text"},rel:{control:"text"},ariaLabel:{control:"text"},ariaDescribedby:{control:"text"}},args:{color:"var(--text1)",iconSize:1.3125,hoverBackgroundColor:"var(--dark-background-primary1)",colorOnHover:"var(--card)",descriptionColor:"var(--text2)",clickable:!1,disabled:!1,selected:!1,tag:"button"},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvListItem</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The AvListItem component represents an individual item within a list container. It provides a flexible and accessible way to display content with optional icons, titles, descriptions, and interactive capabilities while maintaining consistent styling and behavior patterns.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvListItem</code> component is designed to work seamlessly within <code>AvList</code> containers, offering extensive customization for various use cases including navigation menus, content lists, action items, and interactive elements. It supports full accessibility compliance with proper ARIA attributes and keyboard navigation.
  </span>
</p>

<p>
  <span class="b2-regular">
    It features comprehensive interaction states (hover, focus, active, disabled, selected), flexible content structure with slots, and dynamic tag rendering for different semantic contexts while maintaining visual consistency with the design system.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The list item consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">the <strong>Container:</strong> (mandatory) Root wrapper element that can be div, button, or anchor based on usage</span></li>
  <li><span class="b2-regular">the <strong>Icon:</strong> (optional) Visual indicator displayed on the left side of the content</span></li>
  <li><span class="b2-regular">the <strong>Content Area:</strong> (mandatory) Contains title, description, and/or custom content</span></li>
  <li><span class="b2-regular">the <strong>Custom Content Slot:</strong> (optional) Allows insertion of any custom elements within the content area</span></li>
</ul>

<p><span class="b2-regular">The list item integrates:</span></p>

<ul>
  <li><span class="b2-regular">Dynamic tag rendering for semantic correctness (div, button, a)</span></li>
  <li><span class="b2-regular">Full accessibility support with ARIA attributes and keyboard navigation</span></li>
  <li><span class="b2-regular">Comprehensive interaction states and visual feedback</span></li>
  <li><span class="b2-regular">Flexible content structure with icon, title, description, and slot support</span></li>
</ul>`}}}},t=r=>({components:{AvList:b,AvListItem:g},setup(){return{args:r,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  `}),i=t.bind({});i.args={title:"Default List Item",description:"This is a basic list item"};const a=t.bind({});a.args={title:"Home",description:"Navigate to homepage",icon:e.HOME_VARIANT_OUTLINE};const o=t.bind({});o.args={title:"Clickable Item",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,clickable:!0};const c=t.bind({});c.args={title:"Selected Item",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,clickable:!0,selected:!0};const l=t.bind({});l.args={title:"Disabled Item",description:"This item is not available",icon:e.ALERT_CIRCLE_OUTLINE,clickable:!0,disabled:!0};const d=t.bind({});d.args={title:"Title Only Item",icon:e.INFORMATION_OUTLINE,clickable:!0};const m=t.bind({});m.args={description:"This item only has a description",icon:e.CHAT_BUBBLE_OUTLINE};const p=t.bind({});p.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,clickable:!0,tag:"a",href:"https://example.com",target:"_blank",rel:"noopener noreferrer"};const v=t.bind({});v.args={title:"Large Icon",description:"Item with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,clickable:!0};const u=t.bind({});u.args={title:"Custom Colors",description:"Item with custom styling",icon:e.STARS,clickable:!0,color:"#2563eb",hoverBackgroundColor:"#dbeafe",colorOnHover:"#1d4ed8",descriptionColor:"#6b7280"};const n=t.bind({});n.args={title:"Custom Content",icon:e.DOTS_VERTICAL,clickable:!0};n.render=r=>({components:{AvList:b,AvListItem:g},setup(){return{args:r,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args">
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
            <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; background: white;">Edit</button>
            <button style="padding: 0.25rem 0.5rem; border: 1px solid #dc2626; border-radius: 0.25rem; background: #fef2f2; color: #dc2626;">Delete</button>
          </div>
        </AvListItem>
      </AvList>
    </div>
  `});const s=t.bind({});s.args={title:"Accessible Item",description:"Item with custom accessibility attributes",icon:e.INFORMATION_OUTLINE,clickable:!0,ariaLabel:"Custom accessible label for screen readers",ariaDescribedby:"helper-text"};s.render=r=>({components:{AvList:b,AvListItem:g},setup(){return{args:r,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `});var I,A,L;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var h,C,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(y=(C=a.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var O,T,S;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var _,x,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var f,w,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var k,D,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(R=(D=d.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,U,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(H=(U=m.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var B,W,F;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var V,z,P;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(P=(z=v.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var G,K,j;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(j=(K=u.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var q,J,Q;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(Q=(J=n.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    AvList,
    AvListItem
  },
  setup() {
    return {
      args,
      MDI_ICONS
    };
  },
  template: \`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  \`
})`,...(Z=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ae=["Default","WithIcon","Clickable","Selected","Disabled","TitleOnly","DescriptionOnly","NavigationLink","LargeIcon","CustomColors","WithCustomContent","WithAccessibility"];export{o as Clickable,u as CustomColors,i as Default,m as DescriptionOnly,l as Disabled,v as LargeIcon,p as NavigationLink,c as Selected,d as TitleOnly,s as WithAccessibility,n as WithCustomContent,a as WithIcon,ae as __namedExportsOrder,ie as default};
