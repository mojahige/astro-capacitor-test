import { test } from "uvu";
import * as assert from "uvu/assert";
import * as sinon from "sinon";
import { cleanup, screen, render, fireEvent } from "solid-testing-library";
import { isInDom } from "~/helper/test";
import { Button } from ".";

test.after.each(cleanup);

test("render button element by default", async () => {
  await render(() => <Button />);

  const button = await screen.findByRole("button");

  assert.ok(isInDom(button));
});

test("render the button element", async () => {
  render(() => <Button as="button" />);

  const button = await screen.findByRole("button");

  assert.ok(isInDom(button));
});

test("render the a element", async () => {
  render(() => <Button as="a" href="#" />);

  const anchor = await screen.findByRole("link");

  assert.ok(isInDom(anchor));
});

test("onClick", async () => {
  const spy = sinon.spy();

  render(() => <Button onClick={spy} />);

  const button = await screen.findByRole("button");

  fireEvent.click(button);

  assert.equal(spy.callCount, 1);
});

test.run();
