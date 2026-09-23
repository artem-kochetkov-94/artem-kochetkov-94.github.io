import type { TxNode, TxStep } from "./transactions";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export declare const PACKET_LEG_DURATION = 1;
export declare function TxDiagram({ nodes, pos, edges, step, eventKey, }: {
    nodes: TxNode[];
    pos: Record<string, {
        x: number;
        y: number;
    }>;
    edges: [string, string][];
    step: TxStep;
    eventKey: string;
}): import("react").JSX.Element;
