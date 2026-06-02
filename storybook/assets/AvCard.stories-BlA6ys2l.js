import{A as ne}from"./AvButton-Cagq9Vp8.js";import{m as re,_ as le,L as k,b as w,g as i,A as D,y as T,W as n,N as y,e as oe,a7 as se,f as d,a5 as ce,a1 as ie,Y as de,H as o}from"./iframe-B34Sh4Km.js";import{M as O}from"./icons-jAutzxlg.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BuCegd2I.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const ue=["data-collapsible","data-collapsed"],me=["id","aria-hidden"],be={key:0,class:"av-card__body"},ge={key:1,class:"av-card__footer"},Q=re({__name:"AvCard",props:{titleOnly:{type:Boolean,default:!1},backgroundColor:{default:"var(--card)"},borderColor:{default:"var(--stroke)"},titleBackground:{default:"var(--surface-background)"},titleHeight:{},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},setup(e){de(t=>({v1398f920:t.borderColor}));const C=le(),r=k(e.collapsed),x=k(!1),S=w(()=>`av-card-${crypto.randomUUID()}`),s=k(null),Z=w(()=>r.value?"av-card__title--collapsed av--m-sm":e.titleOnly?"av-card__title--title-only av--m-sm":"av--mt-sm av--mx-sm");function B(){r.value=!r.value}function ee(t){const l=["A","BUTTON","INPUT","SELECT","TEXTAREA","LABEL"],a=["button","link","checkbox","radio","textbox","tab","menuitem"];if(l.includes(t.tagName))return!0;const c=t.getAttribute("role");return!!(c&&a.includes(c)||t.hasAttribute("tabindex")&&t.getAttribute("tabindex")!=="-1")}function E(t,l){if(s.value&&(t===s.value.$el||s.value.$el.contains(t)))return null;let a=t;for(;a&&a!==l;){if(ee(a))return a;a=a.parentElement}return null}function te(t){var c;const l=t.target;E(l,t.currentTarget)||e.collapsible&&(B(),(c=s.value)==null||c.$el.focus())}function ae(t){if(!e.collapsible)return;const l=t.target,a=E(l,t.currentTarget);x.value=!!a}return(t,l)=>{const a=ne;return o(),i("div",{class:T(["av-card av-col av-p-sm av-justify-start av-radius-2xl",{"av-card--collapsible":e.collapsible,"av-card--hovering-interactive":n(x)}]),style:D({borderColor:e.borderColor,background:e.backgroundColor}),"data-testid":"av-card","data-collapsible":e.collapsible,"data-collapsed":n(r)},[C.title?(o(),i("header",{key:0,class:T(["av-card__title av-row av-align-center av-justify-between av-p-sm av-gap-sm",n(Z)]),style:D({background:e.titleBackground,minHeight:e.titleHeight,maxHeight:e.titleHeight}),onClick:te,onMousemove:ae},[y(t.$slots,"title",{collapsed:n(r)},void 0,!0),e.collapsible?(o(),oe(a,{key:0,ref_key:"buttonRef",ref:s,"aria-controls":`${n(S)}-content`,"aria-expanded":!n(r),icon:n(r)?n(O).CHEVRON_DOWN:n(O).CHEVRON_LEFT,"icon-only":"",label:"Details",onClick:se(B,["stop"])},null,8,["aria-controls","aria-expanded","icon"])):d("",!0)],38)):d("",!0),e.titleOnly?d("",!0):ce((o(),i("div",{key:1,id:`${n(S)}-content`,"aria-hidden":e.collapsible&&n(r),class:T(["av-card__content-collapsible av-col av-justify-between av-h-full av-gap-sm",{"av-pt-sm":!!C.title}])},[y(t.$slots,"default",{},void 0,!0),C.body?(o(),i("div",be,[y(t.$slots,"body",{},void 0,!0)])):d("",!0),C.footer?(o(),i("div",ge,[y(t.$slots,"footer",{},void 0,!0)])):d("",!0)],10,me)),[[ie,!e.collapsible||!n(r)]])],14,ue)}}}),A=pe(Q,[["__scopeId","data-v-bc86a5ca"]]);Q.__docgenInfo={exportName:"default",displayName:"AvCard",description:"",tags:{},props:[{name:"titleOnly",description:"If true, the card will be displayed in title-only mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"backgroundColor",description:"The background color of the card.",tags:{default:[{description:"'var(--card)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"borderColor",description:"The border color of the card.",tags:{default:[{description:"'var(--stroke)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleBackground",description:"The background color of the card title.",tags:{default:[{description:"'var(--surface-background)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleHeight",description:"The height of the card title.",required:!1,type:{name:"string"}},{name:"collapsible",description:`Whether the card is collapsible. When collapsed, the title is still shown.
This requires a title slot to be provided.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"collapsed",description:"Whether the card is collapsed by default (only if collapsible is true).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"title",scoped:!0,bindings:[{name:"collapsed",title:"binding"}],description:"Slot for the card title.\nReceives a `collapsed` boolean prop indicating whether the card is currently collapsed.\nThis prop can be used to adjust the title content based on the collapsed state.\nFor example, you might want to show an icon or change the text when the card is collapsed.\nNote: The title slot is required if the `collapsible` prop is true, as the collapse button is integrated into the title area."},{name:"default",description:"Default slot for global content."},{name:"body",description:"Slot for the card body."},{name:"footer",description:"Slot for the card footer."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/cards/AvCard/AvCard.vue"]};const Be={title:"Components/Cards/AvCard",component:A,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0,collapsible:!1,collapsed:!1},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCard</code> component is used to create customizable, styled containers.
    It provides a structured layout with optional sections and can include collapsible behavior
    for advanced interactions.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul>
  <li>
    <span class="b2-regular">A main wrapper <code>div</code>.</span>
  </li>
  <li>
    <span class="b2-regular">A title area rendered through the <code>title</code> slot.</span>
  </li>
  <li>
    <span class="b2-regular">A <code>default</code> slot for general content.</span>
  </li>
  <li>
    <span class="b2-regular">A body section rendered through the <code>body</code> slot.</span>
  </li>
  <li>
    <span class="b2-regular">A footer section rendered through the <code>footer</code> slot.</span>
  </li>
</ul>

<p>
  <span class="b2-regular">
    When the <code>collapsible</code> prop is enabled, the card displays only the
    <code>title</code> slot along with a toggle button that expands or collapses
    the rest of the content.
  </span>
</p>`}}}},f=e=>({components:{AvCard:A},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  `}),he=e=>({components:{AvCard:A},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),p=f.bind({});p.args={};const u=f.bind({});u.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const m=he.bind({});m.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};const b=f.bind({});b.args={collapsible:!0};const g=f.bind({});g.args={collapsible:!0,collapsed:!0};const h=f.bind({});h.args={titleOnly:!0};const ve=e=>({components:{AvCard:A},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <template #title="{ collapsed }">
        <h3 class="n3" style="margin: 0;">{{ collapsed ? 'Collapsed state' : 'Expanded state' }}</h3>
      </template>
      <template #body>
        <p class="b2-regular">Click the card title area or the toggle button to see the title text update.</p>
      </template>
    </AvCard>
  `}),v=ve.bind({});v.args={collapsible:!0,collapsed:!1};var H,I,M;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var N,W,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,q,F;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  \`
})`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,Y,L;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(L=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var j,U,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var z,P,X;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
        <button>Click Me</button>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(X=(P=h.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    AvCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvCard v-bind="args">
      <template #title="{ collapsed }">
        <h3 class="n3" style="margin: 0;">{{ collapsed ? 'Collapsed state' : 'Expanded state' }}</h3>
      </template>
      <template #body>
        <p class="b2-regular">Click the card title area or the toggle button to see the title text update.</p>
      </template>
    </AvCard>
  \`
})`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ee=["Default","WithCustomColors","WithOnlyDefaultSlot","Collapsible","CollapsedByDefault","TitleOnly","CollapsibleWithDynamicTitle"];export{g as CollapsedByDefault,b as Collapsible,v as CollapsibleWithDynamicTitle,p as Default,h as TitleOnly,u as WithCustomColors,m as WithOnlyDefaultSlot,Ee as __namedExportsOrder,Be as default};
