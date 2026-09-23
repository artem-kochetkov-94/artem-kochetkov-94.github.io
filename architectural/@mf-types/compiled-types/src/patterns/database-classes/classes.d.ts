/**
 * Классы баз данных — не альтернатива "видам" (реляционная/документная/
 * графовая/…), а ДВЕ ОРТОГОНАЛЬНЫЕ оси классификации поверх них: какая
 * нагрузка (OLTP/OLAP/HTAP) и где физически живут данные (Persistent/
 * In-memory). Redis, например, — in-memory, но при этом обслуживает OLTP-
 * нагрузку; PostgreSQL — persistent OLTP; ClickHouse — persistent OLAP.
 * Формат — не диаграмма, а классификация: сценарий → к какому классу он
 * относится и почему.
 */
export type OltpAxis = "oltp" | "olap" | "htap";
export declare const OLTP_OPTIONS: {
    id: OltpAxis;
    label: string;
}[];
export interface QuizItem<T extends string> {
    id: number;
    prompt: string;
    answer: T;
    explanation: string;
}
export declare const OLTP_QUIZ: QuizItem<OltpAxis>[];
export type DurabilityAxis = "persistent" | "in-memory";
export declare const DURABILITY_OPTIONS: {
    id: DurabilityAxis;
    label: string;
}[];
export declare const DURABILITY_QUIZ: QuizItem<DurabilityAxis>[];
