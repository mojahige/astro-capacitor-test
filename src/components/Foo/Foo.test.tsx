import { test } from "uvu";
import * as assert from "uvu/assert";
import { screen, render, fireEvent } from "solid-testing-library";
import { isInDom } from "~/helper/test";
import { Counter } from "./";

test("changes text on click", async () => {
  await render(() => <Counter />);

  const addButton = await screen.findByRole("button", { name: "+" });

  assert.ok(isInDom(addButton));

  fireEvent.click(addButton);

  assert.ok(await screen.findByText("1"));
});

test.run();
