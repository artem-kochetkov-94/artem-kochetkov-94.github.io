/**
 * Три способа не дать одному сбойному участку положить всю систему:
 *  - Retries + Backoff — повторяем упавший запрос, но не мгновенно и не
 *    бесконечно (и только если операция идемпотентна — иначе повтор
 *    натворит бед, например, спишет деньги дважды);
 *  - Backpressure — что делать, если один сервис шлёт запросов больше,
 *    чем следующий успевает обработать;
 *  - Graceful Degradation / Fallback — под нагрузкой или при сбое
 *    отключаем необязательное (Degradation) или подменяем ответ заглушкой
 *    (Fallback), лишь бы не упасть целиком.
 */
export type RetryLegKind = "request" | "error" | "success";
export interface RetryStep {
    id: number;
    label: string;
    leg: {
        kind: RetryLegKind;
    } | null;
    waitMs: number | null;
    description: string;
}
export declare const RETRY_STEPS: RetryStep[];
export interface BackpressureStep {
    id: number;
    label: string;
    incomingRate: number;
    processingRate: number;
    backlog: number;
    description: string;
}
export declare const BACKPRESSURE_STEPS: BackpressureStep[];
export interface DegradationService {
    id: string;
    label: string;
    critical: boolean;
}
export declare const DEGRADATION_SERVICES: DegradationService[];
export type RecommendationHealth = "healthy" | "down";
