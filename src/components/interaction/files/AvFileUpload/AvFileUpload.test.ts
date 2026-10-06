import type { ComponentPublicInstance } from 'vue'
import type { AvFileUploadFilesRejections, AvFileUploadProps } from '@/components/interaction/files/AvFileUpload/AvFileUpload.types'
import { type ComponentMountingOptions, flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, expect, vi } from 'vitest'
import AvFileUpload from '@/components/interaction/files/AvFileUpload/AvFileUpload.vue'
import { AvButtonStub, AvFilePillStub, AvIconStub, AvMessageStub, AvTooltipStub, BddTest } from '@/tests'

const CUSTOM_ID = 'custom-file-upload'
const ARIA_LABEL = 'Add a document'

const TITLE = 'Upload a document'
const DESCRIPTION = 'Select a document to upload'

const HINT = 'PDF, DOCX or JPG'
const COMPACT_HINT = 'Maximum 3 files'
const LEFT_CONTENT = 'Additional content'
const DISABLED_TOOLTIP = 'You cannot upload files'

const FIRST_FILE_NAME = 'first.pdf'
const SECOND_FILE_NAME = 'second.pdf'
const THIRD_FILE_NAME = 'third.pdf'
const PERSISTED_FILE_NAME = 'persisted.pdf'

const PDF_TYPE = 'application/pdf'
const ACCEPT_STRING = '.pdf'
const ACCEPT_TYPES = ['.pdf', '.png', '.jpg']

const ERROR_MESSAGE = 'Upload failed'
const VALID_MESSAGE = 'File is valid'
const INVALID_TYPE_MESSAGE = 'Invalid file type'
const DELETE_BUTTON_LABEL = 'Remove file'
const DOWNLOAD_PREFIX_LABEL = 'Download'
const DELETE_PREFIX_LABEL = 'Delete'

const REQUIRED_ERROR = 'required'
const INVALID_TYPE_ERROR = 'invalid-type'
const TOO_LARGE_ERROR = 'too-large'

const FIRST_FILE = new File(['first'], FIRST_FILE_NAME, { type: PDF_TYPE })
const SECOND_FILE = new File(['second'], SECOND_FILE_NAME, { type: PDF_TYPE })
const THIRD_FILE = new File(['third'], THIRD_FILE_NAME, { type: PDF_TYPE })

const TWO_FILES = [FIRST_FILE, SECOND_FILE]
const ALL_FILES = [FIRST_FILE, SECOND_FILE, THIRD_FILE]

type TestError =
  | typeof REQUIRED_ERROR
  | typeof INVALID_TYPE_ERROR
  | typeof TOO_LARGE_ERROR

type TestAvFileUpload = typeof AvFileUpload<TestError>
type TestAvFileUploadProps = AvFileUploadProps<TestError>
type TestAvFileUploadMountingOptions = ComponentMountingOptions<TestAvFileUpload>
type TestAvFileUploadWrapper = ReturnType<typeof mount<TestAvFileUpload>>

type FileValidator = NonNullable<TestAvFileUploadProps['validateFile']>
type FilesValidator = NonNullable<TestAvFileUploadProps['validateFiles']>

const defaultProps: TestAvFileUploadProps = {
  title: TITLE,
  description: DESCRIPTION,
}

const createFileList = (files: File[]): FileList => Object.assign([...files], { item: (index: number) => files[index] ?? null }) as unknown as FileList
const createValidateFile = (mockedResult: ReturnType<FileValidator>) => vi.fn<FileValidator>(() => mockedResult)
const createValidateFiles = (mockedResult: ReturnType<FilesValidator>) => vi.fn<FilesValidator>(() => mockedResult)

