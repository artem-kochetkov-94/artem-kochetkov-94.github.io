import type { RealtimeLegKind } from "./realtime";
export declare function RealtimeDiagram({ leg, waiting, eventKey, }: {
    leg: {
        kind: RealtimeLegKind;
    } | null;
    waiting: boolean;
    eventKey: string;
}): import("react").JSX.Element;
