import { A } from '../nitro/nitro.mjs';
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
import '@tanstack/start-client-core';
import '@tanstack/react-router';
import 'react/jsx-runtime';
import '@tanstack/react-router-devtools';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const r = A("/api/demo-names")({ GET: async ({ request: o }) => new Response(JSON.stringify(["Alice", "Bob", "Charlie"]), { headers: { "Content-Type": "application/json" } }) });

export { r as APIRoute };
//# sourceMappingURL=api.demo-names.mjs.map
