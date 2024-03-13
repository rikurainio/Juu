import { Context } from "@src/shared/context";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<Context>().create({
  isServer: true,
});

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
