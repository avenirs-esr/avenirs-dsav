import{a as T,A as y}from"./AvList-BmEUfYfi.js";import{M as e}from"./icons-0dWeWY1j.js";import"./iframe-Bngxkj9X.js";import"./preload-helper-ILsKNznc.js";import"./AvIcon-CX97yXwg.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvTooltip-DT1cL-14.js";import"./use-text-truncation-CpnyAgz1.js";const Ve={title:"Components/Interaction/Lists/AvListItem",component:T,tags:["autodocs"],argTypes:{icon:{control:"select",options:[void 0,e.HOME_VARIANT_OUTLINE,e.ACCOUNT_CIRCLE_OUTLINE,e.PENCIL_OUTLINE,e.BRIEFCASE_VARIANT_OUTLINE,e.SCHOOL_OUTLINE,e.TARGET_ARROW,e.STARS]},color:{control:"color"},iconSize:{control:"number"},title:{control:"text"},description:{control:"text"},hoverBackgroundColor:{control:"color"},colorOnHover:{control:"color"},descriptionColor:{control:"color"},disabled:{control:"boolean"},selected:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},ariaLabel:{control:"text"},ariaDescribedby:{control:"text"},titleMaxLines:{control:"number"}},args:{color:"var(--text1)",iconSize:1.3125,hoverBackgroundColor:"var(--dark-background-primary1)",colorOnHover:"var(--card)",descriptionColor:"var(--text2)",disabled:!1,selected:!1,titleMaxLines:void 0},parameters:{docs:{description:{component:`<h1 class="n1">Lists - <code>AvListItem</code></h1>

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
</ul>`}}}},t=n=>({components:{AvList:y,AvListItem:T},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
    </div>
  `}),i=t.bind({});i.args={title:"Default List Item",description:"This is a basic list item"};const r=t.bind({});r.args={title:"Home",description:"Navigate to homepage",icon:e.HOME_VARIANT_OUTLINE};const o=t.bind({});o.args={title:"Clickable Item",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,onClick:()=>alert("Item clicked!")};const a=t.bind({});a.args={title:"Clickable Subitem",description:"This item responds to clicks",icon:e.PENCIL_OUTLINE,type:"sub",onClick:()=>alert("Item clicked!")};const c=t.bind({});c.args={title:"Selected Item",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,onClick:()=>alert("Selected item clicked!")};const l=t.bind({});l.args={title:"Selected Subitem",description:"This item is currently selected",icon:e.STAR_CHECK_OUTLINE,selected:!0,type:"sub",onClick:()=>alert("Selected item clicked!")};const d=t.bind({});d.args={title:"Disabled Item",description:"This item is not available",icon:e.ALERT_CIRCLE_OUTLINE,disabled:!0,onClick:()=>alert("This should not trigger")};const m=t.bind({});m.args={title:"Title Only Item",icon:e.INFORMATION_OUTLINE,onClick:()=>alert("Title only item clicked!")};const p=t.bind({});p.args={description:"This item only has a description",icon:e.CHAT_BUBBLE_OUTLINE};const u=t.bind({});u.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0};const v=t.bind({});v.args={title:"External Link",description:"Opens in new tab",icon:e.ARROW_TOP_RIGHT_THICK,href:"https://example.com",target:"_blank",rel:"noopener noreferrer",disabled:!0,type:"sub"};const g=t.bind({});g.args={title:"Large Icon",description:"Item with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,onClick:()=>alert("Large icon item clicked!")};const L=t.bind({});L.args={title:"Large Icon",description:"Subitem with bigger icon",icon:e.BRIEFCASE_VARIANT_OUTLINE,iconSize:2,type:"sub",onClick:()=>alert("Large icon item clicked!")};const b=t.bind({});b.args={title:"Custom Colors",description:"Item with custom styling",icon:e.STARS,color:"#2563eb",hoverBackgroundColor:"#dbeafe",colorOnHover:"#1d4ed8",descriptionColor:"#6b7280",onClick:()=>alert("Custom colors item clicked!")};const A=t.bind({});A.args={title:"Sub Custom Colors",description:"Subitem with custom styling",icon:e.STARS,color:"#2563eb",hoverBackgroundColor:"#dbeafe",colorOnHover:"#1d4ed8",descriptionColor:"#6b7280",type:"sub",onClick:()=>alert("Custom colors subitem clicked!")};const fe=n=>({components:{AvList:y,AvListItem:T},setup(){return{args:n,MDI_ICONS:e}},template:`
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
  `}),s=fe.bind({});s.args={title:"Custom Content",icon:e.DOTS_VERTICAL};s.render=n=>({components:{AvList:y,AvListItem:T},setup(){return{args:n,MDI_ICONS:e}}});const Me=n=>({components:{AvList:y,AvListItem:T},setup(){return{args:n,MDI_ICONS:e}},template:`
    <div style="max-width: 20rem;">
      <AvList>
        <AvListItem v-bind="args" />
      </AvList>
      <p id="helper-text" style="margin-top: 0.5rem; font-size: 0.875rem; color: #6b7280;">
        This text provides additional context for screen readers
      </p>
    </div>
  `}),I=Me.bind({});I.args={title:"Accessible Item",description:"Item with custom accessibility attributes",icon:e.INFORMATION_OUTLINE,ariaLabel:"Custom accessible label for screen readers",ariaDescribedby:"helper-text",onClick:()=>alert("Accessible item clicked!")};const h=t.bind({});h.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,onClick:()=>alert("Item with title max lines clicked!")};const C=t.bind({});C.args={title:"Item with Title Max Lines 1 and a very long title to show how the truncation works",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with title max lines clicked!")};const S=t.bind({});S.args={title:"Item with short title",description:"Item demonstrating the titleMaxLines prop",icon:e.STARS,titleMaxLines:1,enableTooltip:!0,onClick:()=>alert("Item with short title clicked!")};var x,O,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var k,_,N;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
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
})`,...(N=(_=r.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var f,M,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(E=(M=o.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var D,R,U;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(U=(R=a.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,H,B;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(B=(H=c.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var z,F,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(V=(F=l.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var P,K,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
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
})`,...(G=(K=d.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var j,q,J;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
})`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
})`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,re,oe;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
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
})`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,ce,le;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
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
})`,...(le=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,me,pe;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ve,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
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
})`,...(ge=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var Le,be,Ae;s.parameters={...s.parameters,docs:{...(Le=s.parameters)==null?void 0:Le.docs,source:{originalSource:`args => ({
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
})`,...(Ae=(be=s.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var Ie,he,Ce;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
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
})`,...(Ce=(he=I.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var Se,Te,ye;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
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
})`,...(ye=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var xe,Oe,we;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
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
})`,...(we=(Oe=C.parameters)==null?void 0:Oe.docs)==null?void 0:we.source}}};var ke,_e,Ne;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`args => ({
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
})`,...(Ne=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};const Pe=["Default","WithIcon","Clickable","SubClickable","Selected","SubSelected","Disabled","TitleOnly","DescriptionOnly","NavigationLink","SubNavigationLink","LargeIcon","SubLargeIcon","CustomColors","SubCustomColors","WithCustomContent","WithAccessibility","WithTitleMaxLines","WithTitleMaxLinesAndTooltip","WithTitleMaxLinesAndTooltipAndShortTitle"];export{o as Clickable,b as CustomColors,i as Default,p as DescriptionOnly,d as Disabled,g as LargeIcon,u as NavigationLink,c as Selected,a as SubClickable,A as SubCustomColors,L as SubLargeIcon,v as SubNavigationLink,l as SubSelected,m as TitleOnly,I as WithAccessibility,s as WithCustomContent,r as WithIcon,h as WithTitleMaxLines,C as WithTitleMaxLinesAndTooltip,S as WithTitleMaxLinesAndTooltipAndShortTitle,Pe as __namedExportsOrder,Ve as default};
