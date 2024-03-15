import { QueryClient } from "@tanstack/react-query";
import { createTRPCReact } from "@trpc/react-query";
import { ipcLink } from "electron-trpc/renderer";
import type { AppRouter } from "./routers/_app";

const t = createTRPCReact<AppRouter>();

// configure the tanstack/query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // allows queries and mutations to run without a network connection
      // don't change this at a global level
      // any procedure that will need network access can be configured locally
      networkMode: "always",
      // keeps the cache permanently , if your app is going to be a mostly
      // online application you can remove this config option , but for offline first apps ,
      // this gives you the benefit of a cache , as well as the performance boost of not having to
      // request the same data all the time
      cacheTime: Number.POSITIVE_INFINITY,
    },
    mutations: {
      networkMode: "always",
      cacheTime: Number.POSITIVE_INFINITY,
    },
  },
});

export const trpcClient = t.createClient({
  // expose the custom ipcLink provided by electron-trpc
  links: [ipcLink()],
});

export default t;
