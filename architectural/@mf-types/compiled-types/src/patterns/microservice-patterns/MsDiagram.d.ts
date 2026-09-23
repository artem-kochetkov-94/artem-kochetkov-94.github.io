import type { MsNode, MsStep } from "./microservices";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export declare const PACKET_LEG_DURATION = 1;
export declare function MsDiagram({ nodes, pos, edges, step, eventKey, }: {
    nodes: MsNode[];
    pos: Record<string, {
        x: number;
        y: number;
    }>;
    edges: [string, string][];
    step: MsStep;
    eventKey: string;
}): import("react").JSX.Element;
