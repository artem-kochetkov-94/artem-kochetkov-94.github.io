import type { SyncStep } from "./consistency";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export declare const PACKET_LEG_DURATION = 1.1;
export declare function SyncDiagram({ step }: {
    step: SyncStep;
}): import("react").JSX.Element;
