import{d as O,g as k,b as s,n as l,f as m,o as r}from"./iframe-Dnw8_14l.js";import"./AvAccordion-CW8ZVHVR.js";import"./AvAccordionsGroup-yO7gD_xu.js";import{A as p}from"./AvButton-48jsre3N.js";import"./AvRichButton-Djlh3BaI.js";import"./AvFileUpload-DbIDvTXl.js";import"./AvInput-D7phf49I.js";import"./AvListItem-DsyGrvR2.js";import"./AvPageSizePicker-d3nDasyD.js";import"./AvTagPicker-DootgPu-.js";import"./AvRadioButton-C_NTKsAh.js";import"./AvRadioButtonSet-DQhT7hha.js";import"./AvAutocomplete-NODkqUE7.js";import"./AvMultiselect-BYiwRM-D.js";import"./AvSelect-Cb-kYls2.js";import"./AvTab-BDXlxVKa.js";import"./AvTabs-BXMUm7XR.js";import"./AvToggle-CZYRI_LP.js";import{M as d}from"./icons-DLnh1uvi.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./vue-dsfr-DDqXwMMy.js";import"./AvVIcon-CcQerrFJ.js";import"./string-BZgCOP9D.js";import"./AvIconText-z2uAbuk5.js";const E={class:"av-cancel-confirm-buttons-container"},A=O({__name:"AvCancelConfirmButtons",props:{cancelLabel:{},cancelIcon:{default:()=>d.CLOSE_CIRCLE_OUTLINE},confirmLabel:{},confirmIcon:{default:()=>d.CLOSE_CIRCLE_OUTLINE},isLoading:{type:Boolean}},emits:["cancel","confirm"],setup(n,{emit:h}){const i=h;return(T,a)=>(r(),k("div",E,[n.cancelLabel?(r(),s(m(p),{key:0,icon:n.cancelIcon,label:n.cancelLabel,title:n.cancelLabel,variant:"OUTLINED","is-loading":n.isLoading,size:"sm",onClick:a[0]||(a[0]=()=>i("cancel"))},null,8,["icon","label","title","is-loading"])):l("",!0),n.confirmLabel?(r(),s(m(p),{key:1,icon:n.confirmIcon,label:n.confirmLabel,title:n.confirmLabel,variant:"FLAT","is-loading":n.isLoading,size:"sm",onClick:a[1]||(a[1]=()=>i("confirm"))},null,8,["icon","label","title","is-loading"])):l("",!0)]))}}),B=x(A,[["__scopeId","data-v-60461bd3"]]);A.__docgenInfo={exportName:"default",displayName:"AvCancelConfirmButtons",description:"",tags:{},props:[{name:"cancelLabel",description:"Label and title (for accessibility) of the cancel button.",required:!1,type:{name:"string"}},{name:"cancelIcon",description:"Icon name of the cancel button.",tags:{default:[{description:"'mdi:close-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"confirmLabel",description:"Label and title (for accessibility) of the confirm button.",required:!1,type:{name:"string"}},{name:"confirmIcon",description:"Icon name of the confirm button.",tags:{default:[{description:"'mdi:check-circle-outline'",title:"default"}]},required:!1,type:{name:"string"}},{name:"isLoading",description:"Adds a loading state on the buttons.",required:!1,type:{name:"boolean"}}],events:[{name:"cancel"},{name:"confirm"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/buttons/AvCancelConfirmButtons/AvCancelConfirmButtons.vue"]};const en={title:"Components/Interaction/Buttons/AvCancelConfirmButtons",component:B,argTypes:{cancelLabel:{control:"text"},cancelIcon:{control:"text"},confirmLabel:{control:"text"},confirmIcon:{control:"text"}},args:{cancelLabel:"Cancel",cancelIcon:void 0,confirmLabel:"Confirm",confirmIcon:void 0},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvCancelConfirmButtons</code> is an interaction element with an interface enabling the user
    to perform a cancel and/or a confirm action.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p>
  <span class="b2-regular">
    This component consists of two optional buttons:
  </span>
</p>

<ul>
  <li>
    <span class="b2-regular">
      A <strong>cancel button</strong>, displayed by passing the <code>cancelLabel</code> prop.
    </span>
  </li>
  <li>
    <span class="b2-regular">
      A <strong>confirm button</strong>, displayed by passing the <code>confirmLabel</code> prop.
    </span>
  </li>
</ul>`}}}},c=n=>({components:{AvCancelConfirmButtons:B},setup(){return{args:n}},template:'<AvCancelConfirmButtons v-bind="args" />'}),e=c.bind({});e.args={};const t=c.bind({});t.args={cancelLabel:"Cancel",confirmLabel:void 0};const o=c.bind({});o.args={confirmLabel:"Confirm",cancelLabel:void 0};var u,f,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(b=(f=e.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,g,v;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var L,I,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvCancelConfirmButtons
  },
  setup() {
    return {
      args
    };
  },
  template: \`<AvCancelConfirmButtons v-bind="args" />\`
})`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const tn=["Default","CancelOnly","ConfirmOnly"];export{t as CancelOnly,o as ConfirmOnly,e as Default,tn as __namedExportsOrder,en as default};
