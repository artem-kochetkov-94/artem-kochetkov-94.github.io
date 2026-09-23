/**
 * Одна бизнес-операция иногда должна изменить данные сразу в НЕСКОЛЬКИХ
 * независимых местах (базах, сервисах) — и либо это должно случиться
 * везде, либо нигде. Три способа добиться этого:
 *  - 2PC (Two-Phase Commit) — координатор сначала спрашивает "готовы?"
 *    (Prepare) у всех участников, и только если ВСЕ ответили "да", даёт
 *    команду зафиксировать (Commit); если хоть один против — Rollback
 *    у всех. Строго консистентно, но участники блокируются на время
 *    голосования.
 *  - Saga — вместо одной распределённой транзакции — цепочка ЛОКАЛЬНЫХ
 *    транзакций, каждая публикует событие, запускающее следующую. Если
 *    шаг падает — не откат, а КОМПЕНСИРУЮЩАЯ операция, отменяющая эффект
 *    уже выполненных шагов.
 *  - Transaction Outbox — решает другую, но смежную проблему: как
 *    атомарно записать в БД И опубликовать событие в очередь, если это
 *    два разных ресурса, между которыми нет общей транзакции.
 */
export type TxLegKind = "request" | "response" | "write" | "read" | "error";
export interface TxLeg {
    from: string;
    to: string;
    kind: TxLegKind;
    delayUnits: number;
}
export interface TxStep {
    id: number;
    label: string;
    legs: TxLeg[];
    description: string;
}
export interface TxNode {
    id: string;
    label: string;
}
export interface TxScenario {
    nodes: TxNode[];
    pos: Record<string, {
        x: number;
        y: number;
    }>;
    edges: [string, string][];
    steps: TxStep[];
}
export type TpcScenarioId = "success" | "prepare-fails";
export declare const TPC_SCENARIOS: {
    id: TpcScenarioId;
    label: string;
}[];
export declare function getTpcSteps(scenario: TpcScenarioId): TxStep[];
export declare const tpcScenario: TxScenario;
export type SagaScenarioId = "success" | "compensation";
export declare const SAGA_SCENARIOS: {
    id: SagaScenarioId;
    label: string;
}[];
export declare function getSagaSteps(scenario: SagaScenarioId): TxStep[];
export declare const sagaScenario: TxScenario;
export declare const OUTBOX_STEPS: TxStep[];
export declare const outboxScenario: TxScenario;