BddTest().given('an AvFileUpload component', () => {
  let wrapper: TestAvFileUploadWrapper

  const stubs = {
    AvButton: AvButtonStub,
    AvFilePill: AvFilePillStub,
    AvIcon: AvIconStub,
    AvMessage: AvMessageStub,
    AvTooltip: AvTooltipStub,
  }

  const mountWith = (
    props: Partial<TestAvFileUploadProps> = {},
    attrs?: TestAvFileUploadMountingOptions['attrs'],
    slots?: TestAvFileUploadMountingOptions['slots'],
  ) => {
    wrapper = mount<TestAvFileUpload>(AvFileUpload, {
      props: {
        ...defaultProps,
        ...props,
      },
      attrs,
      slots,
      global: { stubs },
    })
  }

  const getFileInput = () => wrapper.find('input[type="file"]')
  const getUploadLabel = () => wrapper.find('label')
  const getCompactAddPill = () => wrapper.find('.av-compact-add-pill')
  const getAvButton = () => wrapper.findComponent(AvButtonStub)
  const getAvMessage = () => wrapper.findComponent(AvMessageStub)
  const getAvTooltip = () => wrapper.findComponent(AvTooltipStub)
  const getFilePills = () => wrapper.findAllComponents(AvFilePillStub)
  const getDeleteFileButton = (index = 0) => getFilePills()[index].find('[data-testid="delete-file-button"]')

  const expectSelection = (files: File[]) => {
    expect(wrapper.emitted('update:modelValue')).toEqual([[files]])
    expect(wrapper.emitted('change')).toEqual([[files]])
  }

  const expectNoSelectionChange = () => {
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    expect(wrapper.emitted('change')).toBeUndefined()
  }

  const expectFilesDeleted = (files: File[]) => {
    expect(wrapper.emitted('filesDeleted')).toEqual([[files]])
  }

  const expectDeleteFilesRequested = (files: File[]) => {
    expect(wrapper.emitted('deleteFiles')).toEqual([[files]])
  }

  const expectNoDeletion = () => {
    expectNoSelectionChange()
    expect(wrapper.emitted('deleteFiles')).toBeUndefined()
    expect(wrapper.emitted('filesDeleted')).toBeUndefined()
  }

  const expectMessagesCleared = () => {
    expect(wrapper.emitted('update:validMessage')).toEqual([[undefined]])
    expect(wrapper.emitted('update:errorMessage')).toEqual([[undefined]])
  }

  const expectFilesRejected = (rejection: AvFileUploadFilesRejections<TestError>) => {
    expect(wrapper.emitted('filesRejected')).toEqual([[rejection]])
  }

  const selectFiles = async (files: File[], inputValue = '') => {
    const input = getFileInput()
    const inputElement = input.element as HTMLInputElement

    Object.defineProperty(inputElement, 'files', {
      configurable: true,
      value: createFileList(files),
    })

    Object.defineProperty(inputElement, 'value', {
      configurable: true,
      writable: true,
      value: inputValue,
    })

    await input.trigger('change')
    await flushPromises()

    return inputElement
  }

  const selectFilesAndExpectSelection = async (files: File[], expectedSelection: File[] = files) => {
    await selectFiles(files)
    expectSelection(expectedSelection)
  }

  const dropFiles = async (files: File[]) => {
    await getUploadLabel().trigger('drop', {
      dataTransfer: {
        files: createFileList(files),
      },
    })

    await flushPromises()
  }

  BddTest().when('it is mounted with default props', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should render the title and description', () => {
      expect(wrapper.text()).toContain(TITLE)
      expect(wrapper.text()).toContain(DESCRIPTION)
    })

    BddTest().then('it should render the file input', () => {
      expect(getFileInput().exists()).toBe(true)
    })

    BddTest().then('it should not enable multiple selection', () => {
      expect(getFileInput().attributes('multiple')).toBeUndefined()
    })
  })

  BddTest().when('a hint slot is provided', () => {
    beforeEach(() => {
      mountWith({}, {}, {
        hint: `<span data-testid="hint">${HINT}</span>`,
      })
    })

    BddTest().then('it should render the hint slot', () => {
      expect(wrapper.get('[data-testid="hint"]').text()).toBe(HINT)
    })
  })

  BddTest().when('a left slot is provided', () => {
    beforeEach(() => {
      mountWith({}, {}, {
        left: `<span data-testid="left-slot">${LEFT_CONTENT}</span>`,
      })
    })

    BddTest().then('it should render the left slot', () => {
      expect(wrapper.get('[data-testid="left-slot"]').text()).toBe(LEFT_CONTENT)
    })
  })

  BddTest().when('an explicit id and aria label are provided', () => {
    beforeEach(() => {
      mountWith({
        id: CUSTOM_ID,
        ariaLabel: ARIA_LABEL,
      })
    })

    BddTest().then('it should apply them to the upload control', () => {
      expect(getFileInput().attributes('id')).toBe(CUSTOM_ID)

      const label = getUploadLabel()
      expect(label.attributes('for')).toBe(CUSTOM_ID)
      expect(label.attributes('aria-label')).toBe(ARIA_LABEL)
    })
  })

  BddTest().when('an accept string is provided', () => {
    beforeEach(() => {
      mountWith({
        accept: ACCEPT_STRING,
      })
    })

    BddTest().then('it should apply it to the input', () => {
      expect(getFileInput().attributes('accept')).toBe(ACCEPT_STRING)
    })
  })

  BddTest().when('an accept array is provided', () => {
    beforeEach(() => {
      mountWith({
        accept: ACCEPT_TYPES,
      })
    })

    BddTest().then('it should apply it as a comma-separated value', () => {
      expect(getFileInput().attributes('accept')).toBe(ACCEPT_TYPES.join(','))
    })
  })

  BddTest().when('the uploader is disabled with a disabled tooltip', () => {
    beforeEach(() => {
      mountWith({
        disabled: true,
        disabledTooltip: DISABLED_TOOLTIP,
      })
    })

    BddTest().then('it should configure the tooltip correctly', () => {
      const tooltip = getAvTooltip()
      expect(tooltip.props('disabled')).toBe(false)
      expect(tooltip.props('forceFocusable')).toBe(true)
      expect(tooltip.props('content')).toBe(DISABLED_TOOLTIP)
    })
  })

  BddTest().when('errorMessage and validMessage are provided', () => {
    beforeEach(() => {
      mountWith({
        errorMessage: ERROR_MESSAGE,
        validMessage: VALID_MESSAGE,
      })
    })

    BddTest().then('it should render the error message', () => {
      const message = getAvMessage()
      expect(message.props('type')).toBe('error')
      expect(message.props('message')).toBe(ERROR_MESSAGE)
    })
  })

  BddTest().when('only validMessage is provided', () => {
    beforeEach(() => {
      mountWith({
        validMessage: VALID_MESSAGE,
      })
    })

    BddTest().then('it should render the success message', () => {
      const message = getAvMessage()
      expect(message.props('type')).toBe('success')
      expect(message.props('message')).toBe(VALID_MESSAGE)
    })
  })

  BddTest().when('the file input is clicked', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should emit click', async () => {
      await getFileInput().trigger('click')

      const emitted = wrapper.emitted('click')
      expect(emitted).toHaveLength(1)
      expect(emitted?.[0]?.[0]).toBeInstanceOf(MouseEvent)
    })
  })

  BddTest().when('a valid file is selected in single mode', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should update the model and emit change', async () => {
      await selectFilesAndExpectSelection([FIRST_FILE])
    })

    BddTest().then('it should clear the native input value', async () => {
      const inputElement = await selectFiles([FIRST_FILE], `C:\\fakepath\\${FIRST_FILE_NAME}`)

      expect(inputElement.value).toBe('')
    })
  })

  BddTest().when('a file is selected in multiple mode', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
      })
    })

    BddTest().then('it should add and emit the file', async () => {
      await selectFilesAndExpectSelection([FIRST_FILE])
    })
  })

  BddTest().when('a second file is selected in multiple mode', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should append the new file', async () => {
      await selectFilesAndExpectSelection([SECOND_FILE], TWO_FILES)
    })
  })

  BddTest().when('a file is already selected in multiple mode', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should keep the file input available', () => {
      expect(getFileInput().exists()).toBe(true)
    })

    BddTest().then('it should not automatically display the preview', () => {
      expect(wrapper.text()).toContain(TITLE)
      expect(wrapper.text()).toContain(DESCRIPTION)
    })

    BddTest().then('it should allow adding another file', async () => {
      await selectFilesAndExpectSelection([SECOND_FILE], TWO_FILES)
    })
  })

  BddTest().when('collection validation rejects the selection', () => {
    beforeEach(() => {
      mountWith({
        validateFiles: createValidateFiles(REQUIRED_ERROR),
      })
    })

    BddTest().then('it should emit the global rejection', async () => {
      await selectFiles([FIRST_FILE])

      expectFilesRejected(REQUIRED_ERROR)
    })

    BddTest().then('it should skip file-level validation', async () => {
      const validateFile = createValidateFile(INVALID_TYPE_ERROR)

      mountWith({
        validateFiles: createValidateFiles(REQUIRED_ERROR),
        validateFile,
      })

      await selectFiles([FIRST_FILE])

      expect(validateFile).not.toHaveBeenCalled()
    })
  })

  BddTest().when('file validation rejects a file in single mode', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile(INVALID_TYPE_ERROR),
      })
    })

    BddTest().then('it should emit the error as a global rejection', async () => {
      await selectFiles([FIRST_FILE])

      expectFilesRejected(INVALID_TYPE_ERROR)
    })
  })

  BddTest().when('file validation returns multiple errors in single mode', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile([
          INVALID_TYPE_ERROR,
          TOO_LARGE_ERROR,
        ]),
      })
    })

    BddTest().then('it should emit the first error as a global rejection', async () => {
      await selectFiles([FIRST_FILE])

      expectFilesRejected(INVALID_TYPE_ERROR)
    })
  })

  BddTest().when('a validation error message getter is provided', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile(INVALID_TYPE_ERROR),
        getErrorMessage: (error) => {
          if (error === INVALID_TYPE_ERROR) {
            return INVALID_TYPE_MESSAGE
          }

          return undefined
        },
      })
    })

    BddTest().then('it should display the corresponding validation error message', async () => {
      await selectFiles([FIRST_FILE])

      expect(getAvMessage().props('type')).toBe('error')
      expect(getAvMessage().props('message')).toEqual([INVALID_TYPE_MESSAGE])
      expectFilesRejected(INVALID_TYPE_ERROR)
    })
  })

  BddTest().when('a validation error message getter returns void', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile(INVALID_TYPE_ERROR),
        getErrorMessage: () => undefined,
      })
    })

    BddTest().then('it should not display a validation error message', async () => {
      await selectFiles([FIRST_FILE])

      expect(getAvMessage().exists()).toBe(false)
    })

    BddTest().then('it should still emit the validation rejection', async () => {
      await selectFiles([FIRST_FILE])

      expectFilesRejected(INVALID_TYPE_ERROR)
    })
  })

  BddTest().when('an external error message and a validation error message getter are provided', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile(INVALID_TYPE_ERROR),
        getErrorMessage: () => INVALID_TYPE_MESSAGE,
        errorMessage: ERROR_MESSAGE,
      })
    })

    BddTest().then('it should display the external error message', async () => {
      await selectFiles([FIRST_FILE])

      expect(getAvMessage().props('type')).toBe('error')
      expect(getAvMessage().props('message')).toBe(ERROR_MESSAGE)
    })
  })

  BddTest().when('mixed validation results are returned in multiple mode', () => {
    const validateFile = vi.fn<FileValidator>((file) => {
      if (file === FIRST_FILE) {
        return [TOO_LARGE_ERROR, REQUIRED_ERROR]
      }

      if (file === SECOND_FILE) {
        return INVALID_TYPE_ERROR
      }

      return undefined
    })

    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        validateFiles: createValidateFiles([
          {
            file: FIRST_FILE,
            errors: TOO_LARGE_ERROR,
          },
          {
            file: SECOND_FILE,
            errors: INVALID_TYPE_ERROR,
          },
        ]),
        validateFile,
      })
    })

    BddTest().then('it should merge and deduplicate validation errors', async () => {
      await selectFiles(ALL_FILES)

      expectFilesRejected([
        {
          file: FIRST_FILE,
          errors: [TOO_LARGE_ERROR, REQUIRED_ERROR],
        },
        {
          file: SECOND_FILE,
          errors: [INVALID_TYPE_ERROR],
        },
      ])
    })

    BddTest().then('it should keep valid files', async () => {
      await selectFilesAndExpectSelection(ALL_FILES, [THIRD_FILE])
    })

    BddTest().then('it should emit change before filesRejected', async () => {
      await selectFiles(ALL_FILES)

      const events = Object.keys(wrapper.emitted() ?? {})
      expect(events.indexOf('change')).toBeLessThan(events.indexOf('filesRejected'))
    })
  })

  BddTest().when('all files are rejected in multiple mode', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        validateFile: createValidateFile(INVALID_TYPE_ERROR),
      })
    })

    BddTest().then('it should emit all file rejections without changing the model', async () => {
      await selectFiles(TWO_FILES)

      expectFilesRejected([
        {
          file: FIRST_FILE,
          errors: [INVALID_TYPE_ERROR],
        },
        {
          file: SECOND_FILE,
          errors: [INVALID_TYPE_ERROR],
        },
      ])

      expectNoSelectionChange()
    })
  })

  BddTest().when('collection validation is asynchronous', () => {
    beforeEach(() => {
      mountWith({
        validateFiles: createValidateFiles(Promise.resolve(REQUIRED_ERROR)),
      })
    })

    BddTest().then('it should await the validation result', async () => {
      await selectFiles([FIRST_FILE])

      expectFilesRejected(REQUIRED_ERROR)
    })
  })

  BddTest().when('file validation is asynchronous', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile(Promise.resolve(INVALID_TYPE_ERROR)),
      })
    })

    BddTest().then('it should await the validation result', async () => {
      await selectFiles([FIRST_FILE])

      expectFilesRejected(INVALID_TYPE_ERROR)
    })
  })

  BddTest().when('a file is dropped', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should update the model and emit change', async () => {
      await dropFiles([FIRST_FILE])

      expectSelection([FIRST_FILE])
    })
  })

  BddTest().when('a dragover occurs', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should add the drag-over class', async () => {
      const label = getUploadLabel()

      await label.trigger('dragover', {
        dataTransfer: {
          files: createFileList([FIRST_FILE]),
        },
      })

      expect(label.classes()).toContain('drag-over')
    })
  })

  BddTest().when('a dragleave occurs after a dragover', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should remove the drag-over class', async () => {
      const label = getUploadLabel()

      await label.trigger('dragover', {
        dataTransfer: {
          files: createFileList([FIRST_FILE]),
        },
      })

      await label.trigger('dragleave')

      expect(label.classes()).not.toContain('drag-over')
    })
  })

  BddTest().when('a rejected file is dropped', () => {
    beforeEach(() => {
      mountWith({
        validateFile: createValidateFile(INVALID_TYPE_ERROR),
      })
    })

    BddTest().then('it should emit the rejection without changing the model', async () => {
      await dropFiles([FIRST_FILE])

      expectFilesRejected(INVALID_TYPE_ERROR)
      expectNoSelectionChange()
    })
  })

  BddTest().when('a file is selected on a disabled uploader', () => {
    beforeEach(() => {
      mountWith({
        disabled: true,
      })
    })

    BddTest().then('it should disable the native input', () => {
      expect(getFileInput().attributes('disabled')).toBeDefined()
    })
  })

  BddTest().when('a file is dropped on a disabled uploader', () => {
    beforeEach(() => {
      mountWith({
        disabled: true,
      })
    })

    BddTest().then('it should not emit any file event', async () => {
      await dropFiles([FIRST_FILE])

      expectNoSelectionChange()
      expect(wrapper.emitted('filesRejected')).toBeUndefined()
    })
  })

  BddTest().when('a dragover occurs on a disabled uploader', () => {
    beforeEach(() => {
      mountWith({
        disabled: true,
      })
    })

    BddTest().then('it should not enter the drag-over state', async () => {
      const label = getUploadLabel()

      await label.trigger('dragover', {
        dataTransfer: {
          files: createFileList([FIRST_FILE]),
        },
      })

      expect(label.classes()).not.toContain('drag-over')
    })
  })

  BddTest().when('a file is already selected in single mode', () => {
    beforeEach(() => {
      mountWith({
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should automatically display the preview', () => {
      expect(wrapper.text()).toContain(FIRST_FILE_NAME)
      expect(getFileInput().exists()).toBe(false)
      expect(getAvButton().exists()).toBe(true)
    })
  })

  BddTest().when('an explicit preview and fileName are provided', () => {
    beforeEach(() => {
      mountWith({
        isPreview: true,
        fileName: PERSISTED_FILE_NAME,
      })
    })

    BddTest().then('it should render the configured file name', () => {
      expect(wrapper.text()).toContain(PERSISTED_FILE_NAME)
    })

    BddTest().then('it should not render the file input', () => {
      expect(getFileInput().exists()).toBe(false)
    })

    BddTest().then('it should not render a delete button without modelValue files', () => {
      expect(getAvButton().exists()).toBe(false)
    })
  })

  BddTest().when('an explicit preview is enabled in multiple mode', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        isPreview: true,
        modelValue: TWO_FILES,
      })
    })

    BddTest().then('it should display the selected files', () => {
      expect(wrapper.text()).toContain(FIRST_FILE_NAME)
      expect(wrapper.text()).toContain(SECOND_FILE_NAME)
    })

    BddTest().then('it should not render the file input', () => {
      expect(getFileInput().exists()).toBe(false)
    })

    BddTest().then('it should not allow adding files', async () => {
      await wrapper.vm.addFiles([THIRD_FILE])

      expectNoSelectionChange()
    })
  })

  BddTest().when('fileName and a selected file are provided', () => {
    beforeEach(() => {
      mountWith({
        fileName: PERSISTED_FILE_NAME,
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should display fileName instead of the File name', () => {
      expect(wrapper.text()).toContain(PERSISTED_FILE_NAME)
      expect(wrapper.text()).not.toContain(FIRST_FILE_NAME)
    })
  })

  BddTest().when('deletable is false', () => {
    beforeEach(() => {
      mountWith({
        deletable: false,
      })
    })

    BddTest().then('it should still allow files to be added', async () => {
      await selectFilesAndExpectSelection([FIRST_FILE])
    })
  })

  BddTest().when('deletable is false with a selected file', () => {
    beforeEach(() => {
      mountWith({
        modelValue: [FIRST_FILE],
        deletable: false,
      })
    })

    BddTest().then('it should not render a delete button', () => {
      expect(getAvButton().exists()).toBe(false)
    })

    BddTest().then('deleteFiles should not delete the file', () => {
      wrapper.vm.deleteFiles()

      expectNoDeletion()
    })
  })

  BddTest().when('isPreview is true and deletable is true', () => {
    beforeEach(() => {
      mountWith({
        isPreview: true,
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should not render the file input', () => {
      expect(getFileInput().exists()).toBe(false)
    })

    BddTest().then('it should still render the delete button', () => {
      expect(getAvButton().exists()).toBe(true)
    })

    BddTest().then('it should allow deleting the file', () => {
      wrapper.vm.deleteFiles()

      expectSelection([])
      expectFilesDeleted([FIRST_FILE])
    })
  })

  BddTest().when('the default delete button is clicked', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: TWO_FILES,
      })
    })

    BddTest().then('it should request deletion of all selected files', async () => {
      await getAvButton().trigger('click')

      expectDeleteFilesRequested(TWO_FILES)
      expectNoSelectionChange()
      expect(wrapper.emitted('filesDeleted')).toBeUndefined()
    })
  })

  BddTest().when('a file pill delete button is clicked', () => {
    beforeEach(() => {
      mountWith({
        compact: true,
        enableMultiple: true,
        modelValue: TWO_FILES,
      })
    })

    BddTest().then('it should request deletion of that file', async () => {
      await getDeleteFileButton().trigger('click')

      expectDeleteFilesRequested([FIRST_FILE])
      expectNoSelectionChange()
      expect(wrapper.emitted('filesDeleted')).toBeUndefined()
    })
  })

  BddTest().when('deleteFiles is called without an argument', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: ALL_FILES,
      })
    })

    BddTest().then('it should delete every selected file', () => {
      wrapper.vm.deleteFiles()

      expectSelection([])
      expectFilesDeleted(ALL_FILES)
    })

    BddTest().then('it should clear the validation messages', () => {
      wrapper.vm.deleteFiles()

      expectMessagesCleared()
    })
  })

  BddTest().when('deleteFiles is called with indexes', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: ALL_FILES,
      })
    })

    BddTest().then('it should delete only the selected indexes', () => {
      wrapper.vm.deleteFiles([0, 2])

      expectSelection([SECOND_FILE])
      expectFilesDeleted([FIRST_FILE, THIRD_FILE])
    })
  })

  BddTest().when('deleteFiles is called with a file', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: ALL_FILES,
      })
    })

    BddTest().then('it should delete the specified file', () => {
      wrapper.vm.deleteFiles([SECOND_FILE])

      expectSelection([FIRST_FILE, THIRD_FILE])
      expectFilesDeleted([SECOND_FILE])
    })
  })

  BddTest().when('deleteFiles is called with an invalid index', () => {
    beforeEach(() => {
      mountWith({
        enableMultiple: true,
        modelValue: TWO_FILES,
      })
    })

    BddTest().then('it should not emit anything', () => {
      wrapper.vm.deleteFiles([42])

      expectNoDeletion()
    })
  })

  BddTest().when('deletion is disabled', () => {
    beforeEach(() => {
      mountWith({
        disabled: true,
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should not render the delete button', () => {
      expect(getAvButton().exists()).toBe(false)
    })

    BddTest().then('deleteFiles should not emit deletion events', () => {
      wrapper.vm.deleteFiles()

      expectNoDeletion()
    })
  })

  BddTest().when('compact mode is enabled', () => {
    beforeEach(() => {
      mountWith({
        compact: true,
      })
    })

    BddTest().then('it should render the compact add pill', () => {
      expect(getCompactAddPill().exists()).toBe(true)
    })
  })

  BddTest().when('compact mode and a hint slot are provided', () => {
    beforeEach(() => {
      mountWith({ compact: true }, {}, {
        hint: `<span data-testid="compact-hint">${COMPACT_HINT}</span>`,
      })
    })

    BddTest().then('it should render the hint slot', () => {
      expect(wrapper.get('[data-testid="compact-hint"]').text()).toBe(COMPACT_HINT)
    })
  })

  BddTest().when('compact mode contains multiple selected files', () => {
    beforeEach(() => {
      mountWith({
        compact: true,
        enableMultiple: true,
        modelValue: TWO_FILES,
      })
    })

    BddTest().then('it should render one file pill per selected file', () => {
      expect(getFilePills()).toHaveLength(2)
    })

    BddTest().then('each file pill should be deletable', () => {
      const filePills = getFilePills()
      expect(filePills[0].props('deletable')).toBe(true)
      expect(filePills[1].props('deletable')).toBe(true)
    })

    BddTest().then('it should keep the add pill available', () => {
      expect(getCompactAddPill().exists()).toBe(true)
    })
  })

  BddTest().when('compact preview mode is enabled', () => {
    beforeEach(() => {
      mountWith({
        compact: true,
        isPreview: true,
        modelValue: [FIRST_FILE],
      })
    })

    BddTest().then('it should keep the file pill visible', () => {
      expect(getFilePills()).toHaveLength(1)
    })

    BddTest().then('it should hide the add pill', () => {
      expect(getCompactAddPill().exists()).toBe(false)
    })

    BddTest().then('it should keep the file pill deletable', () => {
      expect(getFilePills()[0].props('deletable')).toBe(true)
    })
  })

  BddTest().when('compact mode and fileName are provided without modelValue', () => {
    beforeEach(() => {
      mountWith({
        compact: true,
        fileName: PERSISTED_FILE_NAME,
      })
    })

    BddTest().then('it should render the configured file name', () => {
      expect(wrapper.text()).toContain(PERSISTED_FILE_NAME)
    })

    BddTest().then('the file pill should not be deletable', () => {
      expect(getFilePills()[0].props('deletable')).toBe(false)
    })
  })

  BddTest().when('custom file pill labels are provided', () => {
    beforeEach(() => {
      mountWith({
        compact: true,
        modelValue: [FIRST_FILE],
        filePillDownloadPrefixLabel: DOWNLOAD_PREFIX_LABEL,
        filePillDeletePrefixLabel: DELETE_PREFIX_LABEL,
      })
    })

    BddTest().then('it should forward them to AvFilePill', () => {
      expect(getFilePills()[0].props()).toMatchObject({
        downloadPrefixLabel: DOWNLOAD_PREFIX_LABEL,
        deletePrefixLabel: DELETE_PREFIX_LABEL,
      })
    })
  })

  BddTest().when('a custom delete button label is provided', () => {
    beforeEach(() => {
      mountWith({
        modelValue: [FIRST_FILE],
        deleteButtonLabel: DELETE_BUTTON_LABEL,
      })
    })

    BddTest().then('it should forward it to AvButton', () => {
      expect(getAvButton().props('label')).toBe(DELETE_BUTTON_LABEL)
    })
  })

  BddTest().when('addFiles is called with a valid file', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should add and emit the file', async () => {
      const files = [FIRST_FILE]

      await wrapper.vm.addFiles(files)

      expectSelection(files)
    })
  })

  BddTest().when('addFiles is called without files', () => {
    beforeEach(() => {
      mountWith()
    })

    BddTest().then('it should not emit anything', async () => {
      await wrapper.vm.addFiles([])

      expectNoSelectionChange()
    })
  })

  BddTest().when('addFiles is called while disabled', () => {
    beforeEach(() => {
      mountWith({
        disabled: true,
      })
    })

    BddTest().then('it should not add the file', async () => {
      await wrapper.vm.addFiles([FIRST_FILE])

      expectNoSelectionChange()
    })
  })

  BddTest().when('addFiles is called while in preview', () => {
    beforeEach(() => {
      mountWith({
        isPreview: true,
      })
    })

    BddTest().then('it should not add the file', async () => {
      await wrapper.vm.addFiles([FIRST_FILE])

      expectNoSelectionChange()
    })
  })
})
