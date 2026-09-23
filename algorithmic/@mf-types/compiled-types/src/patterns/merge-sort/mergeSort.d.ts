export type MergePhase = "start" | "split" | "compare" | "copy" | "merged" | "done";
/** Один «снимок» состояния сортировки — кадр визуализации. */
export interface MergeSortStep {
    /** Состояние всего массива на этот момент. */
    array: number[];
    /** Границы текущего отрезка: полуинтервал [lo, hi). */
    lo: number;
    mid: number;
    hi: number;
    /** Фаза шага. */
    phase: MergePhase;
    /** Глубина рекурсии (0 — весь массив) — для отступа/оттенка. */
    depth: number;
    /** Левая половина слияния (значения), null вне слияния. */
    left: number[] | null;
    /** Правая половина слияния (значения), null вне слияния. */
    right: number[] | null;
    /** Указатель в левой половине. */
    i: number | null;
    /** Указатель в правой половине. */
    j: number | null;
    /** Уже слитые значения (длина = сколько записано в результат). */
    result: number[] | null;
    /** Какая сторона победила в сравнении/копировании: для подсветки. */
    picked: "left" | "right" | null;
    /** Человекочитаемое пояснение шага. */
    description: string;
    /** `true` на финальном кадре. */
    done: boolean;
}
/** Прогоняет сортировку слиянием и возвращает ПОЛНУЮ историю шагов. */
export declare function mergeSortTrace(input: number[]): MergeSortStep[];
