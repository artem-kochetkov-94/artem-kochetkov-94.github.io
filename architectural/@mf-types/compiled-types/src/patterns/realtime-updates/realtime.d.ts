/**
 * Три способа для клиента узнавать об изменениях на сервере — разница в
 * том, КТО и КОГДА инициирует передачу:
 *  - Polling — клиент сам спрашивает каждые N секунд, есть ли что-то новое
 *    (в большинстве случаев ответ — «нет»);
 *  - Long Polling — клиент спрашивает один раз, но сервер не отвечает
 *    сразу, а держит соединение открытым, пока не появятся данные;
 *  - Streaming — одно долгоживущее соединение, сервер сам решает, когда
 *    что-то прислать, без повторных запросов вообще.
 */
export type RealtimeMode = "polling" | "long-polling" | "streaming";
export declare const REALTIME_MODES: {
    id: RealtimeMode;
    label: string;
    hint: string;
}[];
export type RealtimeLegKind = "request" | "response";
export interface RealtimeStep {
    id: number;
    label: string;
    leg: {
        kind: RealtimeLegKind;
    } | null;
    waiting: boolean;
    description: string;
}
export declare function getRealtimeSteps(mode: RealtimeMode): RealtimeStep[];
