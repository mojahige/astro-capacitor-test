import { createSignal, ParentProps } from "solid-js";
import { Button } from "~/components/Button";

type Props = ParentProps;

export function Counter(props: Props) {
  const [count, setCount] = createSignal(0);

  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <p class="text-center">{props.children}</p>
      <p class="text-center text-xl font-bold">{count()}</p>
      <div class="flex justify-center gap-8">
        <Button onClick={subtract}>-</Button>

        <Button onClick={add}>+</Button>
      </div>
    </>
  );
}
