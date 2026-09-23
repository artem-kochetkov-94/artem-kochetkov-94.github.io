import type { Cell, PrefixStep, Rect } from "./prefixSum";
/**
 * Чистая отрисовка ОДНОГО кадра. Слева — исходная матрица, справа — таблица
 * префиксов P. На фазе build подсвечиваются текущая клетка P и её слагаемые;
 * на фазе query — запрашиваемый прямоугольник и активный член формулы.
 * Матрица кликабельна (когда передан `onCellClick`) — так выбирают прямоугольник.
 */
export declare function MatrixVisualizer({ matrix, step, selection, pending, onCellClick, }: {
    matrix: number[][];
    step: PrefixStep;
    selection: Rect | null;
    pending: Cell | null;
    onCellClick?: (row: number, col: number) => void;
}): import("react").JSX.Element;
