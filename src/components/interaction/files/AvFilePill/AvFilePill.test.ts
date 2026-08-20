import { mount, type VueWrapper } from '@vue/test-utils'
import { expect } from 'vitest'
import { AvIconStub } from '@/components/base/AvIcon/AvIcon.stub'
import AvFilePill, { type AvFilePillProps } from '@/components/interaction/files/AvFilePill/AvFilePill.vue'
import { AvButtonStub } from '@/tests'
import { BddTest } from '@/tests/utils'

const defaultProps: AvFilePillProps = {
  name: 'report.pdf',
  size: 5123456,
  type: 'pdf',
}

function mountWithProps (props: Partial<AvFilePillProps> = {}): VueWrapper<InstanceType<typeof AvFilePill>> {
  return mount<typeof AvFilePill>(AvFilePill, {
    props: { ...defaultProps, ...props },
    global: {
      stubs: {
        AvButton: AvButtonStub,
        AvIcon: AvIconStub,
      },
    },
  })
}

function findButtonByLabel (wrapper: VueWrapper<InstanceType<typeof AvFilePill>>, label: string) {
  return wrapper.findAllComponents(AvButtonStub).find(button => button.props('label') === label)
}

BddTest().given('an AvFilePill with default props', () => {
  BddTest().when('the component is mounted', () => {
    BddTest().then('it should display the file name', () => {
      const wrapper = mountWithProps()
      expect(wrapper.text()).toContain('report.pdf')
    })

    BddTest().then('it should not display the file details', () => {
      const wrapper = mountWithProps()
      expect(wrapper.text()).not.toContain('MB')
    })

    BddTest().then('it should display the delete button', () => {
      const wrapper = mountWithProps()
      expect(findButtonByLabel(wrapper, 'Delete report.pdf')).toBeDefined()
    })

    BddTest().then('it should not display the download button', () => {
      const wrapper = mountWithProps()
      expect(findButtonByLabel(wrapper, 'Download report.pdf')).toBeUndefined()
    })
  })
})

BddTest().given('an AvFilePill with showDetails enabled', () => {
  BddTest().when('both the type and the size are provided', () => {
    BddTest().then('it should display the uppercase type and the formatted size', () => {
      const wrapper = mountWithProps({ showDetails: true })
      expect(wrapper.text()).toContain('PDF · 4.89 MB')
    })
  })

  BddTest().when('only the type is provided', () => {
    BddTest().then('it should display the type alone', () => {
      const wrapper = mountWithProps({ size: undefined, showDetails: true })
      expect(wrapper.text()).toContain('PDF')
      expect(wrapper.text()).not.toContain('·')
    })
  })

  BddTest().when('neither the type nor the size is provided', () => {
    BddTest().then('it should not display the details', () => {
      const wrapper = mountWithProps({ size: undefined, type: undefined, showDetails: true })
      expect(wrapper.find('.caption-light').exists()).toBe(false)
    })
  })

  BddTest().when('the size is zero', () => {
    BddTest().then('it should not display the size', () => {
      const wrapper = mountWithProps({ size: 0, type: undefined, showDetails: true })
      expect(wrapper.find('.caption-light').exists()).toBe(false)
    })
  })
})

BddTest().given('an AvFilePill with the action props', () => {
  BddTest().when('deletable is false', () => {
    BddTest().then('it should not display the delete button', () => {
      const wrapper = mountWithProps({ deletable: false })
      expect(findButtonByLabel(wrapper, 'Delete report.pdf')).toBeUndefined()
    })
  })

  BddTest().when('downloadable is true', () => {
    BddTest().then('it should display the download button', () => {
      const wrapper = mountWithProps({ downloadable: true })
      expect(findButtonByLabel(wrapper, 'Download report.pdf')).toBeDefined()
    })
  })
})

BddTest().given('an AvFilePill emitting its events', () => {
  BddTest().when('an id is provided and the delete button is clicked', () => {
    BddTest().then('it should emit delete with the provided id', async () => {
      const wrapper = mountWithProps({ id: 'pill-1' })
      await findButtonByLabel(wrapper, 'Delete report.pdf')?.trigger('click')

      expect(wrapper.emitted('delete')?.[0]).toEqual(['pill-1'])
    })
  })

  BddTest().when('an id is provided and the download button is clicked', () => {
    BddTest().then('it should emit download with the provided id', async () => {
      const wrapper = mountWithProps({ id: 'pill-1', downloadable: true })
      await findButtonByLabel(wrapper, 'Download report.pdf')?.trigger('click')

      expect(wrapper.emitted('download')?.[0]).toEqual(['pill-1'])
    })
  })

  BddTest().when('no id is provided', () => {
    BddTest().then('it should emit a generated id', async () => {
      const wrapper = mountWithProps()
      await findButtonByLabel(wrapper, 'Delete report.pdf')?.trigger('click')

      expect(wrapper.emitted('delete')?.[0]?.[0] as string).toMatch(/^file-pill-/)
    })
  })
})
