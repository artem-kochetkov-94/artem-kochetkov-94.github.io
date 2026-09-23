/**
 * Распределённый трейсинг: один запрос проходит через несколько сервисов,
 * каждый "спан" — операция с началом и длительностью, вложенная в спан
 * родителя. Главная польза трейса — не в том, что он показывает путь
 * запроса (это умеют и логи), а в том, что он показывает ВРЕМЯ каждого
 * шага относительно других, включая параллельные — и сразу видно, кто из
 * параллельных вызовов реально определяет итоговую задержку.
 */
export interface TraceSpan {
    id: string;
    parentId: string | null;
    service: string;
    operation: string;
    startMs: number;
    durationMs: number;
}
export declare const SERVICE_LABELS: Record<string, string>;
export declare const SERVICE_TONE: Record<string, "indigo" | "sky" | "amber" | "rose">;
/**
 * Gateway параллельно дёргает Auth и Orders. Auth укладывается в 40мс — не
 * узкое место. А вот Orders сам идёт в БД, и именно этот вложенный запрос
 * (25→155мс) оказывается самым долгим звеном всей цепочки в 180мс.
 */
export declare const TRACE_SPANS: TraceSpan[];
export declare const TRACE_TOTAL_MS: number;
/** Глубина вложенности спана — для отступа строки в waterfall. */
export declare function spanDepth(span: TraceSpan): number;
export interface TraceStep {
    id: number;
    spanId: string;
    description: string;
}
export declare const TRACE_STEPS: TraceStep[];
export declare function getSpan(spanId: string): TraceSpan;
