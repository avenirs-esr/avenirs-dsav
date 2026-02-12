import type { Meta, StoryFn } from '@storybook/vue3'
import { AvIcon } from '@/components/base'
import { cuidaIcons, dataUrlIcons, eosIcons, fluentIcons, mdiIcons, riIcons } from '@/utils/storybook'

const meta: Meta = {
  title: 'Foundations/3. DSAV icons',
}

export default meta

const template = `
  <div style="display: flex; flex-wrap: wrap; gap: var(--spacing-sm);">
    <div 
      v-for="[key, icon] in icons" 
      :key="key" 
      style="display: flex; flex-direction: column; align-items: center; width: 10rem; word-break: break-word; text-align: center;"
    >
      <AvIcon :name="icon" :size="2" color="var(--icon)" />
      <span style="font-size: 0.75rem; text-align: center;">{{ key }}</span>
    </div>
  </div>
`

export const AllIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    const icons = [...cuidaIcons, ...eosIcons, ...mdiIcons, ...riIcons, ...dataUrlIcons]
    return { icons }
  },
  template,
})

export const CuidaIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    return { icons: cuidaIcons }
  },
  template,
})

export const EosIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    return { icons: eosIcons }
  },
  template,
})

export const FluentIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    return { icons: fluentIcons }
  },
  template,
})

export const MdiIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    return { icons: mdiIcons }
  },
  template,
})

export const RiIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    return { icons: riIcons }
  },
  template,
})

export const DataUrlIcons: StoryFn = () => ({
  components: { AvIcon },
  setup () {
    return { icons: dataUrlIcons }
  },
  template,
})
