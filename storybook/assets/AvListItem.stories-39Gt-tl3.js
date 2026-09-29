import{a as y,A as C}from"./AvList-D39PjuCJ.js";import{M as e}from"./icons-DWZy0qMO.js";import"./iframe-BTm0ulUO.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-C8KMjyAS.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-6FTwfVgT.js";import"./use-text-truncation-DQS26-ja.js";const Pe={title:"Components/Interaction/Lists/AvListItem",component:y,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,e.HOME_VARIANT_OUTLINE,e.ACCOUNT_CIRCLE_OUTLINE,e.PENCIL_OUTLINE,e.BRIEFCASE_VARIANT_OUTLINE,e.SCHOOL_OUTLINE,e.TARGET_ARROW,e.STARS]},iconSize:{control:"number"},title:{control:"text"},description:{control:"text"},disabled:{control:"boolean"},selected:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},ariaLabel:{control:"text"},ariaDescribedby:{control:"text"},titleMaxLines:{control:"number"},theme:{control:"select",options:["PRIMARY","SECONDARY","TERTIARY"]}},args:{iconSize:1.3125,disabled:!1,selected:!1,titleMaxLines:void 0,theme:"PRIMARY"},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvListItem</code></h1>

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
</ul>`}}}},t=n=>({components:{AvList:C,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  `}),r=t.bind({});r.args={title:"Default List Item",description:"This is a basic list item"};const a=t.bind({});a.args={title:"Secondary Item",description:"This is a secondary themed list item",icon:e.STARS,theme:"SECONDARY"};const s=t.bind({});s.args={title:"Tertiary Item",description:"This is a tertiary themed list item",icon:e.STARS,theme:"TERTIARY"};s.decorators=[()=>({template:`
      <div style="background-color: var(--dark-background-primary1); padding: 1rem;">
        <story />
      </div>
    `})];const o=t.bind({});o.args={title:"Home",description:"Navigate to homepage",icon:e.HOME_VARIANT_OUTLINE};const c=t.bind({});c.args={title:"Clickable Item",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,onClick:()=>alert("Item clicked!")};const l=t.bind({});l.args={title:"Clickable Subitem",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,type:"sub",onClick:()=>alert("Item clicked!")};const d=t.bind({});d.args={title:"Selected Item",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,onClick:()=>alert("Selected item clicked!")};const m=t.bind({});m.args={title:"Selected Subitem",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,type:"sub",onClick:()=>alert("Selected item clicked!")};const p=t.bind({});p.args={title:"Disabled Item",description:"This item is not available",icon:e.ALERT_CIRCLE_OUTLINE,disabled:!0,onClick:()=>alert("This should not trigger")};const v=t.bind({});v.args={title:"Title Only Item",icon:e.INFORMATION_OUTLINE,onClick:()=>alert("Title only item clicked!")};const u=t.bind({});u.args={description:"This item only has a description",icon:e.CHAT_BUBBLE_OUTLINE};const g=t.bind({});g.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0};const L=t.bind({});L.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0,type:"sub"};const A=t.bind({});A.args={title:"Large Icon",description:"Item with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,onClick:()=>alert("Large icon item clicked!")};const I=t.bind({});I.args={title:"Large Icon",description:"Subitem with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,type:"sub",onClick:()=>alert("Large icon item clicked!")};const fe=n=>({components:{AvList:C,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}},template:`
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
  `}),i=fe.bind({});i.args={title:"Custom Content",icon:e.DOTS_VERTICAL};i.render=n=>({components:{AvList:C,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}}});const Ee=n=>({components:{AvList:C,AvListItem:y},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `}),b=Ee.bind({});b.args={title:"Accessible Item",description:"Item with custom accessibility attributes",icon:e.INFORMATION_OUTLINE,ariaLabel:"Custom accessible label for screen readers",ariaDescribedby:"helper-text",onClick:()=>alert("Accessible item clicked!")};const h=t.bind({});h.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,onClick:()=>alert("Item with title max lines clicked!")};const S=t.bind({});S.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with title max lines clicked!")};const T=t.bind({});T.args={title:"Item with short title",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with short title clicked!")};var x,O,_;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(_=(O=r.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var w,N,k;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var f,E,M;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,D,U;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(U=(D=o.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var W,H,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(B=(H=c.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var z,F,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(P=(F=l.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,Y,K;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(K=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var G,j,q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var J,Q,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,se;u.parameters={...u.parameters,docs:{...(te=u.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(se=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,re,ae;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var oe,ce,le;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
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
})`,...(le=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,me,pe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(pe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ve,ue,ge;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var Le,Ae,Ie;i.parameters={...i.parameters,docs:{...(Le=i.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
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
})`,...(Ie=(Ae=i.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var be,he,Se;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`args => ({
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
})`,...(Se=(he=b.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var Te,ye,Ce;h.parameters={...h.parameters,docs:{...(Te=h.parameters)==null?void 0:Te.docs,source:{originalSource:`args => ({
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
})`,...(Ce=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var xe,Oe,_e;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var we,Ne,ke;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
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
})`,...(ke=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};const Ve=["Default","Secondary","TertiaryOnDarkBackground","WithIcon","Clickable","SubClickable","Selected","SubSelected","Disabled","TitleOnly","DescriptionOnly","NavigationLink","SubNavigationLink","LargeIcon","SubLargeIcon","WithCustomContent","WithAccessibility","WithTitleMaxLines","WithTitleMaxLinesAndTooltip","WithTitleMaxLinesAndTooltipAndShortTitle"];export{c as Clickable,r as Default,u as DescriptionOnly,p as Disabled,A as LargeIcon,g as NavigationLink,a as Secondary,d as Selected,l as SubClickable,I as SubLargeIcon,L as SubNavigationLink,m as SubSelected,s as TertiaryOnDarkBackground,v as TitleOnly,b as WithAccessibility,i as WithCustomContent,o as WithIcon,h as WithTitleMaxLines,S as WithTitleMaxLinesAndTooltip,T as WithTitleMaxLinesAndTooltipAndShortTitle,Ve as __namedExportsOrder,Pe as default};
