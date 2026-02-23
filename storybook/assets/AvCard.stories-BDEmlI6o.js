import{A as Q}from"./AvButton-DqqCDEfd.js";import{d as ee,S as te,r as y,c as O,e as i,i as d,W as ae,N as x,n as k,u as n,l as C,h as ne,_ as re,Z as oe,M as le,g as l}from"./iframe-CQX1b8Yz.js";import{M as w}from"./icons-DSO42OmF.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BV59L0Mk.js";import"./icon-path-u9rVYwcY.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const ce=["id","aria-hidden"],ie={key:0,class:"av-card__body"},de={key:1,class:"av-card__footer"},X=ee({__name:"AvCard",props:{titleOnly:{type:Boolean,default:!1},backgroundColor:{default:"var(--card)"},borderColor:{default:"var(--stroke)"},titleBackground:{default:"var(--surface-background)"},titleHeight:{},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},setup(t){le(e=>({v8ec400ce:e.borderColor}));const h=te(),o=y(t.collapsed),T=y(!1),S=O(()=>`av-card-${crypto.randomUUID()}`),s=y(null),Z=O(()=>o.value?"av-card__title--collapsed av--m-sm":t.titleOnly?"av-card__title--title-only av--m-sm":"av--mt-sm av--mx-sm");function B(){o.value=!o.value}function G(e){const r=["A","BUTTON","INPUT","SELECT","TEXTAREA"],a=["button","link","checkbox","radio","textbox","tab","menuitem"];if(r.includes(e.tagName))return!0;const c=e.getAttribute("role");return!!(c&&a.includes(c)||e.hasAttribute("tabindex")&&e.getAttribute("tabindex")!=="-1")}function E(e,r){if(s.value&&(e===s.value.$el||s.value.$el.contains(e)))return null;let a=e;for(;a&&a!==r;){if(G(a))return a;a=a.parentElement}return null}function J(e){var c;const r=e.target;E(r,e.currentTarget)||t.collapsible&&(B(),(c=s.value)==null||c.$el.focus())}function K(e){if(!t.collapsible)return;const r=e.target,a=E(r,e.currentTarget);T.value=!!a}return(e,r)=>{const a=Q;return l(),i("div",{class:k(["av-card av-col av-p-sm av-justify-start av-radius-2xl",{"av-card--collapsible":t.collapsible,"av-card--hovering-interactive":n(T)}]),style:x({borderColor:t.borderColor,background:t.backgroundColor}),onClick:J,onMousemove:K},[h.title?(l(),i("header",{key:0,class:k(["av-card__title av-row av-align-center av-justify-between av-p-sm av-gap-sm",n(Z)]),style:x({background:t.titleBackground,minHeight:t.titleHeight,maxHeight:t.titleHeight})},[C(e.$slots,"title",{},void 0,!0),t.collapsible?(l(),ne(a,{key:0,ref_key:"buttonRef",ref:s,"aria-controls":`${n(S)}-content`,"aria-expanded":!n(o),icon:n(o)?n(w).CHEVRON_DOWN:n(w).CHEVRON_LEFT,"icon-only":"",label:"Details",onClick:re(B,["stop"])},null,8,["aria-controls","aria-expanded","icon"])):d("",!0)],6)):d("",!0),t.titleOnly?d("",!0):ae((l(),i("div",{key:1,id:`${n(S)}-content`,"aria-hidden":t.collapsible&&n(o),class:k(["av-card__content-collapsible av-col av-justify-between av-h-full av-gap-sm",{"av-pt-sm":!!h.title}])},[C(e.$slots,"default",{},void 0,!0),h.body?(l(),i("div",ie,[C(e.$slots,"body",{},void 0,!0)])):d("",!0),h.footer?(l(),i("div",de,[C(e.$slots,"footer",{},void 0,!0)])):d("",!0)],10,ce)),[[oe,!t.collapsible||!n(o)]])],38)}}}),A=se(X,[["__scopeId","data-v-eab18775"]]);X.__docgenInfo={exportName:"default",displayName:"AvCard",description:"",tags:{},props:[{name:"titleOnly",description:"If true, the card will be displayed in title-only mode.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"backgroundColor",description:"The background color of the card.",tags:{default:[{description:"'var(--card)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"borderColor",description:"The border color of the card.",tags:{default:[{description:"'var(--stroke)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleBackground",description:"The background color of the card title.",tags:{default:[{description:"'var(--surface-background)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleHeight",description:"The height of the card title.",required:!1,type:{name:"string"}},{name:"collapsible",description:`Whether the card is collapsible. When collapsed, the title is still shown.
This requires a title slot to be provided.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"collapsed",description:"Whether the card is collapsed by default (only if collapsible is true).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"title",description:"Slot for the card title."},{name:"default",description:"Default slot for global content."},{name:"body",description:"Slot for the card body."},{name:"footer",description:"Slot for the card footer."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/cards/AvCard/AvCard.vue"]};const ye={title:"Components/Cards/AvCard",component:A,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0,collapsible:!1,collapsed:!1},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

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
</p>`}}}},f=t=>({components:{AvCard:A},setup(){return{args:t}},template:`
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
  `}),ue=t=>({components:{AvCard:A},setup(){return{args:t}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),u=f.bind({});u.args={};const p=f.bind({});p.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const m=ue.bind({});m.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};const b=f.bind({});b.args={collapsible:!0};const g=f.bind({});g.args={collapsible:!0,collapsed:!0};const v=f.bind({});v.args={titleOnly:!0};var D,M,H;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(H=(M=u.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var I,N,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,$,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
})`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var F,R,Y;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
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
})`,...(Y=(R=b.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var U,V,j;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(j=(V=g.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var z,L,P;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
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
})`,...(P=(L=v.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const ke=["Default","WithCustomColors","WithOnlyDefaultSlot","Collapsible","CollapsedByDefault","TitleOnly"];export{g as CollapsedByDefault,b as Collapsible,u as Default,v as TitleOnly,p as WithCustomColors,m as WithOnlyDefaultSlot,ke as __namedExportsOrder,ye as default};
