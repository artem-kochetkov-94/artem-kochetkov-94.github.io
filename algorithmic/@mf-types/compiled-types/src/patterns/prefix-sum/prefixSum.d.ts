/** Координата клетки в какой-либо сетке (матрице или таблице P). */
export interface Cell {
    row: number;
    col: number;
}
/** Запрос: прямоугольник матрицы (0-индексация, обе границы включительно). */
export interface Rect {
    r1: number;
    c1: number;
    r2: number;
    c2: number;
}
/** Один член формулы включений-исключений на фазе запроса. */
export interface QueryTerm {
    /** Знак: +1 добавляем, −1 вычитаем. */
    sign: 1 | -1;
    /** Клетка таблицы P, чьё значение берём. */
    prefixCell: Cell;
    /** Прямоугольник матрицы (0,0)…(row-1,col-1), который накрывает этот P. */
    covers: Rect | null;
    /** Значение P в этой клетке. */
    value: number;
}
/** Один «снимок» состояния алгоритма — кадр визуализации. */
export interface PrefixStep {
    /** Текущая фаза. */
    phase: "build" | "query";
    /** Снимок таблицы P: `null` — клетка ещё не вычислена. */
    prefix: (number | null)[][];
    /** Клетка P, которую вычисляем на этом шаге. */
    buildCell: Cell | null;
    /** Клетки-слагаемые: сверху, слева, угол (diag) и исходная клетка матрицы. */
    contributors: {
        top: Cell;
        left: Cell;
        diag: Cell;
        source: Cell;
    } | null;
    /** Запрашиваемый прямоугольник матрицы. */
    rect: Rect | null;
    /** Все члены формулы (для показа справа). */
    terms: QueryTerm[] | null;
    /** Индекс активного члена на этом шаге (−1 — итог). */
    activeTerm: number;
    /** Накопленная сумма после применения активного члена. */
    runningSum: number;
    /** Человекочитаемое пояснение шага. */
    description: string;
    /** `true` на финальном кадре. */
    done: boolean;
}
/**
 * Прогоняет приём и возвращает ПОЛНУЮ историю шагов: сначала построение
 * таблицы P, затем (если задан `rect`) разбор запроса суммы прямоугольника.
 */
export declare function tracePrefixSum(matrix: number[][], rect: Rect | null): PrefixStep[];
