import{A as u}from"./AvCheckbox-CF8_Mhnz.js";import{L as P}from"./iframe-DSboSKe3.js";import"./AvFieldsetElement-CW6oDs4t.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvMessage-npfGBN9K.js";import"./AvIconText-eZi0p4Na.js";import"./AvIcon-BBUs4yUc.js";import"./icon-path-u9rVYwcY.js";import"./AvTooltip-D_3MY-N9.js";import"./icons-BJ4bGiUf.js";import"./preload-helper-ILsKNznc.js";const ce={title:"Components/Interaction/Checkboxes/AvCheckbox",component:u,tags:["autodocs"],argTypes:{icon:{control:"text"},name:{control:"text",required:!0},required:{control:"boolean"},value:{control:"text",required:!0},small:{control:"boolean"},inline:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{icon:void 0,name:"default-checkbox",required:!1,value:"1",small:!1,inline:!1,disabled:!1,label:"A default checkbox",errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvCheckbox</code> allows the user to select one or more options from a list.
  They are used to make multiple selections (from 0 to N items) or to allow a binary choice,
  where the user can select or deselect a single option.
</p>

<p class="b2-regular">
  Checkboxes can be used alone or in a list. Avoid lists with more than 5 items, and when you want to restrict
  the choice to a single item, use radio buttons (see <code>AvRadioButton</code>).
</p>

<p class="b2-regular">
 Checkboxes must be used inside an <code>AvCheckboxesGroup</code> in order to benefit from <code>AvFieldset</code>.
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul class="b2-regular">
  <li>a checkbox <code>&lt;input type="checkbox"&gt;</code></li>
  <li>a label associated with the checkbox, defined by the <code>label</code> prop</li>
  <li>an information, error (<code>errorMessage</code> prop), or validation (<code>validMessage</code> prop) message, displayed below the checkbox</li>
</ul>`}}}},e=b=>({components:{AvCheckbox:u},setup(){const p=P([]);return{args:b,model:p}},template:'<AvCheckbox v-bind="args" v-model="model" />'}),Q=b=>({components:{AvCheckbox:u},setup(){const p=P([]);return{args:b,model:p}},template:`
    <AvCheckbox v-bind="args" v-model="model">
      <template #label>
        <span class="b2-bold">
          Some title: 
          <span class="caption-regular">This is some description</span>
        </span>
      </template>
    </AvCheckbox>`}),o=e.bind({});o.args={};const n=e.bind({});n.args={name:"with-icon-checkbox",label:"A checkbox with icon",icon:"mdi:home-variant-outline"};const r=e.bind({});r.args={name:"required-checkbox",label:"A required checkbox",required:!0};const s=e.bind({});s.args={name:"disabled-checkbox",label:"A disabled checkbox",disabled:!0};const a=e.bind({});a.args={name:"error-checkbox",label:"A checkbox with error",errorMessage:"An error has occured"};const t=e.bind({});t.args={name:"valid-checkbox",label:"A valid checkbox",validMessage:"Congratulations!"};const c=e.bind({});c.args={name:"hint-checkbox",label:"A checkbox with a hint",hint:"You should click this"};const l=e.bind({});l.args={name:"small-checkbox",label:"A small checkbox",small:!0};const m=e.bind({});m.args={name:"small-with-icon-checkbox",label:"A disabled checkbox with icon",small:!0,icon:"mdi:home-variant-outline"};const i=e.bind({});i.args={name:"small-required-checkbox",label:"A small required checkbox",small:!0,required:!0};const d=Q.bind({});d.args={name:"label-slot-checkbox",label:""};var h,g,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,k,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,f,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var q,w,M;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var y,T,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var R,D,L;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(L=(D=t.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var W,E,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var V,_,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(B=(_=l.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var F,G,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(N=(G=m.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var O,Y,j;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`<AvCheckbox v-bind="args" v-model="model" />\`
})`,...(j=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var z,J,K;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    AvCheckbox
  },
  setup() {
    const model = ref<(string | number)[]>([]);
    return {
      args,
      model
    };
  },
  template: \`
    <AvCheckbox v-bind="args" v-model="model">
      <template #label>
        <span class="b2-bold">
          Some title: 
          <span class="caption-regular">This is some description</span>
        </span>
      </template>
    </AvCheckbox>\`
})`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const le=["Default","WithIcon","Required","Disabled","Error","Valid","Hint","Small","SmallWithIcon","SmallRequired","LabelSlot"];export{o as Default,s as Disabled,a as Error,c as Hint,d as LabelSlot,r as Required,l as Small,i as SmallRequired,m as SmallWithIcon,t as Valid,n as WithIcon,le as __namedExportsOrder,ce as default};
