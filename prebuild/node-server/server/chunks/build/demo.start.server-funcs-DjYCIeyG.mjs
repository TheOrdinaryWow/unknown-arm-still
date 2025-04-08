import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import * as r from 'node:fs';
import { o } from './index-ujMS-7Qz.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'tiny-invariant';

const m = () => import('./demo.start.server-funcs-B_F0hXIK.mjs'), u = "count.txt";
async function p() {
  return parseInt(await r.promises.readFile(u, "utf-8").catch(() => "0"));
}
const i = o("src_routes_demo_start_server-funcs_tsx--getCount_createServerFn_handler", "/_server", (t, r) => e.__executeServer(t, r)), e = createServerFn({ method: "GET" }).handler(i, () => p()), _ = createFileRoute("/demo/start/server-funcs")({ component: lazyRouteComponent(m, "component", () => _.ssr), loader: async () => await e() });

export { i as getCount_createServerFn_handler };
//# sourceMappingURL=demo.start.server-funcs-DjYCIeyG.mjs.map
