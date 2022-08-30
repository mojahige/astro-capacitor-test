import { Box } from "~/components/Box";
import { splitProps, mergeProps } from "solid-js";
import type { ParentProps, JSX, ComponentProps } from "solid-js";

export type ElementType = keyof Pick<JSX.IntrinsicElements, "a" | "button">;

type AsProps<T extends ElementType> = {
  as?: T;
};

type ButtonProps<T extends ElementType> = ParentProps<AsProps<T>>;

type Props<T extends ElementType> = ButtonProps<T> &
  Omit<ComponentProps<T>, keyof ButtonProps<T>>;

export function Button<T extends ElementType = "button">(props: Props<T>) {
  const merged = mergeProps({ as: "button" }, props);
  const [local, others] = splitProps(merged, ["as"]);

  return (
    <Box
      class="button button-primary"
      as={local.as as ElementType}
      {...others}
    />
  );
}
