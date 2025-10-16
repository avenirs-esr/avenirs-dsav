/// <reference types="vitest/globals" />
import { type ComponentMountingOptions, mount, RouterLinkStub, type VueWrapper } from '@vue/test-utils'
import { type Component, createApp } from 'vue'

/**
 * Function allowing developpers to use a common BDD format for tests
 * @returns given (describe), when (describe) and then (it)
 */
export function BddTest () {
  return {
    given (description: string, fn: () => void) {
      describe(`🔵 GIVEN ${description}`, fn)
      return this
    },
    when (description: string, fn: () => void) {
      describe(`🔶 WHEN ${description}`, fn)
      return this
    },
    and (description: string, fn: () => void) {
      describe(`➕ AND ${description}`, fn)
      return this
    },
    then (description: string, fn: () => void) {
      it(`🟩 THEN ${description}`, fn)
      return this
    },
  }
}

export function mountComposable<T> (fn: () => T): { result: T, unmount: () => void } {
  let composableResult: T | undefined
  const app = createApp({
    setup () {
      composableResult = fn()
      return () => null
    }
  })
  app.mount(document.createElement('div'))

  return {
    result: composableResult as T,
    unmount: () => app.unmount()
  }
}

/**
 * Mounts a Vue component with a mock router for testing.
 *
 * This function uses Vue Test Utils to mount the component by injecting
 * stubs for `RouterLink` and `RouterView` to simulate the router behavior
 * without launching a real instance.
 *
 * @template T
 * @param {Component} component - Vue component to mount.
 * @param {ComponentMountingOptions<T>} [options] - Additional options for mounting the component.
 * @returns {Promise<VueWrapper<InstanceType<any>>>} the function  return any as type because ts type is too complicated.
 */
export async function mountWithRouter<T> (component: Component, options?: ComponentMountingOptions<T>): Promise<VueWrapper<InstanceType<any>>> {
  const wrapper = mount(component, {
    ...options,
    global: {
      ...(options?.global ?? {}),
      stubs: {
        RouterLink: RouterLinkStub,
        RouterView: {
          name: 'RouterView',
          template: '<div class="router-view-stub"><slot /></div>'
        },
        ...(options?.global?.stubs ?? {})
      },
    },
  })

  await wrapper.vm.$nextTick()
  return wrapper
}
