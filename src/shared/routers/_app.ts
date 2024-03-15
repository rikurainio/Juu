import { publicProcedure, router } from "@src/trpc";
import { shell } from "electron";
import pkg from "../../../package.json";
import { userRouter } from "./user";
import { windowRouter } from "./window";

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
