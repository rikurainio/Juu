import type React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Layout from "../components/layout";

/** This is not needed but it's just one simple way to add margin to all pages for example */
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="m-4 w-full h-full overflow-y-scroll no-scrollbar">
    {children}
  </div>
);

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <div className="flex border-t border-border h-full w-full">
        <div className="px-3 gap-3 flex flex-col w-[10rem] border-r border-border">
          <div className="flex flex-col w-28 mt-3">
            <div className="flex flex-col gap-2 pl-1">
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>
              <Link to="/route1" className="[&.active]:font-bold">
                Route1
              </Link>
              <Link to="/route2" className="[&.active]:font-bold">
                Route2
              </Link>
            </div>
          </div>
        </div>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </div>
      <TanStackRouterDevtools />
    </Layout>
  ),
});
