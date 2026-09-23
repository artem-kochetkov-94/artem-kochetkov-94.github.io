/** Что произошло на шаге — задаёт подсветку и подпись. */
export type TempAction = "init" | "resolve" | "push" | "final";
/** Один «снимок» состояния — кадр визуализации. */
export interface TempStep {
    /** Сканируемый индекс дня (или `null` на init/финале). */
    pos: number | null;
    /** Индексы дней на монотонном стеке (вершина — последний элемент). */
    stack: number[];
    /** Ответы, посчитанные к этому шагу (`null` — ещё не известен). */
    answer: (number | null)[];
    /** Индекс дня, который ИМЕННО сейчас закрыли (для вспышки), иначе `null`. */
    resolved: number | null;
    /** Тип шага. */
    action: TempAction;
    /** Человекочитаемое пояснение шага. */
    description: string;
    /** `true` на финальном кадре. */
    done: boolean;
}
/** Прогоняет алгоритм и возвращает ПОЛНУЮ историю шагов. */
export declare function dailyTemperaturesTrace(temps: number[]): TempStep[];
