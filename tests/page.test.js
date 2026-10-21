import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const page = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");

test("the main button sits right under the icon, before the status text", () => {
  const at = (marker) => page.indexOf(marker);
  assert.ok(at('id="orb"') < at('id="start"'), "icon, then button");
  assert.ok(at('id="start"') < at('id="status"'), "button, then status");
});

test("the page tells a new person what to say", () => {
  assert.match(page, /id="hint"[^>]*>[^<]*Hey Nion/);
});
