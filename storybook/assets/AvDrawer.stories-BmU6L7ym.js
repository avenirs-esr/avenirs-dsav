import{A as z}from"./AvButton-C7fSNlRd.js";import{d as W,A as V,T as q,w as $,X as j,a as m,B as g,u as l,b as u,h as f,n as Q,Q as X,o as w,r as _}from"./iframe-CYHIPOtb.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AvIcon-DWTCp2s-.js";import"./icons-CAbb_h1G.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const H={key:0},J={key:0,class:"av-drawer-backdrop"},K=["aria-label"],Z={class:"av-drawer__content-wrapper"},ee={class:"av-drawer__content"},ne={key:0,class:"footer-container"},S=W({__name:"AvDrawer",props:{show:{type:Boolean},position:{default:"right"},width:{default:"35rem"},backdrop:{type:Boolean,default:!0},padding:{default:"var(--spacing-md)"},ariaLabel:{default:"Menu latéral"}},emits:["escapePressed"],setup(n,{emit:e}){X(a=>({v52ac02d7:l(F),v5085de3c:l(M)}));const c=n,p=e,U=V(),{position:P,width:F,padding:M,show:D}=q(c);function v(a){a.key==="Escape"&&p("escapePressed")}return $(D,a=>{a?window.addEventListener("keydown",v):window.removeEventListener("keydown",v)},{immediate:!0}),j(()=>{window.removeEventListener("keydown",v)}),(a,re)=>l(D)?(w(),m("div",H,[n.backdrop?(w(),m("div",J)):g("",!0),u("div",{class:Q(["av-drawer",`av-drawer--${l(P)}`]),role:"dialog","aria-modal":"true","aria-label":n.ariaLabel},[u("div",Z,[u("div",ee,[f(a.$slots,"default",{},void 0,!0)]),U.footer?(w(),m("div",ne,[f(a.$slots,"footer",{},void 0,!0)])):g("",!0)])],10,K)])):g("",!0)}}),h=G(S,[["__scopeId","data-v-2f06b4d1"]]);S.__docgenInfo={exportName:"default",displayName:"AvDrawer",description:"",tags:{},props:[{name:"show",description:"Controls the visibility of the drawer",required:!0,type:{name:"boolean"}},{name:"position",description:"Position of the drawer on the screen",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"width",description:"Width of the drawer panel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'35rem'"}},{name:"backdrop",description:"Whether to show the backdrop overlay, default true",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"padding",description:"Padding inside the drawer content area",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'var(--spacing-md)'"}},{name:"ariaLabel",description:"ARIA label for accessibility",tags:{default:[{description:"'Menu latéral'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Menu latéral'"}}],events:[{name:"escapePressed",description:"Event triggered when escape is pressed."}],slots:[{name:"default",description:"Default slot for main content."},{name:"footer",description:"Footer slot for content under the main scrollable content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/drawers/AvDrawer/AvDrawer.vue"]};const pe={title:"Components/Overlay/Drawers/AvDrawer",component:h,tags:["autodocs"],argTypes:{show:{control:"boolean"},position:{control:"select",options:["left","right"]},width:{control:"text"},backdrop:{control:"boolean"},padding:{control:"text"}},args:{show:!0,position:"right",width:"35rem",backdrop:!0,padding:"var(--spacing-md)"},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Drawers - <code>AvDrawer</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The drawer is a panel that slides in from the edge of the screen, providing additional content or navigation options without leaving the current page.
    This component is designed to display contextual information, actions, or secondary navigation in a non-intrusive way.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvDrawer</code> component offers flexible positioning (left or right), customizable dimensions, and an optional backdrop overlay.
    It provides a clean, accessible way to present supplementary content while maintaining focus on the primary interface.
  </span>
</p>

<p>
  <span class="b2-regular">
    It features smooth animations, proper z-index management, and integrates seamlessly with the design system's styling tokens.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The drawer consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular"><strong>Container:</strong> The main drawer panel that slides in from the specified edge</span></li>
  <li><span class="b2-regular"><strong>Backdrop:</strong> (optional) Semi-transparent overlay that dims the background content</span></li>
  <li><span class="b2-regular"><strong>Content Area:</strong> Flexible content container that accepts any slotted content</span></li>
</ul>

<p><span class="b2-regular">The drawer integrates:</span></p>

<ul>
  <li><span class="b2-regular">Fixed positioning for consistent placement</span></li>
  <li><span class="b2-regular">Conditional backdrop for modal-like behavior</span></li>
  <li><span class="b2-regular">Position-specific styling (left/right rounded corners and shadows)</span></li>
  <li><span class="b2-regular">Responsive width and padding customization</span></li>
</ul>`}}}},d=n=>({components:{AvDrawer:h,AvButton:z},setup(){const e=_(n.show);return{args:n,isDrawerOpen:e,toggleDrawer:()=>{e.value=!e.value},closeDrawer:()=>{e.value=!1}}},template:`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>
      </AvDrawer>
    </div>
  `}),r=d.bind({});r.args={};const t=d.bind({});t.args={position:"left"};const o=d.bind({});o.args={backdrop:!1};const s=d.bind({});s.args={width:"25rem"};const ae=n=>({components:{AvDrawer:h,AvButton:z},setup(){const e=_(n.show);return{args:n,isDrawerOpen:e,toggleDrawer:()=>{e.value=!e.value},closeDrawer:()=>{e.value=!1}}},template:`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>

        <template #footer>
          <div style="display: flex; flex-direction: row; width: 100%; gap: var(--spacing-sm); justify-content: flex-end">
            <AvButton
              label="Exit"
              variant="OUTLINED"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Save"
              variant="FLAT"
              theme="PRIMARY"
              size="sm"
            />
          </div>
        </template>
      </AvDrawer>
    </div>
  `}),i=ae.bind({});i.args={};var A,y,b;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    AvDrawer,
    AvButton
  },
  setup() {
    const isDrawerOpen = ref(args.show);
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };
    const closeDrawer = () => {
      isDrawerOpen.value = false;
    };
    return {
      args,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer
    };
  },
  template: \`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>
      </AvDrawer>
    </div>
  \`
})`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var O,k,x;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    AvDrawer,
    AvButton
  },
  setup() {
    const isDrawerOpen = ref(args.show);
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };
    const closeDrawer = () => {
      isDrawerOpen.value = false;
    };
    return {
      args,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer
    };
  },
  template: \`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>
      </AvDrawer>
    </div>
  \`
})`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var T,B,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvDrawer,
    AvButton
  },
  setup() {
    const isDrawerOpen = ref(args.show);
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };
    const closeDrawer = () => {
      isDrawerOpen.value = false;
    };
    return {
      args,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer
    };
  },
  template: \`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>
      </AvDrawer>
    </div>
  \`
})`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var C,R,N;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    AvDrawer,
    AvButton
  },
  setup() {
    const isDrawerOpen = ref(args.show);
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };
    const closeDrawer = () => {
      isDrawerOpen.value = false;
    };
    return {
      args,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer
    };
  },
  template: \`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>
      </AvDrawer>
    </div>
  \`
})`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var I,L,Y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    AvDrawer,
    AvButton
  },
  setup() {
    const isDrawerOpen = ref(args.show);
    const toggleDrawer = () => {
      isDrawerOpen.value = !isDrawerOpen.value;
    };
    const closeDrawer = () => {
      isDrawerOpen.value = false;
    };
    return {
      args,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer
    };
  },
  template: \`
    <div>
      <AvButton
        label="Toggle Drawer"
        @click="toggleDrawer"
      />
      
      <AvDrawer 
        :show="isDrawerOpen"
        :position="args.position"
        :width="args.width"
        :backdrop="args.backdrop"
        :padding="args.padding"
      >
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <h3 style="margin: 0; color: var(--title);">Drawer Content</h3>
          <p style="margin: 0; color: var(--text1);">
            This is the drawer content area. You can put any content here like navigation, 
            actions, or additional information.
          </p>
          
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <AvButton
              label="Action 1"
              variant="DEFAULT"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Action 2"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
          
          <div style="margin-top: auto; padding-top: 2rem;">
            <AvButton
              label="Close Drawer"
              @click="closeDrawer"
              variant="OUTLINED"
              theme="SECONDARY"
              size="sm"
            />
          </div>
        </div>

        <template #footer>
          <div style="display: flex; flex-direction: row; width: 100%; gap: var(--spacing-sm); justify-content: flex-end">
            <AvButton
              label="Exit"
              variant="OUTLINED"
              theme="PRIMARY"
              size="sm"
            />
            <AvButton
              label="Save"
              variant="FLAT"
              theme="PRIMARY"
              size="sm"
            />
          </div>
        </template>
      </AvDrawer>
    </div>
  \`
})`,...(Y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const ve=["Default","LeftPosition","WithoutBackdrop","CustomWidth","WithFooter"];export{s as CustomWidth,r as Default,t as LeftPosition,i as WithFooter,o as WithoutBackdrop,ve as __namedExportsOrder,pe as default};
