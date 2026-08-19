import{A as u}from"./AvIcon-C5QtT8Eo.js";import{_ as be}from"./AvMessage-DzCurTdO.js";import{m as ve,Z as he,b as k,L as ye,g as c,F as Ae,M as Me,f as w,d as o,k as b,W as l,R as v,w as S,N as L,e as D,a4 as Fe,P as xe,v as P,Y as Be,H as r,y as Ue,x as Te}from"./iframe-CEkKKsDl.js";import{A as $}from"./AvButton-Cz8gytkj.js";import{M as h}from"./icons-0dWeWY1j.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icon-path-u9rVYwcY.js";import"./AvIconText-DjGI8YzC.js";import"./AvTooltip-CmFc95lO.js";import"./preload-helper-ILsKNznc.js";import"./string-BZgCOP9D.js";const Se={key:0,class:"av-compact-upload"},De={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},Ie={class:"b2-regular av-ellipsis av-compact-file-name"},ke={class:"b2-regular"},Le=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Ce={class:"caption-light"},Ee={key:1,class:"av-default-upload"},Ve={class:"av-row av-align-center av-gap-xs"},Ne={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},ze={class:"content-container av-col"},qe={key:0},Pe={class:"b2-bold"},$e={key:1,class:"av-col av-gap-xxs"},We={class:"b2-regular"},Oe={class:"caption-light"},Re={key:0,class:"av-px-xs"},je=["id","aria-describedby","disabled","aria-disabled","accept"],He={class:"caption-light"},re=ve({inheritAttrs:!1,__name:"AvFileUpload",props:P({id:{},ariaLabel:{default:""},accept:{default:()=>{}},maxFileSizeMb:{default:()=>{}},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:P(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError"],["update:modelValue"]),setup(e,{emit:de}){Be(a=>({c17d1982:a.maxWidth}));const d=de,s=he(e,"modelValue"),g=e.id??`file-upload-${crypto.randomUUID()}`,I=k(()=>Array.isArray(e.accept)?e.accept.join(","):e.accept),T=ye(!1);function E(a){const n=I.value;return n?n.split(",").map(t=>t.trim().toLowerCase()).some(t=>t.startsWith(".")?a.name.toLowerCase().endsWith(t):t.includes("/")?a.type===t||a.type.startsWith(`${t.split("/")[0]}/`):!1):!0}function V(a){return e.maxFileSizeMb===void 0||e.maxFileSizeMb<=0?!0:a.size<=e.maxFileSizeMb*1024*1024}async function pe(a){var t,p;if(a.preventDefault(),T.value=!1,e.disabled||!((p=(t=a.dataTransfer)==null?void 0:t.files)!=null&&p.length))return;const n=Array.from(a.dataTransfer.files).filter(E),i=n.filter(V);await Te(),i.length?(e.enableMultiple?s.value=[...s.value??[],...i]:s.value=[i[0]],d("change",i)):n.length?d("fileSizeError"):d("acceptTypeError")}function ce(a){a.preventDefault(),e.disabled||(T.value=!0)}function me(){T.value=!1}function N(a){const n=a.target.files,i=n==null?void 0:n[0];if(i&&!E(i)){d("acceptTypeError");return}if(i&&!V(i)){d("fileSizeError");return}!n||!n.length||(e.enableMultiple?s.value=[...s.value??[],...Array.from(n)]:s.value=[n[0]],d("change",n))}const m=k(()=>!!e.fileName||s.value&&s.value.length>0),z=k(()=>({for:g,class:["av-upload-group",{"av-upload-group--error":e.error,"av-upload-group--valid":e.validMessage,"av-upload-group--disabled":e.disabled,"drag-over":T.value}],"aria-label":e.ariaLabel,onDragover:ce,onDragleave:me,onDrop:pe}));function ue(a){const n=(s.value??[]).filter(i=>i!==a);s.value=n.length>0?n:null}function fe(a){const n=(s.value??[]).filter((i,t)=>t!==a);s.value=n.length>0?n:null}function q(a){a!==void 0?typeof a=="number"?fe(a):ue(a):s.value=null,d("deleteFile",a),d("update:validMessage",null),d("update:error",null),d("change",[])}return(a,n)=>{const i=be;return e.compact?(r(),c("div",Se,[s.value&&s.value.length>0||e.fileName?(r(),c("div",De,[(r(!0),c(Ae,null,Me(s.value&&s.value.length>0?s.value.map(t=>t.name):[e.fileName],(t,p)=>(r(),c("div",{key:`${t}-${p}`,class:"av-compact-file-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-solid av-border-stroke av-background-card"},[b(u,{size:1.5,name:l(h).ATTACH_FILE,color:"var(--icon)"},null,8,["name"]),o("span",Ie,v(t),1),e.disabled?w("",!0):(r(),D($,{key:0,label:`Delete ${t}`,icon:l(h).TRASH_CAN_OUTLINE,"icon-only":"",small:"",onClick:()=>q(s.value&&s.value.length>0?s.value[p]:p)},null,8,["label","icon","onClick"]))]))),128))])):w("",!0),o("label",S(l(z),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[b(u,{size:1.5,name:l(h).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),o("span",ke,v(e.title),1),o("input",S({id:l(g),class:"av-upload",type:"file","aria-describedby":e.error||e.validMessage?`${l(g)}-desc`:void 0},a.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:l(I),multiple:e.enableMultiple,onChange:n[0]||(n[0]=t=>N(t))}),null,16,Le)],16),b(i,{type:e.error?"error":"success",message:e.error?e.error:e.validMessage},null,8,["type","message"]),o("span",Ce,[L(a.$slots,"hint",{},void 0,!0)])])):(r(),c("div",Ee,[(r(),D(xe(l(m)?"div":"label"),S(l(m)?{}:l(z),{class:l(m)?"file-preview-container av-radius-lg av-p-xs av-border-width-sm av-border-style-solid av-border-stroke":""}),{default:Fe(()=>{var t,p;return[o("div",{class:Ue(l(m)?"":"file-upload-container av-radius-lg av-p-xs av-border-width-sm av-border-style-dashed av-border-stroke")},[o("div",Ve,[o("div",Ne,[L(a.$slots,"left",{},()=>[b(u,{size:2.5,name:l(h).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),o("div",ze,[l(m)?(r(),c("div",qe,[o("span",Pe,v(e.fileName||((p=(t=s.value)==null?void 0:t[0])==null?void 0:p.name)),1)])):(r(),c("div",$e,[o("span",We,v(e.title),1),o("span",Oe,v(e.description),1)])),b(i,{type:e.error?"error":"success",message:e.error?e.error:e.validMessage},null,8,["type","message"])]),e.disabled?w("",!0):(r(),c("div",Re,[l(m)?(r(),D($,{key:0,label:e.deleteButtonLabel,theme:"SECONDARY",onClick:n[1]||(n[1]=()=>q())},null,8,["label"])):(r(),D(u,{key:1,size:1.5,name:l(h).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),l(m)?w("",!0):(r(),c("input",S({key:1,id:l(g),class:"av-upload",type:"file","aria-describedby":e.error||e.validMessage?`${l(g)}-desc`:void 0},a.$attrs,{disabled:e.disabled,"aria-disabled":e.disabled,accept:l(I),onChange:n[2]||(n[2]=ge=>N(ge))}),null,16,je))])],2)]}),_:3},16,["class"])),o("span",He,[L(a.$slots,"hint",{},void 0,!0)])]))}}}),C=we(re,[["__scopeId","data-v-330cf9ef"]]);re.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"}},{name:"ariaLabel",description:"ARIA label for file upload button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}},{name:"maxFileSizeMb",description:"Maximum allowed file size in megabytes.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"number"}},{name:"error",description:"Error message to be displayed in case of upload problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"validMessage",description:"Message indicating that the uploaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"modelValue",description:"Array of selected files.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"File"}]},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"Delete button label.",tags:{default:[{description:"'Remove'",title:"default"}]},required:!1,type:{name:"string"}},{name:"fileName",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"}},{name:"compact",description:"Display in compact mode with file pills.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}},{name:"enableMultiple",description:"Enable multiple file uploads.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"Array",elements:[{name:"File"}]},{name:"null"}]},description:"Event emitted when the model value is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated files array (File[] or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated files array (File[] or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated message (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated message (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated error message (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated error message (string or null)."}]},{name:"change",type:{names:["union"],elements:[{name:"FileList"},{name:"Array",elements:[{name:"File"}]}]},description:"Event emitted when the selected file(s) change.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList or File[])."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList or File[])."}]},{name:"deleteFile",type:{names:["union"],elements:[{name:"File"},{name:"number"}]},description:"Event emitted when a file is deleted.",properties:[{type:{names:["mixed"]},name:"payload",description:"Optional: the File object or index that was deleted."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"Optional: the File object or index that was deleted."}]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected."},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit."}],slots:[{name:"hint",description:"Slot for the hint description."},{name:"left",description:"Slot for the left content."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const Ye="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",la={title:"Components/Interaction/Files/AvFileUpload",component:C,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area. Supports both single and multiple file uploads with two display variants.
  </span>
