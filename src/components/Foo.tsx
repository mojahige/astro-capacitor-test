import { createSignal, ParentProps } from "solid-js";

type Props = ParentProps<{}>;

export function Counter(props: Props) {
  const [count, setCount] = createSignal(0);

  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <div class="flex">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>

      <div>{props.children}</div>
    </>
  );
}
