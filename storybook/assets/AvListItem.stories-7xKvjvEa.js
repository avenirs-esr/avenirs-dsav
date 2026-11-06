import{a as C,A as O}from"./AvList-BSzuC7jR.js";import{M as e}from"./icons-0TexbTrg.js";import"./iframe-vdiTwd8x.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-BH-ZY_FY.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-DWsO7VSM.js";import"./utils-BIlgUrNJ.js";import"./use-text-truncation-B9YqovTu.js";const Xe={title:"Components/Interaction/Lists/AvListItem",component:C,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,e.HOME_VARIANT_OUTLINE,e.ACCOUNT_CIRCLE_OUTLINE,e.PENCIL_OUTLINE,e.BRIEFCASE_VARIANT_OUTLINE,e.SCHOOL_OUTLINE,e.TARGET_ARROW,e.STARS]},index:{control:"number"},iconSize:{control:"number"},title:{control:"text"},description:{control:"text"},disabled:{control:"boolean"},selected:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},ariaLabel:{control:"text"},ariaDescribedby:{control:"text"},titleMaxLines:{control:"number"},theme:{control:"select",options:["PRIMARY","SECONDARY","TERTIARY"]}},args:{index:void 0,iconSize:1.3125,disabled:!1,selected:!1,titleMaxLines:void 0,theme:"PRIMARY"},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvListItem</code></h1>

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
</ul>`}}}},t=n=>({components:{AvList:O,AvListItem:C},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  `}),r=t.bind({});r.args={title:"Default List Item",description:"This is a basic list item"};const a=t.bind({});a.args={title:"Secondary Item",description:"This is a secondary themed list item",icon:e.STARS,theme:"SECONDARY"};const s=t.bind({});s.args={title:"Tertiary Item",description:"This is a tertiary themed list item",icon:e.STARS,theme:"TERTIARY"};s.decorators=[()=>({template:`
      <div style="background-color: var(--dark-background-primary1); padding: 1rem;">
        <story />
      </div>
    `})];const o=t.bind({});o.args={title:"Home",description:"Navigate to homepage",icon:e.HOME_VARIANT_OUTLINE};const c=t.bind({});c.args={title:"Item with Index",description:"This item displays an index",index:1};const d=t.bind({});d.args={title:"Item with Icon and Index",description:"This item displays both an icon and an index",icon:e.INFORMATION_OUTLINE,index:1};const l=t.bind({});l.args={title:"Clickable Item",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,onClick:()=>alert("Item clicked!")};const m=t.bind({});m.args={title:"Clickable Subitem",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,type:"sub",onClick:()=>alert("Item clicked!")};const p=t.bind({});p.args={title:"Selected Item",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,onClick:()=>alert("Selected item clicked!")};const v=t.bind({});v.args={title:"Selected Subitem",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,type:"sub",onClick:()=>alert("Selected item clicked!")};const u=t.bind({});u.args={title:"Disabled Item",description:"This item is not available",icon:e.ALERT_CIRCLE_OUTLINE,disabled:!0,onClick:()=>alert("This should not trigger")};const g=t.bind({});g.args={title:"Title Only Item",icon:e.INFORMATION_OUTLINE,onClick:()=>alert("Title only item clicked!")};const I=t.bind({});I.args={description:"This item only has a description",icon:e.CHAT_BUBBLE_OUTLINE};const L=t.bind({});L.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0};const A=t.bind({});A.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0,type:"sub"};const b=t.bind({});b.args={title:"Large Icon",description:"Item with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,onClick:()=>alert("Large icon item clicked!")};const h=t.bind({});h.args={title:"Large Icon",description:"Subitem with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,type:"sub",onClick:()=>alert("Large icon item clicked!")};const He=n=>({components:{AvList:O,AvListItem:C},setup(){return{args:n,MDI_ICONS:e}},template:`
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
  `}),i=He.bind({});i.args={title:"Custom Content",icon:e.DOTS_VERTICAL};i.render=n=>({components:{AvList:O,AvListItem:C},setup(){return{args:n,MDI_ICONS:e}}});const Be=n=>({components:{AvList:O,AvListItem:C},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `}),S=Be.bind({});S.args={title:"Accessible Item",description:"Item with custom accessibility attributes",icon:e.INFORMATION_OUTLINE,ariaLabel:"Custom accessible label for screen readers",ariaDescribedby:"helper-text",onClick:()=>alert("Accessible item clicked!")};const T=t.bind({});T.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,onClick:()=>alert("Item with title max lines clicked!")};const x=t.bind({});x.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with title max lines clicked!")};const y=t.bind({});y.args={title:"Item with short title",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with short title clicked!")};const Ze=["Default","Secondary","TertiaryOnDarkBackground","WithIcon","WithIndex","WithIconAndIndex","Clickable","SubClickable","Selected","SubSelected","Disabled","TitleOnly","DescriptionOnly","NavigationLink","SubNavigationLink","LargeIcon","SubLargeIcon","WithCustomContent","WithAccessibility","WithTitleMaxLines","WithTitleMaxLinesAndTooltip","WithTitleMaxLinesAndTooltipAndShortTitle"];var w,N,_;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(_=(N=r.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var k,M,E;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(E=(M=a.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var R,f,D;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var W,U,F;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(F=(U=o.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var H,B,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(z=(B=c.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var P,V,Y;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(Y=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var K,G,j;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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
})`,...(j=(G=l.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var q,J,Q;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
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
})`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,ie,re;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
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
})`,...(re=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,oe,ce;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(ce=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,le,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(me=(le=I.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var pe,ve,ue;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
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
})`,...(ue=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var ge,Ie,Le;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(Le=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source}}};var Ae,be,he;b.parameters={...b.parameters,docs:{...(Ae=b.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => ({
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
})`,...(he=(be=b.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Se,Te,xe;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(xe=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var ye,Ce,Oe;i.parameters={...i.parameters,docs:{...(ye=i.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
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
})`,...(Oe=(Ce=i.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var we,Ne,_e;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var ke,Me,Ee;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Ee=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:Ee.source}}};var Re,fe,De;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`args => ({
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
})`,...(De=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:De.source}}};var We,Ue,Fe;y.parameters={...y.parameters,docs:{...(We=y.parameters)==null?void 0:We.docs,source:{originalSource:`args => ({
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
})`,...(Fe=(Ue=y.parameters)==null?void 0:Ue.docs)==null?void 0:Fe.source}}};export{l as Clickable,r as Default,I as DescriptionOnly,u as Disabled,b as LargeIcon,L as NavigationLink,a as Secondary,p as Selected,m as SubClickable,h as SubLargeIcon,A as SubNavigationLink,v as SubSelected,s as TertiaryOnDarkBackground,g as TitleOnly,S as WithAccessibility,i as WithCustomContent,o as WithIcon,d as WithIconAndIndex,c as WithIndex,T as WithTitleMaxLines,x as WithTitleMaxLinesAndTooltip,y as WithTitleMaxLinesAndTooltipAndShortTitle,Ze as __namedExportsOrder,Xe as default};
