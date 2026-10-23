import { test } from "node:test";
import assert from "node:assert/strict";
import { modelLabel } from "../public/js/transcript.js";

test("model ids are shown the way people say them", () => {
  assert.equal(modelLabel("claude-sonnet-5-5"), "Claude Sonnet 5.5");
  assert.equal(modelLabel("claude-haiku-5-5"), "Claude Haiku 5.5");
  assert.equal(modelLabel("something-else"), "something-else");
});
