/**
 * Кэширование: два способа взаимодействия сервиса с кэшем и базой —
 * Cache-Aside (сервис сам координирует оба похода) и Cache-Through
 * (сервис ходит только в кэш, а кэш сам умеет читать/писать в БД).
 * Разница видна не в результате, а в МАРШРУТЕ запроса — это и рисует Demo.
 * Плюс LRU-вытеснение: кэш ограничен по размеру.
 */
export type CacheStrategyId = "cache-aside" | "cache-through";
export declare const CACHE_STRATEGIES: {
    id: CacheStrategyId;
    label: string;
    hint: string;
}[];
/** Узлы диаграммы, между которыми "путешествует" запрос. */
export type CacheNodeId = "service" | "cache" | "db";
export interface CacheOpDef {
    id: number;
    op: "get" | "set";
    key: string;
    value?: string;
}
/** Ёмкость кэша в демо — специально маленькая, чтобы дожить до вытеснения. */
export declare const CACHE_CAPACITY = 3;
export declare const DEFAULT_CACHE_TIMELINE: CacheOpDef[];
/**
 * Один "перегон" маршрута:
 *  - read     — полноценный круговой обмен: запрос летит туда, ответ с
 *               данными сразу же летит обратно (адресат уже знает ответ).
 *  - write    — данные едут только вперёд, отвечать нечем.
 *  - request  — вопрос летит вперёд, но ответа СРАЗУ не будет: адресат сам
 *               ещё не знает ответа (например, кэш при промахе).
 *  - response — ответ с данными едет вперёд САМ ПО СЕБЕ, без парного запроса
 *               в этом же перегоне, — доставка результата, добытого раньше
 *               через другой узел (например, кэш относит сервису то, что
 *               перед этим получил из БД).
 */
export interface CacheLeg {
    from: CacheNodeId;
    to: CacheNodeId;
    kind: "read" | "write" | "request" | "response";
}
/** Один кадр симуляции: один операция (GET/SET) целиком, с маршрутом. */
export interface CacheStep {
    id: number;
    op: "get" | "set";
    key: string;
    hit: boolean;
    /** Маршрут запроса как последовательность перегонов service/cache/db. */
    legs: CacheLeg[];
    /** Содержимое кэша ПОСЛЕ операции, от недавно использованного к давнему. */
    cacheEntries: string[];
    evictedKey: string | null;
    description: string;
}
/**
 * Прогоняет таймлайн операций через выбранную стратегию.
 * "База данных" и "кэш" — просто Map в замыкании; кэш хранит порядок
 * использования (MRU в начале списка) для LRU-вытеснения при переполнении.
 */
export declare function simulateCaching(strategyId: CacheStrategyId, ops: CacheOpDef[], capacity?: number): CacheStep[];
