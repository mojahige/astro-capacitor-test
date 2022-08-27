interface Props {
  title: string;
}

export function Header(props: Props) {
  return (
    <div class="px-4 py-2 bg-zinc-300 dark:bg-zinc-600">
      <h1 class="text-lg font-bold">{props.title}</h1>
    </div>
  );
}
