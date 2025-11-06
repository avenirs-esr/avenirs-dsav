import{A as v}from"./AvIcon-C3XddoTO.js";import{d as P,a as d,B as F,o,E as x,u as t,c as b,r as Z,H as A,b as i,I as _,J as k,L as ee,h as D,F as ae,Q as ne,n as te,t as M,j as se}from"./iframe-C_qbK98L.js";import{A as le}from"./AvButton-CL1z587w.js";import{A as oe}from"./AvIconText-C5h0wbeZ.js";import{M as h}from"./icons-CAbb_h1G.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const re={key:0,class:"messages-group",role:"alert"},j=P({__name:"AvFileUploadAlert",props:{error:{default:void 0},validMessage:{default:void 0}},setup(e){return(w,s)=>e.error||e.validMessage?(o(),d("div",re,[x(oe,{icon:e.error?t(h).CLOSE_CIRCLE_OUTLINE:t(h).CHECK_CIRCLE_OUTLINE,"icon-color":e.error?"var(--dark-background-error)":"var(--dark-background-success)",text:e.error?e.error:e.validMessage,"text-color":e.error?"var(--dark-background-error)":"var(--dark-background-success)","typography-class":"caption-regular"},null,8,["icon","icon-color","text","text-color"])])):F("",!0)}});j.__docgenInfo={exportName:"default",displayName:"AvFileUploadAlert",description:"",tags:{},props:[{name:"error",description:"Error message to be displayed in case of upload problem.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"validMessage",description:"Message indicating that the uploaded file is valid.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadAlert.vue"]};const de={class:"file-upload-content"},pe={class:"left-content-container"},ce={class:"content-container"},ue={key:0},me={class:"b2-bold"},fe={key:1,class:"title-container"},ge={class:"b2-regular"},be={class:"caption-light"},ve={key:0,class:"right-icon-container"},he=["id","aria-describedby","disabled","aria-disabled","accept"],ye={class:"caption-light"},H=P({inheritAttrs:!1,__name:"AvFileUpload",props:{id:{},ariaLabel:{default:""},accept:{default:()=>{}},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{default:null},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{},onDeleteFile:{type:Function},enableMultiple:{type:Boolean,default:!1}},emits:["update:modelValue","update:validMessage","update:error","change","onDropAcceptTypeError"],setup(e,{emit:w}){ne(a=>({v734590b0:a.maxWidth}));const s=w,y=b(()=>e.id??`file-upload-${crypto.randomUUID()}`),I=b(()=>Array.isArray(e.accept)?e.accept.join(","):e.accept),g=Z(!1);function z(a){const n=I.value;return n?n.split(",").map(l=>l.trim().toLowerCase()).some(l=>l.startsWith(".")?a.name.toLowerCase().endsWith(l):l.includes("/")?a.type===l||a.type.startsWith(`${l.split("/")[0]}/`):!1):!0}async function Y(a){var p,l;if(a.preventDefault(),g.value=!1,e.disabled||!((l=(p=a.dataTransfer)==null?void 0:p.files)!=null&&l.length))return;const n=Array.from(a.dataTransfer.files).filter(z);await se(),n.length?(s("change",n),s("update:modelValue",n[0]??"")):s("onDropAcceptTypeError")}function J(a){a.preventDefault(),e.disabled||(g.value=!0)}function K(){g.value=!1}function Q(a){const n=a.target.files;s("change",n),s("update:modelValue",(n==null?void 0:n[0])??null)}const r=b(()=>e.fileName||e.modelValue&&!e.enableMultiple),G=b(()=>({for:y.value,class:["fr-upload-group",{"fr-upload-group--error":e.error,"fr-upload-group--valid":e.validMessage,"fr-upload-group--disabled":e.disabled,"drag-over":g.value}],"aria-label":e.ariaLabel,onDragover:J,onDragleave:K,onDrop:Y}));function X(a){var n;a?(s("update:modelValue",null),s("update:validMessage",null),s("update:error",null),s("change",[])):(n=e.onDeleteFile)==null||n.call(e)}return(a,n)=>(o(),d(ae,null,[(o(),A(ee(t(r)?"div":"label"),k(t(r)?{}:t(G),{class:t(r)?"file-preview-container":""}),{default:_(()=>[i("div",{class:te(t(r)?"":"file-upload-container")},[i("div",de,[i("div",pe,[D(a.$slots,"left",{},()=>[x(v,{size:2.5,name:t(h).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),i("div",ce,[t(r)?(o(),d("div",ue,[i("span",me,M(e.fileName||e.modelValue.name),1)])):(o(),d("div",fe,[i("span",ge,M(e.title),1),i("span",be,M(e.description),1)])),x(j,{"valid-message":e.validMessage,error:e.error},null,8,["valid-message","error"])]),e.disabled?F("",!0):(o(),d("div",ve,[t(r)?(o(),A(le,{key:0,label:e.deleteButtonLabel,theme:"SECONDARY",onClick:n[0]||(n[0]=()=>X(e.modelValue))},null,8,["label"])):(o(),A(v,{key:1,size:1.5,name:t(h).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),t(r)?F("",!0):(o(),d("input",k({key:1,id:t(y),class:"fr-upload",type:"file","aria-describedby":e.error||e.validMessage?`${t(y)}-desc`:void 0},a.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:t(I),onChange:n[1]||(n[1]=p=>Q(p))}),null,16,he))])],2)]),_:3},16,["class"])),i("span",ye,[D(a.$slots,"hint",{},void 0,!0)])],64))}}),T=ie(H,[["__scopeId","data-v-e7ff3ec7"]]);H.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file download component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"ariaLabel",description:"ARIA label for file download button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"error",description:"Error message to be displayed in case of download problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"validMessage",description:"Message indicating that the downloaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Value linked to file upload input template.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"File"},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",tags:{default:[{description:"undefined",title:"default"}]},required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"delete button label",required:!1,type:{name:"string"}},{name:"fileName",description:"Name of actual file.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"onDeleteFile",description:"Method executed on delete file button click.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"TSFunctionType"}},{name:"enableMultiple",description:"Whether the file upload input enable multiple file selection or not.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"File"},{name:"null"}]},description:"Event emitted when the model value linked to the file is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (File or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (File or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated model value (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated model value (string or null)."}]},{name:"change",type:{names:["FileList"]},description:"Event emitted when the selected file is changed.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList)."}]},{name:"onDropAcceptTypeError",description:"Event emitted when a file of wrong type is dropped."}],slots:[{name:"left",description:"Slot for the left content."},{name:"hint",description:"Slot for the hint description."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const Ae="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",Le={title:"Components/Interaction/Files/AvFileUpload",component:T,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},onDeleteFile:{type:{name:"function"},control:!1},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Add a new",description:"or drag and drop here",deleteButtonLabel:"Delete",onDeleteFile:void 0,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area.
  </span>
</p>`}}}},U=e=>({components:{AvFileUpload:T,AvIcon:v},setup(){return{args:e}},template:`
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
  `}),c=U.bind({});c.args={};const u=U.bind({});u.args={error:"This is an error message"};const m=U.bind({});m.args={validMessage:"This is a success message"};const Me=e=>({components:{AvFileUpload:T,AvIcon:v},setup(){return{args:e}},template:`
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
  `}),f=Me.bind({});f.args={leftImageSrc:Ae};var L,V,C;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
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
})`,...(C=(V=c.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var E,S,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(N=(S=u.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var q,B,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var $,O,R;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
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
})`,...(R=(O=f.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Ve=["Default","Error","Success","LeftSlot"];export{c as Default,u as Error,f as LeftSlot,m as Success,Ve as __namedExportsOrder,Le as default};
