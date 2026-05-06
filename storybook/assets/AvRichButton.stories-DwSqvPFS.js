import{A as s}from"./AvIcon-B550lg2K.js";import{d as b,e as v,l as i,i as l,j as c,p as y,P as R,g as a}from"./iframe-BJ2F0Clz.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as r,i as u}from"./storybook-Dlgayk0t.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./icons-gIBop1dI.js";const k=["title","aria-label"],A={class:"av-rich-button__line av-row av-align-center av-w-full"},w={class:"av-rich-button__left av-row av-align-center av-w-full av-gap-sm av-pr-sm"},g=b({__name:"AvRichButton",props:{label:{},iconLeft:{default:()=>{}},iconRight:{default:()=>{}},customPadding:{default:"var(--spacing-sm)"}},emits:["click"],setup(t){return R(e=>({v2deb83d4:e.customPadding})),(e,o)=>(a(),v("button",{title:t.label,"aria-label":t.label,class:"av-rich-button av-row av-w-full av-align-center av-justify-between",onClick:o[0]||(o[0]=f=>e.$emit("click",f))},[i("div",A,[i("div",w,[t.iconLeft?(a(),l(s,{key:0,name:t.iconLeft,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):c("",!0),y(e.$slots,"default",{},void 0,!0)]),t.iconRight?(a(),l(s,{key:0,name:t.iconRight,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):c("",!0)])],8,k))}}),h=B(g,[["__scopeId","data-v-ff4425d7"]]);g.__docgenInfo={exportName:"default",displayName:"AvRichButton",description:"",tags:{},props:[{name:"label",description:"Button aria label and title for accessibility.",required:!0,type:{name:"string"}},{name:"iconLeft",description:`Icon displayed on the left of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"iconRight",description:`Icon displayed on the right of the button.
Must be an icon name.`,required:!1,type:{name:"string"}},{name:"customPadding",description:"Allows you to change the padding of the button.",tags:{default:[{description:"'1rem'",title:"default"}]},required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["MouseEvent"]},description:"Emitted when the button is clicked."}],slots:[{name:"default",description:"Default slot for rich button content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvRichButton/AvRichButton.vue"]};const E={title:"Components/Interaction/Buttons/AvRichButton",component:h,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},iconLeft:{control:"select",options:u,mapping:r},iconRight:{control:"select",options:u,mapping:r}},args:{label:"Ckick me",iconLeft:"",iconRight:"",customPadding:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h1 class="n1">Rich buttons - <code>AvRichButton</code></h1>

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
</ul>`}}}},_=t=>({components:{AvRichButton:h,AvIcon:s},setup(){return{args:t}},template:`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">{{ args.label }}</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  `}),n=_.bind({});n.args={};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,E as default};
