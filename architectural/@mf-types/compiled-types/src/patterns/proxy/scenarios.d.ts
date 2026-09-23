/**
 * Reverse / Forward Proxy — в отличие от балансировки и кэширования, тут нет
 * алгоритма выбора: разница между режимами чисто топологическая — на чьей
 * стороне стоит proxy и, соответственно, кого он скрывает. Поэтому вместо
 * симуляции — два готовых сценария запросов, которые эту разницу показывают.
 */
export type ProxyMode = "forward" | "reverse";
export declare const PROXY_MODES: {
    id: ProxyMode;
    label: string;
    hint: string;
}[];
/** Подпись правого узла на диаграмме — у разных режимов разный смысл. */
export declare const PROXY_TARGET_LABEL: Record<ProxyMode, string>;
export type ProxyNodeId = "client" | "proxy" | "target";
export interface ProxyStep {
    id: number;
    /** Что за запрос — показывается прямо над диаграммой. */
    label: string;
    /** Маршрут запроса. Если он короче полного пути — значит, дальше не пошли. */
    legs: [ProxyNodeId, ProxyNodeId][];
    /** true — reverse proxy ответил из своего кэша, до backend не дошли. */
    cached: boolean;
    description: string;
}
export declare function getProxySteps(mode: ProxyMode): ProxyStep[];
