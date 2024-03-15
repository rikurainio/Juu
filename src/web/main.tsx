import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { configureObservablePersistence } from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import t, { queryClient, trpcClient } from "@shared/config";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Routing
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// enable persisting of state options to
// local storage. Options for IndexedDB , SessionStorage
// end remote options are available
configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});
// attach auto tracking for legend state
// this allows components to rerender when proxy state changes
enableReactTracking({
  auto: true,
});

createRoot(document.getElementById("app") as Element).render(
  <React.StrictMode>
    <t.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </t.Provider>
  </React.StrictMode>,
);
