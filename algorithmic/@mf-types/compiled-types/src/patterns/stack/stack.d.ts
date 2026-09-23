/** Что произошло на шаге — задаёт подсветку и подпись. */
export type StackAction = "init" | "push" | "pop" | "mark" | "skip" | "sweep" | "final";
/** Один «снимок» состояния разбора — кадр визуализации. */
export interface StackStep {
    /** Сканируемый индекс строки (или `null` на init/sweep/финале). */
    pos: number | null;
    /** Индексы «(» на стеке В ЭТОТ момент (вершина — последний элемент). */
    stack: number[];
    /** Индексы, помеченные на удаление к этому шагу. */
    removed: number[];
    /** Тип шага. */
    action: StackAction;
    /** Человекочитаемое пояснение шага. */
    description: string;
    /** Итоговая строка (только на финальном кадре, иначе `null`). */
    result: string | null;
    /** `true` на финальном кадре. */
    done: boolean;
}
/** Прогоняет алгоритм и возвращает ПОЛНУЮ историю шагов. */
export declare function minRemoveTrace(s: string): StackStep[];
