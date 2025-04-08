import { jsx, jsxs } from 'react/jsx-runtime';
import { useRouter } from '@tanstack/react-router';
import { T, a as ae } from '../nitro/nitro.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import '@tanstack/react-router-devtools';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const i = ae("src_routes_demo_start_server-funcs_tsx--updateCount_createServerFn_handler", "/_server"), c = createServerFn({ method: "POST" }).validator((t) => t).handler(i), R = function() {
  const e = useRouter(), r = T.useLoaderData();
  return jsx("div", { className: "p-4", children: jsxs("button", { type: "button", onClick: () => {
    c({ data: 1 }).then(() => {
      e.invalidate();
    });
  }, className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: ["Add 1 to ", r, "?"] }) });
};

export { R as component };
//# sourceMappingURL=demo.start.server-funcs-DzEu2-YU.mjs.map
