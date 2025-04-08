import { A } from '../nitro/nitro.mjs';

const r = A("/api/demo-names")({ GET: async ({ request: o }) => new Response(JSON.stringify(["Alice", "Bob", "Charlie"]), { headers: { "Content-Type": "application/json" } }) });

export { r as APIRoute };
//# sourceMappingURL=api.demo-names.mjs.map
