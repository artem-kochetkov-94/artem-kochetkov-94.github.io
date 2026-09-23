import type { Interval } from "./intervals";
/** Один собранный «остров»: его границы и id впитанных в него встреч. */
export interface MergedIsland {
    start: number;
    end: number;
    /** id исходных отрезков, слитых в этот остров (для подсветки). */
    sourceIds: number[];
}
/** Один «снимок» состояния слияния — всё, что нужно UI для отрисовки кадра. */
export interface MergeStep {
    /** Индекс текущего отрезка в порядке сортировки (−1 — стартовый кадр). */
    cursor: number;
    /** id отрезка, который рассматриваем (для акцента). */
    intervalId: number | null;
    /** Снимок уже собранных островов. */
    merged: MergedIsland[];
    /** Что сделали на шаге: расширили остров или начали новый. */
    action: "init" | "extend" | "push";
    /** Человекочитаемое пояснение шага. */
    description: string;
    /** `true` на финальном кадре. */
    done: boolean;
}
/**
 * Прогоняет слияние и возвращает ПОЛНУЮ историю шагов.
 * Чистая функция без React: трейсер для плеера.
 */
export declare function mergeIntervalsTrace(intervals: Interval[]): MergeStep[];
/** Порядок отрезков после сортировки по началу (для отрисовки верхней ленты). */
export declare function sortByStart(intervals: Interval[]): Interval[];
