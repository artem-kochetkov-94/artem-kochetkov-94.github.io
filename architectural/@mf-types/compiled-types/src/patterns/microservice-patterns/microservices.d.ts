/**
 * Четыре способа организовать общение между сервисами, когда одного
 * запроса клиента недостаточно — ответ собирается из нескольких мест:
 *  - Агрегатор — один сервис дёргает несколько других ПАРАЛЛЕЛЬНО и сам
 *    склеивает ответ;
 *  - Цепочка — сервисы вызывают друг друга ПОСЛЕДОВАТЕЛЬНО, каждый решает
 *    свою часть и передаёт эстафету дальше;
 *  - Событийно-ориентированная — сервисы не вызывают друг друга напрямую,
 *    а обмениваются событиями через шину/очередь (три разновидности: кто
 *    и что публикует — от «просто уведомил» до «сам решаю, что делать»);
 *  - Отложенное выполнение задач — синхронный вызов превращается в
 *    постановку в очередь, чтобы не держать клиента, пока идёт долгая
 *    обработка.
 */
export interface MsNode {
    id: string;
    label: string;
}
export type MsLegKind = "write" | "read" | "request" | "response";
export interface MsLeg {
    from: string;
    to: string;
    kind: MsLegKind;
    /** В каких "юнитах" (длительностях перегона) стартует импульс — 0 = сразу, вместе с другими. */
    delayUnits: number;
}
export interface MsStep {
    id: number;
    label: string;
    legs: MsLeg[];
    description: string;
}
export interface MsScenario {
    id: string;
    label: string;
    hint: string;
    nodes: MsNode[];
    pos: Record<string, {
        x: number;
        y: number;
    }>;
    edges: [string, string][];
    steps: MsStep[];
}
export declare const aggregatorScenario: MsScenario;
export declare const chainScenario: MsScenario;
export type EventDrivenMode = "notification" | "state-transfer" | "collaboration";
export declare const EVENT_MODES: {
    id: EventDrivenMode;
    label: string;
    hint: string;
}[];
export declare function getEventSteps(mode: EventDrivenMode): MsStep[];
export declare const eventDrivenScenario: MsScenario;
export type DeferredMode = "sync" | "async";
export declare const DEFERRED_MODES: {
    id: DeferredMode;
    label: string;
    hint: string;
}[];
export declare function getDeferredSteps(mode: DeferredMode): MsStep[];
export declare const deferredScenario: MsScenario;
