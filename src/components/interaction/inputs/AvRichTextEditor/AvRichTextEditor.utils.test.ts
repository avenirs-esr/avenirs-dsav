import { expect } from 'vitest'
import { getToolbarButtonProps } from '@/components/interaction/inputs/AvRichTextEditor/AvRichTextEditor.utils'
import { BddTest } from '@/tests'

BddTest().given('a toolbar button props getter', () => {
  BddTest().when('getting its props with default parameters', () => {
    let props: ReturnType<typeof getToolbarButtonProps>

    beforeEach(() => {
      props = getToolbarButtonProps({ id: 'bold' })
    })

    BddTest().then('it should return the default props', () => {
      expect(props).toStrictEqual({
        'iconOnly': true,
        'size': 'LG',
        'disabled': undefined,
        'disabledTooltip': undefined,
        'variant': 'FLAT',
        'data-testid': 'bold-button',
      })
    })
  })

  BddTest().when('getting its props with a custom size', () => {
    (['SM', 'MD', 'LG'] as const).forEach(size => BddTest().and(`the size is ${size}`, () => {
      let props: ReturnType<typeof getToolbarButtonProps>

      beforeEach(() => {
        props = getToolbarButtonProps({
          id: 'bold',
          size,
        })
      })

      BddTest().then('it should use the provided size', () => {
        expect(props.size).toBe(size)
      })
    }))
  })

  BddTest().when('the button is locally disabled', () => {
    let props: ReturnType<typeof getToolbarButtonProps>

    beforeEach(() => {
      props = getToolbarButtonProps({
        id: 'bold',
        localDisabled: true,
        disabledTooltip: 'Toolbar disabled',
      })
    })

    BddTest().then('it should be disabled', () => {
      expect(props.disabled).toBe(true)
    })

    BddTest().then('the variant should be DEFAULT', () => {
      expect(props.variant).toBe('DEFAULT')
    })

    BddTest().then('it should not expose the disabled tooltip', () => {
      expect(props.disabledTooltip).toBeUndefined()
    })
  })

  BddTest().when('the toolbar is globally disabled', () => {
    let props: ReturnType<typeof getToolbarButtonProps>

    beforeEach(() => {
      props = getToolbarButtonProps({
        id: 'bold',
        disabled: true,
        disabledTooltip: 'Toolbar disabled',
      })
    })

    BddTest().then('it should disable the button', () => {
      expect(props.disabled).toBe(true)
    })

    BddTest().then('the variant should be DEFAULT', () => {
      expect(props.variant).toBe('DEFAULT')
    })

    BddTest().then('it should expose the disabled tooltip', () => {
      expect(props.disabledTooltip).toBe('Toolbar disabled')
    })
  })

  BddTest().when('the toolbar is loading', () => {
    let props: ReturnType<typeof getToolbarButtonProps>

    beforeEach(() => {
      props = getToolbarButtonProps({
        id: 'bold',
        isLoading: true,
        disabledTooltip: 'Toolbar disabled',
      })
    })

    BddTest().then('it should disable the button', () => {
      expect(props.disabled).toBe(true)
    })

    BddTest().then('the variant should be DEFAULT', () => {
      expect(props.variant).toBe('DEFAULT')
    })

    BddTest().then('it should not expose the disabled tooltip', () => {
      expect(props.disabledTooltip).toBeUndefined()
    })
  })

  BddTest().when('the toolbar is globally disabled and the button is locally disabled', () => {
    let props: ReturnType<typeof getToolbarButtonProps>

    beforeEach(() => {
      props = getToolbarButtonProps({
        id: 'bold',
        localDisabled: true,
        disabled: true,
        disabledTooltip: 'Toolbar disabled',
      })
    })

    BddTest().then('it should disable the button', () => {
      expect(props.disabled).toBe(true)
    })

    BddTest().then('it should expose the disabled tooltip', () => {
      expect(props.disabledTooltip).toBe('Toolbar disabled')
    })
  })

  BddTest().when('getting props for a button with a custom id', () => {
    let props: ReturnType<typeof getToolbarButtonProps>

    beforeEach(() => {
      props = getToolbarButtonProps({ id: 'insert-image' })
    })

    BddTest().then('it should generate the corresponding test id', () => {
      expect(props['data-testid']).toBe('insert-image-button')
    })
  })
})
