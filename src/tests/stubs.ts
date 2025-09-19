import type { DsfrNavigationProps } from '@gouvminint/vue-dsfr'

export const DsfrBadgeStub = {
  name: 'DsfrBadge',
  template: `<div class="dsfr-badge" />`,
  props: ['label', 'type', 'small', 'ellipsis']
}

export const DsfrModalStub = {
  name: 'DsfrModal',
  props: ['opened', 'title'],
  template: `<div class="dsfr-modal"><slot /><slot name="footer" /></div>`,
  emits: ['keydown'],
  methods: {
    triggerEscape (this: { $emit: (event: string, payload?: any) => void }) {
      this.$emit('keydown', { key: 'Escape' })
    }
  }
}

export const DsfrNavigationStub = {
  name: 'DsfrNavigation',
  props: {
    navItems: Array<DsfrNavigationProps['navItems']>,
  },
  template: '<nav class="dsfr-navigation-mock"><slot /></nav>',
}

export const VIconStub = {
  name: 'VIcon',
  props: ['name', 'size', 'color'],
  template: '<div class="v-icon-stub"></div>'
}
