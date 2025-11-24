import{A as I}from"./AvButton-BKfZC1xG.js";import{j as x,O as Y,r as $,l as i,K as p,T as z,z as f,A as V,u as t,k as u,E as M,W as R,v as j,m as r}from"./iframe-Ci2AC-9u.js";import{M as v}from"./icons-Ct8fTkj_.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-BxjKGGAy.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const L={class:"av-card__content-collapsible"},G={key:0,class:"av-card__body"},J={key:1,class:"av-card__footer"},F=x({__name:"AvCard",props:{backgroundColor:{default:"var(--card)"},borderColor:{default:"var(--stroke)"},titleBackground:{default:"var(--surface-background)"},titleHeight:{},collapsible:{type:Boolean,default:!1},collapsed:{type:Boolean,default:!1}},setup(e){const g=Y(),a=$(e.collapsed);return(d,b)=>{const E=I;return r(),i("div",{class:"av-card",style:f({borderColor:e.borderColor,background:e.backgroundColor})},[g.title?(r(),i("div",{key:0,class:V(["av-card__title",{"av-card__title--collapsed":t(a)}]),style:f({background:e.titleBackground,minHeight:e.titleHeight,maxHeight:e.titleHeight})},[u(d.$slots,"title",{},void 0,!0),e.collapsible?(r(),M(E,{key:0,icon:t(a)?t(v).CHEVRON_DOWN:t(v).CHEVRON_LEFT,"icon-only":"",label:"",onClick:b[0]||(b[0]=Q=>a.value=!t(a))},null,8,["icon"])):p("",!0)],6)):p("",!0),z(j("div",L,[u(d.$slots,"default",{},void 0,!0),g.body?(r(),i("div",G,[u(d.$slots,"body",{},void 0,!0)])):p("",!0),g.footer?(r(),i("div",J,[u(d.$slots,"footer",{},void 0,!0)])):p("",!0)],512),[[R,!e.collapsible||!t(a)]])],4)}}}),h=K(F,[["__scopeId","data-v-c9bc7f06"]]);F.__docgenInfo={exportName:"default",displayName:"AvCard",description:"",tags:{},props:[{name:"backgroundColor",description:"The background color of the card.",tags:{default:[{description:"'var(--card)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"borderColor",description:"The border color of the card.",tags:{default:[{description:"'var(--stroke)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleBackground",description:"The background color of the card title.",tags:{default:[{description:"'var(--surface-background)'",title:"default"}]},required:!1,type:{name:"string"}},{name:"titleHeight",description:"The height of the card title.",required:!1,type:{name:"string"}},{name:"collapsible",description:`Whether the card is collapsible. When collapsed, the title is still shown.
This requires a title slot to be provided.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"collapsed",description:"Whether the card is collapsed by default (only if collapsible is true).",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],slots:[{name:"title",description:"Slot for the card title."},{name:"default",description:"Default slot for global content."},{name:"body",description:"Slot for the card body."},{name:"footer",description:"Slot for the card footer."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/cards/AvCard/AvCard.vue"]};const oe={title:"Components/Cards/AvCard",component:h,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},borderColor:{control:"color"},titleBackground:{control:"color"},titleHeight:{control:"text"},collapsible:{control:"boolean"},collapsed:{control:"boolean"}},args:{backgroundColor:"var(--card)",borderColor:"var(--stroke)",titleBackground:"var(--surface-background)",titleHeight:void 0,collapsible:!1,collapsed:!1},parameters:{docs:{description:{component:`<h1 class="n1">Cards - <code>AvCard</code></h1>

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
</p>`}}}},m=e=>({components:{AvCard:h},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <template #title>
        <h3 class="n3" style="margin: 0;">Card Title</h3>
      </template>
      <template #body>
        <p class="b2-regular">This is the card body. You can put any content here.</p>
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  `}),P=e=>({components:{AvCard:h},setup(){return{args:e}},template:`
    <AvCard v-bind="args">
      <p class="b2-regular">This card uses only the default slot.</p>
    </AvCard>
  `}),o=m.bind({});o.args={};const n=m.bind({});n.args={backgroundColor:"var(--surface-background)",borderColor:"var(--other-border-skill-card)",titleBackground:"var(--light-background-primary1)",titleHeight:"var(--dimension-5xl)"};const l=P.bind({});l.args={backgroundColor:"#fff4e5",borderColor:"#ff9900"};const s=m.bind({});s.args={collapsible:!0};const c=m.bind({});c.args={collapsible:!0,collapsed:!0};var C,y,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
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
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var A,T,S;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var B,_,D;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(D=(_=l.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var H,W,N;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(N=(W=s.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var O,q,w;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
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
      </template>
      <template #footer>
        <small class="caption-regular">Footer content</small>
      </template>
    </AvCard>
  \`
})`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const ne=["Default","WithCustomColors","WithOnlyDefaultSlot","Collapsible","CollapsedByDefault"];export{c as CollapsedByDefault,s as Collapsible,o as Default,n as WithCustomColors,l as WithOnlyDefaultSlot,ne as __namedExportsOrder,oe as default};
