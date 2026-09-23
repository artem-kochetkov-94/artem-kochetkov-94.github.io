/**
 * Балансировщик нагрузки: три стратегии выбора инстанса для запроса.
 * Логика полностью отделена от UI — на вход список инстансов и запросов,
 * на выход трасса событий (кто когда пришёл/ушёл), которую уже рисует Demo.
 */
export interface LbInstance {
    /** Уникальный id инстанса. */
    id: string;
    /** Название для отображения, напр. "Instance #1". */
    label: string;
    /** Вес — используется только Weighted Round Robin. */
    weight: number;
}
export interface LbRequestDef {
    /** Порядковый номер запроса (для отображения). */
    id: number;
    /** Условный "тик" времени, на котором запрос приходит. */
    arrivalTick: number;
    /** Сколько тиков запрос держит соединение открытым (имитация обработки). */
    duration: number;
}
export type LbStrategyId = "round-robin" | "weighted-round-robin" | "least-connections";
export declare const LB_STRATEGIES: {
    id: LbStrategyId;
    label: string;
    hint: string;
}[];
/** Один кадр симуляции: запрос либо пришёл, либо завершился. */
export interface LbStep {
    kind: "arrive" | "finish";
    tick: number;
    requestId: number;
    instanceId: string;
    /** Снимок активных соединений по всем инстансам ПОСЛЕ этого события. */
    connections: Record<string, number>;
    description: string;
}
/**
 * Прогоняет все запросы через выбранную стратегию как дискретное
 * событийное моделирование: на каждом тике сначала освобождаются
 * соединения от завершившихся запросов, потом распределяются новые —
 * это гарантирует, что Least Connections видит актуальную нагрузку.
 */
export declare function simulateLoadBalancing(strategyId: LbStrategyId, instances: LbInstance[], requests: LbRequestDef[]): LbStep[];
/** Три инстанса с разными весами — веса заметны только в Weighted RR. */
export declare const DEFAULT_INSTANCES: LbInstance[];
/**
 * Таймлайн запросов: длительности подобраны так, чтобы было видно разницу
 * подходов — часть запросов "тяжёлые" (держат соединение дольше), и на
 * Round Robin / Weighted RR это может перегрузить один инстанс, пока
 * Least Connections уводит новые запросы от занятого.
 */
export declare const DEFAULT_REQUESTS: LbRequestDef[];
