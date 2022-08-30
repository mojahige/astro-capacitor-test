import { splitProps, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { ParentProps, Component, ComponentProps, JSX } from "solid-js";

type ElementType = keyof JSX.IntrinsicElements | Component<unknown>;

type BoxProps<T extends ElementType> = ParentProps<{
  as?: T;
}>;

type Props<T extends ElementType> = BoxProps<T> &
  Omit<ComponentProps<T>, keyof BoxProps<T>>;

export function Box<T extends ElementType = "div">(props: Props<T>) {
  const merged = mergeProps({ as: "div" }, props);
  const [local, others] = splitProps(merged, ["as"]);

  return <Dynamic component={local.as as ElementType} {...others} />;
}
