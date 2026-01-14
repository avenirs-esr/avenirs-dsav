import{A as P}from"./AvButton-BPlFeQay.js";import{d as X,T as G,r as k,c as Q,e as i,i as d,R as Z,K as B,A as O,u as r,B as C,h as ee,W as te,J as ae,g as c}from"./iframe-BbyKWq26.js";import{M as E}from"./icons-Dh6vkByY.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-C8pUi6IJ.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const re=["id","aria-hidden"],oe={key:0,class:"av-card__body"},le={key:1,class:"av-card__footer"},L=X({__name:"AvCard",props:{titleOnly:{type:Boolean,default:!1},backgroundColor:{default:"var(--card)"},borderColor:{default:"var(--stroke)"},titleBackground:{default:"var(--surface-background)"},titleHeight:{},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},setup(e){ae(t=>({be42feec:t.borderColor}));const y=G(),o=k(e.collapsed),h=k(!1),T=Q(()=>`av-card-${crypto.randomUUID()}`),l=k(null);function S(t){const n=["A","BUTTON","INPUT","SELECT","TEXTAREA"],a=["button","link","checkbox","radio","textbox","tab","menuitem"];if(n.includes(t.tagName))return!0;const s=t.getAttribute("role");return!!(s&&a.includes(s)||t.hasAttribute("tabindex")&&t.getAttribute("tabindex")!=="-1")}function J(t){var s;const n=t.target;if(l.value&&(n===l.value.$el||l.value.$el.contains(n)))return;let a=n;for(;a&&a!==t.currentTarget;){if(S(a))return;a=a.parentElement}e.collapsible&&(o.value=!o.value,(s=l.value)==null||s.$el.focus())}function K(t){if(!e.collapsible)return;const n=t.target;if(l.value&&(n===l.value.$el||l.value.$el.contains(n))){h.value=!1;return}let a=n;for(;a&&a!==t.currentTarget;){if(S(a)){h.value=!0;return}a=a.parentElement}h.value=!1}return(t,n)=>{const a=P;return c(),i("div",{class:O(["av-card av-col av-p-sm av-justify-start",{"av-card--collapsible":e.collapsible,"av-card--hovering-interactive":r(h)}]),style:B({borderColor:e.borderColor,background:e.backgroundColor}),onClick:J,onMousemove:K},[y.title?(c(),i("header",{key:0,class:O(["av-card__title av-row av-align-center av-justify-between av-p-sm av-gap-sm",{"av-card__title--collapsed":r(o),"av-card__title--title-only":e.titleOnly}]),style:B({background:e.titleBackground,minHeight:e.titleHeight,maxHeight:e.titleHeight})},[C(t.$slots,"title",{},void 0,!0),e.collapsible?(c(),ee(a,{key:0,ref_key:"buttonRef",ref:l,"aria-controls":`${r(T)}-content`,"aria-expanded":!r(o),icon:r(o)?r(E).CHEVRON_DOWN:r(E).CHEVRON_LEFT,"icon-only":"",label:"Details",onClick:n[0]||(n[0]=s=>o.value=!r(o))},null,8,["aria-controls","aria-expanded","icon"])):d("",!0)],6)):d("",!0),e.titleOnly?d("",!0):Z((c(),i("div",{key:1,id:`${r(T)}-content`,"aria-hidden":e.collapsible&&r(o),class:"av-card__content-collapsible av-col av-justify-between av-h-full av-gap-sm"},[C(t.$slots,"default",{},void 0,!0),y.body?(c(),i("div",oe,[C(t.$slots,"body",{},void 0,!0)])):d("",!0),y.footer?(c(),i("div",le,[C(t.$slots,"footer",{},void 0,!0)])):d("",!0)],8,re)),[[te,!e.collapsible||!r(o)]])],38)}}}),A=ne(L,[["__scopeId","data-v-a692824c"]]);L.__docgenInfo={exportName:"default",displayName:"AvCard",description:"",tags:{},props:[{name:"titleOnly",description:"If true, the card will be displayed in title-only mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"backgroundColor",description:"The background color of the card.",tags:{default:[{description:"'var(--card)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"borderColor",description:"The border color of the card.",tags:{default:[{description:"'var(--stroke)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleBackground",description:"The background color of the card title.",tags:{default:[{description:"'var(--surface-background)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleHeight",description:"The height of the card title.",required:!1,type:{name:"string"}},{name:"collapsible",description:`Whether the card is collapsible. When collapsed, the title is still shown.
This requires a title slot to be provided.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"collapsed",description:"Whether the card is collapsed by default (only if collapsible is true).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"title",description:"Slot for the card title."},{name:"default",description:"Default slot for global content."},{name:"body",description:"Slot for the card body."},{name:"footer",description:"Slot for the card footer."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/cards/AvCard/AvCard.vue"]};const ge={title:"Components/Cards/AvCard",component:A,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0,collapsible:!1,collapsed:!1},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

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
</p>`}}}},v=e=>({components:{AvCard:A},setup(){return{args:e}},template:`
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
  `}),se=e=>({components:{AvCard:A},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),u=v.bind({});u.args={};const p=v.bind({});p.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const m=se.bind({});m.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};const b=v.bind({});b.args={collapsible:!0};const g=v.bind({});g.args={collapsible:!0,collapsed:!0};const f=v.bind({});f.args={titleOnly:!0};var w,D,$;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var x,H,I;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var M,N,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var q,F,R;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(R=(F=b.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var _,Y,U;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(U=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var V,j,z;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(z=(j=f.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const fe=["Default","WithCustomColors","WithOnlyDefaultSlot","Collapsible","CollapsedByDefault","TitleOnly"];export{g as CollapsedByDefault,b as Collapsible,u as Default,f as TitleOnly,p as WithCustomColors,m as WithOnlyDefaultSlot,fe as __namedExportsOrder,ge as default};
