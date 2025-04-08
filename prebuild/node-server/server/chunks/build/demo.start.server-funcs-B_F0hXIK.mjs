import { jsx, jsxs } from 'react/jsx-runtime';
import * as r from 'node:fs';
import { useRouter, createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start-client-core';
import { o } from './index-ujMS-7Qz.mjs';
import 'tiny-invariant';

const v = () => Promise.resolve().then(() => F), f = "count.txt";
async function h() {
  return parseInt(await r.promises.readFile(f, "utf-8").catch(() => "0"));
}
const C = o("src_routes_demo_start_server-funcs_tsx--getCount_createServerFn_handler", "/_server", (e, t) => a.__executeServer(e, t)), a = createServerFn({ method: "GET" }).handler(C, () => h()), s = createFileRoute("/demo/start/server-funcs")({ component: lazyRouteComponent(v, "component", () => s.ssr), loader: async () => await a() }), c = "count.txt";
async function S() {
  return parseInt(await r.promises.readFile(c, "utf-8").catch(() => "0"));
}
const x = o("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler", "/_server", (e, t) => u.__executeServer(e, t)), u = createServerFn({ method: "POST" }).validator((e) => e).handler(x, async ({ data: e }) => {
  const t = await S();
  await r.promises.writeFile(c, `${t + e}`);
}), b = function() {
  const t = useRouter(), i = s.useLoaderData();
  return jsx("div", { className: "p-4", children: jsxs("button", { type: "button", onClick: () => {
    u({ data: 1 }).then(() => {
      t.invalidate();
    });
  }, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: ["Add 1 to ", i, "?"] }) });
}, F = Object.freeze(Object.defineProperty({ __proto__: null, component: b }, Symbol.toStringTag, { value: "Module" }));

export { b as component };
//# sourceMappingURL=demo.start.server-funcs-B_F0hXIK.mjs.map
