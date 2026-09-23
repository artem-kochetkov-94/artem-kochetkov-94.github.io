export type SearchMode = "exact" | "lower" | "upper";
/** Один «снимок» состояния поиска — кадр визуализации. */
export interface BinarySearchStep {
    /** Режим, в котором снят кадр (влияет на трактовку границ). */
    mode: SearchMode;
    /** Левая граница текущего диапазона. */
    low: number;
    /** Правая граница: включительно для exact, исключительно для lower/upper. */
    high: number;
    /** Проверяемая середина (или `null` на старте/в финале). */
    mid: number | null;
    /** Подсветка середины: точное совпадение или обычный шаг сужения. */
    highlight: "eq" | "scan" | null;
    /** Индекс точного совпадения (только режим exact). */
    found: number | null;
    /** Найденная граница 0…n (только режимы lower/upper, на финале). */
    answer: number | null;
    /** Человекочитаемое пояснение шага. */
    description: string;
    /** `true` на финальном кадре. */
    done: boolean;
}
/** Прогоняет выбранный режим и возвращает ПОЛНУЮ историю шагов. */
export declare function binarySearchTrace(nums: number[], target: number, mode: SearchMode): BinarySearchStep[];
