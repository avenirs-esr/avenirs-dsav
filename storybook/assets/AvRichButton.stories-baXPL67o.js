import{A as s}from"./AvIcon-CveYywC2.js";import{j as b,l as v,v as i,E as c,K as l,k as y,L as k,m as a}from"./iframe-CSphQWYT.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as r,i as p}from"./storybook-BkrWO4rm.js";import"./preload-helper-ILsKNznc.js";import"./icons-Cf51SoRU.js";const B=["title","aria-label"],A={class:"av-rich-button__line"},x={class:"av-rich-button__left"},h=b({__name:"AvRichButton",props:{label:{},iconLeft:{default:()=>{}},iconRight:{default:()=>{}},customPadding:{default:"var(--spacing-sm)"},onClick:{type:Function}},setup(n){return k(e=>({e928b0cc:e.customPadding})),(e,o)=>(a(),v("button",{class:"av-rich-button",title:n.label,"aria-label":n.label,onClick:o[0]||(o[0]=f=>n.onClick?n.onClick(f):()=>{})},[i("div",A,[i("div",x,[n.iconLeft?(a(),c(s,{key:0,name:n.iconLeft,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):l("",!0),y(e.$slots,"default",{},void 0,!0)]),n.iconRight?(a(),c(s,{key:0,name:n.iconRight,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):l("",!0)])],8,B))}}),g=R(h,[["__scopeId","data-v-a30b5cec"]]);h.__docgenInfo={exportName:"default",displayName:"AvRichButton",description:"",tags:{},props:[{name:"label",description:"Button aria label and title for accessibility.",required:!0,type:{name:"string"}},{name:"iconLeft",description:`Icon displayed on the left of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"iconRight",description:`Icon displayed on the right of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"customPadding",description:"Allows you to change the padding of the button.",tags:{default:[{description:"'1rem'",title:"default"}]},required:!1,type:{name:"string"}},{name:"onClick",description:"Function called when button is clicked.",tags:{params:[{title:"param",type:{name:"mixed"},name:"event",description:"The MouseEvent of the click."}],deprecated:[{description:"Use `@click` event listener instead.",title:"deprecated"}]},required:!1,type:{name:"TSFunctionType"}}],slots:[{name:"default",description:"Default slot for rich button content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvRichButton/AvRichButton.vue"]};const E={title:"Components/Interaction/Buttons/AvRichButton",component:g,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},iconLeft:{control:"select",options:p,mapping:r},iconRight:{control:"select",options:p,mapping:r}},args:{label:"Ckick me",iconLeft:"",iconRight:"",customPadding:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h1 class="n1">Rich buttons - <code>AvRichButton</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The rich button is an interaction element with an interface enabling the user to perform an action.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvRichButton</code> is an elegant, reusable Vue component designed to simplify the creation of custom rich buttons.
    It features optional icons and a click manager. It is easy to use, with the flexibility to adapt to different contexts.
  </span>
</p>

<p>
  <span class="b2-regular">
    With a default slot, button content is highly customizable. The <code>label</code> property lets you assign the button <code>title</code> and <code>aria-label</code>.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">Rich buttons consist of a button composed of :</span></p>

<ul>
  <li><span class="b2-regular">an optional left icon</span></li>
  <li><span class="b2-regular">a default slot for button content</span></li>
  <li><span class="b2-regular">an optional right icon</span></li>
</ul>`}}}},C=n=>({components:{AvRichButton:g,AvIcon:s},setup(){return{args:n}},template:`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">{{ args.label }}</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  `}),t=C.bind({});t.args={};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    AvRichButton,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">{{ args.label }}</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  \`
})`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const F=["Default"];export{t as Default,F as __namedExportsOrder,E as default};
