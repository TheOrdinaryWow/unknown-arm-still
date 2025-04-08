import * as r from 'node:fs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const a = "count.txt";
async function s() {
  return parseInt(await r.promises.readFile(a, "utf-8").catch(() => "0"));
}
const c = o("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler", "/_server", (e, r) => u.__executeServer(e, r)), u = createServerFn({ method: "POST" }).validator((e) => e).handler(c, async ({ data: e }) => {
  const r$1 = await s();
  await r.promises.writeFile(a, `${r$1 + e}`);
});

export { c as updateCount_createServerFn_handler };
//# sourceMappingURL=demo.start.server-funcs-BkAMlEQn.mjs.map
