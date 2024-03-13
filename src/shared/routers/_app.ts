import pkg from "../../../package.json";
import { publicProcedure, router } from "@src/trpc";
import { windowRouter } from "./window";
import { shell } from "electron";

export const appRouter = router({
  // window controls for custom frame applications
  window: windowRouter,
  // expose the package.json version to the application
  // you can remove this if your app doesn't use the version code
  // anywhere , this is just for the template
  version: publicProcedure.query(async () => {
    return pkg.version;
  }),
  // use the electron shell to open external links
  // in this case the Github Repo for this starter
  gh: publicProcedure.mutation(async () => {
    shell.openExternal("https://github.com/rikurainio/juu");
  }),
});

export type AppRouter = typeof appRouter;
