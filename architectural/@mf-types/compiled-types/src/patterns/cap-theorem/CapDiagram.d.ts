import type { CapState } from "./cap";
export declare function CapDiagram({ state, flashA, flashB, bTone, }: {
    state: CapState;
    flashA: string;
    flashB: string;
    /** "up" (обычный ответ), "stale" (устарел), "down" (недоступен) — только для Node B. */
    bTone: "up" | "stale" | "down";
}): import("react").JSX.Element;
