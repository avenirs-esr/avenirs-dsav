import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import { AvMessageStub } from '@/components/base/AvMessage/AvMessage.stub'
import AvFileUpload, { type AvFileUploadProps } from '@/components/interaction/files/AvFileUpload/AvFileUpload.vue'
import { AvTooltipStub } from '@/components/overlay/tooltips/AvTooltip/AvTooltip.stub'
import { BddTest } from '@/tests/utils'

BddTest().given('a file uploader', () => {
  let wrapper: VueWrapper<InstanceType<typeof AvFileUpload>>

  const stubs = {
    AvMessage: AvMessageStub,
    AvTooltip: AvTooltipStub,
  }

  const mountComponent = (props?: Partial<AvFileUploadProps>) => mount<typeof AvFileUpload>(AvFileUpload, {
    props: {
      title: 'Ajouter un document',
      description: 'ou glisser et déposer ici',
      deleteButtonLabel: 'delete',
      ...props,
    },
    global: { stubs },
    slots: {
      default: '<span>Upload a file</span>',
      hint: '<span>Accepted files: .pdf, .jpg</span>',
    },
  })

  beforeEach(() => {
    vi.clearAllMocks()
  })

  BddTest().and('with default props', () => {
    beforeEach(() => {
      wrapper = mountComponent()
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the slot content', () => {
        expect(wrapper.text()).toContain('Ajouter un document')
        expect(wrapper.text()).toContain('ou glisser et déposer ici')
      })
    })
  })

  BddTest().and('disabled with a tooltip message', () => {
    beforeEach(() => {
      wrapper = mountComponent({ disabled: true, disabledTooltip: 'Upload unavailable' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should enable AvTooltip with the disabled message', () => {
        const tooltip = wrapper.findComponent(AvTooltipStub)
        expect(tooltip.props('content')).toBe('Upload unavailable')
        expect(tooltip.props('disabled')).toBe(false)
        expect(tooltip.props('forceFocusable')).toBe(true)
      })
    })
  })

  BddTest().and('with error and validMessage props', () => {
    beforeEach(() => {
      wrapper = mountComponent({ error: 'Error', validMessage: 'Valid file' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the error message and the valid message', () => {
        const avMessages = wrapper.findAllComponents({ name: 'AvMessage' })
        expect(avMessages).toHaveLength(2)
        expect(avMessages[0].props('type')).toBe('success')
        expect(avMessages[0].props('message')).toBe('Valid file')
        expect(avMessages[1].props('type')).toBe('error')
        expect(avMessages[1].props('message')).toBe('Error')
      })
    })
  })

  BddTest().and('with validMessage but no error', () => {
    beforeEach(() => {
      wrapper = mountComponent({ validMessage: 'Valid message' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render the valid message', () => {
        const avMessage = wrapper.findComponent({ name: 'AvMessage' })
        expect(avMessage.exists()).toBe(true)
        expect(avMessage.props('type')).toBe('success')
        expect(avMessage.props('message')).toBe('Valid message')
      })
    })
  })

  BddTest().and('with accept prop as an array', () => {
    beforeEach(() => {
      wrapper = mountComponent({ accept: ['.jpg', '.png', '.webp'] })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should apply correct accept attribute', () => {
        const input = wrapper.find('input[type="file"]')
        expect(input.attributes('accept')).toBe('.jpg,.png,.webp')
      })
    })
  })

  BddTest().and('with change event on input', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' })

    beforeEach(() => {
      wrapper = mountComponent({ accept: ['.png'] })
    })

    BddTest().when('an accepted file is selected', () => {
      BddTest().then('it should emit update:modelValue and change events', async () => {
        const input = wrapper.find('input[type="file"]')
        const files = {
          0: file,
          length: 1,
          item: () => file,
        } as unknown as FileList

        const event = new Event('change')
        Object.defineProperty(event, 'target', {
          value: { value: 'C:\\fakepath\\hello.png', files },
          writable: false,
        })

        await input.element.dispatchEvent(event)

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        const emittedFiles = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emittedFiles[0].name).toBe('hello.png')

        expect(wrapper.emitted('change')).toBeTruthy()
        expect(wrapper.emitted('change')?.[0][0]).toEqual([file])
      })
    })

    BddTest().when('a non accepted file is selected', () => {
      BddTest().then('it should emit acceptTypeError and not emit update:modelValue and change events', async () => {
        const filePdf = new File(['hello'], 'hello.pdf', { type: 'application/pdf' })
        const input = wrapper.find('input[type="file"]')
        const files = {
          0: filePdf,
          length: 1,
          item: () => filePdf,
        } as unknown as FileList

        const event = new Event('change')
        Object.defineProperty(event, 'target', {
          value: { value: 'C:\\fakepath\\hello.pdf', files },
          writable: false,
        })

        await input.element.dispatchEvent(event)

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
        expect(wrapper.emitted('acceptTypeError')).toBeTruthy()
      })
    })

    BddTest().when('an oversized file is selected', () => {
      BddTest().then('it should emit fileSizeError and not emit update:modelValue and change events', async () => {
        const oversizedFile = new File(['hello'], 'hello.png', { type: 'image/png' })
        Object.defineProperty(oversizedFile, 'size', {
          value: 2 * 1024 * 1024,
          configurable: true,
        })

        wrapper = mountComponent({ accept: ['.png'], maxFileSizeMb: 1 })
        const input = wrapper.find('input[type="file"]')
        const files = {
          0: oversizedFile,
          length: 1,
          item: () => oversizedFile,
        } as unknown as FileList

        const event = new Event('change')
        Object.defineProperty(event, 'target', {
          value: { value: 'C:\\fakepath\\hello.png', files },
          writable: false,
        })

        await input.element.dispatchEvent(event)

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
        expect(wrapper.emitted('fileSizeError')).toBeTruthy()
      })
    })
  })

  BddTest().and('with drag & drop', () => {
    const file = new File(['drag'], 'dragged.pdf', { type: 'application/pdf' })

    beforeAll(() => {
      globalThis.DragEvent = class extends Event {
        dataTransfer: DataTransfer | null

        constructor (type: string, eventInitDict?: { dataTransfer?: DataTransfer }) {
          super(type)
          this.dataTransfer = eventInitDict?.dataTransfer ?? null
        }
      } as unknown as typeof DragEvent
    })

    beforeEach(() => {
      wrapper = mountComponent()
    })

    BddTest().when('a file is dropped', () => {
      BddTest().then('it should emit update:modelValue and change events', async () => {
        const label = wrapper.find('label')
        const dataTransfer = { files: [file] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        const emittedFiles = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emittedFiles[0].name).toBe('dragged.pdf')

        expect(wrapper.emitted('change')).toBeTruthy()
        expect(wrapper.emitted('change')?.[0][0]).toEqual(dataTransfer.files)
      })
    })

    BddTest().when('a dragover event occurs', () => {
      BddTest().then('it should add drag-over class', async () => {
        const label = wrapper.find('label')
        await label.trigger('dragover')
        expect(label.classes()).toContain('drag-over')
      })
    })

    BddTest().when('a dragleave event occurs', () => {
      BddTest().then('it should remove drag-over class', async () => {
        const label = wrapper.find('label')

        await label.trigger('dragover')
        expect(label.classes()).toContain('drag-over')

        await label.trigger('dragleave')
        expect(label.classes()).not.toContain('drag-over')
      })
    })
  })

  BddTest().and('with drag & drop with strict accept type', () => {
    const filePdf = new File(['drag'], 'dragged.pdf', { type: 'application/pdf' })
    const fileJpeg = new File(['drag'], 'dragged.jpeg', { type: 'image/jpeg' })
    const filePng = new File(['drag'], 'dragged.png', { type: 'image/png' })

    beforeAll(() => {
      globalThis.DragEvent = class extends Event {
        dataTransfer: DataTransfer | null

        constructor (type: string, eventInitDict?: { dataTransfer?: DataTransfer }) {
          super(type)
          this.dataTransfer = eventInitDict?.dataTransfer ?? null
        }
      } as unknown as typeof DragEvent
    })

    beforeEach(() => {
      wrapper = mountComponent({ accept: ['image/jpeg', '.PNG'] })
    })

    BddTest().when('an accepted file is dropped', () => {
      BddTest().then('it should emit update:modelValue and change events and not emit acceptTypeError', async () => {
        const label = wrapper.find('label')
        const dataTransfer = { files: [fileJpeg] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        const emittedFiles = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emittedFiles[0].name).toBe('dragged.jpeg')

        expect(wrapper.emitted('change')).toBeTruthy()
        expect(wrapper.emitted('change')?.[0][0]).toEqual(dataTransfer.files)

        expect(wrapper.emitted('acceptTypeError')).toBeFalsy()
      })
    })

    BddTest().when('an accepted file is dropped for accepted type starting with "."', () => {
      BddTest().then('it should emit update:modelValue and change events and not emit acceptTypeError', async () => {
        const label = wrapper.find('label')
        const dataTransfer = { files: [filePng] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        const emittedFiles = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emittedFiles[0].name).toBe('dragged.png')

        expect(wrapper.emitted('change')).toBeTruthy()
        expect(wrapper.emitted('change')?.[0][0]).toEqual(dataTransfer.files)

        expect(wrapper.emitted('acceptTypeError')).toBeFalsy()
      })
    })

    BddTest().when('a non accepted file is dropped', () => {
      BddTest().then('it should emit acceptTypeError and not emit update:modelValue and change events', async () => {
        const label = wrapper.find('label')
        const dataTransfer = { files: [filePdf] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
        expect(wrapper.emitted('acceptTypeError')).toBeTruthy()
      })
    })

    BddTest().when('an oversized accepted file is dropped', () => {
      BddTest().then('it should emit fileSizeError and not emit update:modelValue and change events', async () => {
        const oversizedJpeg = new File([new Uint8Array(2 * 1024 * 1024)], 'dragged.jpeg', { type: 'image/jpeg' })

        wrapper = mountComponent({ accept: ['image/jpeg'], maxFileSizeMb: 1 })
        const label = wrapper.find('label')
        const dataTransfer = { files: [oversizedJpeg] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
        expect(wrapper.emitted('fileSizeError')).toBeTruthy()
      })
    })
  })

  BddTest().and('with multiple files and validation limits', () => {
    const makeFile = (name: string, type: string, size = 10) => {
      const f = new File(['x'], name, { type })
      Object.defineProperty(f, 'size', { value: size, configurable: true })
      return f
    }

    const drop = async (files: File[]) => {
      const dataTransfer = { files } as unknown as DataTransfer
      await wrapper.find('label').element.dispatchEvent(new DragEvent('drop', { dataTransfer }))
      await wrapper.vm.$nextTick()
    }

    beforeAll(() => {
      globalThis.DragEvent = class extends Event {
        dataTransfer: DataTransfer | null

        constructor (type: string, eventInitDict?: { dataTransfer?: DataTransfer }) {
          super(type)
          this.dataTransfer = eventInitDict?.dataTransfer ?? null
        }
      } as unknown as typeof DragEvent
    })

    BddTest().when('valid and invalid format files are dropped together', () => {
      BddTest().then('it should keep the valid files and emit acceptTypeError', async () => {
        wrapper = mountComponent({ enableMultiple: true, accept: ['.png'] })
        await drop([makeFile('a.png', 'image/png'), makeFile('b.pdf', 'application/pdf')])

        const emitted = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emitted.map(f => f.name)).toEqual(['a.png'])
        expect(wrapper.emitted('acceptTypeError')).toBeTruthy()
        expect(wrapper.emitted('fileSizeError')).toBeFalsy()
      })
    })

    BddTest().when('valid and oversized files are dropped together', () => {
      BddTest().then('it should keep the valid files and emit fileSizeError', async () => {
        wrapper = mountComponent({ enableMultiple: true, maxFileSizeMb: 1 })
        await drop([makeFile('a.png', 'image/png'), makeFile('big.png', 'image/png', 2 * 1024 * 1024)])

        const emitted = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emitted.map(f => f.name)).toEqual(['a.png'])
        expect(wrapper.emitted('fileSizeError')).toBeTruthy()
        expect(wrapper.emitted('acceptTypeError')).toBeFalsy()
      })
    })

    BddTest().when('maxFileSizeMb is a function returning a limit per file type', () => {
      BddTest().then('it should apply each limit and emit fileSizeError for the exceeding files only', async () => {
        const maxFileSizeMb = (file: File) => file.type.startsWith('video/') ? 10 : 1
        wrapper = mountComponent({ enableMultiple: true, maxFileSizeMb })
        const mb = 1024 * 1024
        await drop([
          makeFile('ok.png', 'image/png', mb / 2),
          makeFile('big.png', 'image/png', 2 * mb),
          makeFile('ok.mp4', 'video/mp4', 5 * mb),
        ])

        const emitted = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emitted.map(f => f.name)).toEqual(['ok.png', 'ok.mp4'])
        expect(wrapper.emitted('fileSizeError')).toBeTruthy()
      })
    })

    BddTest().when('maxFileSizeMb function returns undefined', () => {
      BddTest().then('it should not limit the file size', async () => {
        wrapper = mountComponent({ enableMultiple: true, maxFileSizeMb: () => undefined })
        await drop([makeFile('huge.png', 'image/png', 100 * 1024 * 1024)])

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('fileSizeError')).toBeFalsy()
      })
    })

    BddTest().when('more files than maxFiles are dropped', () => {
      BddTest().then('it should keep files up to the limit and emit maxFilesError', async () => {
        wrapper = mountComponent({ enableMultiple: true, maxFiles: 2 })
        await drop([makeFile('a.png', 'image/png'), makeFile('b.png', 'image/png'), makeFile('c.png', 'image/png')])

        const emitted = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emitted.map(f => f.name)).toEqual(['a.png', 'b.png'])
        expect(wrapper.emitted('maxFilesError')).toBeTruthy()
      })
    })

    BddTest().when('maxFiles is already reached', () => {
      BddTest().then('it should emit maxFilesError and not emit update:modelValue and change', async () => {
        wrapper = mountComponent({
          compact: true,
          enableMultiple: true,
          maxFiles: 1,
          modelValue: [makeFile('a.png', 'image/png')],
        })
        await drop([makeFile('b.png', 'image/png')])

        expect(wrapper.emitted('maxFilesError')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
      })
    })

    BddTest().when('several files are dropped without enableMultiple', () => {
      BddTest().then('it should keep only the first valid file and emit maxFilesError', async () => {
        wrapper = mountComponent()
        await drop([makeFile('a.png', 'image/png'), makeFile('b.png', 'image/png')])

        const emitted = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emitted.map(f => f.name)).toEqual(['a.png'])
        expect(wrapper.emitted('maxFilesError')).toBeTruthy()
      })
    })

    BddTest().when('maxFiles is set without enableMultiple', () => {
      BddTest().then('it should ignore maxFiles', async () => {
        wrapper = mountComponent({ maxFiles: 1 })
        await drop([makeFile('a.png', 'image/png')])

        expect(wrapper.emitted('maxFilesError')).toBeFalsy()
        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      })
    })
  })

  BddTest().and('with drag & drop with wrong accept type', () => {
    const filePdf = new File(['drag'], 'dragged.pdf', { type: 'application/pdf' })

    beforeAll(() => {
      globalThis.DragEvent = class extends Event {
        dataTransfer: DataTransfer | null

        constructor (type: string, eventInitDict?: { dataTransfer?: DataTransfer }) {
          super(type)
          this.dataTransfer = eventInitDict?.dataTransfer ?? null
        }
      } as unknown as typeof DragEvent
    })

    beforeEach(() => {
      wrapper = mountComponent({ accept: ['png'] })
    })

    BddTest().when('a file is dropped', () => {
      BddTest().then('it should emit acceptTypeError and not emit update:modelValue and change events', async () => {
        const label = wrapper.find('label')
        const dataTransfer = { files: [filePdf] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
        expect(wrapper.emitted('acceptTypeError')).toBeTruthy()
      })
    })
  })

  BddTest().given('a disabled file uploader with drag & drop', () => {
    const filePdf = new File(['drag'], 'dragged.pdf', { type: 'application/pdf' })

    beforeAll(() => {
      globalThis.DragEvent = class extends Event {
        dataTransfer: DataTransfer | null

        constructor (type: string, eventInitDict?: { dataTransfer?: DataTransfer }) {
          super(type)
          this.dataTransfer = eventInitDict?.dataTransfer ?? null
        }
      } as unknown as typeof DragEvent
    })

    beforeEach(() => {
      wrapper = mountComponent({ disabled: true })
    })

    BddTest().when('a file is dropped', () => {
      BddTest().then('it should not emit acceptTypeError, update:modelValue and change events', async () => {
        const label = wrapper.find('label')
        const dataTransfer = { files: [filePdf] } as unknown as DataTransfer

        const dropEvent = new DragEvent('drop', { dataTransfer })
        await label.element.dispatchEvent(dropEvent)

        expect(wrapper.emitted('update:modelValue')).toBeFalsy()
        expect(wrapper.emitted('change')).toBeFalsy()
        expect(wrapper.emitted('acceptTypeError')).toBeFalsy()
      })
    })
  })

  BddTest().and('with onClear button', () => {
    beforeEach(() => {
      wrapper = mountComponent({ modelValue: [new File(['test'], 'test.txt')] })
    })

    BddTest().when('clicking on onClear button', () => {
      BddTest().then('it should emit update:modelValue, update:validMessage, and update:error with null', async () => {
        const onClearButton = wrapper.find('.av-button')
        expect(onClearButton.exists()).toBe(true)

        await onClearButton.trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeTruthy()
        expect(wrapper.emitted('update:modelValue')?.[0][0]).toBeNull()

        expect(wrapper.emitted('update:validMessage')).toBeTruthy()
        expect(wrapper.emitted('update:validMessage')?.[0][0]).toBeNull()

        expect(wrapper.emitted('update:error')).toBeTruthy()
        expect(wrapper.emitted('update:error')?.[0][0]).toBeNull()
      })
    })
  })

  BddTest().given('a fileUpload rendering', () => {
    BddTest().when('fileName is set', () => {
      beforeEach(() => {
        wrapper = mountComponent({ fileName: 'file.txt', modelValue: null, deleteButtonLabel: 'delete', title: 'click here', description: 'or drag and drop' })
      })

      BddTest().then('it should render file info template', () => {
        expect(wrapper.html()).toContain('file.txt')
      })
    })

    BddTest().when('modelValue is set (fileName not provided)', () => {
      let file: File

      beforeEach(() => {
        file = new File(['content'], 'file.txt')
        wrapper = mountComponent({ modelValue: [file], fileName: undefined })
      })

      BddTest().then('it should render file info template', () => {
        expect(wrapper.html()).toContain('file.txt')
      })

      BddTest().then('it should render the delete button', () => {
        const deleteBtn = wrapper.find('.av-button')
        expect(deleteBtn.exists()).toBe(true)
      })
    })

    BddTest().when('modelValue is set and component is disabled', () => {
      let file: File

      beforeEach(() => {
        file = new File(['content'], 'file.txt')
        wrapper = mountComponent({ modelValue: [file], disabled: true })
      })

      BddTest().then('it should render file info template', () => {
        expect(wrapper.html()).toContain('file.txt')
      })

      BddTest().then('it should not render the delete button', () => {
        const deleteBtn = wrapper.find('.av-button')
        expect(deleteBtn.exists()).toBe(false)
      })
    })

    BddTest().when('neither fileName nor modelValue is set', () => {
      beforeEach(() => {
        wrapper = mountComponent({ modelValue: null, fileName: undefined })
      })

      BddTest().then('it should render upload input template', () => {
        expect(wrapper.find('input[type="file"]').exists()).toBe(true)
      })
    })
  })

  BddTest().and('with compact variant', () => {
    beforeEach(() => {
      wrapper = mountComponent({ compact: true, title: 'Joindre un/des document(s)', description: '' })
    })

    BddTest().when('the component is mounted', () => {
      BddTest().then('it should render compact layout', () => {
        expect(wrapper.find('.av-compact-upload').exists()).toBe(true)
        expect(wrapper.find('.av-compact-add-pill').exists()).toBe(true)
      })
    })

    BddTest().when('files are provided', () => {
      beforeEach(() => {
        const file1 = new File(['content1'], 'document1.pdf')
        const file2 = new File(['content2'], 'document2.pdf')
        wrapper = mount<typeof AvFileUpload>(AvFileUpload, {
          props: {
            title: 'Ajouter un document',
            description: 'ou glisser et déposer ici',
            deleteButtonLabel: 'delete',
            compact: true,
            enableMultiple: true,
            modelValue: [file1, file2],
            fileName: undefined,
          },
          global: { stubs },
          slots: {
            default: '<span>Upload a file</span>',
            hint: '<span>Accepted files: .pdf, .jpg</span>',
          },
        })
      })

      BddTest().then('it should render file pills', () => {
        expect(wrapper.findAll('.av-file-pill')).toHaveLength(2)
        expect(wrapper.html()).toContain('document1.pdf')
        expect(wrapper.html()).toContain('document2.pdf')
      })

      BddTest().then('each pill should have a delete button', () => {
        const pills = wrapper.findAll('.av-file-pill')
        const deleteButtons = pills.map(p => p.findComponent({ name: 'AvButton' }))
        expect(deleteButtons.every(b => b.exists())).toBe(true)
      })
    })
  })

  BddTest().and('with enableMultiple prop', () => {
    const file1 = new File(['content1'], 'file1.txt')

    beforeEach(() => {
      wrapper = mount<typeof AvFileUpload>(AvFileUpload, {
        props: {
          title: 'Ajouter un document',
          description: 'ou glisser et déposer ici',
          deleteButtonLabel: 'delete',
          enableMultiple: true,
          modelValue: [file1],
        },
        global: { stubs },
        slots: {
          default: '<span>Upload a file</span>',
          hint: '<span>Accepted files: .pdf, .jpg</span>',
        },
      })
    })

    BddTest().when('a single file is in modelValue', () => {
      BddTest().then('it should render the file in preview', () => {
        expect(wrapper.html()).toContain('file1.txt')
      })
    })

    BddTest().when('enableMultiple is true but no files yet', () => {
      beforeEach(() => {
        wrapper = mountComponent({ enableMultiple: true, modelValue: null })
      })

      BddTest().then('it should have the file input visible', () => {
        expect(wrapper.find('input[type="file"]').exists()).toBe(true)
      })

      BddTest().then('adding a file then another should append files to the array', async () => {
        const file1 = new File(['content1'], 'file1.txt')
        const input = wrapper.find('input[type="file"]')
        const files1 = {
          0: file1,
          length: 1,
          item: () => file1,
        } as unknown as FileList

        const event1 = new Event('change')
        Object.defineProperty(event1, 'target', {
          value: { value: 'C:\\fakepath\\file1.txt', files: files1 },
          writable: false,
        })

        await input.element.dispatchEvent(event1)

        let emittedValue = wrapper.emitted('update:modelValue')?.[0][0] as File[]
        expect(emittedValue).toHaveLength(1)
        expect(emittedValue[0].name).toBe('file1.txt')

        await wrapper.setProps({ modelValue: emittedValue })

        const file2 = new File(['content2'], 'file2.txt')
        const files2 = {
          0: file2,
          length: 1,
          item: () => file2,
        } as unknown as FileList

        const event2 = new Event('change')
        Object.defineProperty(event2, 'target', {
          value: { value: 'C:\\fakepath\\file2.txt', files: files2 },
          writable: false,
        })

        await input.element.dispatchEvent(event2)

        emittedValue = wrapper.emitted('update:modelValue')?.[1][0] as File[]
        expect(emittedValue).toHaveLength(2)
        expect(emittedValue[0].name).toBe('file1.txt')
        expect(emittedValue[1].name).toBe('file2.txt')
      })
    })
  })

  BddTest().and('with file pills', () => {
    const fileA = new File(['a'], 'a.pdf')
    const fileB = new File(['b'], 'b.pdf')

    BddTest().when('enableMultiple is true in the default variant', () => {
      BddTest().then('it should render one pill per file', () => {
        wrapper = mountComponent({ enableMultiple: true, modelValue: [fileA, fileB] })

        expect(wrapper.findAll('.av-file-pill')).toHaveLength(2)
        expect(wrapper.find('.av-compact-upload').exists()).toBe(false)
      })
    })

    BddTest().when('enableMultiple is false', () => {
      BddTest().then('it should not render the pills list', () => {
        wrapper = mountComponent({ modelValue: [fileA] })

        expect(wrapper.find('.av-compact-files-list').exists()).toBe(false)
        expect(wrapper.findAll('.av-file-pill')).toHaveLength(0)
      })
    })

    BddTest().when('only fileName is provided with enableMultiple', () => {
      BddTest().then('it should render a pill with the file name', () => {
        wrapper = mountComponent({ enableMultiple: true, fileName: 'server.pdf' })

        expect(wrapper.findAll('.av-file-pill')).toHaveLength(1)
        expect(wrapper.html()).toContain('server.pdf')
      })
    })

    BddTest().when('the component is disabled', () => {
      BddTest().then('it should render pills without delete buttons', () => {
        wrapper = mountComponent({ enableMultiple: true, modelValue: [fileA], disabled: true })

        const pill = wrapper.find('.av-file-pill')
        expect(pill.exists()).toBe(true)
        expect(pill.findComponent({ name: 'AvButton' }).exists()).toBe(false)
      })
    })

    BddTest().when('a pill is deleted', () => {
      BddTest().then('it should emit deleteFile with the file and update modelValue without it', async () => {
        wrapper = mountComponent({ enableMultiple: true, modelValue: [fileA, fileB] })

        await wrapper.findAllComponents({ name: 'AvFilePill' })[0].vm.$emit('delete')

        expect(wrapper.emitted('deleteFile')?.[0][0]).toBe(fileA)
        expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([fileB])
        expect(wrapper.emitted('update:validMessage')?.[0][0]).toBeNull()
        expect(wrapper.emitted('update:error')?.[0][0]).toBeNull()
      })
    })

    BddTest().when('the last pill is deleted', () => {
      BddTest().then('it should set modelValue to null', async () => {
        wrapper = mountComponent({ enableMultiple: true, modelValue: [fileA] })

        await wrapper.findComponent({ name: 'AvFilePill' }).vm.$emit('delete')

        expect(wrapper.emitted('update:modelValue')?.[0][0]).toBeNull()
      })
    })

    BddTest().when('the pill of a server-persisted file is deleted', () => {
      BddTest().then('it should emit deleteFile with the index', async () => {
        wrapper = mountComponent({ enableMultiple: true, fileName: 'server.pdf' })

        await wrapper.findComponent({ name: 'AvFilePill' }).vm.$emit('delete')

        expect(wrapper.emitted('deleteFile')?.[0][0]).toBe(0)
      })
    })
  })
})
