type Status = undefined | "loading" | "success" | "error";

type LoadableState<TData> =
  | { type: "not_asked" }
  | { type: "loading" }
  | { type: "loaded"; data: TData }
  | { type: "error"; error: Error };

export type { Status, LoadableState };
