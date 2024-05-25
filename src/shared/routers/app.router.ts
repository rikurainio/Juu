import pkg from "../../../package.json";
import { publicProcedure, router } from "@src/trpc";
import { windowRouter } from "./window.router";
import { userRouter } from "./user.router";
import { shell } from "electron";

export const appRouter = router({
  window: windowRouter,
  user: userRouter,
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
  gh: publicProcedure.mutation(async () => {
    shell.openExternal("https://github.com/rikurainio/juu");
  }),
});

export type AppRouter = typeof appRouter;
