import type { ReplicationStep, TopologyDef } from "./topologies";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export declare const PACKET_LEG_DURATION = 1.1;
export declare function ReplicationDiagram({ topology, step, }: {
    topology: TopologyDef;
    step: ReplicationStep;
}): import("react").JSX.Element;
