import{A as k}from"./AvIcon-Cn7yxUCm.js";import{s as Ie,m as P,b as C,g as b,W as e,F as Ve,M as Se,f as z,d as v,k as N,R as E,w as fe,N as F,H as o,e as M,Y as Ce,P as ke,a4 as L,y as Ee,Z as Le,U as Ne,L as ze,v as H,x as $e,I as Pe}from"./iframe-C5ldfz9n.js";import{_ as ve}from"./AvMessage-CiDy0aw-.js";import{A as qe,g as We}from"./AvFilePill-Bf46WlG3.js";import{M as $}from"./icons-0dWeWY1j.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{A as Re}from"./AvButton-CFBAMMS6.js";import"./icon-path-u9rVYwcY.js";import"./preload-helper-ILsKNznc.js";import"./AvIconText-CSX_Dc1L.js";import"./AvTooltip-CwgxMeIY.js";import"./string-BZgCOP9D.js";const ge=Symbol("AvFileUploadContext");function be(){const d=Ie(ge);if(!d)throw new Error("useFileUploadContext must be used within AvFileUpload component");return d}const je={class:"av-compact-upload"},Oe={key:0,class:"av-compact-files-list av-col av-gap-xxs av-mb-xs"},He={class:"b2-regular"},Ye=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],Ke={class:"caption-light"},he=P({__name:"AvFileUploadCompact",setup(d){Ce(u=>({v4a35379f:e(a).maxWidth}));const{props:a,modelValue:i,realId:s,acceptTypes:l,uploadLabelAttrs:x,onChange:h,onClear:y}=be(),c=C(()=>{var u;return(u=i.value)!=null&&u.length?i.value.map(r=>({name:r.name,size:r.size,type:We(r.name)})):a.fileName?[{name:a.fileName,size:void 0,type:void 0}]:[]});return(u,r)=>{const U=ve;return o(),b("div",je,[e(c).length>0?(o(),b("div",Oe,[(o(!0),b(Ve,null,Se(e(c),(m,g)=>(o(),M(qe,{key:`${m.name}-${g}`,name:m.name,size:m.size,type:m.type,deletable:!e(a).disabled,onDelete:()=>{var A;return e(y)((A=e(i))!=null&&A.length?e(i)[g]:g)}},null,8,["name","size","type","deletable","onDelete"]))),128))])):z("",!0),v("label",fe(e(x),{class:"av-compact-add-pill av-row av-align-center av-gap-xs av-p-xs av-radius-md av-border-width-sm av-border-style-dashed av-border-stroke"}),[N(k,{size:1.5,name:e($).ATTACHMENT_PLUS,color:"var(--dark-background-primary1)"},null,8,["name"]),v("span",He,E(e(a).title),1),v("input",{id:e(s),class:"av-upload",type:"file","aria-describedby":e(a).error||e(a).validMessage?`${e(s)}-desc`:"",disabled:e(a).disabled,"aria-disabled":e(a).disabled,accept:e(l),multiple:e(a).enableMultiple,onChange:r[0]||(r[0]=m=>e(h)(m))},null,40,Ye)],16),N(U,{type:e(a).error?"error":"success",message:e(a).error?e(a).error:e(a).validMessage},null,8,["type","message"]),v("span",Ke,[F(u.$slots,"hint",{},void 0,!0)])])}}}),Ze=q(he,[["__scopeId","data-v-5a8df436"]]);he.__docgenInfo={exportName:"default",displayName:"AvFileUploadCompact",description:"",tags:{},slots:[{name:"hint"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadCompact.vue"]};const Ge={class:"av-default-upload"},Je={class:"av-row av-align-center av-gap-xs"},Qe={class:"left-content-container av-row av-align-center av-justify-center av-radius-md"},Xe={class:"content-container av-col"},ea={key:0},aa={class:"b2-bold"},na={key:1,class:"av-col av-gap-xxs"},ta={class:"b2-regular"},sa={class:"caption-light"},la={key:0,class:"av-px-xs"},oa=["id","aria-describedby","disabled","aria-disabled","accept","multiple"],ia={class:"caption-light"},ye=P({__name:"AvFileUploadDefault",setup(d){const{props:a,modelValue:i,realId:s,acceptTypes:l,uploadLabelAttrs:x,onChange:h,onClear:y}=be(),c=C(()=>!!a.fileName||i.value&&i.value.length>0);return(u,r)=>{const U=ve;return o(),b("div",Ge,[(o(),M(ke(e(c)?"div":"label"),fe(e(c)?{}:e(x),{class:e(c)?"file-preview-container av-radius-lg av-p-xs":""}),{default:L(()=>{var m;return[v("div",{class:Ee(e(c)?"":"file-upload-container av-radius-lg av-p-xs")},[v("div",Je,[v("div",Qe,[F(u.$slots,"left",{},()=>[N(k,{size:2.5,name:e($).ATTACHMENT_PLUS,color:"var(--icon)"},null,8,["name"])],!0)]),v("div",Xe,[e(c)?(o(),b("div",ea,[v("span",aa,E(e(a).fileName||((m=e(i))==null?void 0:m.map(g=>g.name).join(", "))),1)])):(o(),b("div",na,[v("span",ta,E(e(a).title),1),v("span",sa,E(e(a).description),1)])),N(U,{type:e(a).error?"error":"success",message:e(a).error?e(a).error:e(a).validMessage},null,8,["type","message"])]),e(a).disabled?z("",!0):(o(),b("div",la,[e(c)?(o(),M(Re,{key:0,label:e(a).deleteButtonLabel??"Remove",theme:"SECONDARY",onClick:r[0]||(r[0]=()=>e(y)())},null,8,["label"])):(o(),M(k,{key:1,size:1.5,name:e($).TRAY_UPLOAD,color:"var(--dark-background-primary1)"},null,8,["name"]))])),e(c)?z("",!0):(o(),b("input",{key:1,id:e(s),class:"av-upload",type:"file","aria-describedby":e(a).error||e(a).validMessage?`${e(s)}-desc`:"",disabled:e(a).disabled,"aria-disabled":e(a).disabled,accept:e(l),multiple:e(a).enableMultiple,onChange:r[1]||(r[1]=g=>e(h)(g))},null,40,oa))])],2)]}),_:3},16,["class"])),v("span",ia,[F(u.$slots,"hint",{},void 0,!0)])])}}}),ra=q(ye,[["__scopeId","data-v-852e63f9"]]);ye.__docgenInfo={exportName:"default",displayName:"AvFileUploadDefault",description:"",tags:{},slots:[{name:"left"},{name:"hint"}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUploadDefault.vue"]};const Ae=P({inheritAttrs:!1,__name:"AvFileUpload",props:H({id:{default:void 0},ariaLabel:{default:""},accept:{default:void 0},maxFileSizeMb:{default:void 0},error:{default:""},validMessage:{default:""},disabled:{type:Boolean,default:!1},modelValue:{},maxWidth:{default:"none"},title:{},description:{},deleteButtonLabel:{default:"Remove"},fileName:{default:void 0},compact:{type:Boolean,default:!1},enableMultiple:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:H(["update:modelValue","update:validMessage","update:error","change","deleteFile","acceptTypeError","fileSizeError"],["update:modelValue"]),setup(d,{emit:a}){const i=d,s=a,l=Le(d,"modelValue"),{id:x,accept:h,maxFileSizeMb:y,ariaLabel:c,disabled:u,validMessage:r,error:U}=Ne(i),m=C(()=>x.value??`file-upload-${crypto.randomUUID()}`),g=C(()=>Array.isArray(h.value)?h.value.join(","):h.value),A=ze(!1);function R(n){const t=g.value;return t?t.split(",").map(f=>f.trim().toLowerCase()).some(f=>f.startsWith(".")?n.name.toLowerCase().endsWith(f):f.includes("/")?n.type===f||n.type.startsWith(`${f.split("/")[0]}/`):!1):!0}function j(n){return y.value===void 0||y.value<=0?!0:n.size<=y.value*1024*1024}async function Fe(n){var f,O;if(n.preventDefault(),A.value=!1,u.value||!((O=(f=n.dataTransfer)==null?void 0:f.files)!=null&&O.length))return;const t=Array.from(n.dataTransfer.files).filter(R),p=t.filter(j);await $e(),p.length?(i.enableMultiple?l.value=[...l.value??[],...p]:l.value=[p[0]],s("change",p)):t.length?s("fileSizeError"):s("acceptTypeError")}function Me(n){n.preventDefault(),u.value||(A.value=!0)}function _e(){A.value=!1}function xe(n){const t=n.target.files,p=t==null?void 0:t[0];if(p&&!R(p)){s("acceptTypeError");return}if(p&&!j(p)){s("fileSizeError");return}!t||!t.length||(i.enableMultiple?l.value=[...l.value??[],...Array.from(t)]:l.value=[t[0]],s("change",t))}const Ue=C(()=>({for:m.value,class:["av-upload-group",{"av-upload-group--error":U.value,"av-upload-group--valid":r.value,"av-upload-group--disabled":u.value,"drag-over":A.value}],"aria-label":c.value,onDragover:Me,onDragleave:_e,onDrop:Fe}));function Be(n){const t=(l.value??[]).filter(p=>p!==n);l.value=t.length>0?t:null}function Te(n){const t=(l.value??[]).filter((p,f)=>f!==n);l.value=t.length>0?t:null}function we(n){n!==void 0?typeof n=="number"?Te(n):Be(n):l.value=null,s("deleteFile",n),s("update:validMessage",null),s("update:error",null),s("change",[])}const De={props:i,modelValue:l,realId:m.value,acceptTypes:g,uploadLabelAttrs:Ue,onChange:xe,onClear:we};return Pe(ge,De),(n,t)=>d.compact?(o(),M(Ze,{key:0},{hint:L(()=>[F(n.$slots,"hint",{},void 0,!0)]),_:3})):(o(),M(ra,{key:1},{left:L(()=>[F(n.$slots,"left",{},void 0,!0)]),hint:L(()=>[F(n.$slots,"hint",{},void 0,!0)]),_:3}))}}),W=q(Ae,[["__scopeId","data-v-3c58b6c5"]]);Ae.__docgenInfo={exportName:"default",displayName:"AvFileUpload",description:"",tags:{},props:[{name:"id",description:`Unique identifier for the file upload component.
If not specified, a random ID is generated.`,tags:{default:[{description:"`file-upload-${crypto.randomUUID()}`",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"ariaLabel",description:"ARIA label for file upload button.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"accept",description:"Accepted file types, specified as a string (like HTML `accept` attribute)\nor an array of strings (which will be transformed into a string).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]},defaultValue:{func:!1,value:"undefined"}},{name:"maxFileSizeMb",description:"Maximum allowed file size in megabytes.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"error",description:"Error message to be displayed in case of upload problem.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"validMessage",description:"Message indicating that the uploaded file is valid.",tags:{default:[{description:"''",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",description:"Whether the file upload input is disabled.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"modelValue",description:"Array of selected files.",tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"File"}]},{name:"null"}]}},{name:"maxWidth",description:"Max width of the component.",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'none'"}},{name:"title",description:"Title of the file upload section.",required:!0,type:{name:"string"}},{name:"description",description:"Description of the file upload section.",required:!0,type:{name:"string"}},{name:"deleteButtonLabel",description:"Delete button label.",tags:{default:[{description:"'Remove'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Remove'"}},{name:"fileName",description:"Name of the file to display as default (e.g., for server-persisted uploads).",tags:{default:[{description:"undefined",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"compact",description:"Display in compact mode with file pills.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"enableMultiple",description:"Enable multiple file uploads.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"Array",elements:[{name:"File"}]},{name:"null"}]},description:"Event emitted when the model value is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated files array (File[] or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated files array (File[] or null)."}]},{name:"update:validMessage",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the validMessage is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated message (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated message (string or null)."}]},{name:"update:error",type:{names:["union"],elements:[{name:"string"},{name:"null"}]},description:"Event emitted when the error is updated.",properties:[{type:{names:["mixed"]},name:"payload",description:"The updated error message (string or null)."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The updated error message (string or null)."}]},{name:"change",type:{names:["union"],elements:[{name:"FileList"},{name:"Array",elements:[{name:"File"}]}]},description:"Event emitted when the selected file(s) change.",properties:[{type:{names:["mixed"]},name:"payload",description:"The new list of selected files (FileList or File[])."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"The new list of selected files (FileList or File[])."}]},{name:"deleteFile",type:{names:["union"],elements:[{name:"File"},{name:"number"}]},description:"Event emitted when a file is deleted.",properties:[{type:{names:["mixed"]},name:"payload",description:"Optional: the File object or index that was deleted."}],tags:[{title:"param",type:{name:"mixed"},name:"payload",description:"Optional: the File object or index that was deleted."}]},{name:"acceptTypeError",description:"Event emitted when a file of wrong type is dropped or selected."},{name:"fileSizeError",description:"Event emitted when a dropped or selected file exceeds the configured size limit."}],slots:[{name:"hint",description:"Slot for the hint description."},{name:"left",description:"Slot for the left content."},{name:"default",description:"Default slot for global content between the left and right icons."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/interaction/files/AvFileUpload/AvFileUpload.vue"]};const pa="/avenirs-dsav/storybook/assets/profile_banner_placeholder-B4RPbS73.png",_a={title:"Components/Interaction/Files/AvFileUpload",component:W,tags:["autodocs"],argTypes:{ariaLabel:{control:"text"},accept:{control:"text"},maxFileSizeMb:{control:"number"},error:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},modelValue:{control:"text"},maxWidth:{control:"text"},fileName:{control:"text"},title:{control:"text"},description:{control:"text"},deleteButtonLabel:{control:"text"},compact:{control:"boolean"},enableMultiple:{control:"boolean"}},args:{ariaLabel:"",accept:"",maxFileSizeMb:void 0,error:"",validMessage:"",disabled:!1,modelValue:null,maxWidth:"none",fileName:void 0,title:"Upload file",description:"or drag and drop here",deleteButtonLabel:"Delete",compact:!1,enableMultiple:!1},parameters:{docs:{description:{component:`<h1 class="n1">File uploader - <code>AvFileUpload</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The <code>AvFileUpload</code> component allows you to upload files by clicking on the file upload area
    or by dragging and dropping a file in the area. Supports both single and multiple file uploads with two display variants.
  </span>
</p>`}}}},_=d=>({components:{AvFileUpload:W,AvIcon:k},setup(){return{args:d}},template:`
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
  `}),B=_.bind({});B.args={};const T=_.bind({});T.args={error:"This is an error message"};const w=_.bind({});w.args={validMessage:"File uploaded successfully"};const da=d=>({components:{AvFileUpload:W,AvIcon:k},setup(){return{args:d}},template:`
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
  `}),D=da.bind({});D.args={leftImageSrc:pa};const I=_.bind({});I.args={compact:!0,title:"Attach documents",description:""};const V=_.bind({});V.args={compact:!0,title:"Attach documents",description:"",fileName:"Document.pdf"};const S=_.bind({});S.args={compact:!0,enableMultiple:!0,title:"Attach documents",description:"",fileName:"Document1.pdf"};var Y,K,Z;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(Z=(K=B.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var G,J,Q;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
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
})`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,ee,ae;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,se;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
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
})`,...(se=(te=D.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,ie;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,pe,de;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
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
})`,...(de=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ce,ue,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const xa=["Default","Error","Success","LeftSlot","Compact","CompactWithFiles","MultipleFiles"];export{I as Compact,V as CompactWithFiles,B as Default,T as Error,D as LeftSlot,S as MultipleFiles,w as Success,xa as __namedExportsOrder,_a as default};
