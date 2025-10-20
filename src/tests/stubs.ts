import type { DsfrNavigationProps } from '@gouvminint/vue-dsfr'

export const DsfrBreadcrumbStub = defineComponent({
  name: 'DsfrBreadcrumb',
  template: `<div class="dsfr-breadcrumb" />`,
  props: ['links', 'navigationLabel', 'showBreadcrumbLabel']
})

export const DsfrModalStub = defineComponent({
  name: 'DsfrModal',
  props: ['opened', 'title'],
  template: `<div class="dsfr-modal"><slot /><slot name="footer" /></div>`,
  emits: ['keydown'],
  methods: {
    triggerEscape (this: { $emit: (event: string, payload?: any) => void }) {
      this.$emit('keydown', { key: 'Escape' })
    }
  }
})

export const DsfrNavigationStub = defineComponent({
  name: 'DsfrNavigation',
  props: {
    navItems: Array<DsfrNavigationProps['navItems']>,
  },
  template: '<nav class="dsfr-navigation-mock"><slot /></nav>',
})
