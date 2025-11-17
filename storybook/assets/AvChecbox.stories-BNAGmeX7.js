import{A as j}from"./AvCheckbox-ekFtMgw1.js";import{r as G}from"./iframe-DG3pTfcg.js";import"./AvIcon-Cb6r1TAn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-8z2ke4PH.js";import"./preload-helper-ILsKNznc.js";const X={title:"Components/Interaction/Checkboxes/AvCheckbox",component:j,tags:["autodocs"],argTypes:{icon:{control:"text"},name:{control:"text",required:!0},required:{control:"boolean"},value:{control:"text",required:!0},small:{control:"boolean"},inline:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text",required:!0},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{icon:void 0,name:"default-checkbox",required:!1,value:"1",small:!1,inline:!1,disabled:!1,label:"A default checkbox",errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

<p class="b2-regular">
  The <code>AvCheckbox</code> allows the user to select one or more options from a list.
  They are used to make multiple selections (from 0 to N items) or to allow a binary choice,
  where the user can select or deselect a single option.
</p>

<p class="b2-regular">
  Checkboxes can be used alone or in a list. Avoid lists with more than 5 items, and when you want to restrict
  the choice to a single item, use radio buttons (see <code>AvRadioButton</code>).
</p>

<h2 class="n2">🏗️ Structure</h2>

<ul class="b2-regular">
  <li>a checkbox <code>&lt;input type="checkbox"&gt;</code></li>
  <li>a label associated with the checkbox, defined by the <code>label</code> prop</li>
  <li>an information, error (<code>errorMessage</code> prop), or validation (<code>validMessage</code> prop) message, displayed below the checkbox</li>
</ul>`}}}},e=z=>({components:{AvCheckbox:j},setup(){const F=G([]);return{args:z,model:F}},template:'<AvCheckbox v-bind="args" v-model="model" />'}),o=e.bind({});o.args={};const r=e.bind({});r.args={name:"with-icon-checkbox",label:"A checkbox with icon",icon:"mdi:home"};const n=e.bind({});n.args={name:"required-checkbox",label:"A required checkbox",required:!0};const s=e.bind({});s.args={name:"disabled-checkbox",label:"A disabled checkbox",disabled:!0};const a=e.bind({});a.args={name:"error-checkbox",label:"A checkbox with error",errorMessage:"An error has occured"};const t=e.bind({});t.args={name:"valid-checkbox",label:"A valid checkbox",validMessage:"Congratulations!"};const c=e.bind({});c.args={name:"hint-checkbox",label:"A checkbox with a hint",hint:"You should click this"};const l=e.bind({});l.args={name:"small-checkbox",label:"A small checkbox",small:!0};const m=e.bind({});m.args={name:"small-with-icon-checkbox",label:"A disabled checkbox with icon",small:!0,icon:"mdi:home"};const d=e.bind({});d.args={name:"small-required-checkbox",label:"A small required checkbox",small:!0,required:!0};var i,u,b;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,h,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var A,C,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var S,q,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
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
})`,...(w=(q=a.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,y,I;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var R,D,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
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
})`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var W,E,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var V,_,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
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
})`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var N,O,Y;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(Y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};const Z=["Default","WithIcon","Required","Disabled","Error","Valid","Hint","Small","SmallWithIcon","SmallRequired"];export{o as Default,s as Disabled,a as Error,c as Hint,n as Required,l as Small,d as SmallRequired,m as SmallWithIcon,t as Valid,r as WithIcon,Z as __namedExportsOrder,X as default};
