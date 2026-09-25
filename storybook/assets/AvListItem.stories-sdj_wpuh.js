import{a as y,A as x}from"./AvList-Cx29yBxn.js";import{M as e}from"./icons-CS5vb1aa.js";import{T as C}from"./theme.types-DKH7g3eH.js";import"./iframe-Cb79UARr.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-B6XRolpv.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-VZio7N2M.js";import"./use-text-truncation-IkOLGshO.js";const Ke={title:"Components/Interaction/Lists/AvListItem",component:y,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,e.HOME_VARIANT_OUTLINE,e.ACCOUNT_CIRCLE_OUTLINE,e.PENCIL_OUTLINE,e.BRIEFCASE_VARIANT_OUTLINE,e.SCHOOL_OUTLINE,e.TARGET_ARROW,e.STARS]},iconSize:{control:"number"},title:{control:"text"},description:{control:"text"},disabled:{control:"boolean"},selected:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},ariaLabel:{control:"text"},ariaDescribedby:{control:"text"},titleMaxLines:{control:"number"},theme:{control:"select",options:Object.values(C)}},args:{iconSize:1.3125,disabled:!1,selected:!1,titleMaxLines:void 0,theme:C.PRIMARY},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvListItem</code></h1>

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
</ul>`}}}},t=n=>({components:{AvList:x,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  `}),r=t.bind({});r.args={title:"Default List Item",description:"This is a basic list item"};const a=t.bind({});a.args={title:"Secondary Item",description:"This is a secondary themed list item",icon:e.STARS,theme:C.SECONDARY};const s=t.bind({});s.args={title:"Tertiary Item",description:"This is a tertiary themed list item",icon:e.STARS,theme:C.TERTIARY};s.decorators=[()=>({template:`
      <div style="background-color: var(--dark-background-primary1); padding: 1rem;">
        <story />
      </div>
    `})];const o=t.bind({});o.args={title:"Home",description:"Navigate to homepage",icon:e.HOME_VARIANT_OUTLINE};const c=t.bind({});c.args={title:"Clickable Item",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,onClick:()=>alert("Item clicked!")};const l=t.bind({});l.args={title:"Clickable Subitem",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,type:"sub",onClick:()=>alert("Item clicked!")};const d=t.bind({});d.args={title:"Selected Item",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,onClick:()=>alert("Selected item clicked!")};const m=t.bind({});m.args={title:"Selected Subitem",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,type:"sub",onClick:()=>alert("Selected item clicked!")};const p=t.bind({});p.args={title:"Disabled Item",description:"This item is not available",icon:e.ALERT_CIRCLE_OUTLINE,disabled:!0,onClick:()=>alert("This should not trigger")};const v=t.bind({});v.args={title:"Title Only Item",icon:e.INFORMATION_OUTLINE,onClick:()=>alert("Title only item clicked!")};const u=t.bind({});u.args={description:"This item only has a description",icon:e.CHAT_BUBBLE_OUTLINE};const g=t.bind({});g.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0};const L=t.bind({});L.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0,type:"sub"};const A=t.bind({});A.args={title:"Large Icon",description:"Item with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,onClick:()=>alert("Large icon item clicked!")};const I=t.bind({});I.args={title:"Large Icon",description:"Subitem with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,type:"sub",onClick:()=>alert("Large icon item clicked!")};const Me=n=>({components:{AvList:x,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args">
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
            <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; background: white;">Edit</button>
            <button style="padding: 0.25rem 0.5rem; border: 1px solid #dc2626; border-radius: 0.25rem; background: #fef2f2;">Delete</button>
          </div>
        </AvListItem>
      </AvList>
    </div>
  `}),i=Me.bind({});i.args={title:"Custom Content",icon:e.DOTS_VERTICAL};i.render=n=>({components:{AvList:x,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}}});const Ee=n=>({components:{AvList:x,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `}),b=Ee.bind({});b.args={title:"Accessible Item",description:"Item with custom accessibility attributes",icon:e.INFORMATION_OUTLINE,ariaLabel:"Custom accessible label for screen readers",ariaDescribedby:"helper-text",onClick:()=>alert("Accessible item clicked!")};const h=t.bind({});h.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,onClick:()=>alert("Item with title max lines clicked!")};const S=t.bind({});S.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with title max lines clicked!")};const T=t.bind({});T.args={title:"Item with short title",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with short title clicked!")};var O,_,w;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
})`,...(w=(_=r.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var k,N,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(f=(N=a.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var M,E,R;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(R=(E=s.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var D,U,W;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(W=(U=o.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var H,B,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(z=(B=c.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var F,V,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(P=(V=l.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var K,G,Y;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(Y=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var j,q,J;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,ie;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
})`,...(ie=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,ae,oe;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ce,le,de;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(de=(le=L.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,pe,ve;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
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
})`,...(ve=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ue,ge,Le;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(Le=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:Le.source}}};var Ae,Ie,be;i.parameters={...i.parameters,docs:{...(Ae=i.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
        <AvListItem v-bind="args">
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
            <button style="padding: 0.25rem 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; background: white;">Edit</button>
            <button style="padding: 0.25rem 0.5rem; border: 1px solid #dc2626; border-radius: 0.25rem; background: #fef2f2;">Delete</button>
          </div>
        </AvListItem>
      </AvList>
    </div>
  \`
})`,...(be=(Ie=i.parameters)==null?void 0:Ie.docs)==null?void 0:be.source}}};var he,Se,Te;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
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
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  \`
})`,...(Te=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var ye,Ce,xe;h.parameters={...h.parameters,docs:{...(ye=h.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
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
})`,...(xe=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Oe,_e,we;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(we=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:we.source}}};var ke,Ne,fe;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(fe=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:fe.source}}};const Ge=["Default","Secondary","TertiaryOnDarkBackground","WithIcon","Clickable","SubClickable","Selected","SubSelected","Disabled","TitleOnly","DescriptionOnly","NavigationLink","SubNavigationLink","LargeIcon","SubLargeIcon","WithCustomContent","WithAccessibility","WithTitleMaxLines","WithTitleMaxLinesAndTooltip","WithTitleMaxLinesAndTooltipAndShortTitle"];export{c as Clickable,r as Default,u as DescriptionOnly,p as Disabled,A as LargeIcon,g as NavigationLink,a as Secondary,d as Selected,l as SubClickable,I as SubLargeIcon,L as SubNavigationLink,m as SubSelected,s as TertiaryOnDarkBackground,v as TitleOnly,b as WithAccessibility,i as WithCustomContent,o as WithIcon,h as WithTitleMaxLines,S as WithTitleMaxLinesAndTooltip,T as WithTitleMaxLinesAndTooltipAndShortTitle,Ge as __namedExportsOrder,Ke as default};
