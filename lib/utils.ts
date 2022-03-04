import { CSSProperties, Ref, unref } from "vue";
import tinycolor from 'tinycolor2'
import { DimensionPosition, Dimensions } from "./types";

export const LISTENERS = Symbol("listeners");

export const getStyle = (dimensions: Dimensions) => {
  const inPx = Object.values(DimensionPosition).reduce(
    (acc, key) => ({
      ...acc,
      [key]: dimensions[key] + "px",
    }),
    {}
  );
  const style: CSSProperties = {
    ...dimensions,
    ...inPx,
    position: "absolute",
  };

  return style;
};

export const shouldBeLight = (container: Element) => {
  const el = container.parentElement || container
  const color = getComputedStyle(el).getPropertyValue('background-color')
  return tinycolor(color).isLight()
}

export const setPosition = (
  dimensions: Dimensions,
  container: Element,
  root: Ref<Element>,
  offset: number,
  onBody = true
) => {
  const rect = container.getBoundingClientRect();
  const cRect = unref(root).getBoundingClientRect();

  const scrollTop = onBody
    ? window.scrollY
    : Math.floor(root.value.scrollTop) - Math.ceil(cRect.top) - 1;

  const scrollLeft = onBody
    ? window.scrollX
    : Math.floor(root.value.scrollLeft) - Math.ceil(cRect.left) - 1;

  dimensions.top = rect.top + scrollTop + offset || 0;
  dimensions.left = rect.left + scrollLeft + offset || 0;
  dimensions.height = rect.height - offset * 2 || 0;
  dimensions.width = rect.width - offset * 2 || 0;

  const bR = window.getComputedStyle(container).borderRadius;
  dimensions.borderRadius = bR || "2px";
};