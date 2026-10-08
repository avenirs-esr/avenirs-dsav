/**
 * Filters the files about to be added.
 * Returns the files to add; files that are not returned are ignored.
 */
export type AvFileUploadBeforeAdd = (files: File[]) => File[] | Promise<File[]>
