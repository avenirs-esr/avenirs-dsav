import{A as b}from"./AvIcon-Cfj6xq2l.js";import{_ as Q}from"./AvMessage-CT5c-pyt.js";import{d as X,c as h,r as Z,e as p,h as y,k as o,j as _,I as T,u as t,K as ee,l as w,O as ae,M as ne,g as i,n as te,i as U,f as D,L as A,q as se}from"./iframe-B9halFky.js";import{A as le}from"./AvButton-JHg7Xu1Y.js";import{M as I}from"./icons-DSO42OmF.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icon-path-u9rVYwcY.js";import"./AvIconText-BdwNZtgk.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const ie={class:"av-row av-align-center av-gap-xs"},re={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},de={class:"content-container av-col"},pe={key:0},ce={class:"b2-bold"},ue={key:1,class:"av-col av-gap-xxs"},me={class:"b2-regular"},fe={class:"caption-light"},ge={key:0,class:"av-px-xs"},be=["id","aria-describedby","disabled","aria-disabled","accept"],ve={class:"caption-light"},j=X({inheritAttrs:!1,__name:"AvFileUpload",props:{id:{},ariaLabel:{default:""},accept:{default:()=>{}},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{default:null},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{},onDeleteFile:{type:Function},enableMultiple:{type:Boolean,default:!1}},emits:["update:modelValue","update:validMessage","update:error","change","onDropAcceptTypeError"],setup(e,{emit:P}){ne(a=>({v1f017175:a.maxWidth}));const l=P,v=e.id??`file-upload-${crypto.randomUUID()}`,x=h(()=>Array.isArray(e.accept)?e.accept.join(","):e.accept),g=Z(!1);function R(a){const n=x.value;return n?n.split(",").map(s=>s.trim().toLowerCase()).some(s=>s.startsWith(".")?a.name.toLowerCase().endsWith(s):s.includes("/")?a.type===s||a.type.startsWith(`${s.split("/")[0]}/`):!1):!0}async function z(a){var d,s;if(a.preventDefault(),g.value=!1,e.disabled||!((s=(d=a.dataTransfer)==null?void 0:d.files)!=null&&s.length))return;const n=Array.from(a.dataTransfer.files).filter(R);await se(),n.length?(l("change",n),l("update:modelValue",n[0]??null)):l("onDropAcceptTypeError")}function H(a){a.preventDefault(),e.disabled||(g.value=!0)}function Y(){g.value=!1}function K(a){const n=a.target.files;l("change",n),l("update:modelValue",(n==null?void 0:n[0])??null)}const r=h(()=>e.fileName||e.modelValue&&!e.enableMultiple),G=h(()=>({for:v,class:["av-upload-group",{"av-upload-group--error":e.error,"av-upload-group--valid":e.validMessage,"av-upload-group--disabled":e.disabled,"drag-over":g.value}],"aria-label":e.ariaLabel,onDragover:H,onDragleave:Y,onDrop:z}));function J(a){var n;a?(l("update:modelValue",null),l("update:validMessage",null),l("update:error",null),l("change",[])):(n=e.onDeleteFile)==null||n.call(e)}return(a,n)=>{const d=Q;return i(),p(ae,null,[(i(),y(ee(t(r)?"div":"label"),T(t(r)?{}:t(G),{class:t(r)?"file-preview-container av-radius-lg av-p-xs":""}),{default:_(()=>[o("div",{class:te(t(r)?"":"file-upload-container av-radius-lg av-p-xs")},[o("div",ie,[o("div",re,[w(a.$slots,"left",{},()=>[D(b,{size:2.5,name:t(I).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),o("div",de,[t(r)?(i(),p("div",pe,[o("span",ce,A(e.fileName||e.modelValue.name),1)])):(i(),p("div",ue,[o("span",me,A(e.title),1),o("span",fe,A(e.description),1)])),D(d,{type:e.error?"error":"success",message:e.error?e.error:e.validMessage},null,8,["type","message"])]),e.disabled?U("",!0):(i(),p("div",ge,[t(r)?(i(),y(le,{key:0,label:e.deleteButtonLabel,theme:"SECONDARY",onClick:n[0]||(n[0]=()=>J(e.modelValue))},null,8,["label"])):(i(),y(b,{key:1,size:1.5,name:t(I).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),t(r)?U("",!0):(i(),p("input",T({key:1,id:t(v),class:"av-upload",type:"file","aria-describedby":e.error||e.validMessage?`${t(v)}-desc`:void 0},a.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:t(x),onChange:n[1]||(n[1]=s=>K(s))}),null,16,be))])],2)]),_:3},16,["class"])),o("span",ve,[w(a.$slots,"hint",{},void 0,!0)])],64)}}}),M=oe(j,[["__scopeId","data-v-e5f26964"]]);j.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file download component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"ariaLabel",description:"ARIA label for file download button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"error",description:"Error message to be displayed in case of download problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"validMessage",description:"Message indicating that the downloaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value linked to file upload input template.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"File"},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",tags:{default:[{description:"undefined",title:"default"}]},required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"delete button label",required:!1,type:{name:"string"}},{name:"fileName",description:"Name of actual file.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"onDeleteFile",description:"Method executed on delete file button click.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"TSFunctionType"}},{name:"enableMultiple",description:"Whether the file upload input enable multiple file selection or not.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"File"},{name:"null"}]},description:"Event emitted when the model value linked to the file is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (File or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (File or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"change",type:{names:["union"],elements:[{name:"FileList"},{name:"Array",elements:[{name:"File"}]}]},description:"Event emitted when the selected file is changed.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList or File[])."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList or File[])."}]},{name:"onDropAcceptTypeError",description:"Event emitted when a file of wrong type is dropped."}],slots:[{name:"left",description:"Slot for the left content."},{name:"hint",description:"Slot for the hint description."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const he="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",Ve={title:"Components/Interaction/Files/AvFileUpload",component:M,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},onDeleteFile:{type:{name:"function"},control:!1},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Add a new",description:"or drag and drop here",deleteButtonLabel:"Delete",onDeleteFile:void 0,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area.
  </span>
</p>`}}}},F=e=>({components:{AvFileUpload:M,AvIcon:b},setup(){return{args:e}},template:`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  `}),c=F.bind({});c.args={};const u=F.bind({});u.args={error:"This is an error message"};const m=F.bind({});m.args={validMessage:"This is a success message"};const ye=e=>({components:{AvFileUpload:M,AvIcon:b},setup(){return{args:e}},template:`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  `}),f=ye.bind({});f.args={leftImageSrc:he};var L,V,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var S,q,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(C=(q=u.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var E,N,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var W,$,O;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    AvFileUpload,
    AvIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Add a new</span>
      <span class="b2-bold">trace of type pdf file</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5Mo • </span>
        Images: <span class="caption-bold">5Mo • </span>
        Audio: <span class="caption-bold">5Mo • </span>
        Vidéo: <span class="caption-bold">50Mo • </span>
        Application: <span class="caption-bold">10Mo</span>
      </template>
    </AvFileUpload>
  \`
})`,...(O=($=f.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};const ke=["Default","Error","Success","LeftSlot"];export{c as Default,u as Error,f as LeftSlot,m as Success,ke as __namedExportsOrder,Ve as default};
