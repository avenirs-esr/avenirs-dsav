import{A as m}from"./AvSideMenu-CgKKH5F4.js";import{M as s}from"./icons-Dhnjf_1A.js";import{r as g,w as C}from"./iframe-CpBrsSaD.js";import"./AvButton-DAKlcItD.js";import"./AvIcon-Dqbvzx2U.js";import"./icon-path-u9rVYwcY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./string-BZgCOP9D.js";import"./preload-helper-ILsKNznc.js";const le={title:"Components/Navigation/AvSideMenu",component:m,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},width:{control:"text"},collapsedWidth:{control:"text"},sticky:{control:"boolean"},stickyOffset:{control:"text"}},args:{collapsible:!0,width:"16rem",collapsedWidth:"5rem"},parameters:{docs:{description:{component:`<h1 class="n1">Navigation - <code>AvSideMenu</code></h1>

<h2 class="n2">✨ Introduction</h2>

<p>
  <span class="b2-regular">
    The side-menu component provides a collapsible sidebar container for application navigation.
    It focuses on layout and collapse functionality, allowing you to insert any content via slots
    while maintaining full accessibility and keyboard navigation support.
  </span>
</p>

<p>
  <span class="b2-regular">
    The <code>AvSideMenu</code> component offers flexible configuration options including
    optional collapsible behavior, customizable widths, and responsive design that adapts to different screen sizes.
  </span>
</p>

<p>
  <span class="b2-regular">
    It features smooth transitions, proper focus management, and screen reader support while maintaining
    visual consistency with the design system's styling tokens.
  </span>
</p>

<h2 class="n2">🏗️ Structure</h2>

<p><span class="b2-regular">The side-menu component consists of the following elements:</span></p>

<ul>
  <li><span class="b2-regular">the <strong>Header:</strong> (optional) Contains the collapse/expand toggle button when collapsible=true</span></li>
  <li><span class="b2-regular">the <strong>Toggle Button:</strong> (optional) Interactive button to collapse/expand the menu</span></li>
  <li><span class="b2-regular">the <strong>Content Area:</strong> Scrollable area for your custom content via default slot</span></li>
</ul>

<p><span class="b2-regular">The side-menu integrates:</span></p>

<ul>
  <li><span class="b2-regular">Optional collapsible behavior with smooth transitions</span></li>
  <li><span class="b2-regular">Accessibility attributes and keyboard navigation</span></li>
  <li><span class="b2-regular">Responsive design with customizable widths</span></li>
  <li><span class="b2-regular">Flexible content via slots</span></li>
</ul>`}}}},u=e=>({components:{AvSideMenu:m},setup(){const a=g(e.collapsed??!1);return C(()=>e.collapsed,n=>{a.value=n??!1}),{args:e,isCollapsed:a,handleCollapseChange:n=>{a.value=n},MDI_ICONS:s}},template:`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu 
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--text1);">Navigation</h3>
          </div>
          
          <nav style="flex: 1;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                 <a href="#" aria-label="Home" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); background-color: var(--dark-background-primary1); color: white;">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Home</span>
              </a>
                 <a href="#" aria-label="Profile" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 8V10H6V16C6 17.1 6.9 18 8 18H10V22H12V18H14V22H16V18H18C19.1 18 20 17.1 20 16V10H21V9Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profile</span>
              </a>
                 <a href="#" aria-label="Settings" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>AvSideMenu with defineModel</h3>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p><strong>Collapsible:</strong> {{ args.collapsible }}</p>
        <p>This component uses defineModel for automatic internal state management. It works both with and without v-model.</p>
      </div>
    </div>
  `}),o=u.bind({});o.args={};const t=u.bind({});t.args={collapsed:!0};const r=u.bind({});r.args={collapsed:!0,hideContentWhenCollapsed:!0};const d=u.bind({});d.args={collapsible:!1};const p=u.bind({});p.args={width:"20rem",collapsedWidth:"3rem"};const D=e=>({components:{AvSideMenu:m},setup(){const a=g(e.collapsed??!1),l=g("/");C(()=>e.collapsed,i=>{a.value=i??!1});const n=[{path:"/",label:"Mon parcours",icon:s.HOME_VARIANT_OUTLINE},{path:"/formations",label:"Mes formations",icon:s.BOOK_LOCATION_OUTLINE},{path:"/experiences",label:"Mes expériences",icon:s.BRIEFCASE_VARIANT_OUTLINE},{path:"/activities",label:"Mes activités",icon:s.STAR_SHOOTING_OUTLINE}];return{args:e,isCollapsed:a,activeRoute:l,navigationItems:n,handleCollapseChange:i=>{a.value=i},setActiveRoute:i=>{l.value=i}}},template:`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="padding: 1rem; border-bottom: 1px solid var(--divider);">
            <h2 style="margin: 0; color: var(--text1); font-size: 1.125rem;">Cofolio Étudiant</h2>
          </div>
          
          <nav style="flex: 1; padding: 1rem;">
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <a 
                v-for="item in navigationItems" 
                :key="item.path"
                href="#"
                @click.prevent="setActiveRoute(item.path)"
                style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); transition: all 0.2s ease;"
                :style="{ 
                  backgroundColor: activeRoute === item.path ? 'var(--dark-background-primary1)' : 'transparent',
                  color: activeRoute === item.path ? 'white' : 'var(--text1)'
                }"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;">
                  <path fill="currentColor" :d="getIconPath(item.icon)"/>
                </svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ item.label }}</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>Student Navigation Example</h3>
        <p><strong>Active route:</strong> {{ activeRoute }}</p>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p>This demonstrates a realistic student navigation with multiple items, active states, and proper responsive behavior.</p>
      </div>
    </div>
  `,methods:{getIconPath(a){const l={[s.HOME_VARIANT_OUTLINE]:"M9 14h6v7h5v-8h3L12 3 2 12h3v9h4z",[s.BOOK_LOCATION_OUTLINE]:"M19 2L13 8l6 6 5-6-5-6zM9 4c0-1.11-.89-2-2-2S5 2.89 5 4s.89 2 2 2 2-.89 2-2zm9 13c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2z",[s.BRIEFCASE_VARIANT_OUTLINE]:"M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm4 4V4h-4v2h4zm6 3H4v10h16V9z",[s.STAR_SHOOTING_OUTLINE]:"M14.84 13.5l-1.91 1.91L12 16.34l-.93-.93-1.91-1.91L7.34 12l1.82-1.82L12 8.34l2.84 2.84L16.66 12l-1.82 1.5z"};return l[a]||l[s.HOME_VARIANT_OUTLINE]}}}),v=D.bind({});v.args={};const W=e=>({components:{AvSideMenu:m},setup(){const a=g(e.collapsed??!1);return C(()=>e.collapsed,l=>{a.value=l??!1}),{args:e,isCollapsed:a}},template:`
    <div style="height: 400px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu
        v-bind="args"
        v-model:collapsed="isCollapsed"
      >
        <div style="padding: 1rem;">
          <p style="margin: 0; color: var(--text2); font-size: 0.875rem;">
            {{ isCollapsed ? '📁' : 'Custom content goes here' }}
          </p>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background); display: flex; align-items: center; justify-content: center;">
        <p style="color: var(--text2);">Minimal example with custom content</p>
      </div>
    </div>
  `}),c=W.bind({});c.args={};const F=e=>({components:{AvSideMenu:m},setup(){const a=g(e.collapsed??!1);return C(()=>e.collapsed,l=>{a.value=l??!1}),{args:e,isCollapsed:a}},template:`
    <div style="height: 500px; display: flex; overflow-y: auto; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu
        v-bind="args"
        v-model:collapsed="isCollapsed"
      >
        <div style="padding: 1rem;">
          <p style="margin: 0; color: var(--text2); font-size: 0.875rem;">
            This side-menu is sticky and will remain visible while scrolling.
          </p>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; min-height: 1200px; background-color: var(--surface-background);">
        <h3>Sticky Side Menu</h3>
        <p>Scroll this container to see the sticky behavior in action.</p>
      </div>
    </div>
  `}),h=F.bind({});h.args={sticky:!0,stickyOffset:"0"};var f,x,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    const handleCollapseChange = (collapsed: boolean) => {
      isCollapsed.value = collapsed;
    };
    return {
      args,
      isCollapsed,
      handleCollapseChange,
      MDI_ICONS
    };
  },
  template: \`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu 
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--text1);">Navigation</h3>
          </div>
          
          <nav style="flex: 1;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                 <a href="#" aria-label="Home" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); background-color: var(--dark-background-primary1); color: white;">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Home</span>
              </a>
                 <a href="#" aria-label="Profile" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 8V10H6V16C6 17.1 6.9 18 8 18H10V22H12V18H14V22H16V18H18C19.1 18 20 17.1 20 16V10H21V9Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profile</span>
              </a>
                 <a href="#" aria-label="Settings" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>AvSideMenu with defineModel</h3>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p><strong>Collapsible:</strong> {{ args.collapsible }}</p>
        <p>This component uses defineModel for automatic internal state management. It works both with and without v-model.</p>
      </div>
    </div>
  \`
})`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,w,L;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    const handleCollapseChange = (collapsed: boolean) => {
      isCollapsed.value = collapsed;
    };
    return {
      args,
      isCollapsed,
      handleCollapseChange,
      MDI_ICONS
    };
  },
  template: \`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu 
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--text1);">Navigation</h3>
          </div>
          
          <nav style="flex: 1;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                 <a href="#" aria-label="Home" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); background-color: var(--dark-background-primary1); color: white;">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Home</span>
              </a>
                 <a href="#" aria-label="Profile" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 8V10H6V16C6 17.1 6.9 18 8 18H10V22H12V18H14V22H16V18H18C19.1 18 20 17.1 20 16V10H21V9Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profile</span>
              </a>
                 <a href="#" aria-label="Settings" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>AvSideMenu with defineModel</h3>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p><strong>Collapsible:</strong> {{ args.collapsible }}</p>
        <p>This component uses defineModel for automatic internal state management. It works both with and without v-model.</p>
      </div>
    </div>
  \`
})`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var M,S,A;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    const handleCollapseChange = (collapsed: boolean) => {
      isCollapsed.value = collapsed;
    };
    return {
      args,
      isCollapsed,
      handleCollapseChange,
      MDI_ICONS
    };
  },
  template: \`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu 
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--text1);">Navigation</h3>
          </div>
          
          <nav style="flex: 1;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                 <a href="#" aria-label="Home" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); background-color: var(--dark-background-primary1); color: white;">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Home</span>
              </a>
                 <a href="#" aria-label="Profile" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 8V10H6V16C6 17.1 6.9 18 8 18H10V22H12V18H14V22H16V18H18C19.1 18 20 17.1 20 16V10H21V9Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profile</span>
              </a>
                 <a href="#" aria-label="Settings" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>AvSideMenu with defineModel</h3>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p><strong>Collapsible:</strong> {{ args.collapsible }}</p>
        <p>This component uses defineModel for automatic internal state management. It works both with and without v-model.</p>
      </div>
    </div>
  \`
})`,...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var k,I,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    const handleCollapseChange = (collapsed: boolean) => {
      isCollapsed.value = collapsed;
    };
    return {
      args,
      isCollapsed,
      handleCollapseChange,
      MDI_ICONS
    };
  },
  template: \`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu 
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--text1);">Navigation</h3>
          </div>
          
          <nav style="flex: 1;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                 <a href="#" aria-label="Home" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); background-color: var(--dark-background-primary1); color: white;">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Home</span>
              </a>
                 <a href="#" aria-label="Profile" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 8V10H6V16C6 17.1 6.9 18 8 18H10V22H12V18H14V22H16V18H18C19.1 18 20 17.1 20 16V10H21V9Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profile</span>
              </a>
                 <a href="#" aria-label="Settings" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>AvSideMenu with defineModel</h3>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p><strong>Collapsible:</strong> {{ args.collapsible }}</p>
        <p>This component uses defineModel for automatic internal state management. It works both with and without v-model.</p>
      </div>
    </div>
  \`
})`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var H,N,O;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    const handleCollapseChange = (collapsed: boolean) => {
      isCollapsed.value = collapsed;
    };
    return {
      args,
      isCollapsed,
      handleCollapseChange,
      MDI_ICONS
    };
  },
  template: \`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu 
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="padding: 1rem; height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="margin-bottom: 1rem;">
            <h3 style="margin: 0; color: var(--text1);">Navigation</h3>
          </div>
          
          <nav style="flex: 1;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                 <a href="#" aria-label="Home" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); background-color: var(--dark-background-primary1); color: white;">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Home</span>
              </a>
                 <a href="#" aria-label="Profile" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 8V10H6V16C6 17.1 6.9 18 8 18H10V22H12V18H14V22H16V18H18C19.1 18 20 17.1 20 16V10H21V9Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profile</span>
              </a>
                 <a href="#" aria-label="Settings" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md);">
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;"><path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>AvSideMenu with defineModel</h3>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p><strong>Collapsible:</strong> {{ args.collapsible }}</p>
        <p>This component uses defineModel for automatic internal state management. It works both with and without v-model.</p>
      </div>
    </div>
  \`
})`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,_,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    const activeRoute = ref('/');
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    const navigationItems = [{
      path: '/',
      label: 'Mon parcours',
      icon: MDI_ICONS.HOME_VARIANT_OUTLINE
    }, {
      path: '/formations',
      label: 'Mes formations',
      icon: MDI_ICONS.BOOK_LOCATION_OUTLINE
    }, {
      path: '/experiences',
      label: 'Mes expériences',
      icon: MDI_ICONS.BRIEFCASE_VARIANT_OUTLINE
    }, {
      path: '/activities',
      label: 'Mes activités',
      icon: MDI_ICONS.STAR_SHOOTING_OUTLINE
    }];
    const handleCollapseChange = (collapsed: boolean) => {
      isCollapsed.value = collapsed;
    };
    const setActiveRoute = (path: string) => {
      activeRoute.value = path;
    };
    return {
      args,
      isCollapsed,
      activeRoute,
      navigationItems,
      handleCollapseChange,
      setActiveRoute
    };
  },
  template: \`
    <div style="height: 600px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu
        v-bind="args"
        v-model:collapsed="isCollapsed"
        @update:collapsed="handleCollapseChange"
      >
        <div style="height: 100%; display: flex; flex-direction: column;">
          <div v-if="!isCollapsed" style="padding: 1rem; border-bottom: 1px solid var(--divider);">
            <h2 style="margin: 0; color: var(--text1); font-size: 1.125rem;">Cofolio Étudiant</h2>
          </div>
          
          <nav style="flex: 1; padding: 1rem;">
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <a 
                v-for="item in navigationItems" 
                :key="item.path"
                href="#"
                @click.prevent="setActiveRoute(item.path)"
                style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; color: var(--text1); text-decoration: none; border-radius: var(--radius-md); transition: all 0.2s ease;"
                :style="{ 
                  backgroundColor: activeRoute === item.path ? 'var(--dark-background-primary1)' : 'transparent',
                  color: activeRoute === item.path ? 'white' : 'var(--text1)'
                }"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" style="flex-shrink: 0;">
                  <path fill="currentColor" :d="getIconPath(item.icon)"/>
                </svg>
                <span v-if="!isCollapsed" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ item.label }}</span>
              </a>
            </div>
          </nav>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background);">
        <h3>Student Navigation Example</h3>
        <p><strong>Active route:</strong> {{ activeRoute }}</p>
        <p><strong>Collapsed:</strong> {{ isCollapsed }}</p>
        <p>This demonstrates a realistic student navigation with multiple items, active states, and proper responsive behavior.</p>
      </div>
    </div>
  \`,
  methods: {
    getIconPath(iconName: string) {
      // Simple icon path mapping for demo
      const iconPaths: Record<string, string> = {
        [MDI_ICONS.HOME_VARIANT_OUTLINE]: 'M9 14h6v7h5v-8h3L12 3 2 12h3v9h4z',
        [MDI_ICONS.BOOK_LOCATION_OUTLINE]: 'M19 2L13 8l6 6 5-6-5-6zM9 4c0-1.11-.89-2-2-2S5 2.89 5 4s.89 2 2 2 2-.89 2-2zm9 13c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2z',
        [MDI_ICONS.BRIEFCASE_VARIANT_OUTLINE]: 'M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm4 4V4h-4v2h4zm6 3H4v10h16V9z',
        [MDI_ICONS.STAR_SHOOTING_OUTLINE]: 'M14.84 13.5l-1.91 1.91L12 16.34l-.93-.93-1.91-1.91L7.34 12l1.82-1.82L12 8.34l2.84 2.84L16.66 12l-1.82 1.5z'
      };
      return iconPaths[iconName] || iconPaths[MDI_ICONS.HOME_VARIANT_OUTLINE];
    }
  }
})`,...(R=(_=v.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var E,z,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    return {
      args,
      isCollapsed
    };
  },
  template: \`
    <div style="height: 400px; display: flex; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu
        v-bind="args"
        v-model:collapsed="isCollapsed"
      >
        <div style="padding: 1rem;">
          <p style="margin: 0; color: var(--text2); font-size: 0.875rem;">
            {{ isCollapsed ? '📁' : 'Custom content goes here' }}
          </p>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; background-color: var(--surface-background); display: flex; align-items: center; justify-content: center;">
        <p style="color: var(--text2);">Minimal example with custom content</p>
      </div>
    </div>
  \`
})`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,U,Z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    AvSideMenu
  },
  setup() {
    const isCollapsed = ref(args.collapsed ?? false);
    watch(() => args.collapsed, value => {
      isCollapsed.value = value ?? false;
    });
    return {
      args,
      isCollapsed
    };
  },
  template: \`
    <div style="height: 500px; display: flex; overflow-y: auto; border: 1px solid var(--divider); border-radius: var(--radius-md);">
      <AvSideMenu
        v-bind="args"
        v-model:collapsed="isCollapsed"
      >
        <div style="padding: 1rem;">
          <p style="margin: 0; color: var(--text2); font-size: 0.875rem;">
            This side-menu is sticky and will remain visible while scrolling.
          </p>
        </div>
      </AvSideMenu>
      
      <div style="flex: 1; padding: 2rem; min-height: 1200px; background-color: var(--surface-background);">
        <h3>Sticky Side Menu</h3>
        <p>Scroll this container to see the sticky behavior in action.</p>
      </div>
    </div>
  \`
})`,...(Z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const se=["Default","Collapsed","HiddenContentCollapsed","NonCollapsible","CustomWidth","StudentNavigation","Minimal","Sticky"];export{t as Collapsed,p as CustomWidth,o as Default,r as HiddenContentCollapsed,c as Minimal,d as NonCollapsible,h as Sticky,v as StudentNavigation,se as __namedExportsOrder,le as default};
