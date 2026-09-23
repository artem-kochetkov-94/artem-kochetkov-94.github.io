/**
 * Три способа выкатить новую версию так, чтобы не положить продакшен.
 * Разница — в том, ЧТО происходит с трафиком, пока обновление идёт:
 *  - Rolling — заменяем инстансы по одному, router всегда шлёт трафик на
 *    ВСЕ живые инстансы сразу (и старые, и уже обновлённые).
 *  - Blue/Green — держим ДВА полных комплекта (старый и новый), router
 *    переключается на новый комплект одномоментно, целиком.
 *  - Canary — router постепенно переносит ПРОЦЕНТ трафика на новую версию,
 *    остальное продолжает идти на старую.
 */
export type ReleaseStrategyId = "rolling" | "blue-green" | "canary";
export type InstanceRole = "old" | "new";
export type InstanceTraffic = "live" | "idle" | "hidden";
export interface InstanceState {
    id: string;
    role: InstanceRole;
    traffic: InstanceTraffic;
}
export interface ReleaseStep {
    id: number;
    label: string;
    instances: InstanceState[];
    /** Подпись у стрелки router→инстанс (используется в Canary: "95%", "5%"…). */
    trafficLabels?: Record<string, string>;
    description: string;
}
export interface ReleaseStrategyDef {
    id: ReleaseStrategyId;
    label: string;
    hint: string;
    steps: ReleaseStep[];
}
export declare const RELEASE_STRATEGIES: ReleaseStrategyDef[];
export declare function getReleaseStrategy(id: ReleaseStrategyId): ReleaseStrategyDef;
