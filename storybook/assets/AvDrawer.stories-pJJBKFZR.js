import{A as L}from"./AvButton-DfwZWtgy.js";import{d as M,V,X as W,b as p,f as g,e as v,a as D,Q as q,n as $,B as m,C as j,i as u,r as z}from"./iframe-R8FOEziV.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-dsfr-BAvT4AfM.js";import"./icons-DLnh1uvi.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const Q={key:0},X={key:0,class:"av-drawer-backdrop"},G=["aria-label"],H={class:"av-drawer__content-wrapper"},J={class:"av-drawer__content"},Z={key:0,class:"footer-container"},S=M({__name:"AvDrawer",props:{show:{type:Boolean},position:{default:"right"},width:{default:"35rem"},backdrop:{type:Boolean,default:!0},padding:{default:"var(--spacing-md)"},ariaLabel:{default:"Menu latéral"}},emits:["escapePressed"],setup(n,{emit:e}){j(c=>({b9426bca:m(P),v7249d1b4:m(F)}));const l=n,d=e,U=V(),{position:_,width:P,padding:F}=W(l);return(c,h)=>n.show?(u(),p("div",Q,[n.backdrop?(u(),p("div",X)):g("",!0),v("div",{class:$(["av-drawer",`av-drawer--${m(_)}`]),role:"dialog","aria-modal":"true","aria-label":n.ariaLabel,onKeydown:h[0]||(h[0]=q(ne=>d("escapePressed"),["esc"]))},[v("div",H,[v("div",J,[D(c.$slots,"default",{},void 0,!0)]),U.footer?(u(),p("div",Z,[D(c.$slots,"footer",{},void 0,!0)])):g("",!0)])],42,G)])):g("",!0)}}),w=K(S,[["__scopeId","data-v-4b1b7481"]]);S.__docgenInfo={exportName:"default",displayName:"AvDrawer",description:"",tags:{},props:[{name:"show",description:"Controls the visibility of the drawer",required:!0,type:{name:"boolean"}},{name:"position",description:"Position of the drawer on the screen",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"width",description:"Width of the drawer panel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'35rem'"}},{name:"backdrop",description:"Whether to show the backdrop overlay, default true",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"padding",description:"Padding inside the drawer content area",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'var(--spacing-md)'"}},{name:"ariaLabel",description:"ARIA label for accessibility",tags:{default:[{description:"'Menu latéral'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Menu latéral'"}}],events:[{name:"escapePressed",description:"Event triggered when escape is pressed."}],slots:[{name:"default",description:"Default slot for main content."},{name:"footer",description:"Footer slot for content under the main scrollable content."}],sourceFiles:["/home/runner/work/avenirs-dsav/avenirs-dsav/src/components/overlay/drawers/AvDrawer/AvDrawer.vue"]};const de={title:"Components/Overlay/Drawers/AvDrawer",component:w,tags:["autodocs"],argTypes:{show:{control:"boolean"},position:{control:"select",options:["left","right"]},width:{control:"text"},backdrop:{control:"boolean"},padding:{control:"text"}},args:{show:!0,position:"right",width:"35rem",backdrop:!0,padding:"var(--spacing-md)"},parameters:{docs:{story:{height:"20rem"},description:{component:`<h1 class="n1">Drawers - <code>AvDrawer</code></h1>

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
</ul>`}}}},i=n=>({components:{AvDrawer:w,AvButton:L},setup(){const e=z(n.show);return{args:n,isDrawerOpen:e,toggleDrawer:()=>{e.value=!e.value},closeDrawer:()=>{e.value=!1}}},template:`
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
  `}),a=i.bind({});a.args={};const r=i.bind({});r.args={position:"left"};const t=i.bind({});t.args={backdrop:!1};const o=i.bind({});o.args={width:"25rem"};const ee=n=>({components:{AvDrawer:w,AvButton:L},setup(){const e=z(n.show);return{args:n,isDrawerOpen:e,toggleDrawer:()=>{e.value=!e.value},closeDrawer:()=>{e.value=!1}}},template:`
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
  `}),s=ee.bind({});s.args={};var f,A,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var y,O,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(k=(O=r.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var x,T,B;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
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
})`,...(B=(T=t.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var E,C,R;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
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
})`,...(R=(C=o.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var N,I,Y;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(Y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};const ce=["Default","LeftPosition","WithoutBackdrop","CustomWidth","WithFooter"];export{o as CustomWidth,a as Default,r as LeftPosition,s as WithFooter,t as WithoutBackdrop,ce as __namedExportsOrder,de as default};
