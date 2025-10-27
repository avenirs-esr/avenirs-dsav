import{A as Y}from"./AvCheckbox-yTj9q2HF.js";import{r as z}from"./iframe-DoGY7sZo.js";import"./AvIcon-DhAhJdLn.js";import"./iconify-CzR5Nfuu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-ubxugSKv.js";import"./preload-helper-ILsKNznc.js";const X={title:"Components/Interaction/Checkboxes/AvCheckbox",component:Y,tags:["autodocs"],argTypes:{id:{control:"text"},icon:{control:"text"},name:{control:"text",required:!0},required:{control:"boolean"},value:{control:"text",required:!0},small:{control:"boolean"},inline:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text",required:!0},errorMessage:{control:"text"},validMessage:{control:"text"},hint:{control:"text"}},args:{id:`checkbox-${crypto.randomUUID()}`,icon:void 0,name:"default-checkbox",required:!1,value:"1",small:!1,inline:!1,disabled:!1,label:"A default checkbox",errorMessage:"",validMessage:"",hint:""},parameters:{docs:{description:{component:`<h2 class="n2">✨ Introduction</h2>

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
</ul>`}}}},e=$=>({components:{AvCheckbox:Y},setup(){const j=z([]);return{args:$,model:j}},template:'<AvCheckbox v-bind="args" v-model="model" />'}),o=e.bind({});o.args={};const r=e.bind({});r.args={id:"with-icon-checkbox",name:"with-icon-checkbox",label:"A checkbox with icon",icon:"mdi:home"};const n=e.bind({});n.args={id:"required-checkbox",name:"required-checkbox",label:"A required checkbox",required:!0};const s=e.bind({});s.args={id:"disabled-checkbox",name:"disabled-checkbox",label:"A disabled checkbox",disabled:!0};const a=e.bind({});a.args={id:"error-checkbox",name:"error-checkbox",label:"A checkbox with error",errorMessage:"An error has occured"};const t=e.bind({});t.args={id:"valid-checkbox",name:"valid-checkbox",label:"A valid checkbox",validMessage:"Congratulations!"};const c=e.bind({});c.args={id:"hint-checkbox",name:"hint-checkbox",label:"A checkbox with a hint",hint:"You should click this"};const l=e.bind({});l.args={id:"small-checkbox",name:"small-checkbox",label:"A small checkbox",small:!0};const d=e.bind({});d.args={id:"small-with-icon-checkbox",name:"small-with-icon-checkbox",label:"A disabled checkbox with icon",small:!0,icon:"mdi:home"};const i=e.bind({});i.args={id:"small-required-checkbox",name:"small-required-checkbox",label:"A small required checkbox",small:!0,required:!0};var m,b,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
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
})`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var p,h,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,k,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var A,C,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var q,S,w;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,M,I;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(I=(M=t.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var D,R,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
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
})`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,E,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var U,V,_;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
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
})`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var B,N,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const Z=["Default","WithIcon","Required","Disabled","Error","Valid","Hint","Small","SmallWithIcon","SmallRequired"];export{o as Default,s as Disabled,a as Error,c as Hint,n as Required,l as Small,i as SmallRequired,d as SmallWithIcon,t as Valid,r as WithIcon,Z as __namedExportsOrder,X as default};
