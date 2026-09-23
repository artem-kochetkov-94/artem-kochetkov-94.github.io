/**
 * CAP-теорема: в любой распределённой системе можно обеспечить не более
 * двух из трёх свойств — Consistency, Availability, Partition tolerance.
 * На практике P выбирать не приходится: сеть рвётся сама по себе, вопрос
 * не "хотим ли мы устойчивость к разделению", а "что делать, когда оно
 * случилось". Поэтому реальный выбор — не из трёх букв, а из двух путей
 * ПОСЛЕ того, как связь между узлами пропала:
 *  - CP — узел без связи с большинством отказывается отвечать, лишь бы не
 *    отдать устаревшие данные (жертвуем доступностью);
 *  - AP — узел продолжает отвечать тем, что у него есть, даже если это
 *    уже не совпадает с тем, что происходит на другой стороне разрыва
 *    (жертвуем согласованностью).
 */
export type CapMode = "CP" | "AP";
export interface CapState {
    partitioned: boolean;
    mode: CapMode;
    nodeAValue: number;
    nodeBValue: number;
}
export declare const INITIAL_VALUE = 100500;
export declare function initialCapState(): CapState;
/**
 * Запись всегда идёт в Node A. Если связь есть — она СРАЗУ видна на Node B
 * (для наглядности демо не моделирует лаг синхронной репликации отдельно).
 * Если связи нет — Node A уезжает вперёд, Node B остаётся при своём.
 */
export declare function writeToNodeA(state: CapState): CapState;
export interface ReadResult {
    ok: boolean;
    value?: number;
    stale: boolean;
    message: string;
}
/** Чтение всегда идёт с Node B — узла, который может оказаться отрезанным. */
export declare function readFromNodeB(state: CapState): ReadResult;
export declare function togglePartition(state: CapState): CapState;
