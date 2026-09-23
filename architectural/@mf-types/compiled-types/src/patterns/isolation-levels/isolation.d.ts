/**
 * Уровни изоляции транзакций. Одни и те же четыре аномалии параллельного
 * доступа к данным (грязное чтение, неповторяющееся чтение, фантомное
 * чтение, потерянное обновление) — но каждый уровень изоляции закрывает
 * их постепенно, от READ UNCOMMITTED (ничего не закрыто) до SERIALIZABLE
 * (закрыто всё). Сценарии двух конкурентных транзакций T1/T2 фиксированы,
 * от уровня изоляции зависит только то, что видно на "переломном" шаге.
 */
export type IsolationLevel = "read-uncommitted" | "read-committed" | "repeatable-read" | "serializable";
export declare const ISOLATION_LEVELS: {
    id: IsolationLevel;
    label: string;
}[];
export type AnomalyId = "dirty-read" | "non-repeatable-read" | "phantom-read" | "lost-update";
export declare const ANOMALIES: {
    id: AnomalyId;
    label: string;
    hint: string;
}[];
export declare function isPrevented(anomaly: AnomalyId, level: IsolationLevel): boolean;
export type Actor = "t1" | "t2" | "system";
export interface IsolationStep {
    id: number;
    actor: Actor;
    /** Короткая SQL-подобная строка операции — показывается моноширинным шрифтом. */
    sql: string;
    /** Что T1 сейчас знает/видит — null, если этот шаг не меняет его картину мира. */
    t1View: string | null;
    /** Что T2 сейчас знает/видит — null, если этот шаг не меняет его картину мира. */
    t2View: string | null;
    /** РЕАЛЬНОЕ состояние в базе (после commit/rollback) — null, если не менялось. */
    dbState: string | null;
    /** true на самом "переломном" шаге сценария — том, где аномалия либо проявляется, либо нет. */
    reveal: boolean;
    /** true — если на этом шаге аномалия НЕ предотвращена (т.е. реально произошла). */
    anomaly: boolean;
    description: string;
}
export declare function buildIsolationScenario(anomaly: AnomalyId, level: IsolationLevel): IsolationStep[];
