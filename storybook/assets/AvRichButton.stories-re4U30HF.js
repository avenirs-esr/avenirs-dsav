import{A as o}from"./AvIcon-B15mic27.js";import{n as b,f as a,a9 as y,a1 as v,L as i,e as s,z as k,g as r,R}from"./iframe-CGOhz9cP.js";import{A as w}from"./AvTooltip-WgK4o6ix.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as d,g as c}from"./storybook-DgHgqv50.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./icons-B6bk2eYx.js";const B=["aria-label"],_={class:"av-rich-button__line av-row av-align-center av-w-full"},I={class:"av-rich-button__left av-row av-align-center av-w-full av-gap-sm av-pr-sm"},f=b({inheritAttrs:!1,__name:"AvRichButton",props:{label:{},iconLeft:{default:()=>{}},iconRight:{default:()=>{}},customPadding:{default:"var(--spacing-sm)"},enableTooltip:{type:Boolean,default:!1}},emits:["click"],setup(e){return v(n=>({v2b0f4641:n.customPadding})),(n,l)=>(i(),a(w,{class:"av-rich-button__tooltip",content:e.label,"full-width":"",disabled:!e.enableTooltip},{default:y(()=>[s("button",k(n.$attrs,{"aria-label":e.label,class:"av-rich-button av-row av-w-full av-align-center av-justify-between",onClick:l[0]||(l[0]=h=>n.$emit("click",h))}),[s("div",_,[s("div",I,[e.iconLeft?(i(),a(o,{key:0,name:e.iconLeft,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):r("",!0),R(n.$slots,"default",{},void 0,!0)]),e.iconRight?(i(),a(o,{key:0,name:e.iconRight,color:"var(--dark-background-primary1)",size:1.5},null,8,["name"])):r("",!0)])],16,B)]),_:3},8,["content","disabled"]))}}),g=A(f,[["__scopeId","data-v-59c522e8"]]);f.__docgenInfo={exportName:"default",displayName:"AvRichButton",type:1,props:[{name:"label",global:!1,description:"Button aria label and title for accessibility.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"iconLeft",global:!1,description:`Icon displayed on the left of the button.
Must be an icon name.`,tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:"undefined"},{name:"iconRight",global:!1,description:`Icon displayed on the right of the button.
Must be an icon name.`,tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:"undefined"},{name:"customPadding",global:!1,description:"Allows you to change the padding of the button.",tags:[{name:"default",text:"'1rem'"}],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"var(--spacing-sm)"'},{name:"enableTooltip",global:!1,description:"Enables the tooltip on the button. The tooltip will display the content of the `label` prop.",tags:[{name:"default",text:"false"}],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"Emitted when the button is clicked.",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"default",type:"any[]",description:"Default slot for rich button content.",declarations:[],schema:{kind:"array",type:"any[]"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & __VLS_Slots",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & __VLS_Slots"}},{name:"label",type:"string",description:"Button aria label and title for accessibility.",declarations:[],schema:"string"},{name:"iconLeft",type:"string | undefined",description:`Icon displayed on the left of the button.
Must be an icon name.`,declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"iconRight",type:"string | undefined",description:`Icon displayed on the right of the button.
Must be an icon name.`,declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"customPadding",type:"string | undefined",description:"Allows you to change the padding of the button.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"enableTooltip",type:"boolean | undefined",description:"Enables the tooltip on the button. The tooltip will display the content of the `label` prop.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvRichButton/AvRichButton.vue"};const V={title:"Components/Interaction/Buttons/AvRichButton",component:g,tags:["autodocs"],argTypes:{label:{type:{name:"string",required:!0},control:"text"},iconLeft:{control:"select",options:c,mapping:d},iconRight:{control:"select",options:c,mapping:d}},args:{label:"Ckick me",iconLeft:"",iconRight:"",customPadding:"var(--spacing-sm)"},parameters:{docs:{description:{component:`<h1 class="n1">Rich buttons - <code>AvRichButton</code></h1>

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
</ul>`}}}},x=e=>({components:{AvRichButton:g,AvIcon:o},setup(){return{args:e}},template:`
    <AvRichButton v-bind="args">
      <div class="ellipsis-container" style="display: flex; flex-direction: column; align-items: start;">
        <span class="ellipsis b1-regular">Custom label defined in slot</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  `}),t=x.bind({});t.args={};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
        <span class="ellipsis b1-regular">Custom label defined in slot</span>
        <span class="ellipsis caption-light">
          Last update on 02/02/2025
        </span>
      </div>
    </AvRichButton>
  \`
})`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,V as default};
