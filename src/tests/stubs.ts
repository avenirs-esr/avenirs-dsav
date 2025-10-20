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

export const DsfrTagStub = defineComponent({
  name: 'DsfrTag',
  template: `<div class="dsfr-tag" />`,
  props: [
    'label',
    'link',
    'tagName',
    'icon',
    'disabled',
    'small',
    'iconOnly',
    'selectable',
    'selected',
    'value'
  ]
})

export const VIconStub = defineComponent({
  name: 'VIcon',
  props: ['name', 'size', 'color'],
  template: '<div class="v-icon-stub"></div>'
})
