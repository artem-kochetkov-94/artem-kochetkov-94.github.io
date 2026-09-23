import type { LbInstance, LbStep, LbStrategyId } from "./strategies";
export declare function LoadBalancerDiagram({ strategyId, instances, step, }: {
    strategyId: LbStrategyId;
    instances: LbInstance[];
    step: LbStep;
}): import("react").JSX.Element;
