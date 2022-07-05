export enum DimensionPosition {
  top = 'top',
  left = 'left',
  height = 'height',
  width = 'width',
}

export type Dimensions = {
  [key in DimensionPosition]: number
} & {
  borderRadius: string
}

export interface RingScopeListeners {
  readonly onFocus: (args: { container: Element; offset: number }) => void
  readonly onBlur: () => void
}
