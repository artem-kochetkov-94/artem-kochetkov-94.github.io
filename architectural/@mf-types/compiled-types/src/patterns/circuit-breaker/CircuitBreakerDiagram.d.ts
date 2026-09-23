import type { CircuitStep } from "./circuitBreaker";
/** Сколько секунд длится импульс на ОДНОМ перегоне — используется и Demo.tsx. */
export declare const PACKET_LEG_DURATION = 1.1;
export declare function CircuitBreakerDiagram({ step }: {
    step: CircuitStep;
}): import("react").JSX.Element;
