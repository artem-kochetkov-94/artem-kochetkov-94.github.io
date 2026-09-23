/**
 * Топология отвечает "кто пишет". Этот паттерн — про другой вопрос: "когда
 * клиент получает ACK на запись, и что к этому моменту успело произойти на
 * реплике". Четыре режима — это четыре разных момента, в который master
 * решает "готово, можно отвечать клиенту":
 *  - sync — только после того, как реплика ПРИМЕНИЛА изменение;
 *  - async — сразу после применения у себя, не дожидаясь реплики вообще;
 *  - semisync — после того, как реплика ПОЛУЧИЛА данные (не обязательно
 *    применила);
 *  - lose-less semisync — то же самое, но данные сначала долетают до
 *    реплики, и только потом применяются в движке мастера — так при
 *    падении мастера сразу после отправки данные не теряются.
 */
export type SyncMode = "sync" | "async" | "semisync" | "loseless-semisync";
export declare const SYNC_MODES: {
    id: SyncMode;
    label: string;
    hint: string;
}[];
export type SyncLegKind = "write" | "replicate" | "ack";
export interface SyncLeg {
    from: string;
    to: string;
    kind: SyncLegKind;
}
export interface SyncStep {
    id: number;
    label: string;
    /** Пустой массив — шаг чисто внутренний (например, "применили в движке"), без анимации. */
    legs: SyncLeg[];
    description: string;
}
export declare function getSyncSteps(mode: SyncMode): SyncStep[];
export type ConsistencyModel = "strong" | "eventual" | "read-your-writes" | "monotonic-reads" | "consistent-prefix";
export declare const CONSISTENCY_OPTIONS: {
    id: ConsistencyModel;
    label: string;
}[];
export interface ConsistencyQuizItem {
    id: number;
    prompt: string;
    answer: ConsistencyModel;
    explanation: string;
}
export declare const CONSISTENCY_QUIZ: ConsistencyQuizItem[];
