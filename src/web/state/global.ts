import { observable } from "@legendapp/state";
import { persistObservable } from "@legendapp/state/persist";
import { GlobalState } from "@shared/types";

export const globalState$ = observable<GlobalState>({
  colorMode: "dark",
});

persistObservable(globalState$, {
  local: "global_state",
});
