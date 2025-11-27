import{A as x}from"./AvButton-DKNbl8tM.js";import{A as l}from"./AvDrawer-oJkMrEWq.js";import{r as T}from"./iframe-Brfx2YmW.js";import"./AvIcon-49-Fyb5m.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./icons-BZJLfc_p.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const U={title:"Components/Overlay/Drawers/AvDrawer",component:l,tags:["autodocs"],argTypes:{show:{control:"boolean"},position:{control:"select",options:["left","right"]},width:{control:"text"},backdrop:{control:"boolean"},padding:{control:"text"}},args:{show:!0,position:"right",width:"35rem",backdrop:!0,padding:"var(--spacing-md)"},parameters:{docs:{story:{height:"25rem"},description:{component:`<h1 class="n1">Drawers - <code>AvDrawer</code></h1>

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
  <li><span class="b2-regular">the <strong>Container:</strong> The main drawer panel that slides in from the specified edge</span></li>
  <li><span class="b2-regular">the <strong>Backdrop:</strong> (optional) Semi-transparent overlay that dims the background content</span></li>
  <li><span class="b2-regular">the <strong>Content Area:</strong> Flexible content container that accepts any slotted content</span></li>
</ul>

<p><span class="b2-regular">The drawer integrates:</span></p>

<ul>
  <li><span class="b2-regular">Fixed positioning for consistent placement</span></li>
  <li><span class="b2-regular">Conditional backdrop for modal-like behavior</span></li>
  <li><span class="b2-regular">Position-specific styling (left/right rounded corners and shadows)</span></li>
  <li><span class="b2-regular">Responsive width and padding customization</span></li>
</ul>`}}}},s=e=>({components:{AvDrawer:l,AvButton:x},setup(){const n=T(e.show);return{args:e,isDrawerOpen:n,toggleDrawer:()=>{n.value=!n.value},closeDrawer:()=>{n.value=!1}}},template:`
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
  `}),a=s.bind({});a.args={};const r=s.bind({});r.args={position:"left"};const t=s.bind({});t.args={backdrop:!1};const o=s.bind({});o.args={width:"25rem"};const E=e=>({components:{AvDrawer:l,AvButton:x},setup(){const n=T(e.show);return{args:e,isDrawerOpen:n,toggleDrawer:()=>{n.value=!n.value},closeDrawer:()=>{n.value=!1}}},template:`
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
  `}),i=E.bind({});i.args={};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
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
})`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,v,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var w,u,D;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
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
})`,...(D=(u=t.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var h,A,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
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
})`,...(f=(A=o.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var y,b,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(O=(b=i.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const F=["Default","LeftPosition","WithoutBackdrop","CustomWidth","WithFooter"];export{o as CustomWidth,a as Default,r as LeftPosition,i as WithFooter,t as WithoutBackdrop,F as __namedExportsOrder,U as default};
