import { test } from "uvu";
import * as assert from "uvu/assert";
import { cleanup, screen, render } from "solid-testing-library";
import { isInDom } from "~/helper/test";
import { Header } from "./";

test.after.each(cleanup);

test("The specified text is displayed as a heading", async () => {
  await render(() => <Header title="test heading1" />);

  let heading = screen.getByRole("heading", { level: 1 });

  assert.ok(isInDom(heading));
  assert.ok(heading.textContent, "test heading1");

  cleanup();

  await render(() => <Header title="test heading2" />);

  heading = screen.getByRole("heading", { level: 1 });

  assert.ok(isInDom(heading));
  assert.equal(heading.textContent, "test heading2");
});

test.run();
