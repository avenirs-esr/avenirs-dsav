export enum PageSizes {
  FOUR = 4,
  EIGHT = 8,
  TWELVE = 12,
  TWENTY = 20
}

export const pageSizeValues = [
  PageSizes.FOUR,
  PageSizes.EIGHT,
  PageSizes.TWELVE,
  PageSizes.TWENTY
] as const satisfies readonly PageSizes[]