</p>`}}}},f=e=>({components:{AvFileUpload:C,AvIcon:u},setup(){return{args:e}},template:`
    <AvFileUpload v-bind="args">
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `}),y=f.bind({});y.args={};const A=f.bind({});A.args={error:"This is an error message"};const M=f.bind({});M.args={validMessage:"File uploaded successfully"};const Ze=e=>({components:{AvFileUpload:C,AvIcon:u},setup(){return{args:e}},template:`
    <AvFileUpload v-bind="args">
      <template #left>
        <img
          :src="args.leftImageSrc"
          alt="banner"
          style="height: 100%; width: 100%; object-fit: cover;"
        >
      </template>

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  `}),F=Ze.bind({});F.args={leftImageSrc:Ye};const x=f.bind({});x.args={compact:!0,title:"Attach documents",description:""};const B=f.bind({});B.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const U=f.bind({});U.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf"};var W,O,R;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var j,H,Y;A.parameters={...A.parameters,docs:{...(j=A.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(Y=(H=A.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var Z,G,J;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(J=(G=M.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;F.parameters={...F.parameters,docs:{...(K=F.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
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

      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(X=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var _,ee,ae;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(se=(te=B.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,ie,oe;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
      <span class="b2-regular">Upload file</span>
      <span class="b2-bold">PDF format</span>
      <span class="caption-regular">or drag and drop here</span>

      <template #hint>
        Text: <span class="caption-bold">5MB • </span>
        Images: <span class="caption-bold">5MB • </span>
        Audio: <span class="caption-bold">5MB • </span>
        Video: <span class="caption-bold">50MB • </span>
        Application: <span class="caption-bold">10MB</span>
      </template>
    </AvFileUpload>
  \`
})`,...(oe=(ie=U.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const ia=["Default","Error","Success","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];export{x as Compact,B as CompactWithFiles,y as Default,A as Error,F as LeftSlot,U as MultipleFiles,M as Success,ia as __namedExportsOrder,la as default};
