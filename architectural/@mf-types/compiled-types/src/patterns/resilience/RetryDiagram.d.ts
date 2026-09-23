import type { RetryLegKind } from "./resilience";
export declare function RetryDiagram({ leg, eventKey, }: {
    leg: {
        kind: RetryLegKind;
    } | null;
    eventKey: string;
}): import("react").JSX.Element;
