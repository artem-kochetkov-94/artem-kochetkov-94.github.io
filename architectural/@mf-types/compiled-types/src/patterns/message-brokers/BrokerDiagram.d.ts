import type { BrokerNode, BrokerStep } from "./brokers";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export declare const PACKET_LEG_DURATION = 1.1;
export declare function BrokerDiagram({ nodes, step, }: {
    nodes: BrokerNode[];
    step: BrokerStep;
}): import("react").JSX.Element;
